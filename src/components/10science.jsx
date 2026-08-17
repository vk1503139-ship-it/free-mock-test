// BSEBClass10ScienceMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 Science Question Bank (100 questions) ---
const scienceQuestions = [
  // ============ PHYSICS - भौतिक विज्ञान (25 Questions) ============
  
  // Light - Reflection & Refraction (8)
  { 
    question: "प्रकाश का परावर्तन का नियम क्या है?", 
    options: ["आपतन कोण = परावर्तन कोण", "आपतन कोण > परावर्तन कोण", "आपतन कोण < परावर्तन कोण", "इनमें से कोई नहीं"], 
    answer: "आपतन कोण = परावर्तन कोण" 
  },
  { 
    question: "गोलीय दर्पण के फोकस दूरी और वक्रता त्रिज्या में क्या संबंध है?", 
    options: ["f = R/2", "f = 2R", "f = R", "f = R/3"], 
    answer: "f = R/2" 
  },
  { 
    question: "उत्तल दर्पण द्वारा बनने वाला प्रतिबिम्ब कैसा होता है?", 
    options: ["आभासी, सीधा, छोटा", "वास्तविक, उल्टा, बड़ा", "आभासी, उल्टा, छोटा", "वास्तविक, सीधा, बड़ा"], 
    answer: "आभासी, सीधा, छोटा" 
  },
  { 
    question: "अवतल दर्पण द्वारा किस प्रकार का प्रतिबिम्ब बनता है?", 
    options: ["वास्तविक और आभासी दोनों", "केवल वास्तविक", "केवल आभासी", "कोई प्रतिबिम्ब नहीं"], 
    answer: "वास्तविक और आभासी दोनों" 
  },
  { 
    question: "प्रकाश का अपवर्तन किसके कारण होता है?", 
    options: ["माध्यम में प्रकाश की चाल परिवर्तन", "माध्यम का घनत्व", "प्रकाश का रंग", "इनमें से कोई नहीं"], 
    answer: "माध्यम में प्रकाश की चाल परिवर्तन" 
  },
  { 
    question: "लेंस की क्षमता का सूत्र क्या है?", 
    options: ["P = 1/f", "P = f", "P = 1/f²", "P = f²"], 
    answer: "P = 1/f" 
  },
  { 
    question: "उत्तल लेंस का उपयोग किसमें होता है?", 
    options: ["निकट दृष्टि दोष", "दूर दृष्टि दोष", "जरा दृष्टि", "दृष्टिवैषम्य"], 
    answer: "दूर दृष्टि दोष" 
  },
  { 
    question: "मानव नेत्र में प्रतिबिम्ब कहाँ बनता है?", 
    options: ["रैटिना पर", "कॉर्निया पर", "लेंस पर", "आइरिस पर"], 
    answer: "रैटिना पर" 
  },

  // Human Eye & Colorful World (5)
  { 
    question: "इन्द्रधनुष में कितने रंग होते हैं?", 
    options: ["7", "5", "6", "8"], 
    answer: "7" 
  },
  { 
    question: "प्रकाश का विक्षेपण किसके कारण होता है?", 
    options: ["प्रिज्म", "दर्पण", "लेंस", "पारदर्शी माध्यम"], 
    answer: "प्रिज्म" 
  },
  { 
    question: "आँख का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है?", 
    options: ["पुतली", "कॉर्निया", "रैटिना", "नेत्र लेंस"], 
    answer: "पुतली" 
  },
  { 
    question: "मानव नेत्र का कौन सा भाग प्रकाश को रेटिना पर केंद्रित करता है?", 
    options: ["नेत्र लेंस", "कॉर्निया", "रैटिना", "आइरिस"], 
    answer: "नेत्र लेंस" 
  },
  { 
    question: "निकट दृष्टि दोष को किस लेंस से दूर किया जाता है?", 
    options: ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "इनमें से कोई नहीं"], 
    answer: "अवतल लेंस" 
  },

  // Electricity (6)
  { 
    question: "ओम का नियम क्या है?", 
    options: ["V = IR", "V = I/R", "V = R/I", "I = VR"], 
    answer: "V = IR" 
  },
  { 
    question: "विद्युत धारा का SI मात्रक क्या है?", 
    options: ["एम्पीयर", "वोल्ट", "ओम", "वाट"], 
    answer: "एम्पीयर" 
  },
  { 
    question: "प्रतिरोध का SI मात्रक क्या है?", 
    options: ["ओम", "वोल्ट", "एम्पीयर", "वाट"], 
    answer: "ओम" 
  },
  { 
    question: "विद्युत शक्ति का सूत्र क्या है?", 
    options: ["P = VI", "P = V/I", "P = I²R", "P = V²/R"], 
    answer: "P = VI" 
  },
  { 
    question: "प्रतिरोधों के श्रेणीक्रम संयोजन में तुल्य प्रतिरोध क्या होता है?", 
    options: ["R = R₁ + R₂ + R₃", "1/R = 1/R₁ + 1/R₂ + 1/R₃", "R = R₁R₂/(R₁+R₂)", "R = R₁R₂R₃"], 
    answer: "R = R₁ + R₂ + R₃" 
  },
  { 
    question: "प्रतिरोधों के समान्तर क्रम संयोजन में तुल्य प्रतिरोध क्या होता है?", 
    options: ["1/R = 1/R₁ + 1/R₂ + 1/R₃", "R = R₁ + R₂ + R₃", "R = R₁R₂/(R₁+R₂)", "R = R₁R₂R₃"], 
    answer: "1/R = 1/R₁ + 1/R₂ + 1/R₃" 
  },

  // Magnetic Effects of Current (6)
  { 
    question: "विद्युत धारावाही चालक के चारों ओर क्या उत्पन्न होता है?", 
    options: ["चुम्बकीय क्षेत्र", "विद्युत क्षेत्र", "गुरुत्वीय क्षेत्र", "इनमें से कोई नहीं"], 
    answer: "चुम्बकीय क्षेत्र" 
  },
  { 
    question: "विद्युत मोटर किस सिद्धांत पर कार्य करता है?", 
    options: ["चुम्बकीय क्षेत्र में धारावाही चालक पर बल", "विद्युत चुम्बकीय प्रेरण", "ओम का नियम", "फैराडे का नियम"], 
    answer: "चुम्बकीय क्षेत्र में धारावाही चालक पर बल" 
  },
  { 
    question: "विद्युत जनित्र किस सिद्धांत पर कार्य करता है?", 
    options: ["विद्युत चुम्बकीय प्रेरण", "चुम्बकीय क्षेत्र में बल", "ओम का नियम", "लेंज का नियम"], 
    answer: "विद्युत चुम्बकीय प्रेरण" 
  },
  { 
    question: "AC का पूरा नाम क्या है?", 
    options: ["Alternating Current", "Active Current", "Alternate Current", "Advanced Current"], 
    answer: "Alternating Current" 
  },
  { 
    question: "DC का पूरा नाम क्या है?", 
    options: ["Direct Current", "Dual Current", "Dynamic Current", "Digital Current"], 
    answer: "Direct Current" 
  },
  { 
    question: "फ्लेमिंग के वाम हस्त नियम का उपयोग किसमें होता है?", 
    options: ["विद्युत मोटर", "विद्युत जनित्र", "ट्रांसफार्मर", "डायोड"], 
    answer: "विद्युत मोटर" 
  },

  // ============ CHEMISTRY - रसायन विज्ञान (30 Questions) ============
  
  // Chemical Reactions & Equations (8)
  { 
    question: "रासायनिक अभिक्रिया में पदार्थों का क्या होता है?", 
    options: ["द्रव्यमान का संरक्षण", "द्रव्यमान का नाश", "द्रव्यमान का उत्पादन", "द्रव्यमान का परिवर्तन"], 
    answer: "द्रव्यमान का संरक्षण" 
  },
  { 
    question: "दहन अभिक्रिया किस प्रकार की अभिक्रिया है?", 
    options: ["उष्माक्षेपी", "ऊष्माशोषी", "उदासीनीकरण", "अपघटन"], 
    answer: "उष्माक्षेपी" 
  },
  { 
    question: "संयोजन अभिक्रिया का उदाहरण क्या है?", 
    options: ["H₂ + Cl₂ → 2HCl", "2H₂O → 2H₂ + O₂", "NaOH + HCl → NaCl + H₂O", "Fe + CuSO₄ → FeSO₄ + Cu"], 
    answer: "H₂ + Cl₂ → 2HCl" 
  },
  { 
    question: "विस्थापन अभिक्रिया का उदाहरण क्या है?", 
    options: ["Fe + CuSO₄ → FeSO₄ + Cu", "H₂ + Cl₂ → 2HCl", "2H₂O → 2H₂ + O₂", "NaOH + HCl → NaCl + H₂O"], 
    answer: "Fe + CuSO₄ → FeSO₄ + Cu" 
  },
  { 
    question: "उदासीनीकरण अभिक्रिया में क्या बनता है?", 
    options: ["लवण और जल", "अम्ल और क्षार", "ऑक्साइड और जल", "हाइड्राइड और जल"], 
    answer: "लवण और जल" 
  },
  { 
    question: "ऑक्सीकरण में क्या होता है?", 
    options: ["ऑक्सीजन का योग", "ऑक्सीजन का त्याग", "हाइड्रोजन का योग", "इनमें से कोई नहीं"], 
    answer: "ऑक्सीजन का योग" 
  },
  { 
    question: "अपचयन में क्या होता है?", 
    options: ["ऑक्सीजन का त्याग", "ऑक्सीजन का योग", "हाइड्रोजन का त्याग", "इनमें से कोई नहीं"], 
    answer: "ऑक्सीजन का त्याग" 
  },
  { 
    question: "संक्षारण किसे कहते हैं?", 
    options: ["धातुओं का वायु, जल आदि से क्रिया", "धातुओं का गलना", "धातुओं का जलना", "धातुओं का टूटना"], 
    answer: "धातुओं का वायु, जल आदि से क्रिया" 
  },

  // Acids, Bases & Salts (8)
  { 
    question: "अम्ल का स्वाद कैसा होता है?", 
    options: ["खट्टा", "कड़वा", "तीखा", "मीठा"], 
    answer: "खट्टा" 
  },
  { 
    question: "क्षार का स्वाद कैसा होता है?", 
    options: ["कड़वा और चिकना", "खट्टा", "तीखा", "मीठा"], 
    answer: "कड़वा और चिकना" 
  },
  { 
    question: "pH पैमाना किसके लिए होता है?", 
    options: ["अम्लीयता या क्षारीयता मापने", "तापमान मापने", "दबाव मापने", "घनत्व मापने"], 
    answer: "अम्लीयता या क्षारीयता मापने" 
  },
  { 
    question: "pH मान कितने होने पर विलयन उदासीन होता है?", 
    options: ["7", "0", "14", "10"], 
    answer: "7" 
  },
  { 
    question: "HCl का पूरा नाम क्या है?", 
    options: ["Hydrochloric Acid", "Hydrogen Chloride", "Hydro Carbonic Acid", "Hydroxyl Chloride"], 
    answer: "Hydrochloric Acid" 
  },
  { 
    question: "H₂SO₄ का नाम क्या है?", 
    options: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"], 
    answer: "सल्फ्यूरिक अम्ल" 
  },
  { 
    question: "NaOH का नाम क्या है?", 
    options: ["सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट"], 
    answer: "सोडियम हाइड्रॉक्साइड" 
  },
  { 
    question: "बेकिंग सोडा का रासायनिक नाम क्या है?", 
    options: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम क्लोराइड", "सोडियम हाइड्रॉक्साइड"], 
    answer: "सोडियम बाइकार्बोनेट" 
  },

  // Metals & Non-metals (7)
  { 
    question: "धातुएँ किस प्रकार की चालक होती हैं?", 
    options: ["उष्मा और विद्युत की सुचालक", "कुचालक", "अर्धचालक", "इनमें से कोई नहीं"], 
    answer: "उष्मा और विद्युत की सुचालक" 
  },
  { 
    question: "धातुएँ किस प्रकार की होती हैं?", 
    options: ["आघातवर्धनीय और तन्य", "भंगुर", "कठोर", "नाजुक"], 
    answer: "आघातवर्धनीय और तन्य" 
  },
  { 
    question: "धातुओं के ऑक्साइड कैसे होते हैं?", 
    options: ["क्षारकीय", "अम्लीय", "उदासीन", "उभयधर्मी"], 
    answer: "क्षारकीय" 
  },
  { 
    question: "अधातुओं के ऑक्साइड कैसे होते हैं?", 
    options: ["अम्लीय", "क्षारकीय", "उदासीन", "उभयधर्मी"], 
    answer: "अम्लीय" 
  },
  { 
    question: "लोहे में जंग लगना क्या है?", 
    options: ["संक्षारण", "अपघटन", "दहन", "विस्थापन"], 
    answer: "संक्षारण" 
  },
  { 
    question: "सोने और प्लैटिनम को किस प्रकार की धातुएँ कहते हैं?", 
    options: ["अक्रिय धातुएँ", "क्रियाशील धातुएँ", "अर्धधातुएँ", "संक्रमण धातुएँ"], 
    answer: "अक्रिय धातुएँ" 
  },
  { 
    question: "धातुओं के साथ अम्ल की अभिक्रिया से क्या बनता है?", 
    options: ["लवण और हाइड्रोजन", "लवण और जल", "लवण और ऑक्सीजन", "लवण और कार्बन डाइऑक्साइड"], 
    answer: "लवण और हाइड्रोजन" 
  },

  // Carbon & its Compounds (7)
  { 
    question: "कार्बन की संयोजकता क्या है?", 
    options: ["4", "2", "3", "1"], 
    answer: "4" 
  },
  { 
    question: "कार्बन के कितने अपररूप होते हैं?", 
    options: ["3", "2", "4", "5"], 
    answer: "3" 
  },
  { 
    question: "हीरा और ग्रेफाइट किसके अपररूप हैं?", 
    options: ["कार्बन", "सिलिकॉन", "बोरॉन", "फॉस्फोरस"], 
    answer: "कार्बन" 
  },
  { 
    question: "मीथेन (CH₄) का आणविक द्रव्यमान क्या है?", 
    options: ["16", "12", "14", "18"], 
    answer: "16" 
  },
  { 
    question: "एथेन (C₂H₆) का आणविक द्रव्यमान क्या है?", 
    options: ["30", "28", "26", "32"], 
    answer: "30" 
  },
  { 
    question: "साबुन और डिटर्जेंट क्या हैं?", 
    options: ["पृष्ठ सक्रियक", "अम्ल", "क्षार", "लवण"], 
    answer: "पृष्ठ सक्रियक" 
  },
  { 
    question: "एसीटिक अम्ल का रासायनिक सूत्र क्या है?", 
    options: ["CH₃COOH", "HCOOH", "C₂H₅OH", "CH₃OH"], 
    answer: "CH₃COOH" 
  },

  // ============ BIOLOGY - जीव विज्ञान (35 Questions) ============
  
  // Life Processes (10)
  { 
    question: "पौधों में भोजन का संश्लेषण किस प्रक्रिया से होता है?", 
    options: ["प्रकाश संश्लेषण", "श्वसन", "पाचन", "उत्सर्जन"], 
    answer: "प्रकाश संश्लेषण" 
  },
  { 
    question: "प्रकाश संश्लेषण के लिए क्या आवश्यक है?", 
    options: ["प्रकाश, जल, CO₂", "प्रकाश, O₂, जल", "CO₂, O₂, प्रकाश", "जल, O₂, प्रकाश"], 
    answer: "प्रकाश, जल, CO₂" 
  },
  { 
    question: "मानव में पाचन कहाँ से शुरू होता है?", 
    options: ["मुख", "आमाशय", "छोटी आँत", "बड़ी आँत"], 
    answer: "मुख" 
  },
  { 
    question: "मानव हृदय में कितने कक्ष होते हैं?", 
    options: ["4", "2", "3", "5"], 
    answer: "4" 
  },
  { 
    question: "रक्त का pH मान क्या होता है?", 
    options: ["7.4", "7.0", "8.0", "6.5"], 
    answer: "7.4" 
  },
  { 
    question: "मानव श्वसन में कौन सी गैस अंदर ली जाती है?", 
    options: ["O₂", "CO₂", "N₂", "H₂"], 
    answer: "O₂" 
  },
  { 
    question: "मानव श्वसन में कौन सी गैस बाहर निकाली जाती है?", 
    options: ["CO₂", "O₂", "N₂", "H₂"], 
    answer: "CO₂" 
  },
  { 
    question: "वृक्क (किडनी) का मुख्य कार्य क्या है?", 
    options: ["रक्त का शुद्धिकरण", "भोजन का पाचन", "रक्त का निर्माण", "श्वसन"], 
    answer: "रक्त का शुद्धिकरण" 
  },
  { 
    question: "पौधों में जल का परिवहन किसके द्वारा होता है?", 
    options: ["जाइलम", "फ्लोएम", "कोर्टेक्स", "एपिडर्मिस"], 
    answer: "जाइलम" 
  },
  { 
    question: "पौधों में भोजन का परिवहन किसके द्वारा होता है?", 
    options: ["फ्लोएम", "जाइलम", "कोर्टेक्स", "एपिडर्मिस"], 
    answer: "फ्लोएम" 
  },

  // Control & Coordination (6)
  { 
    question: "मानव मस्तिष्क का कौन सा भाग सोचने और समझने का कार्य करता है?", 
    options: ["मस्तिष्क गोलार्ध", "सेरीबेलम", "मेडुला ऑब्लांगेटा", "हाइपोथैलेमस"], 
    answer: "मस्तिष्क गोलार्ध" 
  },
  { 
    question: "तंत्रिका तंत्र की मूल इकाई क्या है?", 
    options: ["न्यूरॉन", "एक्सॉन", "डेंड्राइट", "सिनेप्स"], 
    answer: "न्यूरॉन" 
  },
  { 
    question: "संवेदी अंगों से मस्तिष्क तक सूचना किसके द्वारा जाती है?", 
    options: ["संवेदी तंत्रिकाएँ", "चालक तंत्रिकाएँ", "मिश्रित तंत्रिकाएँ", "इनमें से कोई नहीं"], 
    answer: "संवेदी तंत्रिकाएँ" 
  },
  { 
    question: "पौधों में वृद्धि किस हार्मोन द्वारा नियंत्रित होती है?", 
    options: ["ऑक्सिन", "जिबरेलिन", "साइटोकिनिन", "एब्सिसिक अम्ल"], 
    answer: "ऑक्सिन" 
  },
  { 
    question: "पौधों की जड़ें किसकी ओर बढ़ती हैं?", 
    options: ["गुरुत्वाकर्षण की ओर", "प्रकाश की ओर", "जल की ओर", "स्पर्श की ओर"], 
    answer: "गुरुत्वाकर्षण की ओर" 
  },
  { 
    question: "पौधों के तने किसकी ओर बढ़ते हैं?", 
    options: ["प्रकाश की ओर", "गुरुत्वाकर्षण की ओर", "जल की ओर", "इनमें से कोई नहीं"], 
    answer: "प्रकाश की ओर" 
  },

  // Reproduction (7)
  { 
    question: "मानव में नर जनन कोशिका क्या है?", 
    options: ["शुक्राणु", "अंडाणु", "जाइगोट", "गैमीट"], 
    answer: "शुक्राणु" 
  },
  { 
    question: "मानव में मादा जनन कोशिका क्या है?", 
    options: ["अंडाणु", "शुक्राणु", "जाइगोट", "गैमीट"], 
    answer: "अंडाणु" 
  },
  { 
    question: "अलैंगिक जनन का उदाहरण क्या है?", 
    options: ["मुकुलन", "युग्मन", "निषेचन", "इनमें से कोई नहीं"], 
    answer: "मुकुलन" 
  },
  { 
    question: "लैंगिक जनन में क्या होता है?", 
    options: ["युग्मकों का संलयन", "कोशिका का विभाजन", "बीज का निर्माण", "इनमें से कोई नहीं"], 
    answer: "युग्मकों का संलयन" 
  },
  { 
    question: "मानव में गर्भावस्था की अवधि कितनी होती है?", 
    options: ["9 महीने", "8 महीने", "10 महीने", "7 महीने"], 
    answer: "9 महीने" 
  },
  { 
    question: "पुष्प का कौन सा भाग नर जनन अंग है?", 
    options: ["पुंकेसर", "स्त्रीकेसर", "दल", "बाह्यदल"], 
    answer: "पुंकेसर" 
  },
  { 
    question: "पुष्प का कौन सा भाग मादा जनन अंग है?", 
    options: ["स्त्रीकेसर", "पुंकेसर", "दल", "बाह्यदल"], 
    answer: "स्त्रीकेसर" 
  },

  // Heredity & Evolution (6)
  { 
    question: "माता-पिता से संतान में लक्षणों का स्थानांतरण क्या कहलाता है?", 
    options: ["आनुवंशिकता", "विकास", "उत्परिवर्तन", "चयन"], 
    answer: "आनुवंशिकता" 
  },
  { 
    question: "DNA का पूरा नाम क्या है?", 
    options: ["Deoxyribonucleic Acid", "Deoxynucleic Acid", "Ribonucleic Acid", "Deoxyribose Nucleic Acid"], 
    answer: "Deoxyribonucleic Acid" 
  },
  { 
    question: "RNA का पूरा नाम क्या है?", 
    options: ["Ribonucleic Acid", "Ribose Nucleic Acid", "Deoxyribonucleic Acid", "Ribonucleic Amino"], 
    answer: "Ribonucleic Acid" 
  },
  { 
    question: "मानव में कितने गुणसूत्र होते हैं?", 
    options: ["46", "44", "48", "42"], 
    answer: "46" 
  },
  { 
    question: "मानव में कितने ऑटोसोम होते हैं?", 
    options: ["44", "46", "42", "48"], 
    answer: "44" 
  },
  { 
    question: "मानव में कितने सेक्स क्रोमोसोम होते हैं?", 
    options: ["2", "4", "1", "3"], 
    answer: "2" 
  },

  // Our Environment (6)
  { 
    question: "पारिस्थितिकी तंत्र में सूर्य से ऊर्जा का प्रवाह कैसे होता है?", 
    options: ["एकदिशीय", "द्विदिशीय", "बहुदिशीय", "इनमें से कोई नहीं"], 
    answer: "एकदिशीय" 
  },
  { 
    question: "खाद्य श्रृंखला का पहला सोपान क्या है?", 
    options: ["उत्पादक", "प्राथमिक उपभोक्ता", "द्वितीयक उपभोक्ता", "अपघटक"], 
    answer: "उत्पादक" 
  },
  { 
    question: "ओजोन परत कहाँ स्थित है?", 
    options: ["समताप मंडल", "क्षोभ मंडल", "बाह्य मंडल", "आयन मंडल"], 
    answer: "समताप मंडल" 
  },
  { 
    question: "ओजोन परत का क्षरण किसके कारण होता है?", 
    options: ["CFC", "CO₂", "SO₂", "NO₂"], 
    answer: "CFC" 
  },
  { 
    question: "जैव निम्नीकरणीय पदार्थ क्या है?", 
    options: ["सूक्ष्मजीवों द्वारा विघटित", "सूक्ष्मजीवों द्वारा अविघटित", "रासायनिक रूप से विघटित", "भौतिक रूप से विघटित"], 
    answer: "सूक्ष्मजीवों द्वारा विघटित" 
  },
  { 
    question: "प्लास्टिक किस प्रकार का पदार्थ है?", 
    options: ["अजैव निम्नीकरणीय", "जैव निम्नीकरणीय", "जैव संचयी", "इनमें से कोई नहीं"], 
    answer: "अजैव निम्नीकरणीय" 
  },

  // ============ ENVIRONMENT & ECOLOGY - पर्यावरण (10 Questions) ============
  { 
    question: "ग्रीन हाउस प्रभाव किसके कारण होता है?", 
    options: ["CO₂, CH₄, CFC", "O₂, N₂, Ar", "H₂, He, Ne", "इनमें से कोई नहीं"], 
    answer: "CO₂, CH₄, CFC" 
  },
  { 
    question: "ग्लोबल वार्मिंग का मुख्य कारण क्या है?", 
    options: ["ग्रीन हाउस गैसें", "ओजोन क्षरण", "वनों की कटाई", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "जल प्रदूषण का मुख्य कारण क्या है?", 
    options: ["औद्योगिक अपशिष्ट", "सीवेज", "कीटनाशक", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "वायु प्रदूषण का मुख्य कारण क्या है?", 
    options: ["औद्योगिक धुआँ", "वाहनों का धुआँ", "जीवाश्म ईंधन", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "ध्वनि प्रदूषण का मुख्य स्रोत क्या है?", 
    options: ["वाहन", "उद्योग", "हवाई जहाज", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "जैव विविधता से क्या तात्पर्य है?", 
    options: ["विभिन्न जीवों की विविधता", "एक ही जीव की विविधता", "पौधों की विविधता", "जानवरों की विविधता"], 
    answer: "विभिन्न जीवों की विविधता" 
  },
  { 
    question: "राष्ट्रीय उद्यान किसके लिए होते हैं?", 
    options: ["वन्यजीव संरक्षण", "वन संरक्षण", "जल संरक्षण", "मृदा संरक्षण"], 
    answer: "वन्यजीव संरक्षण" 
  },
  { 
    question: "जल संरक्षण के लिए क्या करना चाहिए?", 
    options: ["वर्षा जल संचयन", "जल का अधिक उपयोग", "जल को प्रदूषित करना", "इनमें से कोई नहीं"], 
    answer: "वर्षा जल संचयन" 
  },
  { 
    question: "नवीकरणीय ऊर्जा स्रोत क्या है?", 
    options: ["सौर ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"], 
    answer: "सौर ऊर्जा" 
  },
  { 
    question: "अनवीकरणीय ऊर्जा स्रोत क्या है?", 
    options: ["कोयला", "सौर ऊर्जा", "पवन ऊर्जा", "जल ऊर्जा"], 
    answer: "कोयला" 
  },
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
export default function BSEBClass10ScienceMockTest() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 1 hour = 3600 seconds
  const [questions] = useState(() => shuffleQuestions(scienceQuestions));
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
        background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🔬</div>
          <h1 style={{ 
            color: "#1b5e20", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            विज्ञान मॉक टेस्ट
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            बिहार विद्यालय परीक्षा समिति - कक्षा १०
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #1b5e20, #388e3c)",
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
              backgroundColor: "#e8f5e9", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝Total Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1b5e20" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#e8f5e9", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time Limit</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1b5e20" }}>60 Min</div>
            </div>
          </div>

          {/* <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "6px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#555"
          }}>
            <div style={{ backgroundColor: "#f5f5f5", padding: "6px", borderRadius: "6px" }}>
              ⚡ <strong>२५</strong> भौतिकी
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "6px", borderRadius: "6px" }}>
              🧪 <strong>३०</strong> रसायन
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "6px", borderRadius: "6px" }}>
              🧬 <strong>३५</strong> जीवविज्ञान
            </div>
            <div style={{ backgroundColor: "#f5f5f5", padding: "6px", borderRadius: "6px", gridColumn: "1/4" }}>
              🌍 <strong>१०</strong> पर्यावरण
            </div>
          </div> */}

          <div style={{
            backgroundColor: "#fff3e0",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "12px",
            fontSize: "12px",
            color: "#e65100",
            textAlign: "left"
          }}>
            <strong>📋 निर्देश:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>सभी प्रश्न अनिवार्य हैं • प्रत्येक प्रश्न <strong>1अंक</strong> का है</li>
              <li><strong>कोई नकारात्मक अंकन नहीं</strong></li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(56, 142, 60, 0.4)"
            }}
          >
            🚀Start Test
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
              {isPassed ? "🎉 अभिनन्दन!" : "📖 अभ्यास जारी रखें!"}
            </h1>
            <p style={{ color: "#888", fontSize: "12px" }}>विज्ञान मॉक टेस्ट - कक्षा १०</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#1b5e20" }}>
              {score} <span style={{ fontSize: "20px", color: "#888" }}>/ {questions.length}</span>
            </div>
            <div style={{ 
              fontSize: "18px", 
              color: isPassed ? "#28a745" : "#dc3545", 
              marginTop: "5px",
              fontWeight: "600"
            }}>
              {percentage}% {isPassed ? "✔️ उत्तीर्ण" : "❌ सुधार की आवश्यकता"}
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
              📋 उत्तर समीक्षा
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
                    प्रश्न {index + 1}. {item.question}
                  </h4>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {item.isCorrect ? "✅" : "❌"}
                  </span>
                </div>
                <div style={{ marginTop: "8px", marginLeft: "5px", fontSize: "13px" }}>
                  <p style={{ margin: "3px 0" }}>
                    <strong>आपका उत्तर:</strong>{" "}
                    <span style={{ color: item.isCorrect ? "#48bb78" : "#fc8181" }}>
                      {item.userAnswer}
                    </span>
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: "3px 0" }}>
                      <strong>सही उत्तर:</strong>{" "}
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
                background: "linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(56, 142, 60, 0.4)"
              }}
            >
              🔄 नया मॉक टेस्ट लें
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
              प्रश्न {current + 1}/{questions.length}
            </p>
            <p style={{ 
              margin: "2px 0 0", 
              fontSize: "10px", 
              color: "#a0aec0"
            }}>
              उत्तर: {answeredCount}/{questions.length}
            </p>
          </div>
          <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: timer < 60 ? "#fc8181" : "#1b5e20",
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
            backgroundColor: "#e8f5e9",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#1b5e20",
            marginBottom: "12px"
          }}>
            📌QUES {current + 1}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#1b5e20",
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
                  backgroundColor: answers[current] === op ? "#e8f5e9" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #1b5e20" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#1b5e20",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              ⬅Previous
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#1b5e20",
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
            📤Submit
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
            प्रश्न नेविगेटर - {answeredCount}/{questions.length} उत्तर दिए
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
                                   current === idx ? "#1b5e20" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #1b5e20" : "none",
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
            <span>🟢 उत्तर दिया</span>
            <span>🔵 वर्तमान</span>
            <span>⚪ उत्तर नहीं दिया</span>
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
            ⚠️ १ मिनट से कम समय शेष!
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