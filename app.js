/**
 * ============================================================================
 * FACE OF DEATH (FOD) - eFOOTBALL CLAN STATISTICS ENGINE
 * Handles real-time eFootball statistics, leaderboard sorting, weekly MVP
 * calculation algorithms, match result logging, and localStorage synchronization.
 * Now configured with 100% REAL FOD CLAN MEMBERS from the official WhatsApp list!
 * ============================================================================
 */

// --- 1. DEFAULT ROSTER (18 REAL FOD CLAN MEMBERS from WhatsApp group screenshot) ---
const DEFAULT_FOD_ROSTER = [
    {
        "id": "p1",
        "name": "ADAMMSF",
        "role": "Champion",
        "playstyle": "Quick Counter",
        "formation": "4-2-1-3",
        "avatar": "AD",
        "allTimeStats": {
            "gp": 11,
            "w": 7,
            "d": 3,
            "l": 1,
            "gs": 18,
            "gc": 12,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 11,
            "w": 7,
            "d": 3,
            "l": 1,
            "gs": 18,
            "gc": 12,
            "cs": 3
        },
        "form": [
            "L",
            "W",
            "W",
            "W",
            "W",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 424567,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 894783,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 347991,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 958921,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 294064,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 366624,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 27472,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 353206,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 360192,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 244309,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 194739,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            }
        ],
        "gameId": "ASAA-026-981-191"
    },
    {
        "id": "p2",
        "name": "ICONIC",
        "role": "Elite",
        "playstyle": "Possession Game",
        "formation": "4-3-3",
        "avatar": "IC",
        "allTimeStats": {
            "gp": 21,
            "w": 13,
            "d": 4,
            "l": 4,
            "gs": 34,
            "gc": 25,
            "cs": 7
        },
        "weeklyStats": {
            "gp": 21,
            "w": 13,
            "d": 4,
            "l": 4,
            "gs": 34,
            "gc": 25,
            "cs": 7
        },
        "form": [
            "L",
            "L",
            "L",
            "L",
            "W",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 481919,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 293757,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 251695,
                "date": "2026-07-15",
                "opponent": "vs. TLE",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 496156,
                "date": "2026-07-14",
                "opponent": "vs. TGU",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 879486,
                "date": "2026-07-13",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 96157,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 255920,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 280839,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 697980,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 377377,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 929024,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 614529,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 546246,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 524846,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 939556,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 30854,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 95617,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 700794,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 932245,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 427839,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 694304,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            }
        ],
        "gameId": "559-256-733"
    },
    {
        "id": "p3",
        "name": "CRIPPY",
        "role": "Striker Specialist",
        "playstyle": "Long Ball Counter",
        "formation": "4-2-2-2",
        "avatar": "CR",
        "allTimeStats": {
            "gp": 9,
            "w": 7,
            "d": 0,
            "l": 2,
            "gs": 16,
            "gc": 11,
            "cs": 4
        },
        "weeklyStats": {
            "gp": 9,
            "w": 7,
            "d": 0,
            "l": 2,
            "gs": 16,
            "gc": 11,
            "cs": 4
        },
        "form": [
            "L",
            "L",
            "W",
            "W",
            "W",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 465028,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 328637,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 614409,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 675988,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 188896,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 932720,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 599213,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 733821,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 325065,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            }
        ],
        "gameId": "622-070-923"
    },
    {
        "id": "p4",
        "name": "MENDJI",
        "role": "Defensive Anchor",
        "playstyle": "Out Wide",
        "formation": "5-3-2",
        "avatar": "ME",
        "allTimeStats": {
            "gp": 10,
            "w": 6,
            "d": 2,
            "l": 2,
            "gs": 16,
            "gc": 12,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 10,
            "w": 6,
            "d": 2,
            "l": 2,
            "gs": 16,
            "gc": 12,
            "cs": 3
        },
        "form": [
            "L",
            "L",
            "D",
            "W",
            "W",
            "W",
            "W",
            "D"
        ],
        "history": [
            {
                "id": 742486,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 607272,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 337339,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 990367,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 655806,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 594824,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 613778,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 372507,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 583666,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 5219,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            }
        ],
        "gameId": "ASKH-546-714-927"
    },
    {
        "id": "p5",
        "name": "REVX",
        "role": "Veteran",
        "playstyle": "Quick Counter",
        "formation": "4-1-2-3",
        "avatar": "RE",
        "allTimeStats": {
            "gp": 12,
            "w": 9,
            "d": 1,
            "l": 2,
            "gs": 21,
            "gc": 14,
            "cs": 1
        },
        "weeklyStats": {
            "gp": 12,
            "w": 9,
            "d": 1,
            "l": 2,
            "gs": 21,
            "gc": 14,
            "cs": 1
        },
        "form": [
            "W",
            "W",
            "W",
            "W",
            "W",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 459376,
                "date": "2026-07-15",
                "opponent": "vs. TLE",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 955866,
                "date": "2026-07-14",
                "opponent": "vs. TGU",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 643428,
                "date": "2026-07-13",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 88000,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 560146,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 769493,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 777078,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 668376,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 367632,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 328458,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 188862,
                "date": "2026-07-02",
                "opponent": "vs. BL",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 525473,
                "date": "2026-07-01",
                "opponent": "vs. BHO",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            }
        ],
        "gameId": "024-860-259"
    },
    {
        "id": "p6",
        "name": "DOUNDNY",
        "role": "Midfield General",
        "playstyle": "Possession Game",
        "formation": "3-5-2",
        "avatar": "DO",
        "allTimeStats": {
            "gp": 8,
            "w": 5,
            "d": 0,
            "l": 3,
            "gs": 13,
            "gc": 11,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 8,
            "w": 5,
            "d": 0,
            "l": 3,
            "gs": 13,
            "gc": 11,
            "cs": 2
        },
        "form": [
            "W",
            "W",
            "W",
            "W",
            "W",
            "L",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 974146,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 556921,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 530114,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 357563,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 600069,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 713895,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 763409,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 562623,
                "date": "2026-07-03",
                "opponent": "vs. GOAT FC",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            }
        ],
        "gameId": "741-416-305"
    },
    {
        "id": "p7",
        "name": "JHONATHAN",
        "role": "Tactician",
        "playstyle": "Long Ball Counter",
        "formation": "4-4-2",
        "avatar": "JH",
        "allTimeStats": {
            "gp": 11,
            "w": 6,
            "d": 1,
            "l": 4,
            "gs": 17,
            "gc": 15,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 11,
            "w": 6,
            "d": 1,
            "l": 4,
            "gs": 17,
            "gc": 15,
            "cs": 3
        },
        "form": [
            "L",
            "L",
            "W",
            "W",
            "W",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 178822,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 130654,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 2354,
                "date": "2026-07-13",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 311350,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 125740,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 308313,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 140823,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 944484,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 503842,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 3659,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 477407,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            }
        ],
        "gameId": "573-256-551"
    },
    {
        "id": "p8",
        "name": "DOGLY",
        "role": "Wing Wizard",
        "playstyle": "Quick Counter",
        "formation": "4-3-3",
        "avatar": "DG",
        "allTimeStats": {
            "gp": 3,
            "w": 2,
            "d": 0,
            "l": 1,
            "gs": 5,
            "gc": 4,
            "cs": 1
        },
        "weeklyStats": {
            "gp": 3,
            "w": 2,
            "d": 0,
            "l": 1,
            "gs": 5,
            "gc": 4,
            "cs": 1
        },
        "form": [
            "L",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 927964,
                "date": "2026-07-13",
                "opponent": "vs. TET KAFOU",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 596218,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 504858,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            }
        ],
        "gameId": "ASLT-075-560-294"
    },
    {
        "id": "p9",
        "name": "TELO",
        "role": "Elite",
        "playstyle": "Out Wide",
        "formation": "4-2-3-1",
        "avatar": "TE",
        "allTimeStats": {
            "gp": 10,
            "w": 7,
            "d": 0,
            "l": 3,
            "gs": 17,
            "gc": 13,
            "cs": 4
        },
        "weeklyStats": {
            "gp": 10,
            "w": 7,
            "d": 0,
            "l": 3,
            "gs": 17,
            "gc": 13,
            "cs": 4
        },
        "form": [
            "L",
            "L",
            "L",
            "W",
            "W",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 977590,
                "date": "2026-07-18",
                "opponent": "vs. PREDATORS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 552397,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 144225,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 264332,
                "date": "2026-07-14",
                "opponent": "vs. TGU",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 604609,
                "date": "2026-07-13",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 678360,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 74746,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 407863,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 551196,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 985330,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            }
        ],
        "gameId": "962-257-259"
    },
    {
        "id": "p10",
        "name": "LUCIFER",
        "role": "Speedster",
        "playstyle": "Quick Counter",
        "formation": "4-3-3",
        "avatar": "LU",
        "allTimeStats": {
            "gp": 7,
            "w": 2,
            "d": 1,
            "l": 4,
            "gs": 9,
            "gc": 11,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 7,
            "w": 2,
            "d": 1,
            "l": 4,
            "gs": 9,
            "gc": 11,
            "cs": 0
        },
        "form": [
            "L",
            "L",
            "L",
            "L",
            "W",
            "W",
            "D"
        ],
        "history": [
            {
                "id": 77594,
                "date": "2026-07-19",
                "opponent": "vs. Silent Killer",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 549653,
                "date": "2026-07-18",
                "opponent": "vs. PREDATORS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 223819,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 834412,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 689972,
                "date": "2026-07-09",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 846852,
                "date": "2026-07-08",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 842055,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            }
        ],
        "gameId": "Unknown"
    },
    {
        "id": "p11",
        "name": "PAPA GAMING",
        "role": "Veteran",
        "playstyle": "Possession Game",
        "formation": "4-2-1-3",
        "avatar": "PG",
        "allTimeStats": {
            "gp": 19,
            "w": 8,
            "d": 5,
            "l": 6,
            "gs": 27,
            "gc": 25,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 19,
            "w": 8,
            "d": 5,
            "l": 6,
            "gs": 27,
            "gc": 25,
            "cs": 3
        },
        "form": [
            "L",
            "L",
            "L",
            "L",
            "L",
            "L",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 375896,
                "date": "2026-07-23",
                "opponent": "vs. TET KAFOU",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 366898,
                "date": "2026-07-22",
                "opponent": "vs. TBL",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 623963,
                "date": "2026-07-21",
                "opponent": "vs. SWE",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 81253,
                "date": "2026-07-20",
                "opponent": "vs. Storma",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 808228,
                "date": "2026-07-19",
                "opponent": "vs. Silent Killer",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 338701,
                "date": "2026-07-18",
                "opponent": "vs. PREDATORS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 611211,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 888205,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 11657,
                "date": "2026-07-15",
                "opponent": "vs. TLE",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 814630,
                "date": "2026-07-14",
                "opponent": "vs. TGU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 17689,
                "date": "2026-07-13",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 506218,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 2170,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 35955,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 211642,
                "date": "2026-07-07",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 959475,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 839201,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 101508,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 241535,
                "date": "2026-07-04",
                "opponent": "vs. Hbl",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            }
        ],
        "gameId": "683-623-414"
    },
    {
        "id": "p12",
        "name": "WADE",
        "role": "Center-Back Wall",
        "playstyle": "Long Ball Counter",
        "formation": "4-4-2",
        "avatar": "WA",
        "allTimeStats": {
            "gp": 8,
            "w": 3,
            "d": 0,
            "l": 5,
            "gs": 11,
            "gc": 13,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 8,
            "w": 3,
            "d": 0,
            "l": 5,
            "gs": 11,
            "gc": 13,
            "cs": 2
        },
        "form": [
            "L",
            "L",
            "L",
            "L",
            "L",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 716125,
                "date": "2026-07-20",
                "opponent": "vs. Storma",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 888444,
                "date": "2026-07-19",
                "opponent": "vs. Silent Killer",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 985661,
                "date": "2026-07-18",
                "opponent": "vs. PREDATORS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 638223,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 653159,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 358115,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 832594,
                "date": "2026-07-11",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 883404,
                "date": "2026-07-10",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            }
        ],
        "gameId": "ASBB-980-739-493"
    },
    {
        "id": "p13",
        "name": "KWESI",
        "role": "Rising Star",
        "playstyle": "Quick Counter",
        "formation": "4-3-3",
        "avatar": "KW",
        "allTimeStats": {
            "gp": 6,
            "w": 4,
            "d": 0,
            "l": 2,
            "gs": 10,
            "gc": 8,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 6,
            "w": 4,
            "d": 0,
            "l": 2,
            "gs": 10,
            "gc": 8,
            "cs": 3
        },
        "form": [
            "W",
            "W",
            "L",
            "L",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 238312,
                "date": "2026-07-19",
                "opponent": "vs. Silent Killer",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 603009,
                "date": "2026-07-18",
                "opponent": "vs. PREDATORS",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 130940,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 89415,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 263849,
                "date": "2026-07-15",
                "opponent": "vs. TLE",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 287396,
                "date": "2026-07-12",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            }
        ],
        "gameId": "839-282-121"
    },
    {
        "id": "p14",
        "name": "JIMBO",
        "role": "Specialist",
        "playstyle": "Possession Game",
        "formation": "4-3-3",
        "avatar": "JI",
        "allTimeStats": {
            "gp": 13,
            "w": 4,
            "d": 3,
            "l": 6,
            "gs": 17,
            "gc": 19,
            "cs": 1
        },
        "weeklyStats": {
            "gp": 13,
            "w": 4,
            "d": 3,
            "l": 6,
            "gs": 17,
            "gc": 19,
            "cs": 1
        },
        "form": [
            "L",
            "W",
            "W",
            "W",
            "L",
            "W",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 889904,
                "date": "2026-07-24",
                "opponent": "vs. TGU",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 354150,
                "date": "2026-07-23",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            },
            {
                "id": 138300,
                "date": "2026-07-22",
                "opponent": "vs. TBL",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 532262,
                "date": "2026-07-21",
                "opponent": "vs. SWE",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 349808,
                "date": "2026-07-21",
                "opponent": "vs. SWE",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 867582,
                "date": "2026-07-20",
                "opponent": "vs. Storma",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 202655,
                "date": "2026-07-20",
                "opponent": "vs. Storma",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 405473,
                "date": "2026-07-18",
                "opponent": "vs. PREDATORS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 676502,
                "date": "2026-07-17",
                "opponent": "vs. Legendary",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 53269,
                "date": "2026-07-16",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 360433,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 85631,
                "date": "2026-07-06",
                "opponent": "vs. HW",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 928607,
                "date": "2026-07-05",
                "opponent": "vs. HPF",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            }
        ],
        "gameId": "124-136-395"
    },
    {
        "id": "p15",
        "name": "PAU",
        "role": "Prospect",
        "playstyle": "Out Wide",
        "formation": "4-2-3-1",
        "avatar": "PA",
        "allTimeStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "form": [],
        "history": [],
        "gameId": "Unknown"
    },
    {
        "id": "p16",
        "name": "ANDER",
        "role": "Prospect",
        "playstyle": "Long Ball Counter",
        "formation": "4-3-3",
        "avatar": "AN",
        "allTimeStats": {
            "gp": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gs": 2,
            "gc": 1,
            "cs": 1
        },
        "weeklyStats": {
            "gp": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gs": 2,
            "gc": 1,
            "cs": 1
        },
        "form": [
            "W"
        ],
        "history": [
            {
                "id": 944992,
                "date": "2026-07-23",
                "opponent": "vs. TET KAFOU",
                "gs": 2,
                "gc": 1,
                "cs": true,
                "result": "W"
            }
        ],
        "gameId": "Unknown"
    },
    {
        "id": "p17",
        "name": "CHERUBIN",
        "role": "Member",
        "playstyle": "Quick Counter",
        "formation": "4-2-1-3",
        "avatar": "CH",
        "allTimeStats": {
            "gp": 5,
            "w": 1,
            "d": 0,
            "l": 4,
            "gs": 6,
            "gc": 9,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 5,
            "w": 1,
            "d": 0,
            "l": 4,
            "gs": 6,
            "gc": 9,
            "cs": 0
        },
        "form": [
            "W",
            "L",
            "L",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 194864,
                "date": "2026-07-24",
                "opponent": "vs. TGU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 146669,
                "date": "2026-07-23",
                "opponent": "vs. TET KAFOU",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 633108,
                "date": "2026-07-22",
                "opponent": "vs. TBL",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 633767,
                "date": "2026-07-22",
                "opponent": "vs. TBL",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 57385,
                "date": "2026-07-21",
                "opponent": "vs. SWE",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            }
        ],
        "gameId": "ASKJ-014-195-018"
    },
    {
        "id": "p18",
        "name": "ANDJOUZM",
        "role": "New Member",
        "playstyle": "Possession Game",
        "formation": "4-3-3",
        "avatar": "AJ",
        "allTimeStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "form": [],
        "history": [],
        "gameId": "Unknown"
    },
    {
        "id": "p19",
        "name": "GOKU",
        "role": "Player",
        "playstyle": "Unknown",
        "formation": "4-3-3",
        "avatar": "GK",
        "allTimeStats": {
            "gp": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gs": 3,
            "gc": 3,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gs": 3,
            "gc": 3,
            "cs": 0
        },
        "form": [
            "W",
            "L"
        ],
        "history": [
            {
                "id": 84204,
                "date": "2026-07-24",
                "opponent": "vs. TGU",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 617266,
                "date": "2026-07-24",
                "opponent": "vs. TGU",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            }
        ],
        "gameId": "ASMC-054-355-938"
    },
    {
        "id": "p1785437191180",
        "name": "HACKER1840",
        "role": "Clan Member",
        "playstyle": "Balanced",
        "formation": "4-4-2",
        "avatar": "HA",
        "gameId": "Unknown",
        "allTimeStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "form": [],
        "history": []
    },
    {
        "id": "p1785437191181",
        "name": "KENLEY",
        "role": "Clan Member",
        "playstyle": "Balanced",
        "formation": "4-4-2",
        "avatar": "KN",
        "gameId": "885-55-335",
        "allTimeStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 0,
            "w": 0,
            "d": 0,
            "l": 0,
            "gs": 0,
            "gc": 0,
            "cs": 0
        },
        "form": [],
        "history": []
    }
];;

