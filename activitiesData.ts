import { BilingualItem, VocabularyWord } from './types.ts';

export const actividad1Data = {
  titleEs: 'ACTIVIDAD 1 — COMPLETA EL TEXTO',
  titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 1 — ԼՐԱՑՐՈՒ ՏԵՔՍՏԸ',
  instructionEs: 'El siguiente texto está incompleto. Utiliza las palabras adecuadas para que tenga un significado correcto.',
  instructionHy: 'Հետևյալ տեքստը թերի է։ Լրացրու բաց թողնված բառերը, որպեսզի այն ճիշտ իմաստ արտահայտի։',
  wordBank: ['romances', 'tradición cultural', 'mitos', 'cuentos', 'leyendas', 'fábulas'],
  templatePart1: 'Las narraciones populares son muy importantes porque forman parte de la ',
  templateBlank1: 'tradición cultural',
  templatePart2: ' de un pueblo.\nDichas manifestaciones populares pueden clasificarse en:\n',
  blanks: ['fábulas', 'cuentos', 'romances', 'mitos', 'leyendas'],
  translationEs: 'Las narraciones populares son muy importantes porque forman parte de la tradición cultural de un pueblo. Dichas manifestaciones populares pueden clasificarse en: 1. fábulas, 2. cuentos, 3. romances, 4. mitos, 5. leyendas.',
  translationHy: 'Ժողովրդական պատումները շատ կարևոր են, որովհետև կազմում են ժողովրդի մշակութային ավանդույթի մասը։ Այս ժողովրդական ստեղծագործությունները կարելի է դասակարգել հետևյալ տեսակների՝ առակներ, հեքիաթներ կամ պատմվածքներ, ռոմանսներ, առասպելներ և ավանդազրույցներ։',
};

export const actividad2Data = {
  titleEs: 'ACTIVIDAD 2 — COMPLETA LA TABLA',
  titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 2 — ԼՐԱՑՐՈՒ ԱՂՅՈՒՍԱԿԸ',
  instructionEs: 'Completa la siguiente tabla indicando ejemplos de los diferentes tipos de narraciones que puedas encontrar en Internet o en la biblioteca.',
  instructionHy: 'Լրացրու հետևյալ աղյուսակը՝ նշելով պատմությունների տարբեր տեսակների օրինակներ, որոնք կարելի է գտնել համացանցում կամ գրադարանում։',
  rows: [
    {
      tipoEs: 'Fábula',
      tipoHy: 'Առակ',
      ejemploEs: 'La cigarra y la hormiga',
      ejemploHy: 'Ճպուռն ու մրջյունը',
      explicacionEs: 'Es una fábula porque los animales actúan como personas y transmite una enseñanza sobre la previsión y el esfuerzo.',
      explicacionHy: 'Առակ է, որովհետև կենդանիները գործում են մարդկանց նման, և պատմությունը սովորեցնում է նախապես մտածելու և աշխատասիրության կարևորությունը։',
    },
    {
      tipoEs: 'Cuento',
      tipoHy: 'Հեքիաթ կամ պատմվածք',
      ejemploEs: 'Hansel y Gretel',
      ejemploHy: 'Հենզելն ու Գրետելը',
      explicacionEs: 'Es un cuento maravilloso porque aparecen una bruja y una casa extraordinaria hecha de dulces.',
      explicacionHy: 'Հրաշապատում հեքիաթ է, որովհետև հանդիպում են կախարդ և քաղցրավենիքից պատրաստված արտասովոր տուն։',
    },
    {
      tipoEs: 'Romance',
      tipoHy: 'Ռոմանս',
      ejemploEs: 'Romance del conde Arnaldos',
      ejemploHy: 'Կոմս Առնալդոսի ռոմանսը',
      explicacionEs: 'Es un romance porque narra una historia mediante versos y pertenece a la tradición poética española.',
      explicacionHy: 'Ռոմանս է, որովհետև պատմությունը ներկայացնում է բանաստեղծական տողերով և պատկանում է իսպանական չափածո ավանդույթին։',
    },
    {
      tipoEs: 'Mito',
      tipoHy: 'Առասպել',
      ejemploEs: 'El mito de Ícaro',
      ejemploHy: 'Իկարոսի առասպելը',
      explicacionEs: 'Es un mito de la tradición griega. Ícaro intenta volar con unas alas fabricadas con plumas y cera, pero se acerca demasiado al sol.',
      explicacionHy: 'Հունական առասպել է։ Իկարոսը փորձում է թռչել փետուրներից և մոմից պատրաստված թևերով, բայց չափազանց մոտենում է արևին։',
    },
    {
      tipoEs: 'Leyenda',
      tipoHy: 'Ավանդազրույց',
      ejemploEs: 'La leyenda de la Santa Compaña',
      ejemploHy: 'Սանտա Կոմպանիայի ավանդազրույցը',
      explicacionEs: 'Es una leyenda del folclore gallego sobre una procesión sobrenatural de almas durante la noche.',
      explicacionHy: 'Գալիսիական ժողովրդական ավանդազրույց է գիշերը հայտնվող հոգիների գերբնական թափորի մասին։',
    },
  ],
};

