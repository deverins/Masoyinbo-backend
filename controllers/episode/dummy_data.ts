export const data = [
  // {
  //   "episode": 38,
  //   "participantName": "Afolasade Odunayo",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 30000,
  //   "link": "https://youtu.be/Aa17db_rQ5A?si=Sr3jcQMvpUHI5HwA",
  //   "date": "Jul 24, 2024",
  //   "events": [
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "336",
  //       "expectedAnswer": "Ibere Ojileloodunrunodinmerin",
  //       "response": "Ibere Ojileloodunrunodinmerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 1000000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ti Yoruba ba sope \"Koniganigo\", kilo tu mo si ?",
  //       "expectedAnswer": "Ko ni oun kan-an kan",
  //       "response": "Boya eniyan kokoru",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "286",
  //       "expectedAnswer": "Ibere Kerinladinloodunrun",
  //       "response": "Orinle Kerinladinloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Tani ojogbonbirin (Ojogbon obirin) akoko ni orilede Nigeria ti o tun je omo Yoruba ?",
  //       "expectedAnswer": "Professor,Mrs Filicia Adetoun Ogunsewe",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "297",
  //       "expectedAnswer": "Ibere ketadinloodunrun",
  //       "response": "Ibere ketadinloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Daroku are ona kakanfo marun to ti je ni ile Yoruba",
  //       "expectedAnswer": "Ladoke Akintola",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "280",
  //       "expectedAnswer": "Ibere orinlenigba",
  //       "response": "Ibere orinlenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "318",
  //       "expectedAnswer": "Ibere kejidinlokooleloodunrun",
  //       "response": "Ibere kejidinlokooleloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yi \"a kii mooun moote\"...",
  //       "expectedAnswer": "Ki iyan ewura ma le mon",
  //       "response": "ki ikan ewura ma ni koko",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "311",
  //       "expectedAnswer": "Ibere okooleloodunrunodinmesan-an",
  //       "response": "Ibere okooleloodunrunodinmesan-an",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba Sulphur",
  //       "expectedAnswer": "Imo-ojo",
  //       "response": "camphor",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "226",
  //       "expectedAnswer": "Ojilenigbadinmerinla",
  //       "response": "Ojilenigbadinmerinla",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Width ni Yoruba ?",
  //       "expectedAnswer": "tibu",
  //       "response": "fife",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe Aluminium",
  //       "expectedAnswer": "Ayo",
  //       "response": "Jorin-jorin ",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "296",
  //       "expectedAnswer": "Ibere okanlelogileloodunrun",
  //       "response": "Ibere okanlelogileloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini itumo Akanlo ede yii \"po tobo enu\"...",
  //       "expectedAnswer": "Ro jo sonu",
  //       "response": "Ro jo sonu",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe Calcium",
  //       "expectedAnswer": "Efun",
  //       "response": "Ogun ti a n lo fun egun",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     }
  //   ]
  // },
  // {
  //   "episode": 39,
  //   "participantName": "Asiri",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 45000,
  //   "link": "https://youtu.be/tJAnN9odoF8?si=mb77u-77MelLpAwq",
  //   "date": "Jul 26, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "248",
  //       "expectedAnswer": "Ibere ojilenigbalemejo",
  //       "response": "ibere igbaleogoji ati mejo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini \"threaten\" ni Yoruba",
  //       "expectedAnswer": "idukoko",
  //       "response": "idukoko",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "273",
  //       "expectedAnswer": "ibere orinlenigbadinmeje",
  //       "response": "ibere orinlenigbadinmeje",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe \"amimal shell\" ?",
  //       "expectedAnswer": "ikarahun",
  //       "response": "ikarahun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "302",
  //       "expectedAnswer": "ibere kejileloodunrun",
  //       "response": "ibere kejileloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "so oro mejo ti a le yo jade lati \"Aya\"",
  //       "expectedAnswer": "ijaya,ipaya,paya,foya,pinya,ifoya,saya,okaalaya",
  //       "response": "ijaya,ipaya,paya,foya,pinya,ifoya,saya,okaalaya",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "284",
  //       "expectedAnswer": "ibere orinlenigbalemerin",
  //       "response": "ibere orinlenigbalemerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe \"Rikisi\" ?",
  //       "expectedAnswer": "ote",
  //       "response": "ote",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "249",
  //       "expectedAnswer": "ibere ojilenigbalemesan-an",
  //       "response": "ibere ojilenigbalemesan-an",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba \"Rescue\" ?",
  //       "expectedAnswer": "idoola",
  //       "response": "idaabobo",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "300",
  //       "expectedAnswer": "ibere odunrun",
  //       "response": "ibere odunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe \"Budget\" ?",
  //       "expectedAnswer": "iso owo na",
  //       "response": "isuna",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "467",
  //       "expectedAnswer": "ibere otalenirinwolemeje",
  //       "response": "ibere otalenirinwolemeje",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ti Yoruba ba sope eyan sipe ki lo tumo si ?",
  //       "expectedAnswer": "Ebe",
  //       "response": "Bebe",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "209",
  //       "expectedAnswer": "ibere igbalemesan-an",
  //       "response": "ibere igbalemesan-an",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini \"Economy\" ni Yoruba ?",
  //       "expectedAnswer": "Eto oro aje",
  //       "response": "idokowo",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "435",
  //       "expectedAnswer": "ibere ojilenirinwodinmarun-un",
  //       "response": "ibere ojilenirinwodinmarun-un",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Yoto si awe kini Yoruba n pe \"beans\"?",
  //       "expectedAnswer": "Ere",
  //       "response": "Ere",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "200",
  //       "expectedAnswer": "ibere igba",
  //       "response": "ibere igba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "wire",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "so oro mewa ti a le yo jada lati \"enu\"...",
  //       "expectedAnswer": "enu ose,enu jakun,enu igbon,alatenuje,panumo,enudun,elenu,fenusi,talenu,gbenusi",
  //       "response": "enu ose,enu jakun,enu igbon,alatenuje,panumo,enudun,elenu,fenusi,talenu,gbenusi",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     }
  //   ]
  // },
  // {
  //   "episode": 40,
  //   "participantName": "Farayola aApeke Ademola",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 25000,
  //   "link": "https://youtu.be/Pgb6Lnx8Lj8?si=1CElrZzCFrt8crAv",
  //   "date": "Jul 29, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": " ",
  //       "response": " Okay",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "470",
  //       "expectedAnswer": "orinlenirinwodinmewa",
  //       "response": "orinlenirinwodinmewa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ore nje ore,ora nje ora,enikan kii dupe lowo mo ta opo, ki ni iyato to wa larin ore ati ora ?",
  //       "expectedAnswer": "Ore-oun ti a funi lofe,Ora-oun ti a fowo ra",
  //       "response": "Ore-oun ti a funi lofe,Ora-oun ti a fowo ra",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "272",
  //       "expectedAnswer": "ibere orinlenigba din mejo",
  //       "response": "ibere orinlenigba din mejo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe Yoruba yii,\"Asorooja bi ija oja,onitiju oni sa\"...",
  //       "expectedAnswer": "Eni tan-an nan nan oni dawo duro",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "431",
  //       "expectedAnswer": "ibere ojilenirinwodinmesan",
  //       "response": "ibere ojilenirinwodinmesan",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Awon wo ni Yoruba n pe ni \"Oniyangi\"?",
  //       "expectedAnswer": "Awon to n ta iyarin",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "240",
  //       "expectedAnswer": "Ibere ojilenigba",
  //       "response": "Ibere ",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "so",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yi \"Ebi m pami olose n kiri\"...",
  //       "expectedAnswer": "Ti n o ba we nu bawo ni se we to de",
  //       "response": "Se ose wa je ounje ni",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "318",
  //       "expectedAnswer": "Ibere okooleloodunrunodinmeji",
  //       "response": "Ibere okooleloodunrunodinmeji",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii,\" a kii moogun moote\"...",
  //       "expectedAnswer": "kii isu ewura ma le mon",
  //       "response": "bi babalawo",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "310",
  //       "expectedAnswer": "Mewaleloodunrun",
  //       "response": "Mewaleloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "so oro mewa ti a le yo jade lati \"PA\"...",
  //       "expectedAnswer": "panan, pa efun,pa lekun de,pa eran,pakute,pana pana,alupaida,pase,patewo,palemo,pataki,pariwo ",
  //       "response": "panan, pa efun,pa lekun de,pa eran,pakute,pana pana,alupaida,pase,patewo,palemo,pataki,pariwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "205",
  //       "expectedAnswer": "Arunlenigba",
  //       "response": "Arunlenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pa \" Empowerment\"?",
  //       "expectedAnswer": "Iro ni lagbara",
  //       "response": "Iro ni lagbara",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "212",
  //       "expectedAnswer": "Igbalenimejila",
  //       "response": "Igbalenimejila",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini \" Misconception\"ni Yoruba ?",
  //       "expectedAnswer": "A si ro",
  //       "response": "Ka si ni gbo",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "204",
  //       "expectedAnswer": "Merinlenigba",
  //       "response": "Merinlenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini \" Creative\"ni Yoruba ?",
  //       "expectedAnswer": "Atinuda",
  //       "response": "Keyen lopolo",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "250",
  //       "expectedAnswer": "Otalenigbadinmewa",
  //       "response": "Otalenigbadinmewa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini \" Appreciation\"ni Yoruba ?",
  //       "expectedAnswer": "Imo ore",
  //       "response": "Imo ore",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     }
  //   ]
  // },
  // {
  //   "episode": 41,
  //   "participantName": "Oluwasegun Aremu",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 0,
  //   "link": "https://youtu.be/r8v01DxSp3A?si=V3uyA6EcPgqMxutW",
  //   "date": "Jul 31, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "188",
  //       "expectedAnswer": "Mejidinlaadowa",
  //       "response": "Mejidinlaadowa",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "But",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini \"Natural disaster\" in Yoruba?",
  //       "expectedAnswer": "Ijamba aitowoda",
  //       "response": "Isele ta rosi",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "so",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": -5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "so",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "school",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "No",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 5000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "So",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 0
  //     }
  //   ]
  // },
  // {
  //   "episode": 43,
  //   "participantName": "Warrit Adebowale",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 5000,
  //   "link": "https://youtu.be/yp17FHnS8QA?si=A5HBjsk-ZZn0gL2A",
  //   "date": "Agu 5, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "No",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "pari owe yii\"omi kii won titi\"...",
  //       "expectedAnswer": "kii baluwe mari bu mu",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "372",
  //       "expectedAnswer": "Otaleloodunrunlenimejila",
  //       "response": "Otaleloodunrunlenimejila",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "60",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini itumu oro Yoruba yii\"Eesan\"..?",
  //       "expectedAnswer": "Iru eedun ti awon alagbede ma n lo ",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "368",
  //       "expectedAnswer": "Otaleloodunrunlemejo",
  //       "response": "Otaleloodunrunlemejo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Aponko kere ogbon to asowo mara",
  //       "expectedAnswer": "Ogbon asowo mara ko to ti aje awogba,ogbon aje awogba o to ti iyami o ran mi leko",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "331",
  //       "expectedAnswer": "Okooleloodunrunlemokanla",
  //       "response": "Okooleloodunrunlemokanla",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini akole oruko oba ilu Okemesi ekiti ?",
  //       "expectedAnswer": "Owa ooye ti oke imesi",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "324",
  //       "expectedAnswer": "Okooleloodunrunlemerin",
  //       "response": "Okooleloodunrunlemerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini itumo oro yii \" igbe osumare\" ?",
  //       "expectedAnswer": "O n t'oba sowon",
  //       "response": " ",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 5000
  //     }
  //   ]
  // },
  // {
  //   "episode": 44,
  //   "participantName": "Yusuf Alabi Balogun",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 35000,
  //   "link": "https://youtu.be/BUNfZwhgO70?si=jHtlT46YIc7mPngT",
  //   "date": "Agu 7, 2024",
  //   "events": [
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "317",
  //       "expectedAnswer": "Odunrunlenimatadinlogun",
  //       "response": "Odunrunlenimatadinlogun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 1000000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe\"Afoku igo\"?",
  //       "expectedAnswer": "Opalaba",
  //       "response": "Erunrun igo",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "260",
  //       "expectedAnswer": "Otalenigba",
  //       "response": "Adotalenigba",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini akole oruko oba ilu igbo ora ?",
  //       "expectedAnswer": "olu tigbo ora",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "402",
  //       "expectedAnswer": "Ikejilenirinwo",
  //       "response": "Ikejilenirinwo",
  //       "isCorrect": true,
  //       "amount": -0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba \"leapard\"?",
  //       "expectedAnswer": "Ekun",
  //       "response": "Amotekun",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "312",
  //       "expectedAnswer": "Okooleloodunrundinmejo ",
  //       "response": "Mejilaleloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe \"antimony\"?",
  //       "expectedAnswer": "Tiroo",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "397",
  //       "expectedAnswer": "Eetadinnirinwon",
  //       "response": "Eetadinnirinwon",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe \"Temptation\"?",
  //       "expectedAnswer": "Adonwo",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "295",
  //       "expectedAnswer": "Karundinloodunrun",
  //       "response": "Karundinloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\" eni ti ko kini ku ile\"...",
  //       "expectedAnswer": "O padanu kaabo",
  //       "response": "O padanu kaabo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "275",
  //       "expectedAnswer": "karundinloorunlenigba",
  //       "response": "Marundinloorunlenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Agbe to roko ti ko gbin oka ni oun da ikun loro\"...",
  //       "expectedAnswer": "O da ara re loro",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "291",
  //       "expectedAnswer": "Kesandinloodunrun",
  //       "response": "Kesandinloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini oruko aare ona kankanfo ti ile Yoruba bayii?",
  //       "expectedAnswer": " Iba Gani Adams",
  //       "response": " Iba Gani Adams",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "289",
  //       "expectedAnswer": "Orinlenigbalemesan-an",
  //       "response": "Orinlenigbalemesan",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\" ti omode ba yawo ati le jeun\"...",
  //       "expectedAnswer": "Agba na ayawo ibokan di meji okele",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "296",
  //       "expectedAnswer": "Kerindinloodunrun",
  //       "response": "Kerindinloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Iru obe wo ni Yoruba n pe ni obe ate ?",
  //       "expectedAnswer": "Obe tio ni iyo",
  //       "response": "Obe tio ni iyo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     }
  //   ]
  // },
  // {
  //   "episode": 45,
  //   "participantName": "Barakat okikiola",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 45000,
  //   "link": "https://youtu.be/N7mzD0sABiA?si=brqQYS6IEJJAEcTM",
  //   "date": "Agu 10, 2024",
  //   "events": [
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "220",
  //       "expectedAnswer": "Okoolenigba",
  //       "response": "Ogunlenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 1000000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe\"alien\"?",
  //       "expectedAnswer": "Eda ajoji",
  //       "response": "Eda ajoji",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 1000000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "260",
  //       "expectedAnswer": "Otalenigba",
  //       "response": "Ogootalenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 1000000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini akole oruko oba ilu igbo ora ?",
  //       "expectedAnswer": "olu tigbo ora",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "307",
  //       "expectedAnswer": "kejeleniodunrun",
  //       "response": "kejeleniodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe ni\"gbariye\"?",
  //       "expectedAnswer": "Dansiki",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "415",
  //       "expectedAnswer": "Arundinlokoolenirinwo ",
  //       "response": "Arundinlokoolenirinwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ka a b d Titi de y leekan soso lai danuduro tio ba danuduro tabi siika leekan oti padanu ibeere noo niyen",
  //       "expectedAnswer": "a,b,d,e,e,f,g,gb,h.i.j.k.l.m.n.o.o.p.r.s.s.t.u.w.y ",
  //       "response": "a,b,d,e,e,f,g,gb,h.i.j.k.l.m.n.o.o.p.r.s.s.t.u.w.y",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "247",
  //       "expectedAnswer": "Ojilenigbalemeje",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini  \"court of appeal\"ni yoruba?",
  //       "expectedAnswer": "ile ejo kotemilorun",
  //       "response": "ile ejo kotemilorun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "420",
  //       "expectedAnswer": "okoolenirinwo",
  //       "response": "okoolenirinwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni \"isawuru\"?",
  //       "expectedAnswer": "isawuru",
  //       "response": "isawuru",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba \"antimony\"?",
  //       "expectedAnswer": "Tiroo",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "416",
  //       "expectedAnswer": "kerindinniokoolenirinwo",
  //       "response": "kerindinniokoolenirinwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Awom wo ni Yoruba n pe ni \"agbefoba\"",
  //       "expectedAnswer": "Agbofiro",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "299",
  //       "expectedAnswer": "Ikankandinloodundun",
  //       "response": "Ikankandinloodundun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe ni apara",
  //       "expectedAnswer": "Efe",
  //       "response": "Efe",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Apa ibo ni Okunrin ti ko ti ni iyawo ma n de fila si ati kiki idi?",
  //       "expectedAnswer": "Apa otun, tori wi pe ko ti ni iyawo ti yo dabobo",
  //       "response": "Apa otun",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     }
  //   ]
  // },
  // {
  //   "episode": 46,
  //   "participantName": "Oluwagbenga Azeez",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 15000,
  //   "link": "https://youtu.be/cEPYdcc5DMQ?si=Rk4sHJYS9rYwcCwD",
  //   "date": "Agu 13, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "427",
  //       "expectedAnswer": "Metadinloogbonlenirinwo",
  //       "response": "Metadinloogbonlenirinwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini itunmo oro Yoruba yii \"Eko eleko ni egba elegba\"?",
  //       "expectedAnswer": "Oun ti enikan le faramo ti elomiran ole faramo ",
  //       "response": "Oun ti enikan le faramo ti elomiran ole faramo ",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "380 ?",
  //       "expectedAnswer": "Orinleloodunrun",
  //       "response": "Orinleloodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"ejo a feni lobinri la nwi\"",
  //       "expectedAnswer": "A kii wijo a feni lomo",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "308",
  //       "expectedAnswer": "Odunrunlenimeje",
  //       "response": "Odunrunlenimeje",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Good, Pedigree ",
  //       "isCorrect": false,
  //       "amount": -200000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "so oro yi ni ede yoruba\"good pedigree cannot be bought with money\"...",
  //       "expectedAnswer": "Bibire o se fowo ra ",
  //       "response": "Bibire o se fowo ra ",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "256",
  //       "expectedAnswer": "Otalenigbadinmerin ",
  //       "response": "Otalenigbadinmerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Daruko orisirisi ila kiko meta in ile yoruba",
  //       "expectedAnswer": "Pele,Gonbo,Abaja,Owu",
  //       "response": "Pele,Gonbo,Abaja,",
  //       "isCorrect": true,
  //       "amount": 50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "343",
  //       "expectedAnswer": "Ojileloodunrunlemeta",
  //       "response": "Ojileloodunrunlemeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni\"eepini\"...",
  //       "expectedAnswer": "Ilaji kobo kan",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Number",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "251",
  //       "expectedAnswer": "Otalenigbadinmesan-an",
  //       "response": "Otalenigbadinmesan-an",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "But",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni\"iru\"?",
  //       "expectedAnswer": "Kokoro to ma fa eje",
  //       "response": "Kokoro",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "4",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Number",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "426",
  //       "expectedAnswer": "Ookolenirinwolemefa",
  //       "response": "Ookolenirinwolemefa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Daruko ere idarawa marun ti a n se ni ile yoruba",
  //       "expectedAnswer": "Iremoje,eewi,alo, ayo, bojuboju ",
  //       "response": "Iremoje,eewi,alo, ayo, bojuboju",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "2",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "257",
  //       "expectedAnswer": "otalenigbadinmeta",
  //       "response": "otalenigbadinmeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Awon wo ni yoruba m pe ni \"obakan\"?",
  //       "expectedAnswer": "Awon to je wi pe baba lopa won poti ibi ita o si ni be",
  //       "response": "Awon to je wi pe baba lopa won poti ibi ita o si ni be",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "223",
  //       "expectedAnswer": "okoolenigbalemeta",
  //       "response": "okoolenigbalemeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba \"pure\"?",
  //       "expectedAnswer": "Alailabawon",
  //       "response": "Alailabawon",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "418",
  //       "expectedAnswer": "Eejidinlogunlenirinwo",
  //       "response": "Eejidinlogunlenirinwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pa Owe kan toba Efon lo",
  //       "expectedAnswer": "Mo ba efon labata,mo yo obe ti,so mi lo mu ko ni",
  //       "response": "Mo ba efon labata,mo yo obe ti,so mi lo mu ko ni",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     }
  //   ]
  // },
  // {
  //   "episode": 47,
  //   "participantName": "Bolanle onitan",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 15000,
  //   "link": "https://youtu.be/wuOeAxW7dI4?si=KYqWePhaadMuLqE9",
  //   "date": "Agu 17, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "story",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "506",
  //       "expectedAnswer": "Eedegbetalenimefa",
  //       "response": "Eedegbetalenimefa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe\"aro\"?",
  //       "expectedAnswer": "ofu",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "4",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "455",
  //       "expectedAnswer": "Otalenirinwodinmarun",
  //       "response": "Otalenirinwodinmarun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Talo ko iwe Alawiiye Yoruba ?",
  //       "expectedAnswer": "J.F Odunjo",
  //       "response": "J.F Odunjo",
  //       "isCorrect": true,
  //       "amount": 50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "456",
  //       "expectedAnswer": "Otalenirinwodinmerin",
  //       "response": "Otalenirinwodinmerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Daruko oti meta ni ele yoruba",
  //       "expectedAnswer": "Emu,burukutu, otika, sekete",
  //       "response": "Emu",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Question",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "484",
  //       "expectedAnswer": "orinlenirinwolemerin ",
  //       "response": "orinlenirinwolemerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Now",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Now",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Awon Yoruba bo won ni akuro ti lomi ninu tele ki ojo to ro.Kini\"akuro\"?",
  //       "expectedAnswer": "Ere,Petepete ",
  //       "response": "Eso",
  //       "isCorrect": false,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Paper",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "508",
  //       "expectedAnswer": "Eedegbetalemejo",
  //       "response": "Eedegbetalemejo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Awon wo ni won pe ni omo alare ninu oriki won?",
  //       "expectedAnswer": "Ijebu",
  //       "response": "Ijebu",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "459",
  //       "expectedAnswer": "Otalenirinwodinkan",
  //       "response": "Otalenirinwodinkan",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ni ojo igbeyawoYoruba ma n ki iyawo Tutun pe\"wa bi isun wa bi iwale\"kini itumo isun ati iwale?",
  //       "expectedAnswer": "omo obirin ati okunrin",
  //       "response": "omo obirin ati okunrin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "523",
  //       "expectedAnswer": "Okoolenieedegbetalenimeta",
  //       "response": "Okoolenieedegbetalenimeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Tato si oiongbo kini Yoruba n pe \"cat\"?",
  //       "expectedAnswer": "Olongini",
  //       "response": "Olongini",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Notice",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "491",
  //       "expectedAnswer": "Eedegbetadinmesan-an",
  //       "response": "Eedegbetadinmesan-an",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Oke olumo wa ni ipinle ogun, oke igbeti wa ni ipinle oyo.\"ipinle wo ni oke olosunta wa\"?",
  //       "expectedAnswer": "Ipinle Ekiti",
  //       "response": "Ipinle Ekiti",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "522",
  //       "expectedAnswer": "Okooleledegbetalemeji",
  //       "response": "Okooleledegbetalemeji",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni ete?",
  //       "expectedAnswer": "Itanje",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": 0,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Owe Yoruba kan ni ijapa wonu oru,o ku atiyo kini Yoruba n pe ni \"oru\"?",
  //       "expectedAnswer": "Ikoko",
  //       "response": "Ikoko",
  //       "isCorrect": true,
  //       "amount": 5000,
  //       "balance": 15000
  //     }
  //   ]
  // },
  // {
  //   "episode": 48,
  //   "participantName": "Adediwura Aderibigbe",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 5000,
  //   "link": "https://youtu.be/_KOXUtA8HtM?si=rjUi_9665MUzWSrW",
  //   "date": "Agu 20, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Yea",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "OKay",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "OKay",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "269",
  //       "expectedAnswer": "Otalenigbalemesan-an",
  //       "response": "Otalenigbalemesan-an",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Amoranbini oyo\"...",
  //       "expectedAnswer": "Agbe kete lori oun bere pe se oko la n lo ni abi odo",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "403",
  //       "expectedAnswer": "Katelenirinwo",
  //       "response": "Katelenirinwo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni \"odan\" ?",
  //       "expectedAnswer": "Asale",
  //       "response": "Papa",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "301",
  //       "expectedAnswer": "Kokanleniodunrun",
  //       "response": "kokanleniodunrun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe akobi omo obirin ?",
  //       "expectedAnswer": "Bere",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "344",
  //       "expectedAnswer": "Ojileloodunrunlemerin ",
  //       "response": "Ojileloodunrunlemerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini itumo oro yii\"igbe osumare\"?",
  //       "expectedAnswer": "Oun to sowon",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
      
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "266",
  //       "expectedAnswer": "Otalenigbalemefa",
  //       "response": "Otalenigbalemefa",
  //       "isCorrect": true,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini ni  \"Lightening\"ni yoruba?",
  //       "expectedAnswer": "monamona",
  //       "response": "monamona",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ninu oya (opon) iho meelo ni o wa ninu apoti ayo opo?",
  //       "expectedAnswer": "Iho mejila",
  //       "response": "Iho mejila",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "238",
  //       "expectedAnswer": "Ojilenigbadinmeji",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini awon oro wonyi \"belching or burping\"tun mo si ni Yoruba?",
  //       "expectedAnswer": "Gunfe",
  //       "response": "Gunfe",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "237",
  //       "expectedAnswer": "ojilenigbadinmeta",
  //       "response": "ojilenigbadinmeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba m pe ni \"shink\"?",
  //       "expectedAnswer": "Alayungbere",
  //       "response": "Alayungbere",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "272",
  //       "expectedAnswer": "Orinlenigbadinmejo",
  //       "response": "Kejodinlorinlenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Asorooja bi oja,onitu oni sa\"...",
  //       "expectedAnswer": "Eni to n na oni dawo duro",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": 0,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "419",
  //       "expectedAnswer": "Okandinniokoolenirinwo",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "OKay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "What is the Yoruba name of aardvark?",
  //       "expectedAnswer": "Aferemojo",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "OKay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 5000
  //     }
  //   ]
  // },
  // {
  //   "episode": 49,
  //   "participantName": "Aisha Kezeem",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 50000,
  //   "link": "https://youtu.be/6QTxKIw7TlU?si=CpKjfXx-8Q036G9Z",
  //   "date": "Agu 23, 2024",
  //   "events": [
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "466",
  //       "expectedAnswer": "Irinwoleniogotalenimefa",
  //       "response": "Irinwoleniogotalenimefa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 1000000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Akotagiri ejo, agba ti o ri ejo ati ko sa\"..",
  //       "expectedAnswer": "Ara iko lo n ya",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "286",
  //       "expectedAnswer": "Orinlenirinwolenimefa",
  //       "response": "Orinlenirinwolenimefa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni \"fence\"?",
  //       "expectedAnswer": "Odi",
  //       "response": "Odi",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "528",
  //       "expectedAnswer": "Okoolenieedegbetalenimejo",
  //       "response": "Okoolenieedegbetalenimejo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ti Yoruba ba ni pe eniyan juba ehoro,ki lotunmo si?",
  //       "expectedAnswer": "Osalo",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "444",
  //       "expectedAnswer": "Ojilenirinwolenimerin ",
  //       "response": "Ojilenirinwolenimerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe Yoruba yii\"Temi ko soro temi ko soro\"...",
  //       "expectedAnswer": "Ti ki je ki omo alagbede ni ida",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "560",
  //       "expectedAnswer": "Otaleleedegbeta",
  //       "response": "Otaleleedegbeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini itunmo akanlo ede yii \"yin agbado si eyin igba\"...",
  //       "expectedAnswer": "Asedanu",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "453",
  //       "expectedAnswer": "Aadotalenirinwolemeta",
  //       "response": "Aadotalenirinwolemeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Ti Toruba ba sope eja abi akan,kini eja duro fun ninu oro yi?",
  //       "expectedAnswer": "oun ti ko da",
  //       "response": "oun toda",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "470",
  //       "expectedAnswer": "Orinlenirinwodinmewa",
  //       "response": "Orinlenirinwodinmewa",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Ani ko mu wa, o ni kosi\"...",
  //       "expectedAnswer": "Ahun ni loju alagbe",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "463",
  //       "expectedAnswer": "Otalenirinwolemeta",
  //       "response": "Otalenirinwolemeta",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Se alaye ki o si se atupale owe Yoruba yii\"A ki n fi oju boro gba omo lowe ekuro?",
  //       "expectedAnswer": "Atila laye ko rorun",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "299",
  //       "expectedAnswer": "Eegbetadinmefa",
  //       "response": "Mefadinleedegbata",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Awon meloo lowa ninu oyo mesi?",
  //       "expectedAnswer": "Awon meje",
  //       "response": "mesan-an",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "244",
  //       "expectedAnswer": "Ojilenigbalemerin",
  //       "response": "Ojilenigbalemerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Aroko je ona ti a fii ranse si eniyan miran ti itunmo re je asiri laarin eni ti o paa ati eniti a fi ranse si.Ti won ba fi \"iye\" ranse si eniyan ko lo tumo si?",
  //       "expectedAnswer": "Je ka rira,sugbon kii se oro to le",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     }
  //   ]
  // },
  // {
  //   "episode": 50,
  //   "participantName": "Folakemi Bello",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 20000,
  //   "link": "https://youtu.be/bo1OIyEKAjY?si=a8Ug9R13j2xOAUuD",
  //   "date": "Agu 27, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "OKAY",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "453",
  //       "expectedAnswer": "Otalenirinwodinmeje",
  //       "response": "Otalenirinwodinmeje",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "OKAY",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Oun laja ni fori gba ogbe.Kini Yoruba n pe ni\"ogbe\"?",
  //       "expectedAnswer": "Egbo",
  //       "response": "Agbo",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "444",
  //       "expectedAnswer": "Ojilenirinwolemerin",
  //       "response": "Ojilenirinwolemerin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "A pi roro ko loju oorun legbe asun fonfon.Kini itumo apiroro",
  //       "expectedAnswer": "Eni to n dibon",
  //       "response": "Eni to n dibon",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "465",
  //       "expectedAnswer": "Otalenirinwolemarun",
  //       "response": "Otalenirinwolemarun",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni \"kakaki\"?",
  //       "expectedAnswer": "Fere",
  //       "response": "Fer",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "No",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "455",
  //       "expectedAnswer": "Otalenirinwodinmarun ",
  //       "response": "",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Yato si alangba ki tun ni yoruba n pe \"lizard\"?",
  //       "expectedAnswer": "Alamu",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "302",
  //       "expectedAnswer": "Ketalenigba",
  //       "response": "Ketalenigba",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "So oro mewa ti a le yo jade lati \"eti\"..",
  //       "expectedAnswer": "Abetilukara,loti,tetisi,fetikoro,tetisi,la eti",
  //       "response": "Abetilukara,loti,tetisi,fetikoro,tetisi,la eti",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yii\"Oka kii je oka\"...",
  //       "expectedAnswer": "Eranko to je oka loka n je",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "But",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Now",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "So oro mewa ti a le yo jade lati\"aso\"..",
  //       "expectedAnswer": "Asoebi, niaso,woso,foso,fasotore,ranso,taso,loso,gbaso,saso",
  //       "response": "Asoebi, niaso,woso,foso,fasotore,ranso,taso,loso,gbaso,saso",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe \"corruption\"...",
  //       "expectedAnswer": "Iwa ibaje",
  //       "response": "Iwa ibaje",
  //       "isCorrect": true,
  //       "amount": 5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini oro Yoruba fun \"Ulcer\"?",
  //       "expectedAnswer": "Ogba inu",
  //       "response": "Ogba inu",
  //       "isCorrect": true,
  //       "amount": 5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Now",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 20000
  //     }
  //   ]
  // },
  // {
  //   "episode": 61,
  //   "participantName": "Mayowa Adebola",
  //   "amountAvailabeTowin": 1000000,
  //   "amountWon": 0,
  //   "link": "https://youtu.be/sclFs46QQb0?si=eUrcI0JK9L8IWjlW",
  //   "date": "Oct 1, 2024",
  //   "events": [
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -500000,
  //       "balance": 500000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -250000,
  //       "balance": 250000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -150000,
  //       "balance": 100000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -50000,
  //       "balance": 50000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Pari owe yi: Agbe to r'oko ti ko gbin oka, to ni oun da ikun loro",
  //       "expectedAnswer": "Ara re lo da loro",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 45000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 40000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "471",
  //       "expectedAnswer": "Ibere orinlenirinwo din mesan",
  //       "response": "Ibere orinlenirinwo din mesan",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 35000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni Orunla?",
  //       "expectedAnswer": "Ila gbigbe ti agun fun obe",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 30000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "QUESTION_NUMBER",
  //       "question": "344",
  //       "expectedAnswer": "Ibere Ojilenioodunrun le merin",
  //       "response": "Ibere Ojilenioodunrun le merin",
  //       "isCorrect": true,
  //       "amount": 0,
  //       "balance": 25000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Sir",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 20000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini oro yi tumosi: \"Igbe osumare\"?",
  //       "expectedAnswer": "ohun ti o sowon lati ri",
  //       "response": "",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Kini Yoruba n pe ni \"Orere\"?",
  //       "expectedAnswer": "Ohun ti koni opin",
  //       "response": "Ohun ti koni opin",
  //       "isCorrect": true,
  //       "amount": 5000,
  //       "balance": 15000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "Okay",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 10000
  //     },
  //     {
  //       "type": "CODE_MIX",
  //       "question": "",
  //       "expectedAnswer": "",
  //       "response": "But",
  //       "isCorrect": false,
  //       "amount": -5000,
  //       "balance": 5000
  //     },
  //     {
  //       "type": "QUESTION",
  //       "question": "Yato si alangba, ki tun ni Yoruba npe \"Lizard\"?",
  //       "expectedAnswer": "Alaamu",
  //       "response": "Alayunbere",
  //       "isCorrect": true,
  //       "amount": -5000,
  //       "balance": 0
  //     }
  //   ]
  // }
]