import { VocabularyWord } from './types.ts';

export const allVocabulary: VocabularyWord[] = [
  // Términos Literarios Principales
  { es: 'Narración popular', hy: 'Ժողովրդական պատում', example: 'Relato tradicional de la cultura de un pueblo transmitido oralmente.', category: 'Géneros' },
  { es: 'Fábula', hy: 'Առակ', example: 'Narración breve con moraleja, habitualmente protagonizada por animales.', category: 'Géneros' },
  { es: 'Cuento', hy: 'Հեքիաթ կամ պատմվածք', example: 'Narración breve de acontecimientos reales, imaginarios o fantásticos.', category: 'Géneros' },
  { es: 'Cuento maravilloso', hy: 'Հրաշապատում հեքիաթ', example: 'Cuento con seres mágicos, hadas, brujas y transformaciones sobrenaturales.', category: 'Géneros' },
  { es: 'Cuento realista', hy: 'Իրապատում պատմվածք', example: 'Cuento con situaciones posibles en la vida cotidiana sin magia.', category: 'Géneros' },
  { es: 'Apólogo', hy: 'Խրատական պատմություն (ապոլոգ)', example: 'Relato breve cuyo objetivo es enseñar una conducta moral.', category: 'Géneros' },
  { es: 'Romance', hy: 'Ռոմանս', example: 'Composición poética narrativa en versos octosílabos con rima asonante en los pares.', category: 'Géneros' },
  { es: 'Mito', hy: 'Առասպել', example: 'Relato sagrado sobre dioses y héroes que explica el origen del mundo o fenómenos naturales.', category: 'Géneros' },
  { es: 'Leyenda', hy: 'Ավանդազրույց', example: 'Relato tradicional que combina lugares o personajes históricos con fantasía.', category: 'Géneros' },
  { es: 'Moraleja', hy: 'Բարոյական խրատ', example: 'Enseñanza moral explícita o implícita deducida de la historia.', category: 'Conceptos' },

  // Estructura y Elementos
  { es: 'Introducción', hy: 'Սկիզբ', example: 'Presentación de los personajes, el lugar y la situación inicial.', category: 'Estructura' },
  { es: 'Nudo', hy: 'Հանգույց', example: 'Aparición del conflicto o problema principal.', category: 'Estructura' },
  { es: 'Desenlace', hy: 'Հանգուցալուծում', example: 'Resolución final del conflicto de la historia.', category: 'Estructura' },
  { es: 'Protagonista', hy: 'Գլխավոր հերոս', example: 'Personaje principal alrededor del cual gira la trama.', category: 'Narración' },
  { es: 'Personaje secundario', hy: 'Երկրորդական հերոս', example: 'Personaje que acompaña o ayuda al protagonista.', category: 'Narración' },
  { es: 'Narrador', hy: 'Պատմող', example: 'Voz que cuenta los acontecimientos de la historia.', category: 'Narración' },
  { es: 'Trama', hy: 'Սյուժե', example: 'Conjunto de acontecimientos entrelazados que forman la narración.', category: 'Narración' },
  { es: 'Tradición oral', hy: 'Բանավոր ավանդույթ', example: 'Transmisión de relatos de viva voz de generación en generación.', category: 'Conceptos' },
  { es: 'Autor anónimo', hy: 'Անհայտ հեղինակ', example: 'Obra de la cual no se conoce la identidad del autor original.', category: 'Conceptos' },
  { es: 'Diferentes versiones', hy: 'Տարբեր տարբերակներ', example: 'Variaciones de un mismo relato popular al contarse en distintos lugares.', category: 'Conceptos' },

  // Poesía y Métrica
  { es: 'Verso', hy: 'Բանաստեղծական տող', example: 'Cada una de las líneas que componen un poema.', category: 'Métrica' },
  { es: 'Sílaba métrica', hy: 'Չափական վանկ', example: 'Unidad de sonido que se mide en los versos.', category: 'Métrica' },
  { es: 'Verso octosílabo', hy: 'Ութվանկանի տող', example: 'Verso de arte menor que tiene ocho sílabas métricas.', category: 'Métrica' },
  { es: 'Rima asonante', hy: 'Ձայնավորային հանգավորում', example: 'Coincidencia únicamente de las vocales desde la última vocal acentuada.', category: 'Métrica' },
  { es: 'Verso suelto', hy: 'Անհանգ տող', example: 'Verso que no rima con ningún otro dentro de la estrofa.', category: 'Métrica' },

  // Vocabulario de «El jardinero y la semilla»
  { es: 'Jardinero', hy: 'Այգեպան', example: 'El jardinero anciano cuidaba sus flores con paciencia.', category: 'Cuento' },
  { es: 'Semilla', hy: 'Սերմ', example: 'La pequeña semilla necesitaba tiempo para germinar.', category: 'Cuento' },
  { es: 'Plantar', hy: 'Տնկել', example: 'Mateo plantó la semilla en tierra fértil.', category: 'Cuento' },
  { es: 'Regar', hy: 'Ջրել', example: 'Hay que regar la planta todos los días con moderación.', category: 'Cuento' },
  { es: 'Crecer', hy: 'Աճել', example: 'La flor comenzó a crecer poco a poco.', category: 'Cuento' },
  { es: 'Raíces', hy: 'Արմատներ', example: 'Las raíces absorben los nutrientes de la tierra.', category: 'Cuento' },
  { es: 'Brote', hy: 'Ծիլ', example: 'Un pequeño brote verde asomó entre la tierra.', category: 'Cuento' },
  { es: 'Tierra', hy: 'Հող', example: 'Comprobaba que la tierra estuviera en buen estado.', category: 'Cuento' },
  { es: 'Paciencia', hy: 'Համբերություն', example: 'Las cosas valiosas de la vida requieren paciencia.', category: 'Cuento' },
  { es: 'Impaciente', hy: 'Անհամբեր', example: 'Mateo era impaciente y quería resultados inmediatos.', category: 'Cuento' },
  { es: 'Esfuerzo', hy: 'Ջանք', example: 'El esfuerzo constante da frutos duraderos.', category: 'Cuento' },
  { es: 'Anciano', hy: 'Տարեց մարդ', example: 'El sabio anciano compartió su experiencia.', category: 'Cuento' },
  { es: 'Desenterrar', hy: 'Հանել հողի միջից', example: 'Al desenterrar la semilla dañó sus tiernas raíces.', category: 'Cuento' },
  { es: 'Dañar', hy: 'Վնասել', example: 'La prisa puede dañar lo que apenas está naciendo.', category: 'Cuento' },
  { es: 'Decepcionado', hy: 'Հիասթափված', example: 'Se sentía decepcionado al no ver la flor al día siguiente.', category: 'Cuento' },
  { es: 'Cuidar', hy: 'Խնամել', example: 'Cuidar con esmero lo que uno se propone.', category: 'Cuento' },
  { es: 'Conseguir', hy: 'Հասնել, ձեռք բերել', example: 'Para conseguir tus metas se necesita perseverancia.', category: 'Cuento' },
  { es: 'Quejarse', hy: 'Բողոքել', example: 'En lugar de quejarse, comprendió su equivocación.', category: 'Cuento' },
  { es: 'Comprender el error', hy: 'Հասկանալ սխալը', example: 'Comprender el error es el primer paso para aprender.', category: 'Cuento' },
  { es: 'Sin prisas', hy: 'Առանց շտապելու', example: 'Trabajar con calma y sin prisas.', category: 'Cuento' },

  // Conectores para Justificar en Examen
  { es: 'Porque', hy: 'Որովհետև', example: 'Es una fábula porque los protagonistas son animales.', category: 'Conectores' },
  { es: 'Ya que', hy: 'Քանի որ', example: 'Pertenece al apólogo ya que transmite una lección moral.', category: 'Conectores' },
  { es: 'Debido a que', hy: 'Այն պատճառով, որ', example: 'Es un mito debido a que explica el origen con dioses.', category: 'Conectores' },
  { es: 'Por ejemplo', hy: 'Օրինակ', example: 'Por ejemplo, en Cenicienta aparece un hada mágica.', category: 'Conectores' },
  { es: 'Además', hy: 'Բացի այդ', example: 'Además, la narración tiene una moraleja implícita.', category: 'Conectores' },
  { es: 'Por lo tanto', hy: 'Հետևաբար', example: 'Por lo tanto, la respuesta correcta es la fábula.', category: 'Conectores' },
  { es: 'Finalmente', hy: 'Վերջապես', example: 'Finalmente, en el desenlace se resuelve el problema.', category: 'Conectores' },
  { es: 'La historia trata de…', hy: 'Պատմությունը ... մասին է', example: 'La historia trata de la importancia de la paciencia.', category: 'Conectores' },
  { es: 'El texto pertenece a…', hy: 'Տեքստը պատկանում է ... տեսակին', example: 'El texto pertenece al género del romance poético.', category: 'Conectores' },
  { es: 'La enseñanza consiste en…', hy: 'Խրատը կայանում է նրանում, որ ...', example: 'La enseñanza consiste en valorar lo que ya poseemos.', category: 'Conectores' },
];