export const actividad3Data = {
  titleEs: 'ACTIVIDAD 3 — LA CANCIÓN POPULAR',
  titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 3 — ԺՈՂՈՎՐԴԱԿԱՆ ԵՐԳ',
  instructionEs: '¿Conoces alguna otra versión de la siguiente canción? ¿En qué se diferencia?',
  instructionHy: 'Գիտե՞ս հետևյալ երգի որևէ այլ տարբերակ։ Ինչո՞վ է այն տարբերվում։',
  noteEs: 'En el libro de texto se analiza la canción «Que llueva, que llueva». Este ejercicio evalúa la comprensión de la tradición oral y las variantes.',
  noteHy: 'Դասագրքում ուսումնասիրվում է «Que llueva, que llueva» երգը։ Այս առաջադրանքը ստուգում է բանավոր ավանդույթի և տարբերակների գաղափարի ընկալումը։',
  songLines: [
    { es: 'Canción de la primavera', hy: 'Գարնան երգ' },
    { es: 'Ya llega la primavera,', hy: 'Ահա գալիս է գարունը,' },
    { es: 'las flores quieren despertar,', hy: 'ծաղիկներն ուզում են արթնանալ,' },
    { es: 'los pájaros cantan alegres', hy: 'թռչունները ուրախ երգում են,' },
    { es: 'y los niños salen a jugar.', hy: 'իսկ երեխաները դուրս են գալիս խաղալու։' },
  ],
  questions: [
    {
      qEs: '1. ¿De qué trata la canción?',
      qHy: '1. Ինչի՞ մասին է երգը։',
      aEs: 'Trata de la llegada de la primavera.',
      aHy: 'Գարնան գալու մասին է։',
    },
    {
      qEs: '2. ¿Conoces otra canción sobre la primavera?',
      qHy: '2. Գիտե՞ս գարնան մասին այլ երգ։',
      aEs: 'Sí, conozco otras canciones que hablan de las flores y del buen tiempo.',
      aHy: 'Այո՛, գիտեմ այլ երգեր, որոնք ծաղիկների և լավ եղանակի մասին են։',
    },
    {
      qEs: '3. ¿Por qué puede haber diferentes versiones de una canción popular?',
      qHy: '3. Ինչո՞ւ ժողովրդական երգը կարող է ունենալ տարբեր տարբերակներ։',
      aEs: 'Porque se transmite de generación en generación y algunas personas cambian las palabras o los versos.',
      aHy: 'Որովհետև փոխանցվում է սերնդեսերունդ, և որոշ մարդիկ փոխում են բառերը կամ տողերը։',
    },
    {
      qEs: '4. ¿Qué elementos pueden cambiar entre dos versiones?',
      qHy: '4. Ի՞նչը կարող է փոխվել երկու տարբերակների միջև։',
      aEs: 'Pueden cambiar las palabras, algunos versos, el ritmo o el nombre de los personajes.',
      aHy: 'Կարող են փոխվել բառերը, որոշ տողերը, ռիթմը կամ հերոսների անունները։',
    },
  ],
  modelAnswerEs: 'Sí, conozco otras versiones de esta canción popular. Algunas palabras y expresiones son diferentes, pero el tema principal sigue siendo el mismo. Esto ocurre porque las canciones populares se transmiten oralmente de generación en generación.',
  modelAnswerHy: 'Այո՛, ես գիտեմ այս ժողովրդական երգի այլ տարբերակներ։ Որոշ բառեր և արտահայտություններ տարբերվում են, բայց հիմնական թեման մնում է նույնը։ Դա տեղի է ունենում, որովհետև ժողովրդական երգերը բանավոր փոխանցվում են սերնդեսերունդ։',
};

