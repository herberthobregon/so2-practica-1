const data = [
    {
        "pid": 1,
        "name": "Capuchin, white-fronted",
        "user": 4,
        "state": 10,
        "ram": 5085,
        "pid_parent": 35
    },
    {
        "pid": 2,
        "name": "Skink, blue-tongued",
        "user": 3,
        "state": 1,
        "ram": 3018,
        "pid_parent": 14
    },
    {
        "pid": 3,
        "name": "Weaver, red-billed buffalo",
        "user": 3,
        "state": 0,
        "ram": 8546,
        "pid_parent": 43
    },
    {
        "pid": 4,
        "name": "Black curlew",
        "user": 2,
        "state": 1,
        "ram": 5712,
        "pid_parent": 7
    },
    {
        "pid": 5,
        "name": "Urial",
        "user": 3,
        "state": 0,
        "ram": 7461,
        "pid_parent": 41
    },
    {
        "pid": 6,
        "name": "Bengal vulture",
        "user": 4,
        "state": 4,
        "ram": 6355,
        "pid_parent": 19
    },
    {
        "pid": 7,
        "name": "Red-tailed hawk",
        "user": 1,
        "state": 4,
        "ram": 5414,
        "pid_parent": 39
    },
    {
        "pid": 8,
        "name": "Red-winged blackbird",
        "user": 3,
        "state": 10,
        "ram": 5403,
        "pid_parent": 17
    },
    {
        "pid": 9,
        "name": "White-winged dove",
        "user": 4,
        "state": 1,
        "ram": 7882,
        "pid_parent": 9
    },
    {
        "pid": 10,
        "name": "Mountain duck",
        "user": 3,
        "state": 40,
        "ram": 2382,
        "pid_parent": 7
    },
    {
        "pid": 11,
        "name": "Greater rhea",
        "user": 3,
        "state": 1,
        "ram": 4996,
        "pid_parent": 44
    },
    {
        "pid": 12,
        "name": "Snake, western patch-nosed",
        "user": 4,
        "state": 80,
        "ram": 60,
        "pid_parent": 14
    },
    {
        "pid": 13,
        "name": "Red-billed buffalo weaver",
        "user": 1,
        "state": 10,
        "ram": 5581,
        "pid_parent": 29
    },
    {
        "pid": 14,
        "name": "Phalarope, northern",
        "user": 4,
        "state": 0,
        "ram": 8913,
        "pid_parent": 35
    },
    {
        "pid": 15,
        "name": "Cockatoo, red-tailed",
        "user": 2,
        "state": 0,
        "ram": 3359,
        "pid_parent": 44
    },
    {
        "pid": 16,
        "name": "Cape white-eye",
        "user": 3,
        "state": 10,
        "ram": 6422,
        "pid_parent": 17
    },
    {
        "pid": 17,
        "name": "Dove, emerald-spotted wood",
        "user": 2,
        "state": 20,
        "ram": 3756,
        "pid_parent": 5
    },
    {
        "pid": 18,
        "name": "Bent-toed gecko",
        "user": 1,
        "state": 20,
        "ram": 5096,
        "pid_parent": 9
    },
    {
        "pid": 19,
        "name": "Bushbuck",
        "user": 3,
        "state": 1,
        "ram": 6833,
        "pid_parent": 0
    },
    {
        "pid": 20,
        "name": "Finch, common melba",
        "user": 3,
        "state": 0,
        "ram": 9041,
        "pid_parent": 35
    },
    {
        "pid": 21,
        "name": "Stork, european",
        "user": 2,
        "state": 10,
        "ram": 9600,
        "pid_parent": 26
    },
    {
        "pid": 22,
        "name": "Agile wallaby",
        "user": 2,
        "state": 40,
        "ram": 3517,
        "pid_parent": 49
    },
    {
        "pid": 23,
        "name": "Southern ground hornbill",
        "user": 3,
        "state": 20,
        "ram": 963,
        "pid_parent": 41
    },
    {
        "pid": 24,
        "name": "Mourning collared dove",
        "user": 3,
        "state": 8,
        "ram": 4533,
        "pid_parent": 33
    },
    {
        "pid": 25,
        "name": "Mourning collared dove",
        "user": 2,
        "state": 8,
        "ram": 906,
        "pid_parent": 1
    },
    {
        "pid": 26,
        "name": "Cat, jungle",
        "user": 2,
        "state": 1,
        "ram": 8281,
        "pid_parent": 41
    },
    {
        "pid": 27,
        "name": "Pelican, brown",
        "user": 4,
        "state": 8,
        "ram": 7772,
        "pid_parent": 0
    },
    {
        "pid": 28,
        "name": "Siskin, pine",
        "user": 4,
        "state": 20,
        "ram": 7417,
        "pid_parent": 47
    },
    {
        "pid": 29,
        "name": "Hawk-eagle, crowned",
        "user": 4,
        "state": 8,
        "ram": 2764,
        "pid_parent": 21
    },
    {
        "pid": 30,
        "name": "Flamingo, roseat",
        "user": 1,
        "state": 10,
        "ram": 4777,
        "pid_parent": 18
    },
    {
        "pid": 31,
        "name": "Southern black-backed gull",
        "user": 2,
        "state": 4,
        "ram": 1079,
        "pid_parent": 23
    },
    {
        "pid": 32,
        "name": "Rabbit, eastern cottontail",
        "user": 1,
        "state": 10,
        "ram": 8203,
        "pid_parent": 24
    },
    {
        "pid": 33,
        "name": "Cockatoo, roseate",
        "user": 4,
        "state": 2,
        "ram": 551,
        "pid_parent": 28
    },
    {
        "pid": 34,
        "name": "Bohor reedbuck",
        "user": 2,
        "state": 10,
        "ram": 9022,
        "pid_parent": 45
    },
    {
        "pid": 35,
        "name": "Steenbuck",
        "user": 2,
        "state": 4,
        "ram": 1606,
        "pid_parent": 39
    },
    {
        "pid": 36,
        "name": "Woodcock, american",
        "user": 3,
        "state": 8,
        "ram": 6796,
        "pid_parent": 43
    },
    {
        "pid": 37,
        "name": "Eurasian beaver",
        "user": 2,
        "state": 0,
        "ram": 8982,
        "pid_parent": 0
    },
    {
        "pid": 38,
        "name": "Chital",
        "user": 2,
        "state": 1,
        "ram": 8312,
        "pid_parent": 0
    },
    {
        "pid": 39,
        "name": "Purple moorhen",
        "user": 1,
        "state": 4,
        "ram": 1291,
        "pid_parent": 41
    },
    {
        "pid": 40,
        "name": "Black-tailed prairie dog",
        "user": 2,
        "state": 2,
        "ram": 9817,
        "pid_parent": 42
    },
    {
        "pid": 41,
        "name": "Cockatoo, long-billed",
        "user": 4,
        "state": 10,
        "ram": 160,
        "pid_parent": 49
    },
    {
        "pid": 42,
        "name": "Banded mongoose",
        "user": 2,
        "state": 8,
        "ram": 1197,
        "pid_parent": 0
    },
    {
        "pid": 43,
        "name": "Python (unidentified)",
        "user": 3,
        "state": 2,
        "ram": 2678,
        "pid_parent": 45
    },
    {
        "pid": 44,
        "name": "Brush-tailed bettong",
        "user": 4,
        "state": 8,
        "ram": 1034,
        "pid_parent": 0
    },
    {
        "pid": 45,
        "name": "Chital",
        "user": 2,
        "state": 2,
        "ram": 2728,
        "pid_parent": 24
    },
    {
        "pid": 46,
        "name": "Cook's tree boa",
        "user": 3,
        "state": 80,
        "ram": 1744,
        "pid_parent": 0
    },
    {
        "pid": 47,
        "name": "Little grebe",
        "user": 2,
        "state": 4,
        "ram": 1062,
        "pid_parent": 27
    },
    {
        "pid": 48,
        "name": "Siskin, yellow-rumped",
        "user": 1,
        "state": 2,
        "ram": 7956,
        "pid_parent": 4
    },
    {
        "pid": 49,
        "name": "Boar, wild",
        "user": 3,
        "state": 10,
        "ram": 1082,
        "pid_parent": 0
    },
    {
        "pid": 50,
        "name": "Tiger cat",
        "user": 4,
        "state": 20,
        "ram": 1105,
        "pid_parent": 31
    },
    {
        "pid": 51,
        "name": "Alligator, american",
        "user": 2,
        "state": 40,
        "ram": 9588,
        "pid_parent": 35
    },
    {
        "pid": 52,
        "name": "Sage grouse",
        "user": 1,
        "state": 10,
        "ram": 9859,
        "pid_parent": 18
    },
    {
        "pid": 53,
        "name": "Stork, white-necked",
        "user": 3,
        "state": 20,
        "ram": 6192,
        "pid_parent": 24
    },
    {
        "pid": 54,
        "name": "Large cormorant",
        "user": 1,
        "state": 80,
        "ram": 9881,
        "pid_parent": 38
    },
    {
        "pid": 55,
        "name": "White-tailed deer",
        "user": 2,
        "state": 4,
        "ram": 7110,
        "pid_parent": 43
    },
    {
        "pid": 56,
        "name": "Turkey, wild",
        "user": 3,
        "state": 20,
        "ram": 6264,
        "pid_parent": 4
    },
    {
        "pid": 57,
        "name": "Skua, great",
        "user": 1,
        "state": 8,
        "ram": 2764,
        "pid_parent": 9
    },
    {
        "pid": 58,
        "name": "Stork, marabou",
        "user": 3,
        "state": 40,
        "ram": 9428,
        "pid_parent": 24
    },
    {
        "pid": 59,
        "name": "African fish eagle",
        "user": 2,
        "state": 8,
        "ram": 9626,
        "pid_parent": 3
    },
    {
        "pid": 60,
        "name": "Dingo",
        "user": 2,
        "state": 1,
        "ram": 5817,
        "pid_parent": 50
    },
    {
        "pid": 61,
        "name": "Vicuna",
        "user": 3,
        "state": 4,
        "ram": 6508,
        "pid_parent": 7
    },
    {
        "pid": 62,
        "name": "Chacma baboon",
        "user": 3,
        "state": 20,
        "ram": 5531,
        "pid_parent": 0
    },
    {
        "pid": 63,
        "name": "Suricate",
        "user": 2,
        "state": 8,
        "ram": 6323,
        "pid_parent": 30
    },
    {
        "pid": 64,
        "name": "Cat, african wild",
        "user": 3,
        "state": 2,
        "ram": 961,
        "pid_parent": 50
    },
    {
        "pid": 65,
        "name": "Wallaby, euro",
        "user": 2,
        "state": 10,
        "ram": 51,
        "pid_parent": 18
    },
    {
        "pid": 66,
        "name": "Brush-tailed rat kangaroo",
        "user": 3,
        "state": 4,
        "ram": 7256,
        "pid_parent": 1
    },
    {
        "pid": 67,
        "name": "Reedbuck, bohor",
        "user": 3,
        "state": 10,
        "ram": 5868,
        "pid_parent": 0
    },
    {
        "pid": 68,
        "name": "Eurasian beaver",
        "user": 3,
        "state": 80,
        "ram": 6235,
        "pid_parent": 0
    },
    {
        "pid": 69,
        "name": "Robin, kalahari scrub",
        "user": 1,
        "state": 40,
        "ram": 8895,
        "pid_parent": 50
    },
    {
        "pid": 70,
        "name": "Hippopotamus",
        "user": 4,
        "state": 40,
        "ram": 4806,
        "pid_parent": 2
    },
    {
        "pid": 71,
        "name": "Spectacled caiman",
        "user": 1,
        "state": 1,
        "ram": 4463,
        "pid_parent": 28
    },
    {
        "pid": 72,
        "name": "Legaan, ground",
        "user": 2,
        "state": 1,
        "ram": 5290,
        "pid_parent": 17
    },
    {
        "pid": 73,
        "name": "Admiral, indian red",
        "user": 3,
        "state": 10,
        "ram": 8522,
        "pid_parent": 0
    },
    {
        "pid": 74,
        "name": "Nuthatch, red-breasted",
        "user": 3,
        "state": 8,
        "ram": 9890,
        "pid_parent": 5
    },
    {
        "pid": 75,
        "name": "Woolly-necked stork",
        "user": 4,
        "state": 40,
        "ram": 8326,
        "pid_parent": 14
    },
    {
        "pid": 76,
        "name": "Secretary bird",
        "user": 1,
        "state": 80,
        "ram": 2075,
        "pid_parent": 14
    },
    {
        "pid": 77,
        "name": "Bengal vulture",
        "user": 2,
        "state": 1,
        "ram": 3030,
        "pid_parent": 0
    },
    {
        "pid": 78,
        "name": "Woolly-necked stork",
        "user": 2,
        "state": 8,
        "ram": 330,
        "pid_parent": 47
    },
    {
        "pid": 79,
        "name": "Vulture, white-headed",
        "user": 4,
        "state": 40,
        "ram": 1723,
        "pid_parent": 35
    },
    {
        "pid": 80,
        "name": "Richardson's ground squirrel",
        "user": 3,
        "state": 20,
        "ram": 8593,
        "pid_parent": 28
    },
    {
        "pid": 81,
        "name": "Blackbird, red-winged",
        "user": 4,
        "state": 8,
        "ram": 9199,
        "pid_parent": 21
    },
    {
        "pid": 82,
        "name": "Bulbul, black-eyed",
        "user": 2,
        "state": 4,
        "ram": 8213,
        "pid_parent": 38
    },
    {
        "pid": 83,
        "name": "Hyrax",
        "user": 3,
        "state": 80,
        "ram": 3154,
        "pid_parent": 0
    },
    {
        "pid": 84,
        "name": "Blue-tongued lizard",
        "user": 3,
        "state": 2,
        "ram": 9279,
        "pid_parent": 20
    },
    {
        "pid": 85,
        "name": "Blackbuck",
        "user": 4,
        "state": 1,
        "ram": 6978,
        "pid_parent": 2
    },
    {
        "pid": 86,
        "name": "Ovenbird",
        "user": 1,
        "state": 80,
        "ram": 1558,
        "pid_parent": 5
    },
    {
        "pid": 87,
        "name": "Cape white-eye",
        "user": 3,
        "state": 0,
        "ram": 17,
        "pid_parent": 24
    },
    {
        "pid": 88,
        "name": "Mallard",
        "user": 2,
        "state": 80,
        "ram": 4070,
        "pid_parent": 0
    },
    {
        "pid": 89,
        "name": "Kangaroo, jungle",
        "user": 4,
        "state": 80,
        "ram": 102,
        "pid_parent": 8
    },
    {
        "pid": 90,
        "name": "Sheep, red",
        "user": 2,
        "state": 20,
        "ram": 7772,
        "pid_parent": 23
    },
    {
        "pid": 91,
        "name": "Starling, red-shouldered glossy",
        "user": 3,
        "state": 0,
        "ram": 8772,
        "pid_parent": 18
    },
    {
        "pid": 92,
        "name": "Yellow-rumped siskin",
        "user": 2,
        "state": 40,
        "ram": 9257,
        "pid_parent": 0
    },
    {
        "pid": 93,
        "name": "Waxbill, blue",
        "user": 4,
        "state": 10,
        "ram": 5891,
        "pid_parent": 0
    },
    {
        "pid": 94,
        "name": "Glider, feathertail",
        "user": 3,
        "state": 20,
        "ram": 9909,
        "pid_parent": 9
    },
    {
        "pid": 95,
        "name": "Dove, emerald-spotted wood",
        "user": 4,
        "state": 8,
        "ram": 9404,
        "pid_parent": 28
    },
    {
        "pid": 96,
        "name": "Ibis, puna",
        "user": 4,
        "state": 1,
        "ram": 2280,
        "pid_parent": 7
    },
    {
        "pid": 97,
        "name": "Woodcock, american",
        "user": 2,
        "state": 2,
        "ram": 5436,
        "pid_parent": 3
    },
    {
        "pid": 98,
        "name": "Savanna fox",
        "user": 3,
        "state": 40,
        "ram": 9014,
        "pid_parent": 35
    },
    {
        "pid": 99,
        "name": "Spectacled caiman",
        "user": 4,
        "state": 4,
        "ram": 3598,
        "pid_parent": 16
    },
    {
        "pid": 100,
        "name": "Heron, giant",
        "user": 1,
        "state": 8,
        "ram": 5932,
        "pid_parent": 48
    },
    {
        "pid": 101,
        "name": "American woodcock",
        "user": 4,
        "state": 10,
        "ram": 8334,
        "pid_parent": 17
    },
    {
        "pid": 102,
        "name": "Flamingo, chilean",
        "user": 4,
        "state": 80,
        "ram": 1961,
        "pid_parent": 48
    },
    {
        "pid": 103,
        "name": "Gecko, ring-tailed",
        "user": 3,
        "state": 10,
        "ram": 5874,
        "pid_parent": 1
    },
    {
        "pid": 104,
        "name": "Common goldeneye",
        "user": 4,
        "state": 1,
        "ram": 7262,
        "pid_parent": 17
    },
    {
        "pid": 105,
        "name": "Canadian tiger swallowtail butterfly",
        "user": 1,
        "state": 0,
        "ram": 3694,
        "pid_parent": 7
    },
    {
        "pid": 106,
        "name": "Baleen whale",
        "user": 3,
        "state": 20,
        "ram": 8682,
        "pid_parent": 0
    },
    {
        "pid": 107,
        "name": "White-cheeked pintail",
        "user": 1,
        "state": 2,
        "ram": 9669,
        "pid_parent": 33
    },
    {
        "pid": 108,
        "name": "Leopard",
        "user": 1,
        "state": 2,
        "ram": 9924,
        "pid_parent": 17
    },
    {
        "pid": 109,
        "name": "Common brushtail possum",
        "user": 1,
        "state": 8,
        "ram": 5983,
        "pid_parent": 17
    },
    {
        "pid": 110,
        "name": "Hoffman's sloth",
        "user": 2,
        "state": 4,
        "ram": 452,
        "pid_parent": 28
    },
    {
        "pid": 111,
        "name": "Woodpecker, red-headed",
        "user": 1,
        "state": 20,
        "ram": 1467,
        "pid_parent": 0
    },
    {
        "pid": 112,
        "name": "Kite, black",
        "user": 1,
        "state": 0,
        "ram": 7947,
        "pid_parent": 19
    },
    {
        "pid": 113,
        "name": "Gazelle, grant's",
        "user": 1,
        "state": 20,
        "ram": 8327,
        "pid_parent": 38
    },
    {
        "pid": 114,
        "name": "Possum, ring-tailed",
        "user": 3,
        "state": 0,
        "ram": 7454,
        "pid_parent": 44
    },
    {
        "pid": 115,
        "name": "Ant (unidentified)",
        "user": 1,
        "state": 10,
        "ram": 3060,
        "pid_parent": 14
    },
    {
        "pid": 116,
        "name": "Rhesus macaque",
        "user": 3,
        "state": 20,
        "ram": 8185,
        "pid_parent": 0
    },
    {
        "pid": 117,
        "name": "Thrasher, curve-billed",
        "user": 1,
        "state": 20,
        "ram": 2183,
        "pid_parent": 42
    },
    {
        "pid": 118,
        "name": "Tinamou, elegant crested",
        "user": 1,
        "state": 10,
        "ram": 6552,
        "pid_parent": 39
    },
    {
        "pid": 119,
        "name": "Wild turkey",
        "user": 1,
        "state": 2,
        "ram": 5053,
        "pid_parent": 1
    },
    {
        "pid": 120,
        "name": "Polar bear",
        "user": 2,
        "state": 20,
        "ram": 4349,
        "pid_parent": 34
    },
    {
        "pid": 121,
        "name": "Dromedary camel",
        "user": 2,
        "state": 0,
        "ram": 1362,
        "pid_parent": 44
    },
    {
        "pid": 122,
        "name": "Gull, kelp",
        "user": 4,
        "state": 40,
        "ram": 9862,
        "pid_parent": 0
    },
    {
        "pid": 123,
        "name": "Peccary, white-lipped",
        "user": 4,
        "state": 4,
        "ram": 7814,
        "pid_parent": 9
    },
    {
        "pid": 124,
        "name": "American racer",
        "user": 2,
        "state": 4,
        "ram": 4505,
        "pid_parent": 49
    },
    {
        "pid": 125,
        "name": "Tarantula, salmon pink bird eater",
        "user": 1,
        "state": 40,
        "ram": 1567,
        "pid_parent": 45
    },
    {
        "pid": 126,
        "name": "Cockatoo, long-billed",
        "user": 4,
        "state": 1,
        "ram": 4434,
        "pid_parent": 23
    },
    {
        "pid": 127,
        "name": "Civet, common palm",
        "user": 3,
        "state": 2,
        "ram": 8772,
        "pid_parent": 38
    },
    {
        "pid": 128,
        "name": "Lory, rainbow",
        "user": 4,
        "state": 20,
        "ram": 9595,
        "pid_parent": 31
    },
    {
        "pid": 129,
        "name": "Aardwolf",
        "user": 2,
        "state": 20,
        "ram": 7019,
        "pid_parent": 19
    },
    {
        "pid": 130,
        "name": "Pygmy possum",
        "user": 1,
        "state": 1,
        "ram": 784,
        "pid_parent": 6
    },
    {
        "pid": 131,
        "name": "Dog, african wild",
        "user": 1,
        "state": 0,
        "ram": 315,
        "pid_parent": 44
    },
    {
        "pid": 132,
        "name": "Quoll, eastern",
        "user": 1,
        "state": 10,
        "ram": 5144,
        "pid_parent": 38
    },
    {
        "pid": 133,
        "name": "Tern, white-winged",
        "user": 3,
        "state": 40,
        "ram": 6162,
        "pid_parent": 9
    },
    {
        "pid": 134,
        "name": "Eagle, pallas's fish",
        "user": 1,
        "state": 0,
        "ram": 647,
        "pid_parent": 30
    },
    {
        "pid": 135,
        "name": "Bengal vulture",
        "user": 1,
        "state": 10,
        "ram": 9328,
        "pid_parent": 17
    },
    {
        "pid": 136,
        "name": "Greater blue-eared starling",
        "user": 4,
        "state": 2,
        "ram": 8454,
        "pid_parent": 9
    },
    {
        "pid": 137,
        "name": "Alligator, mississippi",
        "user": 2,
        "state": 8,
        "ram": 3092,
        "pid_parent": 22
    },
    {
        "pid": 138,
        "name": "Least chipmunk",
        "user": 1,
        "state": 1,
        "ram": 1080,
        "pid_parent": 17
    },
    {
        "pid": 139,
        "name": "Frogmouth, tawny",
        "user": 2,
        "state": 8,
        "ram": 1380,
        "pid_parent": 22
    }
];

export default data;