// --- 2. APPLICATION STATE ---
const state = {
    roster: [],
    currentSort: { column: "points", direction: "desc" },
    currentFilter: { search: "", playstyle: "ALL", timeframe: "ALL" },
    selectedPlayer: null,
    editingMatch: null
};

// --- 3. INITIALIZATION & LOCALSTORAGE SYNC ---
const STORAGE_KEY = "fod_efootball_stats_v18_final_24matches";

function initApp() {
    // Remove loading spinner
    const spinner = document.getElementById("intro-spinner");
    if (spinner) {
        spinner.classList.add("fade-out");
        setTimeout(() => {
            try { spinner.remove(); } catch (e) {}
        }, 300);
    }

    // Intro Screen Logic
    const introScreen = document.getElementById("intro-screen");
    if (introScreen) {
        setTimeout(() => {
            introScreen.classList.add("slide-up");
            // After animation completes, remove it from DOM entirely
            setTimeout(() => {
                try { introScreen.remove(); } catch (e) {}
            }, 700); // matches the 0.7s transition
        }, 600); // Hold for 0.6 seconds to let spinner fade out
    }

    initAdminState();
    loadFromStorage();
    setupEventListeners();
    renderAll();
    console.log("⚽ FOD eFootball Clan Statistics (Real WhatsApp Roster) initialized successfully!");
}

