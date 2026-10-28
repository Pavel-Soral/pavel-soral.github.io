/*
  Portfolio content. Edit text here; no build step needed.
  A text value is either a plain string (same in every language) or {"en": …, "sk": …}.
  Fill in config.links to show the buttons that are hidden for now.
*/
window.PORTFOLIO = {
  "config": {
    "name": "Pavel Šoral",
    "email": "pavel.soral@proton.me",
    "location": {
      "en": "Bratislava, Slovakia",
      "sk": "Bratislava, Slovensko"
    },
    "phone": null,
    "linkedin": null,
    "repo": null,
    "defaultLanguage": "en",
    "defaultTheme": "dark",
    "links": {
      "blogs": null,
      "cases": null,
      "product": null,
      "ebooks": null,
      "landing": null,
      "social": null,
      "story": null
    }
  },
  "ui": {
    "skip": {
      "en": "Skip to content",
      "sk": "Preskočiť na obsah"
    },
    "menu": "Menu",
    "close": {
      "en": "Close",
      "sk": "Zavrieť"
    },
    "prev": {
      "en": "Previous",
      "sk": "Predchádzajúca"
    },
    "next": {
      "en": "Next",
      "sk": "Ďalšia"
    },
    "of": {
      "en": "of",
      "sk": "z"
    },
    "theme": {
      "en": "Switch to light theme",
      "sk": "Prepnúť na svetlý motív"
    },
    "themeDark": {
      "en": "Switch to dark theme",
      "sk": "Prepnúť na tmavý motív"
    },
    "language": {
      "en": "Language",
      "sk": "Jazyk"
    },
    "openTab": {
      "en": "Open in a new tab",
      "sk": "Otvoriť v novej karte"
    },
    "viewer": {
      "en": "Document preview",
      "sk": "Náhľad dokumentu"
    },
    "viewerNote": {
      "en": "If the preview stays blank, the file isn’t shared publicly yet. Open it in a new tab instead.",
      "sk": "Ak náhľad zostane prázdny, súbor ešte nie je verejne zdieľaný. Otvorte ho v novej karte."
    },
    "copy": {
      "en": "Copy",
      "sk": "Kopírovať"
    },
    "copied": {
      "en": "Copied",
      "sk": "Skopírované"
    },
    "email": {
      "en": "Email",
      "sk": "E-mail"
    },
    "location": {
      "en": "Location",
      "sk": "Lokalita"
    },
    "linkedin": "LinkedIn",
    "phone": {
      "en": "Phone",
      "sk": "Telefón"
    },
    "sections": {
      "en": "Sections",
      "sk": "Sekcie"
    },
    "pagesIn": {
      "en": "Pages in this section",
      "sk": "Stránky v tejto sekcii"
    },
    "source": {
      "en": "Source code on GitHub",
      "sk": "Zdrojový kód na GitHube"
    },
    "credit": {
      "en": "Design inspired by GNOME’s Adwaita.",
      "sk": "Dizajn inšpirovaný GNOME Adwaita."
    },
    "notFound": {
      "en": "This page doesn’t exist. Here’s the start instead.",
      "sk": "Táto stránka neexistuje. Tu je úvod."
    }
  },
  "sections": [
    {
      "id": "about",
      "title": {
        "en": "About",
        "sk": "O mne"
      },
      "pages": [
        {
          "id": "home",
          "type": "hero",
          "title": "Pavel Šoral",
          "nav": {
            "en": "Intro",
            "sk": "Úvod"
          },
          "role": {
            "en": "Content Marketing Specialist & Copywriter",
            "sk": "Špecialista na obsahový marketing a copywriter"
          },
          "intro": {
            "en": "Hi! I’m Pavel, and I write about tech. I take complicated, technical stuff and turn it into stories people actually want to read, and that search engines are happy to rank.",
            "sk": "Volám sa Pavel a píšem o technológiách. Zložité technické veci premieňam na príbehy, ktoré ľudia naozaj chcú čítať a ktoré vyhľadávače radi posunú na vrchol."
          },
          "avatar": {
            "src": "assets/img/avatar.webp",
            "w": 640,
            "h": 640,
            "alt": "Portrait of Pavel Šoral"
          },
          "actions": [
            {
              "label": {
                "en": "View Work",
                "sk": "Pozrite si prácu"
              },
              "goto": "content-creation",
              "kind": "suggested"
            },
            {
              "label": {
                "en": "Get in Touch",
                "sk": "Napíšte mi"
              },
              "goto": "contact",
              "kind": "flat",
              "icon": "mail"
            }
          ]
        },
        {
          "id": "approach",
          "title": {
            "en": "Content That Feels at Home Anywhere",
            "sk": "Obsah, ktorý je všade ako doma"
          },
          "nav": {
            "en": "Approach",
            "sk": "Prístup"
          },
          "layout": "stack",
          "intro": {
            "en": "I take complicated things and make them clear. What I write works for search engines and for the people actually reading it.",
            "sk": "Zložité veci podávam jasne. To, čo napíšem, funguje pre vyhľadávače aj pre ľudí, ktorí to naozaj čítajú."
          },
          "main": [
            {
              "type": "tiles",
              "title": {
                "en": "What I aim for",
                "sk": "O čo sa snažím"
              },
              "items": [
                {
                  "icon": "coffee",
                  "label": {
                    "en": "Delightful",
                    "sk": "Príjemný"
                  }
                },
                {
                  "icon": "bulb",
                  "label": {
                    "en": "Thoughtful",
                    "sk": "Premyslený"
                  }
                },
                {
                  "icon": "brush",
                  "label": {
                    "en": "Visual",
                    "sk": "Vizuálny"
                  }
                },
                {
                  "icon": "chart",
                  "label": {
                    "en": "Optimized",
                    "sk": "Optimalizovaný"
                  }
                },
                {
                  "icon": "docsearch",
                  "label": {
                    "en": "Researched",
                    "sk": "Podložený"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "content-creation",
      "title": {
        "en": "Content Creation",
        "sk": "Tvorba obsahu"
      },
      "pages": [
        {
          "id": "blog-posts",
          "title": {
            "en": "Blog Posts",
            "sk": "Blogové články"
          },
          "layout": "split",
          "intro": {
            "en": "At Photoneo, I sit between the product team and marketing, and write the articles people are already searching for.",
            "sk": "V Photoneo spájam produktový tím s marketingom a píšem články, ktoré ľudia už aj tak hľadajú."
          },
          "aside": [
            {
              "type": "stats",
              "cols": 1,
              "items": [
                {
                  "value": {
                    "en": "+129%",
                    "sk": "+129 %"
                  },
                  "label": {
                    "en": "more desktop traffic",
                    "sk": "viac návštev z počítačov"
                  }
                },
                {
                  "value": {
                    "en": "+37%",
                    "sk": "+37 %"
                  },
                  "label": {
                    "en": "more engagement, year over year",
                    "sk": "vyššia angažovanosť medziročne"
                  }
                },
                {
                  "value": {
                    "en": "+75%",
                    "sk": "+75 %"
                  },
                  "label": {
                    "en": "more engaged visits from search",
                    "sk": "viac aktívnych návštev zo SEO"
                  }
                }
              ]
            },
            {
              "type": "note",
              "text": "Photoneo, 2024 – 2025"
            }
          ],
          "cta": {
            "label": {
              "en": "Read More Posts",
              "sk": "Ďalšie články"
            },
            "link": "blogs",
            "url": null
          },
          "main": [
            {
              "type": "cards",
              "cols": 3,
              "items": [
                {
                  "img": {
                    "src": "assets/img/blog-blue-laser.webp",
                    "w": 572,
                    "h": 322,
                    "alt": "Robot arm scanning parts with a blue laser 3D scanner"
                  },
                  "title": "Why Blue Laser Is the Core of High-Fidelity 3D Scanning",
                  "caption": "photoneo.com",
                  "url": "https://www.photoneo.com/blue-laser-technology/"
                },
                {
                  "img": {
                    "src": "assets/img/blog-px-web3.webp",
                    "w": 336,
                    "h": 189,
                    "alt": "Gamer wearing a headset"
                  },
                  "title": "Player Experience (PX) in Web3 Gaming",
                  "caption": "immutable.com",
                  "url": "https://www.immutable.com/blog/player-experience-crypto-games"
                },
                {
                  "img": {
                    "src": "assets/img/blog-bin-picking-studio.webp",
                    "w": 615,
                    "h": 345,
                    "alt": "ABB robot with a 3D vision sensor over a bin"
                  },
                  "title": "How to Deploy Bin Picking Studio in 6 Steps",
                  "caption": "photoneo.com",
                  "url": "https://www.photoneo.com/how-to-bin-picking-studio-abb-robotics-add-in/"
                },
                {
                  "img": {
                    "src": "assets/img/blog-brake-discs.webp",
                    "w": 568,
                    "h": 320,
                    "alt": "Stack of cast iron brake discs"
                  },
                  "title": "How 3D Vision Powers Bin Picking of Heavy Brake Discs",
                  "caption": "photoneo.com",
                  "url": "https://www.photoneo.com/high-speed-bin-picking-of-heavy-brake-discs/"
                },
                {
                  "img": {
                    "src": "assets/img/blog-high-trust.webp",
                    "w": 640,
                    "h": 360,
                    "alt": "Colleagues talking at a desk"
                  },
                  "title": "Why Are High-Trust Companies More Productive?",
                  "caption": "slido.com",
                  "url": "https://blog.slido.com/high-trust-companies-productivity/"
                },
                {
                  "img": {
                    "src": "assets/img/blog-unicorns.webp",
                    "w": 390,
                    "h": 200,
                    "alt": "Bar chart of unicorn revenue multiples in Europe and the USA"
                  },
                  "fit": "contain",
                  "title": "What Is a Unicorn Worth? Startup Revenue vs Valuation",
                  "caption": "foliovision.com",
                  "url": "https://foliovision.com/2022/04/unicorns-in-europe-vs-usa"
                }
              ]
            }
          ]
        },
        {
          "id": "case-studies",
          "title": {
            "en": "Case Studies",
            "sk": "Prípadové štúdie"
          },
          "layout": "split",
          "flip": true,
          "intro": {
            "en": "I handled every case study from start to finish.",
            "sk": "Každú prípadovú štúdiu som pripravil od začiatku do konca."
          },
          "aside": [
            {
              "type": "rows",
              "items": [
                {
                  "icon": "search",
                  "title": {
                    "en": "Found the stories",
                    "sk": "Našiel som príbehy"
                  }
                },
                {
                  "icon": "users",
                  "title": {
                    "en": "Got the technical details",
                    "sk": "Zistil som technické detaily"
                  },
                  "sub": {
                    "en": "Straight from the experts",
                    "sk": "Priamo od odborníkov"
                  }
                },
                {
                  "icon": "pencil",
                  "title": {
                    "en": "Wrote them",
                    "sk": "Napísal som ich"
                  }
                },
                {
                  "icon": "brush",
                  "title": {
                    "en": "Designed the final pieces",
                    "sk": "Navrhol som finálnu podobu"
                  }
                }
              ]
            },
            {
              "type": "stats",
              "cols": 1,
              "items": [
                {
                  "value": {
                    "en": "+36%",
                    "sk": "+36 %"
                  },
                  "label": {
                    "en": "more qualified leads in two quarters",
                    "sk": "viac kvalifikovaných leadov za dva kvartály"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "See the Case Studies",
              "sk": "Pozrite si štúdie"
            },
            "link": "cases",
            "url": null
          },
          "main": [
            {
              "type": "covers",
              "cols": 4,
              "aspect": 0.708,
              "items": [
                {
                  "img": {
                    "src": "assets/img/case-1.webp",
                    "w": 425,
                    "h": 600,
                    "alt": "Case study cover: Pocket Sorter Induction"
                  },
                  "title": "3D Vision Powers the World’s Fastest Pocket Sorter Induction",
                  "url": "https://drive.google.com/file/d/1otOX_RpCIXeFCF7vsxm9dAPxdA_2zgo7/view?usp=drive_link"
                },
                {
                  "img": {
                    "src": "assets/img/case-2.webp",
                    "w": 425,
                    "h": 600,
                    "alt": "Case study cover: Smart Palletizing"
                  },
                  "title": "3D Vision Powers AI Robotics in Smart Palletizing",
                  "url": "https://drive.google.com/file/d/1EJeQLk8l0xthmXNPr6CnWZWxgrBPoDUo/view?usp=drive_link"
                },
                {
                  "img": {
                    "src": "assets/img/case-3.webp",
                    "w": 425,
                    "h": 600,
                    "alt": "Case study cover: Crash car inspection"
                  },
                  "title": "Increasing Car Safety With 3D Scanning in Motion",
                  "url": "https://drive.google.com/file/d/1apF0JbkZLbT8zK3Vb4sRJbT2T9RRb4ER/view?usp=drive_link"
                },
                {
                  "img": {
                    "src": "assets/img/case-4.webp",
                    "w": 425,
                    "h": 600,
                    "alt": "Case study cover: Mixed palletizing"
                  },
                  "title": "Mixed Palletizing with 3D Vision",
                  "url": "https://drive.google.com/file/d/1nIaMaMD6JriROpEaugAxDDHSjfXyAVJr/view?usp=drive_link"
                }
              ]
            }
          ]
        },
        {
          "id": "product-materials",
          "title": {
            "en": "Product Materials",
            "sk": "Produktové materiály"
          },
          "layout": "split",
          "intro": {
            "en": "After a sales call, people need something to keep. I make the brochures, one-pagers and guides that explain what each product does and who it’s for, start to finish.",
            "sk": "Po obchodnom stretnutí si ľudia chcú niečo odniesť. Od začiatku do konca pripravujem brožúry, letáky a sprievodcov, ktoré vysvetľujú, čo produkt robí a pre koho je."
          },
          "aside": [
            {
              "type": "rows",
              "items": [
                {
                  "icon": "star",
                  "title": {
                    "en": "Benefits first",
                    "sk": "Najprv prínosy"
                  },
                  "sub": {
                    "en": "Short, plain headlines up front. The full specs wait at the back.",
                    "sk": "Vpredu krátke a jasné titulky. Kompletné parametre čakajú vzadu."
                  }
                },
                {
                  "icon": "book",
                  "title": {
                    "en": "One family, one voice",
                    "sk": "Jedna rodina, jeden hlas"
                  },
                  "sub": {
                    "en": "Every product in the line follows the same structure and tone.",
                    "sk": "Každý produkt v rade má rovnakú štruktúru aj tón."
                  }
                },
                {
                  "icon": "search",
                  "title": {
                    "en": "Easy to choose",
                    "sk": "Ľahký výber"
                  },
                  "sub": {
                    "en": "A one-page guide matches each sensor to the jobs it does best.",
                    "sk": "Jednostranový sprievodca priradí každý senzor k úlohám, ktoré zvláda najlepšie."
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "Browse the Materials",
              "sk": "Prezrite si materiály"
            },
            "link": "product",
            "url": null
          },
          "main": [
            {
              "type": "stacks",
              "items": [
                {
                  "front": {
                    "src": "assets/img/motioncam-01.webp",
                    "w": 560,
                    "h": 792,
                    "alt": "MotionCam-3D Color (Blue) brochure cover"
                  },
                  "back": {
                    "src": "assets/img/motioncam-02.webp",
                    "w": 560,
                    "h": 792,
                    "alt": "Brochure inside page"
                  },
                  "title": "MotionCam-3D Color (Blue)",
                  "caption": {
                    "en": "Brochure · 20 pages",
                    "sk": "Brožúra · 20 strán"
                  }
                },
                {
                  "front": {
                    "src": "assets/img/phoxi-01.webp",
                    "w": 560,
                    "h": 792,
                    "alt": "PhoXi 3D Scanner Gen3 brochure cover"
                  },
                  "back": {
                    "src": "assets/img/phoxi-02.webp",
                    "w": 560,
                    "h": 792,
                    "alt": "Brochure inside page"
                  },
                  "title": "PhoXi 3D Scanner Gen3",
                  "caption": {
                    "en": "Brochure · 20 pages",
                    "sk": "Brožúra · 20 strán"
                  }
                },
                {
                  "front": {
                    "src": "assets/img/aurora-01.webp",
                    "w": 560,
                    "h": 777,
                    "alt": "Aurora VGR Studio one-pager"
                  },
                  "back": {
                    "src": "assets/img/aurora-02.webp",
                    "w": 560,
                    "h": 777,
                    "alt": "One-pager back side"
                  },
                  "title": "Aurora VGR Studio",
                  "caption": {
                    "en": "Software one-pager",
                    "sk": "Jednostranový leták o softvéri"
                  }
                }
              ]
            },
            {
              "type": "image",
              "img": {
                "src": "assets/img/fit-guide.webp",
                "w": 1800,
                "h": 637,
                "alt": "3D Sensor Application Fit Guide poster"
              },
              "paper": true,
              "title": "3D Sensor Application Fit Guide",
              "caption": {
                "en": "One-page product guide",
                "sk": "Jednostranový produktový sprievodca"
              }
            }
          ]
        },
        {
          "id": "e-books",
          "title": {
            "en": "E-Books",
            "sk": "E-knihy"
          },
          "layout": "stack",
          "chips": [
            {
              "en": "Interviewing experts",
              "sk": "Rozhovory s odborníkmi"
            },
            {
              "en": "Deep research",
              "sk": "Dôkladná rešerš"
            },
            "Storytelling"
          ],
          "cta": {
            "label": {
              "en": "See the E-Books",
              "sk": "Pozrite si e-knihy"
            },
            "link": "ebooks",
            "url": null
          },
          "main": [
            {
              "type": "cards",
              "cols": 3,
              "aspect": 1.2,
              "fit": "contain",
              "items": [
                {
                  "img": {
                    "src": "assets/img/ebook-1.webp",
                    "w": 720,
                    "h": 733,
                    "alt": "Open e-book: 2D vs 3D cameras"
                  },
                  "caption": "ai.photoneo.com",
                  "title": "2D vs 3D Cameras: Choosing the Right Machine Vision System for Your Application",
                  "url": "https://ai.photoneo.com/e-book-2d-vs-3d"
                },
                {
                  "img": {
                    "src": "assets/img/ebook-2.webp",
                    "w": 642,
                    "h": 488,
                    "alt": "Open e-book: 3D Vision & AI Robotics"
                  },
                  "caption": "ai.photoneo.com",
                  "title": "Photoneo’s Complete Product Portfolio, Patented Technologies, and Proven Case Studies",
                  "url": "https://ai.photoneo.com/3d-vision-ai-robotics-download"
                },
                {
                  "img": {
                    "src": "assets/img/ebook-3.webp",
                    "w": 661,
                    "h": 453,
                    "alt": "Open e-book about car manufacturing automation"
                  },
                  "caption": "ai.photoneo.com",
                  "title": "From Press Shop to General Assembly: How 3D Vision Drives Car Manufacturing Automation",
                  "url": "https://ai.photoneo.com/3d-vision-automotive-manufacturing-ebook"
                }
              ]
            }
          ]
        },
        {
          "id": "e-magazines",
          "title": {
            "en": "E-Magazines",
            "sk": "E-magazíny"
          },
          "layout": "stack",
          "intro": {
            "en": "Every month, I put the whole issue together, start to finish.",
            "sk": "Každý mesiac som zostavil celé číslo od začiatku do konca."
          },
          "cta": {
            "label": {
              "en": "Flip Through the Issues",
              "sk": "Prelistujte si čísla"
            },
            "link": null,
            "url": "https://drive.google.com/drive/folders/1RZIL4-wL5oHt736pncw1OOio8Oc9ZebL?usp=sharing"
          },
          "main": [
            {
              "type": "covers",
              "cols": 4,
              "aspect": 0.7,
              "items": [
                {
                  "img": {
                    "src": "assets/img/magazine-1.webp",
                    "w": 357,
                    "h": 509,
                    "alt": "Magazine cover 1"
                  },
                  "title": {
                    "en": "E-Magazines",
                    "sk": "E-magazíny"
                  },
                  "url": "https://drive.google.com/drive/folders/1RZIL4-wL5oHt736pncw1OOio8Oc9ZebL?usp=sharing"
                },
                {
                  "img": {
                    "src": "assets/img/magazine-2.webp",
                    "w": 374,
                    "h": 535,
                    "alt": "Magazine cover 2"
                  },
                  "title": {
                    "en": "E-Magazines",
                    "sk": "E-magazíny"
                  },
                  "url": "https://drive.google.com/drive/folders/1RZIL4-wL5oHt736pncw1OOio8Oc9ZebL?usp=sharing"
                },
                {
                  "img": {
                    "src": "assets/img/magazine-3.webp",
                    "w": 356,
                    "h": 505,
                    "alt": "Magazine cover 3"
                  },
                  "title": {
                    "en": "E-Magazines",
                    "sk": "E-magazíny"
                  },
                  "url": "https://drive.google.com/drive/folders/1RZIL4-wL5oHt736pncw1OOio8Oc9ZebL?usp=sharing"
                },
                {
                  "img": {
                    "src": "assets/img/magazine-4.webp",
                    "w": 378,
                    "h": 534,
                    "alt": "Magazine cover 4"
                  },
                  "title": {
                    "en": "E-Magazines",
                    "sk": "E-magazíny"
                  },
                  "url": "https://drive.google.com/drive/folders/1RZIL4-wL5oHt736pncw1OOio8Oc9ZebL?usp=sharing"
                }
              ]
            },
            {
              "type": "steps",
              "items": [
                {
                  "icon": "search",
                  "title": {
                    "en": "Found the news",
                    "sk": "Hľadal som novinky"
                  },
                  "sub": {
                    "en": "Tracked down R&D updates, new hires, partnerships and more",
                    "sk": "Novinky z vývoja, noví kolegovia, partnerstvá a ďalšie"
                  }
                },
                {
                  "icon": "pencil",
                  "title": {
                    "en": "Wrote it",
                    "sk": "Písal som"
                  },
                  "sub": {
                    "en": "Interviewed the founders and experts, and wrote every article",
                    "sk": "Robil som rozhovory so zakladateľmi a odborníkmi a napísal každý článok"
                  }
                },
                {
                  "icon": "team",
                  "title": {
                    "en": "Made it look good",
                    "sk": "Postaral som sa o vzhľad"
                  },
                  "sub": {
                    "en": "Worked with a designer so it looked as good as it read",
                    "sk": "S grafikom sme ho vyladili, aby vyzeralo tak dobre, ako sa čítalo"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "campaigns",
      "title": {
        "en": "Campaigns",
        "sk": "Kampane"
      },
      "pages": [
        {
          "id": "campaign-results",
          "title": {
            "en": "Results That Add Up",
            "sk": "Výsledky, ktoré sa sčítajú"
          },
          "nav": {
            "en": "Overview",
            "sk": "Prehľad"
          },
          "layout": "stack",
          "intro": {
            "en": "What our six-person marketing team at Photoneo achieved with its 2025 campaigns, compared with 2024. My part was product marketing and copywriting.",
            "sk": "Čo náš šesťčlenný marketingový tím v Photoneo dosiahol kampaňami v roku 2025 v porovnaní s rokom 2024. Mojou časťou bol produktový marketing a copywriting."
          },
          "cta": {
            "label": {
              "en": "Ask Me About the Numbers",
              "sk": "Opýtajte sa ma na čísla"
            },
            "link": null,
            "url": "mailto:pavel.soral@proton.me"
          },
          "main": [
            {
              "type": "stats",
              "cols": 3,
              "size": "hero",
              "items": [
                {
                  "value": "2×",
                  "label": {
                    "en": "desktop visits",
                    "sk": "viac návštev z počítačov"
                  },
                  "sub": {
                    "en": "January–September 2025 vs. the same months of 2024",
                    "sk": "Január – september 2025 oproti rovnakým mesiacom 2024"
                  }
                },
                {
                  "value": {
                    "en": "88%",
                    "sk": "88 %"
                  },
                  "label": {
                    "en": "of desktop visits were quality visits",
                    "sk": "návštev z počítačov bolo kvalitných"
                  },
                  "sub": {
                    "en": "Up from 66% in 2024",
                    "sk": "V roku 2024 to bolo 66 %"
                  }
                },
                {
                  "value": {
                    "en": "+40%",
                    "sk": "+40 %"
                  },
                  "label": {
                    "en": "Google search impressions",
                    "sk": "zobrazení vo vyhľadávaní Google"
                  },
                  "sub": {
                    "en": "Q3 2025 vs. Q3 2024",
                    "sk": "3. kvartál 2025 oproti 3. kvartálu 2024"
                  }
                },
                {
                  "value": {
                    "en": "+44%",
                    "sk": "+44 %"
                  },
                  "label": {
                    "en": "new contacts from campaigns",
                    "sk": "nových kontaktov z kampaní"
                  },
                  "sub": {
                    "en": "January–September 2025 vs. 2024",
                    "sk": "Január – september 2025 oproti roku 2024"
                  }
                },
                {
                  "value": {
                    "en": "42.5%",
                    "sk": "42,5 %"
                  },
                  "label": {
                    "en": "of campaign leads became marketing-qualified",
                    "sk": "leadov z kampaní sa stalo marketingovo kvalifikovanými (MQL)"
                  },
                  "sub": {
                    "en": "2025, online sources",
                    "sk": "2025, online zdroje"
                  }
                },
                {
                  "value": {
                    "en": "76%",
                    "sk": "76 %"
                  },
                  "label": {
                    "en": "of won deals were influenced by marketing",
                    "sk": "získaných obchodov ovplyvnil marketing"
                  },
                  "sub": {
                    "en": "January–September 2025, up from 69%",
                    "sk": "Január – september 2025, predtým 69 %"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "two-launches",
          "title": {
            "en": "Two Launches Side by Side",
            "sk": "Dve uvedenia na trh vedľa seba"
          },
          "nav": {
            "en": "Two Launches",
            "sk": "Dve uvedenia"
          },
          "layout": "stack",
          "intro": {
            "en": "In 2025 Photoneo launched two new 3D cameras. I wrote the brochures and product copy for both. Results as of September 5, 2025.",
            "sk": "V roku 2025 uviedol Photoneo na trh dve nové 3D kamery. Pre obe som napísal brožúry a produktové texty. Výsledky k 5. 9. 2025."
          },
          "cta": {
            "label": {
              "en": "See the Brochures",
              "sk": "Pozrite si brožúry"
            },
            "link": "product",
            "url": null
          },
          "main": [
            {
              "type": "launches",
              "items": [
                {
                  "img": {
                    "src": "assets/img/motioncam-01.webp",
                    "w": 560,
                    "h": 792,
                    "alt": "MotionCam-3D Color (Blue) brochure cover"
                  },
                  "title": "MotionCam-3D Color (Blue)",
                  "note": {
                    "en": "Launched May 2025",
                    "sk": "Uvedená v máji 2025"
                  },
                  "stats": [
                    {
                      "value": {
                        "en": "18.6%",
                        "sk": "18,6 %"
                      },
                      "label": {
                        "en": "form conversion",
                        "sk": "konverzia formulárov"
                      }
                    },
                    {
                      "value": {
                        "en": "+58%",
                        "sk": "+58 %"
                      },
                      "label": {
                        "en": "more forms filled in than for PhoXi Gen3",
                        "sk": "viac formulárov ako pri PhoXi Gen3"
                      }
                    },
                    {
                      "value": {
                        "en": "+52%",
                        "sk": "+52 %"
                      },
                      "label": {
                        "en": "more people actively engaged",
                        "sk": "viac aktívne zapojených ľudí"
                      }
                    },
                    {
                      "value": {
                        "en": "67%",
                        "sk": "67 %"
                      },
                      "label": {
                        "en": "of launch event sign-ups came from EMEA",
                        "sk": "registrácií na launch event bolo z EMEA"
                      }
                    }
                  ]
                },
                {
                  "img": {
                    "src": "assets/img/phoxi-01.webp",
                    "w": 560,
                    "h": 792,
                    "alt": "PhoXi 3D Scanner Gen3 brochure cover"
                  },
                  "title": "PhoXi 3D Scanner Gen3",
                  "note": {
                    "en": "Launched June 2025",
                    "sk": "Uvedený v júni 2025"
                  },
                  "stats": [
                    {
                      "value": {
                        "en": "15%",
                        "sk": "15 %"
                      },
                      "label": {
                        "en": "form conversion",
                        "sk": "konverzia formulárov"
                      }
                    },
                    {
                      "value": {
                        "en": "+18%",
                        "sk": "+18 %"
                      },
                      "label": {
                        "en": "more contacts reached than for MotionCam-3D",
                        "sk": "viac oslovených kontaktov ako pri MotionCam-3D"
                      }
                    },
                    {
                      "value": {
                        "en": "1 in 4",
                        "sk": "Každý 4."
                      },
                      "label": {
                        "en": "engaged people were brand-new contacts",
                        "sk": "zapojený človek bol úplne nový kontakt"
                      }
                    },
                    {
                      "value": {
                        "en": "35%",
                        "sk": "35 %"
                      },
                      "label": {
                        "en": "of webinar registrations came from the USA and Canada",
                        "sk": "registrácií na webinár prišlo z USA a Kanady"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "banner",
              "icon": "trophy",
              "text": {
                "en": "Automatica 2025 in Munich, where PhoXi Gen3 pre-launched: our best trade show yet for leads.",
                "sk": "Veľtrh Automatica 2025 v Mníchove, kde sme predstavili PhoXi Gen3: náš doteraz najlepší veľtrh na leady."
              }
            }
          ]
        },
        {
          "id": "landing-pages",
          "title": {
            "en": "Landing Pages",
            "sk": "Landing pages"
          },
          "layout": "split",
          "intro": {
            "en": "In 2025, Photoneo wanted better leads, so we offered e-books, webinars and product leaflets on their own landing pages. I worked with our designers to find the mix that people signed up for.",
            "sk": "V roku 2025 chcel Photoneo kvalitnejšie leady, a tak sme ponúkali e-knihy, webináre a produktové letáky na samostatných landing pages. S dizajnérmi som hľadal mix, na ktorý sa ľudia naozaj registrovali."
          },
          "aside": [
            {
              "type": "rows",
              "items": [
                {
                  "icon": "users",
                  "title": {
                    "en": "Lots of new leads",
                    "sk": "Veľa nových leadov"
                  },
                  "sub": {
                    "en": "Hundreds of qualified ones",
                    "sk": "Stovky kvalifikovaných"
                  }
                },
                {
                  "icon": "chart",
                  "title": {
                    "en": "People signed up",
                    "sk": "Ľudia sa registrovali"
                  },
                  "sub": {
                    "en": "35% conversion on average, 45.5% at peak",
                    "sk": "Priemerná konverzia 35 %, v špičke 45,5 %"
                  }
                },
                {
                  "icon": "rocket",
                  "title": {
                    "en": "People stuck around",
                    "sk": "Ľudia zostávali"
                  },
                  "sub": {
                    "en": "+22% engagement on product content during the launch",
                    "sk": "+22 % angažovanosť pri produktovom obsahu počas uvedenia na trh"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "See More Pages",
              "sk": "Ďalšie stránky"
            },
            "link": "landing",
            "url": null
          },
          "main": [
            {
              "type": "cards",
              "cols": 3,
              "items": [
                {
                  "img": {
                    "src": "assets/img/lp-automotive.webp",
                    "w": 720,
                    "h": 404,
                    "alt": "Automotive landing page"
                  },
                  "title": "Automotive Manufacturing",
                  "caption": "ai.photoneo.com",
                  "url": "https://ai.photoneo.com/automotive"
                },
                {
                  "img": {
                    "src": "assets/img/lp-motioncam.webp",
                    "w": 720,
                    "h": 405,
                    "alt": "MotionCam-3D Color landing page"
                  },
                  "title": "MotionCam-3D Color (Blue)",
                  "caption": "ai.photoneo.com",
                  "url": "https://ai.photoneo.com/best-3d-camera"
                },
                {
                  "img": {
                    "src": "assets/img/lp-vgr.webp",
                    "w": 687,
                    "h": 386,
                    "alt": "Vision Guided Robotics landing page"
                  },
                  "title": "Vision Guided Robotics Software",
                  "caption": "ai.photoneo.com",
                  "url": "https://ai.photoneo.com/vision-guided-robotics-software"
                },
                {
                  "img": {
                    "src": "assets/img/lp-pick-to-weld.webp",
                    "w": 720,
                    "h": 405,
                    "alt": "Pick-to-Weld landing page"
                  },
                  "title": "Pick-to-Weld Automation",
                  "caption": "ai.photoneo.com",
                  "url": "https://ai.photoneo.com/pick-to-weld-automation"
                },
                {
                  "img": {
                    "src": "assets/img/lp-aneemate.webp",
                    "w": 720,
                    "h": 405,
                    "alt": "AneeMate game website"
                  },
                  "title": "AneeMate",
                  "caption": "aneemate.com",
                  "url": "https://aneemate.com/"
                },
                {
                  "img": {
                    "src": "assets/img/lp-citizen-conflict.webp",
                    "w": 720,
                    "h": 405,
                    "alt": "Citizen Conflict game website"
                  },
                  "title": "Citizen Conflict",
                  "caption": "citizenconflict.com",
                  "url": "https://citizenconflict.com/"
                }
              ]
            }
          ]
        },
        {
          "id": "content-that-converts",
          "title": {
            "en": "Content That Converts",
            "sk": "Obsah, ktorý konvertuje"
          },
          "nav": {
            "en": "Conversion",
            "sk": "Konverzia"
          },
          "layout": "split",
          "intro": {
            "en": "People fill in a form to get our e-books, webinars and leaflets. On e-book pages, more than a third of visitors did. January–September 2025.",
            "sk": "Za naše e-knihy, webináre a letáky ľudia vyplnia formulár. Na stránkach e-kníh to urobila viac ako tretina návštevníkov. Január – september 2025."
          },
          "aside": [
            {
              "type": "rows",
              "title": {
                "en": "Average landing page conversion",
                "sk": "Priemerná konverzia landing pages"
              },
              "items": [
                {
                  "icon": "book",
                  "title": {
                    "en": "E-books",
                    "sk": "E-knihy"
                  },
                  "suffix": {
                    "en": "35%",
                    "sk": "35 %"
                  }
                },
                {
                  "icon": "play",
                  "title": {
                    "en": "On-demand webinars",
                    "sk": "Webináre zo záznamu"
                  },
                  "suffix": {
                    "en": "21%",
                    "sk": "21 %"
                  }
                },
                {
                  "icon": "doc",
                  "title": {
                    "en": "Leaflets",
                    "sk": "Letáky"
                  },
                  "suffix": {
                    "en": "22%",
                    "sk": "22 %"
                  }
                }
              ]
            },
            {
              "type": "stats",
              "cols": 1,
              "items": [
                {
                  "value": {
                    "en": "1.7×",
                    "sk": "1,7×"
                  },
                  "label": {
                    "en": "higher conversion for e-books than for on-demand webinars",
                    "sk": "vyššia konverzia pri e-knihách ako pri webinároch zo záznamu"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "See the E-Books",
              "sk": "Pozrite si e-knihy"
            },
            "link": "ebooks",
            "url": null
          },
          "main": [
            {
              "type": "hbars",
              "title": {
                "en": "Landing page conversion by e-book",
                "sk": "Konverzia landing pages podľa e-knihy"
              },
              "sub": {
                "en": "Share of page visitors who downloaded the e-book",
                "sk": "Podiel návštevníkov stránky, ktorí si e-knihu stiahli"
              },
              "max": 50,
              "items": [
                {
                  "label": "Dynamic Assembly with Real-Time 3D Vision",
                  "value": 45.5,
                  "display": {
                    "en": "45.5%",
                    "sk": "45,5 %"
                  },
                  "note": {
                    "en": "3% of all e-book downloads",
                    "sk": "3 % všetkých stiahnutí e-kníh"
                  }
                },
                {
                  "label": "Digital Twins in Automotive Manufacturing",
                  "value": 41.9,
                  "display": {
                    "en": "41.9%",
                    "sk": "41,9 %"
                  },
                  "note": {
                    "en": "4% of all e-book downloads",
                    "sk": "4 % všetkých stiahnutí e-kníh"
                  }
                },
                {
                  "label": "From Press Shop to General Assembly",
                  "value": 41.2,
                  "display": {
                    "en": "41.3%",
                    "sk": "41,3 %"
                  },
                  "note": {
                    "en": "22% of all e-book downloads",
                    "sk": "22 % všetkých stiahnutí e-kníh"
                  }
                },
                {
                  "label": "The Critical Role of 3D Vision in Automotive Quality Control",
                  "value": 33.3,
                  "display": {
                    "en": "33.3%",
                    "sk": "33,3 %"
                  },
                  "note": {
                    "en": "3% of all e-book downloads",
                    "sk": "3 % všetkých stiahnutí e-kníh"
                  }
                },
                {
                  "label": "2D vs 3D Cameras",
                  "value": 26.6,
                  "display": {
                    "en": "26.6%",
                    "sk": "26,6 %"
                  },
                  "note": {
                    "en": "30% of all e-book downloads",
                    "sk": "30 % všetkých stiahnutí e-kníh"
                  }
                },
                {
                  "label": "Choosing the Right 3D Sensor for Your Application",
                  "value": 26.5,
                  "display": {
                    "en": "26.5%",
                    "sk": "26,5 %"
                  },
                  "note": {
                    "en": "37% of all e-book downloads",
                    "sk": "37 % všetkých stiahnutí e-kníh"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "contacts-growth",
          "title": {
            "en": "Contacts Month After Month",
            "sk": "Kontakty mesiac za mesiacom"
          },
          "nav": {
            "en": "Contacts",
            "sk": "Kontakty"
          },
          "layout": "split",
          "intro": {
            "en": "New contacts from our website forms grew almost every quarter. Downloads, webinars and “Contact us” requests all count here.",
            "sk": "Nové kontakty z formulárov na webe rástli takmer každý kvartál. Patria sem stiahnutia, webináre aj žiadosti cez „Kontaktujte nás“."
          },
          "aside": [
            {
              "type": "stats",
              "cols": 1,
              "items": [
                {
                  "value": {
                    "en": "2.8×",
                    "sk": "2,8×"
                  },
                  "label": {
                    "en": "more new contacts in November 2025 than in January 2024. Our best month yet.",
                    "sk": "viac kontaktov v novembri 2025 ako v januári 2024. Najlepší mesiac."
                  }
                },
                {
                  "value": {
                    "en": "+51%",
                    "sk": "+51 %"
                  },
                  "label": {
                    "en": "more new contacts in an average month of 2025 than in 2024",
                    "sk": "viac kontaktov mesačne v roku 2025 ako v 2024"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "See the Landing Pages",
              "sk": "Pozrite si landing pages"
            },
            "link": "landing",
            "url": null
          },
          "main": [
            {
              "type": "barchart",
              "title": {
                "en": "New contacts from website forms, per month",
                "sk": "Nové kontakty z webových formulárov za mesiac"
              },
              "sub": {
                "en": "Index, January 2024 = 100",
                "sk": "Index, január 2024 = 100"
              },
              "max": 300,
              "ticks": [
                100,
                200,
                300
              ],
              "labels": [
                0,
                18,
                22
              ],
              "start": {
                "year": 2024,
                "month": 1
              },
              "values": [
                100,
                101,
                104,
                150,
                149,
                148,
                132,
                110,
                134,
                137,
                161,
                125,
                164,
                166,
                159,
                216,
                189,
                177,
                231,
                166,
                202,
                210,
                275
              ]
            }
          ]
        },
        {
          "id": "social-media",
          "title": {
            "en": "Social Media",
            "sk": "Sociálne siete"
          },
          "layout": "stack",
          "chips": [
            {
              "en": "Planning",
              "sk": "Plánovanie"
            },
            "Copywriting",
            {
              "en": "Shooting and editing",
              "sk": "Natáčanie a strih"
            }
          ],
          "cta": {
            "label": {
              "en": "See More Posts",
              "sk": "Ďalšie príspevky"
            },
            "link": "social",
            "url": null
          },
          "main": [
            {
              "type": "phones",
              "photo": {
                "src": "assets/img/studio-social.webp",
                "w": 918,
                "h": 658,
                "alt": "Video editing setup with microphone and synthesizer"
              },
              "items": [
                {
                  "img": {
                    "src": "assets/img/phone-linkedin.webp",
                    "w": 241,
                    "h": 528,
                    "alt": "LinkedIn post by Photoneo"
                  },
                  "title": "LinkedIn",
                  "caption": "Photoneo"
                },
                {
                  "img": {
                    "src": "assets/img/phone-x.webp",
                    "w": 288,
                    "h": 640,
                    "alt": "X posts by Citizen Conflict"
                  },
                  "title": "X",
                  "caption": "Citizen Conflict"
                },
                {
                  "img": {
                    "src": "assets/img/phone-tiktok.webp",
                    "w": 288,
                    "h": 640,
                    "alt": "TikTok profile of Citizen Conflict"
                  },
                  "title": "TikTok",
                  "caption": "Citizen Conflict"
                },
                {
                  "img": {
                    "src": "assets/img/phone-instagram.webp",
                    "w": 288,
                    "h": 640,
                    "alt": "Instagram profile of Photoneo"
                  },
                  "title": "Instagram",
                  "caption": "Photoneo"
                }
              ]
            }
          ]
        },
        {
          "id": "linkedin",
          "title": {
            "en": "LinkedIn That Works",
            "sk": "LinkedIn, ktorý funguje"
          },
          "nav": "LinkedIn",
          "layout": "stack",
          "intro": {
            "en": "Photoneo’s LinkedIn page, September to November 2025.",
            "sk": "LinkedIn stránka Photoneo, september až november 2025."
          },
          "cta": {
            "label": {
              "en": "See More Posts",
              "sk": "Ďalšie príspevky"
            },
            "link": "social",
            "url": null
          },
          "main": [
            {
              "type": "stats",
              "cols": 3,
              "items": [
                {
                  "value": {
                    "en": "+35%",
                    "sk": "+35 %"
                  },
                  "label": {
                    "en": "more impressions",
                    "sk": "viac zobrazení"
                  },
                  "sub": {
                    "en": "November vs. September",
                    "sk": "November oproti septembru"
                  }
                },
                {
                  "value": {
                    "en": "2.68%",
                    "sk": "2,68 %"
                  },
                  "label": {
                    "en": "average engagement rate",
                    "sk": "priemerná miera interakcie"
                  },
                  "sub": {
                    "en": "Across all posts, three months",
                    "sk": "Všetky príspevky, tri mesiace"
                  }
                },
                {
                  "value": {
                    "en": "+26%",
                    "sk": "+26 %"
                  },
                  "label": {
                    "en": "more new followers",
                    "sk": "viac nových sledovateľov"
                  },
                  "sub": {
                    "en": "November vs. September, 60% organic",
                    "sk": "November oproti septembru, 60 % organicky"
                  }
                }
              ]
            },
            {
              "type": "columns",
              "items": [
                {
                  "type": "rows",
                  "title": {
                    "en": "Top organic posts, by total engagement",
                    "sk": "Najlepšie organické príspevky podľa interakcií"
                  },
                  "items": [
                    {
                      "icon": "star",
                      "title": {
                        "en": "Webinar with ABB",
                        "sk": "Webinár s ABB"
                      },
                      "sub": {
                        "en": "35% of sign-ups were new contacts",
                        "sk": "35 % registrovaných boli nové kontakty"
                      },
                      "suffix": {
                        "en": "9.67%",
                        "sk": "9,67 %"
                      }
                    },
                    {
                      "icon": "pencil",
                      "title": {
                        "en": "Blog post: The Tech Behind Blue Laser",
                        "sk": "Blogový článok: The Tech Behind Blue Laser"
                      },
                      "sub": {
                        "en": "Technical deep dive",
                        "sk": "Technický ponor do hĺbky"
                      },
                      "suffix": {
                        "en": "8.90%",
                        "sk": "8,90 %"
                      }
                    },
                    {
                      "icon": "team",
                      "title": {
                        "en": "Partner success: Rebl Industries",
                        "sk": "Úspech partnera: Rebl Industries"
                      },
                      "sub": {
                        "en": "Social proof from a partner",
                        "sk": "Dôkaz z praxe od partnera"
                      },
                      "suffix": {
                        "en": "9.38%",
                        "sk": "9,38 %"
                      }
                    }
                  ]
                },
                {
                  "type": "rows",
                  "title": {
                    "en": "Case study videos",
                    "sk": "Videá k prípadovým štúdiám"
                  },
                  "items": [
                    {
                      "icon": "play",
                      "title": {
                        "en": "Picking heavy brake discs",
                        "sk": "Vyberanie ťažkých brzdových kotúčov"
                      },
                      "sub": {
                        "en": "Viewers watched 10 s on average",
                        "sk": "Diváci pozerali v priemere 10 s"
                      },
                      "suffix": {
                        "en": "5.57%",
                        "sk": "5,57 %"
                      }
                    },
                    {
                      "icon": "play",
                      "title": {
                        "en": "Crash car inspection",
                        "sk": "Kontrola auta po nárazovej skúške"
                      },
                      "sub": {
                        "en": "Viewers watched 13 s on average",
                        "sk": "Diváci pozerali v priemere 13 s"
                      },
                      "suffix": {
                        "en": "6.66%",
                        "sk": "6,66 %"
                      }
                    }
                  ],
                  "foot": {
                    "en": "Organic engagement rate shown for every post.",
                    "sk": "Pri každom príspevku je uvedená organická miera interakcie."
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "web3-to-mainstream",
          "title": {
            "en": "From Web3 Niche to the Masses",
            "sk": "Z Web3 niky do mainstreamu"
          },
          "nav": {
            "en": "Web3 to Mainstream",
            "sk": "Z Web3 do mainstreamu"
          },
          "layout": "split",
          "intro": {
            "en": "At QORPO, I worked with the studio leads and game designers on how we talked about Citizen Conflict. That story took it from a Web3 project to a mainstream game on the Epic Games Store.",
            "sk": "V QORPO som s vedením štúdia a hernými dizajnérmi ladil, ako o Citizen Conflict rozprávame. Vďaka tomu sa z Web3 projektu stala mainstreamová hra v Epic Games Store."
          },
          "aside": [
            {
              "type": "stats",
              "cols": 2,
              "items": [
                {
                  "value": {
                    "en": "450,000",
                    "sk": "450 000"
                  },
                  "label": {
                    "en": "registered users",
                    "sk": "registrovaných používateľov"
                  },
                  "wide": true
                },
                {
                  "value": {
                    "en": "1.4M",
                    "sk": "1,4 mil."
                  },
                  "label": {
                    "en": "hours played",
                    "sk": "odohraných hodín"
                  },
                  "sub": {
                    "en": "Alpha 4.0 release",
                    "sk": "Vydanie Alpha 4.0"
                  }
                },
                {
                  "value": "< 60 s",
                  "label": {
                    "en": "to sell out",
                    "sk": "do vypredania"
                  },
                  "sub": {
                    "en": "Limited item drops",
                    "sk": "Limitované herné predmety"
                  }
                },
                {
                  "value": "30+",
                  "label": {
                    "en": "pro guilds joined",
                    "sk": "profi gíld sa pridalo"
                  }
                },
                {
                  "value": {
                    "en": "$20,000",
                    "sk": "20 000 $"
                  },
                  "label": {
                    "en": "prize pool",
                    "sk": "výherný fond"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "Open in Epic Games Store",
              "sk": "Otvoriť v Epic Games Store"
            },
            "link": null,
            "url": "https://store.epicgames.com/en-US/p/citizen-conflict-95e40e"
          },
          "main": [
            {
              "type": "image",
              "img": {
                "src": "assets/img/citizen-conflict-gameplay.webp",
                "w": 962,
                "h": 544,
                "alt": "Citizen Conflict gameplay screenshot"
              },
              "caption": {
                "en": "Citizen Conflict on the Epic Games Store",
                "sk": "Citizen Conflict v Epic Games Store"
              }
            }
          ]
        },
        {
          "id": "gamefi-hub",
          "title": {
            "en": "GameFi Content Hub",
            "sk": "Obsahový hub GameFi"
          },
          "nav": "GameFi Hub",
          "subtitle": {
            "en": "A Media Partnership with Cointelegraph",
            "sk": "Mediálne partnerstvo s Cointelegraph"
          },
          "layout": "split",
          "flip": true,
          "intro": {
            "en": "I led the launch of a blockchain gaming news hub together with Cointelegraph. It was the main media push behind the company’s token launch on major exchanges in early 2024.",
            "sk": "Spolu s Cointelegraph som viedol spustenie spravodajského hubu o blockchainových hrách. Bol hlavným mediálnym ťahákom pri uvedení tokenu spoločnosti na veľké burzy začiatkom roka 2024."
          },
          "aside": [
            {
              "type": "rows",
              "items": [
                {
                  "icon": "pencil",
                  "title": {
                    "en": "Wrote",
                    "sk": "Písal som"
                  },
                  "sub": {
                    "en": "The first articles, and the tone everything after followed",
                    "sk": "Prvé články a tón, ktorého sa držalo všetko ďalšie"
                  }
                },
                {
                  "icon": "team",
                  "title": {
                    "en": "Teamed up",
                    "sk": "Spolupracoval som"
                  },
                  "sub": {
                    "en": "With Cointelegraph’s editors to keep it on-brand and high quality",
                    "sk": "S redaktormi Cointelegraph, aby obsah sedel so značkou a držal kvalitu"
                  }
                },
                {
                  "icon": "dock",
                  "title": {
                    "en": "Built",
                    "sk": "Postavil som"
                  },
                  "sub": {
                    "en": "The pages and visuals, together with developers and designers",
                    "sk": "Stránky a vizuály spolu s vývojármi a dizajnérmi"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "Open GameFi Hub",
              "sk": "Otvoriť GameFi Hub"
            },
            "link": null,
            "url": "https://cointelegraph.com/sponsored/qorpo-gamefi-hub"
          },
          "main": [
            {
              "type": "image",
              "img": {
                "src": "assets/img/gamefi-hub.webp",
                "w": 1152,
                "h": 648,
                "alt": "GameFi Hub key visual"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "narrative-design",
      "title": {
        "en": "Narrative Design",
        "sk": "Naratívny dizajn"
      },
      "pages": [
        {
          "id": "game-storylines",
          "title": {
            "en": "Game Storylines",
            "sk": "Herné príbehy"
          },
          "layout": "stack",
          "cta": {
            "label": {
              "en": "Read the Stories",
              "sk": "Prečítajte si príbehy"
            },
            "link": "story",
            "url": null
          },
          "main": [
            {
              "type": "cards",
              "cols": 4,
              "items": [
                {
                  "img": {
                    "src": "assets/img/story-1.webp",
                    "w": 576,
                    "h": 600,
                    "alt": "Syndicate Wars comic covers"
                  },
                  "title": "Citizen Conflict: Syndicate Wars 1",
                  "caption": {
                    "en": "Read the story",
                    "sk": "Prečítať príbeh"
                  },
                  "url": "https://drive.google.com/file/d/1jFwPmz2duc6HccrYAyku8Asc63cxA71i/view?usp=sharing"
                },
                {
                  "img": {
                    "src": "assets/img/story-2.webp",
                    "w": 519,
                    "h": 540,
                    "alt": "Hooded character in neon city"
                  },
                  "title": "Citizen Conflict: Syndicate Wars 2",
                  "caption": {
                    "en": "Read the story",
                    "sk": "Prečítať príbeh"
                  },
                  "url": "https://drive.google.com/file/d/1ySx8WPr_CC_CHDH_zrfYaqwGlOMmXZc3/view?usp=sharing"
                },
                {
                  "img": {
                    "src": "assets/img/story-3.webp",
                    "w": 623,
                    "h": 648,
                    "alt": "Armored character next to a car"
                  },
                  "title": "Citizen Conflict: Syndicate Wars 3",
                  "caption": {
                    "en": "Read the story",
                    "sk": "Prečítať príbeh"
                  },
                  "url": "https://drive.google.com/file/d/1kkrqaUwZx32zDNFtk3CYKAGvBNuvLFVL/view?usp=sharing"
                },
                {
                  "img": {
                    "src": "assets/img/story-4.webp",
                    "w": 496,
                    "h": 517,
                    "alt": "AneeMate island artwork"
                  },
                  "title": "AneeMate: Enter the Hidden Island",
                  "caption": {
                    "en": "Read the story",
                    "sk": "Prečítať príbeh"
                  },
                  "url": "https://drive.google.com/file/d/13ZRLVug1Ptt9aQG3ykAry7sQup0it2cl/view?usp=sharing"
                }
              ]
            },
            {
              "type": "steps",
              "items": [
                {
                  "icon": "globe",
                  "title": {
                    "en": "Built the world",
                    "sk": "Vytvoril som svet"
                  },
                  "sub": {
                    "en": "Worked out the lore, characters and plots with the team",
                    "sk": "S tímom som vymyslel lore, postavy a zápletky"
                  }
                },
                {
                  "icon": "pencil",
                  "title": {
                    "en": "Wrote the words",
                    "sk": "Napísal som texty"
                  },
                  "sub": {
                    "en": "The main storylines and all the text inside the game",
                    "sk": "Hlavné dejové línie a všetky texty v hre"
                  }
                },
                {
                  "icon": "team",
                  "title": {
                    "en": "Kept it in sync",
                    "sk": "Držal som všetko v súlade"
                  },
                  "sub": {
                    "en": "Worked with designers and artists so the story fit the gameplay and the look",
                    "sk": "S dizajnérmi a výtvarníkmi som ladil, aby príbeh sedel ku gameplayu aj vizuálu"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "creative-work",
      "title": {
        "en": "Creative Work",
        "sk": "Autorská tvorba"
      },
      "pages": [
        {
          "id": "book-debut",
          "title": {
            "en": "A Book Debut",
            "sk": "Knižný debut"
          },
          "subtitle": {
            "en": "Real-Life Survival Stories for Interez Media",
            "sk": "Skutočné príbehy o prežití pre Interez Media"
          },
          "layout": "split",
          "flip": true,
          "intro": {
            "en": "I co-wrote a book of true stories about people who refused to give up.",
            "sk": "Som spoluautorom knihy skutočných príbehov o ľuďoch, ktorí sa odmietli vzdať."
          },
          "aside": [
            {
              "type": "stats",
              "cols": 4,
              "compact": true,
              "items": [
                {
                  "value": "3",
                  "label": {
                    "en": "authors",
                    "sk": "autori"
                  }
                },
                {
                  "value": "33",
                  "label": {
                    "en": "stories",
                    "sk": "príbehov"
                  }
                },
                {
                  "value": "320",
                  "label": {
                    "en": "pages",
                    "sk": "strán"
                  }
                },
                {
                  "value": "1",
                  "label": "bestseller"
                }
              ]
            },
            {
              "type": "rows",
              "items": [
                {
                  "icon": "docsearch",
                  "title": {
                    "en": "True",
                    "sk": "Pravdivé"
                  },
                  "sub": {
                    "en": "Built on original sources and careful fact-checking",
                    "sk": "Postavené na pôvodných prameňoch a dôkladnom overovaní faktov"
                  }
                },
                {
                  "icon": "pencil",
                  "title": {
                    "en": "Gripping",
                    "sk": "Napínavé"
                  },
                  "sub": {
                    "en": "Historical records turned into stories you can’t put down",
                    "sk": "Historické záznamy premenené na príbehy, ktoré neodložíte"
                  }
                },
                {
                  "icon": "star",
                  "title": {
                    "en": "Well received",
                    "sk": "Dobre prijaté"
                  },
                  "sub": {
                    "en": "Good reviews from the media and readers",
                    "sk": "Dobré recenzie od médií aj čitateľov"
                  }
                }
              ]
            }
          ],
          "cta": {
            "label": {
              "en": "Take a Look",
              "sk": "Pozrite si knihu"
            },
            "link": null,
            "url": "https://obchod.interez.sk/produkt/podla-skutocnej-udalosti/"
          },
          "main": [
            {
              "type": "image",
              "img": {
                "src": "assets/img/book.webp",
                "w": 474,
                "h": 474,
                "alt": "Open book with Slovak text"
              }
            }
          ]
        },
        {
          "id": "something-extra",
          "title": {
            "en": "A Little Something Extra…",
            "sk": "Niečo navyše…"
          },
          "nav": {
            "en": "Music",
            "sk": "Hudba"
          },
          "layout": "split",
          "flip": true,
          "intro": {
            "en": "When I’m not writing, I’m making music and designing sounds. I take it seriously, so if your project needs custom sound, a mix that actually sounds good, or something better than the usual stock music, count me in!",
            "sk": "Keď nepíšem, robím hudbu a navrhujem zvuky. Beriem to vážne, takže ak váš projekt potrebuje vlastný zvuk, mix, ktorý naozaj dobre znie, alebo niečo lepšie ako bežnú hudbu z databanky, rád pomôžem!"
          },
          "aside": [
            {
              "type": "banner",
              "icon": "headphones",
              "text": {
                "en": "Nothing’s out yet, but I’m happy to share if you ask.",
                "sk": "Zatiaľ nič nevyšlo, ale ak sa opýtate, rád vám to ukážem."
              }
            }
          ],
          "cta": {
            "label": {
              "en": "Hidden Link?",
              "sk": "Skrytý odkaz?"
            },
            "link": null,
            "url": "https://drive.google.com/drive/folders/1ohjyU-4N7VII4d8AJkh8_Bt25K0wdbqR?usp=sharing"
          },
          "main": [
            {
              "type": "image",
              "img": {
                "src": "assets/img/studio-music.webp",
                "w": 1100,
                "h": 829,
                "alt": "Home music studio with keyboard, monitors and synthesizers"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "contact",
      "title": {
        "en": "Contact",
        "sk": "Kontakt"
      },
      "pages": [
        {
          "id": "contact",
          "type": "contact",
          "title": {
            "en": "Contact Me",
            "sk": "Kontaktujte ma"
          },
          "intro": {
            "en": "Let’s make something people actually want to read.",
            "sk": "Poďme vytvoriť niečo, čo ľudia naozaj chcú čítať."
          },
          "avatar": {
            "src": "assets/img/avatar.webp",
            "w": 640,
            "h": 640,
            "alt": "Portrait of Pavel Šoral"
          }
        }
      ]
    }
  ]
};
