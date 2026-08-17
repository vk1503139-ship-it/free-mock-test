// BSEBClass10MathMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 Math Question Bank (100 questions) ---
const mathQuestions = [
  // Algebra - Polynomials (10 questions)
  { 
    question: "What is the degree of the polynomial 3x³ + 5x² - 2x + 7?", 
    options: ["2", "3", "1", "4"], 
    answer: "3" 
  },
  { 
    question: "If p(x) = x² - 5x + 6, what is the value of p(2)?", 
    options: ["0", "1", "2", "3"], 
    answer: "0" 
  },
  { 
    question: "Find the zeroes of the polynomial x² - 3x + 2.", 
    options: ["1, 2", "-1, -2", "1, -2", "-1, 2"], 
    answer: "1, 2" 
  },
  { 
    question: "What is the sum of zeroes of the polynomial x² - 7x + 12?", 
    options: ["7", "12", "-7", "-12"], 
    answer: "7" 
  },
  { 
    question: "What is the product of zeroes of the polynomial 2x² - 8x + 6?", 
    options: ["3", "-3", "6", "-6"], 
    answer: "3" 
  },
  { 
    question: "If α and β are zeroes of x² - 5x + 6, find α + β.", 
    options: ["5", "6", "-5", "-6"], 
    answer: "5" 
  },
  { 
    question: "Which of the following is a polynomial?", 
    options: ["x² + 2x + 1", "x² + 2/x", "√x + 2", "x³ + 2x¹/²"], 
    answer: "x² + 2x + 1" 
  },
  { 
    question: "What is the degree of the polynomial 2x⁴ - 3x³ + x² - 5?", 
    options: ["4", "3", "2", "5"], 
    answer: "4" 
  },
  { 
    question: "Find the zeroes of the polynomial x² - 4.", 
    options: ["2, -2", "4, -4", "2, 4", "-2, -4"], 
    answer: "2, -2" 
  },
  { 
    question: "What is the value of k if x = 2 is a zero of x² - 3x + k?", 
    options: ["2", "-2", "4", "-4"], 
    answer: "2" 
  },

  // Algebra - Linear Equations (10 questions)
  { 
    question: "Solve: 2x + 3 = 7", 
    options: ["x = 1", "x = 2", "x = 3", "x = 4"], 
    answer: "x = 2" 
  },
  { 
    question: "Solve the system: x + y = 5, x - y = 1", 
    options: ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 
    answer: "x=3, y=2" 
  },
  { 
    question: "What is the slope of the line y = 3x + 2?", 
    options: ["3", "2", "-3", "-2"], 
    answer: "3" 
  },
  { 
    question: "Find the value of y: 3y - 5 = 10", 
    options: ["y = 5", "y = 3", "y = 7", "y = 4"], 
    answer: "y = 5" 
  },
  { 
    question: "Solve: 4x - 3 = 2x + 7", 
    options: ["x = 5", "x = 2", "x = 4", "x = 3"], 
    answer: "x = 5" 
  },
  { 
    question: "What is the y-intercept of the line y = 2x - 5?", 
    options: ["-5", "5", "2", "-2"], 
    answer: "-5" 
  },
  { 
    question: "Solve: 3(x + 2) = 15", 
    options: ["x = 3", "x = 4", "x = 2", "x = 5"], 
    answer: "x = 3" 
  },
  { 
    question: "If 5x - 2 = 3x + 8, find x.", 
    options: ["5", "3", "2", "4"], 
    answer: "5" 
  },
  { 
    question: "What is the value of x in x/2 + 3 = 7?", 
    options: ["8", "6", "4", "10"], 
    answer: "8" 
  },
  { 
    question: "Solve: 2y + 5 = y - 3", 
    options: ["y = -8", "y = 8", "y = -2", "y = 2"], 
    answer: "y = -8" 
  },

  // Algebra - Quadratic Equations (10 questions)
  { 
    question: "What is the discriminant of x² - 4x + 4 = 0?", 
    options: ["0", "1", "2", "4"], 
    answer: "0" 
  },
  { 
    question: "Solve: x² - 5x + 6 = 0", 
    options: ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = -1, -6"], 
    answer: "x = 2, 3" 
  },
  { 
    question: "What are the roots of x² - 4x = 0?", 
    options: ["0, 4", "0, -4", "2, 2", "-2, 2"], 
    answer: "0, 4" 
  },
  { 
    question: "If x = 3 is a root of x² - kx + 6 = 0, find k.", 
    options: ["5", "4", "3", "6"], 
    answer: "5" 
  },
  { 
    question: "Solve: 2x² - 8x = 0", 
    options: ["x = 0, 4", "x = 0, -4", "x = 2, 4", "x = -2, -4"], 
    answer: "x = 0, 4" 
  },
  { 
    question: "What is the sum of roots of x² + 6x + 8 = 0?", 
    options: ["-6", "6", "8", "-8"], 
    answer: "-6" 
  },
  { 
    question: "Find the roots of x² - 9 = 0", 
    options: ["3, -3", "9, -9", "3, 9", "-3, -9"], 
    answer: "3, -3" 
  },
  { 
    question: "The discriminant of x² + 2x + 1 = 0 is:", 
    options: ["0", "4", "1", "2"], 
    answer: "0" 
  },
  { 
    question: "Solve: x² - 2x - 3 = 0", 
    options: ["x = 3, -1", "x = -3, 1", "x = 3, 1", "x = -3, -1"], 
    answer: "x = 3, -1" 
  },
  { 
    question: "If α and β are roots of x² - 7x + 10 = 0, find αβ.", 
    options: ["10", "7", "-10", "-7"], 
    answer: "10" 
  },

  // Arithmetic Progression (8 questions)
  { 
    question: "What is the 10th term of AP: 2, 5, 8, 11, ...?", 
    options: ["29", "30", "28", "31"], 
    answer: "29" 
  },
  { 
    question: "Find the sum of first 10 terms of AP: 1, 3, 5, 7, ...", 
    options: ["100", "110", "90", "120"], 
    answer: "100" 
  },
  { 
    question: "What is the common difference of AP: 7, 10, 13, 16, ...?", 
    options: ["3", "2", "4", "5"], 
    answer: "3" 
  },
  { 
    question: "Find the 15th term of AP: 5, 8, 11, 14, ...", 
    options: ["47", "45", "43", "49"], 
    answer: "47" 
  },
  { 
    question: "Sum of first n terms of AP is given by Sn = n/2(2a + (n-1)d). This formula is for:", 
    options: ["Sum of AP", "nth term of AP", "Common difference", "First term"], 
    answer: "Sum of AP" 
  },
  { 
    question: "What is the 20th term of AP: 3, 7, 11, 15, ...?", 
    options: ["79", "80", "78", "81"], 
    answer: "79" 
  },
  { 
    question: "Find the sum of first 20 terms of AP: 2, 4, 6, 8, ...", 
    options: ["420", "400", "440", "380"], 
    answer: "420" 
  },
  { 
    question: "What is the common difference if first term is 4 and 10th term is 31?", 
    options: ["3", "2", "4", "5"], 
    answer: "3" 
  },

  // Geometry - Triangles (10 questions)
  { 
    question: "What is the sum of angles in a triangle?", 
    options: ["180°", "360°", "90°", "270°"], 
    answer: "180°" 
  },
  { 
    question: "In a right triangle, if one angle is 30°, what is the third angle?", 
    options: ["60°", "90°", "30°", "120°"], 
    answer: "60°" 
  },
  { 
    question: "What is the Pythagoras theorem?", 
    options: ["a² + b² = c²", "a² + c² = b²", "b² + c² = a²", "a² + b² = c"], 
    answer: "a² + b² = c²" 
  },
  { 
    question: "In triangle ABC, if ∠A = 50° and ∠B = 60°, find ∠C.", 
    options: ["70°", "80°", "60°", "50°"], 
    answer: "70°" 
  },
  { 
    question: "What is the area of a triangle with base 10 cm and height 6 cm?", 
    options: ["30 cm²", "60 cm²", "15 cm²", "40 cm²"], 
    answer: "30 cm²" 
  },
  { 
    question: "In a right triangle, if one side is 5 cm and hypotenuse is 13 cm, find the other side.", 
    options: ["12 cm", "8 cm", "10 cm", "15 cm"], 
    answer: "12 cm" 
  },
  { 
    question: "What is the perimeter of a triangle with sides 3 cm, 4 cm, 5 cm?", 
    options: ["12 cm", "10 cm", "15 cm", "14 cm"], 
    answer: "12 cm" 
  },
  { 
    question: "In an isosceles triangle, one angle is 40°. What are the other two angles?", 
    options: ["70° each", "40° and 100°", "60° each", "80° and 60°"], 
    answer: "70° each" 
  },
  { 
    question: "What is the area of a right triangle with legs 6 cm and 8 cm?", 
    options: ["24 cm²", "48 cm²", "12 cm²", "36 cm²"], 
    answer: "24 cm²" 
  },
  { 
    question: "In a triangle, if two angles are 45° and 45°, what type of triangle is it?", 
    options: ["Right isosceles", "Equilateral", "Scalene", "Obtuse"], 
    answer: "Right isosceles" 
  },

  // Geometry - Circles (8 questions)
  { 
    question: "What is the circumference of a circle with radius 7 cm? (Use π = 22/7)", 
    options: ["44 cm", "22 cm", "88 cm", "66 cm"], 
    answer: "44 cm" 
  },
  { 
    question: "What is the area of a circle with radius 7 cm? (Use π = 22/7)", 
    options: ["154 cm²", "44 cm²", "88 cm²", "66 cm²"], 
    answer: "154 cm²" 
  },
  { 
    question: "What is the diameter of a circle if radius is 5 cm?", 
    options: ["10 cm", "5 cm", "2.5 cm", "15 cm"], 
    answer: "10 cm" 
  },
  { 
    question: "What is π approximately equal to?", 
    options: ["3.14", "3.41", "4.13", "3.24"], 
    answer: "3.14" 
  },
  { 
    question: "What is the area of a circle with diameter 14 cm? (Use π = 22/7)", 
    options: ["154 cm²", "44 cm²", "88 cm²", "66 cm²"], 
    answer: "154 cm²" 
  },
  { 
    question: "What is the circumference of a circle with diameter 14 cm? (Use π = 22/7)", 
    options: ["44 cm", "22 cm", "88 cm", "66 cm"], 
    answer: "44 cm" 
  },
  { 
    question: "If the area of a circle is 154 cm², find its radius. (Use π = 22/7)", 
    options: ["7 cm", "14 cm", "3.5 cm", "21 cm"], 
    answer: "7 cm" 
  },
  { 
    question: "What is the length of the tangent from a point 5 cm away from center of circle of radius 3 cm?", 
    options: ["4 cm", "2 cm", "5 cm", "3 cm"], 
    answer: "4 cm" 
  },

  // Trigonometry (8 questions)
  { 
    question: "What is sin 30°?", 
    options: ["1/2", "1/√2", "√3/2", "1"], 
    answer: "1/2" 
  },
  { 
    question: "What is cos 60°?", 
    options: ["1/2", "1/√2", "√3/2", "1"], 
    answer: "1/2" 
  },
  { 
    question: "What is tan 45°?", 
    options: ["1", "0", "∞", "2"], 
    answer: "1" 
  },
  { 
    question: "What is sin²θ + cos²θ = ?", 
    options: ["1", "0", "2", "-1"], 
    answer: "1" 
  },
  { 
    question: "What is the value of tan 0°?", 
    options: ["0", "1", "∞", "2"], 
    answer: "0" 
  },
  { 
    question: "What is sin 90°?", 
    options: ["1", "0", "1/2", "√3/2"], 
    answer: "1" 
  },
  { 
    question: "What is cos 0°?", 
    options: ["1", "0", "1/2", "√3/2"], 
    answer: "1" 
  },
  { 
    question: "If sin θ = 1/2, find θ (in degrees).", 
    options: ["30°", "45°", "60°", "90°"], 
    answer: "30°" 
  },

  // Statistics (8 questions)
  { 
    question: "What is the mean of 2, 4, 6, 8, 10?", 
    options: ["6", "5", "7", "8"], 
    answer: "6" 
  },
  { 
    question: "What is the median of 1, 2, 3, 4, 5, 6?", 
    options: ["3.5", "3", "4", "4.5"], 
    answer: "3.5" 
  },
  { 
    question: "What is the mode of 1, 2, 2, 3, 3, 3, 4?", 
    options: ["3", "2", "1", "4"], 
    answer: "3" 
  },
  { 
    question: "What is the range of 5, 8, 12, 15, 20?", 
    options: ["15", "12", "8", "20"], 
    answer: "15" 
  },
  { 
    question: "Find the mean of first 10 natural numbers.", 
    options: ["5.5", "5", "6", "4.5"], 
    answer: "5.5" 
  },
  { 
    question: "What is the median of 2, 4, 6, 8, 10, 12?", 
    options: ["7", "6", "8", "7.5"], 
    answer: "7" 
  },
  { 
    question: "If the mean of 3, 5, x, 7 is 6, find x.", 
    options: ["9", "8", "7", "6"], 
    answer: "9" 
  },
  { 
    question: "What is the mode of the data: 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4?", 
    options: ["4", "2", "1", "3"], 
    answer: "4" 
  },

  // Coordinate Geometry (6 questions)
  { 
    question: "What is the distance between (2,3) and (5,7)?", 
    options: ["5 units", "3 units", "4 units", "6 units"], 
    answer: "5 units" 
  },
  { 
    question: "What is the midpoint of (2,3) and (6,7)?", 
    options: ["(4,5)", "(3,4)", "(5,6)", "(4,6)"], 
    answer: "(4,5)" 
  },
  { 
    question: "What is the x-coordinate of a point on y-axis?", 
    options: ["0", "1", "2", "3"], 
    answer: "0" 
  },
  { 
    question: "What is the distance formula between (x₁,y₁) and (x₂,y₂)?", 
    options: ["√((x₂-x₁)²+(y₂-y₁)²)", "(x₂-x₁)+(y₂-y₁)", "√(x₂-x₁)+(y₂-y₁)", "(x₂-x₁)²+(y₂-y₁)²"], 
    answer: "√((x₂-x₁)²+(y₂-y₁)²)" 
  },
  { 
    question: "What is the quadrant of point (-3, 4)?", 
    options: ["II Quadrant", "I Quadrant", "III Quadrant", "IV Quadrant"], 
    answer: "II Quadrant" 
  },
  { 
    question: "What is the slope of line passing through (1,2) and (4,8)?", 
    options: ["2", "3", "1", "4"], 
    answer: "2" 
  },

  // Mensuration (10 questions)
  { 
    question: "What is the area of rectangle with length 10 cm and breadth 5 cm?", 
    options: ["50 cm²", "30 cm²", "40 cm²", "60 cm²"], 
    answer: "50 cm²" 
  },
  { 
    question: "What is the perimeter of a square with side 6 cm?", 
    options: ["24 cm", "12 cm", "36 cm", "16 cm"], 
    answer: "24 cm" 
  },
  { 
    question: "What is the volume of a cuboid with dimensions 2 cm, 3 cm, 4 cm?", 
    options: ["24 cm³", "12 cm³", "36 cm³", "48 cm³"], 
    answer: "24 cm³" 
  },
  { 
    question: "What is the surface area of a cube with side 3 cm?", 
    options: ["54 cm²", "36 cm²", "27 cm²", "45 cm²"], 
    answer: "54 cm²" 
  },
  { 
    question: "What is the area of a parallelogram with base 8 cm and height 5 cm?", 
    options: ["40 cm²", "20 cm²", "30 cm²", "50 cm²"], 
    answer: "40 cm²" 
  },
  { 
    question: "What is the perimeter of a rectangle with length 12 cm and breadth 8 cm?", 
    options: ["40 cm", "20 cm", "48 cm", "36 cm"], 
    answer: "40 cm" 
  },
  { 
    question: "What is the area of a trapezium with parallel sides 6 cm and 8 cm, and height 4 cm?", 
    options: ["28 cm²", "24 cm²", "32 cm²", "20 cm²"], 
    answer: "28 cm²" 
  },
  { 
    question: "What is the volume of a cylinder with radius 3 cm and height 7 cm? (Use π = 22/7)", 
    options: ["198 cm³", "66 cm³", "132 cm³", "264 cm³"], 
    answer: "198 cm³" 
  },
  { 
    question: "What is the curved surface area of a cylinder with radius 2 cm and height 5 cm? (Use π = 22/7)", 
    options: ["62.86 cm²", "31.43 cm²", "125.71 cm²", "44 cm²"], 
    answer: "62.86 cm²" 
  },
  { 
    question: "What is the area of a rhombus with diagonals 6 cm and 8 cm?", 
    options: ["24 cm²", "12 cm²", "48 cm²", "36 cm²"], 
    answer: "24 cm²" 
  },

  // Additional Questions (12 questions to reach 100)
  { 
    question: "What is the value of (a+b)²?", 
    options: ["a² + 2ab + b²", "a² + b²", "a² - 2ab + b²", "a² + ab + b²"], 
    answer: "a² + 2ab + b²" 
  },
  { 
    question: "What is the value of (a-b)²?", 
    options: ["a² - 2ab + b²", "a² + b²", "a² + 2ab + b²", "a² - ab + b²"], 
    answer: "a² - 2ab + b²" 
  },
  { 
    question: "What is the value of a² - b²?", 
    options: ["(a-b)(a+b)", "(a+b)²", "(a-b)²", "(a+b)(a-b)"], 
    answer: "(a-b)(a+b)" 
  },
  { 
    question: "What is the LCM of 12 and 18?", 
    options: ["36", "24", "48", "72"], 
    answer: "36" 
  },
  { 
    question: "What is the HCF of 24 and 36?", 
    options: ["12", "6", "18", "24"], 
    answer: "12" 
  },
  { 
    question: "What is 15% of 200?", 
    options: ["30", "20", "25", "35"], 
    answer: "30" 
  },
  { 
    question: "What is 25% of 400?", 
    options: ["100", "50", "200", "150"], 
    answer: "100" 
  },
  { 
    question: "If x/3 = 5, find x.", 
    options: ["15", "5", "3", "8"], 
    answer: "15" 
  },
  { 
    question: "What is the square root of 144?", 
    options: ["12", "14", "11", "13"], 
    answer: "12" 
  },
  { 
    question: "What is the cube root of 8?", 
    options: ["2", "4", "3", "1"], 
    answer: "2" 
  },
  { 
    question: "What is the value of 2³ + 3²?", 
    options: ["17", "15", "13", "19"], 
    answer: "17" 
  },
  { 
    question: "What is the value of (-3)²?", 
    options: ["9", "-9", "6", "-6"], 
    answer: "9" 
  },
];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...mathQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10MathMockTest() {
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
        background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📐</div>
          <h1 style={{ 
            color: "#0d47a1", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            BSEB Class 10 Math Mock Test
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            Bihar School Examination Board - 2026
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #0d47a1, #1976d2)",
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
              background: "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(25, 118, 210, 0.4)"
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
            <p style={{ color: "#888", fontSize: "12px" }}>BSEB Class 10 Math Mock Test</p>
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
                background: "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(25, 118, 210, 0.4)"
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