function initAdminState() {
    if (sessionStorage.getItem("fod_isAdmin") === "true") {
        document.body.classList.add("admin-mode");
        const adminBtnText = document.getElementById("admin-login-text");
        if (adminBtnText) adminBtnText.textContent = "Admin Logout";
    }
}

function loadFromStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            state.roster = JSON.parse(saved);
        } catch (e) {
            console.warn("Failed to parse stored data. Falling back to default FOD roster.");
            state.roster = JSON.parse(JSON.stringify(DEFAULT_FOD_ROSTER));
        }
    } else {
        state.roster = JSON.parse(JSON.stringify(DEFAULT_FOD_ROSTER));
        saveToStorage();
    }
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.roster));
}

// --- 4. COMPUTED ATTRIBUTES HELPER ---
function getPlayerComputedStats(player) {
    const raw = player.allTimeStats;
    const gp = raw.gp || 0;
    const w = raw.w || 0;
    const d = raw.d || 0;
    const l = raw.l || 0;
    const cs = raw.cs || 0;
    const gs = raw.gs || 0;
    const gc = raw.gc || 0;

    const points = (w * 3) + (d * 1);
    const winRate = gp > 0 ? ((w / gp) * 100).toFixed(1) : "0.0";

    // Calculate current win streak
    let streak = 0;
    const history = player.history || [];
    for (let i = 0; i < history.length; i++) {
        if (history[i].result === "W") {
            streak++;
        } else {
            break;
        }
    }

    return { gp, w, d, l, cs, gs, gc, points, winRate, streak };
}

// --- 6. RENDER FUNCTIONS ---
function renderAll() {
    renderHeroSummary();
    renderRosterTable();
    populateLoggerPlayerSelect();
    renderMiniAwards();
}

