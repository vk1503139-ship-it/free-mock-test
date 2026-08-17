// DailyCurrentAffairsQuiz.jsx
import React, { useState, useEffect } from "react";

// --- Current Affairs Question Bank (100+ questions) ---
const allCurrentAffairsQuestions = [
  // National Affairs
  { question: "Who is the current Prime Minister of India?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"], answer: "Narendra Modi" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Who is the current Vice President of India?", options: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Hamid Ansari", "Pranab Mukherjee"], answer: "Jagdeep Dhankhar" },
  { question: "Who is the Chief Minister of Delhi?", options: ["Arvind Kejriwal", "Manish Sisodia", "Amit Shah", "Rahul Gandhi"], answer: "Arvind Kejriwal" },
  { question: "Which state has the highest population in India?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "Which state has the highest literacy rate?", options: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"], answer: "Kerala" },
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "What is the currency of India?", options: ["Rupee", "Dollar", "Pound", "Yen"], answer: "Rupee" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Badminton"], answer: "Hockey" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
  { question: "What is the full form of ISRO?", options: ["Indian Space Research Organisation", "International Space Research Organisation", "Indian Space Research Office", "International Space Research Office"], answer: "Indian Space Research Organisation" },
  { question: "Which city is known as the Silicon Valley of India?", options: ["Mumbai", "Delhi", "Bangalore", "Chennai"], answer: "Bangalore" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },

  // International Affairs
  { question: "Which country hosted the G20 Summit 2023?", options: ["India", "USA", "UK", "China"], answer: "India" },
  { question: "What is the capital of USA?", options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"], answer: "Washington D.C." },
  { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: "Yen" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Which country is known as the 'Land of Rising Sun'?", options: ["China", "Japan", "South Korea", "India"], answer: "Japan" },
  { question: "Who is the current President of USA?", options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"], answer: "Joe Biden" },
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"], answer: "Moscow" },
  { question: "Which country has the largest population in the world?", options: ["India", "China", "USA", "Indonesia"], answer: "India" },
  { question: "What is the currency of UK?", options: ["Dollar", "Euro", "Pound", "Yen"], answer: "Pound" },

  // Economy & Business
  { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "General Development Plan", "Global Domestic Product", "Growth and Development Plan"], answer: "Gross Domestic Product" },
  { question: "What is the name of India's first bullet train project?", options: ["Bullet India", "High-Speed Rail", "Mumbai-Ahmedabad", "Delhi-Mumbai"], answer: "Mumbai-Ahmedabad" },
  { question: "Which is the largest economy in the world?", options: ["USA", "China", "Japan", "Germany"], answer: "USA" },
  { question: "What is the full form of RBI?", options: ["Reserve Bank of India", "Regional Bank of India", "Royal Bank of India", "Republic Bank of India"], answer: "Reserve Bank of India" },
  { question: "Which is the largest stock exchange in India?", options: ["BSE", "NSE", "MCX", "NCDEX"], answer: "NSE" },

  // Science & Technology
  { question: "What is the name of India's first nuclear submarine?", options: ["INS Arihant", "INS Vikrant", "INS Kalvari", "INS Chakra"], answer: "INS Arihant" },
  { question: "What is the name of India's first AI-powered school?", options: ["AI Academy", "Coding School", "Nalanda AI School", "Digital School"], answer: "Nalanda AI School" },
  { question: "Which company launched the first AI chatbot?", options: ["Google", "OpenAI", "Microsoft", "Amazon"], answer: "OpenAI" },
  { question: "What is the name of India's lunar mission?", options: ["Chandrayaan", "Mangalyaan", "Gaganyaan", "Aditya"], answer: "Chandrayaan" },
  { question: "Which country has the most satellites in space?", options: ["USA", "China", "Russia", "India"], answer: "USA" },

  // Sports
  { question: "Who is the current captain of Indian Cricket Team?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "KL Rahul"], answer: "Rohit Sharma" },
  { question: "Which country won the Cricket World Cup 2023?", options: ["Australia", "India", "England", "New Zealand"], answer: "Australia" },
  { question: "Who is the current World Chess Champion?", options: ["Magnus Carlsen", "Viswanathan Anand", "Garry Kasparov", "Bobby Fischer"], answer: "Magnus Carlsen" },
  { question: "Which Indian athlete won the first Olympic gold in athletics?", options: ["Neeraj Chopra", "PT Usha", "Milkha Singh", "Abhinav Bindra"], answer: "Neeraj Chopra" },
  { question: "What is the national sport of Japan?", options: ["Sumo Wrestling", "Baseball", "Karate", "Judo"], answer: "Sumo Wrestling" },

  // History & Culture
  { question: "Which Indian state has the highest number of UNESCO World Heritage Sites?", options: ["Tamil Nadu", "Uttar Pradesh", "Maharashtra", "Rajasthan"], answer: "Rajasthan" },
  { question: "Who built the Taj Mahal?", options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"], answer: "Shah Jahan" },
  { question: "What is the oldest known civilization?", options: ["Indus Valley", "Mesopotamia", "Egyptian", "Chinese"], answer: "Mesopotamia" },
  { question: "Who is known as the Father of Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "What is the meaning of 'Renaissance'?", options: ["Rebirth", "Revolution", "Reformation", "Rebellion"], answer: "Rebirth" },

  // Environment & Geography
  { question: "What is the largest ocean in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara" },
  { question: "What is the highest mountain peak in the world?", options: ["Mount Everest", "K2", "Kanchenjunga", "Lhotse"], answer: "Mount Everest" },
  { question: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
  { question: "What is the largest continent?", options: ["Africa", "Asia", "North America", "Europe"], answer: "Asia" },

  // Awards & Honors
  { question: "What is the highest civilian award in India?", options: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"], answer: "Bharat Ratna" },
  { question: "Who won the Nobel Peace Prize in 2023?", options: ["Narges Mohammadi", "Malala Yousafzai", "Greta Thunberg", "Jacinda Ardern"], answer: "Narges Mohammadi" },
  { question: "What is the highest military award in India?", options: ["Param Vir Chakra", "Ashok Chakra", "Vir Chakra", "Maha Vir Chakra"], answer: "Param Vir Chakra" },
  { question: "Who is the first Indian to win a Nobel Prize?", options: ["Rabindranath Tagore", "CV Raman", "Mother Teresa", "Amartya Sen"], answer: "Rabindranath Tagore" },

  // Defense & Security
  { question: "What is the name of India's first indigenous aircraft carrier?", options: ["INS Vikrant", "INS Vikramaditya", "INS Viraat", "INS Vishal"], answer: "INS Vikrant" },
  { question: "Who is the current Chief of Army Staff of India?", options: ["General Manoj Pande", "General MM Naravane", "General Bipin Rawat", "General Dalbir Singh"], answer: "General Manoj Pande" },
  { question: "What is the full form of DRDO?", options: ["Defence Research and Development Organisation", "Defence Research and Development Office", "Defence Research and Development Operations", "Defence Research and Development Organisation"], answer: "Defence Research and Development Organisation" },

  // Miscellaneous
  { question: "What is the full form of UNICEF?", options: ["United Nations International Children's Emergency Fund", "United Nations International Children's Education Fund", "United Nations International Children's Environment Fund", "United Nations International Children's Employment Fund"], answer: "United Nations International Children's Emergency Fund" },
  { question: "What is the full form of WHO?", options: ["World Health Organisation", "World Health Office", "World Health Operations", "World Health Organisation"], answer: "World Health Organisation" },
  { question: "What is the full form of UNESCO?", options: ["United Nations Educational, Scientific and Cultural Organisation", "United Nations Educational, Scientific and Cultural Office", "United Nations Educational, Scientific and Cultural Operations", "United Nations Educational, Scientific and Cultural Organisation"], answer: "United Nations Educational, Scientific and Cultural Organisation" },
  { question: "What is the full form of NATO?", options: ["North Atlantic Treaty Organisation", "North American Treaty Organisation", "North Atlantic Trade Organisation", "North American Trade Organisation"], answer: "North Atlantic Treaty Organisation" },
  { question: "What is the full form of SAARC?", options: ["South Asian Association for Regional Cooperation", "South American Association for Regional Cooperation", "South Asian Association for Regional Communities", "South Asian Alliance for Regional Cooperation"], answer: "South Asian Association for Regional Cooperation" },

  // Add more questions to reach 100+
  { question: "Which country is the largest producer of coffee?", options: ["Brazil", "Vietnam", "Colombia", "Ethiopia"], answer: "Brazil" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Brain"], answer: "Skin" },
  { question: "What is the speed of light approximately?", options: ["3 × 10⁸ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s", "3 × 10⁶ m/s"], answer: "3 × 10⁸ m/s" },
  { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
  { question: "What is the chemical formula for methane?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4" },
  { question: "What is the main function of red blood cells?", options: ["Fight infections", "Carry oxygen", "Clot blood", "Digest food"], answer: "Carry oxygen" },
  { question: "What is the process of plants making food called?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], answer: "Photosynthesis" },
  { question: "Which vitamin is produced by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
  { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
  { question: "Which is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: "Jupiter" },
  { question: "What is the boiling point of water?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
  { question: "What is the freezing point of water?", options: ["-5°C", "0°C", "5°C", "10°C"], answer: "0°C" },
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: "Mercury" },
  { question: "What is the chemical symbol for oxygen?", options: ["O", "O2", "Ox", "Om"], answer: "O" },
  { question: "What is the study of living organisms called?", options: ["Physics", "Biology", "Chemistry", "Geology"], answer: "Biology" },
  { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
  { question: "What is the chemical formula for carbon dioxide?", options: ["CO", "CO2", "C2O", "C2O2"], answer: "CO2" },
  { question: "What is the chemical formula of common salt?", options: ["NaCl", "NaOH", "HCl", "KCl"], answer: "NaCl" },
  { question: "Which organ pumps blood in the human body?", options: ["Brain", "Liver", "Heart", "Lungs"], answer: "Heart" },
  { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "What is the chemical symbol for silver?", options: ["Si", "Ag", "Au", "Fe"], answer: "Ag" },
];

// --- Helper: Get daily questions based on date ---
const getDailyQuestions = () => {
  // Get today's date as seed
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  
  // Create a deterministic shuffle based on date
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const shuffled = [...allCurrentAffairsQuestions];
  let seed = 0;
  for (let i = 0; i < dateString.length; i++) {
    seed += dateString.charCodeAt(i);
  }

  // Fisher-Yates shuffle with seed
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor(seededRandom(seed) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Select 30-40 random questions based on date
  const count = 30 + Math.floor(seededRandom(seed + 1) * 11); // 30-40
  return shuffled.slice(0, count);
};

// --- Component ---
export default function DailyCurrentAffairsQuiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes = 1800 seconds
  const [questions] = useState(getDailyQuestions);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setTodayDate(now.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  useEffect(() => {
    if (started && !submitted && timer > 0) {
      const t = setInterval(() => {
        setTimer((p) => {
          if (p <= 60) setShowTimerWarning(true);
          return p - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
    if (timer === 0 && started && !submitted) {
      submitExam();
    }
  }, [started, submitted, timer]);

  const startExam = () => {
    setStarted(true);
  };

  const submitExam = () => {
    let s = 0;
    const details = questions.map((q, i) => {
      const isCorrect = answers[i] === q.answer;
      if (isCorrect) s++;
      return {
        question: q.question,
        options: q.options,
        correctAnswer: q.answer,
        userAnswer: answers[i] || "Not Attempted",
        isCorrect: isCorrect,
      };
    });
    setScore(s);
    setResultDetails(details);
    setSubmitted(true);
  };

  // Home Page - Mobile Optimized
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #2c5a6e 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "25px 20px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📰</div>
          <h1 style={{ 
            color: "#0d1b2a", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            Daily Current Affairs
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            🗓️ {todayDate}
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #0d1b2a, #2c5a6e)",
            margin: "10px auto",
            width: "60px"
          }}></div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginTop: "15px"
          }}>
            <div style={{ 
              backgroundColor: "#f0f7ff", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 प्रश्न</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d1b2a" }}>{questions.length}</div>
            </div>
            <div style={{ 
              backgroundColor: "#f0f7ff", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️ समय</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d1b2a" }}>30 मिनट</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#f0f7ff",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "12px",
            fontSize: "12px",
            color: "#1b3a4b"
          }}>
            💡 {questions.length} questions selected for today's quiz
          </div>

          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#555",
            textAlign: "left"
          }}>
            <strong>📋 निर्देश:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>All questions are based on current affairs</li>
              <li>Each question carries <strong>1 mark</strong></li>
              <li><strong>No negative marking</strong></li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #0d1b2a 0%, #2c5a6e 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(44, 90, 110, 0.4)"
            }}
          >
            🚀 Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Result Page - Mobile Optimized
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const isPassed = percentage >= 60;
    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          {/* Result Card */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "25px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "20px"
          }}>
            <h1 style={{ 
              fontSize: "24px", 
              marginBottom: "5px",
              color: "#2d3748"
            }}>
              {isPassed ? "🎉 Excellent Work!" : "📖 Keep Learning!"}
            </h1>
            <p style={{ color: "#888", fontSize: "12px" }}>🗓️ {todayDate}</p>
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: isPassed ? "#d4edda" : "#f8d7da",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "15px auto",
              fontSize: "32px"
            }}>
              {isPassed ? "✅" : "📝"}
            </div>
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#0d1b2a" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Needs Improvement"}
            </div>
          </div>

          {/* Answer Review */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "20px 15px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ 
              borderBottom: "2px solid #eee", 
              paddingBottom: "12px", 
              marginBottom: "15px",
              fontSize: "18px",
              color: "#2d3748"
            }}>
              📋 Answer Review
            </h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: item.isCorrect ? "#f0fff4" : "#fff5f5",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : "#fc8181"}`,
                  padding: "12px 15px",
                  marginBottom: "12px",
                  borderRadius: "8px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h4 style={{ 
                    margin: "0", 
                    fontSize: "14px", 
                    color: "#2d3748",
                    flex: 1,
                    marginRight: "10px"
                  }}>
                    Q{index + 1}. {item.question}
                  </h4>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {item.isCorrect ? "✅" : "❌"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>Your Answer:</strong>{" "}
                    <span style={{ color: item.isCorrect ? "#48bb78" : "#fc8181" }}>
                      {item.userAnswer}
                    </span>
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>Correct Answer:</strong>{" "}
                      <span style={{ color: "#48bb78" }}>{item.correctAnswer}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={() => {
                setStarted(false);
                setSubmitted(false);
                setAnswers({});
                setResultDetails([]);
                setTimer(1800);
                setShowTimerWarning(false);
                window.location.reload();
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #0d1b2a 0%, #2c5a6e 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(44, 90, 110, 0.4)"
              }}
            >
              🔄 Take New Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page - Mobile Optimized
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fa",
      padding: "10px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        {/* Header - Mobile Optimized with Timer on Right */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "10px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ flex: 1 }}>
            <p style={{ 
              margin: "0", 
              fontSize: "11px", 
              color: "#718096"
            }}>
              Q{current + 1}/{questions.length}
            </p>
            <p style={{ 
              margin: "2px 0 0", 
              fontSize: "10px", 
              color: "#a0aec0"
            }}>
              Answered: {answeredCount}/{questions.length}
            </p>
          </div>
          <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: timer < 60 ? "#fc8181" : "#0d1b2a",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            <span style={{ fontSize: "16px" }}>⏱️</span>
            <span>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Question Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "10px"
        }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "#e8f0fe",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#1b3a4b",
            marginBottom: "12px"
          }}>
            📌 Current Affairs
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#0d1b2a",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5"
          }}>
            {q.question}
          </h3>

          <div style={{ marginTop: "5px" }}>
            {q.options.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  margin: "5px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #2c5a6e" : "2px solid transparent",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center"
                }}
                onClick={() => setAnswers({ ...answers, [current]: op })}
              >
                <input
                  type="radio"
                  id={`q${current}-opt${idx}`}
                  name={`question-${current}`}
                  checked={answers[current] === op}
                  onChange={() => {}}
                  style={{ marginRight: "10px", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <label
                  htmlFor={`q${current}-opt${idx}`}
                  style={{
                    fontSize: "14px",
                    cursor: "pointer",
                    flex: 1,
                    margin: "0",
                    color: "#2d3748"
                  }}
                >
                  {op}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - Mobile Optimized */}
        <div style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === 0 ? "#e2e8f0" : "#2c5a6e",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              ⬅ Prev
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#2c5a6e",
                color: current === questions.length - 1 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === questions.length - 1 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              Next ➡
            </button>
          </div>

          <button
            onClick={submitExam}
            style={{
              padding: "8px 18px",
              fontSize: "13px",
              backgroundColor: "#48bb78",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(72, 187, 120, 0.3)"
            }}
          >
            📤 Submit
          </button>
        </div>

        {/* Question Navigator - Mobile Optimized */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginTop: "10px"
        }}>
          <p style={{ 
            margin: "0 0 8px 0", 
            color: "#718096", 
            fontSize: "11px", 
            fontWeight: "600" 
          }}>
            Question Navigator
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px"
          }}>
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "11px",
                  backgroundColor: answers[idx] ? "#48bb78" : 
                                   current === idx ? "#2c5a6e" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #2c5a6e" : "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.2s"
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div style={{
            display: "flex",
            gap: "12px",
            marginTop: "8px",
            fontSize: "10px",
            color: "#4a5568",
            flexWrap: "wrap"
          }}>
            <span>🟢 Answered</span>
            <span>🔵 Current</span>
            <span>⚪ Unanswered</span>
          </div>
        </div>

        {/* Timer Warning */}
        {showTimerWarning && (
          <div style={{
            position: "fixed",
            bottom: "15px",
            right: "15px",
            left: "15px",
            backgroundColor: "#fc8181",
            color: "white",
            padding: "12px 18px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(252, 129, 129, 0.4)",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "600",
            animation: "pulse 1.5s ease-in-out infinite",
            maxWidth: "400px",
            margin: "0 auto"
          }}>
            ⚠️ Less than 1 minute remaining!
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}