export const actividad4Data = {
  titleEs: 'ACTIVIDAD 4 — LECTURA Y COMPRENSIÓN: «El jardinero y la semilla»',
  titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 4 — ԸՆԹԵՐՑԱՆՈՒԹՅՈՒՆ ԵՎ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ․ «Այգեպանն ու սերմը»',
  noteEs: 'Esta narración es un nuevo apólogo educativo que sustituye a Doña Truhana en esta versión de estudio.',
  noteHy: 'Այս պատմությունը նոր ուսումնական ապոլոգ է՝ գրված հատուկ այս վարժության համար, և փոխարինում է դասագրքի Doña Truhana պատմությանը։',
  instructionEs: 'Lee el siguiente texto e indica a qué clase de cuento pertenece y por qué. Si contiene una moraleja, explica en qué consiste su enseñanza.',
  instructionHy: 'Կարդա հետևյալ տեքստը և նշիր, թե պատմության որ տեսակին է պատկանում և ինչու։ Եթե պարունակում է բարոյական խրատ, բացատրիր դրա ուսուցողական իմաստը։',
  story: [
    {
      es: 'Había una vez un joven llamado Mateo que vivía en un pequeño pueblo rodeado de montañas.',
      hy: 'Մի ժամանակ Մատեո անունով մի երիտասարդ էր ապրում լեռներով շրջապատված փոքրիկ գյուղում։',
    },
    {
      es: 'Mateo quería tener el jardín más bonito de todo el pueblo, pero era muy impaciente. Siempre deseaba conseguir resultados rápidamente.',
      hy: 'Մատեոն ուզում էր ունենալ ամբողջ գյուղի ամենագեղեցիկ այգին, բայց շատ անհամբեր էր։ Նա միշտ ցանկանում էր արագ արդյունքի հասնել։',
    },
    {
      es: 'Un día visitó a un jardinero anciano que tenía un jardín lleno de flores de diferentes colores.',
      hy: 'Մի օր նա այցելեց մի տարեց այգեպանի, որն ուներ տարբեր գույների ծաղիկներով լի այգի։',
    },
    {
      es: '—¿Cómo ha conseguido tener un jardín tan hermoso? —preguntó Mateo.',
      hy: '— Ինչպե՞ս եք կարողացել այսքան գեղեցիկ այգի ունենալ, — հարցրեց Մատեոն։',
    },
    {
      es: '—Con paciencia, trabajo y cuidado —respondió el jardinero.',
      hy: '— Համբերությամբ, աշխատանքով և խնամքով, — պատասխանեց այգեպանը։',
    },
    {
      es: 'Mateo le pidió que le enseñara su secreto.',
      hy: 'Մատեոն խնդրեց բացահայտել իր գաղտնիքը։',
    },
    {
      es: 'El anciano le entregó una pequeña semilla y le dijo:',
      hy: 'Ծերունին նրան մի փոքրիկ սերմ տվեց և ասաց.',
    },
    {
      es: '—Plántala, riégala todos los días y espera. Si la cuidas bien, algún día tendrás una flor preciosa.',
      hy: '— Տնկի՛ր այն, ամեն օր ջրի՛ր և սպասի՛ր։ Եթե լավ խնամես, մի օր շատ գեղեցիկ ծաղիկ կունենաս։',
    },
    {
      es: 'Mateo volvió a casa y plantó la semilla.',
      hy: 'Մատեոն վերադարձավ տուն և տնկեց սերմը։',
    },
    {
      es: 'A la mañana siguiente salió corriendo al jardín, pero no vio ninguna flor.',
      hy: 'Հաջորդ առավոտ նա վազելով դուրս եկավ այգի, բայց ոչ մի ծաղիկ չտեսավ։',
    },
    {
      es: '—¡Esto no funciona! —exclamó enfadado.',
      hy: '— Սա չի աշխատում, — զայրացած բացականչեց նա։',
    },
    {
      es: 'Al segundo día volvió a mirar la tierra. Como seguía sin aparecer nada, empezó a perder la paciencia.',
      hy: 'Երկրորդ օրը կրկին նայեց հողին։ Քանի որ դեռ ոչինչ չէր երևում, սկսեց կորցնել համբերությունը։',
    },
    {
      es: 'Al tercer día decidió desenterrar la semilla para comprobar si había crecido.',
      hy: 'Երրորդ օրը որոշեց հանել սերմը հողից՝ ստուգելու, թե արդյոք այն աճել է։',
    },
    {
      es: 'Al hacerlo, dañó las pequeñas raíces que empezaban a formarse.',
      hy: 'Դրանով նա վնասեց փոքրիկ արմատները, որոնք սկսել էին ձևավորվել։',
    },
    {
      es: 'Pasaron varias semanas, pero la planta nunca apareció.',
      hy: 'Անցան մի քանի շաբաթներ, բայց բույսն այդպես էլ չհայտնվեց։',
    },
    {
      es: 'Triste y decepcionado, Mateo regresó a casa del jardinero.',
      hy: 'Տխուր և հիասթափված՝ Մատեոն վերադարձավ այգեպանի մոտ։',
    },
    {
      es: '—He hecho todo lo que me dijo, pero mi semilla no ha crecido —se quejó.',
      hy: '— Ես արել եմ այն ամենը, ինչ դուք ասել էիք, բայց իմ սերմը չի աճել, — բողոքեց նա։',
    },
    {
      es: 'El anciano le preguntó qué había hecho exactamente.',
      hy: 'Ծերունին հարցրեց, թե կոնկրետ ինչ էր արել։',
    },
    {
      es: 'Cuando Mateo le contó que había desenterrado la semilla, el jardinero sonrió y respondió:',
      hy: 'Երբ Մատեոն պատմեց, որ սերմը հանել էր հողից, այգեպանը ժպտաց և պատասխանեց.',
    },
    {
      es: '—Querías ver el resultado antes de darle tiempo a crecer. Algunas cosas importantes de la vida no se consiguen inmediatamente.',
      hy: '— Դու ուզում էիր արդյունքը տեսնել՝ առանց դրան աճելու ժամանակ տալու։ Կյանքի որոշ կարևոր բաների հնարավոր չէ անմիջապես հասնել։',
    },
    {
      es: 'Mateo comprendió su error.',
      hy: 'Մատեոն հասկացավ իր սխալը։',
    },
    {
      es: 'El jardinero le entregó otra semilla y esta vez el joven decidió cuidarla sin prisas.',
      hy: 'Այգեպանը նրան ևս մեկ սերմ տվեց, և այս անգամ երիտասարդը որոշեց խնամել այն առանց շտապելու։',
    },
    {
      es: 'Cada día la regaba y comprobaba que la tierra estuviera en buenas condiciones.',
      hy: 'Ամեն օր ջրում էր սերմը և ստուգում, որ հողը լավ վիճակում լինի։',
    },
    {
      es: 'Pasaron varias semanas y apareció un pequeño brote verde.',
      hy: 'Անցան մի քանի շաբաթներ, և հայտնվեց փոքրիկ կանաչ ծիլ։',
    },
    {
      es: 'Meses después, una hermosa flor creció en su jardín.',
      hy: 'Մի քանի ամիս անց նրա այգում աճեց մի գեղեցիկ ծաղիկ։',
    },
    {
      es: 'Mateo estaba muy feliz, pero había aprendido algo mucho más importante que cultivar una flor: había aprendido a tener paciencia y a confiar en el esfuerzo constante.',
      hy: 'Մատեոն շատ ուրախ էր, բայց սովորել էր ավելի կարևոր բան, քան պարզապես ծաղիկ աճեցնելը․ նա սովորել էր համբերատար լինել և վստահել հետևողական աշխատանքին։',
    },
  ],
  vocabulary: [
    { es: 'Jardinero', hy: 'Այգեպան' },
    { es: 'Semilla', hy: 'Սերմ' },
    { es: 'Plantar', hy: 'Տնկել' },
    { es: 'Regar', hy: 'Ջրել' },
    { es: 'Crecer', hy: 'Աճել' },
    { es: 'Raíces', hy: 'Արմատներ' },
    { es: 'Brote', hy: 'Ծիլ' },
    { es: 'Tierra', hy: 'Հող' },
    { es: 'Paciencia', hy: 'Համբերություն' },
    { es: 'Impaciente', hy: 'Անհամբեր' },
    { es: 'Esfuerzo', hy: 'Ջանք' },
    { es: 'Anciano', hy: 'Տարեց մարդ' },
    { es: 'Desenterrar', hy: 'Հանել հողի միջից' },
    { es: 'Dañar', hy: 'Վնասել' },
    { es: 'Decepcionado', hy: 'Հիասթափված' },
    { es: 'Cuidar', hy: 'Խնամել' },
    { es: 'Conseguir', hy: 'Հասնել, ձեռք բերել' },
    { es: 'Quejarse', hy: 'Բողոքել' },
    { es: 'Comprender el error', hy: 'Հասկանալ սխալը' },
    { es: 'Sin prisas', hy: 'Առանց շտապելու' },
  ],
  questions: [
    {
      qEs: '1. ¿Cómo se llamaba el protagonista?',
      qHy: '1. Ինչպե՞ս էր գլխավոր հերոսի անունը։',
      aEs: 'Se llamaba Mateo.',
      aHy: 'Նրա անունը Մատեո էր։',
    },
    {
      qEs: '2. ¿Dónde vivía Mateo?',
      qHy: '2. Որտե՞ղ էր ապրում Մատեոն։',
      aEs: 'Vivía en un pequeño pueblo rodeado de montañas.',
      aHy: 'Նա ապրում էր լեռներով շրջապատված փոքրիկ գյուղում։',
    },
    {
      qEs: '3. ¿Qué quería conseguir Mateo?',
      qHy: '3. Ինչի՞ էր ուզում հասնել Մատեոն։',
      aEs: 'Quería tener el jardín más bonito del pueblo.',
      aHy: 'Նա ուզում էր ունենալ գյուղի ամենագեղեցիկ այգին։',
    },
    {
      qEs: '4. ¿Qué defecto tenía Mateo?',
      qHy: '4. Ի՞նչ թերություն ուներ Մատեոն։',
      aEs: 'Era muy impaciente y quería conseguir resultados rápidamente.',
      aHy: 'Նա շատ անհամբեր էր և ուզում էր արագ արդյունքի հասնել։',
    },
    {
      qEs: '5. ¿Qué le entregó el jardinero?',
      qHy: '5. Ի՞նչ տվեց նրան այգեպանը։',
      aEs: 'Le entregó una pequeña semilla.',
      aHy: 'Նրան մի փոքրիկ սերմ տվեց։',
    },
    {
      qEs: '6. ¿Qué debía hacer Mateo con la semilla?',
      qHy: '6. Ի՞նչ պետք է աներ Մատեոն սերմի հետ։',
      aEs: 'Debía plantarla, regarla y esperar a que creciera.',
      aHy: 'Պետք է տնկեր, ջրեր և սպասեր, մինչև այն աճեր։',
    },
    {
      qEs: '7. ¿Qué hizo Mateo al tercer día?',
      qHy: '7. Ի՞նչ արեց Մատեոն երրորդ օրը։',
      aEs: 'Desenterró la semilla para comprobar si había crecido.',
      aHy: 'Սերմը հանեց հողից՝ ստուգելու, թե արդյոք աճել է։',
    },
    {
      qEs: '8. ¿Por qué no creció la primera planta?',
      qHy: '8. Ինչո՞ւ առաջին բույսը չաճեց։',
      aEs: 'Porque Mateo dañó sus raíces al desenterrar la semilla.',
      aHy: 'Որովհետև Մատեոն վնասեց արմատները՝ սերմը հողից հանելով։',
    },
    {
      qEs: '9. ¿Qué hizo de manera diferente con la segunda semilla?',
      qHy: '9. Ի՞նչն այլ կերպ արեց երկրորդ սերմի հետ։',
      aEs: 'La cuidó con paciencia y dejó que creciera.',
      aHy: 'Համբերությամբ խնամեց և թույլ տվեց, որ աճի։',
    },
    {
      qEs: '10. ¿Qué aprendió Mateo al final?',
      qHy: '10. Ի՞նչ սովորեց Մատեոն վերջում։',
      aEs: 'Aprendió que las cosas importantes necesitan paciencia, tiempo y esfuerzo.',
      aHy: 'Նա սովորեց, որ կարևոր բաները պահանջում են համբերություն, ժամանակ և ջանքեր։',
    },
  ],
  analysis: [
    { elementEs: 'Tipo de cuento', elementHy: 'Տեսակ', answerEs: 'Apólogo', answerHy: 'Խրատական պատմություն' },
    { elementEs: 'Protagonista', elementHy: 'Գլխավոր հերոս', answerEs: 'Mateo', answerHy: 'Մատեո' },
    { elementEs: 'Personaje secundario', elementHy: 'Երկրորդական հերոս', answerEs: 'El jardinero anciano', answerHy: 'Տարեց այգեպանը' },
    { elementEs: 'Lugar', elementHy: 'Վայր', answerEs: 'Un pequeño pueblo y un jardín', answerHy: 'Փոքրիկ գյուղ և այգի' },
    { elementEs: 'Introducción', elementHy: 'Սկիզբ', answerEs: 'Mateo quiere tener un jardín bonito', answerHy: 'Մատեոն ուզում է գեղեցիկ այգի ունենալ' },
    { elementEs: 'Nudo', elementHy: 'Հանգույց', answerEs: 'Su impaciencia provoca que la primera semilla no crezca', answerHy: 'Անհամբերության պատճառով առաջին սերմը չի աճում' },
    { elementEs: 'Desenlace', elementHy: 'Հանգուցալուծում', answerEs: 'Aprende a esperar y consigue cultivar una flor', answerHy: 'Սովորում է սպասել և կարողանում է ծաղիկ աճեցնել' },
    { elementEs: 'Moraleja', elementHy: 'Բարոյական խրատ', answerEs: 'Las cosas importantes requieren paciencia y esfuerzo', answerHy: 'Կարևոր բաները համբերություն և ջանքեր են պահանջում' },
  ],
  formalSubmissionEs: 'El texto «El jardinero y la semilla» pertenece a los apólogos porque es una narración breve que transmite una enseñanza moral.\nEl protagonista es Mateo, un joven muy impaciente que quiere conseguir resultados rápidamente.\nCuando planta una semilla, no tiene paciencia y la desentierra para comprobar si ha crecido. Por eso, daña sus raíces y la planta no consigue desarrollarse.\nFinalmente, comprende su error y aprende que para alcanzar nuestros objetivos necesitamos tiempo, paciencia y esfuerzo constante.\nLa moraleja es que no debemos esperar resultados inmediatos, ya que las cosas importantes requieren dedicación.',
  formalSubmissionHy: '«Այգեպանն ու սերմը» տեքստը պատկանում է խրատական պատմությունների՝ ապոլոգների տեսակին, որովհետև կարճ պատմություն է, որը փոխանցում է բարոյական դաս։\nԳլխավոր հերոսը Մատեոն է՝ շատ անհամբեր երիտասարդ, որը ցանկանում է արագ արդյունքի հասնել։\nԵրբ նա սերմ է տնկում, համբերություն չի ունենում և հանում է այն հողից՝ ստուգելու, թե արդյոք աճել է։ Այդ պատճառով վնասում է արմատները, և բույսը չի կարողանում զարգանալ։\nՎերջում նա հասկանում է իր սխալը և սովորում, որ նպատակներին հասնելու համար անհրաժեշտ են ժամանակ, համբերություն և հետևողական ջանքեր։\nՊատմության խրատն այն է, որ չպետք է անմիջական արդյունքներ ակնկալել, քանի որ կարևոր բաները նվիրում և աշխատասիրություն են պահանջում։',
};

