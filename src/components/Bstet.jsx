// BiharSTETMockTest.jsx
import React, { useState, useEffect } from "react";

// --- Question Banks ---

// Teaching & Arts (30+ questions)
const teachingArtsQuestions = [
  // Teaching Aptitude
  { question: "What is the primary goal of teaching?", options: ["To impart knowledge", "To develop critical thinking", "To prepare for exams", "To complete syllabus"], answer: "To develop critical thinking" },
  { question: "Which of the following is a characteristic of effective teaching?", options: ["Teacher-centered approach", "Student-centered approach", "Rote learning", "Lecture-only method"], answer: "Student-centered approach" },
  { question: "What is the full form of ICT in education?", options: ["Information and Communication Technology", "Integrated Computer Technology", "International Curriculum Training", "Interactive Classroom Teaching"], answer: "Information and Communication Technology" },
  { question: "Who proposed the theory of multiple intelligences?", options: ["Howard Gardner", "Jean Piaget", "Lev Vygotsky", "B.F. Skinner"], answer: "Howard Gardner" },
  { question: "What is the best method for teaching a diverse classroom?", options: ["Uniform teaching", "Differentiated instruction", "Only lectures", "Group punishment"], answer: "Differentiated instruction" },
  { question: "Which learning theory focuses on observable behaviors?", options: ["Behaviorism", "Cognitivism", "Constructivism", "Humanism"], answer: "Behaviorism" },
  { question: "What is the zone of proximal development (ZPD)?", options: ["The gap between what a learner can do without help and with help", "A classroom management technique", "A grading system", "A type of assessment"], answer: "The gap between what a learner can do without help and with help" },
  { question: "Which of the following is a formative assessment?", options: ["Final exam", "Quiz", "Board exam", "Term paper"], answer: "Quiz" },
  { question: "What is the importance of lesson planning?", options: ["It ensures coverage of syllabus", "It saves time", "It helps in systematic teaching", "All of the above"], answer: "All of the above" },
  { question: "Who is known as the father of modern education?", options: ["John Dewey", "Jean Piaget", "Maria Montessori", "Lev Vygotsky"], answer: "John Dewey" },
  // Arts & Humanities
  { question: "Who painted the Mona Lisa?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Van Gogh"], answer: "Leonardo da Vinci" },
  { question: "Which is the oldest known civilization?", options: ["Indus Valley", "Mesopotamia", "Egyptian", "Chinese"], answer: "Mesopotamia" },
  { question: "What is the meaning of the term 'Renaissance'?", options: ["Rebirth", "Revolution", "Reformation", "Rebellion"], answer: "Rebirth" },
  { question: "Who wrote the famous play 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
  { question: "Which Indian classical dance form originates from Kerala?", options: ["Bharatanatyam", "Kathakali", "Odissi", "Kuchipudi"], answer: "Kathakali" },
  { question: "What is the national anthem of India?", options: ["Vande Mataram", "Jana Gana Mana", "Saare Jahan Se Achha", "Amar Sonar Bangla"], answer: "Jana Gana Mana" },
  { question: "Who wrote the 'Ramayana'?", options: ["Valmiki", "Tulsidas", "Ved Vyas", "Kalidasa"], answer: "Valmiki" },
  { question: "Which is the largest art museum in the world?", options: ["Louvre Museum", "British Museum", "Metropolitan Museum", "Hermitage Museum"], answer: "Louvre Museum" },
  { question: "What is the main theme of 'Mahabharata'?", options: ["Dharma and duty", "Love and romance", "War and peace", "Revenge"], answer: "Dharma and duty" },
  { question: "Who is known as the 'Shakespeare of India'?", options: ["Kalidasa", "Tulsidas", "Bankim Chandra", "Rabindranath Tagore"], answer: "Kalidasa" },
  { question: "Which color is associated with the Manipuri dance?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
  { question: "What is the name of the first novel in Indian English?", options: ["Rajmohan's Wife", "Anandamath", "The Guide", "Godan"], answer: "Rajmohan's Wife" },
  { question: "Who sculpted the famous statue of 'David'?", options: ["Michelangelo", "Donatello", "Bernini", "Raphael"], answer: "Michelangelo" },
  { question: "Which country is considered the birthplace of opera?", options: ["Italy", "France", "Germany", "England"], answer: "Italy" },
  { question: "What is the meaning of the word 'guru'?", options: ["Teacher", "Guide", "Master", "All of the above"], answer: "All of the above" },
  { question: "Which festival celebrates the harvest season in Punjab?", options: ["Pongal", "Baisakhi", "Lohri", "Makar Sankranti"], answer: "Baisakhi" },
  { question: "Who is the author of 'Gitanjali'?", options: ["Rabindranath Tagore", "Sarojini Naidu", "RK Narayan", "Mulk Raj Anand"], answer: "Rabindranath Tagore" },
  { question: "What is the traditional folk art of Bihar?", options: ["Madhubani", "Warli", "Pattachitra", "Gond"], answer: "Madhubani" },
  { question: "Which UNESCO World Heritage Site is in Bihar?", options: ["Mahabodhi Temple", "Taj Mahal", "Ajanta Caves", "Hampi"], answer: "Mahabodhi Temple" },
  { question: "What is the role of a teacher in society?", options: ["Knowledge dispenser", "Moral guide", "Community builder", "All of the above"], answer: "All of the above" },
  { question: "What is the meaning of 'Pratibha' in Indian education?", options: ["Intelligence", "Creativity", "Talent", "All of the above"], answer: "Talent" },
  { question: "Who introduced the concept of 'Caste System' in Indian society?", options: ["Aryans", "Dravidians", "Mughals", "British"], answer: "Aryans" },
  { question: "What is the most famous Indian festival celebrated by all religions?", options: ["Diwali", "Eid", "Christmas", "Guru Nanak Jayanti"], answer: "Diwali" },
  { question: "Who wrote 'The Indian Constitution'?", options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "Which is the oldest university in the world?", options: ["Nalanda", "Taxila", "Oxford", "Cambridge"], answer: "Nalanda" },
];

// Reasoning Questions (7+ questions)
const reasoningQuestions = [
  { question: "Find the odd one out: 2, 4, 6, 9", options: ["2", "4", "6", "9"], answer: "9" },
  { question: "If 'APPLE' is coded as 'BQQMF', what is 'MANGO' coded as?", options: ["NBOF", "NBPH", "NBOH", "NBOI"], answer: "NBOH" },
  { question: "Find the next number: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], answer: "30" },
  { question: "Which word does not belong? Apple, Mango, Carrot, Banana", options: ["Apple", "Mango", "Carrot", "Banana"], answer: "Carrot" },
  { question: "What comes next: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "If 2=5, 3=10, 4=17, then 5=?", options: ["22", "24", "26", "28"], answer: "26" },
  { question: "Find the missing number: 2, 5, 10, 17, ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "Choose the odd word: Table, Chair, Stool, Book", options: ["Table", "Chair", "Stool", "Book"], answer: "Book" },
  { question: "If 'PEN' is coded as 'QFO', what is 'BOOK' coded as?", options: ["CPPL", "CQPL", "CPQL", "CQOL"], answer: "CPPL" },
  { question: "What is the next number: 1, 4, 9, 16, ?", options: ["20", "22", "25", "30"], answer: "25" },
  { question: "Find the odd one out: Car, Bus, Bike, Airplane", options: ["Car", "Bus", "Bike", "Airplane"], answer: "Airplane" },
  { question: "If 'A' = 1, 'B' = 2, then 'Z' = ?", options: ["24", "25", "26", "27"], answer: "26" },
  { question: "What comes next: 3, 8, 13, 18, ?", options: ["21", "22", "23", "24"], answer: "23" },
];

// Mathematics Questions (7+ questions)
const mathQuestions = [
  { question: "What is 25 + 37?", options: ["52", "62", "72", "82"], answer: "62" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], answer: "25" },
  { question: "What is 3⁴?", options: ["27", "54", "81", "108"], answer: "81" },
  { question: "What is 7 × 8?", options: ["48", "54", "56", "64"], answer: "56" },
  { question: "What is 45 + 56?", options: ["99", "100", "101", "102"], answer: "101" },
  { question: "What is 12 × 12?", options: ["124", "134", "144", "154"], answer: "144" },
  { question: "What is the value of π (pi) approximately?", options: ["3.14", "3.41", "3.13", "3.11"], answer: "3.14" },
  { question: "What is 1/2 + 1/2?", options: ["1/4", "1/2", "1", "2"], answer: "1" },
  { question: "What is 5! (factorial)?", options: ["20", "60", "120", "240"], answer: "120" },
  { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: "50" },
  { question: "What is the average of 5, 10, 15?", options: ["8", "10", "12", "15"], answer: "10" },
];

// General Knowledge Questions (6+ questions)
const gkQuestions = [
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { question: "Who is the current Chief Minister of Bihar?", options: ["Nitish Kumar", "Tejashwi Yadav", "Lalu Yadav", "Jitan Ram Manjhi"], answer: "Nitish Kumar" },
  { question: "Which country is known as the 'Land of Rising Sun'?", options: ["China", "Japan", "South Korea", "India"], answer: "Japan" },
  { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { question: "Who is the President of India in 2026?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"], answer: "Droupadi Murmu" },
  { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower", "Marigold"], answer: "Lotus" },
  { question: "Which is the largest state in India by area?", options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"], answer: "Rajasthan" },
  { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: "Dr. B.R. Ambedkar" },
  { question: "Which river is known as the Ganga of the South?", options: ["Godavari", "Krishna", "Kaveri", "Narmada"], answer: "Kaveri" },
  { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "General Development Plan", "Global Domestic Product", "Growth and Development Plan"], answer: "Gross Domestic Product" },
  { question: "Which Indian state has the highest population?", options: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], answer: "Uttar Pradesh" },
  { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
];

// --- Helper: Get random questions from a category ---
const getRandomQuestions = (category, count) => {
  const shuffled = [...category].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (50 questions) ---
const buildQuestionPaper = () => {
  const paper = [
    ...getRandomQuestions(teachingArtsQuestions, 30),
    ...getRandomQuestions(reasoningQuestions, 7),
    ...getRandomQuestions(mathQuestions, 7),
    ...getRandomQuestions(gkQuestions, 6),
  ];
  return paper.sort(() => Math.random() - 0.5);
};

// --- Component ---
export default function BiharSTETMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3000); // 50 minutes = 3000 seconds
  const [questions] = useState(buildQuestionPaper);
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

  // Home Page
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "30px 25px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          textAlign: "center",
          maxWidth: "450px",
          width: "100%"
        }}>
          <div style={{ fontSize: "50px", marginBottom: "5px" }}>📚</div>
          <h1 style={{ 
            color: "#333", 
            marginBottom: "5px", 
            fontSize: "24px",
            fontWeight: "700"
          }}>
            Bihar STET Mock Test
          </h1>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            margin: "15px auto",
            width: "60px"
          }}></div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "10px",
            marginTop: "20px",
            textAlign: "center"
          }}>
            <div style={{
              background: "#f7fafc",
              padding: "12px",
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#2d3748" }}>50</div>
              <div style={{ fontSize: "12px", color: "#718096" }}>Total Questions</div>
            </div>
            <div style={{
              background: "#f7fafc",
              padding: "12px",
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#2d3748" }}>50 min</div>
              <div style={{ fontSize: "12px", color: "#718096" }}>Duration</div>
            </div>
          </div>

          <div style={{
            background: "#ebf8ff",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "15px",
            textAlign: "left",
            fontSize: "13px",
            color: "#2c5282",
            lineHeight: "1.6"
          }}>
            <div>✅ All questions are compulsory</div>
            <div>✅ Each question carries 1 mark</div>
            <div>✅ No negative marking</div>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "25px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
            }}
          >
            🚀 Start Exam
          </button>
        </div>
      </div>
    );
  }

  // Result Page
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const isPassed = percentage >= 60;
    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "20px 15px",
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
              {isPassed ? "🎉 Congratulations!" : "📖 Keep Practicing!"}
            </h1>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#333" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ Passed" : "❌ Failed"}
            </div>
          </div>

          {/* Answer History */}
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
                      <strong>Correct:</strong>{" "}
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
                setTimer(3000);
                setShowTimerWarning(false);
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
              }}
            >
              🔄 Take New Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fa",
      padding: "12px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        {/* Header - Mobile Optimized */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "12px 15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ 
              margin: "0", 
              fontSize: "15px", 
              color: "#2d3748",
              fontWeight: "700"
            }}>
              Bihar STET
            </h2>
            <p style={{ 
              margin: "2px 0 0", 
              color: "#718096", 
              fontSize: "12px"
            }}>
              Q{current + 1}/{questions.length}
            </p>
          </div>
          <div style={{ 
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <div style={{ 
              fontSize: "12px", 
              color: "#718096"
            }}>
              {answeredCount}/{questions.length}
            </div>
            <div style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: timer < 60 ? "#fc8181" : "#2d3748"
            }}>
              ⏱️ {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "18px 16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "12px"
        }}>
          <h3 style={{
            fontSize: "16px",
            color: "#2d3748",
            marginBottom: "18px",
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
                  margin: "6px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #4299e1" : "2px solid transparent",
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
                padding: "10px 16px",
                fontSize: "13px",
                backgroundColor: current === 0 ? "#e2e8f0" : "#4299e1",
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
                padding: "10px 16px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#4299e1",
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
              padding: "10px 20px",
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
          padding: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginTop: "12px"
        }}>
          <p style={{ 
            margin: "0 0 8px 0", 
            color: "#718096", 
            fontSize: "12px", 
            fontWeight: "600" 
          }}>
            Question Navigator
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px"
          }}>
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: "34px",
                  height: "34px",
                  fontSize: "12px",
                  backgroundColor: answers[idx] ? "#48bb78" : 
                                   current === idx ? "#4299e1" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #4299e1" : "none",
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
            gap: "15px",
            marginTop: "10px",
            fontSize: "11px",
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