function renderHeroSummary() {
    // 1. Gather all logged history matches across all players
    const allMatches = [];
    state.roster.forEach(player => {
        const history = player.history || [];
        history.forEach(m => {
            allMatches.push({
                date: m.date || new Date().toISOString().slice(0, 10),
                // Normalize opponent name (e.g. remove "vs. " prefix, trim, uppercase)
                opponent: (m.opponent || "").replace(/^vs\.\s+/i, "").trim().toUpperCase(),
                result: m.result,
                gs: m.gs || 0,
                gc: m.gc || 0,
                cs: m.cs || false
            });
        });
    });

    // 2. Group matches by unique date & normalized opponent name (each group is a "versus/confrontation")
    const groups = {};
    allMatches.forEach(m => {
        const key = `${m.date}_${m.opponent}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push(m);
    });

    let totMatches = 0; // count of actual individual matches played
    let totCS = 0;      // clean sheets kept by players
    let totGS = 0;      // goals scored by clan
    let totGC = 0;      // goals conceded by clan

    let vsWins = 0;
    let vsDraws = 0;
    let vsLosses = 0;
    let totalVersus = 0;

    Object.values(groups).forEach(groupMatches => {
        let fWins = 0;
        let fLosses = 0;

        groupMatches.forEach(m => {
            totGS += m.gs;
            totGC += m.gc;
            if (m.cs) totCS++;
            totMatches++;

            if (m.result === "W") fWins++;
            else if (m.result === "L") fLosses++;
        });

        // Determine versus outcome
        if (fWins > fLosses) {
            vsWins++;
        } else if (fWins < fLosses) {
            vsLosses++;
        } else {
            vsDraws++;
        }
        totalVersus++;
    });

    const clanWinRate = totalVersus > 0 ? Math.round((vsWins / totalVersus) * 100) : 0;
    const csRatio = totMatches > 0 ? Math.round((totCS / totMatches) * 100) : 0;
    const gd = totGS - totGC;
    
    // Tier classification based on versus win rate
    let clanTier = "Challenger Tier ⚔️";
    if (clanWinRate >= 65) clanTier = "Legendary Elite Tier 🏆";
    else if (clanWinRate >= 50) clanTier = "Pro eSports Tier ⭐";

    // Set records and texts
    const recordEl = document.getElementById("clan-record-val");
    if (recordEl) {
        recordEl.textContent = `${vsWins}W - ${vsDraws}D - ${vsLosses}L`;
    }
    
    const goalsEl = document.getElementById("clan-goals-val");
    if (goalsEl) {
        goalsEl.textContent = `${totGS} / ${totGC}`;
    }

    const gdEl = document.getElementById("clan-gd-val");
    if (gdEl) {
        gdEl.textContent = (gd >= 0 ? `+${gd}` : gd) + " GD";
    }

    const tierEl = document.getElementById("clan-tier-val");
    if (tierEl) {
        tierEl.textContent = clanTier;
    }

    const csRatioEl = document.getElementById("clan-cs-ratio-val");
    if (csRatioEl) {
        csRatioEl.textContent = `${csRatio}% Clean Sheet Ratio`;
    }

    animateCounter("total-matches-val", totalVersus, "");
    animateCounter("clan-winrate-val", clanWinRate, "%");
    animateCounter("total-cs-val", totCS, "");

    // ── Hero section live counters ──────────────────────────────
    animateCounter("hero-matches", totalVersus, "");
    animateCounter("hero-winrate", clanWinRate, "%");
    animateCounter("hero-cs", totCS, "");

    // Member count reflects full FOD WhatsApp clan (53 total members)
    const membersEl = document.getElementById("hero-members");
    if (membersEl) membersEl.textContent = 53;
}

function animateCounter(elementId, targetValue, suffix = "") {
    const el = document.getElementById(elementId);
    if (!el) return;
    const startVal = parseInt(el.textContent) || 0;
    const duration = 600;
    const startTime = performance.now();

    // Easing function for smoother animation
    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function step(currentTime) {
        const elapsed  = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = easeOutCubic(progress);
        const currentVal = Math.floor(startVal + (targetValue - startVal) * eased);
        el.textContent = currentVal + suffix;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = targetValue + suffix;
        }
    }
    requestAnimationFrame(step);
}



function renderRosterTable() {
    const tbody = document.getElementById("roster-tbody");
    const noResultsMsg = document.getElementById("no-results-msg");
    tbody.innerHTML = "";

    const { search } = state.currentFilter;
    const { column, direction } = state.currentSort;

    // 1. Filter Roster
    let filtered = state.roster.filter(player => {
        return player.name.toLowerCase().includes(search.toLowerCase()) ||
               player.role.toLowerCase().includes(search.toLowerCase());
    });

    if (filtered.length === 0) {
        noResultsMsg.classList.remove("hidden");
        return;
    } else {
        noResultsMsg.classList.add("hidden");
    }

    // 2. Prepare Sorting with Computed Stats
    let sortableList = filtered.map(player => {
        const s = getPlayerComputedStats(player);
        return { player, stats: s };
    });

    // First calculate standard ranks based on points descending, then wins as tie-breaker
    const rankList = [...sortableList].sort((a, b) => b.stats.points - a.stats.points || b.stats.w - a.stats.w);
    sortableList.forEach(item => {
        item.rank = rankList.findIndex(r => r.player.id === item.player.id) + 1;
    });

    // Now sort by selected column
    sortableList.sort((a, b) => {
        let valA, valB;
        if (column === "rank") {
            valA = a.rank; valB = b.rank;
        } else if (column === "name") {
            valA = a.player.name.toLowerCase(); valB = b.player.name.toLowerCase();
        } else {
            valA = parseFloat(a.stats[column]) || 0;
            valB = parseFloat(b.stats[column]) || 0;
        }

        if (valA < valB) return direction === "asc" ? -1 : 1;
        if (valA > valB) return direction === "asc" ? 1 : -1;
        return 0;
    });

    // 3. Render Rows
    sortableList.forEach(item => {
        const { player, stats, rank } = item;

        // Build recent form round dots (🟢 / 🟡 / 🔴)
        const formHtml = (player.form || []).slice(0, 6).map(f => {
            const fLower = f.toLowerCase();
            const symbol = f === 'W' ? '🟢' : (f === 'D' ? '🟡' : '🔴');
            const titleText = f === 'W' ? 'Win (Green)' : (f === 'D' ? 'Draw (Yellow)' : 'Loss (Red)');
            return `<span class="form-dot dot-${fLower}" title="${titleText}">${symbol}</span>`;
        }).join("") || `<span class="text-muted">-</span>`;

        const tr = document.createElement("tr");
        const rankBadgeClass = rank <= 3 ? `rank-badge rank-${rank}` : 'rank-badge';
        tr.innerHTML = `
            <td class="text-center"><span class="${rankBadgeClass}">${rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : rank}</span></td>
            <td>
                <div class="player-cell">
                    <div class="player-avatar-small">${player.avatar}</div>
                    <div class="player-name-wrapper">
                        <span class="player-name-link">${player.name}</span>
                    </div>
                </div>
            </td>

            <td class="text-center font-bold">${stats.gp}</td>
            <td class="text-center text-emerald" style="font-size: 1.05rem;">${stats.w} 🟢</td>
            <td class="text-center text-gold" style="font-size: 1.05rem;">${stats.d} 🟡</td>
            <td class="text-center text-crimson" style="font-size: 1.05rem;">${stats.l} 🔴</td>
            <td class="text-center text-emerald" style="font-weight: bold;">${stats.gs}</td>
            <td class="text-center text-crimson" style="font-weight: bold;">${stats.gc}</td>
            <td class="text-center text-cyan">${stats.cs}</td>
            <td class="text-center font-bold">${stats.winRate}%</td>
            <td class="text-center highlight-th font-bold" style="font-size: 1.15rem;">${stats.points}</td>
            <td class="text-center font-bold text-emerald">${stats.streak > 0 ? stats.streak + " 🔥" : "-"}</td>
            <td class="text-center"><div class="form-pills">${formHtml}</div></td>
            <td class="text-right">
                <button class="btn-view-profile" data-id="${player.id}">View Profile</button>
            </td>
        `;

        // Row click opens modal
        tr.addEventListener("click", (e) => {
            openPlayerProfileModal(player.id);
        });

        tbody.appendChild(tr);
    });
}

function populateLoggerPlayerSelect() {
    const select = document.getElementById("input-player");
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = `<option value="">-- Choose FOD Clan Member --</option>`;

    state.roster.forEach(player => {
        const opt = document.createElement("option");
        opt.value = player.id;
        opt.textContent = `${player.name} (${player.role})`;
        select.appendChild(opt);
    });

    if (currentVal) select.value = currentVal;
}

// --- 7. MODAL EVENT HANDLING & LOGIC ---
function setupEventListeners() {
    // Admin Toolbar Toggle
    const btnToggleAdmin = document.getElementById("btn-toggle-admin-toolbar");
    const adminToolbar = document.getElementById("admin-toolbar");
    if (btnToggleAdmin && adminToolbar) {
        btnToggleAdmin.addEventListener("click", () => {
            adminToolbar.classList.toggle("collapsed");
        });
    }

    // A. Table Header Sorting
    document.querySelectorAll(".stats-table th.sortable").forEach(th => {
        th.addEventListener("click", () => {
            const sortCol = th.getAttribute("data-sort");
            if (state.currentSort.column === sortCol) {
                state.currentSort.direction = state.currentSort.direction === "asc" ? "desc" : "asc";
            } else {
                state.currentSort.column = sortCol;
                state.currentSort.direction = (sortCol === "rank" || sortCol === "name") ? "asc" : "desc";
            }
            // Update sort indicator UI
            document.querySelectorAll(".stats-table th.sortable").forEach(header => {
                header.classList.remove("active-sort");
                header.querySelector(".sort-icon").textContent = "";
            });
            th.classList.add("active-sort");
            th.querySelector(".sort-icon").textContent = state.currentSort.direction === "asc" ? " ▲" : " ▼";
            renderRosterTable();
        });
    });

    // B. Filters & Search
    document.getElementById("search-input").addEventListener("input", (e) => {
        state.currentFilter.search = e.target.value;
        renderRosterTable();
    });




    // C. Log Match Modal Open/Close
    const modalLogger = document.getElementById("modal-logger");
    document.getElementById("btn-open-logger").addEventListener("click", () => {
        state.editingMatch = null;
        document.getElementById("modal-logger-title").textContent = "Log eFootball Match Result";
        document.getElementById("input-player").disabled = false;
        document.getElementById("form-log-match").reset();
        modalLogger.classList.remove("hidden");
    });
    document.getElementById("btn-close-logger").addEventListener("click", () => {
        closeLoggerModal();
    });
    document.getElementById("btn-cancel-logger").addEventListener("click", () => {
        closeLoggerModal();
    });


    // E. Match Form Submit Handler
    document.getElementById("form-log-match").addEventListener("submit", (e) => {
        e.preventDefault();
        const playerId = document.getElementById("input-player").value;
        const opponent = document.getElementById("input-opponent").value;
        
        const gs = parseInt(document.getElementById("input-gs").value, 10);
        const gc = parseInt(document.getElementById("input-gc").value, 10);
        
        let result = "D";
        if (gs > gc) result = "W";
        else if (gs < gc) result = "L";
        
        const cs = (gc === 0);

        const player = state.roster.find(p => p.id === playerId);
        if (!player) return;

        if (state.editingMatch) {
            // Edit Mode
            const match = player.history.find(m => m.id === state.editingMatch.matchId);
            if (match) {
                match.opponent = opponent.startsWith("vs.") ? opponent : `vs. ${opponent}`;
                match.gs = gs;
                match.gc = gc;
                match.cs = cs;
                match.result = result;
            }
        } else {
            // Create Mode
            if (!player.history) player.history = [];
            player.history.unshift({
                id: Date.now(),
                date: new Date().toISOString().slice(0, 10),
                opponent: opponent.startsWith("vs.") ? opponent : `vs. ${opponent}`,
                gs, gc, cs, result
            });
        }

        recalculatePlayerStats(player);
        saveToStorage();
        closeLoggerModal();
        renderAll();

        // Brief visual flash on table
        const searchBox = document.getElementById("search-input");
        searchBox.value = "";
        state.currentFilter.search = "";
        renderRosterTable();
    });

    // F. Player Profile Modal Close
    const modalProfile = document.getElementById("modal-profile");
    document.getElementById("btn-close-profile").addEventListener("click", () => {
        modalProfile.classList.add("hidden");
    });
    document.getElementById("btn-close-profile-bottom").addEventListener("click", () => {
        modalProfile.classList.add("hidden");
    });

    // G. Reset & Export Buttons
    document.getElementById("btn-reset-data").addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all clan statistics back to the real 37 Faces of Death WhatsApp roster? All custom logged matches will be cleared.")) {
            localStorage.removeItem(STORAGE_KEY);
            loadFromStorage();
            renderAll();
            alert("⚽ Clan statistics reset to real FOD WhatsApp roster successfully!");
        }
    });



    // Close modals on escape key or backdrop click
    const modalAdmin = document.getElementById("modal-admin");
    
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modalLogger.classList.add("hidden");
            modalProfile.classList.add("hidden");
            if (modalAdmin) modalAdmin.classList.add("hidden");
        }
    });

    window.addEventListener("click", (e) => {
        if (e.target === modalLogger) modalLogger.classList.add("hidden");
        if (e.target === modalProfile) modalProfile.classList.add("hidden");
        if (modalAdmin && e.target === modalAdmin) modalAdmin.classList.add("hidden");
    });

    // H. Admin Control Listeners
    const btnAdminLogin = document.getElementById("btn-admin-login");
    if (btnAdminLogin) {
        btnAdminLogin.addEventListener("click", () => {
            if (sessionStorage.getItem("fod_isAdmin") === "true") {
                sessionStorage.removeItem("fod_isAdmin");
                document.body.classList.remove("admin-mode");
                document.getElementById("admin-login-text").textContent = "Admin Login";
                const toolbar = document.getElementById("admin-toolbar");
                if (toolbar) toolbar.classList.add("collapsed");
                alert("Logged out of Admin mode.");
            } else {
                document.getElementById("admin-error-msg").classList.add("hidden");
                document.getElementById("input-admin-pass").value = "";
                modalAdmin.classList.remove("hidden");
            }
        });
    }

    const btnCloseAdmin = document.getElementById("btn-close-admin");
    const btnCancelAdmin = document.getElementById("btn-cancel-admin");
    if (btnCloseAdmin) btnCloseAdmin.addEventListener("click", () => modalAdmin.classList.add("hidden"));
    if (btnCancelAdmin) btnCancelAdmin.addEventListener("click", () => modalAdmin.classList.add("hidden"));

    const formAdminLogin = document.getElementById("form-admin-login");
    if (formAdminLogin) {
        formAdminLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const pass = document.getElementById("input-admin-pass").value;
            if (pass === "FOD2026!stats") {
                sessionStorage.setItem("fod_isAdmin", "true");
                document.body.classList.add("admin-mode");
                document.getElementById("admin-login-text").textContent = "Admin Logout";
                modalAdmin.classList.add("hidden");
            } else {
                document.getElementById("admin-error-msg").classList.remove("hidden");
            }
        });
    }

    // J. Player Card Modal
    const modalPlayerCard = document.getElementById("modal-player-card");
    document.getElementById("btn-show-card-modal").addEventListener("click", () => {
        openPlayerCardModal();
    });
    document.getElementById("btn-close-player-card").addEventListener("click", () => {
        modalPlayerCard.classList.add("hidden");
    });
    modalPlayerCard.addEventListener("click", (e) => {
        if (e.target === modalPlayerCard) modalPlayerCard.classList.add("hidden");
    });

    // I. Add New Member
    const modalAddMember = document.getElementById("modal-add-member");
    const btnAddMember = document.getElementById("btn-add-member");
    if (btnAddMember) {
        btnAddMember.addEventListener("click", () => {
            document.getElementById("form-add-member").reset();
            document.getElementById("add-member-error").classList.add("hidden");
            modalAddMember.classList.remove("hidden");
        });
    }
    document.getElementById("btn-close-add-member")?.addEventListener("click", () => modalAddMember.classList.add("hidden"));
    
    // Close on backdrop click
    modalAddMember?.addEventListener("click", (e) => {
        if (e.target === modalAddMember) modalAddMember.classList.add("hidden");
    });

    document.getElementById("form-add-member")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("new-member-name").value.trim().toUpperCase();
        const gameId = document.getElementById("new-member-gameid").value.trim();
        const avatar = document.getElementById("new-member-avatar").value.trim().toUpperCase();
        const formation = document.getElementById("new-member-formation").value.trim() || "4-4-2";
        const playstyle = document.getElementById("new-member-playstyle").value.trim() || "Balanced";
        const errEl = document.getElementById("add-member-error");

        // Check for duplicate name
        if (state.roster.find(p => p.name.toUpperCase() === name)) {
            errEl.textContent = `❌ A player named "${name}" already exists in the roster.`;
            errEl.classList.remove("hidden");
            return;
        }

        // Generate a unique ID
        const newId = "p" + Date.now();

        const newPlayer = {
            id: newId,
            name,
            role: "Clan Member",
            playstyle: playstyle,
            formation: formation,
            avatar: avatar,
            gameId: gameId,
            allTimeStats: { gp: 0, w: 0, d: 0, l: 0, gs: 0, gc: 0, cs: 0 },
            weeklyStats: { gp: 0, w: 0, d: 0, l: 0, gs: 0, gc: 0, cs: 0 },
            form: [],
            history: []
        };

        state.roster.push(newPlayer);
        saveToStorage();
        renderAll();

        modalAddMember.classList.add("hidden");
        alert(`✅ ${name} has been added to the FOD clan roster with ID: ${gameId}`);
    });

    // Navigation scroll/click handler (Desktop & Mobile)
    const mobileItems = document.querySelectorAll(".mobile-nav-item");
    const desktopLinks = document.querySelectorAll(".nav-link");
    const sections = [
        { id: "hero" },
        { id: "table-anchor" },
        { id: "potm-anchor" },
        { id: "clan-official-anchor" }
    ];

    function updateActiveNav(activeIdx) {
        mobileItems.forEach((item, idx) => {
            if (idx === activeIdx) item.classList.add("active");
            else item.classList.remove("active");
        });
        desktopLinks.forEach((link, idx) => {
            if (idx === activeIdx) link.classList.add("active");
            else link.classList.remove("active");
        });
    }

    window.addEventListener("scroll", () => {
        let activeIdx = 0;
        let minDiff = Infinity;
        
        sections.forEach((sec, idx) => {
            const el = document.getElementById(sec.id);
            if (el) {
                const rect = el.getBoundingClientRect();
                const diff = Math.abs(rect.top);
                if (diff < minDiff) {
                    minDiff = diff;
                    activeIdx = idx;
                }
            }
        });
        updateActiveNav(activeIdx);
    });

    const allNavs = document.querySelectorAll(".mobile-nav-item, .nav-link");
    allNavs.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: "smooth" });
                const targetIdx = sections.findIndex(s => s.id === targetId);
                if (targetIdx !== -1) {
                    updateActiveNav(targetIdx);
                }
            }
        });
    });
}

// --- 8. PLAYER PROFILE MODAL RENDERER ---
function openPlayerProfileModal(playerId) {
    const player = state.roster.find(p => p.id === playerId);
    if (!player) return;
    state.selectedPlayer = player;

    const s = getPlayerComputedStats(player, state.currentFilter.timeframe);

    document.getElementById("profile-avatar").textContent = player.avatar;
    document.getElementById("profile-name-text").textContent = player.name;
 
    document.getElementById("profile-game-id").textContent = player.gameId || "N/A";   document.getElementById("profile-div-badge").textContent = player.role.split("•")[1] || player.role;

    
    document.getElementById("profile-winrate").textContent = `${s.winRate}%`;
    document.getElementById("profile-points").textContent = `${s.points} PTS`;
    
    document.getElementById("profile-record-text").textContent = `${s.w}🟢 Wins - ${s.d}🟡 Draws - ${s.l}🔴 Losses (${s.gp} Games Played)`;
    
    // Progress bar segment percentages
    const winPct = s.gp > 0 ? (s.w / s.gp) * 100 : 0;
    const drawPct = s.gp > 0 ? (s.d / s.gp) * 100 : 0;
    const lossPct = s.gp > 0 ? (s.l / s.gp) * 100 : 0;
    
    document.getElementById("bar-wins").style.width = `${winPct}%`;
    document.getElementById("bar-draws").style.width = `${drawPct}%`;
    document.getElementById("bar-losses").style.width = `${lossPct}%`;

    document.getElementById("profile-cs").textContent = s.cs;
    document.getElementById("profile-gp-modal").textContent = s.gp;

    // Render history
    const historyList = document.getElementById("profile-history-list");
    historyList.innerHTML = "";
    
    const h = player.history || [];
    if (h.length === 0) {
        historyList.innerHTML = `<div class="text-muted" style="padding: 1rem 0;">No detailed match logs recorded for ${player.name} yet. Use '+ Log Match Result' to add game details!</div>`;
    } else {
        const isAdmin = sessionStorage.getItem("fod_isAdmin") === "true";
        h.forEach(item => {
            const scoreClass = item.result === "W" ? "text-emerald" : (item.result === "D" ? "text-gold" : "text-crimson");
            const badgeText = item.result === "W" ? "🟢 WIN" : (item.result === "D" ? "🟡 DRAW" : "🔴 LOSS");
            const csTag = item.cs ? `<span class="badge-tag text-cyan" style="background: rgba(6, 182, 212, 0.15); border-color: #06B6D4;">CS 🛡️</span>` : "";

            const div = document.createElement("div");
            div.className = "history-item";
            
            let adminActionsHtml = "";
            if (isAdmin) {
                adminActionsHtml = `
                    <div class="h-actions" style="display: flex; gap: 8px; align-items: center; margin-left: 10px;">
                        <button class="btn btn-secondary btn-edit-match" style="padding: 4px 8px; font-size: 0.75rem; min-height: auto; line-height: 1;">✏️ Edit</button>
                        <button class="btn btn-danger-outline btn-delete-match" style="padding: 4px 8px; font-size: 0.75rem; min-height: auto; line-height: 1;">🗑️ Delete</button>
                    </div>
                `;
            }

            div.innerHTML = `
                <div class="h-left">
                    <span style="font-size: 1.1rem; font-weight: 800;">${badgeText}</span>
                    <div>
                        <div class="h-opponent">${item.opponent} ${item.gs !== undefined ? `<span style="color: #cbd5e1; font-weight: bold;">(Score: ${item.gs} - ${item.gc})</span>` : ''}</div>
                        <div class="h-date">${item.date} ${csTag}</div>
                    </div>
                </div>
                ${adminActionsHtml}
            `;

            if (isAdmin) {
                div.querySelector(".btn-edit-match").addEventListener("click", (e) => {
                    e.stopPropagation();
                    openEditMatchModal(player.id, item.id);
                });
                div.querySelector(".btn-delete-match").addEventListener("click", (e) => {
                    e.stopPropagation();
                    handleDeleteMatch(player.id, item.id);
                });
            }

            historyList.appendChild(div);
        });
    }

    document.getElementById("modal-profile").classList.remove("hidden");
}



// ==========================================================================
// INTERNAL LEAGUES LOGIC
// ==========================================================================
const LEAGUES_STORAGE_KEY = "fod_internal_leagues_v1";

let internalLeagues = JSON.parse(localStorage.getItem(LEAGUES_STORAGE_KEY)) || [];
let activeLeagueId = null;

function saveLeagues() {
    localStorage.setItem(LEAGUES_STORAGE_KEY, JSON.stringify(internalLeagues));
}

function initLeagues() {
    // 1. Tab Switching
    const tabLeaderboard = document.getElementById("tab-leaderboard");
    const tabLeagues = document.getElementById("tab-internal-leagues");
    const sectionLeaderboard = document.querySelector(".roster-section[aria-label='Player Roster and Statistics Table']");
    const sectionLeagues = document.getElementById("internal-leagues-section");

    if (tabLeaderboard && tabLeagues) {
        tabLeaderboard.addEventListener("click", () => {
            tabLeaderboard.classList.add("active");
            tabLeagues.classList.remove("active");
            sectionLeaderboard.classList.remove("hidden");
            sectionLeagues.classList.add("hidden");
        });

        tabLeagues.addEventListener("click", () => {
            tabLeagues.classList.add("active");
            tabLeaderboard.classList.remove("active");
            sectionLeagues.classList.remove("hidden");
            sectionLeaderboard.classList.add("hidden");
            renderLeaguesView();
        });
    }

    // 2. Modals
    const modalCreateLeague = document.getElementById("modal-create-league");
    const btnCreateLeague = document.getElementById("btn-create-league");
    if (btnCreateLeague) btnCreateLeague.addEventListener("click", openCreateLeagueModal);
    
    document.getElementById("btn-close-create-league")?.addEventListener("click", () => modalCreateLeague.classList.add("hidden"));
    
    const formCreateLeague = document.getElementById("form-create-league");
    if (formCreateLeague) formCreateLeague.addEventListener("submit", handleCreateLeague);

    const modalLeagueLogger = document.getElementById("modal-league-logger");
    const btnLogLeagueMatch = document.getElementById("btn-log-league-match");
    if (btnLogLeagueMatch) btnLogLeagueMatch.addEventListener("click", openLeagueLoggerModal);

    document.getElementById("btn-close-league-logger")?.addEventListener("click", () => modalLeagueLogger.classList.add("hidden"));

    const formLeagueLogger = document.getElementById("form-league-logger");
    if (formLeagueLogger) formLeagueLogger.addEventListener("submit", handleLogLeagueMatch);

    // League Selection Change
    const leagueSelect = document.getElementById("league-select");
    if (leagueSelect) {
        leagueSelect.addEventListener("change", (e) => {
            activeLeagueId = e.target.value;
            renderActiveLeague();
        });
    }

    // Modal dismiss on escape/click is handled broadly in initApp, 
    // but let's add them to the broad listener
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (modalCreateLeague) modalCreateLeague.classList.add("hidden");
            if (modalLeagueLogger) modalLeagueLogger.classList.add("hidden");
        }
    });
    window.addEventListener("click", (e) => {
        if (e.target === modalCreateLeague) modalCreateLeague.classList.add("hidden");
        if (e.target === modalLeagueLogger) modalLeagueLogger.classList.add("hidden");
    });
}

function renderLeaguesView() {
    const select = document.getElementById("league-select");
    select.innerHTML = '<option value="">-- Select a League --</option>';
    
    if (internalLeagues.length === 0) {
        document.getElementById("no-league-msg").classList.remove("hidden");
        document.getElementById("league-stats-table").classList.add("hidden");
        document.getElementById("league-matches-list").innerHTML = '<p class="text-muted" style="padding: 8px 0;">No leagues created yet. Admin can create one with the button above.</p>';
        return;
    }
    
    internalLeagues.forEach(lg => {
        const opt = document.createElement("option");
        opt.value = lg.id;
        opt.textContent = lg.name;
        select.appendChild(opt);
    });

    if (!activeLeagueId && internalLeagues.length > 0) {
        activeLeagueId = internalLeagues[0].id;
    }

    if (activeLeagueId) {
        select.value = activeLeagueId;
        renderActiveLeague();
    }
}

function getLeagueStandings(league) {
    // Initialize stats for each participant
    const stats = {};
    league.participants.forEach(pid => {
        const player = state.roster.find(p => p.id === pid);
        stats[pid] = {
            id: pid,
            name: player ? player.name : 'Unknown',
            pts: 0, gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0
        };
    });

    // Calculate from matches
    league.matches.forEach(m => {
        const p1 = stats[m.p1_id];
        const p2 = stats[m.p2_id];
        if (!p1 || !p2) return;

        p1.gp++; p2.gp++;
        p1.gf += m.p1_score; p1.ga += m.p2_score;
        p2.gf += m.p2_score; p2.ga += m.p1_score;

        if (m.p1_score > m.p2_score) {
            p1.w++; p1.pts += 3;
            p2.l++;
        } else if (m.p1_score < m.p2_score) {
            p2.w++; p2.pts += 3;
            p1.l++;
        } else {
            p1.d++; p1.pts += 1;
            p2.d++; p2.pts += 1;
        }
    });

    Object.values(stats).forEach(s => s.gd = s.gf - s.ga);

    // Sort by PTS, then GD, then GF
    return Object.values(stats).sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });
}

function renderActiveLeague() {
    const league = internalLeagues.find(l => l.id === activeLeagueId);
    if (!league) return;

    document.getElementById("no-league-msg").classList.add("hidden");
    document.getElementById("league-stats-table").classList.remove("hidden");

    const tbody = document.getElementById("league-tbody");
    tbody.innerHTML = "";

    const standings = getLeagueStandings(league);
    
    standings.forEach((st, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="text-center font-bold">${idx + 1}</td>
            <td class="text-left font-bold" style="color: var(--text-primary);">${st.name}</td>
            <td class="text-center font-bold text-gold">${st.pts}</td>
            <td class="text-center">${st.gp}</td>
            <td class="text-center text-emerald">${st.w}</td>
            <td class="text-center text-gold">${st.d}</td>
            <td class="text-center text-crimson">${st.l}</td>
            <td class="text-center">${st.gf}</td>
            <td class="text-center">${st.ga}</td>
            <td class="text-center">${st.gd > 0 ? '+'+st.gd : st.gd}</td>
        `;
        tbody.appendChild(tr);
    });

    // Render Recent Matches
    const matchesList = document.getElementById("league-matches-list");
    matchesList.innerHTML = "";
    
    if (league.matches.length === 0) {
        matchesList.innerHTML = '<p class="text-muted">No matches logged yet.</p>';
    } else {
        // Show last 10 matches
        const recent = [...league.matches].reverse().slice(0, 10);
        recent.forEach(m => {
            const p1Name = state.roster.find(p => p.id === m.p1_id)?.name || 'Unknown';
            const p2Name = state.roster.find(p => p.id === m.p2_id)?.name || 'Unknown';
            
            const div = document.createElement("div");
            div.style.padding = "8px 12px";
            div.style.background = "rgba(255,255,255,0.05)";
            div.style.borderRadius = "6px";
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            div.innerHTML = `
                <span>${p1Name} <strong>${m.p1_score}</strong> - <strong>${m.p2_score}</strong> ${p2Name}</span>
                <span class="text-muted" style="font-size: 0.8rem;">${m.date}</span>
            `;
            matchesList.appendChild(div);
        });
    }
}

