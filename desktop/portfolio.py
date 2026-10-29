#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-3.0-or-later
# Copyright (C) 2026 Pavel Šoral
"""Pavel Šoral Portfolio: the website in a native GNOME window (GTK 3 + WebKitGTK).

The page files are loaded from PORTFOLIO_WEB_ROOT (set by the snap) or, when run
from a checkout, from the repository root. Links to other websites, email
addresses and phone numbers open in the default apps. Google Drive previews
stay inside the window.
"""
import os
import sys
from urllib.parse import urlparse

# WebKitGTK's DMA-BUF renderer crashes on some GPU drivers (notably NVIDIA). Turn it off unless the
# user chose otherwise. This must happen before WebKit starts.
os.environ.setdefault("WEBKIT_DISABLE_DMABUF_RENDERER", "1")

import gi  # noqa: E402

gi.require_version("Gtk", "3.0")
gi.require_version("Gdk", "3.0")
gi.require_version("WebKit2", "4.1")
from gi.repository import Gdk, Gio, GLib, Gtk, WebKit2  # noqa: E402

APP_ID = "io.github.pavelsoral.Portfolio"
NAME = "Pavel Šoral Portfolio"
PRGNAME = "pavel-soral-portfolio"

HERE = os.path.dirname(os.path.realpath(__file__))
WEB_ROOT = os.environ.get("PORTFOLIO_WEB_ROOT") or os.path.normpath(os.path.join(HERE, ".."))
INDEX = os.path.join(WEB_ROOT, "index.html")
ICON = os.path.join(WEB_ROOT, "assets", "img", "app-icon.png")

# Header bar colors match the page's own header ("Lime Signal" palette).
HEADER_CSS = {
    "dark": "headerbar.portfolio { background: #181b18; border-bottom-color: #2a2f29; box-shadow: none; }"
            "headerbar.portfolio .title { color: #eef2ea; }",
    "light": "headerbar.portfolio { background: #ffffff; border-bottom-color: #e3e8dc; box-shadow: none; }"
             "headerbar.portfolio .title { color: #1d211b; }",
}

ALLOWED_FRAME_HOSTS = ("drive.google.com", "docs.google.com", "accounts.google.com", "www.google.com",
                       "ssl.gstatic.com", "www.gstatic.com", "youtube.com", "www.youtube.com")