export const actividad5Data = {
  titleEs: 'ACTIVIDAD 5 — RECOPILATORIO DE CUENTOS',
  titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 5 — ՊԱՏՄՈՒԹՅՈՒՆՆԵՐԻ ԺՈՂՈՎԱԾՈՒ',
  instructionEs: 'Vas a elaborar un recopilatorio de cuentos para ilustrar las características de las cuatro clases de cuentos:\n• Busca y selecciona cinco cuentos por clase: maravillosos, realistas, apólogos y fábulas.\n• Luego, analiza cada cuento y destaca sus características con ejemplos sacados de los propios cuentos.\n• Para terminar, presenta un cuento al resto de las o los compañeros.',
  instructionHy: 'Դու պետք է կազմես պատմությունների ժողովածու՝ ցույց տալու պատմությունների չորս տեսակների առանձնահատկությունները։\n• Յուրաքանչյուր տեսակից ընտրիր հինգ պատմություն՝ հրաշապատում, իրապատում, խրատական պատմություններ և առակներ։\n• Հետո վերլուծիր յուրաքանչյուր պատմությունը և առանձնացրու նրա բնորոշ հատկանիշները՝ օրինակներ բերելով տեքստերից։\n• Վերջում դասընկերներիդ ներկայացրու պատմություններից մեկը։',
  groups: [
    {
      categoryEs: 'A. Cinco cuentos maravillosos',
      categoryHy: 'Հինգ հրաշապատում հեքիաթ',
      items: [
        { titleEs: '1. Cenicienta', titleHy: '1. Մոխրոտը', detailEs: 'Hada madrina y transformaciones mágicas (calabaza en carroza)', detailHy: 'Կնքամայր փերի և կախարդական կերպարանափոխություններ (դդումը կառքի)' },
        { titleEs: '2. Blancanieves', titleHy: '2. Սպիտակաձյունիկը', detailEs: 'Espejo mágico y elementos sobrenaturales', detailHy: 'Կախարդական հայելի և գերբնական տարրեր' },
        { titleEs: '3. La Bella Durmiente', titleHy: '3. Քնած գեղեցկուհին', detailEs: 'Hechizos y hadas', detailHy: 'Կախարդանք և փերիներ' },
        { titleEs: '4. Rapunzel', titleHy: '4. Ռապունցելը', detailEs: 'Cabello extraordinario y magia', detailHy: 'Արտասովոր մազեր և կախարդանք' },
        { titleEs: '5. Hansel y Gretel', titleHy: '5. Հենզելն ու Գրետելը', detailEs: 'Bruja y casa de dulces', detailHy: 'Կախարդ և քաղցրավենիքի տուն' },
      ],
    },
    {
      categoryEs: 'B. Cinco cuentos realistas',
      categoryHy: 'Հինգ իրապատում պատմվածք',
      items: [
        { titleEs: '1. El primer día de clase', titleHy: '1. Դպրոցի առաջին օրը', detailEs: 'Un alumno llega a un colegio nuevo', detailHy: 'Աշակերտը գալիս է նոր դպրոց' },
        { titleEs: '2. El autobús perdido', titleHy: '2. Բաց թողնված ավտոբուսը', detailEs: 'Una estudiante llega tarde por perder el autobús', detailHy: 'Աշակերտուհին ուշանում է, որովհետև բաց է թողնում ավտոբուսը' },
        { titleEs: '3. Un amigo de verdad', titleHy: '3. Իսկական ընկերը', detailEs: 'Dos amigos resuelven un malentendido', detailHy: 'Երկու ընկեր լուծում են թյուրիմացությունը' },
        { titleEs: '4. El partido suspendido', titleHy: '4. Չեղարկված խաղը', detailEs: 'Un equipo no puede jugar por la lluvia', detailHy: 'Թիմը չի կարողանում խաղալ անձրևի պատճառով' },
        { titleEs: '5. El regalo de cumpleaños', titleHy: '5. Ծննդյան նվերը', detailEs: 'Una niña prepara una sorpresa para su madre', detailHy: 'Աղջիկն անակնկալ է պատրաստում մոր համար' },
      ],
    },
    {
      categoryEs: 'C. Cinco apólogos',
      categoryHy: 'Հինգ խրատական պատմություն',
      items: [
        { titleEs: '1. El jardinero y la semilla', titleHy: '1. Այգեպանն ու սերմը', detailEs: 'La paciencia es necesaria', detailHy: 'Համբերությունն անհրաժեշտ է' },
        { titleEs: '2. El alumno y el examen', titleHy: '2. Աշակերտն ու քննությունը', detailEs: 'Hay que prepararse con tiempo', detailHy: 'Պետք է ժամանակին պատրաստվել' },
        { titleEs: '3. El comerciante honrado', titleHy: '3. Ազնիվ վաճառականը', detailEs: 'La honestidad es valiosa', detailHy: 'Ազնվությունը արժեքավոր է' },
        { titleEs: '4. El vecino generoso', titleHy: '4. Առատաձեռն հարևանը', detailEs: 'Ayudar a los demás es importante', detailHy: 'Կարևոր է օգնել ուրիշներին' },
        { titleEs: '5. El joven y el anciano', titleHy: '5. Երիտասարդն ու ծերունին', detailEs: 'Debemos escuchar los buenos consejos', detailHy: 'Պետք է լսել լավ խորհուրդները' },
      ],
    },
    {
      categoryEs: 'D. Cinco fábulas',
      categoryHy: 'Հինգ առակ',
      items: [
        { titleEs: '1. La liebre y la tortuga', titleHy: '1. Նապաստակն ու կրիան', detailEs: 'La constancia es importante', detailHy: 'Հետևողականությունը կարևոր է' },
        { titleEs: '2. La cigarra y la hormiga', titleHy: '2. Ճպուռն ու մրջյունը', detailEs: 'Debemos pensar en el futuro', detailHy: 'Պետք է մտածել ապագայի մասին' },
        { titleEs: '3. La zorra y el cuervo', titleHy: '3. Աղվեսն ու ագռավը', detailEs: 'No debemos confiar en los halagos', detailHy: 'Չպետք է հավատալ շողոքորթությանը' },
        { titleEs: '4. El león y el ratón', titleHy: '4. Առյուծն ու մուկը', detailEs: 'Todos podemos ayudar', detailHy: 'Յուրաքանչյուրը կարող է օգնել' },
        { titleEs: '5. El pastor mentiroso', titleHy: '5. Ստախոս հովիվը', detailEs: 'Mentir hace perder la confianza', detailHy: 'Սուտը կործանում է վստահությունը' },
      ],
    },
  ],
  oralPresentationEs: 'Buenos días.\nHoy voy a presentar un cuento titulado «El jardinero y la semilla».\nEste cuento pertenece a los apólogos porque transmite una enseñanza moral.\nEl protagonista es un joven llamado Mateo, que quiere tener un jardín muy bonito.\nSin embargo, Mateo es impaciente y no sabe esperar.\nUn jardinero anciano le enseña que para conseguir buenos resultados es necesario trabajar y tener paciencia.\nAl final, Mateo comprende su error y aprende una lección importante.\nHe elegido este cuento porque creo que su enseñanza es útil en nuestra vida cotidiana.',
  oralPresentationHy: 'Բարի լույս։\nԱյսօր ես ներկայացնելու եմ «Այգեպանն ու սերմը» պատմությունը։\nԱյս պատմությունը պատկանում է խրատական պատմություններին, որովհետև փոխանցում է բարոյական դաս։\nԳլխավոր հերոսը Մատեո անունով մի երիտասարդ է, որը ցանկանում է շատ գեղեցիկ այգի ունենալ։\nՍակայն Մատեոն անհամբեր է և չի կարողանում սպասել։\nՏարեց այգեպանը նրան սովորեցնում է, որ լավ արդյունքների հասնելու համար անհրաժեշտ են աշխատանք և համբերություն։\nՎերջում Մատեոն հասկանում է իր սխալը և կարևոր դաս է սովորում։\nԵս ընտրել եմ այս պատմությունը, որովհետև կարծում եմ, որ դրա խրատը օգտակար է մեր առօրյա կյանքում։',
};