function openCreateLeagueModal() {
    const container = document.getElementById("league-participants-checkboxes");
    container.innerHTML = "";
    
    // Sort roster alphabetically
    const sortedRoster = [...state.roster].sort((a,b) => a.name.localeCompare(b.name));
    
    sortedRoster.forEach(p => {
        const lbl = document.createElement("label");
        lbl.style.display = "flex";
        lbl.style.alignItems = "center";
        lbl.style.gap = "6px";
        lbl.style.cursor = "pointer";
        lbl.innerHTML = `<input type="checkbox" name="league-participant" value="${p.id}"> ${p.name}`;
        container.appendChild(lbl);
    });
    
    document.getElementById("league-name").value = "";
    document.getElementById("modal-create-league").classList.remove("hidden");
}

function handleCreateLeague(e) {
    e.preventDefault();
    const name = document.getElementById("league-name").value.trim();
    const checkboxes = document.querySelectorAll('input[name="league-participant"]:checked');
    
    if (checkboxes.length < 2) {
        alert("Please select at least 2 participants for the league.");
        return;
    }

    const participants = Array.from(checkboxes).map(cb => cb.value);
    
    const newLeague = {
        id: "L_" + Date.now(),
        name,
        participants,
        matches: []
    };

    internalLeagues.push(newLeague);
    saveLeagues();
    
    activeLeagueId = newLeague.id;
    document.getElementById("modal-create-league").classList.add("hidden");
    renderLeaguesView();
}

