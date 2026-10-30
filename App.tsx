import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Award,
  GraduationCap,
  Volume2,
  Languages,
  Search,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Layers,
  Copy,
  CheckCheck,
  BookMarked,
  FileQuestion,
  ListCheck,
  Check,
  HelpCircle,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

import { TranslationMode } from './types.ts';
import { InteractiveText } from './InteractiveText.tsx';
import { theorySections } from './theoryData.ts';
import {
  actividad1Data,
  actividad2Data,
  actividad3Data,
  actividad4Data,
  actividad5Data,
  actividad6Data,
} from './activitiesData.ts';
import { examQuestions, oralReviewQuestions, summaryTable } from './examData.ts';
import { practicalExercises } from './exercisesData.ts';
import { allVocabulary } from './vocabularyData.ts';

type ActiveTab =
  | 'theory'
  | 'activities'
  | 'exercises'
  | 'exam'
  | 'oral'
  | 'solutions'
  | 'vocabulary';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('theory');
  const [translationMode, setTranslationMode] = useState<TranslationMode>('click');
  const [selectedTheoryId, setSelectedTheoryId] = useState<string>('que-son');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Actividad 1 interactive state
  const [act1Answers, setAct1Answers] = useState<{ [key: number]: string }>({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
  });
  const [act1Checked, setAct1Checked] = useState(false);

  // Exercise 1 (Matching) state
  const [ex1Answers, setEx1Answers] = useState<{ [id: number]: string }>({});
  const [ex1Checked, setEx1Checked] = useState(false);

  // Exercise 2 (Fill definitions) state
  const [ex2Answers, setEx2Answers] = useState<{ [id: number]: string }>({});
  const [ex2Checked, setEx2Checked] = useState(false);

  // Exercise 3 (MCQ) state
  const [ex3Answers, setEx3Answers] = useState<{ [id: number]: number }>({});
  const [ex3Checked, setEx3Checked] = useState(false);

  // Exercise 5 (Mito o leyenda) state
  const [ex5Answers, setEx5Answers] = useState<{ [id: number]: string }>({});
  const [ex5Checked, setEx5Checked] = useState(false);

  // Exercise 6 (4 clases de cuentos) state
  const [ex6Answers, setEx6Answers] = useState<{ [id: number]: string }>({});
  const [ex6Checked, setEx6Checked] = useState(false);

  // Exercise 7 (Verdadero o Falso) state
  const [ex7UserChoices, setEx7UserChoices] = useState<{ [id: number]: boolean }>({});
  const [ex7Checked, setEx7Checked] = useState(false);

  // Exercise 8 (Introducción, nudo o desenlace) state
  const [ex8Answers, setEx8Answers] = useState<{ [id: number]: string }>({});
  const [ex8Checked, setEx8Checked] = useState(false);

  // Exercise 9 (Order story fragments) state
  const [ex9Order, setEx9Order] = useState<string[]>([]);
  const [ex9Checked, setEx9Checked] = useState(false);

  // Exam state
  const [examAnswers, setExamAnswers] = useState<{ [key: number]: number }>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  // Audio helper
  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Filtered vocabulary based on search
  const filteredVocab = useMemo(() => {
    if (!searchQuery.trim()) return allVocabulary;
    const q = searchQuery.toLowerCase();
    return allVocabulary.filter(
      (v) =>
        v.es.toLowerCase().includes(q) ||
        v.hy.toLowerCase().includes(q) ||
        (v.example && v.example.toLowerCase().includes(q)) ||
        (v.category && v.category.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Exam score calculation
  const examScore = useMemo(() => {
    let score = 0;
    examQuestions.forEach((q) => {
      if (examAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [examAnswers]);

  // Actividad 1 check validation
  const act1Validation = useMemo(() => {
    const valid5 = ['fábulas', 'cuentos', 'romances', 'mitos', 'leyendas'];
    const b1Correct = act1Answers[1]?.trim().toLowerCase() === 'tradición cultural';
    
    // For blanks 2 to 6, check if they are in valid5 without duplicates
    const filled2to6 = [2, 3, 4, 5, 6].map((i) => act1Answers[i]?.trim().toLowerCase());
    const validCount = filled2to6.filter((w) => valid5.includes(w)).length;
    const uniqueCount = new Set(filled2to6.filter(Boolean)).size;

    return {
      b1Correct,
      isPart2Valid: validCount === 5 && uniqueCount === 5,
      isFullyCorrect: b1Correct && validCount === 5 && uniqueCount === 5,
    };
  }, [act1Answers]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white text-base">
      {/* Top Banner & Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-3.5 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-rose-600 text-white shadow-xs">
                  1.º ESO · Lengua Castellana y Literatura
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Դաս 7-րդ դասարանի համար · Իսպանիա
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white flex flex-wrap items-center gap-2 mt-1">
                <span>LAS NARRACIONES POPULARES</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                  · ԺՈՂՈՎՐԴԱԿԱՆ ՊԱՏՈՒՄՆԵՐ
                </span>
              </h1>
            </div>

            {/* Translation mode selector */}
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 pl-1.5">
                <Languages className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline">Թարգմանություն:</span>
              </span>
              <button
                type="button"
                onClick={() => setTranslationMode('click')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  translationMode === 'click'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
                title="Haz clic sobre cualquier texto en español para abrir la traducción armenia"
              >
                👆 Սեղմիր (Clic)
              </button>
              <button
                type="button"
                onClick={() => setTranslationMode('always')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  translationMode === 'always'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
                title="Mostrar todas las traducciones simultáneamente"
              >
                👁️ Ցուցադրել
              </button>
              <button
                type="button"
                onClick={() => setTranslationMode('never')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  translationMode === 'never'
                    ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
                title="Ocultar armenio (modo práctica)"
              >
                🇪🇸 Միայն իսպ.
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-100 dark:border-slate-800 text-sm font-semibold">
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'theory'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>1. Teoría (Տեսություն)</span>
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'activities'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileQuestion className="w-4 h-4" />
              <span>2. Actividades del Libro (Վարժություններ 1-6)</span>
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'exercises'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>3. 20 Ejercicios Prácticos (20 Գործնական)</span>
            </button>
            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'exam'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>4. Examen 1.º ESO (Քննություն)</span>
            </button>
            <button
              onClick={() => setActiveTab('oral')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'oral'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>5. Repaso Oral y Resumen (Կրկնություն)</span>
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'solutions'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <ListCheck className="w-4 h-4" />
              <span>6. Solucionario (Պատասխաններ)</span>
            </button>
            <button
              onClick={() => setActiveTab('vocabulary')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'vocabulary'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>7. Vocabulario (Բառարան)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {/* Helper Notice */}
        <div className="mb-7 bg-gradient-to-r from-amber-50 to-indigo-50 dark:from-amber-950/20 dark:to-indigo-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 dark:bg-amber-500/25 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 dark:text-white">
                💡 Ինտերակտիվ ուսումնական համակարգ (1.º ESO · 7-րդ դասարան)
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Սեղմեք ցանկացած իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար։ Վարժություններում կարող եք ընտրել և լրացնել բառերը, այնուհետև սեղմել <strong>«Comprobar / Ստուգել»</strong>։
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs">
              {translationMode === 'click' && '👆 Ռեժիմ՝ Սեղմիր թարգմանելու համար'}
              {translationMode === 'always' && '👁️ Ռեժիմ՝ Բոլոր թարգմանությունները բաց են'}
              {translationMode === 'never' && '🇪🇸 Ռեժիմ՝ Միայն իսպաներեն'}
            </span>
          </div>
        </div>

        {/* TAB 1: TEORÍA */}
        {activeTab === 'theory' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left sidebar with 10 theory chapters */}
            <div className="lg:col-span-4 space-y-2.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                Թեմաների ցանկ (10 Բաժին)
              </h2>
              <div className="space-y-2 max-h-[78vh] overflow-y-auto pr-1">
                {theorySections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedTheoryId(sec.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                      selectedTheoryId === sec.id
                        ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-500 dark:border-indigo-600 shadow-sm'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {sec.titleEs}
                      </p>
                      <ChevronRight
                        className={`w-5 h-5 mt-0.5 shrink-0 transition-transform ${
                          selectedTheoryId === sec.id ? 'rotate-90 text-indigo-600' : 'text-slate-400'
                        }`}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 font-semibold mt-1">
                      {sec.titleHy}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right content for selected theory */}
            <div className="lg:col-span-8">
              {theorySections
                .filter((sec) => sec.id === selectedTheoryId)
                .map((sec) => (
                  <div
                    key={sec.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-7 shadow-sm"
                  >
                    {/* Header */}
                    <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 rounded-lg">
                          Բաժին {sec.number} / 10
                        </span>
                        <button
                          onClick={() => playAudio(sec.titleEs)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                          title="Լսել իսպաներեն"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        {sec.titleEs}
                      </h2>
                      <h3 className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                        {sec.titleHy}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 leading-relaxed">
                        <strong>Ամփոփում՝</strong> {sec.summaryHy} ({sec.summaryEs})
                      </p>
                    </div>

                    {/* Content blocks */}
                    {sec.content.map((block, idx) => (
                      <div key={idx} className="space-y-3.5">
                        {block.titleEs && (
                          <div className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-slate-100 text-lg">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                            <span>{block.titleEs}</span>
                            {block.titleHy && (
                              <span className="text-base font-normal text-slate-500">
                                · {block.titleHy}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Paragraph type */}
                        {block.type === 'paragraph' && block.items && (
                          <div className="space-y-3">
                            {block.items.map((item, itemIdx) => (
                              <InteractiveText
                                key={itemIdx}
                                es={item.es}
                                hy={item.hy}
                                mode={translationMode}
                                showAudio
                              />
                            ))}
                          </div>
                        )}

                        {/* Callout type */}
                        {block.type === 'callout' && block.items && (
                          <div className="space-y-3">
                            {block.items.map((item, itemIdx) => (
                              <InteractiveText
                                key={itemIdx}
                                es={item.es}
                                hy={item.hy}
                                mode={translationMode}
                                highlightEs
                                showAudio
                              />
                            ))}
                          </div>
                        )}

                        {/* Table type */}
                        {block.type === 'table' && block.tableRows && (
                          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                            <table className="w-full text-left text-base">
                              <thead className="bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                  <th className="p-3.5 sm:p-4">
                                    {block.tableHeaders?.[0]?.es || 'Español'}
                                  </th>
                                  <th className="p-3.5 sm:p-4">
                                    {block.tableHeaders?.[1]?.es || 'Հայերեն'}
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {block.tableRows.map((row, rIdx) => (
                                  <tr
                                    key={rIdx}
                                    onClick={() => playAudio(row.col1Es)}
                                    className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                                    title="Սեղմեք իսպաներենն արտասանելու համար"
                                  >
                                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-slate-100">
                                      <div className="flex items-center gap-2">
                                        <Volume2 className="w-4 h-4 text-slate-400 shrink-0" />
                                        <span>{row.col1Es}</span>
                                      </div>
                                    </td>
                                    <td className="p-3.5 sm:p-4 text-emerald-800 dark:text-emerald-300 font-medium">
                                      {row.col2Es}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Story block */}
                        {block.type === 'story' && (
                          <div className="space-y-4 bg-amber-50/50 dark:bg-amber-950/15 p-5 sm:p-6 rounded-3xl border border-amber-200/80 dark:border-amber-900/50">
                            <div className="flex items-center justify-between border-b border-amber-200/80 pb-3">
                              <div>
                                <h4 className="font-black text-amber-950 dark:text-amber-200 text-xl">
                                  {block.titleEs}
                                </h4>
                                <h5 className="text-sm font-bold text-amber-800 dark:text-amber-300">
                                  {block.titleHy}
                                </h5>
                              </div>
                              <span className="text-xs sm:text-sm bg-amber-200/70 dark:bg-amber-900/70 text-amber-950 dark:text-amber-100 px-3 py-1 rounded-lg font-bold">
                                Ամբողջական տեքստ
                              </span>
                            </div>

                            <div className="space-y-2.5">
                              {block.storyParagraphs?.map((p, pIdx) => (
                                <InteractiveText
                                  key={pIdx}
                                  es={p.es}
                                  hy={p.hy}
                                  mode={translationMode}
                                  showAudio
                                />
                              ))}
                            </div>

                            {block.moralEs && (
                              <div className="mt-5 pt-4 border-t border-amber-200 dark:border-amber-800">
                                <div className="p-5 rounded-2xl bg-amber-100/80 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-800">
                                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 block mb-1">
                                    Moraleja — Բարոյական խրատ
                                  </span>
                                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    {block.moralEs}
                                  </p>
                                  <p className="text-base text-emerald-900 dark:text-emerald-300 mt-1.5 font-medium">
                                    {block.moralHy}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Q&A list */}
                        {block.type === 'qa' && block.qaList && (
                          <div className="space-y-3.5">
                            {block.qaList.map((qa, qIdx) => (
                              <div
                                key={qIdx}
                                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                                    {qa.qEs}
                                  </p>
                                  <button
                                    onClick={() => playAudio(qa.qEs)}
                                    className="p-1 text-slate-400 hover:text-indigo-600"
                                    title="Լսել հարցը"
                                  >
                                    <Volume2 className="w-5 h-5" />
                                  </button>
                                </div>
                                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                                  <InteractiveText
                                    es={qa.aEs}
                                    hy={qa.aHy}
                                    mode={translationMode}
                                    showAudio
                                    highlightEs
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 2: ACTIVIDADES DEL LIBRO (1 TO 6) */}
        {activeTab === 'activities' && (
          <div className="space-y-9">
            {/* Actividad 1 with FULLY WORKING INTERACTIVE WORD SLOTS */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 rounded-lg">
                    Վարժություն 1 · Completa el texto
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {actividad1Data.titleEs}
                  </h3>
                  <h4 className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    {actividad1Data.titleHy}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setAct1Answers({
                        1: 'tradición cultural',
                        2: 'fábulas',
                        3: 'cuentos',
                        4: 'romances',
                        5: 'mitos',
                        6: 'leyendas',
                      });
                      setAct1Checked(true);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-sm font-bold hover:bg-indigo-100"
                  >
                    Տեսնել պատասխանները (Ver soluciones)
                  </button>
                  <button
                    onClick={() => {
                      setAct1Answers({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
                      setAct1Checked(false);
                    }}
                    className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-bold"
                    title="Մաքրել բոլոր դաշտերը"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <InteractiveText
                es={actividad1Data.instructionEs}
                hy={actividad1Data.instructionHy}
                mode={translationMode}
              />

              {/* Word Bank clickable pills */}
              <div className="p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/50 space-y-2">
                <span className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider block">
                  Banco de palabras — Օգտագործվող բառեր (Սեղմեք բառի վրա՝ դաշտում լրացնելու համար)՝
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {actividad1Data.wordBank.map((word, wIdx) => {
                    const isUsed = Object.values(act1Answers).includes(word);
                    return (
                      <button
                        key={wIdx}
                        type="button"
                        onClick={() => {
                          // Find first empty slot from 1 to 6
                          const emptySlot = [1, 2, 3, 4, 5, 6].find((s) => !act1Answers[s]);
                          if (emptySlot) {
                            setAct1Answers({ ...act1Answers, [emptySlot]: word });
                          }
                        }}
                        className={`px-3.5 py-1.5 rounded-xl border text-sm font-bold transition-all ${
                          isUsed
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-dashed border-slate-300'
                            : 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border-indigo-200 hover:border-indigo-400 hover:shadow-xs cursor-pointer'
                        }`}
                      >
                        {word} {isUsed && '✓'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* The Interactive Fillable Text */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
                <div>
                  Las narraciones populares son muy importantes porque forman parte de la{' '}
                  <span className="inline-block align-middle my-1">
                    <select
                      value={act1Answers[1]}
                      onChange={(e) =>
                        setAct1Answers({ ...act1Answers, 1: e.target.value })
                      }
                      className={`px-3 py-1.5 rounded-xl border-2 font-bold text-sm sm:text-base bg-white dark:bg-slate-900 transition-all ${
                        act1Checked
                          ? act1Answers[1] === 'tradición cultural'
                            ? 'border-emerald-500 text-emerald-800 dark:text-emerald-300 bg-emerald-50'
                            : 'border-rose-500 text-rose-800 bg-rose-50'
                          : 'border-indigo-400 text-indigo-900 dark:text-indigo-200'
                      }`}
                    >
                      <option value="">[ 1. Ընտրեք բառը... ]</option>
                      {actividad1Data.wordBank.map((w, idx) => (
                        <option key={idx} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </span>{' '}
                  de un pueblo.
                </div>

                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Dichas manifestaciones populares pueden clasificarse en:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                    {[2, 3, 4, 5, 6].map((slotNum) => {
                      const val = act1Answers[slotNum];
                      const isCorrect =
                        act1Checked &&
                        ['fábulas', 'cuentos', 'romances', 'mitos', 'leyendas'].includes(val);
                      return (
                        <div key={slotNum} className="space-y-1">
                          <label className="text-xs font-bold text-slate-500">
                            Տեսակ {slotNum - 1}:
                          </label>
                          <select
                            value={val}
                            onChange={(e) =>
                              setAct1Answers({
                                ...act1Answers,
                                [slotNum]: e.target.value,
                              })
                            }
                            className={`w-full px-3 py-2 rounded-xl border-2 font-bold text-sm bg-white dark:bg-slate-900 ${
                              act1Checked
                                ? isCorrect
                                  ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                                  : 'border-rose-500 text-rose-800 bg-rose-50'
                                : 'border-slate-300 focus:border-indigo-500'
                            }`}
                          >
                            <option value="">[ Ընտրեք... ]</option>
                            {actividad1Data.wordBank.map((w, idx) => (
                              <option key={idx} value={w}>
                                {w}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Validation message and controls */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setAct1Checked(true)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm sm:text-base hover:bg-indigo-700 shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Check className="w-5 h-5" />
                    <span>Comprobar respuestas (Ստուգել պատասխանները)</span>
                  </button>

                  {act1Checked && (
                    <div className="flex items-center gap-2">
                      {act1Validation.isFullyCorrect ? (
                        <span className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-300">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>¡Excelente! Բոլոր պատասխանները ճիշտ են:</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-rose-700 bg-rose-100 dark:bg-rose-950/60 dark:text-rose-300 px-3 py-1.5 rounded-xl border border-rose-300">
                          <XCircle className="w-5 h-5" />
                          <span>Որոշ բառեր սխալ են կամ դեռ դատարկ են:</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Explanation of why if any answer is wrong */}
                {act1Checked && !act1Validation.isFullyCorrect && (
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-sm space-y-2">
                    <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold">
                      <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                      <span>Ինչո՞ւ և ինչպե՞ս պետք է լինի (Explicación detallada):</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200">
                      <strong>1-ին բացատ (Español):</strong> Las narraciones populares forman parte de la <strong>«tradición cultural»</strong> de un pueblo (Ժողովրդական պատումները կազմում են որևէ ժողովրդի մշակութային ավանդույթի մի մասը)։
                    </p>
                    <p className="text-slate-800 dark:text-slate-200">
                      <strong>2-6 բացատներ (Հինգ ժանրերը՝ առանց կրկնվելու):</strong> Դասագրքի 5 հիմնական դասակարգումներն են՝ <strong>fábulas</strong> (առակներ), <strong>cuentos</strong> (հեքիաթներ/պատմվածքներ), <strong>romances</strong> (ռոմանսներ), <strong>mitos</strong> (առասպելներ) և <strong>leyendas</strong> (ավանդազրույցներ)։
                    </p>
                  </div>
                )}
              </div>

              {/* Armenian complete translation */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                <span className="text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider block mb-1">
                  Հայերեն թարգմանություն / Traducción al armenio:
                </span>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                  {actividad1Data.translationHy}
                </p>
              </div>
            </div>

            {/* Actividad 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 rounded-lg">
                  Վարժություն 2 · Completa la tabla
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {actividad2Data.titleEs}
                </h3>
                <h4 className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {actividad2Data.titleHy}
                </h4>
              </div>

              <InteractiveText
                es={actividad2Data.instructionEs}
                hy={actividad2Data.instructionHy}
                mode={translationMode}
              />

              <div className="space-y-3.5">
                {actividad2Data.rows.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg text-xs sm:text-sm font-bold bg-indigo-600 text-white">
                          {row.tipoEs} · {row.tipoHy}
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                          «{row.ejemploEs}»
                        </span>
                        <span className="text-sm text-slate-500">({row.ejemploHy})</span>
                      </div>
                      <button
                        onClick={() => playAudio(row.explicacionEs)}
                        className="self-start sm:self-auto p-1.5 text-slate-400 hover:text-indigo-600"
                        title="Լսել բացատրությունը"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <InteractiveText
                      es={row.explicacionEs}
                      hy={row.explicacionHy}
                      mode={translationMode}
                      highlightEs
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Actividad 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-lg">
                  Վարժություն 3 · La canción popular
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {actividad3Data.titleEs}
                </h3>
                <h4 className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {actividad3Data.titleHy}
                </h4>
              </div>

              <InteractiveText
                es={actividad3Data.instructionEs}
                hy={actividad3Data.instructionHy}
                mode={translationMode}
              />

              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-sm">
                <p className="text-amber-900 dark:text-amber-200 font-bold">
                  📌 {actividad3Data.noteEs}
                </p>
                <p className="text-amber-800 dark:text-amber-300 mt-1">
                  {actividad3Data.noteHy}
                </p>
              </div>

              {/* Lyrics card */}
              <div className="p-6 rounded-3xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    Տեքստ / Canción de la primavera
                  </span>
                  <button
                    onClick={() =>
                      playAudio(
                        'Ya llega la primavera, las flores quieren despertar, los pájaros cantan alegres y los niños salen a jugar.'
                      )
                    }
                    className="p-1.5 text-indigo-600 hover:text-indigo-800"
                    title="Լսել երգի տողերը"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {actividad3Data.songLines.map((line, lIdx) => (
                  <InteractiveText
                    key={lIdx}
                    es={line.es}
                    hy={line.hy}
                    mode={translationMode}
                  />
                ))}
              </div>

              {/* Questions */}
              <div className="space-y-3.5 pt-2">
                <h5 className="font-bold text-slate-900 dark:text-white text-base uppercase tracking-wider">
                  Հարցեր և մոդելային պատասխաններ / Preguntas de análisis:
                </h5>
                {actividad3Data.questions.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-slate-900 dark:text-slate-100 text-base">{q.qEs}</p>
                      <button
                        onClick={() => playAudio(q.aEs)}
                        className="p-1 text-slate-400 hover:text-indigo-600"
                        title="Լսել պատասխանը"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{q.qHy}</p>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <InteractiveText
                        es={q.aEs}
                        hy={q.aHy}
                        mode={translationMode}
                        highlightEs
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Model answer for class */}
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-2">
                <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                  Respuesta completa para el ejercicio del libro / Ամբողջական պատասխան դասագրքի համար:
                </span>
                <InteractiveText
                  es={actividad3Data.modelAnswerEs}
                  hy={actividad3Data.modelAnswerHy}
                  mode={translationMode}
                  showAudio
                  highlightEs
                />
              </div>
            </div>

            {/* Actividad 4: «El jardinero y la semilla» */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-7">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 rounded-lg">
                  Վարժություն 4 (Գլխավոր ընթերցանություն)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                  {actividad4Data.titleEs}
                </h3>
                <h4 className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {actividad4Data.titleHy}
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  {actividad4Data.noteHy} (Sustituye a Doña Truhana)
                </p>
              </div>

              <InteractiveText
                es={actividad4Data.instructionEs}
                hy={actividad4Data.instructionHy}
                mode={translationMode}
              />

              {/* Story presentation */}
              <div className="space-y-3 bg-amber-50/50 dark:bg-amber-950/15 p-6 rounded-3xl border border-amber-200 dark:border-amber-900/40">
                <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                  <h4 className="text-xl font-black text-amber-950 dark:text-amber-200">
                    📖 Texto completo: «El jardinero y la semilla» («Այգեպանն ու սերմը»)
                  </h4>
                  <button
                    onClick={() =>
                      playAudio(actividad4Data.story.map((p) => p.es).join(' '))
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-200/80 text-amber-950 text-xs sm:text-sm font-bold hover:bg-amber-300"
                    title="Լսել ամբողջ տեքստը"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Լսել պատմությունը</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {actividad4Data.story.map((para, pIdx) => (
                    <InteractiveText
                      key={pIdx}
                      es={para.es}
                      hy={para.hy}
                      mode={translationMode}
                      showAudio
                    />
                  ))}
                </div>
              </div>

              {/* Vocabulary of the story */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-indigo-600" />
                    <span>Vocabulario del texto — Տեքստի բառապաշար (20 բառ)</span>
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-500">Սեղմեք բառի վրա՝ լսելու համար</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {actividad4Data.vocabulary.map((vocab, vIdx) => (
                    <div
                      key={vIdx}
                      onClick={() => playAudio(vocab.es)}
                      className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:shadow-xs cursor-pointer transition-all flex flex-col justify-between"
                      title="Լսել իսպաներեն"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-base text-slate-900 dark:text-white">
                          {vocab.es}
                        </span>
                        <Volume2 className="w-4 h-4 text-slate-400 hover:text-indigo-600" />
                      </div>
                      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                        {vocab.hy}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10 Comprehension Questions */}
              <div className="space-y-3.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                  10 Preguntas de comprensión — Տեքստի ընկալման 10 հարցեր
                </h4>
                <div className="space-y-3">
                  {actividad4Data.questions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                            {q.qEs}
                          </p>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">
                            {q.qHy}
                          </p>
                        </div>
                        <button
                          onClick={() => playAudio(q.aEs)}
                          className="p-1 text-slate-400 hover:text-indigo-600"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <InteractiveText
                        es={q.aEs}
                        hy={q.aHy}
                        mode={translationMode}
                        highlightEs
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Literary analysis table */}
              <div className="space-y-3.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                  Análisis literario — Գրական վերլուծություն
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                  <table className="w-full text-left text-base">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="p-3.5 sm:p-4">Elemento / Տարր</th>
                        <th className="p-3.5 sm:p-4">Respuesta en español</th>
                        <th className="p-3.5 sm:p-4">Հայերեն</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {actividad4Data.analysis.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className="p-3.5 sm:p-4 font-bold text-slate-800 dark:text-slate-200">
                            {row.elementEs}{' '}
                            <span className="text-xs sm:text-sm text-slate-500 font-normal">
                              ({row.elementHy})
                            </span>
                          </td>
                          <td className="p-3.5 sm:p-4 font-extrabold text-indigo-700 dark:text-indigo-400">
                            {row.answerEs}
                          </td>
                          <td className="p-3.5 sm:p-4 text-emerald-800 dark:text-emerald-300 font-semibold">
                            {row.answerHy}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ready to hand in to teacher */}
              <div className="p-6 rounded-3xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Respuesta completa para entregar al profesor / Ամբողջական պատասխան ուսուցչին հանձնելու համար:
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(actividad4Data.formalSubmissionEs, 'act4')
                    }
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-bold hover:bg-indigo-700 transition-colors"
                  >
                    {copiedKey === 'act4' ? (
                      <>
                        <CheckCheck className="w-4 h-4" />
                        <span>Պատճենված է!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar respuesta (Պատճենել)</span>
                      </>
                    )}
                  </button>
                </div>
                <InteractiveText
                  es={actividad4Data.formalSubmissionEs}
                  hy={actividad4Data.formalSubmissionHy}
                  mode={translationMode}
                  showAudio
                  highlightEs
                />
              </div>
            </div>

            {/* Actividades 5 and 6 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 rounded-lg">
                  Վարժություն 5 · Recopilatorio de cuentos
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {actividad5Data.titleEs}
                </h3>
                <h4 className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {actividad5Data.titleHy}
                </h4>
              </div>

              <InteractiveText
                es={actividad5Data.instructionEs}
                hy={actividad5Data.instructionHy}
                mode={translationMode}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {actividad5Data.groups.map((grp, gIdx) => (
                  <div
                    key={gIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3"
                  >
                    <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">
                        {grp.categoryEs}
                      </h4>
                      <h5 className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">
                        {grp.categoryHy}
                      </h5>
                    </div>

                    <div className="space-y-2.5">
                      {grp.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-base text-slate-900 dark:text-white">
                              {item.titleEs}
                            </span>
                            <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                              {item.titleHy}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
                            {item.detailEs}
                          </p>
                          <p className="text-sm text-emerald-800 dark:text-emerald-400 mt-0.5">
                            {item.detailHy}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modelo de presentación oral */}
              <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                    Modelo de presentación oral / Բանավոր ներկայացման օրինակ:
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(actividad5Data.oralPresentationEs, 'oralPres')
                    }
                    className="px-3 py-1.5 rounded-xl bg-amber-200 text-amber-950 text-xs sm:text-sm font-bold hover:bg-amber-300"
                  >
                    {copiedKey === 'oralPres' ? 'Պատճենված է!' : 'Copiar'}
                  </button>
                </div>
                <InteractiveText
                  es={actividad5Data.oralPresentationEs}
                  hy={actividad5Data.oralPresentationHy}
                  mode={translationMode}
                  showAudio
                  highlightEs
                />
              </div>
            </div>

            {/* Actividad 6 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 rounded-lg">
                  Վարժություն 6 · Motivación para leer
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {actividad6Data.titleEs}
                </h3>
                <h4 className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {actividad6Data.titleHy}
                </h4>
              </div>

              <InteractiveText
                es={actividad6Data.instructionEs}
                hy={actividad6Data.instructionHy}
                mode={translationMode}
              />

              <div className="space-y-3.5 pt-2">
                <h5 className="font-bold text-slate-900 dark:text-white text-base uppercase tracking-wider">
                  Respuestas modelo — Պատասխանների օրինակներ:
                </h5>
                {actividad6Data.modelAnswers.map((ans, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5"
                  >
                    <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {ans.label}
                    </span>
                    <div className="flex-1">
                      <InteractiveText
                        es={ans.es}
                        hy={ans.hy}
                        mode={translationMode}
                        showAudio
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 20 EJERCICIOS PRÁCTICOS WITH FULL INTERACTION */}
        {activeTab === 'exercises' && (
          <div className="space-y-9">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider bg-rose-600 text-white rounded-lg">
                  Մեծ Գործնական Հավաքածու · 20 Ինտերակտիվ Վարժություն
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5">
                  Colección Completa de 20 Ejercicios Prácticos
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Կարող եք լրացնել յուրաքանչյուր առաջադրանքի բառերը, ստուգել պատասխանները կամ դիտել ամբողջական լուծումները։
                </p>
              </div>

              {/* Loop through the 20 exercises */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800 mt-6 space-y-9">
                {practicalExercises.map((ex) => (
                  <div key={ex.id} className="pt-9 first:pt-0 space-y-5">
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {ex.partTitleEs} · {ex.partTitleHy}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                        {ex.titleEs}
                      </h4>
                      <h5 className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400">
                        {ex.titleHy}
                      </h5>
                    </div>

                    <InteractiveText
                      es={ex.instructionEs}
                      hy={ex.instructionHy}
                      mode={translationMode}
                    />

                    {/* Exercise 1: Matching Words (FULL DROPDOWNS) */}
                    {ex.id === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
                            <h5 className="font-bold text-sm uppercase text-slate-500">
                              A. Palabras (Բառեր) — Ընտրեք B-ի տառը (A, B, C...)
                            </h5>
                            <div className="space-y-2.5">
                              {ex.data.pairs.map((p: any) => {
                                const selectedLetter = ex1Answers[p.id];
                                const isCorrect = ex1Checked && selectedLetter === p.letter;
                                return (
                                  <div
                                    key={p.id}
                                    className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border flex flex-col gap-2 text-base"
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="font-bold">
                                        {p.id}. {p.wordEs}{' '}
                                        <span className="text-sm text-slate-500 font-normal">
                                          ({p.wordHy})
                                        </span>
                                      </span>
                                      <select
                                        value={selectedLetter || ''}
                                        onChange={(e) =>
                                          setEx1Answers({
                                            ...ex1Answers,
                                            [p.id]: e.target.value,
                                          })
                                        }
                                        className={`px-3 py-1 rounded-lg border-2 font-bold text-sm bg-white dark:bg-slate-900 ${
                                          ex1Checked
                                            ? isCorrect
                                              ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                                              : 'border-rose-500 text-rose-800 bg-rose-50'
                                            : 'border-slate-300'
                                        }`}
                                      >
                                        <option value="">Ընտրեք</option>
                                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((lettr) => (
                                          <option key={lettr} value={lettr}>
                                            {lettr}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    {ex1Checked && !isCorrect && (
                                      <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs text-rose-900 dark:text-rose-200 space-y-0.5">
                                        <div className="font-bold">
                                          ✗ Ճիշտ տառն է՝ <span className="text-indigo-700 dark:text-indigo-300 font-black">{p.letter}</span> ({p.defEs} / {p.defHy})
                                        </div>
                                        <div><strong>¿Por qué?:</strong> {p.whyEs}</div>
                                        <div className="text-indigo-950 dark:text-indigo-300 font-semibold"><strong>Ինչո՞ւ՝</strong> {p.whyHy}</div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
                            <h5 className="font-bold text-sm uppercase text-slate-500">
                              B. Significados (Բացատրություններ)
                            </h5>
                            <div className="space-y-2">
                              {ex.data.pairs.map((p: any) => (
                                <div
                                  key={p.id}
                                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border text-sm"
                                >
                                  <span className="font-bold text-indigo-600 mr-2 text-base">
                                    {p.letter}.
                                  </span>
                                  <span className="font-medium text-slate-800 dark:text-slate-100">
                                    {p.defEs}
                                  </span>{' '}
                                  <span className="text-emerald-800 dark:text-emerald-400 font-semibold block sm:inline mt-0.5 sm:mt-0">
                                    ({p.defHy})
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setEx1Checked(true)}
                            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700"
                          >
                            Comprobar (Ստուգել պատասխանները)
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              // Fill all correct answers
                              const allCorrect: { [k: number]: string } = {};
                              ex.data.pairs.forEach((p: any) => {
                                allCorrect[p.id] = p.letter;
                              });
                              setEx1Answers(allCorrect);
                              setEx1Checked(true);
                            }}
                            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200"
                          >
                            Տեսնել ճիշտ պատասխանները
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Exercise 2: Fill definitions (INTERACTIVE SELECT DROPDOWNS FOR ALL 10 ITEMS) */}
                    {ex.id === 2 && (
                      <div className="space-y-4">
                        <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900 flex flex-wrap items-center gap-2 text-sm font-bold text-amber-900 dark:text-amber-200">
                          <span className="uppercase text-xs tracking-wider">Palabras:</span>
                          {ex.data.wordBank.map((w: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border text-indigo-700 dark:text-indigo-300"
                            >
                              {w}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-3">
                          {ex.data.items.map((item: any) => {
                            const userWord = ex2Answers[item.id] || '';
                            const isCorrect = ex2Checked && userWord.toLowerCase() === item.answer.toLowerCase();
                            return (
                              <div
                                key={item.id}
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border text-base space-y-2"
                              >
                                <div className="font-semibold text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-1.5">
                                  <span>{item.id}. {item.preEs}</span>
                                  <select
                                    value={userWord}
                                    onChange={(e) =>
                                      setEx2Answers({
                                        ...ex2Answers,
                                        [item.id]: e.target.value,
                                      })
                                    }
                                    className={`px-3 py-1 rounded-xl border-2 font-bold text-sm bg-white dark:bg-slate-900 ${
                                      ex2Checked
                                        ? isCorrect
                                          ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                                          : 'border-rose-500 text-rose-800 bg-rose-50'
                                        : 'border-indigo-400 text-indigo-900 dark:text-indigo-200'
                                    }`}
                                  >
                                    <option value="">[ Ընտրեք բառը... ]</option>
                                    {ex.data.wordBank.map((w: string, wIdx: number) => (
                                      <option key={wIdx} value={w}>
                                        {w}
                                      </option>
                                    ))}
                                  </select>
                                  <span>{item.postEs}</span>
                                </div>
                                <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                                  {item.postHy}
                                </p>
                                {ex2Checked && !isCorrect && (
                                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs sm:text-sm space-y-1">
                                    <div className="font-bold text-rose-800 dark:text-rose-300">
                                      ✗ Սխալ պատասխան {userWord ? `(ընտրված է՝ «${userWord}»)` : '(դեռ ընտրված չէ)'} → Ճիշտ բառն է՝ <span className="underline font-black text-indigo-700 dark:text-indigo-300">{item.answer}</span>
                                    </div>
                                    <p className="text-slate-800 dark:text-slate-200">
                                      <strong>¿Por qué?:</strong> {item.whyEs}
                                    </p>
                                    <p className="text-indigo-950 dark:text-indigo-300 font-semibold">
                                      <strong>Ինչո՞ւ՝</strong> {item.whyHy}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setEx2Checked(true)}
                            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700 shadow-md"
                          >
                            Comprobar (Ստուգել բոլորը)
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const solved: { [k: number]: string } = {};
                              ex.data.items.forEach((item: any) => {
                                solved[item.id] = item.answer;
                              });
                              setEx2Answers(solved);
                              setEx2Checked(true);
                            }}
                            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200"
                          >
                            Լրացնել ճիշտ պատասխանները
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Exercise 3: MCQ with Clickable Choices */}
                    {ex.id === 3 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ex.data.questions.map((q: any) => {
                            const userChoice = ex3Answers[q.id];
                            return (
                              <div
                                key={q.id}
                                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-2.5"
                              >
                                <p className="font-bold text-base text-slate-900 dark:text-white">
                                  {q.qEs}
                                </p>
                                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                                  {q.qHy}
                                </p>
                                <div className="space-y-1.5 pt-1">
                                  {q.options.map((opt: string, optIdx: number) => {
                                    const isSelected = userChoice === optIdx;
                                    const isCorrect = optIdx === q.correct;
                                    let btnStyle = 'bg-white dark:bg-slate-800 border-slate-200 hover:border-indigo-400';
                                    if (ex3Checked) {
                                      if (isCorrect) {
                                        btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                                      } else if (isSelected && !isCorrect) {
                                        btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
                                      }
                                    } else if (isSelected) {
                                      btnStyle = 'bg-indigo-50 border-indigo-500 font-bold text-indigo-900';
                                    }

                                    return (
                                      <button
                                        key={optIdx}
                                        type="button"
                                        onClick={() =>
                                          setEx3Answers({
                                            ...ex3Answers,
                                            [q.id]: optIdx,
                                          })
                                        }
                                        className={`w-full p-2.5 rounded-xl text-left text-sm flex items-center justify-between border transition-all ${btnStyle}`}
                                      >
                                        <span>
                                          {String.fromCharCode(65 + optIdx)}) {opt} ({q.optionsHy[optIdx]})
                                        </span>
                                        {ex3Checked && isCorrect && (
                                          <span className="text-xs bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-md font-bold">
                                            ✓
                                          </span>
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>

                                {ex3Checked && (
                                  <div
                                    className={`p-3 rounded-xl text-xs sm:text-sm border mt-2 space-y-1 ${
                                      userChoice === q.correct
                                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                                        : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-900 dark:text-rose-200'
                                    }`}
                                  >
                                    <div className="font-bold">
                                      {userChoice === q.correct
                                        ? `✓ Ճիշտ է! Պատասխան՝ ${q.options[q.correct]} (${q.optionsHy[q.correct]})`
                                        : `✗ Սխալ ընտրություն: Ճիշտ պատասխանն է՝ ${q.options[q.correct]} (${q.optionsHy[q.correct]})`}
                                    </div>
                                    <p className="text-slate-800 dark:text-slate-200">
                                      <strong>¿Por qué?:</strong> {q.whyEs}
                                    </p>
                                    <p className="text-indigo-950 dark:text-indigo-300 font-semibold">
                                      <strong>Ինչո՞ւ՝</strong> {q.whyHy}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => setEx3Checked(true)}
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700"
                        >
                          Ստուգել ընտրած պատասխանները (Comprobar)
                        </button>
                      </div>
                    )}

                    {/* Exercise 4: Identify text type & justify */}
                    {ex.id === 4 && (
                      <div className="space-y-3.5">
                        {ex.data.cases.map((c: any) => (
                          <div
                            key={c.id}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2.5"
                          >
                            <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                              {c.id}. {c.descEs}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{c.descHy}</p>
                            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-sm space-y-1.5">
                              <p className="font-bold text-indigo-900 dark:text-indigo-200 text-base">
                                Tipo: {c.tipo}
                              </p>
                              <p className="text-slate-800 dark:text-slate-200">
                                <strong>¿Por qué?:</strong> {c.justEs}
                              </p>
                              <p className="text-emerald-800 dark:text-emerald-300 font-semibold">{c.justHy}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Exercise 5: Mito o Leyenda */}
                    {ex.id === 5 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ex.data.items.map((item: any) => {
                            const userChoice = ex5Answers[item.id];
                            const isCorrect = ex5Checked && userChoice === item.answer;
                            return (
                              <div
                                key={item.id}
                                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-3"
                              >
                                <p className="text-base font-bold text-slate-900 dark:text-white">
                                  {item.id}. {item.textEs}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                  {item.textHy}
                                </p>
                                <div className="flex items-center gap-2 pt-1">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setEx5Answers({ ...ex5Answers, [item.id]: 'Mito' })
                                    }
                                    className={`px-3.5 py-1.5 rounded-xl text-sm font-bold border ${
                                      userChoice === 'Mito'
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-white dark:bg-slate-800 text-purple-700'
                                    }`}
                                  >
                                    Mito (Առասպել)
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setEx5Answers({ ...ex5Answers, [item.id]: 'Leyenda' })
                                    }
                                    className={`px-3.5 py-1.5 rounded-xl text-sm font-bold border ${
                                      userChoice === 'Leyenda'
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-white dark:bg-slate-800 text-amber-700'
                                    }`}
                                  >
                                    Leyenda (Ավանդազրույց)
                                  </button>
                                </div>
                                {ex5Checked && (
                                  <div
                                    className={`p-3 rounded-xl text-xs sm:text-sm border space-y-1 ${
                                      isCorrect
                                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                                        : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-900 dark:text-rose-200'
                                    }`}
                                  >
                                    <p className="font-bold">
                                      {isCorrect ? '✓ Ճիշտ է!' : '✗ Սխալ ընտրություն:'} → Ճիշտ պատասխանն է՝ {item.answer} ({item.answerHy})
                                    </p>
                                    <p className="text-slate-800 dark:text-slate-200">
                                      <strong>¿Por qué?:</strong> {item.whyEs}
                                    </p>
                                    <p className="text-indigo-950 dark:text-indigo-300 font-semibold">
                                      <strong>Ինչո՞ւ՝</strong> {item.whyHy}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => setEx5Checked(true)}
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700"
                        >
                          Comprobar (Ստուգել)
                        </button>
                      </div>
                    )}

                    {/* Exercise 6: Classify 4 cuentos */}
                    {ex.id === 6 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                          {ex.data.items.map((item: any) => {
                            const userChoice = ex6Answers[item.id] || '';
                            const isCorrect = ex6Checked && userChoice === item.type;
                            return (
                              <div
                                key={item.id}
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border flex flex-col justify-between space-y-3"
                              >
                                <div>
                                  <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                                    {item.textEs}
                                  </p>
                                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{item.textHy}</p>
                                </div>
                                <select
                                  value={userChoice}
                                  onChange={(e) =>
                                    setEx6Answers({
                                      ...ex6Answers,
                                      [item.id]: e.target.value,
                                    })
                                  }
                                  className={`w-full px-3 py-1.5 rounded-xl border-2 font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 ${
                                    ex6Checked
                                      ? isCorrect
                                        ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                                        : 'border-rose-500 text-rose-800 bg-rose-50'
                                      : 'border-slate-300'
                                  }`}
                                >
                                  <option value="">[ Ընտրեք տեսակը... ]</option>
                                  <option value="Cuento maravilloso">Cuento maravilloso (Հրաշապատում)</option>
                                  <option value="Cuento realista">Cuento realista (Իրապատում)</option>
                                  <option value="Apólogo">Apólogo (Խրատական)</option>
                                  <option value="Fábula">Fábula (Առակ)</option>
                                </select>
                                {ex6Checked && (
                                  <div
                                    className={`p-2.5 rounded-xl text-xs space-y-1 ${
                                      isCorrect
                                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 text-emerald-900 dark:text-emerald-200'
                                        : 'bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-rose-900 dark:text-rose-200'
                                    }`}
                                  >
                                    <p className="font-bold">
                                      {isCorrect ? '✓ Ճիշտ է!' : '✗ Սխալ է!'} → Ճիշտ տեսակ՝ {item.type}
                                    </p>
                                    <p className="text-slate-800 dark:text-slate-200">
                                      <strong>¿Por qué?:</strong> {item.whyEs}
                                    </p>
                                    <p className="text-indigo-950 dark:text-indigo-300 font-semibold">
                                      <strong>Ինչո՞ւ՝</strong> {item.whyHy}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => setEx6Checked(true)}
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700"
                        >
                          Comprobar (Ստուգել դասակարգումը)
                        </button>
                      </div>
                    )}

                    {/* Exercise 7: True/False with corrections */}
                    {ex.id === 7 && (
                      <div className="space-y-4">
                        <div className="space-y-3">
                          {ex.data.statements.map((s: any) => {
                            const userChoice = ex7UserChoices[s.id];
                            return (
                              <div
                                key={s.id}
                                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-2.5"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div>
                                    <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                      {s.es}
                                    </p>
                                    <p className="text-sm text-slate-500">{s.hy}</p>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setEx7UserChoices({
                                          ...ex7UserChoices,
                                          [s.id]: true,
                                        })
                                      }
                                      className={`px-3.5 py-1.5 text-sm font-bold rounded-xl border ${
                                        userChoice === true
                                          ? 'bg-indigo-600 text-white'
                                          : 'bg-white dark:bg-slate-800 text-slate-700'
                                      }`}
                                    >
                                      Verdadero (Ճիշտ)
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setEx7UserChoices({
                                          ...ex7UserChoices,
                                          [s.id]: false,
                                        })
                                      }
                                      className={`px-3.5 py-1.5 text-sm font-bold rounded-xl border ${
                                        userChoice === false
                                          ? 'bg-indigo-600 text-white'
                                          : 'bg-white dark:bg-slate-800 text-slate-700'
                                      }`}
                                    >
                                      Falso (Սխալ)
                                    </button>
                                  </div>
                                </div>

                                {ex7Checked && (
                                  <div
                                    className={`p-3 rounded-xl text-sm border ${
                                      userChoice === s.isTrue
                                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                                        : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-900 dark:text-rose-200'
                                    }`}
                                  >
                                    <p className="font-bold">
                                      {s.isTrue ? '✓ Ճիշտ է (Verdadero)' : '✗ Սխալ է (Falso)'}
                                    </p>
                                    {!s.isTrue && s.correctionEs && (
                                      <p className="mt-1">
                                        <strong>Ուղղում՝</strong> {s.correctionEs} ({s.correctionHy})
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setEx7Checked(true)}
                            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700"
                          >
                            Ստուգել (Comprobar)
                          </button>
                          <button
                            onClick={() => {
                              setEx7UserChoices({});
                              setEx7Checked(false);
                            }}
                            className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-700 hover:bg-slate-100"
                          >
                            Մաքրել (Reset)
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Exercise 8: Introducción, nudo o desenlace */}
                    {ex.id === 8 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                          {ex.data.items.map((item: any) => {
                            const userChoice = ex8Answers[item.id] || '';
                            const isCorrect = ex8Checked && userChoice === item.part;
                            return (
                              <div
                                key={item.id}
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border flex flex-col justify-between space-y-3"
                              >
                                <div>
                                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                    {item.id}. {item.es}
                                  </p>
                                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{item.hy}</p>
                                </div>
                                <select
                                  value={userChoice}
                                  onChange={(e) =>
                                    setEx8Answers({
                                      ...ex8Answers,
                                      [item.id]: e.target.value,
                                    })
                                  }
                                  className={`w-full px-3 py-1.5 rounded-xl border-2 font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 ${
                                    ex8Checked
                                      ? isCorrect
                                        ? 'border-emerald-500 text-emerald-800 bg-emerald-50'
                                        : 'border-rose-500 text-rose-800 bg-rose-50'
                                      : 'border-slate-300'
                                  }`}
                                >
                                  <option value="">[ Ընտրեք մասը... ]</option>
                                  <option value="Introducción">Introducción (Սկիզբ)</option>
                                  <option value="Nudo">Nudo (Հանգույց)</option>
                                  <option value="Desenlace">Desenlace (Հանգուցալուծում)</option>
                                </select>
                                {ex8Checked && (
                                  <div
                                    className={`p-2.5 rounded-xl text-xs space-y-1 ${
                                      isCorrect
                                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 text-emerald-900 dark:text-emerald-200'
                                        : 'bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-rose-900 dark:text-rose-200'
                                    }`}
                                  >
                                    <p className="font-bold">
                                      {isCorrect ? '✓ Ճիշտ է!' : '✗ Սխալ է!'} → Ճիշտ մասն է՝ {item.part}
                                    </p>
                                    <p className="text-slate-800 dark:text-slate-200">
                                      <strong>¿Por qué?:</strong> {item.whyEs}
                                    </p>
                                    <p className="text-indigo-950 dark:text-indigo-300 font-semibold">
                                      <strong>Ինչո՞ւ՝</strong> {item.whyHy}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => setEx8Checked(true)}
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700"
                        >
                          Comprobar (Ստուգել)
                        </button>
                      </div>
                    )}

                    {/* Exercise 9: Ordena la historia */}
                    {ex.id === 9 && (
                      <div className="space-y-4">
                        <div className="space-y-2.5">
                          {ex.data.fragments.map((frag: any) => (
                            <div
                              key={frag.key}
                              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border flex items-start gap-3.5"
                            >
                              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                                {frag.key}
                              </span>
                              <div>
                                <p className="font-bold text-base text-slate-900 dark:text-slate-100">
                                  {frag.es}
                                </p>
                                <p className="text-sm text-slate-500 mt-0.5">{frag.hy}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Interactive order builder */}
                        <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 space-y-3">
                          <span className="text-sm font-bold text-indigo-900 dark:text-indigo-200 block">
                            Ընտրեք ճիշտ հերթականությունը՝ սեղմելով տառերի վրա՝
                          </span>
                          <div className="flex items-center gap-2">
                            {['A', 'B', 'C', 'D'].map((ltr) => (
                              <button
                                key={ltr}
                                type="button"
                                disabled={ex9Order.includes(ltr)}
                                onClick={() => setEx9Order([...ex9Order, ltr])}
                                className={`w-10 h-10 rounded-xl font-black text-base border ${
                                  ex9Order.includes(ltr)
                                    ? 'bg-slate-200 text-slate-400'
                                    : 'bg-white text-indigo-700 border-indigo-300 hover:bg-indigo-100'
                                }`}
                              >
                                {ltr}
                              </button>
                            ))}
                            <button
                              type="button"
                              onClick={() => {
                                setEx9Order([]);
                                setEx9Checked(false);
                              }}
                              className="px-3 py-1.5 text-xs font-bold rounded-lg border text-slate-600 hover:bg-white ml-2"
                            >
                              Մաքրել
                            </button>
                          </div>

                          <div className="flex items-center gap-2 text-base font-bold text-slate-800 dark:text-slate-100 pt-1">
                            <span>Ձեր ընտրած հերթականությունը՝</span>
                            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border font-mono text-indigo-600">
                              {ex9Order.join(' → ') || '(ընտրեք տառերը)'}
                            </span>
                          </div>

                          {ex9Order.length === 4 && (
                            <button
                              type="button"
                              onClick={() => setEx9Checked(true)}
                              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm"
                            >
                              Ստուգել հերթականությունը
                            </button>
                          )}

                          {ex9Checked && (
                            <div className="pt-2">
                              {ex9Order.join('') === 'CBDA' ? (
                                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 rounded-xl text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 space-y-1">
                                  <p className="font-bold">
                                    ✓ Կատարյալ է! Ճիշտ հերթականությունը՝ C → B → D → A
                                  </p>
                                  <p className="text-slate-800 dark:text-slate-200">
                                    <strong>¿Por qué?:</strong> {ex.data.whyEs}
                                  </p>
                                  <p className="text-emerald-950 dark:text-emerald-300 font-semibold">
                                    <strong>Ինչո՞ւ՝</strong> {ex.data.whyHy}
                                  </p>
                                </div>
                              ) : (
                                <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700 rounded-xl text-xs sm:text-sm text-rose-900 dark:text-rose-200 space-y-1">
                                  <p className="font-bold">
                                    ✗ Սխալ հերթականություն: Ճիշտ հերթականությունն է՝ C → B → D → A
                                  </p>
                                  <p className="text-slate-800 dark:text-slate-200">
                                    <strong>¿Por qué?:</strong> {ex.data.whyEs}
                                  </p>
                                  <p className="text-indigo-950 dark:text-indigo-300 font-semibold">
                                    <strong>Ինչո՞ւ՝</strong> {ex.data.whyHy}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Exercise 10: Moralejas */}
                    {ex.id === 10 && (
                      <div className="space-y-3.5">
                        {ex.data.cases.map((c: any) => (
                          <div
                            key={c.id}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-2.5"
                          >
                            <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                              {c.id}. {c.sitEs}
                            </p>
                            <p className="text-sm text-slate-500">{c.sitHy}</p>
                            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-sm">
                              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                                Moraleja:
                              </span>
                              <p className="font-bold text-slate-900 dark:text-slate-100 text-base">
                                {c.moralEs}
                              </p>
                              <p className="text-emerald-800 dark:text-emerald-300 mt-1 font-medium">
                                {c.moralHy}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Exercise 11, 12, 13: Readings with Q&A */}
                    {(ex.id === 11 || ex.id === 12 || ex.id === 13) && (
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 space-y-2.5">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 block">
                            Текст / Տեքստ (Սեղմեք յուրաքանչյուր նախադասության վրա թարգմանության համար)
                          </span>
                          <div className="space-y-2 pt-1">
                            {ex.data.story.map((p: any, pIdx: number) => (
                              <InteractiveText
                                key={pIdx}
                                es={p.es}
                                hy={p.hy}
                                mode={translationMode}
                                showAudio
                              />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h5 className="font-bold text-base text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                            Հարցեր և պատասխաններ / Preguntas y respuestas:
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {ex.data.questions.map((q: any, qIdx: number) => (
                              <div
                                key={qIdx}
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border text-sm space-y-1.5"
                              >
                                <p className="font-bold text-slate-900 dark:text-white text-base">{q.qEs}</p>
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                                  {q.qHy}
                                </p>
                                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                                  <p className="font-bold text-emerald-800 dark:text-emerald-300 text-sm sm:text-base">
                                    Պատասխան՝ {q.aEs}
                                  </p>
                                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">{q.aHy}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Exercise 14: Poetry Romance */}
                    {ex.id === 14 && (
                      <div className="space-y-4">
                        <div className="p-6 rounded-3xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 space-y-2.5">
                          <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                            <span className="font-black text-base text-amber-900">
                              «Romance del joven marinero» (8 versos octosílabos)
                            </span>
                            <button
                              onClick={() =>
                                playAudio(ex.data.poemLines.map((l: any) => l.es).join(' '))
                              }
                              className="p-1.5 text-amber-800 hover:text-amber-950"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </div>
                          {ex.data.poemLines.map((line: any, lIdx: number) => (
                            <InteractiveText
                              key={lIdx}
                              es={line.es}
                              hy={line.hy}
                              mode={translationMode}
                              className="py-1 px-3 font-serif text-lg"
                            />
                          ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {ex.data.questions.map((q: any, qIdx: number) => (
                            <div
                              key={qIdx}
                              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border text-sm space-y-1.5"
                            >
                              <p className="font-bold text-slate-900 dark:text-white text-base">{q.qEs}</p>
                              <p className="text-indigo-600 font-semibold">{q.qHy}</p>
                              <p className="text-emerald-800 dark:text-emerald-300 font-bold pt-1.5 border-t">
                                {q.aEs} ({q.aHy})
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Exercise 15, 16, 17, 18, 19, 20 */}
                    {ex.id === 15 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200">
                            <h5 className="font-black text-purple-900 text-base mb-1.5">Texto A (Mito)</h5>
                            <InteractiveText
                              es={ex.data.textoA.es}
                              hy={ex.data.textoA.hy}
                              mode={translationMode}
                              showAudio
                            />
                          </div>
                          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200">
                            <h5 className="font-black text-amber-900 text-base mb-1.5">Texto B (Leyenda)</h5>
                            <InteractiveText
                              es={ex.data.textoB.es}
                              hy={ex.data.textoB.hy}
                              mode={translationMode}
                              showAudio
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {ex.data.questions.map((q: any, qIdx: number) => (
                            <div
                              key={qIdx}
                              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border text-sm space-y-1.5"
                            >
                              <p className="font-bold text-slate-900 dark:text-white text-base">{q.qEs}</p>
                              <p className="text-indigo-600 font-semibold">{q.qHy}</p>
                              <p className="text-emerald-800 dark:text-emerald-300 font-bold pt-1.5 border-t">
                                {q.aEs} ({q.aHy})
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {ex.id === 16 && (
                      <div className="space-y-3">
                        {ex.data.items.map((item: any) => (
                          <div
                            key={item.id}
                            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-1.5 text-base"
                          >
                            <p className="text-rose-700 dark:text-rose-400 line-through font-medium">
                              ✗ {item.id}. {item.wrongEs}
                            </p>
                            <p className="text-emerald-800 dark:text-emerald-300 font-extrabold">
                              ✓ {item.correctedEs}
                            </p>
                            <p className="text-slate-500 text-sm font-normal">({item.hy})</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 17 && (
                      <div className="space-y-4">
                        {ex.data.prompts.map((p: any) => (
                          <div
                            key={p.key}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-3"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                                {p.key}
                              </span>
                              <h5 className="font-black text-slate-900 dark:text-white text-base">
                                {p.typeEs}
                              </h5>
                            </div>
                            <InteractiveText
                              es={p.starterEs}
                              hy={p.starterHy}
                              mode={translationMode}
                              highlightEs
                            />
                            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200">
                              <span className="text-xs sm:text-sm font-bold text-indigo-900 dark:text-indigo-200 block mb-1">
                                Շարունակության օրինակ / Modelo de continuación:
                              </span>
                              <InteractiveText
                                es={p.modelEs}
                                hy={p.modelHy}
                                mode={translationMode}
                                showAudio
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 18 && (
                      <div className="space-y-4">
                        {ex.data.items.map((item: any) => (
                          <div
                            key={item.id}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-3"
                          >
                            <h5 className="font-bold text-indigo-700 dark:text-indigo-400 text-base">
                              {item.labelEs} ({item.labelHy})
                            </h5>
                            <div className="text-sm text-slate-700 space-y-1">
                              <p>
                                <strong>Texto original:</strong> {item.originalEs}
                              </p>
                              <p className="text-slate-500">({item.originalHy})</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border space-y-1.5">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block">
                                Texto transformado:
                              </span>
                              <InteractiveText
                                es={item.modelEs}
                                hy={item.modelHy}
                                mode={translationMode}
                                showAudio
                              />
                              {item.elementsEs && (
                                <p className="text-sm text-emerald-800 dark:text-emerald-300 font-bold pt-1.5">
                                  {item.elementsEs} ({item.elementsHy})
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 19 && (
                      <div className="space-y-3.5">
                        {ex.data.questions.map((q: any) => (
                          <div
                            key={q.id}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border space-y-2.5"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                                  {q.qEs}
                                </p>
                                <p className="text-sm text-indigo-600 font-bold">{q.qHy}</p>
                              </div>
                              <button
                                onClick={() => playAudio(q.aEs)}
                                className="p-1 text-slate-400 hover:text-indigo-600"
                              >
                                <Volume2 className="w-5 h-5" />
                              </button>
                            </div>
                            <InteractiveText
                              es={q.aEs}
                              hy={q.aHy}
                              mode={translationMode}
                              highlightEs
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 20 && (
                      <div className="p-6 rounded-3xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {ex.data.options.map((opt: any) => (
                            <div
                              key={opt.key}
                              className="p-4 rounded-2xl bg-white dark:bg-slate-800 border text-sm space-y-1"
                            >
                              <span className="font-bold text-indigo-700 text-base">{opt.titleEs}</span>
                              <p className="text-slate-500">{opt.titleHy}</p>
                            </div>
                          ))}
                        </div>

                        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border space-y-2">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                            Requisitos obligatorios (Պարտադիր պահանջներ)՝
                          </span>
                          <ul className="text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                            {ex.data.requirementsEs.map((req: string, rIdx: number) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <span className="text-indigo-600 font-black">•</span>
                                <span>{req} ({ex.data.requirementsHy[rIdx]})</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXAMEN 1.º ESO */}
        {activeTab === 'exam' && (
          <div className="max-w-4xl mx-auto space-y-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div>
                  <span className="px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider bg-rose-600 text-white rounded-lg">
                    PARTE 3 · ՓՈՐՁՆԱԿԱՆ ՔՆՆՈՒԹՅՈՒՆ
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5">
                    Examen de Práctica — 1.º ESO
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Պատասխանեք 10 թեստային հարցերին՝ ստուգելու ձեր պատրաստվածությունը դասագրքի քննությանը։
                  </p>
                </div>
                {examSubmitted && (
                  <div className="px-5 py-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 text-center">
                    <span className="text-xs sm:text-sm font-bold text-slate-500">Ձեր արդյունքը՝</span>
                    <p className="text-2xl font-black text-indigo-600">
                      {examScore} / {examQuestions.length} ({Math.round((examScore / examQuestions.length) * 100)}%)
                    </p>
                  </div>
                )}
              </div>

              {/* Questions list */}
              <div className="space-y-6 mt-6">
                {examQuestions.map((q, idx) => {
                  const selectedIdx = examAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
                            Հարց {idx + 1} / 10
                          </span>
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                            {q.questionEs}
                          </h4>
                          <h5 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            {q.questionHy}
                          </h5>
                        </div>
                        <button
                          onClick={() => playAudio(q.questionEs)}
                          className="p-1 text-slate-400 hover:text-indigo-600"
                          title="Լսել հարցը"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Options */}
                      <div className="space-y-2.5 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedIdx === optIdx;
                          const isCorrect = optIdx === q.correctIndex;
                          let optionStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-400';
                          if (examSubmitted) {
                            if (isCorrect) {
                              optionStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold';
                            } else if (isSelected && !isCorrect) {
                              optionStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-900 dark:text-rose-200 line-through';
                            }
                          } else if (isSelected) {
                            optionStyle = 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-900 dark:text-indigo-200 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={examSubmitted}
                              onClick={() =>
                                setExamAnswers({
                                  ...examAnswers,
                                  [q.id]: optIdx,
                                })
                              }
                              className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${optionStyle}`}
                            >
                              <span className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <div className="text-sm sm:text-base">
                                <p className="font-semibold text-slate-900 dark:text-slate-100">
                                  {opt.textEs}
                                </p>
                                <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-xs sm:text-sm">
                                  {opt.textHy}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback after submit */}
                      {examSubmitted && (
                        <div
                          className={`p-4 rounded-2xl text-sm space-y-1.5 border ${
                            selectedIdx === q.correctIndex
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                              : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-900 dark:text-rose-200'
                          }`}
                        >
                          <div className="flex items-center gap-2 font-bold text-base">
                            {selectedIdx === q.correctIndex ? (
                              <>
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                <span>Ճիշտ պատասխան! (¡Correcto!)</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-5 h-5 text-rose-600" />
                                <span>Սխալ է (Incorrecto)</span>
                              </>
                            )}
                          </div>
                          <p className="mt-1">
                            <strong>Բացատրություն՝</strong> {q.explanationEs}
                          </p>
                          <p className="text-slate-600 dark:text-slate-300">
                            {q.explanationHy}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800 mt-7">
                {!examSubmitted ? (
                  <button
                    onClick={() => setExamSubmitted(true)}
                    className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-base hover:bg-indigo-700 shadow-md transition-all"
                  >
                    Հանձնել քննությունը (Entregar Examen)
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setExamAnswers({});
                      setExamSubmitted(false);
                    }}
                    className="px-6 py-3 rounded-2xl bg-slate-800 text-white font-bold text-base hover:bg-slate-900 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Կրկնել քննությունը (Repetir)</span>
                  </button>
                )}
                <span className="text-sm font-semibold text-slate-500">
                  Լրացված է՝ {Object.keys(examAnswers).length} / {examQuestions.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: REPASO ORAL Y RESUMEN */}
        {activeTab === 'oral' && (
          <div className="space-y-9">
            {/* Summary rule for 1.º ESO */}
            <div className="p-7 rounded-3xl bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md space-y-4">
              <span className="px-3 py-1 text-xs sm:text-sm font-black uppercase tracking-wider bg-white/20 rounded-lg">
                Para 1.º ESO — 7-րդ դասարանի գլխավոր կանոնը
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Ամենակարևորը աշակերտի համար քննությանը
              </h3>
              <p className="text-base text-amber-50 leading-relaxed">
                Աշակերտը պետք է կարողանա կարդալ անծանոթ պատմություն և ինքնուրույն գրել երեք բան.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-sm">
                  <span className="font-bold block text-base sm:text-lg mb-1">1. ¿Qué tipo es?</span>
                  <span>Ի՞նչ տեսակի պատմություն է։</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-sm">
                  <span className="font-bold block text-base sm:text-lg mb-1">2. ¿Por qué?</span>
                  <span>Ինչո՞ւ է պատկանում այդ տեսակին (հիմնավորում)։</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-sm">
                  <span className="font-bold block text-base sm:text-lg mb-1">3. ¿Qué enseñanza?</span>
                  <span>Ի՞նչ խրատ է փոխանցում (եթե ունի խրատ)։</span>
                </div>
              </div>
            </div>

            {/* Final Summary Table */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Resumen final — Վերջնական ամփոփում (11 Հասկացություն)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-base">
                  <thead className="bg-slate-100 dark:bg-slate-800 font-bold border-b">
                    <tr>
                      <th className="p-3.5 sm:p-4">Concepto</th>
                      <th className="p-3.5 sm:p-4">Հայերեն</th>
                      <th className="p-3.5 sm:p-4">Definición breve</th>
                      <th className="p-3.5 sm:p-4">Հայերեն բացատրություն</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {summaryTable.map((row, idx) => (
                      <tr
                        key={idx}
                        onClick={() => playAudio(row.termEs)}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer"
                        title="Սեղմեք արտասանելու համար"
                      >
                        <td className="p-3.5 sm:p-4 font-extrabold text-indigo-700 dark:text-indigo-400">
                          {row.termEs}
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-800 dark:text-slate-200 font-semibold">{row.termHy}</td>
                        <td className="p-3.5 sm:p-4 text-slate-600 dark:text-slate-300">{row.defEs}</td>
                        <td className="p-3.5 sm:p-4 text-emerald-800 dark:text-emerald-300 font-medium">{row.defHy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 20 Oral Questions */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  PARTE 5. REPASO ORAL — ԲԱՆԱՎՈՐ ԿՐԿՆՈՒԹՅՈՒՆ
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Այս 20 հարցերը նախատեսված են դասի վերջում բանավոր ստուգման համար։
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {oralReviewQuestions.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          Հարց {qIdx + 1}
                        </span>
                        <p className="font-extrabold text-base text-slate-900 dark:text-white">
                          {q.qEs}
                        </p>
                        <p className="text-sm text-slate-500 font-semibold">{q.qHy}</p>
                      </div>
                      <button
                        onClick={() => playAudio(q.aEs)}
                        className="p-1 text-slate-400 hover:text-indigo-600"
                        title="Լսել պատասխանը"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <InteractiveText
                        es={q.aEs}
                        hy={q.aHy}
                        mode={translationMode}
                        highlightEs
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: SOLUCIONARIO (SOLUTIONS KEY) */}
        {activeTab === 'solutions' && (
          <div className="space-y-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider bg-emerald-600 text-white rounded-lg">
                  PARTE 11 · ԼԻԱՐԺԵՔ ՊԱՏԱՍԽԱՆՆԵՐ
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5">
                  Solucionario Completo de los 20 Ejercicios
                </h3>
                <p className="text-sm text-slate-500">
                  Բոլոր վարժությունների և քննության առաջադրանքների ստուգիչ պատասխանները իսպաներեն և հայերեն։
                </p>
              </div>

              {/* Quick Jump Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <a
                    key={num}
                    href={`#sol-ex-${num}`}
                    className="p-2.5 text-center rounded-xl bg-slate-50 dark:bg-slate-800 border hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    Վարժություն {num}
                  </a>
                ))}
              </div>

              {/* Solution cards */}
              <div className="space-y-6 pt-4">
                {practicalExercises.map((ex) => (
                  <div
                    id={`sol-ex-${ex.id}`}
                    key={ex.id}
                    className="p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3.5"
                  >
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-indigo-600 uppercase">
                          {ex.titleEs}
                        </span>
                        <h4 className="font-black text-slate-900 dark:text-white text-lg">
                          {ex.titleHy}
                        </h4>
                      </div>
                      <span className="text-xs sm:text-sm px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        Պատասխաններ ✓
                      </span>
                    </div>

                    {ex.id === 1 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-sm">
                        {ex.data.pairs.map((p: any) => (
                          <div key={p.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold">{p.id}. {p.wordEs}</span> →{' '}
                            <span className="font-black text-indigo-600 text-base">{p.letter}</span>
                            <p className="text-slate-500 text-xs mt-1">{p.defEs}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 2 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                        {ex.data.items.map((item: any) => (
                          <div key={item.id} className="p-3 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-black text-indigo-600 text-base">{item.id}. {item.answer}</span>{' '}
                            — {item.postHy}
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 3 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-sm">
                        {ex.data.questions.map((q: any) => (
                          <div key={q.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold">{q.id}.</span>{' '}
                            <span className="font-black text-emerald-700">
                              {String.fromCharCode(65 + q.correct)}) {q.options[q.correct]}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 4 && (
                      <div className="space-y-2 text-sm">
                        {ex.data.cases.map((c: any) => (
                          <div key={c.id} className="p-3 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold text-indigo-600">{c.id}. {c.tipo}:</span>{' '}
                            <span>{c.justEs} ({c.justHy})</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 5 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-sm">
                        {ex.data.items.map((item: any) => (
                          <div key={item.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold">{item.id}. {item.answer}</span> — {item.answerHy}
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 6 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-sm">
                        {ex.data.items.map((item: any) => (
                          <div key={item.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold">{item.id}.</span> {item.type}
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 7 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-sm">
                        {ex.data.statements.map((s: any) => (
                          <div
                            key={s.id}
                            className={`p-2.5 rounded-xl border font-bold ${
                              s.isTrue
                                ? 'bg-emerald-50 text-emerald-800'
                                : 'bg-rose-50 text-rose-800'
                            }`}
                          >
                            {s.id}. {s.isTrue ? 'Verdadero' : 'Falso'}
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 8 && (
                      <div className="grid grid-cols-3 gap-2.5 text-sm">
                        {ex.data.items.map((item: any) => (
                          <div key={item.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold">{item.id}.</span> {item.part}
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 9 && (
                      <div className="p-4 rounded-xl bg-emerald-50 text-emerald-950 text-sm">
                        <strong>Orden: C → B → D → A</strong>. Clara encuentra al perro perdido,
                        pregunta a los vecinos y encuentra al dueño.
                      </div>
                    )}

                    {ex.id === 10 && (
                      <div className="space-y-2 text-sm">
                        {ex.data.cases.map((c: any) => (
                          <div key={c.id} className="p-3 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold text-indigo-700">{c.id}. Moraleja:</span>{' '}
                            <span>{c.moralEs}</span>{' '}
                            <span className="text-emerald-700">({c.moralHy})</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {(ex.id === 11 || ex.id === 12 || ex.id === 13 || ex.id === 14 || ex.id === 15) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                        {ex.data.questions.map((q: any, qIdx: number) => (
                          <div key={qIdx} className="p-3 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold text-slate-800 dark:text-slate-100">{q.qEs}</span>
                            <p className="text-emerald-800 dark:text-emerald-400 font-bold mt-1">
                              → {q.aEs} ({q.aHy})
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {ex.id === 16 && (
                      <div className="space-y-1.5 text-sm">
                        {ex.data.items.map((item: any) => (
                          <div key={item.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border">
                            <span className="font-bold text-emerald-700">{item.id}. {item.correctedEs}</span>{' '}
                            <span className="text-slate-500">({item.hy})</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {(ex.id === 17 || ex.id === 18 || ex.id === 19 || ex.id === 20) && (
                      <div className="text-sm text-slate-700 dark:text-slate-300">
                        Տես մանրամասն մոդելները և ամբողջական նմուշները «20 Ejercicios Prácticos» բաժնում։
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: VOCABULARIO Y GLOSARIO */}
        {activeTab === 'vocabulary' && (
          <div className="space-y-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div>
                  <span className="px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider bg-indigo-600 text-white rounded-lg">
                    Բառարան և Գլոսարիում
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5">
                    Glosario de Términos Literarios y Vocabulario (1.º ESO)
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Որոնեք ցանկացած գրական հասկացություն կամ բառ իսպաներեն և հայերեն։
                  </p>
                </div>
                <div className="relative w-full sm:w-80">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Փնտրել բառ / Buscar palabra..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-base focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Vocabulary grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 pt-2">
                {filteredVocab.map((w, wIdx) => (
                  <div
                    key={wIdx}
                    onClick={() => playAudio(w.es)}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
                    title="Սեղմեք իսպաներեն արտասանելու համար"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                          {w.es}
                        </span>
                        <div className="flex items-center gap-2">
                          {w.category && (
                            <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                              {w.category}
                            </span>
                          )}
                          <Volume2 className="w-4 h-4 text-slate-400 hover:text-indigo-600" />
                        </div>
                      </div>
                      <p className="text-base font-bold text-emerald-800 dark:text-emerald-400 mt-1.5">
                        {w.hy}
                      </p>
                    </div>
                    {w.example && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-700 italic">
                        «{w.example}»
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {filteredVocab.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-base">
                  <p>Ոչ մի բառ չի գտնվել «{searchQuery}» որոնմամբ։</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-7 mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-bold text-slate-700 dark:text-slate-300 text-base">
            LENGUA CASTELLANA Y LITERATURA — 1.º ESO · LAS NARRACIONES POPULARES / ԺՈՂՈՎՐԴԱԿԱՆ ՊԱՏՈՒՄՆԵՐ
          </p>
          <p>
            Նյութը պատրաստված է Իսպանիայի 1.º ESO (7-րդ դասարան) ծրագրի հիման վրա՝ ամբողջական տեսությամբ, բառապաշարով, ընթերցանությամբ և 20 վարժություններով։
          </p>
        </div>
      </footer>

      {/* Floating Scroll Controls for effortless page scrolling */}
      <aside aria-label="Scroll controls" className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-auto">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-2xl shadow-2xl border-2 border-indigo-400/80 flex items-center justify-center transition-all cursor-pointer group hover:shadow-indigo-500/30"
          title="Վերև / Ir arriba"
          aria-label="Ir arriba"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            })
          }
          className="p-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 active:scale-95 text-white rounded-2xl shadow-2xl border-2 border-slate-600/80 flex items-center justify-center transition-all cursor-pointer group hover:shadow-slate-500/30"
          title="Ներքև / Ir abajo"
          aria-label="Ir abajo"
        >
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </aside>
    </div>
  );
}