class Window(Gtk.ApplicationWindow):
    def __init__(self, app):
        super().__init__(application=app, title=NAME)
        self.set_default_size(1320, 880)
        self.set_size_request(380, 560)
        if os.path.exists(ICON):
            self.set_icon_from_file(ICON)

        self.css = Gtk.CssProvider()
        Gtk.StyleContext.add_provider_for_screen(Gdk.Screen.get_default(), self.css,
                                                 Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)

        # header bar: back / forward, page title, menu
        header = Gtk.HeaderBar(show_close_button=True, title=NAME)
        header.get_style_context().add_class("portfolio")
        nav = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL)
        nav.get_style_context().add_class("linked")
        self.back = Gtk.Button.new_from_icon_name("go-previous-symbolic", Gtk.IconSize.BUTTON)
        self.back.set_tooltip_text("Back")
        self.forward = Gtk.Button.new_from_icon_name("go-next-symbolic", Gtk.IconSize.BUTTON)
        self.forward.set_tooltip_text("Forward")
        nav.add(self.back)
        nav.add(self.forward)
        header.pack_start(nav)

        menu = Gio.Menu()
        menu.append("Reload", "win.reload")
        menu.append("About Pavel Šoral Portfolio", "app.about")
        menu.append("Quit", "app.quit")
        menu_button = Gtk.MenuButton(menu_model=menu)
        menu_button.set_image(Gtk.Image.new_from_icon_name("open-menu-symbolic", Gtk.IconSize.BUTTON))
        menu_button.set_tooltip_text("Main Menu")
        header.pack_end(menu_button)
        self.set_titlebar(header)
        self.header = header

        # web view with persistent storage (theme choice is kept between launches)
        data_dir = os.path.join(GLib.get_user_data_dir(), PRGNAME)
        cache_dir = os.path.join(GLib.get_user_cache_dir(), PRGNAME)
        manager = WebKit2.WebsiteDataManager(base_data_directory=data_dir, base_cache_directory=cache_dir)
        context = WebKit2.WebContext.new_with_website_data_manager(manager)
        self.content = WebKit2.UserContentManager()
        self.content.register_script_message_handler("theme")
        self.content.connect("script-message-received::theme", self.on_theme_message)
        self.view = WebKit2.WebView(web_context=context, user_content_manager=self.content)

        settings = self.view.get_settings()
        settings.set_allow_file_access_from_file_urls(True)
        settings.set_allow_universal_access_from_file_urls(True)
        settings.set_enable_developer_extras(bool(os.environ.get("PORTFOLIO_DEBUG")))
        settings.set_enable_back_forward_navigation_gestures(True)
        settings.set_javascript_can_open_windows_automatically(False)

        self.view.set_background_color(Gdk.RGBA(0x11 / 255, 0x13 / 255, 0x11 / 255, 1))
        self.view.connect("decide-policy", self.on_decide_policy)
        self.view.connect("notify::title", self.on_title)
        self.view.connect("load-changed", lambda *_: self.update_nav())
        self.view.get_back_forward_list().connect("changed", lambda *_: self.update_nav())
        self.view.connect("context-menu", self.on_context_menu)
        self.back.connect("clicked", lambda *_: self.view.go_back())
        self.forward.connect("clicked", lambda *_: self.view.go_forward())
        self.add(self.view)

        for name, callback in (("reload", lambda *_: self.view.reload()),):
            action = Gio.SimpleAction.new(name, None)
            action.connect("activate", callback)
            self.add_action(action)

        self.apply_theme("dark")
        self.update_nav()
        self.view.load_uri(GLib.filename_to_uri(INDEX, None))
        self.show_all()

    # -------------------------------------------------------------- page → window
    def on_theme_message(self, _manager, result):
        try:
            value = result.get_js_value().to_string()
        except AttributeError:  # WebKitGTK < 2.40
            value = result.to_string()
        self.apply_theme("light" if value == "light" else "dark")

    def apply_theme(self, theme):
        Gtk.Settings.get_default().set_property("gtk-application-prefer-dark-theme", theme == "dark")
        self.css.load_from_data(HEADER_CSS[theme].encode())
        bg = (0x11, 0x13, 0x11) if theme == "dark" else (0xF6, 0xF8, 0xF2)
        self.view.set_background_color(Gdk.RGBA(bg[0] / 255, bg[1] / 255, bg[2] / 255, 1))

    def on_title(self, view, _param):
        title = view.get_title()
        self.header.set_title(title or NAME)
        self.set_title(title or NAME)

    def update_nav(self):
        self.back.set_sensitive(self.view.can_go_back())
        self.forward.set_sensitive(self.view.can_go_forward())

    # -------------------------------------------------------------- links
    def is_local(self, uri):
        return uri.startswith("file://") or uri in ("about:blank", "about:srcdoc")

    def open_external(self, uri):
        try:
            Gtk.show_uri_on_window(self, uri, Gtk.get_current_event_time())
        except GLib.Error as err:
            print(f"Could not open {uri}: {err.message}", file=sys.stderr)

    def on_decide_policy(self, _view, decision, kind):
        if kind == WebKit2.PolicyDecisionType.NEW_WINDOW_ACTION:
            # target="_blank" links: articles, landing pages, "Open in a new tab"
            uri = decision.get_navigation_action().get_request().get_uri()
            if not self.is_local(uri) or uri.lower().split("?")[0].endswith(".pdf"):
                self.open_external(uri)  # websites in the browser, PDFs in the document viewer
            decision.ignore()
            return True
        if kind == WebKit2.PolicyDecisionType.NAVIGATION_ACTION:
            action = decision.get_navigation_action()
            uri = action.get_request().get_uri()
            scheme = urlparse(uri).scheme
            if self.is_local(uri):
                return False
            if scheme in ("mailto", "tel", "sms"):
                self.open_external(uri)
                decision.ignore()
                return True
            host = urlparse(uri).hostname or ""
            if host.endswith(ALLOWED_FRAME_HOSTS):
                return False  # the built-in Google Drive preview (an iframe inside the page)
            # The page itself never leaves the app; anything else opens in the browser.
            self.open_external(uri)
            decision.ignore()
            return True
        return False

    def on_context_menu(self, _view, menu, _event, _hit):
        if os.environ.get("PORTFOLIO_DEBUG"):
            return False
        # keep link actions (copy link address), drop page-level ones like "Reload" and "View source"
        keep = {WebKit2.ContextMenuAction.COPY_LINK_TO_CLIPBOARD, WebKit2.ContextMenuAction.COPY,
                WebKit2.ContextMenuAction.COPY_IMAGE_URL_TO_CLIPBOARD, WebKit2.ContextMenuAction.SELECT_ALL}
        for item in list(menu.get_items()):
            if item.get_stock_action() not in keep:
                menu.remove(item)
        return menu.get_n_items() == 0