function openLeagueLoggerModal() {
    const league = internalLeagues.find(l => l.id === activeLeagueId);
    if (!league) return;

    const s1 = document.getElementById("league-player1");
    const s2 = document.getElementById("league-player2");
    
    s1.innerHTML = '<option value="">Select P1</option>';
    s2.innerHTML = '<option value="">Select P2</option>';
    
    const participants = league.participants.map(pid => state.roster.find(p => p.id === pid)).filter(Boolean).sort((a,b) => a.name.localeCompare(b.name));
    
    participants.forEach(p => {
        const opt1 = document.createElement("option"); opt1.value = p.id; opt1.textContent = p.name;
        const opt2 = document.createElement("option"); opt2.value = p.id; opt2.textContent = p.name;
        s1.appendChild(opt1);
        s2.appendChild(opt2);
    });

    document.getElementById("league-p1-score").value = "";
    document.getElementById("league-p2-score").value = "";
    document.getElementById("modal-league-logger").classList.remove("hidden");
}

function handleLogLeagueMatch(e) {
    e.preventDefault();
    const league = internalLeagues.find(l => l.id === activeLeagueId);
    if (!league) return;

    const p1_id = document.getElementById("league-player1").value;
    const p2_id = document.getElementById("league-player2").value;
    const p1_score = parseInt(document.getElementById("league-p1-score").value, 10);
    const p2_score = parseInt(document.getElementById("league-p2-score").value, 10);

    if (!p1_id || !p2_id || p1_id === p2_id) {
        alert("Please select two different players.");
        return;
    }

    const match = {
        id: "LM_" + Date.now(),
        p1_id,
        p2_id,
        p1_score,
        p2_score,
        date: new Date().toISOString().slice(0, 10)
    };

    league.matches.push(match);
    saveLeagues();
    
    document.getElementById("modal-league-logger").classList.add("hidden");
    renderActiveLeague();
}

// Hook into app initialization
const originalInitApp = initApp;
initApp = function() {
    originalInitApp();
    initLeagues();
    initAnnouncement();
    initPOTM();
    initCompare();
};
document.addEventListener("DOMContentLoaded", initApp);

// ==========================================================================
// ANNOUNCEMENT BANNER
// ==========================================================================
const ANNOUNCE_KEY = "fod_announcement_v1";

function initAnnouncement() {
    const saved = localStorage.getItem(ANNOUNCE_KEY);
    if (saved) showAnnouncementBanner(saved);

    // Admin button
    const btnAnnounce = document.getElementById("btn-announce");
    const modalAnnounce = document.getElementById("modal-announce");

    btnAnnounce?.addEventListener("click", () => {
        const current = localStorage.getItem(ANNOUNCE_KEY) || "";
        document.getElementById("announce-text").value = current;
        modalAnnounce.classList.remove("hidden");
    });

    document.getElementById("btn-close-announce")?.addEventListener("click", () => modalAnnounce.classList.add("hidden"));
    modalAnnounce?.addEventListener("click", e => { if (e.target === modalAnnounce) modalAnnounce.classList.add("hidden"); });

    document.getElementById("btn-clear-announce")?.addEventListener("click", () => {
        localStorage.removeItem(ANNOUNCE_KEY);
        document.getElementById("announcement-banner").classList.add("hidden");
        modalAnnounce.classList.add("hidden");
    });

    document.getElementById("form-announce")?.addEventListener("submit", e => {
        e.preventDefault();
        const msg = document.getElementById("announce-text").value.trim();
        if (!msg) return;
        localStorage.setItem(ANNOUNCE_KEY, msg);
        showAnnouncementBanner(msg);
        modalAnnounce.classList.add("hidden");
    });

    document.getElementById("btn-dismiss-announce")?.addEventListener("click", () => {
        document.getElementById("announcement-banner").classList.add("hidden");
    });
}

