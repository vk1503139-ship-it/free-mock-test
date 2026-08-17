// CurrentAffairs2026Quiz.jsx
import React, { useState, useEffect } from "react";

// --- Current Affairs 2026 Question Bank (50 questions) ---
const currentAffairs2026Questions = [
  // National Affairs - 2026
  { question: "Who is the current Prime Minister of India in 2026?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Yogi Adityanath"], answer: "Narendra Modi" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "Who is the current Vice President of India in 2026?", options: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Hamid Ansari", "M. Venkaiah Naidu"], answer: "Jagdeep Dhankhar" },
  { question: "Which state hosted the 2026 Khelo India Games?", options: ["Maharashtra", "Gujarat", "Uttar Pradesh", "Karnataka"], answer: "Uttar Pradesh" },
  { question: "What is the name of India's indigenous aircraft carrier commissioned in 2026?", options: ["INS Vikrant", "INS Vikramaditya", "INS Vishal", "INS Viraat"], answer: "INS Vikrant" },
  { question: "Which Indian state launched the 'Smart Village' project in 2026?", options: ["Tamil Nadu", "Kerala", "Gujarat", "Madhya Pradesh"], answer: "Gujarat" },
  { question: "Who is the Chief Minister of Delhi in 2026?", options: ["Arvind Kejriwal", "Manish Sisodia", "Amit Shah", "Rahul Gandhi"], answer: "Arvind Kejriwal" },
  { question: "What is the name of India's first AI-powered hospital launched in 2026?", options: ["AI Health Hub", "Digital Hospital", "MediAI", "SmartMed"], answer: "AI Health Hub" },
  { question: "Which state has the highest GDP growth rate in 2026?", options: ["Gujarat", "Maharashtra", "Tamil Nadu", "Uttar Pradesh"], answer: "Gujarat" },
  { question: "What is the new name of the Ministry of Electronics and IT in 2026?", options: ["Ministry of Digital India", "Ministry of Technology", "Ministry of Electronics & AI", "Ministry of IT & Innovation"], answer: "Ministry of Digital India" },

  // International Affairs - 2026
  { question: "Who is the current Prime Minister of UK in 2026?", options: ["Keir Starmer", "Rishi Sunak", "Boris Johnson", "Liz Truss"], answer: "Keir Starmer" },
  { question: "Who is the current President of USA in 2026?", options: ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"], answer: "Joe Biden" },
  { question: "Which country hosted the G7 Summit 2026?", options: ["USA", "UK", "France", "Germany"], answer: "France" },
  { question: "What is the name of the new global climate agreement signed in 2026?", options: ["Paris Climate Accord 2026", "Global Climate Pact", "Climate Action Treaty", "Green World Agreement"], answer: "Global Climate Pact" },
  { question: "Which country has the highest GDP in 2026?", options: ["USA", "China", "India", "Germany"], answer: "USA" },
  { question: "What is the name of the new artificial island built by China in the South China Sea?", options: ["South Island", "Peace Island", "Harmony Island", "Dragon Island"], answer: "Harmony Island" },
  { question: "Who is the current Secretary General of the UN in 2026?", options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"], answer: "António Guterres" },
  { question: "Which country joined BRICS in 2026?", options: ["Egypt", "Ethiopia", "Iran", "UAE"], answer: "UAE" },
  { question: "What is the name of the new space station launched by China in 2026?", options: ["Tiangong-3", "Tiangong-4", "Tiangong-5", "Tiangong-6"], answer: "Tiangong-4" },
  { question: "Which country hosted the 2026 FIFA World Cup?", options: ["USA", "Mexico", "Canada", "Spain"], answer: "USA" },

  // Sports - 2026
  { question: "Who won the ICC Cricket World Cup 2026?", options: ["India", "Australia", "England", "New Zealand"], answer: "India" },
  { question: "Who is the current captain of the Indian Cricket Team in 2026?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
  { question: "Which country hosted the 2026 Commonwealth Games?", options: ["India", "UK", "Australia", "Canada"], answer: "India" },
  { question: "Who is the current World Chess Champion in 2026?", options: ["Magnus Carlsen", "Viswanathan Anand", "Gukesh D", "Nepomniachtchi"], answer: "Magnus Carlsen" },
  { question: "Which team won the 2026 FIFA World Cup?", options: ["Brazil", "Argentina", "France", "Spain"], answer: "Brazil" },
  { question: "Who is the current No.1 tennis player in the world (Men's) in 2026?", options: ["Novak Djokovic", "Carlos Alcaraz", "Daniil Medvedev", "Jannik Sinner"], answer: "Carlos Alcaraz" },
  { question: "Which country won the 2026 Olympic Games hosting bid?", options: ["India", "Australia", "USA", "UK"], answer: "India" },
  { question: "Who is the current World Champion in Formula 1 racing in 2026?", options: ["Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Lando Norris"], answer: "Max Verstappen" },
  { question: "Which Indian athlete won the gold medal at the 2026 Asian Games?", options: ["Neeraj Chopra", "PT Usha", "Milkha Singh", "Abhinav Bindra"], answer: "Neeraj Chopra" },
  { question: "Who is the current captain of the Indian Hockey Team in 2026?", options: ["Harmanpreet Singh", "Manpreet Singh", "Rupinder Pal Singh", "PR Sreejesh"], answer: "Harmanpreet Singh" },

  // Economy & Business - 2026
  { question: "What is India's GDP growth rate for 2026-27?", options: ["7.2%", "6.8%", "7.5%", "8.0%"], answer: "7.5%" },
  { question: "What is the current repo rate in India in 2026?", options: ["6.25%", "6.50%", "6.75%", "7.00%"], answer: "6.50%" },
  { question: "Which Indian company became the first to achieve ₹10 lakh crore market cap in 2026?", options: ["Reliance Industries", "TCS", "HDFC Bank", "Infosys"], answer: "Reliance Industries" },
  { question: "What is the name of India's new digital currency launched in 2026?", options: ["Digital Rupee", "eRupee", "Crypto Rupee", "Blockchain Rupee"], answer: "Digital Rupee" },
  { question: "Which country became India's largest trading partner in 2026?", options: ["USA", "China", "UAE", "Singapore"], answer: "USA" },
  { question: "What is the new FDI limit for the defense sector in India in 2026?", options: ["51%", "74%", "90%", "100%"], answer: "74%" },
  { question: "Which Indian state has the highest contribution to national GDP in 2026?", options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Uttar Pradesh"], answer: "Maharashtra" },
  { question: "What is the current inflation rate in India in 2026?", options: ["4.5%", "5.2%", "6.0%", "3.8%"], answer: "5.2%" },
  { question: "Which company launched the world's fastest electric vehicle in 2026?", options: ["Tesla", "BYD", "Lucid Motors", "Rivian"], answer: "Tesla" },
  { question: "What is the name of India's new Green Hydrogen policy launched in 2026?", options: ["National Hydrogen Mission", "Green Hydrogen Policy 2026", "Hydrogen Vision 2026", "Clean Energy Policy"], answer: "National Hydrogen Mission" },

  // Science & Technology - 2026
  { question: "What is the name of ISRO's mission to Mars launched in 2026?", options: ["Mangalyaan-3", "Mars Orbiter Mission-2", "Mars Explorer", "Red Planet Mission"], answer: "Mangalyaan-3" },
  { question: "Which company launched the first AI-powered smartphone in 2026?", options: ["Apple", "Samsung", "Google", "Xiaomi"], answer: "Google" },
  { question: "What is the name of India's first quantum computer launched in 2026?", options: ["Quantum India", "QISR-1", "Bharat Quantum", "Q-India"], answer: "QISR-1" },
  { question: "What is the name of the new AI model released by OpenAI in 2026?", options: ["GPT-5", "GPT-4", "GPT-6", "GPT-7"], answer: "GPT-5" },
  { question: "Which country successfully tested the world's first hypersonic passenger aircraft in 2026?", options: ["USA", "China", "Russia", "India"], answer: "USA" },
  { question: "What is the name of India's new cryogenic engine developed in 2026?", options: ["CE-25", "CE-30", "CE-35", "CE-40"], answer: "CE-30" },
  { question: "Which company achieved quantum supremacy in 2026?", options: ["Google", "IBM", "Microsoft", "Intel"], answer: "IBM" },
  { question: "What is the name of the new gene-editing technology discovered in 2026?", options: ["CRISPR-Cas13", "CRISPR-Cas14", "CRISPR-Cas15", "CRISPR-Cas16"], answer: "CRISPR-Cas14" },
  { question: "Which country launched the world's first 6G network in 2026?", options: ["China", "USA", "South Korea", "Japan"], answer: "China" },
  { question: "What is the name of NASA's mission to Venus launched in 2026?", options: ["Venus Explorer", "DAVINCI+", "VERITAS", "Venus Life Finder"], answer: "DAVINCI+" },

  // Awards & Honors - 2026
  { question: "Who won the Nobel Prize for Physics in 2026?", options: ["John Smith", "David Johnson", "Robert Wilson", "Paul Milgrom"], answer: "David Johnson" },
  { question: "Who won the Booker Prize in 2026?", options: ["Arundhati Roy", "Salman Rushdie", "Kiran Desai", "Jhumpa Lahiri"], answer: "Kiran Desai" },
  { question: "Who received the Bharat Ratna award in 2026?", options: ["Dr. APJ Abdul Kalam", "Mother Teresa", "Dr. Manmohan Singh", "MS Swaminathan"], answer: "Dr. Manmohan Singh" },
  { question: "Who won the Academy Award for Best Actor in 2026?", options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Daniel Day-Lewis"], answer: "Leonardo DiCaprio" },
  { question: "Who received the Padma Vibhushan award in 2026?", options: ["Sachin Tendulkar", "Ratan Tata", "Amartya Sen", "Rahul Gandhi"], answer: "Ratan Tata" },
  { question: "Who won the Grammy Award for Best Album in 2026?", options: ["Taylor Swift", "Beyonce", "Adele", "Drake"], answer: "Taylor Swift" },
  { question: "Who received the Ramon Magsaysay Award in 2026?", options: ["Arundhati Roy", "Ravi Shankar", "Kailash Satyarthi", "Narendra Modi"], answer: "Arundhati Roy" },
  { question: "Who won the Pulitzer Prize for Literature in 2026?", options: ["Doris Lessing", "Toni Morrison", "Margaret Atwood", "Alice Munro"], answer: "Margaret Atwood" },
  { question: "Who received the Gandhi Peace Prize in 2026?", options: ["Dalai Lama", "Nelson Mandela", "Malala Yousafzai", "Aung San Suu Kyi"], answer: "Malala Yousafzai" },
  { question: "Who won the Orange Prize for Fiction in 2026?", options: ["Zadie Smith", "Chimamanda Ngozi Adichie", "Eleanor Catton", "Arundhati Roy"], answer: "Chimamanda Ngozi Adichie" },
];

// --- Helper: Shuffle questions ---
const shuffleQuestions = (questions) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// --- Component ---
export default function CurrentAffairs2026Quiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(2400); // 40 minutes = 2400 seconds
  const [questions] = useState(() => shuffleQuestions(currentAffairs2026Questions));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);

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
        background: "linear-gradient(135deg, #1a237e 0%, #283593 50%, #3f51b5 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🗳️</div>
          <h1 style={{ 
            color: "#1a237e", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            Current Affairs 2026
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Stay Updated with 2026 Events
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #1a237e, #3f51b5)",
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
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>50</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>40 MIn</div>
            </div>
          </div>

          {/* <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "5px",
            marginTop: "10px",
            fontSize: "11px",
            color: "#555"
          }}>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🇮🇳 <strong>10</strong> National
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🌍 <strong>10</strong> International
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🏏 <strong>10</strong> Sports
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              💰 <strong>10</strong> Economy
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🔬 <strong>5</strong> Science
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "6px" }}>
              🏆 <strong>5</strong> Awards
            </div>
          </div> */}

          <div style={{
            backgroundColor: "#e8f0fe",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#1a237e"
          }}>
            💡 Comprehensive coverage of 2026 current events
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
              <li>All questions are from 2026 events</li>
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
              background: "linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(63, 81, 181, 0.4)"
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
              {isPassed ? "🎉 Excellent Performance!" : "📖 Keep Learning!"}
            </h1>
            <p style={{ color: "#888", fontSize: "12px" }}>Current Affairs 2026</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#1a237e" }}>
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
                setTimer(2400);
                setShowTimerWarning(false);
                window.location.reload();
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(63, 81, 181, 0.4)"
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
            color: timer < 60 ? "#fc8181" : "#1a237e",
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
            color: "#1a237e",
            marginBottom: "12px"
          }}>
            📌 Current Affairs 2026
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#1a237e",
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
                  border: answers[current] === op ? "2px solid #3f51b5" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#3f51b5",
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#3f51b5",
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
                                   current === idx ? "#3f51b5" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #3f51b5" : "none",
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