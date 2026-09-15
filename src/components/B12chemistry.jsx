// Chemistry12thQuiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- 12th Chemistry Question Bank (100 questions) - Hindi & English ---

// Hindi Questions
const chemistryHindi = [
  // Solid State
  { question: "ठोस अवस्था में कणों की व्यवस्था कैसी होती है?", options: ["अव्यवस्थित", "नियमित", "यादृच्छिक", "कोई नहीं"], answer: "नियमित" },
  { question: "किस प्रकार के ठोस में आयनिक बंध होता है?", options: ["आयनिक ठोस", "सहसंयोजक ठोस", "धात्विक ठोस", "आण्विक ठोस"], answer: "आयनिक ठोस" },
  { question: "एकक कोष्ठिका में कितने प्रकार के ब्रेवे जालक होते हैं?", options: ["7", "14", "21", "28"], answer: "14" },
  { question: "fcc जालक में प्रति एकक कोष्ठिका परमाणुओं की संख्या कितनी होती है?", options: ["1", "2", "4", "6"], answer: "4" },
  { question: "bcc जालक में प्रति एकक कोष्ठिका परमाणुओं की संख्या कितनी होती है?", options: ["1", "2", "4", "6"], answer: "2" },
  { question: "निजी अर्धचालक में डोपिंग से क्या बनता है?", options: ["n-प्रकार", "p-प्रकार", "दोनों", "कोई नहीं"], answer: "दोनों" },
  { question: "फ्रेंकल दोष में क्या होता है?", options: ["कण अपनी जगह से हट जाता है", "कण गायब हो जाता है", "कण जुड़ जाता है", "कोई नहीं"], answer: "कण अपनी जगह से हट जाता है" },
  { question: "शॉटकी दोष में क्या होता है?", options: ["कण गायब हो जाता है", "कण जुड़ जाता है", "कण हट जाता है", "कोई नहीं"], answer: "कण गायब हो जाता है" },
  { question: "अर्धचालक में तापमान बढ़ने पर चालकता कैसे बदलती है?", options: ["घटती है", "बढ़ती है", "समान रहती है", "शून्य हो जाती है"], answer: "बढ़ती है" },
  { question: "चुंबकीय पदार्थ में फेरोमैग्नेटिक पदार्थ का उदाहरण क्या है?", options: ["लोहा", "एल्यूमीनियम", "तांबा", "सोना"], answer: "लोहा" },

  // Solutions
  { question: "विलयन की मोलरता का सूत्र क्या है?", options: ["n/V", "n×V", "V/n", "n+V"], answer: "n/V" },
  { question: "राउल्ट का नियम किससे संबंधित है?", options: ["वाष्प दाब", "परासरण दाब", "क्वथनांक", "हिमांक"], answer: "वाष्प दाब" },
  { question: "आदर्श विलयन में ΔHmix कितना होता है?", options: ["शून्य", "धनात्मक", "ऋणात्मक", "अनंत"], answer: "शून्य" },
  { question: "अणुसंख्य गुणधर्म किस पर निर्भर करते हैं?", options: ["विलेय के कणों की संख्या", "विलेय की प्रकृति", "विलायक की प्रकृति", "तापमान"], answer: "विलेय के कणों की संख्या" },
  { question: "हिमांक अवनमन का सूत्र क्या है?", options: ["ΔTf = Kf × m", "ΔTf = Kf / m", "ΔTf = m / Kf", "ΔTf = Kf + m"], answer: "ΔTf = Kf × m" },
  { question: "परासरण दाब का सूत्र क्या है?", options: ["π = CRT", "π = C/RT", "π = RT/C", "π = C+R+T"], answer: "π = CRT" },
  { question: "वैंट हॉफ गुणांक क्या दर्शाता है?", options: ["वियोजन की मात्रा", "संयोजन की मात्रा", "वाष्प दाब", "परासरण दाब"], answer: "वियोजन की मात्रा" },
  { question: "कोलिगेटिव गुणधर्म कितने प्रकार के होते हैं?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "मोललता का SI मात्रक क्या है?", options: ["mol/kg", "mol/L", "mol/m³", "mol/g"], answer: "mol/kg" },
  { question: "हेनरी का नियम किससे संबंधित है?", options: ["गैस की विलेयता", "वाष्प दाब", "परासरण दाब", "क्वथनांक"], answer: "गैस की विलेयता" },

  // Electrochemistry
  { question: "विद्युत रसायन में ऑक्सीकरण किस इलेक्ट्रोड पर होता है?", options: ["एनोड", "कैथोड", "दोनों", "कोई नहीं"], answer: "एनोड" },
  { question: "विद्युत रसायन में अपचयन किस इलेक्ट्रोड पर होता है?", options: ["कैथोड", "एनोड", "दोनों", "कोई नहीं"], answer: "कैथोड" },
  { question: "फैराडे का प्रथम नियम किससे संबंधित है?", options: ["विद्युत अपघटन", "विद्युत चालन", "विद्युत क्षेत्र", "विद्युत धारा"], answer: "विद्युत अपघटन" },
  { question: "फैराडे का द्वितीय नियम किससे संबंधित है?", options: ["विद्युत अपघटन", "विद्युत चालन", "विद्युत क्षेत्र", "विद्युत धारा"], answer: "विद्युत अपघटन" },
  { question: "मोलर चालकता का SI मात्रक क्या है?", options: ["S·m²/mol", "S/m", "S·m/mol", "S/mol"], answer: "S·m²/mol" },
  { question: "नर्नस्ट समीकरण किससे संबंधित है?", options: ["विद्युत वाहक बल", "धारा", "प्रतिरोध", "शक्ति"], answer: "विद्युत वाहक बल" },
  { question: "मानक हाइड्रोजन इलेक्ट्रोड का विभव कितना होता है?", options: ["0 V", "1 V", "-1 V", "0.5 V"], answer: "0 V" },
  { question: "गैल्वेनिक सेल में कौन सा परिवर्तन होता है?", options: ["रासायनिक से विद्युत", "विद्युत से रासायनिक", "ऊष्मा से विद्युत", "प्रकाश से विद्युत"], answer: "रासायनिक से विद्युत" },
  { question: "विद्युत अपघटन में कौन सा परिवर्तन होता है?", options: ["विद्युत से रासायनिक", "रासायनिक से विद्युत", "ऊष्मा से विद्युत", "प्रकाश से विद्युत"], answer: "विद्युत से रासायनिक" },
  { question: "कोलराउश नियम किससे संबंधित है?", options: ["मोलर चालकता", "विद्युत वाहक बल", "धारा", "प्रतिरोध"], answer: "मोलर चालकता" },

  // Chemical Kinetics
  { question: "रासायनिक अभिक्रिया की दर का SI मात्रक क्या है?", options: ["mol/L/s", "mol/L", "L/mol/s", "mol/s"], answer: "mol/L/s" },
  { question: "दर स्थिरांक का SI मात्रक किस पर निर्भर करता है?", options: ["अभिक्रिया की कोटि", "तापमान", "दबाव", "आयतन"], answer: "अभिक्रिया की कोटि" },
  { question: "प्रथम कोटि अभिक्रिया का अर्धायु सूत्र क्या है?", options: ["t1/2 = 0.693/k", "t1/2 = k/0.693", "t1/2 = 0.693k", "t1/2 = 1/k"], answer: "t1/2 = 0.693/k" },
  { question: "शून्य कोटि अभिक्रिया का अर्धायु सूत्र क्या है?", options: ["t1/2 = A0/2k", "t1/2 = 2k/A0", "t1/2 = k/A0", "t1/2 = A0/k"], answer: "t1/2 = A0/2k" },
  { question: "आर्हेनियस समीकरण किससे संबंधित है?", options: ["तापमान और दर", "दबाव और दर", "आयतन और दर", "सांद्रता और दर"], answer: "तापमान और दर" },
  { question: "उत्प्रेरक अभिक्रिया की दर को कैसे बदलता है?", options: ["बढ़ाता है", "घटाता है", "समान रखता है", "शून्य करता है"], answer: "बढ़ाता है" },
  { question: "अभिक्रिया की आणविकता क्या दर्शाती है?", options: ["अणुओं की संख्या", "कोटि", "दर", "सांद्रता"], answer: "अणुओं की संख्या" },
  { question: "संघट्ट सिद्धांत किससे संबंधित है?", options: ["अभिक्रिया दर", "साम्य", "ऊष्मागतिकी", "विद्युत"], answer: "अभिक्रिया दर" },
  { question: "सक्रियण ऊर्जा का SI मात्रक क्या है?", options: ["J/mol", "J", "mol/J", "J·mol"], answer: "J/mol" },
  { question: "प्रथम कोटि अभिक्रिया की दर स्थिरांक का मात्रक क्या है?", options: ["s⁻¹", "mol/L/s", "L/mol/s", "mol/s"], answer: "s⁻¹" },

  // Surface Chemistry
  { question: "अधिशोषण किस सतह पर होता है?", options: ["ठोस-गैस अंतरापृष्ठ", "द्रव-द्रव अंतरापृष्ठ", "ठोस-ठोस अंतरापृष्ठ", "कोई नहीं"], answer: "ठोस-गैस अंतरापृष्ठ" },
  { question: "भौतिक अधिशोषण में कौन सा बल कार्य करता है?", options: ["वांडर वाल्स", "रासायनिक", "आयनिक", "सहसंयोजक"], answer: "वांडर वाल्स" },
  { question: "रासायनिक अधिशोषण में कौन सा बल कार्य करता है?", options: ["रासायनिक", "वांडर वाल्स", "आयनिक", "धात्विक"], answer: "रासायनिक" },
  { question: "फ्रॉयंडलिच अधिशोषण समतल किससे संबंधित है?", options: ["अधिशोषण", "अवशोषण", "विलेयता", "वाष्प दाब"], answer: "अधिशोषण" },
  { question: "लैंगम्यूर अधिशोषण समतल किससे संबंधित है?", options: ["अधिशोषण", "अवशोषण", "विलेयता", "वाष्प दाब"], answer: "अधिशोषण" },
  { question: "कोलाइडल विलयन में कणों का आकार कितना होता है?", options: ["1-1000 nm", "1-100 nm", "100-1000 nm", "1-10 nm"], answer: "1-1000 nm" },
  { question: "टिंडल प्रभाव किसमें देखा जाता है?", options: ["कोलाइडल विलयन", "सत्य विलयन", "निलंबन", "कोई नहीं"], answer: "कोलाइडल विलयन" },
  { question: "ब्राउनियन गति किसमें होती है?", options: ["कोलाइडल कण", "सत्य विलयन", "निलंबन", "कोई नहीं"], answer: "कोलाइडल कण" },
  { question: "इमल्शन किस प्रकार का कोलाइड है?", options: ["द्रव-द्रव", "ठोस-द्रव", "गैस-द्रव", "ठोस-गैस"], answer: "द्रव-द्रव" },
  { question: "एरोसोल किस प्रकार का कोलाइड है?", options: ["गैस-ठोस/द्रव", "द्रव-द्रव", "ठोस-द्रव", "ठोस-गैस"], answer: "गैस-ठोस/द्रव" },

  // General Principles of Metallurgy
  { question: "अयस्क से धातु निकालने की प्रक्रिया क्या कहलाती है?", options: ["धातुकर्म", "विद्युत अपघटन", "निष्कर्षण", "शोधन"], answer: "धातुकर्म" },
  { question: "सांद्रण किस लिए किया जाता है?", options: ["अयस्क शुद्ध करने", "धातु निकालने", "मिश्र धातु बनाने", "कोई नहीं"], answer: "अयस्क शुद्ध करने" },
  { question: "फेन प्लवन विधि किस अयस्क के लिए उपयोग होती है?", options: ["सल्फाइड अयस्क", "ऑक्साइड अयस्क", "कार्बोनेट अयस्क", "हैलाइड अयस्क"], answer: "सल्फाइड अयस्क" },
  { question: "भर्जन में क्या होता है?", options: ["अयस्क गर्म किया जाता है", "अयस्क ठंडा किया जाता है", "अयस्क धोया जाता है", "कोई नहीं"], answer: "अयस्क गर्म किया जाता है" },
  { question: "निस्तापन में क्या होता है?", options: ["अयस्क हवा की अनुपस्थिति में गर्म", "अयस्क हवा में गर्म", "अयस्क धोया जाता है", "कोई नहीं"], answer: "अयस्क हवा की अनुपस्थिति में गर्म" },
  { question: "इलेक्ट्रोलाइटिक शोधन किस धातु के लिए उपयोग होता है?", options: ["तांबा", "लोहा", "एल्यूमीनियम", "जस्ता"], answer: "तांबा" },
  { question: "जोन शोधन किस धातु के लिए उपयोग होता है?", options: ["जर्मेनियम", "तांबा", "लोहा", "एल्यूमीनियम"], answer: "जर्मेनियम" },
  { question: "मंडल शोधन किस धातु के लिए उपयोग होता है?", options: ["निकल", "तांबा", "लोहा", "जस्ता"], answer: "निकल" },
  { question: "वैन आर्केल विधि किस धातु के लिए उपयोग होती है?", options: ["टाइटेनियम", "तांबा", "लोहा", "एल्यूमीनियम"], answer: "टाइटेनियम" },
  { question: "बेयर विधि किस धातु के लिए उपयोग होती है?", options: ["एल्यूमीनियम", "तांबा", "लोहा", "जस्ता"], answer: "एल्यूमीनियम" },

  // p-Block Elements
  { question: "p-ब्लॉक तत्वों में कौन सा समूह शामिल है?", options: ["13-18", "1-2", "3-12", "1-18"], answer: "13-18" },
  { question: "नाइट्रोजन का परमाणु क्रमांक क्या है?", options: ["7", "8", "9", "10"], answer: "7" },
  { question: "ऑक्सीजन का परमाणु क्रमांक क्या है?", options: ["8", "7", "9", "10"], answer: "8" },
  { question: "फ्लोरीन का परमाणु क्रमांक क्या है?", options: ["9", "8", "10", "11"], answer: "9" },
  { question: "नियॉन का परमाणु क्रमांक क्या है?", options: ["10", "9", "11", "12"], answer: "10" },
  { question: "सोडियम का परमाणु क्रमांक क्या है?", options: ["11", "10", "12", "13"], answer: "11" },
  { question: "मैग्नीशियम का परमाणु क्रमांक क्या है?", options: ["12", "11", "13", "14"], answer: "12" },
  { question: "एल्यूमीनियम का परमाणु क्रमांक क्या है?", options: ["13", "12", "14", "15"], answer: "13" },
  { question: "सिलिकॉन का परमाणु क्रमांक क्या है?", options: ["14", "13", "15", "16"], answer: "14" },
  { question: "फास्फोरस का परमाणु क्रमांक क्या है?", options: ["15", "14", "16", "17"], answer: "15" },

  // d-Block Elements
  { question: "d-ब्लॉक तत्वों को क्या कहा जाता है?", options: ["संक्रमण तत्व", "अंतरा संक्रमण तत्व", "प्रतिनिधि तत्व", "उत्कृष्ट गैस"], answer: "संक्रमण तत्व" },
  { question: "संक्रमण तत्वों में कौन सा कक्षक भरा जाता है?", options: ["d", "s", "p", "f"], answer: "d" },
  { question: "संक्रमण तत्वों की विशेषता क्या है?", options: ["चर संयोजकता", "स्थिर संयोजकता", "कोई संयोजकता नहीं", "कोई नहीं"], answer: "चर संयोजकता" },
  { question: "लोहे का परमाणु क्रमांक क्या है?", options: ["26", "25", "27", "28"], answer: "26" },
  { question: "तांबे का परमाणु क्रमांक क्या है?", options: ["29", "28", "30", "31"], answer: "29" },
  { question: "जस्ते का परमाणु क्रमांक क्या है?", options: ["30", "29", "31", "32"], answer: "30" },
  { question: "चांदी का परमाणु क्रमांक क्या है?", options: ["47", "46", "48", "49"], answer: "47" },
  { question: "सोने का परमाणु क्रमांक क्या है?", options: ["79", "78", "80", "81"], answer: "79" },
  { question: "संक्रमण तत्वों में कौन सा गुण होता है?", options: ["अनुचुंबकीय", "प्रतिचुंबकीय", "कोई नहीं", "दोनों"], answer: "अनुचुंबकीय" },
  { question: "संक्रमण तत्वों के यौगिक कैसे होते हैं?", options: ["रंगीन", "रंगहीन", "सफेद", "कोई नहीं"], answer: "रंगीन" },

  // Coordination Compounds
  { question: "संकुल यौगिक में केंद्रीय धातु परमाणु क्या कहलाता है?", options: ["केंद्रीय आयन", "लिगैंड", "संकुल", "कोई नहीं"], answer: "केंद्रीय आयन" },
  { question: "संकुल यौगिक में लिगैंड क्या होता है?", options: ["इलेक्ट्रॉन युग्म दान", "इलेक्ट्रॉन युग्म ग्रहण", "आयन", "कोई नहीं"], answer: "इलेक्ट्रॉन युग्म दान" },
  { question: "संकुल यौगिक में उपसहसंयोजन संख्या क्या दर्शाती है?", options: ["लिगैंड की संख्या", "धातु की संख्या", "आयन की संख्या", "कोई नहीं"], answer: "लिगैंड की संख्या" },
  { question: "क्रिस्टल क्षेत्र सिद्धांत किससे संबंधित है?", options: ["संकुल यौगिक", "आयनिक यौगिक", "सहसंयोजक यौगिक", "धात्विक यौगिक"], answer: "संकुल यौगिक" },
  { question: "संकुल यौगिक में रंग किस कारण होता है?", options: ["d-d संक्रमण", "s-s संक्रमण", "p-p संक्रमण", "f-f संक्रमण"], answer: "d-d संक्रमण" },
  { question: "संकुल यौगिक में चुंबकीय गुण किस कारण होता है?", options: ["अयुग्मित इलेक्ट्रॉन", "युग्मित इलेक्ट्रॉन", "कोई इलेक्ट्रॉन नहीं", "कोई नहीं"], answer: "अयुग्मित इलेक्ट्रॉन" },
  { question: "संकुल यौगिक में समावयवता कितने प्रकार की होती है?", options: ["कई", "एक", "दो", "तीन"], answer: "कई" },
  { question: "संकुल यौगिक में ज्यामितीय समावयवता किसमें होती है?", options: ["वर्ग समतलीय", "चतुष्फलकीय", "रेखीय", "कोई नहीं"], answer: "वर्ग समतलीय" },
  { question: "संकुल यौगिक में प्रकाशिक समावयवता किसमें होती है?", options: ["अष्टफलकीय", "चतुष्फलकीय", "रेखीय", "कोई नहीं"], answer: "अष्टफलकीय" },
  { question: "संकुल यौगिक में आयनिक समावयवता किसमें होती है?", options: ["आयनिक संकुल", "उदासीन संकुल", "कोई नहीं", "दोनों"], answer: "आयनिक संकुल" },

  // Haloalkanes and Haloarenes
  { question: "हैलोऐल्केन में हैलोजन किस कार्बन से जुड़ा होता है?", options: ["sp³", "sp²", "sp", "कोई नहीं"], answer: "sp³" },
  { question: "हैलोऐरीन में हैलोजन किस कार्बन से जुड़ा होता है?", options: ["sp²", "sp³", "sp", "कोई नहीं"], answer: "sp²" },
  { question: "SN1 अभिक्रिया में कौन सा पद अवशोषक है?", options: ["कार्बोकैटायन", "कार्बेनियन", "फ्री रेडिकल", "कोई नहीं"], answer: "कार्बोकैटायन" },
  { question: "SN2 अभिक्रिया में कौन सा पद अवशोषक है?", options: ["संक्रमण अवस्था", "कार्बोकैटायन", "कार्बेनियन", "कोई नहीं"], answer: "संक्रमण अवस्था" },
  { question: "SN1 अभिक्रिया की कोटि क्या है?", options: ["प्रथम", "द्वितीय", "शून्य", "तृतीय"], answer: "प्रथम" },
  { question: "SN2 अभिक्रिया की कोटि क्या है?", options: ["द्वितीय", "प्रथम", "शून्य", "तृतीय"], answer: "द्वितीय" },
  { question: "हैलोऐल्केन में नाभिकस्नेही प्रतिस्थापन किससे संबंधित है?", options: ["SN1 और SN2", "E1", "E2", "कोई नहीं"], answer: "SN1 और SN2" },
  { question: "हैलोऐल्केन में विहाइड्रोहैलोजनीकरण किससे संबंधित है?", options: ["E1 और E2", "SN1", "SN2", "कोई नहीं"], answer: "E1 और E2" },
  { question: "ग्रिग्नार्ड अभिकर्मक किससे बनता है?", options: ["हैलोऐल्केन", "हैलोऐरीन", "कोई नहीं", "दोनों"], answer: "हैलोऐल्केन" },
  { question: "हैलोऐरीन में नाभिकस्नेही प्रतिस्थापन कैसे होता है?", options: ["कठिन", "आसान", "कोई नहीं", "दोनों"], answer: "कठिन" },

  // Alcohols, Phenols and Ethers
  { question: "ऐल्कोहॉल में कौन सा कार्यात्मक समूह होता है?", options: ["-OH", "-CHO", "-COOH", "-NH₂"], answer: "-OH" },
  { question: "फिनॉल में कौन सा कार्यात्मक समूह होता है?", options: ["-OH", "-CHO", "-COOH", "-NH₂"], answer: "-OH" },
  { question: "ईथर में कौन सा कार्यात्मक समूह होता है?", options: ["-O-", "-OH", "-CHO", "-COOH"], answer: "-O-" },
  { question: "ऐल्कोहॉल में कौन सा बंध होता है?", options: ["C-O", "C-C", "C-H", "O-H"], answer: "C-O" },
  { question: "फिनॉल में कौन सा बंध होता है?", options: ["C-O", "C-C", "C-H", "O-H"], answer: "C-O" },
  { question: "ऐल्कोहॉल में कौन सा गुण होता है?", options: ["अम्लीय", "क्षारीय", "उदासीन", "कोई नहीं"], answer: "अम्लीय" },
  { question: "फिनॉल में कौन सा गुण होता है?", options: ["अम्लीय", "क्षारीय", "उदासीन", "कोई नहीं"], answer: "अम्लीय" },
  { question: "ऐल्कोहॉल का क्वथनांक कैसा होता है?", options: ["उच्च", "निम्न", "मध्यम", "कोई नहीं"], answer: "उच्च" },
  { question: "ईथर का क्वथनांक कैसा होता है?", options: ["निम्न", "उच्च", "मध्यम", "कोई नहीं"], answer: "निम्न" },
  { question: "फिनॉल का उपयोग किसमें होता है?", options: ["एंटीसेप्टिक", "ईंधन", "प्लास्टिक", "कोई नहीं"], answer: "एंटीसेप्टिक" },

  // Aldehydes, Ketones and Carboxylic Acids
  { question: "ऐल्डिहाइड में कौन सा कार्यात्मक समूह होता है?", options: ["-CHO", "-CO-", "-COOH", "-OH"], answer: "-CHO" },
  { question: "कीटोन में कौन सा कार्यात्मक समूह होता है?", options: ["-CO-", "-CHO", "-COOH", "-OH"], answer: "-CO-" },
  { question: "कार्बोक्सिलिक अम्ल में कौन सा कार्यात्मक समूह होता है?", options: ["-COOH", "-CHO", "-CO-", "-OH"], answer: "-COOH" },
  { question: "ऐल्डिहाइड का अपचयन किससे होता है?", options: ["ऐल्कोहॉल", "कीटोन", "कार्बोक्सिलिक अम्ल", "ईथर"], answer: "ऐल्कोहॉल" },
  { question: "कीटोन का अपचयन किससे होता है?", options: ["ऐल्कोहॉल", "ऐल्डिहाइड", "कार्बोक्सिलिक अम्ल", "ईथर"], answer: "ऐल्कोहॉल" },
  { question: "ऐल्डिहाइड का ऑक्सीकरण किससे होता है?", options: ["कार्बोक्सिलिक अम्ल", "कीटोन", "ऐल्कोहॉल", "ईथर"], answer: "कार्बोक्सिलिक अम्ल" },
  { question: "टॉलेन अभिकर्मक किसके लिए उपयोग होता है?", options: ["ऐल्डिहाइड", "कीटोन", "कार्बोक्सिलिक अम्ल", "ईथर"], answer: "ऐल्डिहाइड" },
  { question: "फेहलिंग विलयन किसके लिए उपयोग होता है?", options: ["ऐल्डिहाइड", "कीटोन", "कार्बोक्सिलिक अम्ल", "ईथर"], answer: "ऐल्डिहाइड" },
  { question: "आयोडोफॉर्म परीक्षण किसके लिए उपयोग होता है?", options: ["मेथिल कीटोन", "ऐल्डिहाइड", "कार्बोक्सिलिक अम्ल", "ईथर"], answer: "मेथिल कीटोन" },
  { question: "कार्बोक्सिलिक अम्ल का उपयोग किसमें होता है?", options: ["सिरका", "शहद", "दूध", "कोई नहीं"], answer: "सिरका" },

  // Amines
  { question: "ऐमीन में कौन सा कार्यात्मक समूह होता है?", options: ["-NH₂", "-OH", "-CHO", "-COOH"], answer: "-NH₂" },
  { question: "ऐमीन में कौन सा गुण होता है?", options: ["क्षारीय", "अम्लीय", "उदासीन", "कोई नहीं"], answer: "क्षारीय" },
  { question: "प्राथमिक ऐमीन में कितने हाइड्रोजन होते हैं?", options: ["2", "1", "3", "0"], answer: "2" },
  { question: "द्वितीयक ऐमीन में कितने हाइड्रोजन होते हैं?", options: ["1", "2", "3", "0"], answer: "1" },
  { question: "तृतीयक ऐमीन में कितने हाइड्रोजन होते हैं?", options: ["0", "1", "2", "3"], answer: "0" },
  { question: "ऐमीन का उपयोग किसमें होता है?", options: ["दवा", "ईंधन", "प्लास्टिक", "कोई नहीं"], answer: "दवा" },
  { question: "ऐमीन का नाइट्रस अम्ल से अभिक्रिया किससे होती है?", options: ["डाइएजोनियम लवण", "ऐमाइड", "नाइट्राइल", "कोई नहीं"], answer: "डाइएजोनियम लवण" },
  { question: "ऐमीन का एसिटिल क्लोराइड से अभिक्रिया किससे होती है?", options: ["ऐमाइड", "नाइट्राइल", "डाइएजोनियम", "कोई नहीं"], answer: "ऐमाइड" },
  { question: "ऐमीन का कार्बिलऐमीन परीक्षण किसके लिए होता है?", options: ["प्राथमिक ऐमीन", "द्वितीयक ऐमीन", "तृतीयक ऐमीन", "कोई नहीं"], answer: "प्राथमिक ऐमीन" },
  { question: "ऐमीन का हॉफमैन ब्रोमाइड परीक्षण किसके लिए होता है?", options: ["ऐमीन", "ऐल्कोहॉल", "ऐल्डिहाइड", "कोई नहीं"], answer: "ऐमीन" },

  // Biomolecules
  { question: "कार्बोहाइड्रेट का सामान्य सूत्र क्या है?", options: ["Cn(H2O)n", "CnH2n", "CnH2nO2", "CnH2n+2"], answer: "Cn(H2O)n" },
  { question: "ग्लूकोज किस प्रकार का कार्बोहाइड्रेट है?", options: ["मोनोसैकराइड", "डाइसैकराइड", "पॉलीसैकराइड", "कोई नहीं"], answer: "मोनोसैकराइड" },
  { question: "सुक्रोज किस प्रकार का कार्बोहाइड्रेट है?", options: ["डाइसैकराइड", "मोनोसैकराइड", "पॉलीसैकराइड", "कोई नहीं"], answer: "डाइसैकराइड" },
  { question: "स्टार्च किस प्रकार का कार्बोहाइड्रेट है?", options: ["पॉलीसैकराइड", "मोनोसैकराइड", "डाइसैकराइड", "कोई नहीं"], answer: "पॉलीसैकराइड" },
  { question: "प्रोटीन के निर्माण खंड क्या हैं?", options: ["अमीनो अम्ल", "कार्बोहाइड्रेट", "वसा", "विटामिन"], answer: "अमीनो अम्ल" },
  { question: "प्रोटीन में कौन सा बंध होता है?", options: ["पेप्टाइड", "ग्लाइकोसिडिक", "एस्टर", "ईथर"], answer: "पेप्टाइड" },
  { question: "विटामिन C का रासायनिक नाम क्या है?", options: ["एस्कॉर्बिक अम्ल", "साइट्रिक अम्ल", "ऑक्सैलिक अम्ल", "एसिटिक अम्ल"], answer: "एस्कॉर्बिक अम्ल" },
  { question: "विटामिन A की कमी से कौन सा रोग होता है?", options: ["रतौंधी", "स्कर्वी", "रिकेट्स", "बेरी-बेरी"], answer: "रतौंधी" },
  { question: "विटामिन D की कमी से कौन सा रोग होता है?", options: ["रिकेट्स", "रतौंधी", "स्कर्वी", "बेरी-बेरी"], answer: "रिकेट्स" },
  { question: "DNA में कौन सा शर्करा होता है?", options: ["डीऑक्सीराइबोज", "राइबोज", "ग्लूकोज", "फ्रुक्टोज"], answer: "डीऑक्सीराइबोज" },

  // Polymers
  { question: "पॉलिमर क्या है?", options: ["उच्च अणुभार यौगिक", "निम्न अणुभार यौगिक", "मध्यम अणुभार यौगिक", "कोई नहीं"], answer: "उच्च अणुभार यौगिक" },
  { question: "पॉलिथीन किस प्रकार का पॉलिमर है?", options: ["होमोपॉलिमर", "कॉपॉलिमर", "कोई नहीं", "दोनों"], answer: "होमोपॉलिमर" },
  { question: "नायलॉन किस प्रकार का पॉलिमर है?", options: ["कॉपॉलिमर", "होमोपॉलिमर", "कोई नहीं", "दोनों"], answer: "कॉपॉलिमर" },
  { question: "बैकेलाइट किस प्रकार का पॉलिमर है?", options: ["थर्मोसेटिंग", "थर्मोप्लास्टिक", "कोई नहीं", "दोनों"], answer: "थर्मोसेटिंग" },
  { question: "PVC का पूरा नाम क्या है?", options: ["पॉलीविनाइल क्लोराइड", "पॉलीविनाइल एसीटेट", "पॉलीविनाइल अल्कोहॉल", "कोई नहीं"], answer: "पॉलीविनाइल क्लोराइड" },
  { question: "टेफ्लॉन का पूरा नाम क्या है?", options: ["पॉलीटेट्राफ्लुओरोएथिलीन", "पॉलीटेट्राफ्लुओरोएथीन", "पॉलीट्राइफ्लुओरोएथिलीन", "कोई नहीं"], answer: "पॉलीटेट्राफ्लुओरोएथिलीन" },
  { question: "प्राकृतिक रबर किससे प्राप्त होता है?", options: ["रबर वृक्ष", "पेट्रोलियम", "कोयला", "कोई नहीं"], answer: "रबर वृक्ष" },
  { question: "बुना-S रबर किस प्रकार का रबर है?", options: ["सिंथेटिक", "प्राकृतिक", "कोई नहीं", "दोनों"], answer: "सिंथेटिक" },
  { question: "नायलॉन 6,6 किससे बनता है?", options: ["हेक्सामेथिलीन डाइऐमीन", "एडिपिक अम्ल", "दोनों", "कोई नहीं"], answer: "दोनों" },
  { question: "पॉलिएस्टर किस प्रकार का पॉलिमर है?", options: ["कॉपॉलिमर", "होमोपॉलिमर", "कोई नहीं", "दोनों"], answer: "कॉपॉलिमर" },

  // Chemistry in Everyday Life
  { question: "एंटीबायोटिक क्या है?", options: ["जीवाणुनाशक", "विषाणुनाशक", "दर्द निवारक", "कोई नहीं"], answer: "जीवाणुनाशक" },
  { question: "एनाल्जेसिक क्या है?", options: ["दर्द निवारक", "जीवाणुनाशक", "विषाणुनाशक", "कोई नहीं"], answer: "दर्द निवारक" },
  { question: "एंटीसेप्टिक क्या है?", options: ["संक्रमण रोकने वाला", "दर्द निवारक", "जीवाणुनाशक", "कोई नहीं"], answer: "संक्रमण रोकने वाला" },
  { question: "डिसइंफेक्टेंट क्या है?", options: ["कीटाणुनाशक", "दर्द निवारक", "जीवाणुनाशक", "कोई नहीं"], answer: "कीटाणुनाशक" },
  { question: "एंटासिड क्या है?", options: ["अम्लता निवारक", "दर्द निवारक", "जीवाणुनाशक", "कोई नहीं"], answer: "अम्लता निवारक" },
  { question: "ट्रैंक्विलाइजर क्या है?", options: ["तनाव कम करने वाला", "दर्द निवारक", "जीवाणुनाशक", "कोई नहीं"], answer: "तनाव कम करने वाला" },
  { question: "साबुन क्या है?", options: ["वसा अम्ल का सोडियम लवण", "वसा अम्ल का पोटैशियम लवण", "दोनों", "कोई नहीं"], answer: "वसा अम्ल का सोडियम लवण" },
  { question: "डिटर्जेंट क्या है?", options: ["सल्फोनिक अम्ल का लवण", "वसा अम्ल का लवण", "कोई नहीं", "दोनों"], answer: "सल्फोनिक अम्ल का लवण" },
  { question: "कृत्रिम मिठास क्या है?", options: ["सुक्रालोज", "सुक्रोज", "ग्लूकोज", "फ्रुक्टोज"], answer: "सुक्रालोज" },
  { question: "खाद्य परिरक्षक क्या है?", options: ["सोडियम बेंजोएट", "सोडियम क्लोराइड", "सोडियम हाइड्रॉक्साइड", "कोई नहीं"], answer: "सोडियम बेंजोएट" },
];

// English Questions
const chemistryEnglish = [
  // Solid State
  { question: "How are particles arranged in solid state?", options: ["Disordered", "Regular", "Random", "None"], answer: "Regular" },
  { question: "Which type of solid has ionic bond?", options: ["Ionic solid", "Covalent solid", "Metallic solid", "Molecular solid"], answer: "Ionic solid" },
  { question: "How many types of Bravais lattices are there in a unit cell?", options: ["7", "14", "21", "28"], answer: "14" },
  { question: "How many atoms per unit cell are in fcc lattice?", options: ["1", "2", "4", "6"], answer: "4" },
  { question: "How many atoms per unit cell are in bcc lattice?", options: ["1", "2", "4", "6"], answer: "2" },
  { question: "What is formed by doping in intrinsic semiconductor?", options: ["n-type", "p-type", "Both", "None"], answer: "Both" },
  { question: "What happens in Frenkel defect?", options: ["Particle leaves its place", "Particle disappears", "Particle joins", "None"], answer: "Particle leaves its place" },
  { question: "What happens in Schottky defect?", options: ["Particle disappears", "Particle joins", "Particle leaves", "None"], answer: "Particle disappears" },
  { question: "How does conductivity of semiconductor change with increase in temperature?", options: ["Decreases", "Increases", "Remains same", "Becomes zero"], answer: "Increases" },
  { question: "Which is an example of ferromagnetic material?", options: ["Iron", "Aluminum", "Copper", "Gold"], answer: "Iron" },

  // Solutions
  { question: "What is the formula for molarity of solution?", options: ["n/V", "n×V", "V/n", "n+V"], answer: "n/V" },
  { question: "Raoult's law is related to?", options: ["Vapor pressure", "Osmotic pressure", "Boiling point", "Freezing point"], answer: "Vapor pressure" },
  { question: "What is ΔHmix for ideal solution?", options: ["Zero", "Positive", "Negative", "Infinite"], answer: "Zero" },
  { question: "Colligative properties depend on?", options: ["Number of solute particles", "Nature of solute", "Nature of solvent", "Temperature"], answer: "Number of solute particles" },
  { question: "What is the formula for depression in freezing point?", options: ["ΔTf = Kf × m", "ΔTf = Kf / m", "ΔTf = m / Kf", "ΔTf = Kf + m"], answer: "ΔTf = Kf × m" },
  { question: "What is the formula for osmotic pressure?", options: ["π = CRT", "π = C/RT", "π = RT/C", "π = C+R+T"], answer: "π = CRT" },
  { question: "What does van't Hoff factor indicate?", options: ["Extent of dissociation", "Extent of association", "Vapor pressure", "Osmotic pressure"], answer: "Extent of dissociation" },
  { question: "How many types of colligative properties are there?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "What is the SI unit of molality?", options: ["mol/kg", "mol/L", "mol/m³", "mol/g"], answer: "mol/kg" },
  { question: "Henry's law is related to?", options: ["Solubility of gas", "Vapor pressure", "Osmotic pressure", "Boiling point"], answer: "Solubility of gas" },

  // Electrochemistry
  { question: "In electrochemistry, oxidation occurs at which electrode?", options: ["Anode", "Cathode", "Both", "None"], answer: "Anode" },
  { question: "In electrochemistry, reduction occurs at which electrode?", options: ["Cathode", "Anode", "Both", "None"], answer: "Cathode" },
  { question: "Faraday's first law is related to?", options: ["Electrolysis", "Electrical conduction", "Electric field", "Electric current"], answer: "Electrolysis" },
  { question: "Faraday's second law is related to?", options: ["Electrolysis", "Electrical conduction", "Electric field", "Electric current"], answer: "Electrolysis" },
  { question: "What is the SI unit of molar conductivity?", options: ["S·m²/mol", "S/m", "S·m/mol", "S/mol"], answer: "S·m²/mol" },
  { question: "Nernst equation is related to?", options: ["EMF", "Current", "Resistance", "Power"], answer: "EMF" },
  { question: "What is the potential of standard hydrogen electrode?", options: ["0 V", "1 V", "-1 V", "0.5 V"], answer: "0 V" },
  { question: "What change occurs in galvanic cell?", options: ["Chemical to electrical", "Electrical to chemical", "Heat to electrical", "Light to electrical"], answer: "Chemical to electrical" },
  { question: "What change occurs in electrolysis?", options: ["Electrical to chemical", "Chemical to electrical", "Heat to electrical", "Light to electrical"], answer: "Electrical to chemical" },
  { question: "Kohlrausch law is related to?", options: ["Molar conductivity", "EMF", "Current", "Resistance"], answer: "Molar conductivity" },

  // Chemical Kinetics
  { question: "What is the SI unit of rate of chemical reaction?", options: ["mol/L/s", "mol/L", "L/mol/s", "mol/s"], answer: "mol/L/s" },
  { question: "SI unit of rate constant depends on?", options: ["Order of reaction", "Temperature", "Pressure", "Volume"], answer: "Order of reaction" },
  { question: "What is the formula for half-life of first order reaction?", options: ["t1/2 = 0.693/k", "t1/2 = k/0.693", "t1/2 = 0.693k", "t1/2 = 1/k"], answer: "t1/2 = 0.693/k" },
  { question: "What is the formula for half-life of zero order reaction?", options: ["t1/2 = A0/2k", "t1/2 = 2k/A0", "t1/2 = k/A0", "t1/2 = A0/k"], answer: "t1/2 = A0/2k" },
  { question: "Arrhenius equation is related to?", options: ["Temperature and rate", "Pressure and rate", "Volume and rate", "Concentration and rate"], answer: "Temperature and rate" },
  { question: "How does catalyst change rate of reaction?", options: ["Increases", "Decreases", "Keeps same", "Makes zero"], answer: "Increases" },
  { question: "What does molecularity of reaction indicate?", options: ["Number of molecules", "Order", "Rate", "Concentration"], answer: "Number of molecules" },
  { question: "Collision theory is related to?", options: ["Reaction rate", "Equilibrium", "Thermodynamics", "Electricity"], answer: "Reaction rate" },
  { question: "What is the SI unit of activation energy?", options: ["J/mol", "J", "mol/J", "J·mol"], answer: "J/mol" },
  { question: "What is the unit of rate constant for first order reaction?", options: ["s⁻¹", "mol/L/s", "L/mol/s", "mol/s"], answer: "s⁻¹" },

  // Surface Chemistry
  { question: "Adsorption occurs on which surface?", options: ["Solid-gas interface", "Liquid-liquid interface", "Solid-solid interface", "None"], answer: "Solid-gas interface" },
  { question: "Which force acts in physical adsorption?", options: ["Van der Waals", "Chemical", "Ionic", "Covalent"], answer: "Van der Waals" },
  { question: "Which force acts in chemical adsorption?", options: ["Chemical", "Van der Waals", "Ionic", "Metallic"], answer: "Chemical" },
  { question: "Freundlich adsorption isotherm is related to?", options: ["Adsorption", "Absorption", "Solubility", "Vapor pressure"], answer: "Adsorption" },
  { question: "Langmuir adsorption isotherm is related to?", options: ["Adsorption", "Absorption", "Solubility", "Vapor pressure"], answer: "Adsorption" },
  { question: "What is the size of particles in colloidal solution?", options: ["1-1000 nm", "1-100 nm", "100-1000 nm", "1-10 nm"], answer: "1-1000 nm" },
  { question: "Tyndall effect is observed in?", options: ["Colloidal solution", "True solution", "Suspension", "None"], answer: "Colloidal solution" },
  { question: "Brownian movement occurs in?", options: ["Colloidal particles", "True solution", "Suspension", "None"], answer: "Colloidal particles" },
  { question: "Emulsion is which type of colloid?", options: ["Liquid-liquid", "Solid-liquid", "Gas-liquid", "Solid-gas"], answer: "Liquid-liquid" },
  { question: "Aerosol is which type of colloid?", options: ["Gas-solid/liquid", "Liquid-liquid", "Solid-liquid", "Solid-gas"], answer: "Gas-solid/liquid" },

  // General Principles of Metallurgy
  { question: "What is the process of extracting metal from ore called?", options: ["Metallurgy", "Electrolysis", "Extraction", "Refining"], answer: "Metallurgy" },
  { question: "Why is concentration done?", options: ["To purify ore", "To extract metal", "To make alloy", "None"], answer: "To purify ore" },
  { question: "Froth flotation method is used for which ore?", options: ["Sulfide ore", "Oxide ore", "Carbonate ore", "Halide ore"], answer: "Sulfide ore" },
  { question: "What happens in roasting?", options: ["Ore is heated", "Ore is cooled", "Ore is washed", "None"], answer: "Ore is heated" },
  { question: "What happens in calcination?", options: ["Ore heated in absence of air", "Ore heated in air", "Ore is washed", "None"], answer: "Ore heated in absence of air" },
  { question: "Electrolytic refining is used for which metal?", options: ["Copper", "Iron", "Aluminum", "Zinc"], answer: "Copper" },
  { question: "Zone refining is used for which metal?", options: ["Germanium", "Copper", "Iron", "Aluminum"], answer: "Germanium" },
  { question: "Mond process is used for which metal?", options: ["Nickel", "Copper", "Iron", "Zinc"], answer: "Nickel" },
  { question: "Van Arkel method is used for which metal?", options: ["Titanium", "Copper", "Iron", "Aluminum"], answer: "Titanium" },
  { question: "Bayer process is used for which metal?", options: ["Aluminum", "Copper", "Iron", "Zinc"], answer: "Aluminum" },

  // p-Block Elements
  { question: "Which group is included in p-block elements?", options: ["13-18", "1-2", "3-12", "1-18"], answer: "13-18" },
  { question: "What is the atomic number of nitrogen?", options: ["7", "8", "9", "10"], answer: "7" },
  { question: "What is the atomic number of oxygen?", options: ["8", "7", "9", "10"], answer: "8" },
  { question: "What is the atomic number of fluorine?", options: ["9", "8", "10", "11"], answer: "9" },
  { question: "What is the atomic number of neon?", options: ["10", "9", "11", "12"], answer: "10" },
  { question: "What is the atomic number of sodium?", options: ["11", "10", "12", "13"], answer: "11" },
  { question: "What is the atomic number of magnesium?", options: ["12", "11", "13", "14"], answer: "12" },
  { question: "What is the atomic number of aluminum?", options: ["13", "12", "14", "15"], answer: "13" },
  { question: "What is the atomic number of silicon?", options: ["14", "13", "15", "16"], answer: "14" },
  { question: "What is the atomic number of phosphorus?", options: ["15", "14", "16", "17"], answer: "15" },

  // d-Block Elements
  { question: "What are d-block elements called?", options: ["Transition elements", "Inner transition elements", "Representative elements", "Noble gases"], answer: "Transition elements" },
  { question: "Which orbital is filled in transition elements?", options: ["d", "s", "p", "f"], answer: "d" },
  { question: "What is the characteristic of transition elements?", options: ["Variable valency", "Fixed valency", "No valency", "None"], answer: "Variable valency" },
  { question: "What is the atomic number of iron?", options: ["26", "25", "27", "28"], answer: "26" },
  { question: "What is the atomic number of copper?", options: ["29", "28", "30", "31"], answer: "29" },
  { question: "What is the atomic number of zinc?", options: ["30", "29", "31", "32"], answer: "30" },
  { question: "What is the atomic number of silver?", options: ["47", "46", "48", "49"], answer: "47" },
  { question: "What is the atomic number of gold?", options: ["79", "78", "80", "81"], answer: "79" },
  { question: "Which property is shown by transition elements?", options: ["Paramagnetic", "Diamagnetic", "None", "Both"], answer: "Paramagnetic" },
  { question: "How are compounds of transition elements?", options: ["Colored", "Colorless", "White", "None"], answer: "Colored" },

  // Coordination Compounds
  { question: "What is the central metal atom in complex compound called?", options: ["Central ion", "Ligand", "Complex", "None"], answer: "Central ion" },
  { question: "What is ligand in complex compound?", options: ["Electron pair donor", "Electron pair acceptor", "Ion", "None"], answer: "Electron pair donor" },
  { question: "What does coordination number indicate in complex compound?", options: ["Number of ligands", "Number of metals", "Number of ions", "None"], answer: "Number of ligands" },
  { question: "Crystal field theory is related to?", options: ["Complex compounds", "Ionic compounds", "Covalent compounds", "Metallic compounds"], answer: "Complex compounds" },
  { question: "What causes color in complex compounds?", options: ["d-d transition", "s-s transition", "p-p transition", "f-f transition"], answer: "d-d transition" },
  { question: "What causes magnetic property in complex compounds?", options: ["Unpaired electrons", "Paired electrons", "No electrons", "None"], answer: "Unpaired electrons" },
  { question: "How many types of isomerism are there in complex compounds?", options: ["Many", "One", "Two", "Three"], answer: "Many" },
  { question: "Geometrical isomerism occurs in which complex?", options: ["Square planar", "Tetrahedral", "Linear", "None"], answer: "Square planar" },
  { question: "Optical isomerism occurs in which complex?", options: ["Octahedral", "Tetrahedral", "Linear", "None"], answer: "Octahedral" },
  { question: "Ionization isomerism occurs in which complex?", options: ["Ionic complex", "Neutral complex", "None", "Both"], answer: "Ionic complex" },

  // Haloalkanes and Haloarenes
  { question: "Halogen is attached to which carbon in haloalkane?", options: ["sp³", "sp²", "sp", "None"], answer: "sp³" },
  { question: "Halogen is attached to which carbon in haloarene?", options: ["sp²", "sp³", "sp", "None"], answer: "sp²" },
  { question: "Which intermediate is involved in SN1 reaction?", options: ["Carbocation", "Carbanion", "Free radical", "None"], answer: "Carbocation" },
  { question: "Which intermediate is involved in SN2 reaction?", options: ["Transition state", "Carbocation", "Carbanion", "None"], answer: "Transition state" },
  { question: "What is the order of SN1 reaction?", options: ["First", "Second", "Zero", "Third"], answer: "First" },
  { question: "What is the order of SN2 reaction?", options: ["Second", "First", "Zero", "Third"], answer: "Second" },
  { question: "Nucleophilic substitution in haloalkane is related to?", options: ["SN1 and SN2", "E1", "E2", "None"], answer: "SN1 and SN2" },
  { question: "Dehydrohalogenation in haloalkane is related to?", options: ["E1 and E2", "SN1", "SN2", "None"], answer: "E1 and E2" },
  { question: "Grignard reagent is formed from?", options: ["Haloalkane", "Haloarene", "None", "Both"], answer: "Haloalkane" },
  { question: "How does nucleophilic substitution occur in haloarene?", options: ["Difficult", "Easy", "None", "Both"], answer: "Difficult" },

  // Alcohols, Phenols and Ethers
  { question: "Which functional group is present in alcohol?", options: ["-OH", "-CHO", "-COOH", "-NH₂"], answer: "-OH" },
  { question: "Which functional group is present in phenol?", options: ["-OH", "-CHO", "-COOH", "-NH₂"], answer: "-OH" },
  { question: "Which functional group is present in ether?", options: ["-O-", "-OH", "-CHO", "-COOH"], answer: "-O-" },
  { question: "Which bond is present in alcohol?", options: ["C-O", "C-C", "C-H", "O-H"], answer: "C-O" },
  { question: "Which bond is present in phenol?", options: ["C-O", "C-C", "C-H", "O-H"], answer: "C-O" },
  { question: "Which property is shown by alcohol?", options: ["Acidic", "Basic", "Neutral", "None"], answer: "Acidic" },
  { question: "Which property is shown by phenol?", options: ["Acidic", "Basic", "Neutral", "None"], answer: "Acidic" },
  { question: "How is boiling point of alcohol?", options: ["High", "Low", "Medium", "None"], answer: "High" },
  { question: "How is boiling point of ether?", options: ["Low", "High", "Medium", "None"], answer: "Low" },
  { question: "Phenol is used in?", options: ["Antiseptic", "Fuel", "Plastic", "None"], answer: "Antiseptic" },

  // Aldehydes, Ketones and Carboxylic Acids
  { question: "Which functional group is present in aldehyde?", options: ["-CHO", "-CO-", "-COOH", "-OH"], answer: "-CHO" },
  { question: "Which functional group is present in ketone?", options: ["-CO-", "-CHO", "-COOH", "-OH"], answer: "-CO-" },
  { question: "Which functional group is present in carboxylic acid?", options: ["-COOH", "-CHO", "-CO-", "-OH"], answer: "-COOH" },
  { question: "Aldehyde is reduced to?", options: ["Alcohol", "Ketone", "Carboxylic acid", "Ether"], answer: "Alcohol" },
  { question: "Ketone is reduced to?", options: ["Alcohol", "Aldehyde", "Carboxylic acid", "Ether"], answer: "Alcohol" },
  { question: "Aldehyde is oxidized to?", options: ["Carboxylic acid", "Ketone", "Alcohol", "Ether"], answer: "Carboxylic acid" },
  { question: "Tollen's reagent is used for?", options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ether"], answer: "Aldehyde" },
  { question: "Fehling's solution is used for?", options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ether"], answer: "Aldehyde" },
  { question: "Iodoform test is used for?", options: ["Methyl ketone", "Aldehyde", "Carboxylic acid", "Ether"], answer: "Methyl ketone" },
  { question: "Carboxylic acid is used in?", options: ["Vinegar", "Honey", "Milk", "None"], answer: "Vinegar" },

  // Amines
  { question: "Which functional group is present in amine?", options: ["-NH₂", "-OH", "-CHO", "-COOH"], answer: "-NH₂" },
  { question: "Which property is shown by amine?", options: ["Basic", "Acidic", "Neutral", "None"], answer: "Basic" },
  { question: "How many hydrogens are in primary amine?", options: ["2", "1", "3", "0"], answer: "2" },
  { question: "How many hydrogens are in secondary amine?", options: ["1", "2", "3", "0"], answer: "1" },
  { question: "How many hydrogens are in tertiary amine?", options: ["0", "1", "2", "3"], answer: "0" },
  { question: "Amine is used in?", options: ["Medicine", "Fuel", "Plastic", "None"], answer: "Medicine" },
  { question: "Reaction of amine with nitrous acid gives?", options: ["Diazonium salt", "Amide", "Nitrile", "None"], answer: "Diazonium salt" },
  { question: "Reaction of amine with acetyl chloride gives?", options: ["Amide", "Nitrile", "Diazonium", "None"], answer: "Amide" },
  { question: "Carbylamine test is used for?", options: ["Primary amine", "Secondary amine", "Tertiary amine", "None"], answer: "Primary amine" },
  { question: "Hoffmann bromamide test is used for?", options: ["Amine", "Alcohol", "Aldehyde", "None"], answer: "Amine" },

  // Biomolecules
  { question: "What is the general formula of carbohydrate?", options: ["Cn(H2O)n", "CnH2n", "CnH2nO2", "CnH2n+2"], answer: "Cn(H2O)n" },
  { question: "Glucose is which type of carbohydrate?", options: ["Monosaccharide", "Disaccharide", "Polysaccharide", "None"], answer: "Monosaccharide" },
  { question: "Sucrose is which type of carbohydrate?", options: ["Disaccharide", "Monosaccharide", "Polysaccharide", "None"], answer: "Disaccharide" },
  { question: "Starch is which type of carbohydrate?", options: ["Polysaccharide", "Monosaccharide", "Disaccharide", "None"], answer: "Polysaccharide" },
  { question: "What are building blocks of proteins?", options: ["Amino acids", "Carbohydrates", "Fats", "Vitamins"], answer: "Amino acids" },
  { question: "Which bond is present in proteins?", options: ["Peptide", "Glycosidic", "Ester", "Ether"], answer: "Peptide" },
  { question: "What is chemical name of Vitamin C?", options: ["Ascorbic acid", "Citric acid", "Oxalic acid", "Acetic acid"], answer: "Ascorbic acid" },
  { question: "Deficiency of Vitamin A causes?", options: ["Night blindness", "Scurvy", "Rickets", "Beriberi"], answer: "Night blindness" },
  { question: "Deficiency of Vitamin D causes?", options: ["Rickets", "Night blindness", "Scurvy", "Beriberi"], answer: "Rickets" },
  { question: "Which sugar is present in DNA?", options: ["Deoxyribose", "Ribose", "Glucose", "Fructose"], answer: "Deoxyribose" },

  // Polymers
  { question: "What is polymer?", options: ["High molecular weight compound", "Low molecular weight compound", "Medium molecular weight compound", "None"], answer: "High molecular weight compound" },
  { question: "Polyethylene is which type of polymer?", options: ["Homopolymer", "Copolymer", "None", "Both"], answer: "Homopolymer" },
  { question: "Nylon is which type of polymer?", options: ["Copolymer", "Homopolymer", "None", "Both"], answer: "Copolymer" },
  { question: "Bakelite is which type of polymer?", options: ["Thermosetting", "Thermoplastic", "None", "Both"], answer: "Thermosetting" },
  { question: "What is full name of PVC?", options: ["Polyvinyl chloride", "Polyvinyl acetate", "Polyvinyl alcohol", "None"], answer: "Polyvinyl chloride" },
  { question: "What is full name of Teflon?", options: ["Polytetrafluoroethylene", "Polytetrafluoroethene", "Polytrifluoroethylene", "None"], answer: "Polytetrafluoroethylene" },
  { question: "Natural rubber is obtained from?", options: ["Rubber tree", "Petroleum", "Coal", "None"], answer: "Rubber tree" },
  { question: "Buna-S rubber is which type of rubber?", options: ["Synthetic", "Natural", "None", "Both"], answer: "Synthetic" },
  { question: "Nylon 6,6 is made from?", options: ["Hexamethylenediamine", "Adipic acid", "Both", "None"], answer: "Both" },
  { question: "Polyester is which type of polymer?", options: ["Copolymer", "Homopolymer", "None", "Both"], answer: "Copolymer" },

  // Chemistry in Everyday Life
  { question: "What is antibiotic?", options: ["Antibacterial", "Antiviral", "Painkiller", "None"], answer: "Antibacterial" },
  { question: "What is analgesic?", options: ["Painkiller", "Antibacterial", "Antiviral", "None"], answer: "Painkiller" },
  { question: "What is antiseptic?", options: ["Infection preventer", "Painkiller", "Antibacterial", "None"], answer: "Infection preventer" },
  { question: "What is disinfectant?", options: ["Germicide", "Painkiller", "Antibacterial", "None"], answer: "Germicide" },
  { question: "What is antacid?", options: ["Acidity reducer", "Painkiller", "Antibacterial", "None"], answer: "Acidity reducer" },
  { question: "What is tranquilizer?", options: ["Stress reducer", "Painkiller", "Antibacterial", "None"], answer: "Stress reducer" },
  { question: "What is soap?", options: ["Sodium salt of fatty acid", "Potassium salt of fatty acid", "Both", "None"], answer: "Sodium salt of fatty acid" },
  { question: "What is detergent?", options: ["Salt of sulfonic acid", "Salt of fatty acid", "None", "Both"], answer: "Salt of sulfonic acid" },
  { question: "What is artificial sweetener?", options: ["Sucralose", "Sucrose", "Glucose", "Fructose"], answer: "Sucralose" },
  { question: "What is food preservative?", options: ["Sodium benzoate", "Sodium chloride", "Sodium hydroxide", "None"], answer: "Sodium benzoate" },
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
export default function Chemistry12thQuiz() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(3600); // 60 minutes = 3600 seconds
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
    const questionBank = language === 'hi' ? chemistryHindi : chemistryEnglish;
    // Select only 100 questions (all of them)
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
              <title>${language === 'hi' ? 'रसायन विज्ञान 12वीं परिणाम' : 'Chemistry 12th Result'}</title>
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
      'title': { hi: '🧪 रसायन विज्ञान 12वीं', en: '🧪 Chemistry 12th' },
      'subtitle': { hi: 'कक्षा 12 रसायन विज्ञान प्रश्नोत्तरी', en: 'Class 12 Chemistry Science Quiz' },
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🧪</div>
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
            💡 {language === 'hi' ? 'कक्षा 12 रसायन विज्ञान के सभी अध्यायों की व्यापक कवरेज' : 'Comprehensive coverage of all Class 12 Chemistry chapters'}
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
          {/* Result Card - For Download */}
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
                {language === 'hi' ? 'कक्षा 12 रसायन विज्ञान क्विज़' : 'Class 12 Chemistry Quiz'}
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

          {/* Download Button */}
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
            📌 {language === 'hi' ? 'रसायन विज्ञान 12वीं' : 'Chemistry 12th'}
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