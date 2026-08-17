// BSEBClass10EnglishMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 English Question Bank (100 questions) ---
const englishQuestions = [
  // ============ GRAMMAR - 30 Questions ============
  
  // Tenses (6)
  { 
    question: "She ______ to school every day.",
    options: ["go", "goes", "going", "went"], 
    answer: "goes" 
  },
  { 
    question: "They ______ dinner when I arrived.",
    options: ["were having", "are having", "had", "have"], 
    answer: "were having" 
  },
  { 
    question: "I ______ finished my homework yet.",
    options: ["haven't", "hasn't", "didn't", "wasn't"], 
    answer: "haven't" 
  },
  { 
    question: "He ______ in this company for 10 years.",
    options: ["has been working", "have been working", "is working", "was working"], 
    answer: "has been working" 
  },
  { 
    question: "By next year, I ______ my graduation.",
    options: ["will have completed", "will complete", "complete", "have completed"], 
    answer: "will have completed" 
  },
  { 
    question: "She ______ to the party yesterday.",
    options: ["didn't come", "doesn't come", "hasn't come", "isn't coming"], 
    answer: "didn't come" 
  },

  // Modals (4)
  { 
    question: "You ______ wear a helmet while riding a bike.",
    options: ["should", "can", "could", "might"], 
    answer: "should" 
  },
  { 
    question: "______ I come in, sir?",
    options: ["May", "Can", "Should", "Must"], 
    answer: "May" 
  },
  { 
    question: "It ______ rain today. Take an umbrella.",
    options: ["might", "must", "will", "should"], 
    answer: "might" 
  },
  { 
    question: "You ______ obey the traffic rules.",
    options: ["must", "can", "could", "might"], 
    answer: "must" 
  },

  // Articles (4)
  { 
    question: "___ sun rises in the east.",
    options: ["The", "A", "An", "None"], 
    answer: "The" 
  },
  { 
    question: "She is ___ honest girl.",
    options: ["an", "a", "the", "none"], 
    answer: "an" 
  },
  { 
    question: "He is ___ M.A. in English.",
    options: ["an", "a", "the", "none"], 
    answer: "an" 
  },
  { 
    question: "I need ___ hour to complete this work.",
    options: ["an", "a", "the", "none"], 
    answer: "an" 
  },

  // Prepositions (4)
  { 
    question: "She is fond ______ music.",
    options: ["of", "for", "in", "on"], 
    answer: "of" 
  },
  { 
    question: "I will meet you ______ 5 PM.",
    options: ["at", "in", "on", "for"], 
    answer: "at" 
  },
  { 
    question: "He is good ______ mathematics.",
    options: ["at", "in", "on", "for"], 
    answer: "at" 
  },
  { 
    question: "We arrived ______ the airport on time.",
    options: ["at", "in", "on", "to"], 
    answer: "at" 
  },

  // Conjunctions (4)
  { 
    question: "I like tea ______ coffee.",
    options: ["and", "but", "or", "so"], 
    answer: "and" 
  },
  { 
    question: "He is rich ______ he is not happy.",
    options: ["but", "and", "or", "so"], 
    answer: "but" 
  },
  { 
    question: "You can have tea ______ coffee.",
    options: ["or", "and", "but", "so"], 
    answer: "or" 
  },
  { 
    question: "He worked hard ______ he passed the exam.",
    options: ["so", "because", "but", "and"], 
    answer: "so" 
  },

  // Active/Passive Voice (4)
  { 
    question: "The letter ______ by the postman yesterday.",
    options: ["was delivered", "is delivered", "delivered", "has delivered"], 
    answer: "was delivered" 
  },
  { 
    question: "The cake ______ by my mother.",
    options: ["was baked", "is baked", "baked", "has baked"], 
    answer: "was baked" 
  },
  { 
    question: "The thief ______ by the police.",
    options: ["has been caught", "is caught", "caught", "was catch"], 
    answer: "has been caught" 
  },
  { 
    question: "The homework ______ by the students.",
    options: ["was completed", "is completed", "completed", "has completed"], 
    answer: "was completed" 
  },

  // Direct/Indirect Speech (4)
  { 
    question: "He said, 'I am happy.' → He said that he ______ happy.",
    options: ["was", "is", "were", "am"], 
    answer: "was" 
  },
  { 
    question: "She said, 'I will come.' → She said that she ______ come.",
    options: ["would", "will", "shall", "should"], 
    answer: "would" 
  },
  { 
    question: "He said, 'I have done it.' → He said that he ______ done it.",
    options: ["had", "has", "have", "was"], 
    answer: "had" 
  },
  { 
    question: "She said, 'I am writing a letter.' → She said that she ______ a letter.",
    options: ["was writing", "is writing", "were writing", "am writing"], 
    answer: "was writing" 
  },

  // ============ LITERATURE - 25 Questions ============
  
  // Prose (10)
  { 
    question: "Who is the author of 'The Thief's Story'?",
    options: ["Ruskin Bond", "R.K. Narayan", "Mulk Raj Anand", "Ruskin Bond"], 
    answer: "Ruskin Bond" 
  },
  { 
    question: "Who wrote 'The Midnight Visitor'?",
    options: ["Robert Arthur", "James Herriot", "O. Henry", "Ruskin Bond"], 
    answer: "Robert Arthur" 
  },
  { 
    question: "'A Letter to God' is written by ______.",
    options: ["G.L. Fuentes", "Ruskin Bond", "R.K. Narayan", "Mulk Raj Anand"], 
    answer: "G.L. Fuentes" 
  },
  { 
    question: "Who wrote 'Nelson Mandela: Long Walk to Freedom'?",
    options: ["Nelson Mandela", "A.P.J. Abdul Kalam", "Jawaharlal Nehru", "Mahatma Gandhi"], 
    answer: "Nelson Mandela" 
  },
  { 
    question: "'The Sermon at Benares' is about ______.",
    options: ["Buddha", "Mahatma Gandhi", "Swami Vivekananda", "Ramakrishna"], 
    answer: "Buddha" 
  },
  { 
    question: "Who wrote 'The Proposal'?",
    options: ["Anton Chekhov", "Leo Tolstoy", "Fyodor Dostoevsky", "Maxim Gorky"], 
    answer: "Anton Chekhov" 
  },
  { 
    question: "The play 'The Proposal' is a ______.",
    options: ["One-act play", "Tragedy", "Comedy", "Drama"], 
    answer: "One-act play" 
  },
  { 
    question: "'The Making of a Scientist' is written by ______.",
    options: ["Robert W. Peterson", "Ruskin Bond", "James Herriot", "O. Henry"], 
    answer: "Robert W. Peterson" 
  },
  { 
    question: "Who wrote 'Madam Rides the Bus'?",
    options: ["Vallikkannan", "Ruskin Bond", "R.K. Narayan", "Mulk Raj Anand"], 
    answer: "Vallikkannan" 
  },
  { 
    question: "'The Hundred Dresses - I' is about ______.",
    options: ["Peggy and Wanda", "Jane and Mary", "Sara and Lucy", "Rita and Maria"], 
    answer: "Peggy and Wanda" 
  },

  // Poetry (8)
  { 
    question: "'Dust of Snow' is written by ______.",
    options: ["Robert Frost", "W.B. Yeats", "William Wordsworth", "Emily Dickinson"], 
    answer: "Robert Frost" 
  },
  { 
    question: "Who wrote 'Fire and Ice'?",
    options: ["Robert Frost", "William Wordsworth", "P.B. Shelley", "John Keats"], 
    answer: "Robert Frost" 
  },
  { 
    question: "'A Tiger in the Zoo' is written by ______.",
    options: ["Leslie Norris", "Robert Frost", "William Wordsworth", "P.B. Shelley"], 
    answer: "Leslie Norris" 
  },
  { 
    question: "'The Ball Poem' is written by ______.",
    options: ["John Berryman", "Robert Frost", "William Wordsworth", "P.B. Shelley"], 
    answer: "John Berryman" 
  },
  { 
    question: "'Amanda!' is written by ______.",
    options: ["Robin Klein", "Robert Frost", "William Wordsworth", "John Berryman"], 
    answer: "Robin Klein" 
  },
  { 
    question: "'Animals' is written by ______.",
    options: ["Walt Whitman", "Robert Frost", "William Wordsworth", "P.B. Shelley"], 
    answer: "Walt Whitman" 
  },
  { 
    question: "'The Trees' is written by ______.",
    options: ["Adrienne Rich", "Robert Frost", "William Wordsworth", "Emily Dickinson"], 
    answer: "Adrienne Rich" 
  },
  { 
    question: "'Fog' is written by ______.",
    options: ["Carl Sandburg", "Robert Frost", "William Wordsworth", "P.B. Shelley"], 
    answer: "Carl Sandburg" 
  },

  // Supplementary Reader (7)
  { 
    question: "'The Necklace' is written by ______.",
    options: ["Guy de Maupassant", "O. Henry", "Ruskin Bond", "Robert Arthur"], 
    answer: "Guy de Maupassant" 
  },
  { 
    question: "Who wrote 'The Gift of the Magi'?",
    options: ["O. Henry", "Guy de Maupassant", "Ruskin Bond", "Robert Arthur"], 
    answer: "O. Henry" 
  },
  { 
    question: "'The Hack Driver' is written by ______.",
    options: ["Sinclair Lewis", "O. Henry", "Guy de Maupassant", "Ruskin Bond"], 
    answer: "Sinclair Lewis" 
  },
  { 
    question: "'Bholi' is written by ______.",
    options: ["K.A. Abbas", "O. Henry", "Guy de Maupassant", "Ruskin Bond"], 
    answer: "K.A. Abbas" 
  },
  { 
    question: "'The Book That Saved the Earth' is written by ______.",
    options: ["Claire Boiko", "O. Henry", "Guy de Maupassant", "Ruskin Bond"], 
    answer: "Claire Boiko" 
  },
  { 
    question: "The story 'The Thief's Story' is about ______.",
    options: ["Anil and Hari Singh", "Mohan and Sita", "Ram and Shyam", "Ravi and Raj"], 
    answer: "Anil and Hari Singh" 
  },
  { 
    question: "'The Midnight Visitor' is about a ______.",
    options: ["Secret agent", "Thief", "Detective", "Police officer"], 
    answer: "Secret agent" 
  },

  // ============ COMPREHENSION - 15 Questions ============
  { 
    question: "'Hard work' means ______.",
    options: ["working very diligently", "working less", "working slowly", "working carelessly"], 
    answer: "working very diligently" 
  },
  { 
    question: "'Honesty is the best policy' means ______.",
    options: ["being truthful is the best approach", "dishonesty is good", "lying is acceptable", "cheating is fine"], 
    answer: "being truthful is the best approach" 
  },
  { 
    question: "'A friend in need is a friend indeed' means ______.",
    options: ["True friends help in difficult times", "Friends are unnecessary", "Friends are selfish", "Everyone is a friend"], 
    answer: "True friends help in difficult times" 
  },
  { 
    question: "'Perseverance' means ______.",
    options: ["persistent effort", "giving up", "laziness", "procrastination"], 
    answer: "persistent effort" 
  },
  { 
    question: "'Humility' means ______.",
    options: ["being modest and humble", "being proud", "being arrogant", "being selfish"], 
    answer: "being modest and humble" 
  },
  { 
    question: "'Charity' means ______.",
    options: ["helping the poor", "being selfish", "being cruel", "being greedy"], 
    answer: "helping the poor" 
  },
  { 
    question: "'Patience' means ______.",
    options: ["ability to wait calmly", "being impatient", "being angry", "being rude"], 
    answer: "ability to wait calmly" 
  },
  { 
    question: "'Curiosity' means ______.",
    options: ["desire to learn", "being disinterested", "being lazy", "being careless"], 
    answer: "desire to learn" 
  },
  { 
    question: "'Ambition' means ______.",
    options: ["strong desire for achievement", "lack of desire", "being lazy", "being careless"], 
    answer: "strong desire for achievement" 
  },
  { 
    question: "'The pen is mightier than the sword' means ______.",
    options: ["words are more powerful than force", "force is more powerful", "neither is powerful", "both are equal"], 
    answer: "words are more powerful than force" 
  },
  { 
    question: "'Knowledge is power' means ______.",
    options: ["education makes one strong", "ignorance is powerful", "money is power", "strength is power"], 
    answer: "education makes one strong" 
  },
  { 
    question: "'Time and tide wait for none' means ______.",
    options: ["we should not waste time", "time is slow", "tide is fast", "both are equal"], 
    answer: "we should not waste time" 
  },
  { 
    question: "'Where there is a will, there is a way' means ______.",
    options: ["determination leads to success", "no way exists", "will is not needed", "success is impossible"], 
    answer: "determination leads to success" 
  },
  { 
    question: "'Cleanliness is next to godliness' means ______.",
    options: ["being clean is virtuous", "cleanliness is not important", "godliness is not important", "both are equal"], 
    answer: "being clean is virtuous" 
  },
  { 
    question: "'Empathy' means ______.",
    options: ["understanding others' feelings", "being selfish", "being cruel", "being indifferent"], 
    answer: "understanding others' feelings" 
  },

  // ============ WRITING SKILLS - 15 Questions ============
  { 
    question: "The word that means 'to write a story' is ______.",
    options: ["author", "reader", "editor", "publisher"], 
    answer: "author" 
  },
  { 
    question: "A formal letter should always have ______.",
    options: ["a proper salutation", "no salutation", "only first name", "nickname"], 
    answer: "a proper salutation" 
  },
  { 
    question: "An essay has how many parts?",
    options: ["3", "2", "4", "5"], 
    answer: "3" 
  },
  { 
    question: "The first paragraph of an essay is called ______.",
    options: ["introduction", "body", "conclusion", "abstract"], 
    answer: "introduction" 
  },
  { 
    question: "The last paragraph of an essay is called ______.",
    options: ["conclusion", "introduction", "body", "summary"], 
    answer: "conclusion" 
  },
  { 
    question: "A paragraph should have ______.",
    options: ["a topic sentence", "no main idea", "only details", "no structure"], 
    answer: "a topic sentence" 
  },
  { 
    question: "A letter to the editor is a type of ______.",
    options: ["formal letter", "informal letter", "email", "text message"], 
    answer: "formal letter" 
  },
  { 
    question: "A personal letter is a type of ______.",
    options: ["informal letter", "formal letter", "official letter", "business letter"], 
    answer: "informal letter" 
  },
  { 
    question: "The greeting 'Dear Sir' is used in ______.",
    options: ["formal letter", "informal letter", "email", "text message"], 
    answer: "formal letter" 
  },
  { 
    question: "The greeting 'Dear Friend' is used in ______.",
    options: ["informal letter", "formal letter", "official letter", "business letter"], 
    answer: "informal letter" 
  },
  { 
    question: "'Yours sincerely' is used in ______.",
    options: ["formal letter", "informal letter", "email", "text message"], 
    answer: "formal letter" 
  },
  { 
    question: "'Yours lovingly' is used in ______.",
    options: ["informal letter", "formal letter", "official letter", "business letter"], 
    answer: "informal letter" 
  },
  { 
    question: "A story has ______.",
    options: ["characters, plot, setting", "only characters", "only plot", "only setting"], 
    answer: "characters, plot, setting" 
  },
  { 
    question: "The main character of a story is called ______.",
    options: ["protagonist", "antagonist", "narrator", "supporting character"], 
    answer: "protagonist" 
  },
  { 
    question: "The most important part of a message is ______.",
    options: ["main idea", "details", "examples", "extra information"], 
    answer: "main idea" 
  },

  // ============ VOCABULARY - 15 Questions ============
  { 
    question: "The synonym of 'happy' is ______.",
    options: ["joyful", "sad", "angry", "tired"], 
    answer: "joyful" 
  },
  { 
    question: "The synonym of 'big' is ______.",
    options: ["large", "small", "tiny", "short"], 
    answer: "large" 
  },
  { 
    question: "The synonym of 'fast' is ______.",
    options: ["quick", "slow", "steady", "calm"], 
    answer: "quick" 
  },
  { 
    question: "The antonym of 'hot' is ______.",
    options: ["cold", "warm", "cool", "freezing"], 
    answer: "cold" 
  },
  { 
    question: "The antonym of 'difficult' is ______.",
    options: ["easy", "hard", "tough", "complex"], 
    answer: "easy" 
  },
  { 
    question: "The antonym of 'cheap' is ______.",
    options: ["expensive", "affordable", "inexpensive", "budget-friendly"], 
    answer: "expensive" 
  },
  { 
    question: "One word for 'a person who studies stars' is ______.",
    options: ["astronomer", "astrologer", "astronaut", "aerospace engineer"], 
    answer: "astronomer" 
  },
  { 
    question: "One word for 'a person who writes books' is ______.",
    options: ["author", "reader", "editor", "publisher"], 
    answer: "author" 
  },
  { 
    question: "One word for 'one who travels to unknown places' is ______.",
    options: ["explorer", "tourist", "visitor", "guest"], 
    answer: "explorer" 
  },
  { 
    question: "One word for 'a person who works in a hospital' is ______.",
    options: ["doctor", "teacher", "engineer", "lawyer"], 
    answer: "doctor" 
  },
  { 
    question: "One word for 'a person who drives a car' is ______.",
    options: ["driver", "passenger", "pilot", "captain"], 
    answer: "driver" 
  },
  { 
    question: "One word for 'a person who teaches students' is ______.",
    options: ["teacher", "student", "principal", "clerk"], 
    answer: "teacher" 
  },
  { 
    question: "The word that means 'a place for books' is ______.",
    options: ["library", "bookstore", "school", "college"], 
    answer: "library" 
  },
  { 
    question: "The word that means 'the study of life' is ______.",
    options: ["biology", "physics", "chemistry", "mathematics"], 
    answer: "biology" 
  },
  { 
    question: "The word that means 'the study of Earth' is ______.",
    options: ["geography", "history", "science", "art"], 
    answer: "geography" 
  },
];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...englishQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10EnglishMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 1 hour = 3600 seconds
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

  // Home Page - Mobile Optimized
  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1e88e5 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📚</div>
          <h1 style={{ 
            color: "#0d47a1", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            English Mock Test
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Bihar School Examination Board - Class 10
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #0d47a1, #1e88e5)",
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
              backgroundColor: "#e3f2fd", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Total Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d47a1" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e3f2fd", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️ Time Limit</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#0d47a1" }}>60 Minutes</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#fff3e0",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "15px",
            fontSize: "12px",
            color: "#e65100",
            textAlign: "left"
          }}>
            <strong>📋 Instructions:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>All questions are compulsory</li>
              <li>Each question carries <strong>1 mark</strong></li>
              <li><strong>No negative marking</strong></li>
              <li>Submit before time runs out</li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #0d47a1 0%, #1e88e5 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)"
            }}
          >
            🚀 Start
          </button>
        </div>
      </div>
    );
  }

  // Result Page - Mobile Optimized
  if (submitted) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const isPassed = percentage >= 33;

    return (
      <div style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: "900px",
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
            <p style={{ color: "#888", fontSize: "12px" }}>English Mock Test - Class 10</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#0d47a1" }}>
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
            {isPassed && (
              <div style={{
                marginTop: "10px",
                padding: "8px",
                backgroundColor: "#d4edda",
                borderRadius: "8px",
                color: "#155724",
                fontSize: "13px"
              }}>
                🎯 You have qualified the mock test!
              </div>
            )}
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
                setTimer(3600);
                setShowTimerWarning(false);
                window.location.reload();
              }}
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #0d47a1 0%, #1e88e5 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)"
              }}
            >
              🔄 Take New Mock Test
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
        {/* Header - Mobile Optimized */}
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
            color: timer < 60 ? "#fc8181" : "#0d47a1",
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
            backgroundColor: "#e3f2fd",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#0d47a1",
            marginBottom: "12px"
          }}>
            📌 Q{current + 1}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#0d47a1",
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
                  backgroundColor: answers[current] === op ? "#e3f2fd" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #0d47a1" : "2px solid transparent",
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

        {/* Navigation */}
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#0d47a1",
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#0d47a1",
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
              backgroundColor: "#f57c00",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(245, 124, 0, 0.3)"
            }}
          >
            📤 Submit
          </button>
        </div>

        {/* Question Navigator */}
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
            Question Navigator - {answeredCount}/{questions.length}
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
                                   current === idx ? "#0d47a1" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #0d47a1" : "none",
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
            <span>🟢 Attempted</span>
            <span>🔵 Current</span>
            <span>⚪ Not Attempted</span>
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