class App(Gtk.Application):
    def __init__(self):
        super().__init__(application_id=APP_ID, flags=Gio.ApplicationFlags.FLAGS_NONE)
        self.window = None

    def do_startup(self):
        Gtk.Application.do_startup(self)
        for name, callback, accels in (("quit", lambda *_: self.quit(), ["<Primary>q", "<Primary>w"]),
                                       ("about", self.on_about, [])):
            action = Gio.SimpleAction.new(name, None)
            action.connect("activate", callback)
            self.add_action(action)
            if accels:
                self.set_accels_for_action(f"app.{name}", accels)
        self.set_accels_for_action("win.reload", ["<Primary>r", "F5"])

    def do_activate(self):
        if not self.window:
            self.window = Window(self)
            self.window.connect("key-press-event", self.on_key)
        self.window.present()

    def on_key(self, window, event):
        keyval, state = event.keyval, event.state & Gtk.accelerator_get_default_mod_mask()
        if keyval == Gdk.KEY_F11:
            if window.get_window().get_state() & Gdk.WindowState.FULLSCREEN:
                window.unfullscreen()
            else:
                window.fullscreen()
            return True
        if state == Gdk.ModifierType.MOD1_MASK and keyval in (Gdk.KEY_Left, Gdk.KEY_Right):
            (window.view.go_back if keyval == Gdk.KEY_Left else window.view.go_forward)()
            return True
        return False

    def on_about(self, *_):
        dialog = Gtk.AboutDialog(transient_for=self.window, modal=True)
        dialog.set_program_name(NAME)
        dialog.set_version(os.environ.get("SNAP_VERSION", "dev"))
        dialog.set_comments("Creative Marketing Specialist.\nContent creation, campaigns, narrative design and creative work.")
        dialog.set_authors(["Pavel Šoral <pavel.soral@proton.me>"])
        dialog.set_license_type(Gtk.License.GPL_3_0)
        dialog.set_copyright("© 2026 Pavel Šoral\nWork samples © their respective owners.\nDesign inspired by GNOME’s Adwaita.")
        if os.path.exists(ICON):
            dialog.set_logo(Gtk.Image.new_from_file(ICON).get_pixbuf())
        dialog.connect("response", lambda d, *_: d.destroy())
        dialog.present()


def main():
    GLib.set_prgname(PRGNAME)
    GLib.set_application_name(NAME)
    if not os.path.exists(INDEX):
        print(f"Cannot find the portfolio pages at {INDEX}", file=sys.stderr)
        return 1
    return App().run(sys.argv)


if __name__ == "__main__":
    sys.exit(main())
