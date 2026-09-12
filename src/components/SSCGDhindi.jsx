// SSCGDMockTest.jsx
import React, { useState, useEffect, useRef } from "react";

// --- Question Banks ---

// Mathematics Questions (30 questions)
const mathQuestions = [
  { question: "25 + 37 क्या है?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "15 × 6 क्या है?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "144 का वर्गमूल क्या है?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "100 ÷ 4 क्या है?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "3⁴ क्या है?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "7 × 8 क्या है?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "45 + 56 क्या है?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "12 × 12 क्या है?", options: ["124", "134", "144", "154"], answer: "144" },
  { question: "π (पाई) का अनुमानित मान क्या है?", options: ["3.14", "3.41", "3.13", "3.11"], answer: "3.14" },
  { question: "1/2 + 1/2 क्या है?", options: ["1/4", "1/2", "1", "2"], answer: "1" },
  { question: "5! (फैक्टोरियल) क्या है?", options: ["20", "60", "120", "240"], answer: "120" },
  { question: "200 का 25% क्या है?", options: ["25", "50", "75", "100"], answer: "50" },
  { question: "5, 10, 15 का औसत क्या है?", options: ["8", "10", "12", "15"], answer: "10" },
  { question: "18 × 5 क्या है?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "144 ÷ 12 क्या है?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "2⁶ क्या है?", options: ["32", "48", "64", "72"], answer: "64" },
  { question: "9 × 9 क्या है?", options: ["71", "81", "91", "99"], answer: "81" },
  { question: "150 + 250 क्या है?", options: ["300", "350", "400", "450"], answer: "400" },
  { question: "500 का 20% क्या है?", options: ["50", "80", "100", "120"], answer: "100" },
  { question: "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?", options: ["24", "36", "48", "72"], answer: "36" },
  { question: "√625 क्या है?", options: ["15", "20", "25", "30"], answer: "25" },
  { question: "15% of 400 = ?", options: ["40", "50", "60", "70"], answer: "60" },
  { question: "एक त्रिभुज के कोणों का योग कितना होता है?", options: ["90°", "180°", "270°", "360°"], answer: "180°" },
  { question: "यदि x + 5 = 12, तो x = ?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "7² + 3² = ?", options: ["48", "58", "68", "78"], answer: "58" },
  { question: "एक वर्ग का क्षेत्रफल 64 वर्ग सेमी है। इसकी भुजा क्या है?", options: ["6 सेमी", "7 सेमी", "8 सेमी", "9 सेमी"], answer: "8 सेमी" },
  { question: "0.5 × 0.2 = ?", options: ["0.1", "0.01", "1.0", "0.001"], answer: "0.1" },
  { question: "3/4 + 1/4 = ?", options: ["1/2", "3/4", "1", "2"], answer: "1" },
  { question: "एक दिन में कितने मिनट होते हैं?", options: ["1200", "1440", "1600", "1800"], answer: "1440" },
  { question: "1000 का 10% का 10% = ?", options: ["1", "10", "100", "1000"], answer: "10" }
];

// Reasoning Questions (26 questions)
const reasoningQuestions = [
  { question: "विषम को खोजें: 2, 4, 6, 9", options: ["2", "4", "6", "9"], answer: "9" },
  { question: "यदि 'APPLE' को 'BQQMF' लिखा जाता है, तो 'MANGO' को क्या लिखा जाएगा?", options: ["NBOF", "NBPH", "NBOH", "NBOI"], answer: "NBOH" },
  { question: "अगली संख्या ज्ञात करें: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], answer: "30" },
  { question: "कौन सा शब्द भिन्न है? सेब, आम, गाजर, केला", options: ["सेब", "आम", "गाजर", "केला"], answer: "गाजर" },
  { question: "अगला अक्षर क्या होगा: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "यदि 2=5, 3=10, 4=17, तो 5=?", options: ["22", "24", "26", "28"], answer: "26" },
  { question: "लुप्त संख्या ज्ञात करें: 2, 5, 10, 17, ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "विषम शब्द चुनें: मेज, कुर्सी, स्टूल, किताब", options: ["मेज", "कुर्सी", "स्टूल", "किताब"], answer: "किताब" },
  { question: "यदि 'PEN' को 'QFO' लिखा जाता है, तो 'BOOK' को क्या लिखा जाएगा?", options: ["CPPL", "CQPL", "CPQL", "CQOL"], answer: "CPPL" },
  { question: "अगली संख्या क्या है: 1, 4, 9, 16, ?", options: ["20", "22", "25", "30"], answer: "25" },
  { question: "विषम को खोजें: कार, बस, बाइक, हवाई जहाज", options: ["कार", "बस", "बाइक", "हवाई जहाज"], answer: "हवाई जहाज" },
  { question: "यदि 'A' = 1, 'B' = 2, तो 'Z' = ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "अगला क्या आएगा: 3, 8, 13, 18, ?", options: ["21", "22", "23", "24"], answer: "23" },
  { question: "विषम संख्या चुनें: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30", options: ["3", "6", "9", "12"], answer: "12" },
  { question: "यदि 'CAT' को 'DBU' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?", options: ["EPH", "EPI", "EQH", "EPG"], answer: "EPH" },
  { question: "अगला क्या आएगा: Z, X, V, T, ?", options: ["R", "S", "Q", "P"], answer: "R" },
  { question: "लुप्त संख्या ज्ञात करें: 7, 14, 28, 56, ?", options: ["84", "96", "102", "112"], answer: "112" },
  { question: "विषम शब्द चुनें: पेन, पेंसिल, रबर, किताब, मेज", options: ["पेन", "पेंसिल", "रबर", "किताब", "मेज"], answer: "मेज" },
  { question: "यदि 3=7, 4=13, 5=21, तो 6=?", options: ["27", "29", "31", "33"], answer: "31" },
  { question: "अगली संख्या क्या है: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "यदि 'MORNING' को 'NPSOJOH' लिखा जाता है, तो 'EVENING' को क्या लिखा जाएगा?", options: ["FWFNJOH", "FWFNJOI", "FWFNOH", "FWFNJPH"], answer: "FWFNJOH" },
  { question: "अगली संख्या: 1, 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "14"], answer: "13" },
  { question: "विषम चुनें: 121, 144, 169, 200", options: ["121", "144", "169", "200"], answer: "200" },
  { question: "यदि 'RED' = 27, 'BLUE' = 40, तो 'GREEN' = ?", options: ["44", "49", "54", "59"], answer: "49" },
  { question: "अगला अक्षर: B, D, G, K, ?", options: ["N", "O", "P", "Q"], answer: "P" },
  { question: "लुप्त संख्या: 4, 9, 16, 25, ?", options: ["30", "36", "42", "49"], answer: "36" }
];

// General Knowledge Questions (26 questions)
const gkQuestions = [
  { question: "भारत की राजधानी क्या है?", options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], answer: "नई दिल्ली" },
  { question: "किस देश को 'उगते सूरज की भूमि' कहा जाता है?", options: ["चीन", "जापान", "दक्षिण कोरिया", "भारत"], answer: "जापान" },
  { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "बाघ", "हाथी", "मोर"], answer: "बाघ" },
  { question: "2026 में भारत के राष्ट्रपति कौन हैं?", options: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "प्रणब मुखर्जी", "एपीजे अब्दुल कलाम"], answer: "द्रौपदी मुर्मू" },
  { question: "भारत का राष्ट्रीय पुष्प क्या है?", options: ["कमल", "गुलाब", "सूरजमुखी", "गेंदा"], answer: "कमल" },
  { question: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?", options: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"], answer: "राजस्थान" },
  { question: "भारतीय संविधान के जनक कौन कहलाते हैं?", options: ["महात्मा गांधी", "डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"], answer: "डॉ. बी.आर. अंबेडकर" },
  { question: "किस नदी को 'दक्षिण की गंगा' कहा जाता है?", options: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"], answer: "कावेरी" },
  { question: "GDP का पूर्ण रूप क्या है?", options: ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "वैश्विक घरेलू उत्पाद", "विकास और वृद्धि योजना"], answer: "सकल घरेलू उत्पाद" },
  { question: "भारत के किस राज्य की जनसंख्या सबसे अधिक है?", options: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"], answer: "उत्तर प्रदेश" },
  { question: "भारतीय राष्ट्रीय गान किसने लिखा?", options: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"], answer: "रवींद्रनाथ टैगोर" },
  { question: "जापान की मुद्रा क्या है?", options: ["युआन", "येन", "वोन", "रिंगित"], answer: "येन" },
  { question: "किस ग्रह को 'लाल ग्रह' कहा जाता है?", options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"], answer: "मंगल" },
  { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"], answer: "प्रशांत महासागर" },
  { question: "टेलीफोन का आविष्कार किसने किया?", options: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "अल्बर्ट आइंस्टीन"], answer: "अलेक्जेंडर ग्राहम बेल" },
  { question: "पानी का रासायनिक सूत्र क्या है?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: "H2O" },
  { question: "सबसे छोटा महाद्वीप कौन सा है?", options: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"], answer: "ऑस्ट्रेलिया" },
  { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "हॉकी", "फुटबॉल", "बैडमिंटन"], answer: "हॉकी" },
  { question: "भारत के पहले प्रधानमंत्री कौन थे?", options: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "राजेंद्र प्रसाद"], answer: "जवाहरलाल नेहरू" },
  { question: "ऑस्ट्रेलिया की राजधानी क्या है?", options: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"], answer: "कैनबरा" },
  { question: "संयुक्त राष्ट्र का मुख्यालय कहाँ है?", options: ["जिनेवा", "न्यूयॉर्क", "पेरिस", "लंदन"], answer: "न्यूयॉर्क" },
  { question: "भारत का सबसे लंबा बांध कौन सा है?", options: ["भाखड़ा बांध", "हीराकुंड बांध", "सरदार सरोवर बांध", "नागार्जुन सागर बांध"], answer: "हीराकुंड बांध" },
  { question: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?", options: ["थार", "गोबी", "सहारा", "कालाहारी"], answer: "सहारा" },
  { question: "भारत में हरित क्रांति के जनक कौन हैं?", options: ["एम.एस. स्वामीनाथन", "वर्गीज कुरियन", "नॉर्मन बोरलॉग", "जे.आर.डी. टाटा"], answer: "एम.एस. स्वामीनाथन" },
  { question: "माउंट एवरेस्ट की ऊंचाई कितनी है?", options: ["8,648 मीटर", "8,748 मीटर", "8,848 मीटर", "8,948 मीटर"], answer: "8,848 मीटर" },
  { question: "भारत का राष्ट्रीय गीत किसने लिखा?", options: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"], answer: "बंकिम चंद्र चट्टोपाध्याय" }
];

// English Questions (26 questions)
const englishQuestions = [
  { question: "'child' का बहुवचन क्या है?", options: ["Childs", "Children", "Childrens", "Childes"], answer: "Children" },
  { question: "'happy' का पर्यायवाची शब्द क्या है?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
  { question: "'go' का past tense क्या है?", options: ["Goed", "Went", "Gone", "Going"], answer: "Went" },
  { question: "संज्ञा (Noun) कौन सा है?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Happiness" },
  { question: "'big' का विलोम शब्द क्या है?", options: ["Large", "Small", "Tall", "Wide"], answer: "Small" },
  { question: "सही वर्तनी चुनें:", options: ["Acomodate", "Accommodate", "Acommodate", "Accomadate"], answer: "Accommodate" },
  { question: "'quick' का पर्यायवाची शब्द क्या है?", options: ["Slow", "Fast", "Lazy", "Steady"], answer: "Fast" },
  { question: "पूर्वसर्ग (Preposition) कौन सा है?", options: ["Run", "In", "Happy", "Quickly"], answer: "In" },
  { question: "'mouse' का बहुवचन क्या है?", options: ["Mouses", "Mice", "Mices", "Mousies"], answer: "Mice" },
  { question: "'write' का past tense क्या है?", options: ["Writed", "Wrote", "Written", "Writing"], answer: "Wrote" },
  { question: "सही आर्टिकल चुनें: I saw ___ elephant.", options: ["A", "An", "The", "None"], answer: "An" },
  { question: "'hot' का विलोम शब्द क्या है?", options: ["Warm", "Cold", "Spicy", "Boiling"], answer: "Cold" },
  { question: "क्रिया (Verb) कौन सा शब्द है?", options: ["Beautiful", "Happiness", "Run", "Quickly"], answer: "Run" },
  { question: "'good' का comparative form क्या है?", options: ["Gooder", "Better", "Best", "More good"], answer: "Better" },
  { question: "'foot' का बहुवचन क्या है?", options: ["Foots", "Feet", "Feets", "Footes"], answer: "Feet" },
  { question: "विशेषण (Adjective) कौन सा है?", options: ["Slowly", "Beautiful", "Run", "Happiness"], answer: "Beautiful" },
  { question: "'see' का past tense क्या है?", options: ["Seed", "Saw", "Seen", "Seeing"], answer: "Saw" },
  { question: "सही सर्वनाम चुनें: ___ is my friend.", options: ["He", "Him", "His", "Himself"], answer: "He" },
  { question: "'city' का बहुवचन क्या है?", options: ["Citys", "Cities", "Cityes", "Cites"], answer: "Cities" },
  { question: "समुच्चयबोधक (Conjunction) कौन सा है?", options: ["And", "Run", "Happy", "Quickly"], answer: "And" },
  { question: "Choose the correct sentence:", options: ["She don't like coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She don't likes coffee."], answer: "She doesn't like coffee." },
  { question: "What is the antonym of 'ancient'?", options: ["Old", "Modern", "Historic", "Past"], answer: "Modern" },
  { question: "Fill in the blank: He is good ___ mathematics.", options: ["in", "at", "on", "for"], answer: "at" },
  { question: "What is the past participle of 'eat'?", options: ["Ate", "Eaten", "Eating", "Eats"], answer: "Eaten" },
  { question: "'Beautiful' is a/an:", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: "Adjective" },
  { question: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: "Receive" }
];

// --- Helper: Get random questions ---
const getRandomQuestions = (category, count) => {
  const shuffled = [...category].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, category.length));
};

// --- Subject Configuration ---
const SUBJECTS = [
  { id: 'math', name: 'गणित / Mathematics', nameEn: 'Mathematics', color: '#4299e1', icon: '📐' },
  { id: 'gk', name: 'सामान्य ज्ञान / General Knowledge', nameEn: 'General Knowledge', color: '#48bb78', icon: '🌍' },
  { id: 'reasoning', name: 'तर्कशक्ति / Reasoning', nameEn: 'Reasoning', color: '#ed8936', icon: '🧩' },
  { id: 'english', name: 'अंग्रेजी / English', nameEn: 'English', color: '#9f7aea', icon: '📖' }
];

const SUBJECT_TIME = 15 * 60; // 15 minutes
const QUESTIONS_PER_SUBJECT = 25;

// --- Component ---
export default function SSCGDMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState('hi');
  const [subjectQuestions, setSubjectQuestions] = useState({});
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(SUBJECT_TIME);
  const [subjectCompleted, setSubjectCompleted] = useState(false);
  const [resultDetails, setResultDetails] = useState([]);
  const [showSubjectTransition, setShowSubjectTransition] = useState(false);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const resultRef = useRef(null);

  // Timer effect
  useEffect(() => {
    if (started && !submitted && !subjectCompleted && timer > 0) {
      const t = setInterval(() => {
        setTimer((p) => {
          if (p <= 60) setShowTimerWarning(true);
          return p - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
    if (timer === 0 && started && !submitted && !subjectCompleted) {
      handleSubjectComplete();
    }
  }, [started, submitted, timer, subjectCompleted]);

  const startExam = () => {
    const questions = {
      math: getRandomQuestions(mathQuestions, QUESTIONS_PER_SUBJECT),
      gk: getRandomQuestions(gkQuestions, QUESTIONS_PER_SUBJECT),
      reasoning: getRandomQuestions(reasoningQuestions, QUESTIONS_PER_SUBJECT),
      english: getRandomQuestions(englishQuestions, QUESTIONS_PER_SUBJECT)
    };
    setSubjectQuestions(questions);
    setStarted(true);
    setCurrentSubjectIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimer(SUBJECT_TIME);
    setSubjectCompleted(false);
    setShowTimerWarning(false);
  };

  const handleSubjectComplete = () => {
    setSubjectCompleted(true);
    setShowSubjectTransition(true);
    setShowTimerWarning(false);
  };

  const goToNextSubject = () => {
    if (currentSubjectIndex < SUBJECTS.length - 1) {
      setCurrentSubjectIndex(currentSubjectIndex + 1);
      setCurrentQuestionIndex(0);
      setTimer(SUBJECT_TIME);
      setSubjectCompleted(false);
      setShowSubjectTransition(false);
      setShowTimerWarning(false);
    } else {
      submitExam();
    }
  };

  const submitExam = () => {
    const details = [];

    SUBJECTS.forEach((subject) => {
      const questions = subjectQuestions[subject.id] || [];
      questions.forEach((q, idx) => {
        const key = `${subject.id}-${idx}`;
        const userAns = answers[key];
        const isCorrect = userAns === q.answer;
        const isAttempted = userAns !== undefined && userAns !== null;

        details.push({
          subject: subject.nameEn,
          subjectNameHi: subject.name,
          subjectId: subject.id,
          color: subject.color,
          icon: subject.icon,
          question: q.question,
          options: q.options,
          correctAnswer: q.answer,
          userAnswer: userAns || (language === 'hi' ? "प्रयास नहीं किया" : "Not Attempted"),
          isCorrect: isCorrect,
          isAttempted: isAttempted,
        });
      });
    });

    setResultDetails(details);
    setSubmitted(true);
  };

  const downloadResult = () => {
    if (resultRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const content = resultRef.current.innerHTML;
        printWindow.document.write(`
          <html>
            <head>
              <title>SSC CGL Result</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .result-card { text-align: center; padding: 20px; border: 2px solid #1a1a2e; border-radius: 10px; }
                .item { padding: 10px; margin: 5px 0; border-left: 4px solid #48bb78; }
                .item.wrong { border-left-color: #fc8181; }
                .item.skipped { border-left-color: #a0aec0; }
              </style>
            </head>
            <body>${content}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const toggleLanguage = () => {
    if (!started) {
      setLanguage(language === 'hi' ? 'en' : 'hi');
    }
  };

  const formatTime = (seconds) => {
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  };

  // Calculate result stats
  const getStats = () => {
    const total = resultDetails.length;
    const correct = resultDetails.filter(d => d.isCorrect).length;
    const wrong = resultDetails.filter(d => d.isAttempted && !d.isCorrect).length;
    const notAttempted = resultDetails.filter(d => !d.isAttempted).length;
    return { total, correct, wrong, notAttempted };
  };

  // Home Page
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "25px 20px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          textAlign: "center",
          maxWidth: "520px",
          width: "100%"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🎯</div>
          <h1 style={{ color: "#1a1a2e", marginBottom: "3px", fontSize: "22px", fontWeight: "700" }}>
            SSC CGL Mock Test
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Combined Graduate Level Examination
          </p>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #1a1a2e, #0f3460)", margin: "10px auto", width: "60px" }}></div>

          {/* Language Toggle */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginTop: "15px", marginBottom: "15px" }}>
            <span style={{ fontSize: "14px", fontWeight: language === 'hi' ? "700" : "400", color: language === 'hi' ? "#1a1a2e" : "#999" }}>हिन्दी</span>
            <button onClick={toggleLanguage} style={{
              width: "50px", height: "26px", borderRadius: "13px",
              background: language === 'hi' ? "#0f3460" : "#4a90d9",
              border: "none", cursor: "pointer", position: "relative", transition: "all 0.3s ease"
            }}>
              <div style={{
                width: "20px", height: "20px", borderRadius: "50%", background: "white",
                position: "absolute", top: "3px", left: language === 'hi' ? "3px" : "27px",
                transition: "all 0.3s ease", boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}></div>
            </button>
            <span style={{ fontSize: "14px", fontWeight: language === 'en' ? "700" : "400", color: language === 'en' ? "#1a1a2e" : "#999" }}>English</span>
          </div>

          {/* Exam Pattern */}
          <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "12px", marginTop: "10px", textAlign: "left" }}>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#1a1a2e" }}>
              📋 {language === 'hi' ? "परीक्षा पैटर्न" : "Exam Pattern"}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {SUBJECTS.map((subject) => (
                <div key={subject.id} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "8px 10px", backgroundColor: "white", borderRadius: "8px",
                  borderLeft: `4px solid ${subject.color}`
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{subject.icon}</span>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#2d3748" }}>
                      {language === 'hi' ? subject.name : subject.nameEn}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#718096" }}>{QUESTIONS_PER_SUBJECT} Q | 15 min</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "12px" }}>
            <div style={{ backgroundColor: "#e8f0fe", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#666" }}>{language === 'hi' ? "📝 कुल प्रश्न" : "📝 Total Qs"}</div>
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1a1a2e" }}>100</div>
            </div>
            <div style={{ backgroundColor: "#e8f0fe", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#666" }}>{language === 'hi' ? "⏱️ कुल समय" : "⏱️ Total Time"}</div>
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1a1a2e" }}>60 min</div>
            </div>
            <div style={{ backgroundColor: "#e8f0fe", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#666" }}>{language === 'hi' ? "🎯 कुल अंक" : "🎯 Total Marks"}</div>
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1a1a2e" }}>100</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#fff8e1", padding: "10px", borderRadius: "10px",
            marginTop: "10px", fontSize: "12px", color: "#856404", textAlign: "left"
          }}>
            <strong>⚠️ {language === 'hi' ? "महत्वपूर्ण निर्देश:" : "Important Instructions:"}</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>{language === 'hi' ? "प्रत्येक विषय के लिए 15 मिनट का समय निर्धारित है" : "15 minutes allotted per subject"}</li>
              <li>{language === 'hi' ? "समय समाप्त होने पर अगला विषय स्वतः शुरू होगा" : "Subject auto-advances when time expires"}</li>
              <li>{language === 'hi' ? "पिछले विषय में वापस नहीं जा सकते" : "Cannot return to previous subject"}</li>
              <li>{language === 'hi' ? "कोई नकारात्मक अंकन नहीं" : "No negative marking"}</li>
            </ul>
          </div>

          <button onClick={startExam} style={{
            padding: "14px 40px", fontSize: "18px", fontWeight: "bold",
            background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
            color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
            marginTop: "20px", width: "100%",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0 4px 15px rgba(15, 52, 96, 0.4)"
          }}>
            {language === 'hi' ? "🚀 परीक्षा शुरू करें" : "🚀 Start Exam"}
          </button>
        </div>
      </div>
    );
  }

  // Subject Transition Screen
  if (showSubjectTransition) {
    const nextSubject = SUBJECTS[currentSubjectIndex + 1];
    const isLastSubject = currentSubjectIndex >= SUBJECTS.length - 1;
    const currentSubject = SUBJECTS[currentSubjectIndex];

    return (
      <div style={{
        minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white", padding: "35px 25px", borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)", textAlign: "center",
          maxWidth: "400px", width: "100%"
        }}>
          <div style={{ fontSize: "56px", marginBottom: "10px" }}>
            {isLastSubject ? "🏁" : "⏰"}
          </div>
          <h2 style={{ color: "#1a1a2e", fontSize: "20px", marginBottom: "8px" }}>
            {isLastSubject
              ? (language === 'hi' ? "सभी विषय पूर्ण!" : "All Subjects Complete!")
              : (language === 'hi' ? "विषय समाप्त!" : "Subject Complete!")
            }
          </h2>

          <div style={{
            backgroundColor: "#f0f5ff", borderRadius: "12px", padding: "15px",
            margin: "15px 0", border: `2px solid ${currentSubject.color}`
          }}>
            <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
              {language === 'hi' ? "पूर्ण किया गया:" : "Completed:"}
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold", color: currentSubject.color }}>
              {currentSubject.icon} {language === 'hi' ? currentSubject.name : currentSubject.nameEn}
            </div>
          </div>

          {!isLastSubject ? (
            <>
              <div style={{
                backgroundColor: "#fff8e1", borderRadius: "12px",
                padding: "15px", margin: "15px 0"
              }}>
                <div style={{ fontSize: "12px", color: "#856404", marginBottom: "5px" }}>
                  {language === 'hi' ? "अगला विषय:" : "Next Subject:"}
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold", color: nextSubject.color }}>
                  {nextSubject.icon} {language === 'hi' ? nextSubject.name : nextSubject.nameEn}
                </div>
              </div>
              <button onClick={goToNextSubject} style={{
                padding: "14px 35px", fontSize: "16px", fontWeight: "bold",
                background: `linear-gradient(135deg, ${nextSubject.color} 0%, ${nextSubject.color}dd 100%)`,
                color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
                width: "100%", boxShadow: `0 4px 15px ${nextSubject.color}66`,
                transition: "all 0.3s ease"
              }}>
                {language === 'hi' ? "▶️ अगला विषय शुरू करें" : "▶️ Start Next Subject"}
              </button>
            </>
          ) : (
            <button onClick={submitExam} style={{
              padding: "14px 35px", fontSize: "16px", fontWeight: "bold",
              background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
              color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
              width: "100%", boxShadow: "0 4px 15px rgba(72, 187, 120, 0.4)",
              transition: "all 0.3s ease"
            }}>
              {language === 'hi' ? "📊 परिणाम देखें" : "📊 View Results"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ====== RESULT PAGE ======
  if (submitted) {
    const stats = getStats();
    const percentage = ((stats.correct / stats.total) * 100).toFixed(2);
    const isPassed = percentage >= 60;

    // Subject-wise stats
    const subjectScores = {};
    resultDetails.forEach((item) => {
      if (!subjectScores[item.subjectId]) {
        subjectScores[item.subjectId] = { correct: 0, wrong: 0, notAttempted: 0, total: 0 };
      }
      subjectScores[item.subjectId].total++;
      if (item.isCorrect) subjectScores[item.subjectId].correct++;
      else if (item.isAttempted) subjectScores[item.subjectId].wrong++;
      else subjectScores[item.subjectId].notAttempted++;
    });

    return (
      <div style={{
        minHeight: "100vh", background: "#f5f7fa", padding: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>

          {/* ===== Main Result Card ===== */}
          <div ref={resultRef} style={{
            backgroundColor: "white", borderRadius: "16px", padding: "25px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)", textAlign: "center", marginBottom: "20px"
          }}>
            <h1 style={{ fontSize: "24px", marginBottom: "5px", color: "#2d3748" }}>
              {isPassed ? "🎉 Congratulations!" : "📖 Keep Practicing!"}
            </h1>

            {/* Score Circle */}
            <div style={{
              width: "110px", height: "110px", borderRadius: "50%",
              background: isPassed ? "#d4edda" : "#f8d7da",
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", margin: "18px auto",
              border: `4px solid ${isPassed ? "#48bb78" : "#fc8181"}`
            }}>
              <div style={{ fontSize: "34px", fontWeight: "bold", color: isPassed ? "#276749" : "#9b2c2c" }}>
                {stats.correct}
              </div>
              <div style={{ fontSize: "12px", color: "#718096" }}>/ {stats.total}</div>
            </div>

            <div style={{
              fontSize: "20px", color: isPassed ? "#28a745" : "#dc3545",
              marginTop: "5px", fontWeight: "700"
            }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Failed"}
            </div>

            {/* ===== Right / Wrong / Not Attempted Cards ===== */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              gap: "12px", marginTop: "22px"
            }}>
              {/* Right */}
              <div style={{
                backgroundColor: "#f0fff4", border: "2px solid #48bb78",
                borderRadius: "12px", padding: "15px 10px"
              }}>
                <div style={{ fontSize: "26px", marginBottom: "3px" }}>✅</div>
                <div style={{ fontSize: "26px", fontWeight: "bold", color: "#276749" }}>
                  {stats.correct}
                </div>
                <div style={{ fontSize: "12px", color: "#48bb78", fontWeight: "600" }}>
                  {language === 'hi' ? "सही" : "Right"}
                </div>
              </div>

              {/* Wrong */}
              <div style={{
                backgroundColor: "#fff5f5", border: "2px solid #fc8181",
                borderRadius: "12px", padding: "15px 10px"
              }}>
                <div style={{ fontSize: "26px", marginBottom: "3px" }}>❌</div>
                <div style={{ fontSize: "26px", fontWeight: "bold", color: "#9b2c2c" }}>
                  {stats.wrong}
                </div>
                <div style={{ fontSize: "12px", color: "#fc8181", fontWeight: "600" }}>
                  {language === 'hi' ? "गलत" : "Wrong"}
                </div>
              </div>

              {/* Not Attempted */}
              <div style={{
                backgroundColor: "#f7fafc", border: "2px solid #a0aec0",
                borderRadius: "12px", padding: "15px 10px"
              }}>
                <div style={{ fontSize: "26px", marginBottom: "3px" }}>➖</div>
                <div style={{ fontSize: "26px", fontWeight: "bold", color: "#4a5568" }}>
                  {stats.notAttempted}
                </div>
                <div style={{ fontSize: "12px", color: "#a0aec0", fontWeight: "600" }}>
                  {language === 'hi' ? "प्रयास नहीं किया" : "Not Attempted"}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "15px", fontSize: "13px", color: "#718096" }}>
              {language === 'hi' ? "भाषा: हिन्दी" : "Language: English"}
            </div>
          </div>

          {/* ===== Subject-wise Breakdown ===== */}
          <div style={{
            backgroundColor: "white", borderRadius: "16px", padding: "20px 15px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)", marginBottom: "20px"
          }}>
            <h2 style={{
              borderBottom: "2px solid #eee", paddingBottom: "12px",
              marginBottom: "15px", fontSize: "18px", color: "#2d3748"
            }}>
              {language === 'hi' ? "📊 विषय-वार प्रदर्शन" : "📊 Subject-wise Performance"}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {SUBJECTS.map((subject) => {
                const s = subjectScores[subject.id] || { correct: 0, wrong: 0, notAttempted: 0, total: 0 };
                const pct = s.total > 0 ? ((s.correct / s.total) * 100).toFixed(0) : 0;
                return (
                  <div key={subject.id} style={{
                    backgroundColor: "#f8f9fa", borderRadius: "10px",
                    padding: "12px 15px", borderLeft: `4px solid ${subject.color}`
                  }}>
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center", marginBottom: "8px"
                    }}>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#2d3748" }}>
                        {subject.icon} {language === 'hi' ? subject.name : subject.nameEn}
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: subject.color }}>
                        {s.correct}/{s.total} ({pct}%)
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", fontSize: "11px", flexWrap: "wrap" }}>
                      <span style={{
                        backgroundColor: "#f0fff4", color: "#276749",
                        padding: "3px 8px", borderRadius: "6px", fontWeight: "600"
                      }}>
                        ✅ {language === 'hi' ? "सही" : "Right"}: {s.correct}
                      </span>
                      <span style={{
                        backgroundColor: "#fff5f5", color: "#9b2c2c",
                        padding: "3px 8px", borderRadius: "6px", fontWeight: "600"
                      }}>
                        ❌ {language === 'hi' ? "गलत" : "Wrong"}: {s.wrong}
                      </span>
                      <span style={{
                        backgroundColor: "#edf2f7", color: "#4a5568",
                        padding: "3px 8px", borderRadius: "6px", fontWeight: "600"
                      }}>
                        ➖ {language === 'hi' ? "छोड़ा" : "Skipped"}: {s.notAttempted}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Download Button */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button onClick={downloadResult} style={{
              padding: "12px 30px", fontSize: "15px", fontWeight: "bold",
              background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
              color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
              boxShadow: "0 4px 15px rgba(72, 187, 120, 0.4)", transition: "all 0.3s ease"
            }}>
              📥 Download / Print Result
            </button>
          </div>

          {/* ===== Answer Review ===== */}
          <div style={{
            backgroundColor: "white", borderRadius: "16px", padding: "20px 15px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{
              borderBottom: "2px solid #eee", paddingBottom: "12px",
              marginBottom: "15px", fontSize: "18px", color: "#2d3748"
            }}>
              {language === 'hi' ? "📋 उत्तर समीक्षा" : "📋 Answer Review"}
            </h2>

            {resultDetails.map((item, index) => {
              const subject = SUBJECTS.find(s => s.id === item.subjectId);
              let bgColor, borderColor, statusIcon;
              if (item.isCorrect) {
                bgColor = "#f0fff4"; borderColor = "#48bb78"; statusIcon = "✅";
              } else if (item.isAttempted) {
                bgColor = "#fff5f5"; borderColor = "#fc8181"; statusIcon = "❌";
              } else {
                bgColor = "#f7fafc"; borderColor = "#a0aec0"; statusIcon = "➖";
              }

              return (
                <div key={index} style={{
                  backgroundColor: bgColor,
                  borderLeft: `4px solid ${borderColor}`,
                  padding: "12px 15px", marginBottom: "12px", borderRadius: "8px"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                      <span style={{
                        display: "inline-block", padding: "2px 8px", borderRadius: "10px",
                        fontSize: "10px", backgroundColor: subject?.color + "22",
                        color: subject?.color, fontWeight: "600", marginBottom: "5px"
                      }}>
                        {subject?.icon} {language === 'hi' ? subject?.name : subject?.nameEn}
                      </span>
                      <h4 style={{ margin: "3px 0", fontSize: "14px", color: "#2d3748" }}>
                        Q{index + 1}. {item.question}
                      </h4>
                    </div>
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>{statusIcon}</span>
                  </div>
                  <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                    <p style={{ margin: "3px 0" }}>
                      <strong>{language === 'hi' ? "आपका उत्तर:" : "Your Answer:"}</strong>{" "}
                      <span style={{
                        color: item.isCorrect ? "#48bb78" : item.isAttempted ? "#fc8181" : "#a0aec0"
                      }}>
                        {item.userAnswer}
                      </span>
                    </p>
                    {!item.isCorrect && (
                      <p style={{ margin: "3px 0" }}>
                        <strong>{language === 'hi' ? "सही उत्तर:" : "Correct Answer:"}</strong>{" "}
                        <span style={{ color: "#48bb78" }}>{item.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px", paddingBottom: "20px" }}>
            <button onClick={() => {
              setStarted(false);
              setSubmitted(false);
              setAnswers({});
              setResultDetails([]);
              setTimer(SUBJECT_TIME);
              setShowTimerWarning(false);
              setSubjectQuestions({});
              setCurrentSubjectIndex(0);
              setCurrentQuestionIndex(0);
              setSubjectCompleted(false);
              setShowSubjectTransition(false);
            }} style={{
              padding: "14px 35px", fontSize: "16px", fontWeight: "bold",
              background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
              color: "white", border: "none", borderRadius: "50px", cursor: "pointer",
              width: "100%", maxWidth: "300px",
              boxShadow: "0 4px 15px rgba(15, 52, 96, 0.4)"
            }}>
              {language === 'hi' ? "🔄 नई परीक्षा लें" : "🔄 Take New Test"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page
  const currentSubject = SUBJECTS[currentSubjectIndex];
  const currentQuestions = subjectQuestions[currentSubject.id] || [];
  const q = currentQuestions[currentQuestionIndex] || { question: "", options: [], answer: "" };
  const answeredInSubject = currentQuestions.filter((_, idx) =>
    answers[`${currentSubject.id}-${idx}`]
  ).length;

  const handleAnswer = (option) => {
    const key = `${currentSubject.id}-${currentQuestionIndex}`;
    setAnswers({ ...answers, [key]: option });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#f5f7fa", padding: "10px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Subject Header */}
        <div style={{
          backgroundColor: currentSubject.color, borderRadius: "12px",
          padding: "12px 16px", marginBottom: "10px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          color: "white", boxShadow: `0 4px 15px ${currentSubject.color}44`
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>{currentSubject.icon}</span>
            <div>
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                {language === 'hi' ? currentSubject.name : currentSubject.nameEn}
              </div>
              <div style={{ fontSize: "11px", opacity: 0.9 }}>
                {language === 'hi' ? "विषय" : "Subject"} {currentSubjectIndex + 1}/{SUBJECTS.length}
              </div>
            </div>
          </div>
          <div style={{
            fontSize: "22px", fontWeight: "bold",
            backgroundColor: timer < 60 ? "#fc8181" : "rgba(255,255,255,0.2)",
            padding: "6px 12px", borderRadius: "10px", color: "white"
          }}>
            ⏱️ {formatTime(timer)}
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          backgroundColor: "white", borderRadius: "12px", padding: "10px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "10px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "12px", color: "#718096" }}>
              Q{currentQuestionIndex + 1}/{currentQuestions.length}
            </span>
            <span style={{ fontSize: "12px", color: "#718096" }}>
              {language === 'hi' ? "उत्तर दिए:" : "Answered:"} {answeredInSubject}/{currentQuestions.length}
            </span>
          </div>
          <div style={{
            height: "6px", backgroundColor: "#e2e8f0",
            borderRadius: "3px", overflow: "hidden"
          }}>
            <div style={{
              height: "100%",
              width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`,
              backgroundColor: currentSubject.color, transition: "width 0.3s ease"
            }}></div>
          </div>
        </div>

        {/* Question Card */}
        <div style={{
          backgroundColor: "white", borderRadius: "12px", padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: "10px"
        }}>
          <h3 style={{
            fontSize: "16px", color: "#1a1a2e", marginBottom: "16px",
            fontWeight: "600", lineHeight: "1.5"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "5px" }}>
            {q.options && q.options.map((op, idx) => (
              <div key={idx} style={{
                padding: "10px 12px", margin: "5px 0",
                backgroundColor: answers[`${currentSubject.id}-${currentQuestionIndex}`] === op
                  ? "#ebf8ff" : "#f7fafc",
                border: answers[`${currentSubject.id}-${currentQuestionIndex}`] === op
                  ? `2px solid ${currentSubject.color}` : "2px solid transparent",
                borderRadius: "8px", cursor: "pointer", transition: "all 0.2s",
                display: "flex", alignItems: "center"
              }} onClick={() => handleAnswer(op)}>
                <input type="radio" id={`q${currentQuestionIndex}-opt${idx}`}
                  name={`question-${currentQuestionIndex}`}
                  checked={answers[`${currentSubject.id}-${currentQuestionIndex}`] === op}
                  onChange={() => {}}
                  style={{ marginRight: "10px", width: "16px", height: "16px", flexShrink: 0 }} />
                <label htmlFor={`q${currentQuestionIndex}-opt${idx}`} style={{
                  fontSize: "14px", cursor: "pointer", flex: 1, margin: "0", color: "#2d3748"
                }}>
                  {op}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} style={{
              padding: "8px 14px", fontSize: "13px",
              backgroundColor: currentQuestionIndex === 0 ? "#e2e8f0" : currentSubject.color,
              color: currentQuestionIndex === 0 ? "#a0aec0" : "white",
              border: "none", borderRadius: "8px",
              cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              fontWeight: "600", transition: "all 0.2s"
            }}>
              ⬅ {language === 'hi' ? "पिछला" : "Prev"}
            </button>
            <button onClick={handleNextQuestion}
              disabled={currentQuestionIndex === currentQuestions.length - 1} style={{
                padding: "8px 14px", fontSize: "13px",
                backgroundColor: currentQuestionIndex === currentQuestions.length - 1
                  ? "#e2e8f0" : currentSubject.color,
                color: currentQuestionIndex === currentQuestions.length - 1
                  ? "#a0aec0" : "white",
                border: "none", borderRadius: "8px",
                cursor: currentQuestionIndex === currentQuestions.length - 1
                  ? "not-allowed" : "pointer",
                fontWeight: "600", transition: "all 0.2s"
              }}>
              {language === 'hi' ? "अगला" : "Next"} ➡
            </button>
          </div>

          <button onClick={handleSubjectComplete} style={{
            padding: "8px 18px", fontSize: "13px", backgroundColor: "#48bb78",
            color: "white", border: "none", borderRadius: "8px", cursor: "pointer",
            fontWeight: "600", transition: "all 0.2s",
            boxShadow: "0 2px 8px rgba(72, 187, 120, 0.3)"
          }}>
            ✅ {language === 'hi' ? "विषय समाप्त करें" : "End Subject"}
          </button>
        </div>

        {/* Question Navigator */}
        <div style={{
          backgroundColor: "white", borderRadius: "12px", padding: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginTop: "10px"
        }}>
          <p style={{ margin: "0 0 8px 0", color: "#718096", fontSize: "11px", fontWeight: "600" }}>
            {language === 'hi' ? "प्रश्न नेविगेटर" : "Question Navigator"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {currentQuestions.map((_, idx) => {
              const key = `${currentSubject.id}-${idx}`;
              return (
                <button key={idx} onClick={() => setCurrentQuestionIndex(idx)} style={{
                  width: "32px", height: "32px", fontSize: "11px",
                  backgroundColor: answers[key]
                    ? currentSubject.color
                    : currentQuestionIndex === idx ? "#1a1a2e" : "#e2e8f0",
                  color: answers[key] || currentQuestionIndex === idx ? "white" : "#4a5568",
                  border: currentQuestionIndex === idx ? "2px solid #1a1a2e" : "none",
                  borderRadius: "6px", cursor: "pointer",
                  fontWeight: "bold", transition: "all 0.2s"
                }}>
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timer Warning */}
        {showTimerWarning && (
          <div style={{
            position: "fixed", bottom: "15px", right: "15px", left: "15px",
            backgroundColor: "#fc8181", color: "white", padding: "12px 18px",
            borderRadius: "10px", boxShadow: "0 4px 15px rgba(252, 129, 129, 0.4)",
            textAlign: "center", fontSize: "14px", fontWeight: "600",
            animation: "pulse 1.5s ease-in-out infinite",
            maxWidth: "400px", margin: "0 auto"
          }}>
            ⚠️ {language === 'hi' ? "1 मिनट से कम समय शेष!" : "Less than 1 minute remaining!"}
          </div>
        )}
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
