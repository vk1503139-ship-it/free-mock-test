// BSEBClass10SanskritMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 Sanskrit Question Bank (100 questions) ---
const sanskritQuestions = [
  // ============ SANDHI (संधि) - 10 Questions ============
  { 
    question: "रामः + आगच्छति = ?", 
    options: ["रामागच्छति", "रामआगच्छति", "रामोआगच्छति", "रामःआगच्छति"], 
    answer: "रामागच्छति" 
  },
  { 
    question: "सूर्यः + उदयते = ?", 
    options: ["सूर्योदयते", "सूर्यउदयते", "सूर्यःउदयते", "सूर्यौदयते"], 
    answer: "सूर्योदयते" 
  },
  { 
    question: "गंगा + इयं = ?", 
    options: ["गंगेयम्", "गंगाइयम्", "गंगायम्", "गंगइयम्"], 
    answer: "गंगेयम्" 
  },
  { 
    question: "विद्या + आलयः = ?", 
    options: ["विद्यालयः", "विद्याआलयः", "विद्यालय", "विद्यालयम"], 
    answer: "विद्यालयः" 
  },
  { 
    question: "नरः + इन्द्रः = ?", 
    options: ["नरेन्द्रः", "नरिन्द्रः", "नरःइन्द्रः", "नरोइन्द्रः"], 
    answer: "नरेन्द्रः" 
  },
  { 
    question: "महा + ईशः = ?", 
    options: ["महेशः", "महाइशः", "महईशः", "महःईशः"], 
    answer: "महेशः" 
  },
  { 
    question: "सत् + जनः = ?", 
    options: ["सज्जनः", "सत्जनः", "सतजनः", "सन्जनः"], 
    answer: "सज्जनः" 
  },
  { 
    question: "प्रति + उपकारः = ?", 
    options: ["प्रत्युपकारः", "प्रतिउपकारः", "प्रत्युपकार", "प्रतियुपकारः"], 
    answer: "प्रत्युपकारः" 
  },
  { 
    question: "अति + आचारः = ?", 
    options: ["अत्याचारः", "अतिआचारः", "अत्याचार", "अतियाचारः"], 
    answer: "अत्याचारः" 
  },
  { 
    question: "परि + अर्थः = ?", 
    options: ["पर्यर्थः", "परिअर्थः", "परियर्थः", "पर्यर्थ"], 
    answer: "पर्यर्थः" 
  },

  // ============ SANDHI VICCHED (संधि विच्छेद) - 5 Questions ============
  { 
    question: "'गंगेयम्' का संधि विच्छेद क्या है?", 
    options: ["गंगा + इयम्", "गंगा + एयम्", "गंग + इयम्", "गंगे + अयम्"], 
    answer: "गंगा + इयम्" 
  },
  { 
    question: "'सूर्योदयः' का संधि विच्छेद क्या है?", 
    options: ["सूर्यः + उदयः", "सूर्य + उदयः", "सूर्यो + दयः", "सूर्यः + दयः"], 
    answer: "सूर्यः + उदयः" 
  },
  { 
    question: "'विद्यालयः' का संधि विच्छेद क्या है?", 
    options: ["विद्या + आलयः", "विद्य + आलयः", "विद्या + लयः", "विद्याल + अयः"], 
    answer: "विद्या + आलयः" 
  },
  { 
    question: "'नरेन्द्रः' का संधि विच्छेद क्या है?", 
    options: ["नरः + इन्द्रः", "नर + इन्द्रः", "नरे + न्द्रः", "नरेन + द्रः"], 
    answer: "नरः + इन्द्रः" 
  },
  { 
    question: "'प्रत्युपकारः' का संधि विच्छेद क्या है?", 
    options: ["प्रति + उपकारः", "प्रत्य + उपकारः", "प्रत + उपकारः", "प्रत्यु + पकारः"], 
    answer: "प्रति + उपकारः" 
  },

  // ============ SAMAS (समास) - 10 Questions ============
  { 
    question: "'राजपुत्रः' में कौन सा समास है?", 
    options: ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"], 
    answer: "तत्पुरुष" 
  },
  { 
    question: "'पीताम्बरः' (भगवान विष्णु) में कौन सा समास है?", 
    options: ["बहुव्रीहि", "तत्पुरुष", "कर्मधारय", "द्वन्द्व"], 
    answer: "बहुव्रीहि" 
  },
  { 
    question: "'गुरुशिष्यौ' में कौन सा समास है?", 
    options: ["द्वन्द्व", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"], 
    answer: "द्वन्द्व" 
  },
  { 
    question: "'नीलकण्ठः' (शिव) में कौन सा समास है?", 
    options: ["बहुव्रीहि", "तत्पुरुष", "कर्मधारय", "द्विगु"], 
    answer: "बहुव्रीहि" 
  },
  { 
    question: "'त्रिभुवनम्' में कौन सा समास है?", 
    options: ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"], 
    answer: "द्विगु" 
  },
  { 
    question: "'महाराजः' में कौन सा समास है?", 
    options: ["कर्मधारय", "तत्पुरुष", "बहुव्रीहि", "द्वन्द्व"], 
    answer: "कर्मधारय" 
  },
  { 
    question: "'देवदानवाः' में कौन सा समास है?", 
    options: ["द्वन्द्व", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"], 
    answer: "द्वन्द्व" 
  },
  { 
    question: "'चक्रपाणिः' (विष्णु) में कौन सा समास है?", 
    options: ["बहुव्रीहि", "तत्पुरुष", "कर्मधारय", "द्विगु"], 
    answer: "बहुव्रीहि" 
  },
  { 
    question: "'रामायणम्' में कौन सा समास है?", 
    options: ["तत्पुरुष", "बहुव्रीहि", "कर्मधारय", "द्वन्द्व"], 
    answer: "तत्पुरुष" 
  },
  { 
    question: "'पञ्चवटी' में कौन सा समास है?", 
    options: ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"], 
    answer: "द्विगु" 
  },

  // ============ KARAK / VIBHAKTI (कारक/विभक्ति) - 10 Questions ============
  { 
    question: "कर्ता कारक की विभक्ति क्या है?", 
    options: ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"], 
    answer: "प्रथमा" 
  },
  { 
    question: "कर्म कारक की विभक्ति क्या है?", 
    options: ["द्वितीया", "प्रथमा", "तृतीया", "पञ्चमी"], 
    answer: "द्वितीया" 
  },
  { 
    question: "करण कारक की विभक्ति क्या है?", 
    options: ["तृतीया", "द्वितीया", "चतुर्थी", "पञ्चमी"], 
    answer: "तृतीया" 
  },
  { 
    question: "सम्प्रदान कारक की विभक्ति क्या है?", 
    options: ["चतुर्थी", "तृतीया", "द्वितीया", "पञ्चमी"], 
    answer: "चतुर्थी" 
  },
  { 
    question: "अपादान कारक की विभक्ति क्या है?", 
    options: ["पञ्चमी", "चतुर्थी", "तृतीया", "षष्ठी"], 
    answer: "पञ्चमी" 
  },
  { 
    question: "सम्बन्ध कारक की विभक्ति क्या है?", 
    options: ["षष्ठी", "पञ्चमी", "सप्तमी", "तृतीया"], 
    answer: "षष्ठी" 
  },
  { 
    question: "अधिकरण कारक की विभक्ति क्या है?", 
    options: ["सप्तमी", "षष्ठी", "पञ्चमी", "चतुर्थी"], 
    answer: "सप्तमी" 
  },
  { 
    question: "'रामः फलं खादति' में 'रामः' किस कारक में है?", 
    options: ["कर्ता", "कर्म", "करण", "सम्प्रदान"], 
    answer: "कर्ता" 
  },
  { 
    question: "'रामं पश्य' में 'रामम्' किस कारक में है?", 
    options: ["कर्म", "कर्ता", "करण", "सम्प्रदान"], 
    answer: "कर्म" 
  },
  { 
    question: "'रामेण कार्यम्' में 'रामेण' किस कारक में है?", 
    options: ["करण", "कर्ता", "कर्म", "अपादान"], 
    answer: "करण" 
  },

  // ============ PRATYAY (प्रत्यय) - 10 Questions ============
  { 
    question: "'पठति' में कौन सा विकरण प्रत्यय है?", 
    options: ["शप्", "श्यन्", "श्नु", "यक्"], 
    answer: "शप्" 
  },
  { 
    question: "'लिखति' में कौन सा विकरण प्रत्यय है?", 
    options: ["शप्", "श्यन्", "श्नु", "यक्"], 
    answer: "शप्" 
  },
  { 
    question: "'नृत्यति' में कौन सा विकरण प्रत्यय है?", 
    options: ["श्यन्", "शप्", "श्नु", "यक्"], 
    answer: "श्यन्" 
  },
  { 
    question: "'अध्ययनम्' में कौन सा प्रत्यय है?", 
    options: ["ल्युट्", "क्त", "क्तवतु", "णिच्"], 
    answer: "ल्युट्" 
  },
  { 
    question: "'भूत्वा' में कौन सा प्रत्यय है?", 
    options: ["क्त्वा", "ल्यप्", "शतृ", "शानच्"], 
    answer: "क्त्वा" 
  },
  { 
    question: "'लिखितम्' में कौन सा प्रत्यय है?", 
    options: ["क्त", "क्तवतु", "ल्युट्", "णिच्"], 
    answer: "क्त" 
  },
  { 
    question: "'कारयति' में कौन सा प्रत्यय है?", 
    options: ["णिच्", "सन्", "यक्", "क्त"], 
    answer: "णिच्" 
  },
  { 
    question: "'जिघृक्षति' में कौन सा प्रत्यय है?", 
    options: ["सन्", "णिच्", "यक्", "क्त"], 
    answer: "सन्" 
  },
  { 
    question: "'पठन्' में कौन सा प्रत्यय है?", 
    options: ["शतृ", "शानच्", "क्त", "ल्युट्"], 
    answer: "शतृ" 
  },
  { 
    question: "'पठमानः' में कौन सा प्रत्यय है?", 
    options: ["शानच्", "शतृ", "क्त", "ल्युट्"], 
    answer: "शानच्" 
  },

  // ============ DHATU (धातु) - 10 Questions ============
  { 
    question: "'गम्' धातु का अर्थ क्या है?", 
    options: ["जाना", "पढ़ना", "लिखना", "खाना"], 
    answer: "जाना" 
  },
  { 
    question: "'पठ्' धातु का अर्थ क्या है?", 
    options: ["पढ़ना", "लिखना", "जाना", "बोलना"], 
    answer: "पढ़ना" 
  },
  { 
    question: "'लिख्' धातु का अर्थ क्या है?", 
    options: ["लिखना", "पढ़ना", "जाना", "देखना"], 
    answer: "लिखना" 
  },
  { 
    question: "'भू' धातु का अर्थ क्या है?", 
    options: ["होना", "जाना", "पढ़ना", "लिखना"], 
    answer: "होना" 
  },
  { 
    question: "'खाद्' धातु का अर्थ क्या है?", 
    options: ["खाना", "पीना", "देखना", "सुनना"], 
    answer: "खाना" 
  },
  { 
    question: "'पा' धातु का अर्थ क्या है?", 
    options: ["पीना", "खाना", "देखना", "जाना"], 
    answer: "पीना" 
  },
  { 
    question: "'दृश्' धातु का अर्थ क्या है?", 
    options: ["देखना", "सुनना", "पढ़ना", "लिखना"], 
    answer: "देखना" 
  },
  { 
    question: "'श्रु' धातु का अर्थ क्या है?", 
    options: ["सुनना", "देखना", "बोलना", "जाना"], 
    answer: "सुनना" 
  },
  { 
    question: "'वच्' धातु का अर्थ क्या है?", 
    options: ["बोलना", "जाना", "देखना", "सुनना"], 
    answer: "बोलना" 
  },
  { 
    question: "'गै' धातु का अर्थ क्या है?", 
    options: ["गाना", "जाना", "पढ़ना", "लिखना"], 
    answer: "गाना" 
  },

  // ============ UPASARGA (उपसर्ग) - 8 Questions ============
  { 
    question: "'आगच्छति' में कौन सा उपसर्ग है?", 
    options: ["आ", "प्र", "सम्", "उद्"], 
    answer: "आ" 
  },
  { 
    question: "'प्रविशति' में कौन सा उपसर्ग है?", 
    options: ["प्र", "आ", "सम्", "उद्"], 
    answer: "प्र" 
  },
  { 
    question: "'संवादः' में कौन सा उपसर्ग है?", 
    options: ["सम्", "प्र", "आ", "उद्"], 
    answer: "सम्" 
  },
  { 
    question: "'उद्गच्छति' में कौन सा उपसर्ग है?", 
    options: ["उद्", "सम्", "प्र", "आ"], 
    answer: "उद्" 
  },
  { 
    question: "'निर्गच्छति' में कौन सा उपसर्ग है?", 
    options: ["निर्", "प्र", "आ", "सम्"], 
    answer: "निर्" 
  },
  { 
    question: "'अवतरति' में कौन सा उपसर्ग है?", 
    options: ["अव", "आ", "प्र", "सम्"], 
    answer: "अव" 
  },
  { 
    question: "'परिगच्छति' में कौन सा उपसर्ग है?", 
    options: ["परि", "प्र", "आ", "सम्"], 
    answer: "परि" 
  },
  { 
    question: "'अभिगच्छति' में कौन सा उपसर्ग है?", 
    options: ["अभि", "प्र", "आ", "सम्"], 
    answer: "अभि" 
  },

  // ============ SHABD ROOP (शब्द रूप) - 8 Questions ============
  { 
    question: "'राम' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["रामः", "रामम्", "रामेण", "रामाय"], 
    answer: "रामः" 
  },
  { 
    question: "'फल' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["फलम्", "फलः", "फलेन", "फलाय"], 
    answer: "फलम्" 
  },
  { 
    question: "'राजन्' शब्द का संबोधन एकवचन रूप क्या है?", 
    options: ["राजन्", "राजा", "राज्ञे", "राज्ञः"], 
    answer: "राजन्" 
  },
  { 
    question: "'गुरु' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["गुरुः", "गुरुम्", "गुरुणा", "गुरवे"], 
    answer: "गुरुः" 
  },
  { 
    question: "'मति' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["मतिः", "मतिम्", "मत्या", "मत्यै"], 
    answer: "मतिः" 
  },
  { 
    question: "'साधु' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["साधुः", "साधुम्", "साधुना", "साधवे"], 
    answer: "साधुः" 
  },
  { 
    question: "'पितृ' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["पिता", "पितरम्", "पित्रा", "पित्रे"], 
    answer: "पिता" 
  },
  { 
    question: "'नदी' शब्द का प्रथमा विभक्ति एकवचन रूप क्या है?", 
    options: ["नदी", "नदिम्", "नद्या", "नद्यै"], 
    answer: "नदी" 
  },

  // ============ VAKYA RACHANA (वाक्य रचना) - 6 Questions ============
  { 
    question: "'रामः फलं खादति' का हिंदी अनुवाद क्या है?", 
    options: ["राम फल खाता है", "राम ने फल खाया", "राम फल खाएगा", "राम फल खा रहा है"], 
    answer: "राम फल खाता है" 
  },
  { 
    question: "'सीता पुस्तकं पठति' का हिंदी अनुवाद क्या है?", 
    options: ["सीता पुस्तक पढ़ती है", "सीता पुस्तक पढ़ेगी", "सीता ने पुस्तक पढ़ी", "सीता पुस्तक पढ़ रही है"], 
    answer: "सीता पुस्तक पढ़ती है" 
  },
  { 
    question: "राम विद्यालयं गच्छति' का हिंदी अनुवाद क्या है?", 
    options: ["राम विद्यालय जाता है", "राम विद्यालय गया", "राम विद्यालय जाएगा", "राम विद्यालय जा रहा है"], 
    answer: "राम विद्यालय जाता है" 
  },
  { 
    question: "'सत्यमेव जयते' का हिंदी अनुवाद क्या है?", 
    options: ["सत्य की ही जीत होती है", "सत्य जीतता है", "सत्य ही जय", "सत्य की जीत"], 
    answer: "सत्य की ही जीत होती है" 
  },
  { 
    question: "'वसुधैव कुटुम्बकम्' का हिंदी अनुवाद क्या है?", 
    options: ["पृथ्वी ही परिवार है", "संसार एक परिवार है", "सारा संसार परिवार है", "धरती कुटुम्ब है"], 
    answer: "पृथ्वी ही परिवार है" 
  },
  { 
    question: "'ज्ञानं सर्वोत्तमं धनम्' का हिंदी अनुवाद क्या है?", 
    options: ["ज्ञान सबसे उत्तम धन है", "ज्ञान धन है", "ज्ञान सर्वोत्तम है", "ज्ञानी धनवान"], 
    answer: "ज्ञान सबसे उत्तम धन है" 
  },

  // ============ LITERATURE (साहित्य) - 8 Questions ============
  { 
    question: "रामायण के रचयिता कौन हैं?", 
    options: ["वाल्मीकि", "व्यास", "कालिदास", "भास"], 
    answer: "वाल्मीकि" 
  },
  { 
    question: "महाभारत के रचयिता कौन हैं?", 
    options: ["वेदव्यास", "वाल्मीकि", "कालिदास", "भारवि"], 
    answer: "वेदव्यास" 
  },
  { 
    question: "अभिज्ञानशाकुन्तलम् के रचयिता कौन हैं?", 
    options: ["कालिदास", "भास", "शूद्रक", "बाणभट्ट"], 
    answer: "कालिदास" 
  },
  { 
    question: "गीता किस महाकाव्य का अंग है?", 
    options: ["महाभारत", "रामायण", "हरिवंश", "विष्णुपुराण"], 
    answer: "महाभारत" 
  },
  { 
    question: "पतंजलि किसके रचयिता हैं?", 
    options: ["योगसूत्र", "अर्थशास्त्र", "मनुस्मृति", "कामसूत्र"], 
    answer: "योगसूत्र" 
  },
  { 
    question: "अर्थशास्त्र के रचयिता कौन हैं?", 
    options: ["चाणक्य", "मनु", "पतंजलि", "वात्स्यायन"], 
    answer: "चाणक्य" 
  },
  { 
    question: "रघुवंशम् के रचयिता कौन हैं?", 
    options: ["कालिदास", "भारवि", "माघ", "भास"], 
    answer: "कालिदास" 
  },
  { 
    question: "मेघदूतम् के रचयिता कौन हैं?", 
    options: ["कालिदास", "भास", "शूद्रक", "भारवि"], 
    answer: "कालिदास" 
  },

  // ============ VYAKARAN (व्याकरण) - 5 Questions ============
  { 
    question: "संस्कृत में कितने पुरुष होते हैं?", 
    options: ["3", "2", "4", "5"], 
    answer: "3" 
  },
  { 
    question: "संस्कृत में कितने वचन होते हैं?", 
    options: ["3", "2", "4", "1"], 
    answer: "3" 
  },
  { 
    question: "संस्कृत में कितने लकार (काल) होते हैं?", 
    options: ["10", "8", "6", "12"], 
    answer: "10" 
  },
  { 
    question: "संस्कृत भाषा किस वर्णमाला में लिखी जाती है?", 
    options: ["देवनागरी", "ब्राह्मी", "खरोष्ठी", "ग्रंथ"], 
    answer: "देवनागरी" 
  },
  { 
    question: "संस्कृत वर्णमाला में कितने स्वर हैं?", 
    options: ["13", "10", "15", "12"], 
    answer: "13" 
  },

  // ============ PRAYOG (प्रयोग) - 10 Questions ============
  { 
    question: "'गच्छामि' का अर्थ क्या है?", 
    options: ["मैं जाता हूँ", "तुम जाते हो", "वह जाता है", "हम जाते हैं"], 
    answer: "मैं जाता हूँ" 
  },
  { 
    question: "'गच्छसि' का अर्थ क्या है?", 
    options: ["तुम जाते हो", "मैं जाता हूँ", "वह जाता है", "हम जाते हैं"], 
    answer: "तुम जाते हो" 
  },
  { 
    question: "'गच्छति' का अर्थ क्या है?", 
    options: ["वह जाता है", "मैं जाता हूँ", "तुम जाते हो", "हम जाते हैं"], 
    answer: "वह जाता है" 
  },
  { 
    question: "'गच्छामः' का अर्थ क्या है?", 
    options: ["हम जाते हैं", "मैं जाता हूँ", "तुम जाते हो", "वह जाता है"], 
    answer: "हम जाते हैं" 
  },
  { 
    question: "'गच्छन्ति' का अर्थ क्या है?", 
    options: ["वे जाते हैं", "हम जाते हैं", "तुम जाते हो", "वह जाता है"], 
    answer: "वे जाते हैं" 
  },
  { 
    question: "'पठामि' का अर्थ क्या है?", 
    options: ["मैं पढ़ता हूँ", "तुम पढ़ते हो", "वह पढ़ता है", "हम पढ़ते हैं"], 
    answer: "मैं पढ़ता हूँ" 
  },
  { 
    question: "'पठसि' का अर्थ क्या है?", 
    options: ["तुम पढ़ते हो", "मैं पढ़ता हूँ", "वह पढ़ता है", "हम पढ़ते हैं"], 
    answer: "तुम पढ़ते हो" 
  },
  { 
    question: "'पठति' का अर्थ क्या है?", 
    options: ["वह पढ़ता है", "मैं पढ़ता हूँ", "तुम पढ़ते हो", "हम पढ़ते हैं"], 
    answer: "वह पढ़ता है" 
  },
  { 
    question: "'पठामः' का अर्थ क्या है?", 
    options: ["हम पढ़ते हैं", "मैं पढ़ता हूँ", "तुम पढ़ते हो", "वह पढ़ता है"], 
    answer: "हम पढ़ते हैं" 
  },
  { 
    question: "'पठन्ति' का अर्थ क्या है?", 
    options: ["वे पढ़ते हैं", "हम पढ़ते हैं", "तुम पढ़ते हो", "वह पढ़ता है"], 
    answer: "वे पढ़ते हैं" 
  },

  // ============ SUBODH (सुबोध) - 10 Questions ============
  { 
    question: "'अहम्' का अर्थ क्या है?", 
    options: ["मैं", "तुम", "वह", "हम"], 
    answer: "मैं" 
  },
  { 
    question: "'त्वम्' का अर्थ क्या है?", 
    options: ["तुम", "मैं", "वह", "हम"], 
    answer: "तुम" 
  },
  { 
    question: "'सः' का अर्थ क्या है?", 
    options: ["वह (पुल्लिंग)", "वह (स्त्रीलिंग)", "वे", "हम"], 
    answer: "वह (पुल्लिंग)" 
  },
  { 
    question: "'सा' का अर्थ क्या है?", 
    options: ["वह (स्त्रीलिंग)", "वह (पुल्लिंग)", "वे", "हम"], 
    answer: "वह (स्त्रीलिंग)" 
  },
  { 
    question: "'वयम्' का अर्थ क्या है?", 
    options: ["हम", "तुम", "वह", "मैं"], 
    answer: "हम" 
  },
  { 
    question: "'यूयम्' का अर्थ क्या है?", 
    options: ["तुम", "हम", "वह", "मैं"], 
    answer: "तुम" 
  },
  { 
    question: "'ते' का अर्थ क्या है?", 
    options: ["वे", "हम", "तुम", "वह"], 
    answer: "वे" 
  },
  { 
    question: "'इदम्' का अर्थ क्या है?", 
    options: ["यह", "वह", "जो", "ये"], 
    answer: "यह" 
  },
  { 
    question: "'तत्' का अर्थ क्या है?", 
    options: ["वह", "यह", "जो", "वे"], 
    answer: "वह" 
  },
  { 
    question: "'किम्' का अर्थ क्या है?", 
    options: ["क्या", "कौन", "कब", "कहाँ"], 
    answer: "क्या" 
  },
];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...sanskritQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10SanskritMockTest() {
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
        background: "linear-gradient(135deg, #bf360c 0%, #d84315 50%, #e64a19 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🕉️</div>
          <h1 style={{ 
            color: "#bf360c", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            संस्कृत मॉक टेस्ट
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            बिहार विद्यालय परीक्षा समिति - कक्षा 10
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #bf360c, #e64a19)",
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
              backgroundColor: "#fbe9e7", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#bf360c" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#fbe9e7", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#bf360c" }}>60 min</div>
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
            <strong>📋 निर्देश:</strong>
            <ul style={{ margin: "5px 0 0 0", paddingLeft: "18px" }}>
              <li>सभी प्रश्न अनिवार्य हैं</li>
              <li>प्रत्येक प्रश्न <strong>१ अंक</strong> का है</li>
              <li><strong>कोई नकारात्मक अंकन नहीं</strong></li>
              <li>समय समाप्त होने से पहले जमा करें</li>
            </ul>
          </div>

          <button
            onClick={startExam}
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(230, 74, 25, 0.4)"
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
              {isPassed ? "🎉 अभिनन्दन!" : "📖 अभ्यास जारी रखें!"}
            </h1>
            <p style={{ color: "#888", fontSize: "12px" }}>संस्कृत मॉक टेस्ट - कक्षा १०</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#bf360c" }}>
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
            {isPassed && (
              <div style={{
                marginTop: "10px",
                padding: "8px",
                backgroundColor: "#d4edda",
                borderRadius: "8px",
                color: "#155724",
                fontSize: "13px"
              }}>
                🎯 आपने मॉक टेस्ट उत्तीर्ण किया!
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
                background: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(230, 74, 25, 0.4)"
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
              प्रश्न {current + 1}/{questions.length}
            </p>
            <p style={{ 
              margin: "2px 0 0", 
              fontSize: "10px", 
              color: "#a0aec0"
            }}>
              उत्तर दिए: {answeredCount}/{questions.length}
            </p>
          </div>
          <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: timer < 60 ? "#fc8181" : "#bf360c",
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
            backgroundColor: "#fbe9e7",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#bf360c",
            marginBottom: "12px"
          }}>
            📌 प्रश्न {current + 1}
          </div>
          <h3 style={{
            fontSize: "17px",
            color: "#bf360c",
            marginBottom: "16px",
            fontWeight: "600",
            lineHeight: "1.5",
            fontFamily: "'Noto Sans Devanagari', 'Segoe UI', sans-serif"
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
                  backgroundColor: answers[current] === op ? "#fbe9e7" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #bf360c" : "2px solid transparent",
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
                    color: "#2d3748",
                    fontFamily: "'Noto Sans Devanagari', 'Segoe UI', sans-serif"
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#bf360c",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              ⬅ Previous
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#bf360c",
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
                                   current === idx ? "#bf360c" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #bf360c" : "none",
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