function showAnnouncementBanner(msg) {
    const banner = document.getElementById("announcement-banner");
    document.getElementById("announcement-text").textContent = msg;
    banner.classList.remove("hidden");
}


// ==========================================================================
// PLAYER OF THE MONTH (POTM)
// Auto-calculated from current-month match history.
// Admin can override with a manual pick stored in localStorage.
// ==========================================================================
const POTM_KEY  = "fod_potm_v1";   // stores { playerId, month } or null
const MONTH_NAMES = ["January","February","March","April","May","June",
                     "July","August","September","October","November","December"];

/** Returns { playerId, w, d, l, gp, pts, winRate, gs, cs } for the best
 *  player this calendar month, or null if no matches this month.           */
function computeAutoPoTM() {
    const now   = new Date();
    const yr    = now.getFullYear();
    const mo    = now.getMonth(); // 0-based

    const scores = state.roster.map(player => {
        const hist = (player.history || []).filter(m => {
            const d = new Date(m.date);
            return d.getFullYear() === yr && d.getMonth() === mo;
        });
        if (!hist.length) return null;
        const w  = hist.filter(m => m.result === "W").length;
        const d  = hist.filter(m => m.result === "D").length;
        const l  = hist.filter(m => m.result === "L").length;
        const gp = hist.length;
        const pts = w * 3 + d;
        const winRate = Math.round((w / gp) * 100);
        const gs = hist.reduce((a, m) => a + (m.gs || 0), 0);
        const cs = hist.filter(m => m.cs === true || m.cs === 1).length;
        return { playerId: player.id, w, d, l, gp, pts, winRate, gs, cs };
    }).filter(Boolean);

    if (!scores.length) return null;

    // Rank: most pts → highest win rate → most GP
    scores.sort((a, b) =>
        b.pts - a.pts || b.winRate - a.winRate || b.gp - a.gp
    );
    return scores[0];
}

function initPOTM() {
    // Set month label
    const now = new Date();
    const label = `${MONTH_NAMES[now.getMonth()]} ${now.getFullYear()}`;
    const monthEl = document.getElementById("potm-month-label");
    if (monthEl) monthEl.textContent = label;

    // Try override first, then auto
    renderPOTM();

    // ── Admin: Override button ──
    const btnSet = document.getElementById("btn-set-potm");
    const modal  = document.getElementById("modal-potm");
    btnSet?.addEventListener("click", () => {
        const sel = document.getElementById("potm-player-select");
        sel.innerHTML = '<option value="">-- Choose a Player --</option>';
        [...state.roster]
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => {
                const opt = document.createElement("option");
                opt.value = p.id;
                opt.textContent = p.name;
                sel.appendChild(opt);
            });
        const saved = localStorage.getItem(POTM_KEY);
        if (saved) {
            try { sel.value = JSON.parse(saved).playerId; } catch(e) {}
        }
        modal.classList.remove("hidden");
    });

    document.getElementById("btn-close-potm")?.addEventListener("click", () => modal.classList.add("hidden"));
    modal?.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

    document.getElementById("form-potm")?.addEventListener("submit", e => {
        e.preventDefault();
        const pid = document.getElementById("potm-player-select").value;
        if (!pid) return;
        localStorage.setItem(POTM_KEY, JSON.stringify({ playerId: pid, manual: true }));
        renderPOTM();
        modal.classList.add("hidden");
    });

    // ── Admin: Clear override ──
    document.getElementById("btn-clear-potm")?.addEventListener("click", () => {
        localStorage.removeItem(POTM_KEY);
        renderPOTM();
    });
}

function renderPOTM() {
    let data   = null;
    let manual = false;

    const saved = localStorage.getItem(POTM_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            const player = state.roster.find(p => p.id === parsed.playerId);
            if (player) {
                // Compute this month's stats for the overridden player
                const now = new Date();
                const yr = now.getFullYear();
                const mo = now.getMonth();
                const hist = (player.history || []).filter(m => {
                    const d = new Date(m.date);
                    return d.getFullYear() === yr && d.getMonth() === mo;
                });
                const w  = hist.filter(m => m.result === "W").length;
                const d  = hist.filter(m => m.result === "D").length;
                const l  = hist.filter(m => m.result === "L").length;
                const gp = hist.length;
                const pts = w * 3 + d;
                const winRate = gp > 0 ? Math.round((w / gp) * 100) : 0;
                const gs = hist.reduce((a, m) => a + (m.gs || 0), 0);
                const cs = hist.filter(m => m.cs === true || m.cs === 1).length;
                data = { playerId: parsed.playerId, w, d, l, gp, pts, winRate, gs, cs };
                manual = true;
            }
        } catch(e) {}
    }

    if (!data) data = computeAutoPoTM();

    const autoTagEl = document.getElementById("potm-auto-tag");

    if (!data) {
        // No matches this month
        document.getElementById("potm-avatar").textContent = "?";
        document.getElementById("potm-name").textContent = "No data yet";
        if (autoTagEl) { autoTagEl.textContent = "NO MATCHES THIS MONTH"; autoTagEl.style.background = "rgba(100,100,100,0.2)"; }
        ["potm-w","potm-d","potm-l","potm-pts","potm-gp","potm-wr","potm-gs","potm-cs"]
            .forEach(id => { const el = document.getElementById(id); if(el) el.textContent = "—"; });
        return;
    }

    const player = state.roster.find(p => p.id === data.playerId);
    if (!player) return;

    document.getElementById("potm-avatar").textContent = player.avatar || "⚽";
    document.getElementById("potm-name").textContent   = player.name;
    document.getElementById("potm-w").textContent      = data.w;
    document.getElementById("potm-d").textContent      = data.d;
    document.getElementById("potm-l").textContent      = data.l;
    document.getElementById("potm-pts").textContent    = data.pts;
    document.getElementById("potm-gp").textContent     = data.gp;
    document.getElementById("potm-wr").textContent     = data.winRate + "%";
    document.getElementById("potm-gs").textContent     = data.gs;
    document.getElementById("potm-cs").textContent     = data.cs;

    if (autoTagEl) {
        autoTagEl.textContent = manual ? "ADMIN PICK" : "AUTO-CALCULATED";
        autoTagEl.style.background = manual
            ? "rgba(244,37,73,0.15)"
            : "rgba(168,85,247,0.15)";
        autoTagEl.style.color = manual ? "var(--neon-crimson)" : "#a855f7";
        autoTagEl.style.borderColor = manual
            ? "rgba(244,37,73,0.3)"
            : "rgba(168,85,247,0.3)";
    }
}


function recalculatePlayerStats(player) {
    const history = player.history || [];
    
    // Reset stats
    player.allTimeStats = { gp: 0, w: 0, d: 0, l: 0, gs: 0, gc: 0, cs: 0 };
    player.weeklyStats = { gp: 0, w: 0, d: 0, l: 0, gs: 0, gc: 0, cs: 0 };
    player.form = [];

    // Reconstruct stats by iterating in reverse (oldest to newest) to match incrementing behavior
    // history is sorted newest first, so reverse it for stat construction
    const chronologicallySorted = [...history].reverse();

    chronologicallySorted.forEach(m => {
        player.allTimeStats.gp++;
        if (m.result === "W") player.allTimeStats.w++;
        else if (m.result === "D") player.allTimeStats.d++;
        else if (m.result === "L") player.allTimeStats.l++;
        
        if (m.cs || m.gc === 0) player.allTimeStats.cs++;
        player.allTimeStats.gs += m.gs || 0;
        player.allTimeStats.gc += m.gc || 0;

        // Keep form updated to max 8 items
        player.form.unshift(m.result);
        if (player.form.length > 8) player.form.pop();
    });

    player.weeklyStats = { ...player.allTimeStats };
}

function openEditMatchModal(playerId, matchId) {
    const player = state.roster.find(p => p.id === playerId);
    if (!player) return;
    const match = player.history.find(m => m.id === matchId);
    if (!match) return;

    state.editingMatch = { playerId, matchId };

    document.getElementById("modal-logger-title").textContent = "Edit eFootball Match Result";
    document.getElementById("input-player").value = playerId;
    document.getElementById("input-player").disabled = true;
    document.getElementById("input-opponent").value = match.opponent.replace(/^vs\.\s+/, "");
    document.getElementById("input-gs").value = match.gs;
    document.getElementById("input-gc").value = match.gc;

    document.getElementById("modal-logger").classList.remove("hidden");
    document.getElementById("modal-profile").classList.add("hidden");
}

function handleDeleteMatch(playerId, matchId) {
    const player = state.roster.find(p => p.id === playerId);
    if (!player) return;
    
    if (confirm(`Are you sure you want to delete this match result for ${player.name}?`)) {
        player.history = (player.history || []).filter(m => m.id !== matchId);
        recalculatePlayerStats(player);
        saveToStorage();
        renderAll();
        
        // Refresh the profile modal
        openPlayerProfileModal(playerId);
    }
}

function closeLoggerModal() {
    document.getElementById("modal-logger").classList.add("hidden");
    state.editingMatch = null;
    document.getElementById("modal-logger-title").textContent = "Log eFootball Match Result";
    document.getElementById("input-player").disabled = false;
    document.getElementById("form-log-match").reset();
}