export const actividad6Data = {
  titleEs: 'ACTIVIDAD 6 — MOTIVACIÓN PARA LEER',
  titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 6 — ԸՆԹԵՐՑԱՆՈՒԹՅԱՆ ՄՈՏԻՎԱՑԻԱ',
  instructionEs: 'Motivarse para leer es uno de los factores más importantes que pueden ayudarte a que tengas un buen hábito lector. Pero no solo eso, también te facilitará entender cualquier tipo de texto.\nRecuerda tres formas de cómo puedes motivarte para leer y añade un motivo personal que te haría leer, por iniciativa propia (no por obligación), según tu criterio.',
  instructionHy: 'Ընթերցանության նկատմամբ հետաքրքրություն ձևավորելը ամենակարևոր գործոններից մեկն է, որը կարող է օգնել ունենալ կարդալու լավ սովորություն։\nԲացի այդ, այն օգնում է ավելի հեշտ հասկանալ տարբեր տեսակի տեքստեր։\nՆշիր երեք եղանակ, որոնց միջոցով կարող ես մոտիվացվել կարդալու համար, և ավելացրու մեկ անձնական պատճառ, որի համար կարդալու ցանկություն կունենայիր սեփական նախաձեռնությամբ, այլ ոչ թե պարտադրանքով։',
  modelAnswers: [
    {
      label: 'a',
      es: 'Elegir libros que traten sobre mis intereses y aficiones.',
      hy: 'Ընտրել գրքեր, որոնք վերաբերում են իմ հետաքրքրություններին և նախասիրություններին։',
    },
    {
      label: 'b',
      es: 'Dedicar quince minutos al día a la lectura.',
      hy: 'Ամեն օր տասնհինգ րոպե հատկացնել ընթերցանությանը։',
    },
    {
      label: 'c',
      es: 'Leer cuentos divertidos y compartirlos con mis amigos.',
      hy: 'Կարդալ զվարճալի պատմություններ և կիսվել դրանցով ընկերներիս հետ։',
    },
    {
      label: 'd (Personal)',
      es: 'Me gustaría leer libros sobre fútbol y viajes porque disfruto descubriendo lugares nuevos y aprendiendo cosas sobre mis jugadores favoritos.',
      hy: 'Ես կցանկանայի կարդալ ֆուտբոլի և ճանապարհորդությունների մասին գրքեր, որովհետև սիրում եմ բացահայտել նոր վայրեր և նոր բաներ սովորել իմ սիրելի ֆուտբոլիստների մասին։',
    },
  ],
};
