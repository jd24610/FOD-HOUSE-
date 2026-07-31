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
            "gp": 7,
            "w": 4,
            "d": 2,
            "l": 1,
            "gs": 14,
            "gc": 7,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 7,
            "w": 4,
            "d": 2,
            "l": 1,
            "gs": 14,
            "gc": 7,
            "cs": 3
        },
        "form": [
            "L",
            "W",
            "W",
            "D",
            "D"
        ],
        "history": [
            {
                "id": 98,
                "date": "2026-07-30",
                "opponent": "vs. LUFFY",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 95,
                "date": "2026-07-30",
                "opponent": "vs. JERRY",
                "gs": 3,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 79,
                "date": "2026-07-30",
                "opponent": "vs. RADUAN",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 37,
                "date": "2026-07-30",
                "opponent": "vs. KENO",
                "gs": 2,
                "gc": 2,
                "cs": false,
                "result": "D"
            },
            {
                "id": 26,
                "date": "2026-07-30",
                "opponent": "vs. REMY",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 19,
                "date": "2026-07-30",
                "opponent": "vs. LIL G",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 12,
                "date": "2026-07-30",
                "opponent": "vs. NOËL (SW)",
                "gs": 4,
                "gc": 2,
                "cs": false,
                "result": "W"
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
            "gp": 20,
            "w": 13,
            "d": 3,
            "l": 4,
            "gs": 38,
            "gc": 19,
            "cs": 9
        },
        "weeklyStats": {
            "gp": 20,
            "w": 13,
            "d": 3,
            "l": 4,
            "gs": 38,
            "gc": 19,
            "cs": 9
        },
        "form": [
            "W",
            "W",
            "W",
            "W",
            "L"
        ],
        "history": [
            {
                "id": 124,
                "date": "2026-07-30",
                "opponent": "vs. Manual Entry (Win)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 123,
                "date": "2026-07-30",
                "opponent": "vs. Manual Entry (Win)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 122,
                "date": "2026-07-30",
                "opponent": "vs. Manual Entry (Win)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 116,
                "date": "2026-07-30",
                "opponent": "vs. NATURAL BOY",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 108,
                "date": "2026-07-30",
                "opponent": "vs. K12",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 101,
                "date": "2026-07-30",
                "opponent": "vs. FABIANO",
                "gs": 5,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 93,
                "date": "2026-07-30",
                "opponent": "vs. GUSTAVE",
                "gs": 3,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 86,
                "date": "2026-07-30",
                "opponent": "vs. FRESCO",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 83,
                "date": "2026-07-30",
                "opponent": "vs. JAMESLY",
                "gs": 0,
                "gc": 0,
                "cs": true,
                "result": "D"
            },
            {
                "id": 78,
                "date": "2026-07-30",
                "opponent": "vs. KENO",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 66,
                "date": "2026-07-30",
                "opponent": "vs. KYRO",
                "gs": 2,
                "gc": 2,
                "cs": false,
                "result": "D"
            },
            {
                "id": 60,
                "date": "2026-07-30",
                "opponent": "vs. MASTER CeD",
                "gs": 1,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 54,
                "date": "2026-07-30",
                "opponent": "vs. PLUGLOULOU",
                "gs": 1,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 48,
                "date": "2026-07-30",
                "opponent": "vs. CARLOS",
                "gs": 4,
                "gc": 2,
                "cs": false,
                "result": "W"
            },
            {
                "id": 42,
                "date": "2026-07-30",
                "opponent": "vs. JXY",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 33,
                "date": "2026-07-30",
                "opponent": "vs. GREGZ",
                "gs": 4,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 23,
                "date": "2026-07-30",
                "opponent": "vs. MILENSLY",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 18,
                "date": "2026-07-30",
                "opponent": "vs. NALDO",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 9,
                "date": "2026-07-30",
                "opponent": "vs. WINSTON (SW)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 1,
                "date": "2026-07-30",
                "opponent": "vs. FLEX",
                "gs": 3,
                "gc": 1,
                "cs": false,
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
            "gp": 10,
            "w": 7,
            "d": 1,
            "l": 2,
            "gs": 17,
            "gc": 9,
            "cs": 5
        },
        "weeklyStats": {
            "gp": 10,
            "w": 7,
            "d": 1,
            "l": 2,
            "gs": 17,
            "gc": 9,
            "cs": 5
        },
        "form": [
            "W",
            "L",
            "W",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 113,
                "date": "2026-07-30",
                "opponent": "vs. FABIANO",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 109,
                "date": "2026-07-30",
                "opponent": "vs. KAKASHI",
                "gs": 2,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 99,
                "date": "2026-07-30",
                "opponent": "vs. ALY",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 94,
                "date": "2026-07-30",
                "opponent": "vs. EL PISTOLERO",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 80,
                "date": "2026-07-30",
                "opponent": "vs. GDOPE",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 70,
                "date": "2026-07-30",
                "opponent": "vs. TISMEY",
                "gs": 2,
                "gc": 2,
                "cs": false,
                "result": "D"
            },
            {
                "id": 68,
                "date": "2026-07-30",
                "opponent": "vs. PLAYBOY",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 31,
                "date": "2026-07-30",
                "opponent": "vs. VALENTINO",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 13,
                "date": "2026-07-30",
                "opponent": "vs. LED THE KING (SW)",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 6,
                "date": "2026-07-30",
                "opponent": "vs. PLEK",
                "gs": 3,
                "gc": 1,
                "cs": false,
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
            "gp": 7,
            "w": 4,
            "d": 2,
            "l": 1,
            "gs": 13,
            "gc": 6,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 7,
            "w": 4,
            "d": 2,
            "l": 1,
            "gs": 13,
            "gc": 6,
            "cs": 2
        },
        "form": [
            "D",
            "D",
            "W",
            "W",
            "L"
        ],
        "history": [
            {
                "id": 102,
                "date": "2026-07-30",
                "opponent": "vs. KHEVIN",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 77,
                "date": "2026-07-30",
                "opponent": "vs. RICKY",
                "gs": 2,
                "gc": 2,
                "cs": false,
                "result": "D"
            },
            {
                "id": 56,
                "date": "2026-07-30",
                "opponent": "vs. DUMGAS",
                "gs": 3,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 43,
                "date": "2026-07-30",
                "opponent": "vs. CHARMER",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 25,
                "date": "2026-07-30",
                "opponent": "vs. TEDGY",
                "gs": 0,
                "gc": 1,
                "cs": false,
                "result": "L"
            },
            {
                "id": 16,
                "date": "2026-07-30",
                "opponent": "vs. MACK_BOY",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 4,
                "date": "2026-07-30",
                "opponent": "vs. LEGEND",
                "gs": 3,
                "gc": 0,
                "cs": true,
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
            "gp": 7,
            "w": 4,
            "d": 1,
            "l": 2,
            "gs": 10,
            "gc": 10,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 7,
            "w": 4,
            "d": 1,
            "l": 2,
            "gs": 10,
            "gc": 10,
            "cs": 2
        },
        "form": [
            "D",
            "W",
            "W",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 110,
                "date": "2026-07-30",
                "opponent": "vs. KHEVIN",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 49,
                "date": "2026-07-30",
                "opponent": "vs. TITINHO",
                "gs": 3,
                "gc": 2,
                "cs": false,
                "result": "W"
            },
            {
                "id": 35,
                "date": "2026-07-30",
                "opponent": "vs. DIEGO A",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 32,
                "date": "2026-07-30",
                "opponent": "vs. SPARTACUS",
                "gs": 0,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 20,
                "date": "2026-07-30",
                "opponent": "vs. REYOBERD",
                "gs": 0,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 15,
                "date": "2026-07-30",
                "opponent": "vs. CALM",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 10,
                "date": "2026-07-30",
                "opponent": "vs. JIC (SW)",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
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
            "gp": 5,
            "w": 3,
            "d": 0,
            "l": 2,
            "gs": 13,
            "gc": 10,
            "cs": 1
        },
        "weeklyStats": {
            "gp": 5,
            "w": 3,
            "d": 0,
            "l": 2,
            "gs": 13,
            "gc": 10,
            "cs": 1
        },
        "form": [
            "L",
            "W",
            "W",
            "L",
            "W"
        ],
        "history": [
            {
                "id": 115,
                "date": "2026-07-30",
                "opponent": "vs. BORUTO",
                "gs": 0,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 67,
                "date": "2026-07-30",
                "opponent": "vs. 909 MTF",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 57,
                "date": "2026-07-30",
                "opponent": "vs. SHIVOU",
                "gs": 5,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 51,
                "date": "2026-07-30",
                "opponent": "vs. MARVENS",
                "gs": 2,
                "gc": 5,
                "cs": false,
                "result": "L"
            },
            {
                "id": 44,
                "date": "2026-07-30",
                "opponent": "vs. CAPOIS",
                "gs": 5,
                "gc": 2,
                "cs": false,
                "result": "W"
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
            "gp": 5,
            "w": 3,
            "d": 0,
            "l": 2,
            "gs": 7,
            "gc": 6,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 5,
            "w": 3,
            "d": 0,
            "l": 2,
            "gs": 7,
            "gc": 6,
            "cs": 2
        },
        "form": [
            "W",
            "L",
            "L",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 104,
                "date": "2026-07-30",
                "opponent": "vs. BORUTO",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 53,
                "date": "2026-07-30",
                "opponent": "vs. CARL10",
                "gs": 0,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 39,
                "date": "2026-07-30",
                "opponent": "vs. ALEXANDRE",
                "gs": 0,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 28,
                "date": "2026-07-30",
                "opponent": "vs. MOHA",
                "gs": 3,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 27,
                "date": "2026-07-30",
                "opponent": "vs. SAVAGE",
                "gs": 3,
                "gc": 0,
                "cs": true,
                "result": "W"
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
            "gs": 2,
            "gc": 1,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 3,
            "w": 2,
            "d": 0,
            "l": 1,
            "gs": 2,
            "gc": 1,
            "cs": 2
        },
        "form": [
            "W",
            "L",
            "W"
        ],
        "history": [
            {
                "id": 81,
                "date": "2026-07-30",
                "opponent": "vs. LUKAS PIT",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 74,
                "date": "2026-07-30",
                "opponent": "vs. MATADOR",
                "gs": 0,
                "gc": 1,
                "cs": false,
                "result": "L"
            },
            {
                "id": 64,
                "date": "2026-07-30",
                "opponent": "vs. T.POLTES",
                "gs": 1,
                "gc": 0,
                "cs": true,
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
            "gp": 6,
            "w": 4,
            "d": 0,
            "l": 2,
            "gs": 9,
            "gc": 6,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 6,
            "w": 4,
            "d": 0,
            "l": 2,
            "gs": 9,
            "gc": 6,
            "cs": 3
        },
        "form": [
            "W",
            "W",
            "L",
            "W",
            "L"
        ],
        "history": [
            {
                "id": 107,
                "date": "2026-07-30",
                "opponent": "vs. NATURAL",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 73,
                "date": "2026-07-30",
                "opponent": "vs. MADARA",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 62,
                "date": "2026-07-30",
                "opponent": "vs. THE KING",
                "gs": 0,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 47,
                "date": "2026-07-30",
                "opponent": "vs. SGM",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 41,
                "date": "2026-07-30",
                "opponent": "vs. TISMEY",
                "gs": 2,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 14,
                "date": "2026-07-30",
                "opponent": "vs. POGBA (SW)",
                "gs": 2,
                "gc": 0,
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
            "gc": 14,
            "cs": 2
        },
        "weeklyStats": {
            "gp": 7,
            "w": 2,
            "d": 1,
            "l": 4,
            "gs": 9,
            "gc": 14,
            "cs": 2
        },
        "form": [
            "D",
            "L",
            "L",
            "W",
            "L"
        ],
        "history": [
            {
                "id": 111,
                "date": "2026-07-30",
                "opponent": "vs. BIGY",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 97,
                "date": "2026-07-30",
                "opponent": "vs. POPBENS",
                "gs": 2,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 87,
                "date": "2026-07-30",
                "opponent": "vs. FLEX",
                "gs": 0,
                "gc": 5,
                "cs": false,
                "result": "L"
            },
            {
                "id": 55,
                "date": "2026-07-30",
                "opponent": "vs. ASTA",
                "gs": 2,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 30,
                "date": "2026-07-30",
                "opponent": "vs. SPARTACUS",
                "gs": 2,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 22,
                "date": "2026-07-30",
                "opponent": "vs. ANTOINE",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 2,
                "date": "2026-07-30",
                "opponent": "vs. NICK",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
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
            "gp": 14,
            "w": 4,
            "d": 4,
            "l": 6,
            "gs": 21,
            "gc": 22,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 14,
            "w": 4,
            "d": 4,
            "l": 6,
            "gs": 21,
            "gc": 22,
            "cs": 3
        },
        "form": [
            "L",
            "W",
            "L",
            "D",
            "L"
        ],
        "history": [
            {
                "id": 114,
                "date": "2026-07-30",
                "opponent": "vs. GUICHARD",
                "gs": 1,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 106,
                "date": "2026-07-30",
                "opponent": "vs. BIGY",
                "gs": 3,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 96,
                "date": "2026-07-30",
                "opponent": "vs. KAYOUM",
                "gs": 2,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 91,
                "date": "2026-07-30",
                "opponent": "vs. JEPHTE",
                "gs": 2,
                "gc": 2,
                "cs": false,
                "result": "D"
            },
            {
                "id": 72,
                "date": "2026-07-30",
                "opponent": "vs. TERROR",
                "gs": 0,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 65,
                "date": "2026-07-30",
                "opponent": "vs. SNAKE",
                "gs": 4,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 58,
                "date": "2026-07-30",
                "opponent": "vs. PAPA.G",
                "gs": 0,
                "gc": 0,
                "cs": true,
                "result": "D"
            },
            {
                "id": 52,
                "date": "2026-07-30",
                "opponent": "vs. ELIS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 45,
                "date": "2026-07-30",
                "opponent": "vs. TÈT SAUCE",
                "gs": 0,
                "gc": 0,
                "cs": true,
                "result": "D"
            },
            {
                "id": 38,
                "date": "2026-07-30",
                "opponent": "vs. BAMA",
                "gs": 2,
                "gc": 2,
                "cs": false,
                "result": "D"
            },
            {
                "id": 34,
                "date": "2026-07-30",
                "opponent": "vs. SPARTACUS",
                "gs": 0,
                "gc": 1,
                "cs": false,
                "result": "L"
            },
            {
                "id": 17,
                "date": "2026-07-30",
                "opponent": "vs. JIC",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 8,
                "date": "2026-07-30",
                "opponent": "vs. BOSS KEKE (SW)",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 3,
                "date": "2026-07-30",
                "opponent": "vs. KINGPLUG",
                "gs": 3,
                "gc": 1,
                "cs": false,
                "result": "W"
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
            "gs": 7,
            "gc": 15,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 8,
            "w": 3,
            "d": 0,
            "l": 5,
            "gs": 7,
            "gc": 15,
            "cs": 0
        },
        "form": [
            "W",
            "L",
            "L",
            "W",
            "W"
        ],
        "history": [
            {
                "id": 117,
                "date": "2026-07-30",
                "opponent": "vs. THE KING",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 105,
                "date": "2026-07-30",
                "opponent": "vs. KAYOUM",
                "gs": 0,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 90,
                "date": "2026-07-30",
                "opponent": "vs. RIO",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 76,
                "date": "2026-07-30",
                "opponent": "vs. ZACHARIE",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 63,
                "date": "2026-07-30",
                "opponent": "vs. GUICHARD",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
            },
            {
                "id": 36,
                "date": "2026-07-30",
                "opponent": "vs. KYNO",
                "gs": 0,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 21,
                "date": "2026-07-30",
                "opponent": "vs. LUILPOUL",
                "gs": 0,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 7,
                "date": "2026-07-30",
                "opponent": "vs. JAMES",
                "gs": 0,
                "gc": 1,
                "cs": false,
                "result": "L"
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
            "gs": 7,
            "gc": 8,
            "cs": 4
        },
        "weeklyStats": {
            "gp": 6,
            "w": 4,
            "d": 0,
            "l": 2,
            "gs": 7,
            "gc": 8,
            "cs": 4
        },
        "form": [
            "W",
            "W",
            "W",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 121,
                "date": "2026-07-30",
                "opponent": "vs. Manual Entry (Win)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 120,
                "date": "2026-07-30",
                "opponent": "vs. Manual Entry (Win)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 119,
                "date": "2026-07-30",
                "opponent": "vs. Manual Entry (Win)",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 92,
                "date": "2026-07-30",
                "opponent": "vs. KENSLEY",
                "gs": 1,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 88,
                "date": "2026-07-30",
                "opponent": "vs. PLEK",
                "gs": 2,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 75,
                "date": "2026-07-30",
                "opponent": "vs. WENDAHEL",
                "gs": 1,
                "gc": 0,
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
            "w": 3,
            "d": 2,
            "l": 8,
            "gs": 9,
            "gc": 23,
            "cs": 3
        },
        "weeklyStats": {
            "gp": 13,
            "w": 3,
            "d": 2,
            "l": 8,
            "gs": 9,
            "gc": 23,
            "cs": 3
        },
        "form": [
            "L",
            "L",
            "L",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 112,
                "date": "2026-07-30",
                "opponent": "vs. MIKO",
                "gs": 0,
                "gc": 1,
                "cs": false,
                "result": "L"
            },
            {
                "id": 103,
                "date": "2026-07-30",
                "opponent": "vs. ELNOBY",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 100,
                "date": "2026-07-30",
                "opponent": "vs. EL PANTHERA",
                "gs": 0,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 85,
                "date": "2026-07-30",
                "opponent": "vs. NICK",
                "gs": 0,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 84,
                "date": "2026-07-30",
                "opponent": "vs. CHRISTIAN",
                "gs": 1,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 69,
                "date": "2026-07-30",
                "opponent": "vs. JXY",
                "gs": 0,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 61,
                "date": "2026-07-30",
                "opponent": "vs. EL PANTHERA",
                "gs": 1,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 50,
                "date": "2026-07-30",
                "opponent": "vs. IDEAL",
                "gs": 0,
                "gc": 3,
                "cs": false,
                "result": "L"
            },
            {
                "id": 40,
                "date": "2026-07-30",
                "opponent": "vs. LUIZ NUB",
                "gs": 0,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 29,
                "date": "2026-07-30",
                "opponent": "vs. WENDHY",
                "gs": 3,
                "gc": 0,
                "cs": true,
                "result": "W"
            },
            {
                "id": 24,
                "date": "2026-07-30",
                "opponent": "vs. ODVERLY",
                "gs": 0,
                "gc": 0,
                "cs": true,
                "result": "D"
            },
            {
                "id": 11,
                "date": "2026-07-30",
                "opponent": "vs. MILO (SW)",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
            },
            {
                "id": 5,
                "date": "2026-07-30",
                "opponent": "vs. MACALISTER",
                "gs": 2,
                "gc": 1,
                "cs": false,
                "result": "W"
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
            "gp": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gs": 3,
            "gc": 2,
            "cs": 1
        },
        "weeklyStats": {
            "gp": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gs": 3,
            "gc": 2,
            "cs": 1
        },
        "form": [
            "L",
            "W"
        ],
        "history": [
            {
                "id": 71,
                "date": "2026-07-30",
                "opponent": "vs. KERVENS",
                "gs": 1,
                "gc": 2,
                "cs": false,
                "result": "L"
            },
            {
                "id": 59,
                "date": "2026-07-30",
                "opponent": "vs. BIGY",
                "gs": 2,
                "gc": 0,
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
            "gp": 3,
            "w": 0,
            "d": 0,
            "l": 3,
            "gs": 2,
            "gc": 8,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 3,
            "w": 0,
            "d": 0,
            "l": 3,
            "gs": 2,
            "gc": 8,
            "cs": 0
        },
        "form": [
            "L",
            "L",
            "L"
        ],
        "history": [
            {
                "id": 89,
                "date": "2026-07-30",
                "opponent": "vs. JAMES",
                "gs": 2,
                "gc": 4,
                "cs": false,
                "result": "L"
            },
            {
                "id": 82,
                "date": "2026-07-30",
                "opponent": "vs. BRACK",
                "gs": 0,
                "gc": 1,
                "cs": false,
                "result": "L"
            },
            {
                "id": 46,
                "date": "2026-07-30",
                "opponent": "vs. LOUIS",
                "gs": 0,
                "gc": 3,
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
            "gp": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gs": 1,
            "gc": 1,
            "cs": 0
        },
        "weeklyStats": {
            "gp": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gs": 1,
            "gc": 1,
            "cs": 0
        },
        "form": [
            "D"
        ],
        "history": [
            {
                "id": 118,
                "date": "2026-07-30",
                "opponent": "vs. CALM (SW)",
                "gs": 1,
                "gc": 1,
                "cs": false,
                "result": "D"
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
];

// --- 2. APPLICATION STATE ---
const state = {
    roster: [],
    currentSort: { column: "points", direction: "desc" },
    currentFilter: { search: "", playstyle: "ALL", timeframe: "ALL" },
    selectedPlayer: null,
    editingMatch: null
};

// --- 3. INITIALIZATION & LOCALSTORAGE SYNC ---
const STORAGE_KEY = "fod_efootball_stats_v16_newmembers";

function initApp() {
    // Intro Screen Logic
    const introScreen = document.getElementById("intro-screen");
    if (introScreen) {
        setTimeout(() => {
            introScreen.classList.add("slide-up");
            // After animation completes, remove it from DOM entirely
            setTimeout(() => {
                introScreen.remove();
            }, 1300); // matches the 1.2s transition
        }, 2200); // Hold for 2.2 seconds
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
    renderRecentMatchesFeed();
    renderMiniAwards();
}

function renderHeroSummary() {
    let totMatches = 0;
    let totWins = 0;
    let totCS = 0;

    state.roster.forEach(player => {
        const s = getPlayerComputedStats(player);
        totMatches += s.gp;
        totWins += s.w;
        totCS += s.cs;
    });

    const clanWinRate = totMatches > 0 ? Math.round((totWins / totMatches) * 100) : 0;

    animateCounter("total-matches-val", totMatches, "");
    animateCounter("clan-winrate-val", clanWinRate, "%");
    animateCounter("total-cs-val", totCS, "");

    // ── Hero section live counters ──────────────────────────────
    animateCounter("hero-matches", totMatches, "");
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

    document.getElementById("btn-export-json").addEventListener("click", () => {
        const dataStr = JSON.stringify(state.roster, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `37_FOD_eFootball_Clan_Stats_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
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
    initPOTW();
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
// PLAYER OF THE WEEK
// ==========================================================================
const POTW_KEY = "fod_potw_v1";

function initPOTW() {
    const saved = localStorage.getItem(POTW_KEY);
    if (saved) renderPOTW(saved);

    const btnSetPotw = document.getElementById("btn-set-potw");
    const modalPotw = document.getElementById("modal-potw");

    btnSetPotw?.addEventListener("click", () => {
        // Populate dropdown with sorted roster
        const sel = document.getElementById("potw-player-select");
        sel.innerHTML = '<option value="">-- Choose a Player --</option>';
        [...state.roster]
            .sort((a,b) => a.name.localeCompare(b.name))
            .forEach(p => {
                const opt = document.createElement("option");
                opt.value = p.id;
                opt.textContent = p.name;
                sel.appendChild(opt);
            });
        const current = localStorage.getItem(POTW_KEY);
        if (current) sel.value = current;
        modalPotw.classList.remove("hidden");
    });

    document.getElementById("btn-close-potw")?.addEventListener("click", () => modalPotw.classList.add("hidden"));
    modalPotw?.addEventListener("click", e => { if (e.target === modalPotw) modalPotw.classList.add("hidden"); });

    document.getElementById("form-potw")?.addEventListener("submit", e => {
        e.preventDefault();
        const pid = document.getElementById("potw-player-select").value;
        if (!pid) return;
        localStorage.setItem(POTW_KEY, pid);
        renderPOTW(pid);
        modalPotw.classList.add("hidden");
    });

    document.getElementById("btn-clear-potw")?.addEventListener("click", () => {
        localStorage.removeItem(POTW_KEY);
        document.getElementById("potw-section").classList.add("hidden");
    });
}

function renderPOTW(playerId) {
    const player = state.roster.find(p => p.id === playerId);
    if (!player) return;

    const s = getPlayerComputedStats(player, "ALL");
    const winRate = s.gp > 0 ? Math.round((s.w / s.gp) * 100) : 0;

    document.getElementById("potw-avatar").textContent = player.avatar;
    document.getElementById("potw-name").textContent = player.name;
    document.getElementById("potw-w").textContent = s.w;
    document.getElementById("potw-d").textContent = s.d;
    document.getElementById("potw-l").textContent = s.l;
    document.getElementById("potw-pts").textContent = s.points;
    document.getElementById("potw-wr").textContent = winRate + "%";

    document.getElementById("potw-section").classList.remove("hidden");
}

// ==========================================================================
// RECENT CLAN MATCHES FEED
// ==========================================================================
function renderRecentMatchesFeed() {
    const allMatches = [];
    state.roster.forEach(player => {
        const history = player.history || [];
        history.forEach(m => {
            allMatches.push({
                playerName: player.name,
                playerAvatar: player.avatar,
                opponent: m.opponent,
                result: m.result,
                gs: m.gs,
                gc: m.gc,
                date: m.date,
                id: m.id
            });
        });
    });

    // Sort by match ID descending (newest first)
    allMatches.sort((a, b) => b.id - a.id);

    const feedEl = document.getElementById("recent-matches-feed");
    if (!feedEl) return;
    feedEl.innerHTML = "";

    const latest = allMatches.slice(0, 10);
    if (latest.length === 0) {
        feedEl.innerHTML = `<span class="text-muted" style="font-size: 0.9rem; padding: 0.5rem 0;">No matches logged yet.</span>`;
        return;
    }

    latest.forEach(m => {
        const pill = document.createElement("div");
        const resClass = m.result === "W" ? "pill-win" : (m.result === "D" ? "pill-draw" : "pill-loss");
        pill.className = `match-pill ${resClass}`;
        pill.innerHTML = `
            <span class="pill-result-dot"></span>
            <span class="pill-player">${m.playerName}</span>
            <span class="pill-score">${m.gs !== undefined ? m.gs + '-' + m.gc : 'Played'}</span>
            <span class="pill-opp">${m.opponent}</span>
        `;
        feedEl.appendChild(pill);
    });
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