// ==========================================================================
// MINI AWARDS LEADERBOARDS
// ==========================================================================
function renderMiniAwards() {
    // 1. Top Scorers (Golden Boot)
    const scorers = [...state.roster]
        .map(p => ({ name: p.name, val: getPlayerComputedStats(p).gs }))
        .sort((a, b) => b.val - a.val)
        .slice(0, 3);

    // 2. Top Clean Sheets (Golden Glove)
    const keepers = [...state.roster]
        .map(p => ({ name: p.name, val: getPlayerComputedStats(p).cs }))
        .sort((a, b) => b.val - a.val)
        .slice(0, 3);

    const rankClasses = ["rank-gold", "rank-silver", "rank-bronze"];

    // Render scorers
    const scorersList = document.getElementById("top-scorers-list");
    if (scorersList) {
        scorersList.innerHTML = scorers.map((s, idx) => `
            <div class="award-row">
                <div class="award-row-left">
                    <span class="award-rank-badge ${rankClasses[idx]}">${idx + 1}</span>
                    <span class="award-player-name">${s.name}</span>
                </div>
                <span class="award-stat-val text-emerald">${s.val} Goals</span>
            </div>
        `).join("");
    }

    // Render keepers
    const keepersList = document.getElementById("top-cs-list");
    if (keepersList) {
        keepersList.innerHTML = keepers.map((k, idx) => `
            <div class="award-row">
                <div class="award-row-left">
                    <span class="award-rank-badge ${rankClasses[idx]}">${idx + 1}</span>
                    <span class="award-player-name">${k.name}</span>
                </div>
                <span class="award-stat-val text-cyan">${k.val} CS</span>
            </div>
        `).join("");
    }
}

// ==========================================================================
// HEAD-TO-HEAD COMPARISON
// ==========================================================================
function initCompare() {
    const toggleHeader = document.getElementById("compare-toggle-header");
    const compareBody = document.getElementById("compare-body");
    const toggleIcon = document.getElementById("compare-toggle-icon");

    toggleHeader?.addEventListener("click", () => {
        const isHidden = compareBody.classList.toggle("hidden");
        toggleIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
        if (!isHidden) {
            populateCompareDropdowns();
        }
    });

    const p1Select = document.getElementById("compare-p1");
    const p2Select = document.getElementById("compare-p2");

    p1Select?.addEventListener("change", renderCompareResults);
    p2Select?.addEventListener("change", renderCompareResults);
}

function populateCompareDropdowns() {
    const p1Select = document.getElementById("compare-p1");
    const p2Select = document.getElementById("compare-p2");
    if (!p1Select || !p2Select) return;

    const currentP1 = p1Select.value;
    const currentP2 = p2Select.value;

    const optHtml = '<option value="">-- Select Player --</option>' + 
        [...state.roster]
            .sort((a,b) => a.name.localeCompare(b.name))
            .map(p => `<option value="${p.id}">${p.name}</option>`)
            .join("");

    p1Select.innerHTML = optHtml;
    p2Select.innerHTML = optHtml;

    p1Select.value = currentP1;
    p2Select.value = currentP2;
}

// Re-expose populateCompareDropdowns to make sure it runs on roster changes
const originalRenderAll = renderAll;
renderAll = function() {
    originalRenderAll();
    const compareBody = document.getElementById("compare-body");
    if (compareBody && !compareBody.classList.contains("hidden")) {
        populateCompareDropdowns();
        renderCompareResults();
    }
};

function renderCompareResults() {
    const p1Select = document.getElementById("compare-p1");
    const p2Select = document.getElementById("compare-p2");
    const resultsEl = document.getElementById("compare-results");
    if (!p1Select || !p2Select || !resultsEl) return;

    const p1Id = p1Select.value;
    const p2Id = p2Select.value;

    if (!p1Id || !p2Id) {
        resultsEl.classList.add("hidden");
        return;
    }

    const p1 = state.roster.find(p => p.id === p1Id);
    const p2 = state.roster.find(p => p.id === p2Id);
    if (!p1 || !p2) return;

    const s1 = getPlayerComputedStats(p1);
    const s2 = getPlayerComputedStats(p2);

    resultsEl.classList.remove("hidden");

    // Helper to add winning class to higher stats
    const highlight = (v1, v2) => {
        if (v1 > v2) return ['stat-winner', ''];
        if (v2 > v1) return ['', 'stat-winner'];
        return ['', ''];
    };

    const wr1 = parseFloat(s1.winRate);
    const wr2 = parseFloat(s2.winRate);

    const [wClassGP1, wClassGP2] = highlight(s1.gp, s2.gp);
    const [wClassW1, wClassW2] = highlight(s1.w, s2.w);
    const [wClassD1, wClassD2] = highlight(s1.d, s2.d);
    const [wClassL1, wClassL2] = highlight(s2.l, s1.l); // Lower loss count wins!
    const [wClassGS1, wClassGS2] = highlight(s1.gs, s2.gs);
    const [wClassGC1, wClassGC2] = highlight(s2.gc, s1.gc); // Lower conceded count wins!
    const [wClassCS1, wClassCS2] = highlight(s1.cs, s2.cs);
    const [wClassPTS1, wClassPTS2] = highlight(s1.points, s2.points);
    const [wClassWR1, wClassWR2] = highlight(wr1, wr2);
    const [wClassStr1, wClassStr2] = highlight(s1.streak, s2.streak);

    resultsEl.innerHTML = `
        <div class="compare-grid">
            <!-- Header Row -->
            <div class="compare-header-row">
                <div class="compare-header-player">
                    <div class="compare-avatar-large">${p1.avatar}</div>
                    <span class="award-player-name" style="font-size: 1.1rem;">${p1.name}</span>
                    <span class="badge-tag text-muted" style="font-size:0.75rem;">${p1.playstyle}</span>
                </div>
                <div></div>
                <div class="compare-header-player">
                    <div class="compare-avatar-large">${p2.avatar}</div>
                    <span class="award-player-name" style="font-size: 1.1rem;">${p2.name}</span>
                    <span class="badge-tag text-muted" style="font-size:0.75rem;">${p2.playstyle}</span>
                </div>
            </div>

            <!-- Stats Rows -->
            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassGP1}">${s1.gp}</span>
                <span class="compare-stat-label">Matches Played</span>
                <span class="compare-stat-value compare-p2-val ${wClassGP2}">${s2.gp}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassW1} text-emerald">${s1.w}</span>
                <span class="compare-stat-label">Wins</span>
                <span class="compare-stat-value compare-p2-val ${wClassW2} text-emerald">${s2.w}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassD1} text-gold">${s1.d}</span>
                <span class="compare-stat-label">Draws</span>
                <span class="compare-stat-value compare-p2-val ${wClassD2} text-gold">${s2.d}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassL1} text-crimson">${s1.l}</span>
                <span class="compare-stat-label">Losses</span>
                <span class="compare-stat-value compare-p2-val ${wClassL2} text-crimson">${s2.l}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassGS1} text-emerald">${s1.gs}</span>
                <span class="compare-stat-label">Goals Scored</span>
                <span class="compare-stat-value compare-p2-val ${wClassGS2} text-emerald">${s2.gs}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassGC1} text-crimson">${s1.gc}</span>
                <span class="compare-stat-label">Goals Conceded</span>
                <span class="compare-stat-value compare-p2-val ${wClassGC2} text-crimson">${s2.gc}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassCS1} text-cyan">${s1.cs}</span>
                <span class="compare-stat-label">Clean Sheets</span>
                <span class="compare-stat-value compare-p2-val ${wClassCS2} text-cyan">${s2.cs}</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassWR1}">${s1.winRate}%</span>
                <span class="compare-stat-label">Win Percentage</span>
                <span class="compare-stat-value compare-p2-val ${wClassWR2}">${s2.winRate}%</span>
            </div>

            <div class="compare-stat-row">
                <span class="compare-stat-value compare-p1-val ${wClassStr1} text-emerald">${s1.streak} 🔥</span>
                <span class="compare-stat-label">Win Streak</span>
                <span class="compare-stat-value compare-p2-val ${wClassStr2} text-emerald">${s2.streak} 🔥</span>
            </div>

            <div class="compare-stat-row" style="border-bottom: none;">
                <span class="compare-stat-value compare-p1-val ${wClassPTS1} text-gold" style="font-size: 1.5rem;">${s1.points}</span>
                <span class="compare-stat-label" style="font-size: 1rem; color: var(--text-primary);">Total Points</span>
                <span class="compare-stat-value compare-p2-val ${wClassPTS2} text-gold" style="font-size: 1.5rem;">${s2.points}</span>
            </div>
        </div>
    `;
}

// ==========================================================================
// FUT PLAYER CARD GENERATOR
// ==========================================================================
function openPlayerCardModal() {
    const player = state.selectedPlayer;
    if (!player) return;

    const s = getPlayerComputedStats(player);
    const winRate = s.gp > 0 ? Math.round((s.w / s.gp) * 100) : 0;
    
    // eFootball FUT style overall rating calculation:
    // Formula weighting: Win Rate (60%), Points (30%), Clean Sheets (10%)
    let rating = Math.round((winRate * 0.6) + (s.points * 0.3) + (s.cs * 1.0));
    
    // Bounds limits: Min 60, Max 99
    if (rating > 99) rating = 99;
    if (rating < 60) rating = 60;
    if (s.gp === 0) rating = 60;

    document.getElementById("card-rating").textContent = rating;
    document.getElementById("card-position").textContent = player.formation || "FOD";
    document.getElementById("card-avatar").textContent = player.avatar;
    document.getElementById("card-name").textContent = player.name;
    document.getElementById("card-stat-gp").textContent = s.gp;
    document.getElementById("card-stat-wr").textContent = winRate + "%";
    document.getElementById("card-stat-gs").textContent = s.gs;
    document.getElementById("card-stat-cs").textContent = s.cs;

    document.getElementById("modal-player-card").classList.remove("hidden");
}
