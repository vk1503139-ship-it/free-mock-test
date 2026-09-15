// Math12thQuiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- 12th Mathematics Question Bank (100 questions) - Hindi & English ---

// Hindi Questions
const mathHindi = [
  // Relations and Functions
  { question: "संबंध क्या है?", options: ["क्रमित युग्मों का समुच्चय", "फलन", "समुच्चय", "कोई नहीं"], answer: "क्रमित युग्मों का समुच्चय" },
  { question: "फलन क्या है?", options: ["विशेष संबंध", "समुच्चय", "संबंध", "कोई नहीं"], answer: "विशेष संबंध" },
  { question: "तत्समक फलन क्या है?", options: ["f(x) = x", "f(x) = 1", "f(x) = 0", "कोई नहीं"], answer: "f(x) = x" },
  { question: "अचर फलन क्या है?", options: ["f(x) = c", "f(x) = x", "f(x) = x²", "कोई नहीं"], answer: "f(x) = c" },
  { question: "एकैकी फलन क्या है?", options: ["भिन्न निवेश के लिए भिन्न निर्गत", "समान निर्गत", "कोई नहीं", "दोनों"], answer: "भिन्न निवेश के लिए भिन्न निर्गत" },
  { question: "आच्छादक फलन क्या है?", options: ["प्रत्येक निर्गत का पूर्व प्रतिबिंब", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "प्रत्येक निर्गत का पूर्व प्रतिबिंब" },
  { question: "संयुक्त फलन क्या है?", options: ["fog(x) = f(g(x))", "f(x)+g(x)", "f(x)-g(x)", "कोई नहीं"], answer: "fog(x) = f(g(x))" },
  { question: "प्रतिलोम फलन क्या है?", options: ["f⁻¹(x)", "f(x)", "g(x)", "कोई नहीं"], answer: "f⁻¹(x)" },
  { question: "द्विआधारी संक्रिया क्या है?", options: ["A×A → A", "A → A", "A×A → B", "कोई नहीं"], answer: "A×A → A" },
  { question: "तुल्यता संबंध के गुण क्या हैं?", options: ["स्वतुल्य, सममित, संक्रामक", "केवल स्वतुल्य", "केवल सममित", "कोई नहीं"], answer: "स्वतुल्य, सममित, संक्रामक" },

  // Inverse Trigonometric Functions
  { question: "sin⁻¹x का परिसर क्या है?", options: ["[-π/2, π/2]", "[0, π]", "[-π, π]", "कोई नहीं"], answer: "[-π/2, π/2]" },
  { question: "cos⁻¹x का परिसर क्या है?", options: ["[0, π]", "[-π/2, π/2]", "[-π, π]", "कोई नहीं"], answer: "[0, π]" },
  { question: "tan⁻¹x का परिसर क्या है?", options: ["(-π/2, π/2)", "[0, π]", "[-π, π]", "कोई नहीं"], answer: "(-π/2, π/2)" },
  { question: "sin⁻¹x + cos⁻¹x का मान क्या है?", options: ["π/2", "π", "0", "कोई नहीं"], answer: "π/2" },
  { question: "tan⁻¹x + cot⁻¹x का मान क्या है?", options: ["π/2", "π", "0", "कोई नहीं"], answer: "π/2" },
  { question: "sec⁻¹x + cosec⁻¹x का मान क्या है?", options: ["π/2", "π", "0", "कोई नहीं"], answer: "π/2" },
  { question: "sin⁻¹(-x) का मान क्या है?", options: ["-sin⁻¹x", "sin⁻¹x", "cos⁻¹x", "कोई नहीं"], answer: "-sin⁻¹x" },
  { question: "cos⁻¹(-x) का मान क्या है?", options: ["π - cos⁻¹x", "cos⁻¹x", "sin⁻¹x", "कोई नहीं"], answer: "π - cos⁻¹x" },
  { question: "tan⁻¹x + tan⁻¹y का सूत्र क्या है?", options: ["tan⁻¹((x+y)/(1-xy))", "tan⁻¹(x+y)", "tan⁻¹(xy)", "कोई नहीं"], answer: "tan⁻¹((x+y)/(1-xy))" },
  { question: "2tan⁻¹x का मान क्या है?", options: ["tan⁻¹(2x/(1-x²))", "tan⁻¹(x)", "tan⁻¹(2x)", "कोई नहीं"], answer: "tan⁻¹(2x/(1-x²))" },

  // Matrices
  { question: "आव्यूह क्या है?", options: ["संख्याओं का आयताकार व्यवस्था", "संख्याओं का समूह", "फलन", "कोई नहीं"], answer: "संख्याओं का आयताकार व्यवस्था" },
  { question: "आव्यूह की कोटि क्या है?", options: ["पंक्तियाँ × स्तंभ", "पंक्तियाँ + स्तंभ", "पंक्तियाँ - स्तंभ", "कोई नहीं"], answer: "पंक्तियाँ × स्तंभ" },
  { question: "वर्ग आव्यूह क्या है?", options: ["पंक्तियाँ = स्तंभ", "पंक्तियाँ ≠ स्तंभ", "कोई नहीं", "दोनों"], answer: "पंक्तियाँ = स्तंभ" },
  { question: "तत्समक आव्यूह क्या है?", options: ["विकर्ण तत्व 1", "विकर्ण तत्व 0", "कोई नहीं", "दोनों"], answer: "विकर्ण तत्व 1" },
  { question: "शून्य आव्यूह क्या है?", options: ["सभी तत्व 0", "सभी तत्व 1", "कोई नहीं", "दोनों"], answer: "सभी तत्व 0" },
  { question: "आव्यूह का योग कब संभव है?", options: ["समान कोटि", "भिन्न कोटि", "कोई नहीं", "दोनों"], answer: "समान कोटि" },
  { question: "आव्यूह का गुणन कब संभव है?", options: ["स्तंभ = पंक्ति", "पंक्ति = स्तंभ", "कोई नहीं", "दोनों"], answer: "स्तंभ = पंक्ति" },
  { question: "आव्यूह का परिवर्त क्या है?", options: ["पंक्ति ↔ स्तंभ", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "पंक्ति ↔ स्तंभ" },
  { question: "सममित आव्यूह क्या है?", options: ["A' = A", "A' = -A", "कोई नहीं", "दोनों"], answer: "A' = A" },
  { question: "विषम सममित आव्यूह क्या है?", options: ["A' = -A", "A' = A", "कोई नहीं", "दोनों"], answer: "A' = -A" },

  // Determinants
  { question: "सारणिक क्या है?", options: ["वर्ग आव्यूह से संबंधित संख्या", "आव्यूह", "फलन", "कोई नहीं"], answer: "वर्ग आव्यूह से संबंधित संख्या" },
  { question: "2×2 सारणिक का मान क्या है?", options: ["ad - bc", "ab - cd", "ac - bd", "कोई नहीं"], answer: "ad - bc" },
  { question: "3×3 सारणिक का विस्तार कैसे होता है?", options: ["पहली पंक्ति के अनुदिश", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "पहली पंक्ति के अनुदिश" },
  { question: "सारणिक के गुण क्या हैं?", options: ["पंक्ति परिवर्तन से चिह्न बदलता है", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "पंक्ति परिवर्तन से चिह्न बदलता है" },
  { question: "क्षेत्रफल कैसे निकालते हैं?", options: ["1/2 × सारणिक", "सारणिक", "कोई नहीं", "दोनों"], answer: "1/2 × सारणिक" },
  { question: "आव्यूह का व्युत्क्रम क्या है?", options: ["adj(A)/|A|", "|A|/adj(A)", "adj(A)", "कोई नहीं"], answer: "adj(A)/|A|" },
  { question: "सहखंड क्या है?", options: ["(-1)^(i+j) × उपसारणिक", "उपसारणिक", "कोई नहीं", "दोनों"], answer: "(-1)^(i+j) × उपसारणिक" },
  { question: "adj(A) क्या है?", options: ["सहखंडों का परिवर्त", "सहखंड", "कोई नहीं", "दोनों"], answer: "सहखंडों का परिवर्त" },
  { question: "|A| = 0 का क्या अर्थ है?", options: ["अव्युत्क्रमणीय", "व्युत्क्रमणीय", "कोई नहीं", "दोनों"], answer: "अव्युत्क्रमणीय" },
  { question: "रैखिक समीकरणों का हल कैसे निकालते हैं?", options: ["आव्यूह विधि", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "आव्यूह विधि" },

  // Continuity and Differentiability
  { question: "सांतत्य क्या है?", options: ["फलन का непрерыв होना", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "फलन का непрерыв होना" },
  { question: "अवकलनीयता क्या है?", options: ["अवकलज का अस्तित्व", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "अवकलज का अस्तित्व" },
  { question: "अवकलज क्या है?", options: ["परिवर्तन की दर", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "परिवर्तन की दर" },
  { question: "d/dx(x^n) क्या है?", options: ["nx^(n-1)", "x^n", "nx^n", "कोई नहीं"], answer: "nx^(n-1)" },
  { question: "d/dx(sin x) क्या है?", options: ["cos x", "-cos x", "sin x", "कोई नहीं"], answer: "cos x" },
  { question: "d/dx(cos x) क्या है?", options: ["-sin x", "sin x", "cos x", "कोई नहीं"], answer: "-sin x" },
  { question: "d/dx(tan x) क्या है?", options: ["sec²x", "sec x", "tan x", "कोई नहीं"], answer: "sec²x" },
  { question: "d/dx(e^x) क्या है?", options: ["e^x", "xe^x", "e^x/x", "कोई नहीं"], answer: "e^x" },
  { question: "d/dx(log x) क्या है?", options: ["1/x", "log x", "x", "कोई नहीं"], answer: "1/x" },
  { question: "श्रृंखला नियम क्या है?", options: ["dy/dx = dy/du × du/dx", "dy/dx = dy/du", "dy/dx = du/dx", "कोई नहीं"], answer: "dy/dx = dy/du × du/dx" },

  // Application of Derivatives
  { question: "अवकलज का उपयोग क्या है?", options: ["वृद्धि और ह्रास", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "वृद्धि और ह्रास" },
  { question: "उच्चिष्ठ क्या है?", options: ["स्थानीय अधिकतम", "स्थानीय न्यूनतम", "कोई नहीं", "दोनों"], answer: "स्थानीय अधिकतम" },
  { question: "निम्निष्ठ क्या है?", options: ["स्थानीय न्यूनतम", "स्थानीय अधिकतम", "कोई नहीं", "दोनों"], answer: "स्थानीय न्यूनतम" },
  { question: "स्पर्श रेखा की प्रवणता क्या है?", options: ["dy/dx", "dx/dy", "कोई नहीं", "दोनों"], answer: "dy/dx" },
  { question: "अभिलंब की प्रवणता क्या है?", options: ["-dx/dy", "dy/dx", "कोई नहीं", "दोनों"], answer: "-dx/dy" },
  { question: "वृद्धि के लिए शर्त क्या है?", options: ["dy/dx > 0", "dy/dx < 0", "dy/dx = 0", "कोई नहीं"], answer: "dy/dx > 0" },
  { question: "ह्रास के लिए शर्त क्या है?", options: ["dy/dx < 0", "dy/dx > 0", "dy/dx = 0", "कोई नहीं"], answer: "dy/dx < 0" },
  { question: "उच्चिष्ठ के लिए शर्त क्या है?", options: ["dy/dx = 0, d²y/dx² < 0", "dy/dx = 0", "d²y/dx² > 0", "कोई नहीं"], answer: "dy/dx = 0, d²y/dx² < 0" },
  { question: "निम्निष्ठ के लिए शर्त क्या है?", options: ["dy/dx = 0, d²y/dx² > 0", "dy/dx = 0", "d²y/dx² < 0", "कोई नहीं"], answer: "dy/dx = 0, d²y/dx² > 0" },
  { question: "अवकलज का भौतिक अर्थ क्या है?", options: ["वेग", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "वेग" },

  // Integrals
  { question: "समाकलन क्या है?", options: ["अवकलन का व्युत्क्रम", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "अवकलन का व्युत्क्रम" },
  { question: "∫x^n dx क्या है?", options: ["x^(n+1)/(n+1) + C", "nx^(n-1)", "x^n", "कोई नहीं"], answer: "x^(n+1)/(n+1) + C" },
  { question: "∫sin x dx क्या है?", options: ["-cos x + C", "cos x + C", "sin x + C", "कोई नहीं"], answer: "-cos x + C" },
  { question: "∫cos x dx क्या है?", options: ["sin x + C", "-sin x + C", "cos x + C", "कोई नहीं"], answer: "sin x + C" },
  { question: "∫e^x dx क्या है?", options: ["e^x + C", "xe^x + C", "e^x/x + C", "कोई नहीं"], answer: "e^x + C" },
  { question: "∫1/x dx क्या है?", options: ["log|x| + C", "1/x + C", "x + C", "कोई नहीं"], answer: "log|x| + C" },
  { question: "प्रतिस्थापन विधि क्या है?", options: ["u = f(x)", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "u = f(x)" },
  { question: "खंडशः समाकलन का सूत्र क्या है?", options: ["∫u dv = uv - ∫v du", "∫u dv = uv + ∫v du", "कोई नहीं", "दोनों"], answer: "∫u dv = uv - ∫v du" },
  { question: "निश्चित समाकल क्या है?", options: ["∫[a,b] f(x) dx", "∫f(x) dx", "कोई नहीं", "दोनों"], answer: "∫[a,b] f(x) dx" },
  { question: "निश्चित समाकल का गुण क्या है?", options: ["∫[a,b] f(x) dx = -∫[b,a] f(x) dx", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "∫[a,b] f(x) dx = -∫[b,a] f(x) dx" },

  // Application of Integrals
  { question: "समाकलन का उपयोग क्या है?", options: ["क्षेत्रफल", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "क्षेत्रफल" },
  { question: "वक्र के नीचे का क्षेत्रफल कैसे निकालते हैं?", options: ["∫f(x) dx", "∫f(y) dy", "कोई नहीं", "दोनों"], answer: "∫f(x) dx" },
  { question: "दो वक्रों के बीच का क्षेत्रफल कैसे निकालते हैं?", options: ["∫(f(x)-g(x)) dx", "∫(g(x)-f(x)) dx", "कोई नहीं", "दोनों"], answer: "∫(f(x)-g(x)) dx" },
  { question: "x-अक्ष के ऊपर का क्षेत्रफल क्या है?", options: ["धनात्मक", "ऋणात्मक", "कोई नहीं", "दोनों"], answer: "धनात्मक" },
  { question: "x-अक्ष के नीचे का क्षेत्रफल क्या है?", options: ["ऋणात्मक", "धनात्मक", "कोई नहीं", "दोनों"], answer: "ऋणात्मक" },
  { question: "वृत्त का क्षेत्रफल क्या है?", options: ["πr²", "2πr", "πr", "कोई नहीं"], answer: "πr²" },
  { question: "दीर्घवृत्त का क्षेत्रफल क्या है?", options: ["πab", "πa²", "πb²", "कोई नहीं"], answer: "πab" },
  { question: "परवलय का क्षेत्रफल क्या है?", options: ["(2/3)ab", "ab", "a²", "कोई नहीं"], answer: "(2/3)ab" },
  { question: "रेखा का क्षेत्रफल क्या है?", options: ["1/2 × आधार × ऊँचाई", "आधार × ऊँचाई", "कोई नहीं", "दोनों"], answer: "1/2 × आधार × ऊँचाई" },
  { question: "त्रिभुज का क्षेत्रफल क्या है?", options: ["1/2 × आधार × ऊँचाई", "आधार × ऊँचाई", "कोई नहीं", "दोनों"], answer: "1/2 × आधार × ऊँचाई" },

  // Differential Equations
  { question: "अवकल समीकरण क्या है?", options: ["अवकलज वाला समीकरण", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "अवकलज वाला समीकरण" },
  { question: "अवकल समीकरण की कोटि क्या है?", options: ["उच्चतम अवकलज की कोटि", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "उच्चतम अवकलज की कोटि" },
  { question: "अवकल समीकरण की घात क्या है?", options: ["उच्चतम अवकलज की घात", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "उच्चतम अवकलज की घात" },
  { question: "चर पृथक्करण विधि क्या है?", options: ["चरों को अलग करना", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "चरों को अलग करना" },
  { question: "समघातीय अवकल समीकरण क्या है?", options: ["dy/dx = f(x,y) समघातीय", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "dy/dx = f(x,y) समघातीय" },
  { question: "रैखिक अवकल समीकरण क्या है?", options: ["dy/dx + Py = Q", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "dy/dx + Py = Q" },
  { question: "समाकलन गुणक क्या है?", options: ["e^∫P dx", "e^∫Q dx", "कोई नहीं", "दोनों"], answer: "e^∫P dx" },
  { question: "अवकल समीकरण का हल क्या है?", options: ["सामान्य हल", "विशिष्ट हल", "दोनों", "कोई नहीं"], answer: "दोनों" },
  { question: "प्रारंभिक शर्त क्या है?", options: ["y(x₀) = y₀", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "y(x₀) = y₀" },
  { question: "अवकल समीकरण का अनुप्रयोग क्या है?", options: ["भौतिकी, जीव विज्ञान", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "भौतिकी, जीव विज्ञान" },

  // Vector Algebra
  { question: "सदिश क्या है?", options: ["परिमाण और दिशा", "केवल परिमाण", "केवल दिशा", "कोई नहीं"], answer: "परिमाण और दिशा" },
  { question: "अदिश क्या है?", options: ["केवल परिमाण", "परिमाण और दिशा", "कोई नहीं", "दोनों"], answer: "केवल परिमाण" },
  { question: "सदिश का योग क्या है?", options: ["त्रिभुज नियम", "समांतर चतुर्भुज नियम", "दोनों", "कोई नहीं"], answer: "दोनों" },
  { question: "सदिश का अदिश गुणनफल क्या है?", options: ["a·b = |a||b|cosθ", "a×b", "कोई नहीं", "दोनों"], answer: "a·b = |a||b|cosθ" },
  { question: "सदिश का सदिश गुणनफल क्या है?", options: ["a×b = |a||b|sinθ n̂", "a·b", "कोई नहीं", "दोनों"], answer: "a×b = |a||b|sinθ n̂" },
  { question: "लंबवत सदिशों के लिए क्या सत्य है?", options: ["a·b = 0", "a×b = 0", "कोई नहीं", "दोनों"], answer: "a·b = 0" },
  { question: "समांतर सदिशों के लिए क्या सत्य है?", options: ["a×b = 0", "a·b = 0", "कोई नहीं", "दोनों"], answer: "a×b = 0" },
  { question: "सदिश का परिमाण क्या है?", options: ["√(x²+y²+z²)", "x+y+z", "xyz", "कोई नहीं"], answer: "√(x²+y²+z²)" },
  { question: "इकाई सदिश क्या है?", options: ["परिमाण 1", "परिमाण 0", "कोई नहीं", "दोनों"], answer: "परिमाण 1" },
  { question: "सदिश का अनुप्रयोग क्या है?", options: ["भौतिकी, ज्यामिति", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "भौतिकी, ज्यामिति" },

  // Three Dimensional Geometry
  { question: "त्रिविमीय ज्यामिति क्या है?", options: ["3D में ज्यामिति", "2D में ज्यामिति", "कोई नहीं", "दोनों"], answer: "3D में ज्यामिति" },
  { question: "दो बिंदुओं के बीच की दूरी क्या है?", options: ["√((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "√((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)" },
  { question: "रेखा का दिक् अनुपात क्या है?", options: ["a, b, c", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "a, b, c" },
  { question: "रेखा का दिक् कोसाइन क्या है?", options: ["l, m, n", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "l, m, n" },
  { question: "रेखा का समीकरण क्या है?", options: ["(x-x₁)/a = (y-y₁)/b = (z-z₁)/c", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "(x-x₁)/a = (y-y₁)/b = (z-z₁)/c" },
  { question: "समतल का समीकरण क्या है?", options: ["ax + by + cz + d = 0", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "ax + by + cz + d = 0" },
  { question: "दो रेखाओं के बीच का कोण क्या है?", options: ["cosθ = |a₁a₂+b₁b₂+c₁c₂|/√...", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "cosθ = |a₁a₂+b₁b₂+c₁c₂|/√..." },
  { question: "रेखा और समतल के बीच का कोण क्या है?", options: ["sinθ = |al+bm+cn|/√...", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "sinθ = |al+bm+cn|/√..." },
  { question: "दो समतलों के बीच का कोण क्या है?", options: ["cosθ = |a₁a₂+b₁b₂+c₁c₂|/√...", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "cosθ = |a₁a₂+b₁b₂+c₁c₂|/√..." },
  { question: "बिंदु से समतल की दूरी क्या है?", options: ["|ax₁+by₁+cz₁+d|/√(a²+b²+c²)", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "|ax₁+by₁+cz₁+d|/√(a²+b²+c²)" },

  // Linear Programming
  { question: "रैखिक प्रोग्रामन क्या है?", options: ["रैखिक फलन का अनुकूलन", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "रैखिक फलन का अनुकूलन" },
  { question: "उद्देश्य फलन क्या है?", options: ["जिसे अधिकतम/न्यूनतम करना है", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "जिसे अधिकतम/न्यूनतम करना है" },
  { question: "व्यवरोध क्या हैं?", options: ["रैखिक असमिकाएँ", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "रैखिक असमिकाएँ" },
  { question: "सुसंगत क्षेत्र क्या है?", options: ["सभी व्यवरोधों को संतुष्ट करने वाला क्षेत्र", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "सभी व्यवरोधों को संतुष्ट करने वाला क्षेत्र" },
  { question: "इष्टतम हल क्या है?", options: ["अधिकतम/न्यूनतम मान", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "अधिकतम/न्यूनतम मान" },
  { question: "कोणीय बिंदु विधि क्या है?", options: ["सुसंगत क्षेत्र के शीर्षों पर मान", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "सुसंगत क्षेत्र के शीर्षों पर मान" },
  { question: "रैखिक प्रोग्रामन का अनुप्रयोग क्या है?", options: ["व्यापार, उद्योग", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "व्यापार, उद्योग" },
  { question: "असमिका का आलेख कैसे बनाते हैं?", options: ["रेखा खींचकर", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "रेखा खींचकर" },
  { question: "सुसंगत क्षेत्र कैसे ज्ञात करते हैं?", options: ["सभी असमिकाओं का उभयनिष्ठ क्षेत्र", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "सभी असमिकाओं का उभयनिष्ठ क्षेत्र" },
  { question: "रैखिक प्रोग्रामन की सीमाएँ क्या हैं?", options: ["चरों का ऋणात्मक न होना", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "चरों का ऋणात्मक न होना" },

  // Probability
  { question: "प्रायिकता क्या है?", options: ["घटना के होने की संभावना", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "घटना के होने की संभावना" },
  { question: "प्रायिकता का परिसर क्या है?", options: ["[0, 1]", "[-1, 1]", "[0, ∞]", "कोई नहीं"], answer: "[0, 1]" },
  { question: "सप्रतिबंध प्रायिकता क्या है?", options: ["P(A|B) = P(A∩B)/P(B)", "P(A∩B)", "P(A∪B)", "कोई नहीं"], answer: "P(A|B) = P(A∩B)/P(B)" },
  { question: "स्वतंत्र घटनाएँ क्या हैं?", options: ["P(A∩B) = P(A)P(B)", "P(A|B) = P(A)", "दोनों", "कोई नहीं"], answer: "दोनों" },
  { question: "बेज़ प्रमेय क्या है?", options: ["P(A|B) = P(B|A)P(A)/P(B)", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "P(A|B) = P(B|A)P(A)/P(B)" },
  { question: "यादृच्छिक चर क्या है?", options: ["प्रतिदर्श समष्टि से वास्तविक संख्या", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "प्रतिदर्श समष्टि से वास्तविक संख्या" },
  { question: "प्रायिकता बंटन क्या है?", options: ["चर के मान और प्रायिकता", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "चर के मान और प्रायिकता" },
  { question: "माध्य क्या है?", options: ["Σxᵢpᵢ", "Σpᵢ", "Σxᵢ", "कोई नहीं"], answer: "Σxᵢpᵢ" },
  { question: "प्रसरण क्या है?", options: ["Σ(xᵢ-μ)²pᵢ", "Σxᵢ²pᵢ", "कोई नहीं", "दोनों"], answer: "Σ(xᵢ-μ)²pᵢ" },
  { question: "बरनौली बंटन क्या है?", options: ["द्विपद बंटन का विशेष मामला", "कोई नहीं", "दोनों", "कोई नहीं"], answer: "द्विपद बंटन का विशेष मामला" },
];

// English Questions
const mathEnglish = [
  // Relations and Functions
  { question: "What is a relation?", options: ["Set of ordered pairs", "Function", "Set", "None"], answer: "Set of ordered pairs" },
  { question: "What is a function?", options: ["Special relation", "Set", "Relation", "None"], answer: "Special relation" },
  { question: "What is identity function?", options: ["f(x) = x", "f(x) = 1", "f(x) = 0", "None"], answer: "f(x) = x" },
  { question: "What is constant function?", options: ["f(x) = c", "f(x) = x", "f(x) = x²", "None"], answer: "f(x) = c" },
  { question: "What is one-one function?", options: ["Different inputs have different outputs", "Same output", "None", "Both"], answer: "Different inputs have different outputs" },
  { question: "What is onto function?", options: ["Every output has pre-image", "None", "Both", "None"], answer: "Every output has pre-image" },
  { question: "What is composite function?", options: ["fog(x) = f(g(x))", "f(x)+g(x)", "f(x)-g(x)", "None"], answer: "fog(x) = f(g(x))" },
  { question: "What is inverse function?", options: ["f⁻¹(x)", "f(x)", "g(x)", "None"], answer: "f⁻¹(x)" },
  { question: "What is binary operation?", options: ["A×A → A", "A → A", "A×A → B", "None"], answer: "A×A → A" },
  { question: "What are properties of equivalence relation?", options: ["Reflexive, symmetric, transitive", "Only reflexive", "Only symmetric", "None"], answer: "Reflexive, symmetric, transitive" },

  // Inverse Trigonometric Functions
  { question: "What is range of sin⁻¹x?", options: ["[-π/2, π/2]", "[0, π]", "[-π, π]", "None"], answer: "[-π/2, π/2]" },
  { question: "What is range of cos⁻¹x?", options: ["[0, π]", "[-π/2, π/2]", "[-π, π]", "None"], answer: "[0, π]" },
  { question: "What is range of tan⁻¹x?", options: ["(-π/2, π/2)", "[0, π]", "[-π, π]", "None"], answer: "(-π/2, π/2)" },
  { question: "What is value of sin⁻¹x + cos⁻¹x?", options: ["π/2", "π", "0", "None"], answer: "π/2" },
  { question: "What is value of tan⁻¹x + cot⁻¹x?", options: ["π/2", "π", "0", "None"], answer: "π/2" },
  { question: "What is value of sec⁻¹x + cosec⁻¹x?", options: ["π/2", "π", "0", "None"], answer: "π/2" },
  { question: "What is sin⁻¹(-x)?", options: ["-sin⁻¹x", "sin⁻¹x", "cos⁻¹x", "None"], answer: "-sin⁻¹x" },
  { question: "What is cos⁻¹(-x)?", options: ["π - cos⁻¹x", "cos⁻¹x", "sin⁻¹x", "None"], answer: "π - cos⁻¹x" },
  { question: "What is formula for tan⁻¹x + tan⁻¹y?", options: ["tan⁻¹((x+y)/(1-xy))", "tan⁻¹(x+y)", "tan⁻¹(xy)", "None"], answer: "tan⁻¹((x+y)/(1-xy))" },
  { question: "What is value of 2tan⁻¹x?", options: ["tan⁻¹(2x/(1-x²))", "tan⁻¹(x)", "tan⁻¹(2x)", "None"], answer: "tan⁻¹(2x/(1-x²))" },

  // Matrices
  { question: "What is a matrix?", options: ["Rectangular arrangement of numbers", "Group of numbers", "Function", "None"], answer: "Rectangular arrangement of numbers" },
  { question: "What is order of matrix?", options: ["Rows × Columns", "Rows + Columns", "Rows - Columns", "None"], answer: "Rows × Columns" },
  { question: "What is square matrix?", options: ["Rows = Columns", "Rows ≠ Columns", "None", "Both"], answer: "Rows = Columns" },
  { question: "What is identity matrix?", options: ["Diagonal elements 1", "Diagonal elements 0", "None", "Both"], answer: "Diagonal elements 1" },
  { question: "What is zero matrix?", options: ["All elements 0", "All elements 1", "None", "Both"], answer: "All elements 0" },
  { question: "When is matrix addition possible?", options: ["Same order", "Different order", "None", "Both"], answer: "Same order" },
  { question: "When is matrix multiplication possible?", options: ["Columns = Rows", "Rows = Columns", "None", "Both"], answer: "Columns = Rows" },
  { question: "What is transpose of matrix?", options: ["Rows ↔ Columns", "None", "Both", "None"], answer: "Rows ↔ Columns" },
  { question: "What is symmetric matrix?", options: ["A' = A", "A' = -A", "None", "Both"], answer: "A' = A" },
  { question: "What is skew-symmetric matrix?", options: ["A' = -A", "A' = A", "None", "Both"], answer: "A' = -A" },

  // Determinants
  { question: "What is a determinant?", options: ["Number associated with square matrix", "Matrix", "Function", "None"], answer: "Number associated with square matrix" },
  { question: "What is value of 2×2 determinant?", options: ["ad - bc", "ab - cd", "ac - bd", "None"], answer: "ad - bc" },
  { question: "How is 3×3 determinant expanded?", options: ["Along first row", "None", "Both", "None"], answer: "Along first row" },
  { question: "What are properties of determinants?", options: ["Row interchange changes sign", "None", "Both", "None"], answer: "Row interchange changes sign" },
  { question: "How to find area?", options: ["1/2 × determinant", "determinant", "None", "Both"], answer: "1/2 × determinant" },
  { question: "What is inverse of matrix?", options: ["adj(A)/|A|", "|A|/adj(A)", "adj(A)", "None"], answer: "adj(A)/|A|" },
  { question: "What is cofactor?", options: ["(-1)^(i+j) × minor", "minor", "None", "Both"], answer: "(-1)^(i+j) × minor" },
  { question: "What is adj(A)?", options: ["Transpose of cofactors", "cofactor", "None", "Both"], answer: "Transpose of cofactors" },
  { question: "What does |A| = 0 mean?", options: ["Non-invertible", "Invertible", "None", "Both"], answer: "Non-invertible" },
  { question: "How to solve linear equations?", options: ["Matrix method", "None", "Both", "None"], answer: "Matrix method" },

  // Continuity and Differentiability
  { question: "What is continuity?", options: ["Function is continuous", "None", "Both", "None"], answer: "Function is continuous" },
  { question: "What is differentiability?", options: ["Existence of derivative", "None", "Both", "None"], answer: "Existence of derivative" },
  { question: "What is derivative?", options: ["Rate of change", "None", "Both", "None"], answer: "Rate of change" },
  { question: "What is d/dx(x^n)?", options: ["nx^(n-1)", "x^n", "nx^n", "None"], answer: "nx^(n-1)" },
  { question: "What is d/dx(sin x)?", options: ["cos x", "-cos x", "sin x", "None"], answer: "cos x" },
  { question: "What is d/dx(cos x)?", options: ["-sin x", "sin x", "cos x", "None"], answer: "-sin x" },
  { question: "What is d/dx(tan x)?", options: ["sec²x", "sec x", "tan x", "None"], answer: "sec²x" },
  { question: "What is d/dx(e^x)?", options: ["e^x", "xe^x", "e^x/x", "None"], answer: "e^x" },
  { question: "What is d/dx(log x)?", options: ["1/x", "log x", "x", "None"], answer: "1/x" },
  { question: "What is chain rule?", options: ["dy/dx = dy/du × du/dx", "dy/dx = dy/du", "dy/dx = du/dx", "None"], answer: "dy/dx = dy/du × du/dx" },

  // Application of Derivatives
  { question: "What is use of derivative?", options: ["Increasing and decreasing", "None", "Both", "None"], answer: "Increasing and decreasing" },
  { question: "What is maximum?", options: ["Local maximum", "Local minimum", "None", "Both"], answer: "Local maximum" },
  { question: "What is minimum?", options: ["Local minimum", "Local maximum", "None", "Both"], answer: "Local minimum" },
  { question: "What is slope of tangent?", options: ["dy/dx", "dx/dy", "None", "Both"], answer: "dy/dx" },
  { question: "What is slope of normal?", options: ["-dx/dy", "dy/dx", "None", "Both"], answer: "-dx/dy" },
  { question: "What is condition for increasing?", options: ["dy/dx > 0", "dy/dx < 0", "dy/dx = 0", "None"], answer: "dy/dx > 0" },
  { question: "What is condition for decreasing?", options: ["dy/dx < 0", "dy/dx > 0", "dy/dx = 0", "None"], answer: "dy/dx < 0" },
  { question: "What is condition for maximum?", options: ["dy/dx = 0, d²y/dx² < 0", "dy/dx = 0", "d²y/dx² > 0", "None"], answer: "dy/dx = 0, d²y/dx² < 0" },
  { question: "What is condition for minimum?", options: ["dy/dx = 0, d²y/dx² > 0", "dy/dx = 0", "d²y/dx² < 0", "None"], answer: "dy/dx = 0, d²y/dx² > 0" },
  { question: "What is physical meaning of derivative?", options: ["Velocity", "None", "Both", "None"], answer: "Velocity" },

  // Integrals
  { question: "What is integration?", options: ["Inverse of differentiation", "None", "Both", "None"], answer: "Inverse of differentiation" },
  { question: "What is ∫x^n dx?", options: ["x^(n+1)/(n+1) + C", "nx^(n-1)", "x^n", "None"], answer: "x^(n+1)/(n+1) + C" },
  { question: "What is ∫sin x dx?", options: ["-cos x + C", "cos x + C", "sin x + C", "None"], answer: "-cos x + C" },
  { question: "What is ∫cos x dx?", options: ["sin x + C", "-sin x + C", "cos x + C", "None"], answer: "sin x + C" },
  { question: "What is ∫e^x dx?", options: ["e^x + C", "xe^x + C", "e^x/x + C", "None"], answer: "e^x + C" },
  { question: "What is ∫1/x dx?", options: ["log|x| + C", "1/x + C", "x + C", "None"], answer: "log|x| + C" },
  { question: "What is substitution method?", options: ["u = f(x)", "None", "Both", "None"], answer: "u = f(x)" },
  { question: "What is formula for integration by parts?", options: ["∫u dv = uv - ∫v du", "∫u dv = uv + ∫v du", "None", "Both"], answer: "∫u dv = uv - ∫v du" },
  { question: "What is definite integral?", options: ["∫[a,b] f(x) dx", "∫f(x) dx", "None", "Both"], answer: "∫[a,b] f(x) dx" },
  { question: "What is property of definite integral?", options: ["∫[a,b] f(x) dx = -∫[b,a] f(x) dx", "None", "Both", "None"], answer: "∫[a,b] f(x) dx = -∫[b,a] f(x) dx" },

  // Application of Integrals
  { question: "What is use of integration?", options: ["Area", "None", "Both", "None"], answer: "Area" },
  { question: "How to find area under curve?", options: ["∫f(x) dx", "∫f(y) dy", "None", "Both"], answer: "∫f(x) dx" },
  { question: "How to find area between two curves?", options: ["∫(f(x)-g(x)) dx", "∫(g(x)-f(x)) dx", "None", "Both"], answer: "∫(f(x)-g(x)) dx" },
  { question: "What is area above x-axis?", options: ["Positive", "Negative", "None", "Both"], answer: "Positive" },
  { question: "What is area below x-axis?", options: ["Negative", "Positive", "None", "Both"], answer: "Negative" },
  { question: "What is area of circle?", options: ["πr²", "2πr", "πr", "None"], answer: "πr²" },
  { question: "What is area of ellipse?", options: ["πab", "πa²", "πb²", "None"], answer: "πab" },
  { question: "What is area of parabola?", options: ["(2/3)ab", "ab", "a²", "None"], answer: "(2/3)ab" },
  { question: "What is area of line?", options: ["1/2 × base × height", "base × height", "None", "Both"], answer: "1/2 × base × height" },
  { question: "What is area of triangle?", options: ["1/2 × base × height", "base × height", "None", "Both"], answer: "1/2 × base × height" },

  // Differential Equations
  { question: "What is differential equation?", options: ["Equation with derivatives", "None", "Both", "None"], answer: "Equation with derivatives" },
  { question: "What is order of differential equation?", options: ["Order of highest derivative", "None", "Both", "None"], answer: "Order of highest derivative" },
  { question: "What is degree of differential equation?", options: ["Power of highest derivative", "None", "Both", "None"], answer: "Power of highest derivative" },
  { question: "What is variable separation method?", options: ["Separating variables", "None", "Both", "None"], answer: "Separating variables" },
  { question: "What is homogeneous differential equation?", options: ["dy/dx = f(x,y) homogeneous", "None", "Both", "None"], answer: "dy/dx = f(x,y) homogeneous" },
  { question: "What is linear differential equation?", options: ["dy/dx + Py = Q", "None", "Both", "None"], answer: "dy/dx + Py = Q" },
  { question: "What is integrating factor?", options: ["e^∫P dx", "e^∫Q dx", "None", "Both"], answer: "e^∫P dx" },
  { question: "What is solution of differential equation?", options: ["General solution", "Particular solution", "Both", "None"], answer: "Both" },
  { question: "What is initial condition?", options: ["y(x₀) = y₀", "None", "Both", "None"], answer: "y(x₀) = y₀" },
  { question: "What is application of differential equation?", options: ["Physics, Biology", "None", "Both", "None"], answer: "Physics, Biology" },

  // Vector Algebra
  { question: "What is vector?", options: ["Magnitude and direction", "Only magnitude", "Only direction", "None"], answer: "Magnitude and direction" },
  { question: "What is scalar?", options: ["Only magnitude", "Magnitude and direction", "None", "Both"], answer: "Only magnitude" },
  { question: "What is vector addition?", options: ["Triangle law", "Parallelogram law", "Both", "None"], answer: "Both" },
  { question: "What is dot product?", options: ["a·b = |a||b|cosθ", "a×b", "None", "Both"], answer: "a·b = |a||b|cosθ" },
  { question: "What is cross product?", options: ["a×b = |a||b|sinθ n̂", "a·b", "None", "Both"], answer: "a×b = |a||b|sinθ n̂" },
  { question: "What is true for perpendicular vectors?", options: ["a·b = 0", "a×b = 0", "None", "Both"], answer: "a·b = 0" },
  { question: "What is true for parallel vectors?", options: ["a×b = 0", "a·b = 0", "None", "Both"], answer: "a×b = 0" },
  { question: "What is magnitude of vector?", options: ["√(x²+y²+z²)", "x+y+z", "xyz", "None"], answer: "√(x²+y²+z²)" },
  { question: "What is unit vector?", options: ["Magnitude 1", "Magnitude 0", "None", "Both"], answer: "Magnitude 1" },
  { question: "What is application of vectors?", options: ["Physics, Geometry", "None", "Both", "None"], answer: "Physics, Geometry" },

  // Three Dimensional Geometry
  { question: "What is 3D geometry?", options: ["Geometry in 3D", "Geometry in 2D", "None", "Both"], answer: "Geometry in 3D" },
  { question: "What is distance between two points?", options: ["√((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)", "None", "Both", "None"], answer: "√((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)" },
  { question: "What are direction ratios of line?", options: ["a, b, c", "None", "Both", "None"], answer: "a, b, c" },
  { question: "What are direction cosines of line?", options: ["l, m, n", "None", "Both", "None"], answer: "l, m, n" },
  { question: "What is equation of line?", options: ["(x-x₁)/a = (y-y₁)/b = (z-z₁)/c", "None", "Both", "None"], answer: "(x-x₁)/a = (y-y₁)/b = (z-z₁)/c" },
  { question: "What is equation of plane?", options: ["ax + by + cz + d = 0", "None", "Both", "None"], answer: "ax + by + cz + d = 0" },
  { question: "What is angle between two lines?", options: ["cosθ = |a₁a₂+b₁b₂+c₁c₂|/√...", "None", "Both", "None"], answer: "cosθ = |a₁a₂+b₁b₂+c₁c₂|/√..." },
  { question: "What is angle between line and plane?", options: ["sinθ = |al+bm+cn|/√...", "None", "Both", "None"], answer: "sinθ = |al+bm+cn|/√..." },
  { question: "What is angle between two planes?", options: ["cosθ = |a₁a₂+b₁b₂+c₁c₂|/√...", "None", "Both", "None"], answer: "cosθ = |a₁a₂+b₁b₂+c₁c₂|/√..." },
  { question: "What is distance from point to plane?", options: ["|ax₁+by₁+cz₁+d|/√(a²+b²+c²)", "None", "Both", "None"], answer: "|ax₁+by₁+cz₁+d|/√(a²+b²+c²)" },

  // Linear Programming
  { question: "What is linear programming?", options: ["Optimization of linear function", "None", "Both", "None"], answer: "Optimization of linear function" },
  { question: "What is objective function?", options: ["To be maximized/minimized", "None", "Both", "None"], answer: "To be maximized/minimized" },
  { question: "What are constraints?", options: ["Linear inequalities", "None", "Both", "None"], answer: "Linear inequalities" },
  { question: "What is feasible region?", options: ["Region satisfying all constraints", "None", "Both", "None"], answer: "Region satisfying all constraints" },
  { question: "What is optimal solution?", options: ["Maximum/minimum value", "None", "Both", "None"], answer: "Maximum/minimum value" },
  { question: "What is corner point method?", options: ["Values at vertices of feasible region", "None", "Both", "None"], answer: "Values at vertices of feasible region" },
  { question: "What is application of linear programming?", options: ["Business, Industry", "None", "Both", "None"], answer: "Business, Industry" },
  { question: "How to graph inequality?", options: ["By drawing line", "None", "Both", "None"], answer: "By drawing line" },
  { question: "How to find feasible region?", options: ["Common region of all inequalities", "None", "Both", "None"], answer: "Common region of all inequalities" },
  { question: "What are limitations of linear programming?", options: ["Variables non-negative", "None", "Both", "None"], answer: "Variables non-negative" },

  // Probability
  { question: "What is probability?", options: ["Chance of occurrence of event", "None", "Both", "None"], answer: "Chance of occurrence of event" },
  { question: "What is range of probability?", options: ["[0, 1]", "[-1, 1]", "[0, ∞]", "None"], answer: "[0, 1]" },
  { question: "What is conditional probability?", options: ["P(A|B) = P(A∩B)/P(B)", "P(A∩B)", "P(A∪B)", "None"], answer: "P(A|B) = P(A∩B)/P(B)" },
  { question: "What are independent events?", options: ["P(A∩B) = P(A)P(B)", "P(A|B) = P(A)", "Both", "None"], answer: "Both" },
  { question: "What is Bayes theorem?", options: ["P(A|B) = P(B|A)P(A)/P(B)", "None", "Both", "None"], answer: "P(A|B) = P(B|A)P(A)/P(B)" },
  { question: "What is random variable?", options: ["Real number from sample space", "None", "Both", "None"], answer: "Real number from sample space" },
  { question: "What is probability distribution?", options: ["Values and probabilities", "None", "Both", "None"], answer: "Values and probabilities" },
  { question: "What is mean?", options: ["Σxᵢpᵢ", "Σpᵢ", "Σxᵢ", "None"], answer: "Σxᵢpᵢ" },
  { question: "What is variance?", options: ["Σ(xᵢ-μ)²pᵢ", "Σxᵢ²pᵢ", "None", "Both"], answer: "Σ(xᵢ-μ)²pᵢ" },
  { question: "What is Bernoulli distribution?", options: ["Special case of binomial distribution", "None", "Both", "None"], answer: "Special case of binomial distribution" },
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
export default function Math12thQuiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600);
  const [language, setLanguage] = useState('hi');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [resultDetails, setResultDetails] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const resultRef = useRef(null);

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
    const questionBank = language === 'hi' ? mathHindi : mathEnglish;
    const selectedQuestions = shuffleQuestions(questionBank).slice(0, 100);
    setQuestions(selectedQuestions);
    setStarted(true);
    setTimer(3600);
    setAnswers({});
    setCurrent(0);
    setShowTimerWarning(false);
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
        userAnswer: answers[i] || (language === 'hi' ? "प्रयास नहीं किया" : "Not Attempted"),
        isCorrect: isCorrect,
        isAttempted: answers[i] !== undefined,
      };
    });
    setScore(s);
    setResultDetails(details);
    setSubmitted(true);
  };

  const toggleLanguage = () => {
    if (!started) {
      setLanguage(language === 'hi' ? 'en' : 'hi');
    }
  };

  const downloadResult = () => {
    if (resultRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const content = resultRef.current.innerHTML;
        printWindow.document.write(`
          <html>
            <head>
              <title>${language === 'hi' ? 'गणित 12वीं परिणाम' : 'Math 12th Result'}</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .result-container { max-width: 800px; margin: 0 auto; }
                .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #1a237e, #3f51b5); color: white; border-radius: 10px; margin-bottom: 20px; }
                .score-card { text-align: center; padding: 20px; border: 2px solid #1a237e; border-radius: 10px; margin-bottom: 20px; }
                .score { font-size: 40px; font-weight: bold; color: #1a237e; }
                .status { font-size: 20px; margin: 10px 0; }
                .pass { color: #28a745; }
                .fail { color: #dc3545; }
                .question-item { padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #48bb78; background: #f8f9fa; }
                .question-item.wrong { border-left-color: #dc3545; background: #fff5f5; }
                .question-item .q { font-weight: bold; font-size: 14px; }
                .question-item .your-answer { margin-top: 5px; font-size: 13px; }
                .question-item .correct-answer { margin-top: 3px; font-size: 13px; color: #28a745; font-weight: bold; }
                .wrong-answer { color: #dc3545; }
                .correct-answer-text { color: #28a745; }
                .not-attempted { color: #ffc107; }
                .footer { text-align: center; margin-top: 20px; padding: 10px; color: #666; font-size: 12px; border-top: 1px solid #ddd; }
              </style>
            </head>
            <body>
              <div class="result-container">
                ${content}
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const getText = (key) => {
    const texts = {
      'title': { hi: '📐 गणित 12वीं', en: '📐 Mathematics 12th' },
      'subtitle': { hi: 'कक्षा 12 गणित प्रश्नोत्तरी', en: 'Class 12 Mathematics Quiz' },
      'questions': { hi: '📝 प्रश्न', en: '📝 Questions' },
      'time': { hi: '⏱️ समय', en: '⏱️ Time' },
      'instructions': { hi: '📋 निर्देश:', en: '📋 Instructions:' },
      'compulsory': { hi: 'सभी प्रश्न अनिवार्य हैं', en: 'All questions are compulsory' },
      'marks': { hi: 'प्रत्येक प्रश्न 1 अंक का है', en: 'Each question carries 1 mark' },
      'negative': { hi: 'कोई नकारात्मक अंकन नहीं', en: 'No negative marking' },
      'start': { hi: '🚀 क्विज़ शुरू करें', en: '🚀 Start Quiz' },
      'answered': { hi: 'उत्तर दिए:', en: 'Answered:' },
      'prev': { hi: '⬅ पिछला', en: '⬅ Prev' },
      'next': { hi: 'अगला ➡', en: 'Next ➡' },
      'submit': { hi: '📤 जमा करें', en: '📤 Submit' },
      'navigator': { hi: 'प्रश्न नेविगेटर', en: 'Question Navigator' },
      'answered_status': { hi: '🟢 उत्तर दिया', en: '🟢 Answered' },
      'current_status': { hi: '🔵 वर्तमान', en: '🔵 Current' },
      'unanswered_status': { hi: '⚪ अनुत्तरित', en: '⚪ Unanswered' },
      'congrats': { hi: '🎉 शानदार प्रदर्शन!', en: '🎉 Excellent Performance!' },
      'practice': { hi: '📖 सीखते रहें!', en: '📖 Keep Learning!' },
      'passed': { hi: '✔️ उत्तीर्ण', en: '✔️ Passed' },
      'failed': { hi: '❌ सुधार की आवश्यकता', en: '❌ Needs Improvement' },
      'review': { hi: '📋 उत्तर समीक्षा', en: '📋 Answer Review' },
      'your_answer': { hi: 'आपका उत्तर:', en: 'Your Answer:' },
      'correct_answer': { hi: 'सही उत्तर:', en: 'Correct Answer:' },
      'new_quiz': { hi: '🔄 नई क्विज़ लें', en: '🔄 Take New Quiz' },
      'warning': { hi: '⚠️ 1 मिनट से कम समय शेष!', en: '⚠️ Less than 1 minute remaining!' },
      'download': { hi: '📥 परिणाम डाउनलोड करें', en: '📥 Download Result' },
      'status': { hi: 'स्थिति', en: 'Status' },
      'correct': { hi: 'सही', en: 'Correct' },
      'wrong': { hi: 'गलत', en: 'Wrong' },
      'not_attempted': { hi: 'प्रयास नहीं किया', en: 'Not Attempted' },
    };
    return texts[key]?.[language] || texts[key]?.['en'] || key;
  };

  // Home Page
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
          width: "100%",
          animation: "fadeInUp 0.6s ease"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📐</div>
          <h1 style={{ 
            color: "#1a237e", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            {getText('title')}
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            {getText('subtitle')}
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #1a237e, #3f51b5)",
            margin: "10px auto",
            width: "60px"
          }}></div>

          {/* Language Toggle */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginTop: "15px",
            marginBottom: "15px"
          }}>
            <span style={{ 
              fontSize: "14px", 
              fontWeight: language === 'hi' ? "700" : "400",
              color: language === 'hi' ? "#1a237e" : "#999"
            }}>हिन्दी</span>
            <button
              onClick={toggleLanguage}
              style={{
                width: "50px",
                height: "26px",
                borderRadius: "13px",
                background: language === 'hi' ? "#3f51b5" : "#4a90d9",
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "white",
                position: "absolute",
                top: "3px",
                left: language === 'hi' ? "3px" : "27px",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}></div>
            </button>
            <span style={{ 
              fontSize: "14px", 
              fontWeight: language === 'en' ? "700" : "400",
              color: language === 'en' ? "#1a237e" : "#999"
            }}>English</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginTop: "10px"
          }}>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('questions')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f0fe", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>{getText('time')}</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1a237e" }}>60 Mins</div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#e8f0fe",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#1a237e"
          }}>
            💡 {language === 'hi' ? 'कक्षा 12 गणित के सभी अध्यायों की व्यापक कवरेज' : 'Comprehensive coverage of all Class 12 Mathematics chapters'}
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
            <strong>{getText('instructions')}</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>{getText('compulsory')}</li>
              <li>{getText('marks')}</li>
              <li>{getText('negative')}</li>
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
            onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            {getText('start')}
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
        padding: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <div ref={resultRef} style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "25px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "20px",
            animation: "slideIn 0.5s ease"
          }}>
            <div className="header" style={{
              background: "linear-gradient(135deg, #1a237e, #3f51b5)",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}>
              <h1 style={{ margin: "0", fontSize: "22px" }}>{getText('title')}</h1>
              <p style={{ margin: "5px 0 0", fontSize: "12px", opacity: 0.9 }}>
                {language === 'hi' ? 'कक्षा 12 गणित क्विज़' : 'Class 12 Mathematics Quiz'}
              </p>
            </div>
            
            <h2 style={{ 
              fontSize: "20px", 
              marginBottom: "5px",
              color: "#2d3748"
            }}>
              {isPassed ? getText('congrats') : getText('practice')}
            </h2>
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
              {percentage}% {isPassed ? getText('passed') : getText('failed')}
            </div>
            <div style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "#718096"
            }}>
              {language === 'hi' ? "भाषा: हिन्दी" : "Language: English"} • {getText('negative')}
            </div>

            <div style={{
              marginTop: "15px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
              fontSize: "13px"
            }}>
              <div style={{ backgroundColor: "#d4edda", padding: "8px", borderRadius: "8px", color: "#155724" }}>
                ✅ {getText('correct')}: {resultDetails.filter(r => r.isCorrect).length}
              </div>
              <div style={{ backgroundColor: "#f8d7da", padding: "8px", borderRadius: "8px", color: "#721c24" }}>
                ❌ {getText('wrong')}: {resultDetails.filter(r => !r.isCorrect && r.isAttempted).length}
              </div>
              <div style={{ backgroundColor: "#fff3cd", padding: "8px", borderRadius: "8px", color: "#856404" }}>
                ⚪ {getText('not_attempted')}: {resultDetails.filter(r => !r.isAttempted).length}
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={downloadResult}
              style={{
                padding: "12px 30px",
                fontSize: "15px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(72, 187, 120, 0.4)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              {getText('download')}
            </button>
          </div>

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
              {getText('review')}
            </h2>
            {resultDetails.map((item, index) => (
              <div
                key={index}
                className={item.isCorrect ? '' : 'wrong'}
                style={{
                  backgroundColor: item.isCorrect ? "#f0fff4" : 
                                   item.isAttempted ? "#fff5f5" : "#fff3cd",
                  borderLeft: `4px solid ${item.isCorrect ? "#48bb78" : 
                              item.isAttempted ? "#fc8181" : "#ffc107"}`,
                  padding: "12px 15px",
                  marginBottom: "12px",
                  borderRadius: "8px",
                  animation: `fadeIn 0.3s ease ${index * 0.05}s`
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
                    {item.isCorrect ? "✅" : item.isAttempted ? "❌" : "⚪"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>{getText('your_answer')}</strong>{" "}
                    <span style={{ 
                      color: item.isCorrect ? "#48bb78" : 
                             item.isAttempted ? "#dc3545" : "#ffc107",
                      fontWeight: item.isAttempted ? "bold" : "normal"
                    }}>
                      {item.userAnswer}
                    </span>
                    {!item.isAttempted && (
                      <span style={{ color: "#ffc107", marginLeft: "5px" }}>
                        ({getText('not_attempted')})
                      </span>
                    )}
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>{getText('correct_answer')}</strong>{" "}
                      <span style={{ color: "#48bb78", fontWeight: "bold" }}>{item.correctAnswer}</span>
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
                setQuestions([]);
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
                boxShadow: "0 4px 15px rgba(63, 81, 181, 0.4)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              {getText('new_quiz')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Page
  const q = questions[current] || { question: "", options: [], answer: "" };
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
              {getText('answered')} {answeredCount}/{questions.length}
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

        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "10px",
          animation: "fadeIn 0.3s ease"
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
            📌 {language === 'hi' ? 'गणित 12वीं' : 'Mathematics 12th'}
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
            {q.options && q.options.map((op, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  margin: "5px 0",
                  backgroundColor: answers[current] === op ? "#ebf8ff" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #3f51b5" : "2px solid transparent",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  transform: answers[current] === op ? "scale(1.01)" : "scale(1)"
                }}
                onClick={() => setAnswers({ ...answers, [current]: op })}
                onMouseEnter={(e) => {
                  if (answers[current] !== op) {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                    e.currentTarget.style.transform = "scale(1.005)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (answers[current] !== op) {
                    e.currentTarget.style.backgroundColor = "#f7fafc";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
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
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (current !== 0) {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 12px rgba(63, 81, 181, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              {getText('prev')}
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
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (current !== questions.length - 1) {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 12px rgba(63, 81, 181, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              {getText('next')}
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
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(72, 187, 120, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 4px 15px rgba(72, 187, 120, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 2px 8px rgba(72, 187, 120, 0.3)";
            }}
          >
            {getText('submit')}
          </button>
        </div>

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
            {getText('navigator')}
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
                  transition: "all 0.3s ease",
                  transform: answers[idx] ? "scale(1.05)" : "scale(1)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = answers[idx] ? "scale(1.05)" : "scale(1)";
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
            <span>{getText('answered_status')}</span>
            <span>{getText('current_status')}</span>
            <span>{getText('unanswered_status')}</span>
          </div>
        </div>

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
            {getText('warning')}
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}