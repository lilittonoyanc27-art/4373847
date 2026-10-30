import { BilingualItem } from './types.ts';

export interface TheorySection {
  id: string;
  number: number;
  titleEs: string;
  titleHy: string;
  summaryEs: string;
  summaryHy: string;
  content: {
    type: 'paragraph' | 'table' | 'story' | 'analysis' | 'qa' | 'callout';
    titleEs?: string;
    titleHy?: string;
    items?: BilingualItem[];
    tableHeaders?: { es: string; hy: string }[];
    tableRows?: { col1Es: string; col1Hy: string; col2Es: string; col2Hy: string }[];
    storyParagraphs?: BilingualItem[];
    moralEs?: string;
    moralHy?: string;
    qaList?: {
      qEs: string;
      qHy: string;
      aEs: string;
      aHy: string;
    }[];
  }[];
}

export const theorySections: TheorySection[] = [
  {
    id: 'que-son',
    number: 1,
    titleEs: '1. ¿Qué son las narraciones populares?',
    titleHy: '1. Ի՞նչ են ժողովրդական պատումները։',
    summaryEs: 'Relatos tradicionales transmitidos oralmente de generación en generación que forman parte de la cultura de un pueblo.',
    summaryHy: 'Ավանդական պատմություններ, որոնք բանավոր կերպով փոխանցվել են սերնդեսերունդ և կազմում են որևէ ժողովրդի մշակույթի մասը։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Explicación en español / Բացատրություն հայերեն',
        items: [
          {
            es: 'Las narraciones populares son relatos que forman parte de la cultura y las tradiciones de un pueblo.',
            hy: 'Ժողովրդական պատումները պատմություններ են, որոնք կազմում են որևէ ժողովրդի մշակույթի և ավանդույթների մի մասը։',
          },
          {
            es: 'Estas historias se transmitían principalmente de forma oral, es decir, las personas las contaban sin necesidad de escribirlas.',
            hy: 'Դրանք հնում փոխանցվել են հիմնականում բանավոր ձևով։ Այսինքն՝ մարդիկ պատմությունները պատմել են միմյանց՝ առանց պարտադիր գրի առնելու։',
          },
          {
            es: 'Los abuelos contaban historias a sus hijos y nietos, y estos las transmitían a las siguientes generaciones.',
            hy: 'Տատիկներն ու պապիկները պատմություններ էին պատմում երեխաներին և թոռներին, իսկ նրանք իրենց հերթին փոխանցում էին հաջորդ սերունդներին։',
          },
          {
            es: 'Por esta razón, una misma narración podía tener diferentes versiones.',
            hy: 'Այդ պատճառով նույն պատմությունը կարող էր ունենալ մի քանի տարբերակ։',
          },
          {
            es: 'Muchas narraciones populares son anónimas, lo que significa que no conocemos a su autor original.',
            hy: 'Շատ ժողովրդական պատումներ անհեղինակ են (anónimas), այսինքն՝ հայտնի չէ, թե ով է առաջինը ստեղծել դրանք։',
          },
          {
            es: 'Estas historias pueden contener acontecimientos reales, personajes imaginarios, animales que hablan, héroes, dioses y seres sobrenaturales.',
            hy: 'Այդ պատմություններում կարող են հանդիպել իրական իրադարձություններ, երևակայական կերպարներ, խոսող կենդանիներ, հերոսներ, աստվածներ և գերբնական էակներ։',
          },
          {
            es: 'Sus objetivos pueden ser entretener, enseñar, transmitir valores o explicar el origen de algunos fenómenos.',
            hy: 'Դրանց նպատակը կարող է լինել զվարճացնելը, սովորեցնելը, արժեքներ փոխանցելը կամ որոշ երևույթների ծագումը բացատրելը։',
          },
        ],
      },
      {
        type: 'table',
        titleEs: 'Características principales',
        titleHy: 'Հիմնական առանձնահատկությունները',
        tableHeaders: [
          { es: 'Español', hy: 'Իսպաներեն' },
          { es: 'Հայերեն', hy: 'Հայերեն' },
        ],
        tableRows: [
          { col1Es: 'Tradición popular', col1Hy: '', col2Es: 'Ժողովրդական ավանդույթ', col2Hy: '' },
          { col1Es: 'Transmisión oral', col1Hy: '', col2Es: 'Բանավոր փոխանցում', col2Hy: '' },
          { col1Es: 'De generación en generación', col1Hy: '', col2Es: 'Սերնդեսերունդ', col2Hy: '' },
          { col1Es: 'Autor anónimo', col1Hy: '', col2Es: 'Անհայտ հեղինակ', col2Hy: '' },
          { col1Es: 'Diferentes versiones', col1Hy: '', col2Es: 'Տարբեր տարբերակներ', col2Hy: '' },
          { col1Es: 'Personajes reales o imaginarios', col1Hy: '', col2Es: 'Իրական կամ երևակայական կերպարներ', col2Hy: '' },
          { col1Es: 'Enseñanza moral', col1Hy: '', col2Es: 'Բարոյական խրատ', col2Hy: '' },
          { col1Es: 'Elementos fantásticos', col1Hy: '', col2Es: 'Երևակայական տարրեր', col2Hy: '' },
        ],
      },
      {
        type: 'callout',
        titleEs: 'Ejemplo para comprender / Օրինակ հասկանալու համար',
        titleHy: '',
        items: [
          {
            es: 'Una abuela cuenta a su nieto una historia sobre un lobo que puede hablar. Años después, el nieto cuenta la misma historia a sus hijos, pero cambia algunos detalles. La historia sigue siendo popular, aunque existan distintas versiones.',
            hy: 'Տատիկը թոռանը պատմում է խոսող գայլի մասին մի պատմություն։ Տարիներ անց թոռը նույն պատմությունը պատմում է իր երեխաներին, բայց որոշ մանրամասներ փոխում է։ Պատմությունը շարունակում է լինել ժողովրդական, թեև արդեն ունի տարբեր տարբերակներ։',
          },
          {
            es: 'Importante: Las narraciones populares no siempre contienen magia y no todas transmiten una moraleja.',
            hy: 'Կարևոր է՝ Ժողովրդական պատումները միշտ չէ, որ պարունակում են կախարդանք, և դրանցից ոչ բոլորն ունեն բարոյական խրատ։',
          },
        ],
      },
    ],
  },
  {
    id: 'tipos-narraciones',
    number: 2,
    titleEs: '2. Tipos de narraciones populares',
    titleHy: '2. Ժողովրդական պատումների տեսակները',
    summaryEs: 'Las cinco categorías fundamentales estudiadas en 1.º ESO: Fábula, Cuento, Romance, Mito y Leyenda.',
    summaryHy: '1.º ESO մակարդակում ուսումնասիրվող հինգ հիմնական տեսակները՝ Առակ, Հեքիաթ/Պատմվածք, Ռոմանս, Առասպել և Ավանդազրույց։',
    content: [
      {
        type: 'paragraph',
        items: [
          {
            es: '1. Fábula: Narración breve con una enseñanza moral, frecuentemente protagonizada por animales.',
            hy: '1. Առակ (Fábula)՝ Կարճ պատմություն՝ բարոյական խրատով, հաճախ կենդանիների մասնակցությամբ։',
          },
          {
            es: '2. Cuento: Narración de acontecimientos reales, imaginarios o fantásticos.',
            hy: '2. Հեքիաթ կամ պատմվածք (Cuento)՝ Իրական, երևակայական կամ հրաշապատում իրադարձությունների մասին պատմություն։',
          },
          {
            es: '3. Romance: Composición poética que cuenta una historia mediante versos.',
            hy: '3. Ռոմանս (Romance)՝ Չափածո ստեղծագործություն, որը պատմում է որևէ իրադարձություն։',
          },
          {
            es: '4. Mito: Relato tradicional relacionado con dioses, héroes y el origen de las cosas.',
            hy: '4. Առասպել (Mito)՝ Ավանդական պատմություն՝ աստվածների, հերոսների և երևույթների ծագման մասին։',
          },
          {
            es: '5. Leyenda: Narración tradicional que combina elementos históricos o reales con elementos fantásticos.',
            hy: '5. Ավանդազրույց (Leyenda)՝ Ավանդական պատմություն, որը համադրում է իրական կամ պատմական և երևակայական տարրեր։',
          },
        ],
      },
    ],
  },
  {
    id: 'la-fabula',
    number: 3,
    titleEs: '3. LA FÁBULA — ԱՌԱԿ',
    titleHy: '3. Առակը և նրա առանձնահատկությունները',
    summaryEs: 'Narración didáctica con animales personificados y moraleja final.',
    summaryHy: 'Ուսուցողական կարճ ստեղծագործություն մարդկային հատկություններով կենդանիներով և բարոյական խրատով։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Teoría en español / Տեսություն հայերեն',
        items: [
          {
            es: 'La fábula es una narración breve que tiene una intención didáctica, es decir, pretende enseñar algo.',
            hy: 'Առակը կարճ պատմողական ստեղծագործություն է, որն ունի ուսուցողական նպատակ։',
          },
          {
            es: 'En muchas fábulas, los protagonistas son animales que hablan, piensan y actúan como seres humanos.',
            hy: 'Շատ առակներում գլխավոր հերոսները կենդանիներ են, որոնք խոսում, մտածում և գործում են մարդկանց նման։',
          },
          {
            es: 'Los animales pueden representar cualidades y defectos humanos, como la inteligencia, la vanidad, la pereza, la generosidad o la ambición.',
            hy: 'Կենդանիները կարող են ներկայացնել մարդկային դրական և բացասական հատկանիշներ՝ խելք, սնապարծություն, ծուլություն, առատաձեռնություն կամ ագահություն։',
          },
          {
            es: 'La enseñanza de la fábula se llama moraleja.',
            hy: 'Առակի ուսուցողական միտքը կոչվում է moraleja — բարոյական խրատ։',
          },
          {
            es: 'La moraleja puede aparecer al final de la historia o deducirse de lo que sucede.',
            hy: 'Խրատը կարող է գրված լինել պատմության վերջում կամ հասկացվել իրադարձություններից։',
          },
        ],
      },
      {
        type: 'story',
        titleEs: 'Ejemplo: El perro y su reflejo',
        titleHy: 'Օրինակ՝ Շունն ու իր արտացոլանքը',
        storyParagraphs: [
          {
            es: 'Había una vez un perro que encontró un gran trozo de carne.',
            hy: 'Մի ժամանակ մի շուն մի մեծ կտոր միս գտավ։',
          },
          {
            es: 'Muy contento, decidió llevarlo a su casa para comérselo tranquilamente.',
            hy: 'Շատ ուրախանալով՝ նա որոշեց այն տանել տուն, որպեսզի հանգիստ ուտի։',
          },
          {
            es: 'Mientras caminaba, llegó a un pequeño puente que cruzaba un río.',
            hy: 'Քայլելիս հասավ մի փոքրիկ կամրջի, որն անցնում էր գետի վրայով։',
          },
          {
            es: 'Cuando miró hacia el agua, vio su propio reflejo, pero pensó que era otro perro que también llevaba un trozo de carne.',
            hy: 'Երբ նայեց ջրին, տեսավ իր սեփական արտացոլանքը, բայց մտածեց, թե դա մեկ այլ շուն է, որը նույնպես մսի կտոր ունի։',
          },
          {
            es: '—¡Ese perro tiene un trozo de carne más grande que el mío! —pensó.',
            hy: '— Այդ շան մսի կտորն ավելի մեծ է, քան իմը, — մտածեց նա։',
          },
          {
            es: 'Como era muy codicioso, decidió quitarle la carne al otro perro.',
            hy: 'Քանի որ շատ ագահ էր, որոշեց մյուս շնից խլել միսը։',
          },
          {
            es: 'Abrió la boca para ladrar y, en ese momento, su propio trozo de carne cayó al río.',
            hy: 'Նա բացեց բերանը՝ հաչելու համար, և հենց այդ պահին իր մսի կտորն ընկավ գետը։',
          },
          {
            es: 'El agua se llevó la carne y el perro se quedó sin nada.',
            hy: 'Ջուրը քշեց միսը, և շունը մնաց առանց ոչնչի։',
          },
          {
            es: 'Entonces comprendió que, por querer conseguir más de lo que tenía, había perdido lo que ya poseía.',
            hy: 'Այդ ժամանակ նա հասկացավ, որ ավելի շատ ունենալու ցանկության պատճառով կորցրել էր այն, ինչ արդեն ուներ։',
          },
        ],
        moralEs: 'La codicia puede hacernos perder lo que ya tenemos. Debemos valorar lo que poseemos y no dejarnos llevar por el deseo de tener siempre más.',
        moralHy: 'Ագահությունը կարող է ստիպել մեզ կորցնել այն, ինչ արդեն ունենք։ Պետք է գնահատել ունեցածը և չտրվել անընդհատ ավելին ունենալու ցանկությանը։',
      },
      {
        type: 'table',
        titleEs: 'Características de la fábula / Առակի առանձնահատկությունները',
        titleHy: '',
        tableHeaders: [
          { es: 'Español', hy: 'Իսպաներեն' },
          { es: 'Հայերեն', hy: 'Հայերեն' },
        ],
        tableRows: [
          { col1Es: 'Narración breve', col1Hy: '', col2Es: 'Կարճ պատմություն', col2Hy: '' },
          { col1Es: 'Intención didáctica', col1Hy: '', col2Es: 'Ուսուցողական նպատակ', col2Hy: '' },
          { col1Es: 'Animales personificados', col1Hy: '', col2Es: 'Մարդկային հատկություններով կենդանիներ', col2Hy: '' },
          { col1Es: 'Moraleja', col1Hy: '', col2Es: 'Բարոյական խրատ', col2Hy: '' },
          { col1Es: 'Defectos y virtudes humanos', col1Hy: '', col2Es: 'Մարդկային թերություններ և առաքինություններ', col2Hy: '' },
        ],
      },
      {
        type: 'table',
        titleEs: 'Análisis de la fábula / Առակի վերլուծություն',
        titleHy: '',
        tableHeaders: [
          { es: 'Elemento / Տարր', hy: 'Տարր' },
          { es: 'Respuesta / Պատասխան', hy: 'Պատասխան' },
        ],
        tableRows: [
          { col1Es: 'Título — Վերնագիր', col1Hy: '', col2Es: 'El perro y su reflejo', col2Hy: 'Շունն ու իր արտացոլանքը' },
          { col1Es: 'Tipo de texto — Տեսակ', col1Hy: '', col2Es: 'Fábula — Առակ', col2Hy: '' },
          { col1Es: 'Protagonista — Գլխավոր հերոս', col1Hy: '', col2Es: 'El perro — Շունը', col2Hy: '' },
          { col1Es: 'Lugar — Վայր', col1Hy: '', col2Es: 'Un puente sobre un río — Կամուրջ գետի վրա', col2Hy: '' },
          { col1Es: 'Defecto del protagonista — Հերոսի թերություն', col1Hy: '', col2Es: 'La codicia — Ագահություն', col2Hy: '' },
          { col1Es: 'Problema — Խնդիր', col1Hy: '', col2Es: 'Quiere conseguir la carne del supuesto otro perro', col2Hy: 'Ցանկանում է խլել կարծեցյալ մյուս շան միսը' },
          { col1Es: 'Desenlace — Հանգուցալուծում', col1Hy: '', col2Es: 'Pierde su propia carne en el río', col2Hy: 'Իր միսը կորցնում է գետում' },
          { col1Es: 'Moraleja — Խրատ', col1Hy: '', col2Es: 'Debemos valorar lo que tenemos', col2Hy: 'Պետք է գնահատել ունեցածը' },
        ],
      },
      {
        type: 'qa',
        titleEs: 'Pregunta de examen y Preguntas de comprensión',
        titleHy: 'Քննության հարց և տեքստի ընկալման հարցեր',
        qaList: [
          {
            qEs: '¿Por qué «El perro y su reflejo» es una fábula? / Ինչո՞ւ է «Շունն ու իր արտացոլանքը» պատմությունը առակ։',
            qHy: '',
            aEs: 'Es una fábula porque el protagonista es un animal al que se atribuyen pensamientos y comportamientos humanos. Además, la historia transmite una enseñanza moral sobre la codicia y la importancia de valorar lo que tenemos.',
            aHy: 'Սա առակ է, որովհետև գլխավոր հերոսը կենդանի է, որին վերագրվում են մարդկային մտածողություն և վարքագիծ։ Բացի այդ, պատմությունը փոխանցում է բարոյական խրատ՝ ագահության և մեր ունեցածը գնահատելու կարևորության մասին։',
          },
          {
            qEs: '1. ¿Qué encontró el perro? / Ի՞նչ գտավ շունը։',
            qHy: '',
            aEs: 'Encontró un gran trozo de carne.',
            aHy: 'Նա գտավ մի մեծ կտոր միս։',
          },
          {
            qEs: '2. ¿Adónde quería llevar la carne? / Որտե՞ղ էր ուզում տանել միսը։',
            qHy: '',
            aEs: 'Quería llevarla a su casa.',
            aHy: 'Ուզում էր տանել տուն։',
          },
          {
            qEs: '3. ¿Qué vio cuando miró hacia el agua? / Ի՞նչ տեսավ, երբ նայեց ջրին։',
            qHy: '',
            aEs: 'Vio su propio reflejo.',
            aHy: 'Տեսավ իր սեփական արտացոլանքը։',
          },
          {
            qEs: '4. ¿Qué pensó al ver el reflejo? / Ի՞նչ մտածեց, երբ տեսավ արտացոլանքը։',
            qHy: '',
            aEs: 'Pensó que era otro perro con un trozo de carne más grande.',
            aHy: 'Մտածեց, թե դա մեկ այլ շուն է՝ ավելի մեծ մսի կտորով։',
          },
          {
            qEs: '5. ¿Por qué abrió la boca? / Ինչո՞ւ բացեց բերանը։',
            qHy: '',
            aEs: 'Porque quería ladrar al supuesto otro perro y quitarle la carne.',
            aHy: 'Որովհետև ցանկանում էր հաչել կարծեցյալ մյուս շան վրա և խլել նրա միսը։',
          },
          {
            qEs: '6. ¿Qué ocurrió cuando abrió la boca? / Ի՞նչ պատահեց, երբ բացեց բերանը։',
            qHy: '',
            aEs: 'Su carne cayó al río.',
            aHy: 'Նրա միսն ընկավ գետը։',
          },
          {
            qEs: '7. ¿Qué defecto representa el perro? / Մարդկային ի՞նչ թերություն է ներկայացնում շունը։',
            qHy: '',
            aEs: 'Representa la codicia.',
            aHy: 'Ներկայացնում է ագահությունը։',
          },
          {
            qEs: '8. ¿Qué aprendió el perro al final? / Ի՞նչ սովորեց շունը վերջում։',
            qHy: '',
            aEs: 'Aprendió que querer tener siempre más puede hacernos perder lo que ya tenemos.',
            aHy: 'Սովորեց, որ անընդհատ ավելին ունենալու ցանկությունը կարող է ստիպել կորցնել այն, ինչ արդեն ունենք։',
          },
        ],
      },
    ],
  },
  {
    id: 'el-cuento',
    number: 4,
    titleEs: '4. EL CUENTO — ՀԵՔԻԱԹ / ՊԱՏՄՎԱԾՔ',
    titleHy: '4. Պատմվածքի կառուցվածքը և չորս տեսակները',
    summaryEs: 'Estructura (Introducción, Nudo, Desenlace) y 4 clases: Cuentos maravillosos, realistas, apólogos y fábulas.',
    summaryHy: 'Կառուցվածքը (սկիզբ, հանգույց, հանգուցալուծում) և 4 տեսակները՝ հրաշապատում, իրապատում, ապոլոգ և առակ։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Teoría en español / Տեսություն հայերեն',
        items: [
          {
            es: 'El cuento es una narración generalmente breve que presenta una serie de acontecimientos protagonizados por uno o varios personajes.',
            hy: 'Հեքիաթը կամ պատմվածքը սովորաբար կարճ պատմողական ստեղծագործություն է, որը ներկայացնում է մեկ կամ մի քանի հերոսների հետ կատարվող իրադարձություններ։',
          },
          {
            es: 'Los acontecimientos pueden ser realistas, imaginarios o fantásticos.',
            hy: 'Իրադարձությունները կարող են լինել իրականությանը մոտ, երևակայական կամ կախարդական։',
          },
          {
            es: 'El cuento suele tener pocos personajes, una acción principal y un desarrollo relativamente sencillo.',
            hy: 'Պատմվածքը սովորաբար ունի քիչ հերոսներ, մեկ հիմնական գործողություն և համեմատաբար պարզ զարգացում։',
          },
          {
            es: 'Generalmente se organiza en tres partes: introducción, nudo y desenlace.',
            hy: 'Սովորաբար այն բաժանվում է երեք մասի՝ սկիզբ, հանգույց և հանգուցալուծում։',
          },
        ],
      },
      {
        type: 'paragraph',
        titleEs: 'Estructura del cuento — Պատմվածքի կառուցվածքը',
        items: [
          {
            es: '1. Introducción: Se presentan los personajes, el lugar y la situación inicial. Ejemplo: «Había una vez una niña que vivía cerca de un bosque».',
            hy: '1. Սկիզբ (Introducción)՝ Ներկայացվում են հերոսները, վայրը և սկզբնական իրավիճակը։ Օրինակ՝ «Մի ժամանակ մի աղջիկ էր ապրում անտառի մոտ»։',
          },
          {
            es: '2. Nudo: Aparece un problema o conflicto y se desarrollan los acontecimientos. Ejemplo: «Un día, la niña se perdió y no encontraba el camino».',
            hy: '2. Հանգույց (Nudo)՝ Առաջանում է խնդիր կամ հակամարտություն, և զարգանում են իրադարձությունները։ Օրինակ՝ «Մի օր աղջիկը մոլորվեց և չէր գտնում ճանապարհը»։',
          },
          {
            es: '3. Desenlace: El conflicto se resuelve y la historia termina. Ejemplo: «Finalmente, encontró a un guardabosques que la ayudó a regresar».',
            hy: '3. Հանգուցալուծում (Desenlace)՝ Խնդիրը լուծվում է, և պատմությունն ավարտվում է։ Օրինակ՝ «Վերջում նա հանդիպեց անտառապահի, որը օգնեց նրան վերադառնալ»։',
          },
        ],
      },
      {
        type: 'paragraph',
        titleEs: 'Las cuatro clases de cuentos — Պատմությունների չորս տեսակները',
        items: [
          {
            es: 'A. Cuentos maravillosos: Presentan acontecimientos imposibles en la vida real. Pueden aparecer hadas, brujas, objetos mágicos, gigantes y animales encantados. Ejemplo: «Cenicienta» (transformación de calabaza en carroza).',
            hy: 'A. Հրաշապատում հեքիաթներ՝ Իրական կյանքում անհնար իրադարձություններ։ Փերիներ, կախարդներ, հրաշագործ առարկաներ։ Օրինակ՝ «Մոխրոտը» (դդմի վերածվելը կառքի)։',
          },
          {
            es: 'B. Cuentos realistas: Presentan situaciones que podrían suceder en la vida cotidiana con problemas normales. Ejemplo: «El primer día de colegio» (cambiar de colegio y conocer compañeros).',
            hy: 'B. Իրապատում պատմվածքներ՝ Առօրյա կյանքում հնարավոր իրավիճակներ՝ առանց կախարդանքի։ Օրինակ՝ «Դպրոցի առաջին օրը» (նոր դպրոց և նոր ընկերներ)։',
          },
          {
            es: 'C. Apólogos: Narración breve cuyo objetivo principal es transmitir una enseñanza moral o práctica con personajes humanos. Ejemplo: «El alumno impaciente» (aprender requiere paciencia).',
            hy: 'C. Խրատական պատմություններ (Apólogos)՝ Բարոյական կամ գործնական խրատ մարդկային կերպարներով։ Օրինակ՝ «Անհամբեր աշակերտը» (սովորելը պահանջում է համբերություն)։',
          },
          {
            es: 'D. Fábulas: Cuentos didácticos protagonizados habitualmente por animales personificados con moraleja. Ejemplo: «La liebre y la tortuga».',
            hy: 'D. Առակներ (Fábulas)՝ Ուսուցողական պատմություններ մարդկային հատկություններով կենդանիներով և խրատով։ Օրինակ՝ «Նապաստակն ու կրիան»։',
          },
        ],
      },
      {
        type: 'table',
        titleEs: 'Diferencia entre cuento, apólogo y fábula',
        titleHy: 'Հեքիաթի, ապոլոգի և առակի տարբերությունը',
        tableHeaders: [
          { es: 'Tipo / Տեսակ', hy: 'Տեսակ' },
          { es: 'Característica principal / Հիմնական առանձնահատկություն', hy: 'Բնութագիր' },
        ],
        tableRows: [
          { col1Es: 'Cuento', col1Hy: 'Հեքիաթ / Պատմվածք', col2Es: 'Cuenta una historia', col2Hy: 'Պատմում է որևէ պատմություն' },
          { col1Es: 'Apólogo', col1Hy: 'Խրատական պատմություն', col2Es: 'Enseña mediante un relato', col2Hy: 'Սովորեցնում է պատմության միջոցով' },
          { col1Es: 'Fábula', col1Hy: 'Առակ', col2Es: 'Enseña, a menudo mediante animales personificados', col2Hy: 'Հաճախ սովորեցնում է մարդկային հատկություններով կենդանիների միջոցով' },
        ],
      },
    ],
  },
  {
    id: 'el-romance',
    number: 5,
    titleEs: '5. EL ROMANCE — ՌՈՄԱՆՍ',
    titleHy: '5. Ռոմանսը իսպանական գրականության մեջ',
    summaryEs: 'Composición poética narrativa con versos octosílabos y rima asonante en los pares.',
    summaryHy: 'Պատմողական չափածո ստեղծագործություն ութվանկանի տողերով և զույգ տողերի ձայնավորային հանգավորմամբ։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Teoría en español / Տեսություն հայերեն',
        items: [
          {
            es: 'El romance es una composición poética de carácter narrativo muy importante en la literatura española.',
            hy: 'Ռոմանսը իսպանական գրականության մեջ կարևոր տեղ զբաղեցնող պատմողական բանաստեղծական ստեղծագործություն է։',
          },
          {
            es: 'Los romances tradicionales suelen contar acontecimientos históricos, batallas, aventuras, amores o situaciones dramáticas.',
            hy: 'Ավանդական ռոմանսները հաճախ պատմում են պատմական իրադարձությունների, պատերազմների, արկածների, սիրո կամ դրամատիկ դեպքերի մասին։',
          },
          {
            es: 'Normalmente tienen un número indefinido de versos octosílabos. Los versos pares presentan rima asonante y los impares quedan sueltos.',
            hy: 'Դրանք սովորաբար ունեն անորոշ թվով ութվանկանի տողեր։ Զույգ տողերում առկա է ձայնավորային հանգավորում, իսկ կենտ տողերը չեն հանգավորվում։',
          },
          {
            es: 'Muchos romances antiguos se transmitían oralmente y podían cantarse o recitarse.',
            hy: 'Շատ հին ռոմանսներ փոխանցվել են բանավոր ձևով և կարող էին երգվել կամ արտասանվել։',
          },
        ],
      },
      {
        type: 'paragraph',
        titleEs: 'Conceptos importantes — Կարևոր հասկացություններ',
        items: [
          {
            es: 'Verso: Cada una de las líneas de un poema.',
            hy: 'Verso (Բանաստեղծական տող)՝ Բանաստեղծության յուրաքանչյուր տողը։',
          },
          {
            es: 'Sílaba: Unidad de sonido que se pronuncia en un solo golpe de voz.',
            hy: 'Sílaba (Վանկ)՝ Ձայնային միավոր, որն արտասանվում է մեկ արտաբերությամբ։',
          },
          {
            es: 'Rima asonante: Coincidencia de las vocales a partir de la última vocal acentuada.',
            hy: 'Rima asonante (Ձայնավորային հանգավորում)՝ Վերջին շեշտված ձայնավորից սկսած ձայնավոր հնչյունների համընկնումը։',
          },
          {
            es: 'Verso octosílabo: Un verso que tiene ocho sílabas métricas.',
            hy: 'Verso octosílabo (Ութվանկանի տող)՝ Բանաստեղծական տող, որն ունի ութ չափական վանկ։',
          },
        ],
      },
      {
        type: 'qa',
        titleEs: 'Ejemplo y Pregunta de examen',
        titleHy: 'Օրինակ և քննության հարց',
        qaList: [
          {
            qEs: 'Ejemplo: Romance del prisionero / Օրինակ՝ Բանտարկյալի ռոմանսը',
            qHy: '',
            aEs: 'Es un romance tradicional en el que un prisionero expresa su tristeza por estar encerrado mientras llega la primavera.',
            aHy: 'Ավանդական ստեղծագործություն է, որտեղ բանտարկյալը արտահայտում է իր տխրությունը, քանի որ փակված է, մինչդեռ դրսում գալիս է գարունը։',
          },
          {
            qEs: '¿En qué se diferencia un romance de un cuento? / Ինչո՞վ է ռոմանսը տարբերվում պատմվածքից։',
            qHy: '',
            aEs: 'El romance está escrito en verso, mientras que el cuento normalmente está escrito en prosa.',
            aHy: 'Ռոմանսը գրված է չափածո, իսկ հեքիաթը կամ պատմվածքը սովորաբար գրված է արձակ։',
          },
        ],
      },
    ],
  },
  {
    id: 'el-mito',
    number: 6,
    titleEs: '6. EL MITO — ԱՌԱՍՊԵԼ',
    titleHy: '6. Առասպելը և աշխարհի ծագման բացատրությունը',
    summaryEs: 'Relato sagrado sobre dioses y héroes que explica el origen del mundo o fenómenos naturales.',
    summaryHy: 'Ավանդական պատմություն աստվածների մասին, որը բացատրում է աշխարհի կամ բնական երևույթների ծագումը։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Teoría en español / Տեսություն հայերեն',
        items: [
          {
            es: 'El mito es una narración tradicional que intenta explicar el origen del mundo, los fenómenos naturales, los seres humanos o aspectos fundamentales de la existencia.',
            hy: 'Առասպելը ավանդական պատմություն է, որը փորձում է բացատրել աշխարհի, բնության երևույթների, մարդկանց կամ կյանքի կարևոր կողմերի ծագումը։',
          },
          {
            es: 'Los mitos suelen estar relacionados con las creencias religiosas y culturales de los pueblos antiguos.',
            hy: 'Առասպելները հաճախ կապված են հին ժողովուրդների կրոնական և մշակութային հավատալիքների հետ։',
          },
          {
            es: 'Sus protagonistas pueden ser dioses, diosas, héroes y seres sobrenaturales en un tiempo remoto o sagrado.',
            hy: 'Գլխավոր հերոսները կարող են լինել աստվածներ, աստվածուհիներ, հերոսներ և գերբնական էակներ շատ հին կամ սրբազան ժամանակաշրջանում։',
          },
        ],
      },
      {
        type: 'qa',
        titleEs: 'Ejemplo: Deméter y Perséfone',
        titleHy: 'Օրինակ՝ Դեմետրա և Պերսեփոնե',
        qaList: [
          {
            qEs: 'Mito de Deméter y Perséfone / Դեմետրայի և Պերսեփոնեի առասպելը',
            qHy: '',
            aEs: 'Según la mitología griega, Perséfone, hija de Deméter, tenía que pasar una parte del año en el mundo de los muertos. Durante su ausencia, Deméter, diosa de la agricultura, estaba triste y la tierra dejaba de producir. Cuando Perséfone regresaba, la naturaleza volvía a florecer. Este mito ayudaba a explicar el ciclo de las estaciones.',
            aHy: 'Հունական դիցաբանության համաձայն՝ Դեմետրայի դուստրը՝ Պերսեփոնեն, տարվա մի մասը պետք է անցկացներ մեռյալների աշխարհում։ Նրա բացակայության ժամանակ երկրագործության աստվածուհի Դեմետրան տխրում էր, և երկիրը դադարում էր բերք տալ։ Երբ Պերսեփոնեն վերադառնում էր, բնությունը նորից ծաղկում էր։ Այս առասպելը օգնում էր բացատրել տարվա եղանակների հերթափոխը։',
          },
          {
            qEs: '¿Por qué es un mito? / Ինչո՞ւ է սա առասպել։',
            qHy: '',
            aEs: 'Porque aparecen dioses y se explica un fenómeno de la naturaleza.',
            aHy: 'Որովհետև պատմության մեջ կան աստվածներ, և բացատրվում է բնության երևույթ։',
          },
        ],
      },
    ],
  },
  {
    id: 'la-leyenda',
    number: 7,
    titleEs: '7. LA LEYENDA — ԱՎԱՆԴԱԶՐՈՒՅՑ',
    titleHy: '7. Ավանդազրույցը՝ իրականության և երևակայության համադրում',
    summaryEs: 'Relato vinculado a un lugar o personaje histórico mezclado con elementos fantásticos.',
    summaryHy: 'Պատմություն՝ կապված կոնկրետ վայրի կամ անձի հետ, որտեղ միավորված են իրական և գերբնական տարրեր։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Teoría en español / Տեսություն հայերեն',
        items: [
          {
            es: 'La leyenda es una narración tradicional que combina elementos reales, históricos o geográficos con acontecimientos imaginarios o sobrenaturales.',
            hy: 'Ավանդազրույցը ավանդական պատմություն է, որը միավորում է իրական, պատմական կամ աշխարհագրական տարրերը երևակայական կամ գերբնական իրադարձությունների հետ։',
          },
          {
            es: 'Normalmente se relaciona con un lugar concreto, un personaje conocido o un acontecimiento del pasado.',
            hy: 'Այն հաճախ կապված է որոշակի վայրի, հայտնի անձի կամ անցյալում տեղի ունեցած դեպքի հետ։',
          },
          {
            es: 'Las leyendas pueden cambiar con el paso del tiempo porque las personas las cuentan de diferentes maneras.',
            hy: 'Ժամանակի ընթացքում ավանդազրույցները կարող են փոփոխվել, քանի որ մարդիկ դրանք պատմում են տարբեր ձևերով։',
          },
        ],
      },
      {
        type: 'qa',
        titleEs: 'Ejemplo: La leyenda de San Jorge y el dragón',
        titleHy: 'Օրինակ՝ Սուրբ Գևորգի և վիշապի ավանդազրույցը',
        qaList: [
          {
            qEs: 'Leyenda de San Jorge y el dragón / Սուրբ Գևորգի և վիշապի ավանդազրույցը',
            qHy: '',
            aEs: 'Según una conocida leyenda, un dragón aterrorizaba a los habitantes de una ciudad. Los habitantes tenían mucho miedo porque el dragón era muy peligroso. Un día, una princesa estuvo a punto de convertirse en su víctima. San Jorge apareció y luchó contra el dragón hasta vencerlo.',
            aHy: 'Հայտնի ավանդազրույցի համաձայն՝ մի վիշապ սարսափի մեջ էր պահում քաղաքի բնակիչներին։ Բնակիչները շատ էին վախենում, որովհետև վիշապը չափազանց վտանգավոր էր։ Մի օր արքայադուստրը նույնպես հայտնվեց վտանգի մեջ։ Սուրբ Գևորգը հայտնվեց և կռվեց վիշապի դեմ՝ հաղթելով նրան։',
          },
          {
            qEs: '¿Por qué es una leyenda? / Ինչո՞ւ է սա ավանդազրույց։',
            qHy: '',
            aEs: 'Porque es una historia tradicional relacionada con un personaje conocido y contiene elementos fantásticos, como el dragón.',
            aHy: 'Որովհետև սա հայտնի կերպարի հետ կապված ավանդական պատմություն է, որը պարունակում է երևակայական տարրեր, օրինակ՝ վիշապը։',
          },
        ],
      },
    ],
  },
  {
    id: 'diferencias-mito-leyenda',
    number: 8,
    titleEs: '8. DIFERENCIAS ENTRE MITO Y LEYENDA',
    titleHy: '8. Առասպելի և ավանդազրույցի տարբերությունը',
    summaryEs: 'Comparación clave para exámenes: orígenes sagrados (mitos) vs lugares o personajes tradicionales (leyendas).',
    summaryHy: 'Հիմնական տարբերությունները՝ սրբազան ծագումներ և աստվածներ (առասպել) ընդդեմ կոնկրետ վայրերի և անձանց (ավանդազրույց)։',
    content: [
      {
        type: 'table',
        titleEs: 'Mito — Առասպել vs Leyenda — Ավանդազրույց',
        titleHy: '',
        tableHeaders: [
          { es: 'Mito — Առասպել', hy: 'Առասպել' },
          { es: 'Leyenda — Ավանդազրույց', hy: 'Ավանդազրույց' },
        ],
        tableRows: [
          {
            col1Es: 'Explica orígenes o fenómenos',
            col1Hy: 'Բացատրում է ծագումը կամ երևույթը',
            col2Es: 'Relata hechos tradicionales relacionados con lugares o personajes',
            col2Hy: 'Պատմում է վայրերի կամ անձանց հետ կապված ավանդական դեպքեր',
          },
          {
            col1Es: 'Pueden aparecer dioses',
            col1Hy: 'Կարող են հանդիպել աստվածներ',
            col2Es: 'Pueden aparecer personajes históricos',
            col2Hy: 'Կարող են հանդիպել պատմական անձինք',
          },
          {
            col1Es: 'Se relaciona con creencias religiosas y culturales',
            col1Hy: 'Կապված է հավատալիքների հետ',
            col2Es: 'Mezcla tradición, historia y fantasía',
            col2Hy: 'Միավորում է ավանդույթը, պատմությունն ու երևակայությունը',
          },
        ],
      },
      {
        type: 'paragraph',
        titleEs: 'Comparación con ejemplos / Համեմատություն օրինակներով',
        items: [
          {
            es: 'Mito: Un dios provoca una tormenta porque está enfadado.',
            hy: 'Առասպել՝ Աստվածը փոթորիկ է առաջացնում, որովհետև զայրացած է։',
          },
          {
            es: 'Leyenda: En un castillo antiguo aparece cada noche el fantasma de un caballero.',
            hy: 'Ավանդազրույց՝ Հին ամրոցում ամեն գիշեր հայտնվում է մի ասպետի ուրվականը։',
          },
        ],
      },
    ],
  },
  {
    id: 'la-moraleja',
    number: 9,
    titleEs: '9. LA MORALEJA — ԲԱՐՈՅԱԿԱՆ ԽՐԱՏ',
    titleHy: '9. Բարոյական խրատը և դրա տեսակները',
    summaryEs: 'Enseñanza explícita o implícita de una historia moral o didáctica.',
    summaryHy: 'Բացահայտ կամ թաքնված ուսուցողական միտք, որը ստացվում է պատմությունից։',
    content: [
      {
        type: 'paragraph',
        titleEs: 'Teoría / Տեսություն',
        items: [
          {
            es: 'La moraleja es una enseñanza que podemos obtener de una historia.',
            hy: 'Բարոյական խրատը այն ուսուցողական միտքն է, որը կարելի է ստանալ պատմությունից։',
          },
          {
            es: 'Puede ser explícita, cuando aparece escrita directamente, o implícita, cuando el lector tiene que deducirla.',
            hy: 'Այն կարող է լինել բացահայտ, երբ անմիջապես գրված է տեքստում, կամ թաքնված, երբ ընթերցողը պետք է ինքը հասկանա։',
          },
          {
            es: 'No todas las narraciones populares tienen moraleja.',
            hy: 'Ոչ բոլոր ժողովրդական պատումներն ունեն բարոյական խրատ։',
          },
        ],
      },
      {
        type: 'table',
        titleEs: 'Ejemplos de moralejas / Բարոյական խրատների օրինակներ',
        titleHy: '',
        tableHeaders: [
          { es: 'Español', hy: 'Իսպաներեն' },
          { es: 'Հայերեն', hy: 'Հայերեն' },
        ],
        tableRows: [
          { col1Es: 'No debemos mentir.', col1Hy: '', col2Es: 'Չպետք է ստել։', col2Hy: '' },
          { col1Es: 'La paciencia es importante.', col1Hy: '', col2Es: 'Համբերությունը կարևոր է։', col2Hy: '' },
          { col1Es: 'No debemos confiar en las apariencias.', col1Hy: '', col2Es: 'Չպետք է վստահել միայն արտաքին տեսքին։', col2Hy: '' },
          { col1Es: 'El esfuerzo ayuda a conseguir objetivos.', col1Hy: '', col2Es: 'Ջանքերը օգնում են հասնել նպատակներին։', col2Hy: '' },
          { col1Es: 'La amistad es más importante que el dinero.', col1Hy: '', col2Es: 'Ընկերությունն ավելի կարևոր է, քան փողը։', col2Hy: '' },
          { col1Es: 'No debemos burlarnos de los demás.', col1Hy: '', col2Es: 'Չպետք է ծաղրել ուրիշներին։', col2Hy: '' },
        ],
      },
    ],
  },
  {
    id: 'como-analizar',
    number: 10,
    titleEs: '10. CÓMO ANALIZAR UNA NARRACIÓN',
    titleHy: '10. Ինչպես վերլուծել պատմությունը և հիմնավորել պատասխանը',
    summaryEs: 'Guía práctica para exámenes de 1.º ESO: elementos de análisis, respuestas justificadas y conectores útiles.',
    summaryHy: 'Գործնական ուղեցույց քննությունների համար՝ վերլուծության 10 տարրեր, լիարժեք հիմնավորում և կապակցող բառեր։',
    content: [
      {
        type: 'table',
        titleEs: '10 Elementos para analizar / Վերլուծության 10 տարրերը',
        titleHy: '',
        tableHeaders: [
          { es: 'Elemento', hy: 'Տարր' },
          { es: 'Pregunta en español', hy: 'Հարց իսպաներեն' },
        ],
        tableRows: [
          { col1Es: 'Tipo de texto', col1Hy: 'Տեքստի տեսակ', col2Es: '¿Qué tipo de narración es?', col2Hy: 'Պատմության ի՞նչ տեսակ է։' },
          { col1Es: 'Personajes', col1Hy: 'Հերոսներ', col2Es: '¿Quiénes participan?', col2Hy: 'Ովքե՞ր են հերոսները։' },
          { col1Es: 'Protagonista', col1Hy: 'Գլխավոր հերոս', col2Es: '¿Quién es el personaje principal?', col2Hy: 'Ո՞վ է գլխավոր հերոսը։' },
          { col1Es: 'Narrador', col1Hy: 'Պատմող', col2Es: '¿Quién cuenta la historia?', col2Hy: 'Ո՞վ է պատմում։' },
          { col1Es: 'Lugar', col1Hy: 'Վայր', col2Es: '¿Dónde sucede?', col2Hy: 'Որտե՞ղ է տեղի ունենում։' },
          { col1Es: 'Tiempo', col1Hy: 'Ժամանակ', col2Es: '¿Cuándo sucede?', col2Hy: 'Ե՞րբ է տեղի ունենում։' },
          { col1Es: 'Introducción', col1Hy: 'Սկիզբ', col2Es: '¿Cómo empieza?', col2Hy: 'Ինչպե՞ս է սկսվում։' },
          { col1Es: 'Nudo', col1Hy: 'Հանգույց', col2Es: '¿Qué problema aparece?', col2Hy: 'Ի՞նչ խնդիր է առաջանում։' },
          { col1Es: 'Desenlace', col1Hy: 'Հանգուցալուծում', col2Es: '¿Cómo termina?', col2Hy: 'Ինչպե՞ս է ավարտվում։' },
          { col1Es: 'Moraleja', col1Hy: 'Բարոյական խրատ', col2Es: '¿Qué enseñanza transmite?', col2Hy: 'Ի՞նչ խրատ է փոխանցում։' },
        ],
      },
      {
        type: 'paragraph',
        titleEs: 'Cómo justificar una respuesta — Ինչպես հիմնավորել պատասխանը',
        items: [
          {
            es: '❌ Respuesta insuficiente: «Es una fábula».',
            hy: '❌ Թերի պատասխան՝ «Սա առակ է»։',
          },
          {
            es: '✅ Respuesta completa: «Es una fábula porque los protagonistas son animales que hablan y se comportan como personas. Además, la historia transmite una enseñanza moral».',
            hy: '✅ Լիարժեք պատասխան՝ «Սա առակ է, որովհետև գլխավոր հերոսները կենդանիներ են, որոնք խոսում և վարվում են մարդկանց նման։ Բացի այդ, պատմությունը փոխանցում է բարոյական խրատ»։',
          },
        ],
      },
      {
        type: 'table',
        titleEs: 'Palabras útiles para el examen / Քննության համար օգտակար բառեր',
        titleHy: '',
        tableHeaders: [
          { es: 'Español', hy: 'Իսպաներեն' },
          { es: 'Հայերեն', hy: 'Հայերեն' },
        ],
        tableRows: [
          { col1Es: 'Porque', col1Hy: '', col2Es: 'Որովհետև', col2Hy: '' },
          { col1Es: 'Ya que', col1Hy: '', col2Es: 'Քանի որ', col2Hy: '' },
          { col1Es: 'Debido a que', col1Hy: '', col2Es: 'Այն պատճառով, որ', col2Hy: '' },
          { col1Es: 'Por ejemplo', col1Hy: '', col2Es: 'Օրինակ', col2Hy: '' },
          { col1Es: 'Además', col1Hy: '', col2Es: 'Բացի այդ', col2Hy: '' },
          { col1Es: 'Por lo tanto', col1Hy: '', col2Es: 'Հետևաբար', col2Hy: '' },
          { col1Es: 'Finalmente', col1Hy: '', col2Es: 'Վերջապես', col2Hy: '' },
          { col1Es: 'La historia trata de…', col1Hy: '', col2Es: 'Պատմությունը ... մասին է', col2Hy: '' },
          { col1Es: 'El texto pertenece a…', col1Hy: '', col2Es: 'Տեքստը պատկանում է ... տեսակին', col2Hy: '' },
          { col1Es: 'La enseñanza consiste en…', col1Hy: '', col2Es: 'Խրատը կայանում է նրանում, որ ...', col2Hy: '' },
        ],
      },
    ],
  },
];
