// BSEBClass10SocialScienceMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 Social Science Question Bank (100 questions) ---
const socialScienceQuestions = [
  // ============ HISTORY - इतिहास (30 Questions) ============
  
  // Nationalism in Europe (8)
  { 
    question: "फ्रांसीसी क्रांति किस वर्ष हुई?", 
    options: ["1789", "1799", "1776", "1804"], 
    answer: "1789" 
  },
  { 
    question: "नेपोलियन बोनापार्ट किस देश का शासक था?", 
    options: ["फ्रांस", "इंग्लैंड", "जर्मनी", "इटली"], 
    answer: "फ्रांस" 
  },
  { 
    question: "वियना कांग्रेस किस वर्ष हुई?", 
    options: ["1815", "1805", "1825", "1810"], 
    answer: "1815" 
  },
  { 
    question: "इटली का एकीकरण किसने किया?", 
    options: ["कैवूर", "मैकियावेली", "गैरीबाल्डी", "मैक्सिनी"], 
    answer: "कैवूर" 
  },
  { 
    question: "जर्मनी का एकीकरण किसने किया?", 
    options: ["बिस्मार्क", "विलियम I", "हिटलर", "मार्क्स"], 
    answer: "बिस्मार्क" 
  },
  { 
    question: "बाल्कन क्षेत्र किसके लिए विवादित था?", 
    options: ["ओटोमन साम्राज्य", "रूस", "ऑस्ट्रिया", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "राष्ट्रवाद की भावना किससे उत्पन्न हुई?", 
    options: ["साझी संस्कृति और इतिहास", "भाषा", "धर्म", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "मेट्टरनिच किसका शासक था?", 
    options: ["ऑस्ट्रिया", "प्रशा", "रूस", "इटली"], 
    answer: "ऑस्ट्रिया" 
  },

  // Nationalism in India (10)
  { 
    question: "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?", 
    options: ["1885", "1886", "1887", "1888"], 
    answer: "1885" 
  },
  { 
    question: "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?", 
    options: ["ए.ओ. ह्यूम", "दादाभाई नौरोजी", "बाल गंगाधर तिलक", "महात्मा गांधी"], 
    answer: "ए.ओ. ह्यूम" 
  },
  { 
    question: "स्वदेशी आंदोलन कब शुरू हुआ?", 
    options: ["1905", "1906", "1904", "1907"], 
    answer: "1905" 
  },
  { 
    question: "जलियांवाला बाग हत्याकांड कब हुआ?", 
    options: ["1919", "1918", "1920", "1921"], 
    answer: "1919" 
  },
  { 
    question: "असहयोग आंदोलन कब शुरू हुआ?", 
    options: ["1920", "1921", "1919", "1922"], 
    answer: "1920" 
  },
  { 
    question: "सविनय अवज्ञा आंदोलन कब शुरू हुआ?", 
    options: ["1930", "1931", "1929", "1932"], 
    answer: "1930" 
  },
  { 
    question: "दांडी मार्च किस वर्ष हुआ?", 
    options: ["1930", "1931", "1929", "1932"], 
    answer: "1930" 
  },
  { 
    question: "भारत छोड़ो आंदोलन कब शुरू हुआ?", 
    options: ["1942", "1943", "1941", "1944"], 
    answer: "1942" 
  },
  { 
    question: "भारत को स्वतंत्रता कब मिली?", 
    options: ["15 अगस्त 1947", "26 जनवरी 1950", "15 अगस्त 1948", "26 जनवरी 1947"], 
    answer: "15 अगस्त 1947" 
  },
  { 
    question: "भारत के विभाजन के समय वायसराय कौन था?", 
    options: ["लॉर्ड माउंटबेटन", "वेवेल", "लिनलिथगो", "हार्डिंग"], 
    answer: "लॉर्ड माउंटबेटन" 
  },

  // World History (7)
  { 
    question: "प्रथम विश्व युद्ध कब हुआ?", 
    options: ["1914-1918", "1914-1919", "1915-1918", "1914-1917"], 
    answer: "1914-1918" 
  },
  { 
    question: "द्वितीय विश्व युद्ध कब हुआ?", 
    options: ["1939-1945", "1938-1945", "1939-1944", "1940-1945"], 
    answer: "1939-1945" 
  },
  { 
    question: "रूसी क्रांति कब हुई?", 
    options: ["1917", "1918", "1916", "1919"], 
    answer: "1917" 
  },
  { 
    question: "हिटलर किस पार्टी का नेता था?", 
    options: ["नाजी पार्टी", "कम्युनिस्ट पार्टी", "सोशलिस्ट पार्टी", "फासिस्ट पार्टी"], 
    answer: "नाजी पार्टी" 
  },
  { 
    question: "म्यूनिख संधि कब हुई?", 
    options: ["1938", "1939", "1937", "1940"], 
    answer: "1938" 
  },
  { 
    question: "संयुक्त राष्ट्र संघ की स्थापना कब हुई?", 
    options: ["1945", "1946", "1944", "1947"], 
    answer: "1945" 
  },
  { 
    question: "शीत युद्ध की शुरुआत कब हुई?", 
    options: ["1947", "1948", "1946", "1949"], 
    answer: "1947" 
  },

  // Indian History (5)
  { 
    question: "अशोक किस वंश का शासक था?", 
    options: ["मौर्य", "गुप्त", "कुषाण", "हर्ष"], 
    answer: "मौर्य" 
  },
  { 
    question: "गुप्त वंश का सबसे महान शासक कौन था?", 
    options: ["समुद्रगुप्त", "चन्द्रगुप्त I", "कुमारगुप्त", "स्कन्दगुप्त"], 
    answer: "समुद्रगुप्त" 
  },
  { 
    question: "पानीपत की पहली लड़ाई कब हुई?", 
    options: ["1526", "1527", "1525", "1528"], 
    answer: "1526" 
  },
  { 
    question: "पानीपत की दूसरी लड़ाई कब हुई?", 
    options: ["1556", "1557", "1555", "1558"], 
    answer: "1556" 
  },
  { 
    question: "प्लासी की लड़ाई कब हुई?", 
    options: ["1757", "1758", "1756", "1759"], 
    answer: "1757" 
  },

  // ============ GEOGRAPHY - भूगोल (25 Questions) ============
  
  // Resources & Development (7)
  { 
    question: "संसाधन क्या है?", 
    options: ["मानव आवश्यकताओं को पूरा करने वाली वस्तु", "प्राकृतिक वस्तु", "मानव निर्मित वस्तु", "सभी"], 
    answer: "मानव आवश्यकताओं को पूरा करने वाली वस्तु" 
  },
  { 
    question: "नवीकरणीय संसाधन का उदाहरण क्या है?", 
    options: ["सौर ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"], 
    answer: "सौर ऊर्जा" 
  },
  { 
    question: "अनवीकरणीय संसाधन का उदाहरण क्या है?", 
    options: ["कोयला", "पवन ऊर्जा", "जल ऊर्जा", "सौर ऊर्जा"], 
    answer: "कोयला" 
  },
  { 
    question: "मृदा अपरदन किससे होता है?", 
    options: ["जल और वायु", "मानव", "पशु", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "काली मिट्टी किस फसल के लिए उपयुक्त है?", 
    options: ["कपास", "गेहूं", "चावल", "गन्ना"], 
    answer: "कपास" 
  },
  { 
    question: "सिंचाई का सबसे पुराना साधन क्या है?", 
    options: ["नहर", "कुआं", "तालाब", "नलकूप"], 
    answer: "नहर" 
  },
  { 
    question: "सतत विकास का अर्थ क्या है?", 
    options: ["भविष्य की पीढ़ियों की आवश्यकताओं को ध्यान में रखना", "अधिक उत्पादन", "अधिक लाभ", "इनमें से कोई नहीं"], 
    answer: "भविष्य की पीढ़ियों की आवश्यकताओं को ध्यान में रखना" 
  },

  // Agriculture (6)
  { 
    question: "भारत में सबसे अधिक उगाई जाने वाली फसल क्या है?", 
    options: ["चावल", "गेहूं", "मक्का", "ज्वार"], 
    answer: "चावल" 
  },
  { 
    question: "खरीफ फसल की बुवाई कब होती है?", 
    options: ["मानसून की शुरुआत में", "सर्दियों में", "गर्मियों में", "वसंत में"], 
    answer: "मानसून की शुरुआत में" 
  },
  { 
    question: "रबी फसल की बुवाई कब होती है?", 
    options: ["अक्टूबर-नवंबर", "जून-जुलाई", "मार्च-अप्रैल", "जनवरी-फरवरी"], 
    answer: "अक्टूबर-नवंबर" 
  },
  { 
    question: "हरित क्रांति किस क्षेत्र में हुई?", 
    options: ["कृषि", "उद्योग", "सेवा", "प्रौद्योगिकी"], 
    answer: "कृषि" 
  },
  { 
    question: "भारत में कृषि में कितने प्रतिशत लोग कार्यरत हैं?", 
    options: ["~50%", "~30%", "~60%", "~40%"], 
    answer: "~50%" 
  },
  { 
    question: "जैविक खेती क्या है?", 
    options: ["रासायनिक उर्वरकों के बिना खेती", "बीजों के बिना खेती", "पानी के बिना खेती", "इनमें से कोई नहीं"], 
    answer: "रासायनिक उर्वरकों के बिना खेती" 
  },

  // Water Resources (5)
  { 
    question: "भारत में वर्षा का मुख्य स्रोत क्या है?", 
    options: ["मानसून", "चक्रवात", "पछुआ हवाएं", "इनमें से कोई नहीं"], 
    answer: "मानसून" 
  },
  { 
    question: "वर्षा जल संचयन क्या है?", 
    options: ["वर्षा के पानी को संग्रहित करना", "वर्षा के पानी को बहाना", "वर्षा के पानी को प्रदूषित करना", "इनमें से कोई नहीं"], 
    answer: "वर्षा के पानी को संग्रहित करना" 
  },
  { 
    question: "भारत की प्रमुख नदी कौन सी है?", 
    options: ["गंगा", "यमुना", "ब्रह्मपुत्र", "सिंधु"], 
    answer: "गंगा" 
  },
  { 
    question: "बांध निर्माण का मुख्य उद्देश्य क्या है?", 
    options: ["जल संचयन और सिंचाई", "पर्यटन", "मछली पालन", "इनमें से कोई नहीं"], 
    answer: "जल संचयन और सिंचाई" 
  },
  { 
    question: "जल प्रदूषण का मुख्य स्रोत क्या है?", 
    options: ["औद्योगिक अपशिष्ट", "सीवेज", "कृषि अपशिष्ट", "सभी"], 
    answer: "सभी" 
  },

  // Minerals & Energy (7)
  { 
    question: "भारत में सबसे अधिक कोयला कहाँ पाया जाता है?", 
    options: ["झारखंड", "बिहार", "पश्चिम बंगाल", "ओडिशा"], 
    answer: "झारखंड" 
  },
  { 
    question: "तेल के भंडार कहाँ पाए जाते हैं?", 
    options: ["गुजरात", "असम", "राजस्थान", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "नवीकरणीय ऊर्जा का स्रोत क्या है?", 
    options: ["सौर ऊर्जा", "पवन ऊर्जा", "जल ऊर्जा", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "भारत में सबसे बड़ा लौह अयस्क उत्पादक राज्य कौन है?", 
    options: ["ओडिशा", "झारखंड", "छत्तीसगढ़", "कर्नाटक"], 
    answer: "ओडिशा" 
  },
  { 
    question: "बॉक्साइट किस धातु का अयस्क है?", 
    options: ["एल्युमीनियम", "लोहा", "तांबा", "जस्ता"], 
    answer: "एल्युमीनियम" 
  },
  { 
    question: "हीरे की खदानें कहाँ हैं?", 
    options: ["मध्य प्रदेश", "बिहार", "राजस्थान", "गुजरात"], 
    answer: "मध्य प्रदेश" 
  },
  { 
    question: "पेट्रोलियम को क्या कहा जाता है?", 
    options: ["तरल सोना", "काला सोना", "सफेद सोना", "नीला सोना"], 
    answer: "तरल सोना" 
  },

  // ============ CIVICS - नागरिक शास्त्र (25 Questions) ============
  
  // Power Sharing (5)
  { 
    question: "भारत में किस प्रकार की राज्य व्यवस्था है?", 
    options: ["लोकतांत्रिक", "तानाशाही", "साम्राज्यवादी", "इनमें से कोई नहीं"], 
    answer: "लोकतांत्रिक" 
  },
  { 
    question: "भारत में शक्ति का विभाजन कैसे होता है?", 
    options: ["संघीय व्यवस्था", "एकात्मक व्यवस्था", "साम्राज्यवादी", "इनमें से कोई नहीं"], 
    answer: "संघीय व्यवस्था" 
  },
  { 
    question: "भारतीय संविधान कब लागू हुआ?", 
    options: ["26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949", "15 अगस्त 1950"], 
    answer: "26 जनवरी 1950" 
  },
  { 
    question: "भारत के संविधान के जनक कौन हैं?", 
    options: ["डॉ. भीमराव अम्बेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"], 
    answer: "डॉ. भीमराव अम्बेडकर" 
  },
  { 
    question: "भारतीय संविधान में कितनी अनुसूचियाँ हैं?", 
    options: ["12", "10", "8", "15"], 
    answer: "12" 
  },

  // Federalism (5)
  { 
    question: "भारत में कितने राज्य हैं?", 
    options: ["28", "29", "27", "30"], 
    answer: "28" 
  },
  { 
    question: "भारत में कितने केंद्र शासित प्रदेश हैं?", 
    options: ["8", "7", "9", "6"], 
    answer: "8" 
  },
  { 
    question: "राज्य सूची में कितने विषय हैं?", 
    options: ["61", "97", "47", "100"], 
    answer: "61" 
  },
  { 
    question: "संघ सूची में कितने विषय हैं?", 
    options: ["97", "61", "47", "100"], 
    answer: "97" 
  },
  { 
    question: "समवर्ती सूची में कितने विषय हैं?", 
    options: ["47", "61", "97", "50"], 
    answer: "47" 
  },

  // Democracy & Diversity (5)
  { 
    question: "लोकतंत्र का अर्थ क्या है?", 
    options: ["जनता का शासन", "राजा का शासन", "सैनिकों का शासन", "पुजारियों का शासन"], 
    answer: "जनता का शासन" 
  },
  { 
    question: "भारत में चुनाव कौन करवाता है?", 
    options: ["चुनाव आयोग", "सरकार", "राष्ट्रपति", "प्रधानमंत्री"], 
    answer: "चुनाव आयोग" 
  },
  { 
    question: "मतदान की आयु कितनी है?", 
    options: ["18 वर्ष", "21 वर्ष", "16 वर्ष", "25 वर्ष"], 
    answer: "18 वर्ष" 
  },
  { 
    question: "भारत में कितने राजनीतिक दल हैं?", 
    options: ["100 से अधिक", "50 से अधिक", "25 से अधिक", "10 से अधिक"], 
    answer: "100 से अधिक" 
  },
  { 
    question: "किसे लोकतंत्र की आत्मा कहा जाता है?", 
    options: ["स्वतंत्रता", "समानता", "बंधुत्व", "न्याय"], 
    answer: "समानता" 
  },

  // Gender, Religion & Caste (5)
  { 
    question: "भारत में महिलाओं के मताधिकार की आयु कितनी है?", 
    options: ["18 वर्ष", "21 वर्ष", "16 वर्ष", "25 वर्ष"], 
    answer: "18 वर्ष" 
  },
  { 
    question: "भारत में किस धर्म के लोग सबसे अधिक हैं?", 
    options: ["हिंदू", "मुस्लिम", "ईसाई", "सिख"], 
    answer: "हिंदू" 
  },
  { 
    question: "धर्मनिरपेक्षता का अर्थ क्या है?", 
    options: ["सभी धर्मों के प्रति समान दृष्टिकोण", "किसी धर्म को महत्व नहीं देना", "सभी धर्मों का विरोध", "इनमें से कोई नहीं"], 
    answer: "सभी धर्मों के प्रति समान दृष्टिकोण" 
  },
  { 
    question: "जाति व्यवस्था किस पर आधारित है?", 
    options: ["जन्म", "शिक्षा", "धन", "व्यवसाय"], 
    answer: "जन्म" 
  },
  { 
    question: "महिला आरक्षण विधेयक किससे संबंधित है?", 
    options: ["महिलाओं के लिए सीटें आरक्षित करना", "महिलाओं को शिक्षा देना", "महिलाओं को रोजगार देना", "इनमें से कोई नहीं"], 
    answer: "महिलाओं के लिए सीटें आरक्षित करना" 
  },

  // Political Parties (5)
  { 
    question: "भारत की सबसे पुरानी राजनीतिक पार्टी कौन है?", 
    options: ["कांग्रेस", "भाजपा", "कम्युनिस्ट", "समाजवादी"], 
    answer: "कांग्रेस" 
  },
  { 
    question: "भारत में दो-दलीय व्यवस्था कहाँ है?", 
    options: ["अमेरिका", "ब्रिटेन", "फ्रांस", "भारत"], 
    answer: "अमेरिका" 
  },
  { 
    question: "भारत में कितने राष्ट्रीय दल हैं?", 
    options: ["6", "5", "7", "4"], 
    answer: "6" 
  },
  { 
    question: "भारत में वर्तमान में कितने राजनीतिक दल हैं?", 
    options: ["200 से अधिक", "100 से अधिक", "50 से अधिक", "150 से अधिक"], 
    answer: "200 से अधिक" 
  },
  { 
    question: "चुनाव आयोग का मुख्यालय कहाँ है?", 
    options: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"], 
    answer: "नई दिल्ली" 
  },

  // ============ ECONOMICS - अर्थशास्त्र (20 Questions) ============
  
  // Development (5)
  { 
    question: "विकास का अर्थ क्या है?", 
    options: ["जीवन स्तर में सुधार", "अधिक आय", "बेहतर स्वास्थ्य", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "विकास का सबसे अच्छा संकेतक क्या है?", 
    options: ["मानव विकास सूचकांक", "जीडीपी", "जीएनपी", "प्रति व्यक्ति आय"], 
    answer: "मानव विकास सूचकांक" 
  },
  { 
    question: "भारत में विकास दर कितनी है?", 
    options: ["~6-7%", "~4-5%", "~8-9%", "~3-4%"], 
    answer: "~6-7%" 
  },
  { 
    question: "गरीबी रेखा क्या है?", 
    options: ["न्यूनतम आवश्यकताओं को पूरा करने के लिए आय", "अधिकतम आय", "औसत आय", "इनमें से कोई नहीं"], 
    answer: "न्यूनतम आवश्यकताओं को पूरा करने के लिए आय" 
  },
  { 
    question: "बेरोजगारी का मुख्य कारण क्या है?", 
    options: ["शिक्षा का अभाव", "कौशल का अभाव", "रोजगार के अवसरों का अभाव", "सभी"], 
    answer: "सभी" 
  },

  // Sectors of Economy (5)
  { 
    question: "अर्थव्यवस्था के तीन क्षेत्र कौन से हैं?", 
    options: ["प्राथमिक, द्वितीयक, तृतीयक", "उत्पादन, सेवा, वित्त", "कृषि, उद्योग, सेवा", "इनमें से कोई नहीं"], 
    answer: "प्राथमिक, द्वितीयक, तृतीयक" 
  },
  { 
    question: "प्राथमिक क्षेत्र क्या है?", 
    options: ["कृषि", "उद्योग", "सेवा", "प्रौद्योगिकी"], 
    answer: "कृषि" 
  },
  { 
    question: "द्वितीयक क्षेत्र क्या है?", 
    options: ["उद्योग", "कृषि", "सेवा", "प्रौद्योगिकी"], 
    answer: "उद्योग" 
  },
  { 
    question: "तृतीयक क्षेत्र क्या है?", 
    options: ["सेवा", "कृषि", "उद्योग", "प्रौद्योगिकी"], 
    answer: "सेवा" 
  },
  { 
    question: "भारत में किस क्षेत्र में सबसे अधिक लोग कार्यरत हैं?", 
    options: ["प्राथमिक", "द्वितीयक", "तृतीयक", "सभी में समान"], 
    answer: "प्राथमिक" 
  },

  // Money & Credit (5)
  { 
    question: "भारत की मुद्रा क्या है?", 
    options: ["भारतीय रुपया", "डॉलर", "यूरो", "पाउंड"], 
    answer: "भारतीय रुपया" 
  },
  { 
    question: "भारतीय रिजर्व बैंक क्या है?", 
    options: ["भारत का केंद्रीय बैंक", "भारत का वाणिज्यिक बैंक", "भारत का विदेशी बैंक", "इनमें से कोई नहीं"], 
    answer: "भारत का केंद्रीय बैंक" 
  },
  { 
    question: "बैंक का मुख्य कार्य क्या है?", 
    options: ["जमा स्वीकार करना", "ऋण देना", "मुद्रा जारी करना", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "ब्याज दर क्या है?", 
    options: ["ऋण पर लिया गया शुल्क", "जमा पर मिलने वाला लाभ", "बैंक का लाभ", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "भारत में मुद्रास्फीति दर कितनी है?", 
    options: ["~5-6%", "~2-3%", "~8-10%", "~1-2%"], 
    answer: "~5-6%" 
  },

  // Globalization (5)
  { 
    question: "वैश्वीकरण क्या है?", 
    options: ["देशों के बीच आर्थिक एकीकरण", "देशों के बीच युद्ध", "देशों के बीच अलगाव", "इनमें से कोई नहीं"], 
    answer: "देशों के बीच आर्थिक एकीकरण" 
  },
  { 
    question: "वैश्वीकरण का मुख्य कारण क्या है?", 
    options: ["प्रौद्योगिकी का विकास", "व्यापार का उदारीकरण", "संचार का विकास", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "WTO का पूरा नाम क्या है?", 
    options: ["World Trade Organization", "World Tourism Organization", "World Treaty Organization", "World Tax Organization"], 
    answer: "World Trade Organization" 
  },
  { 
    question: "वैश्वीकरण का लाभ क्या है?", 
    options: ["वैश्विक बाजार तक पहुंच", "अधिक नौकरियां", "सस्ती वस्तुएं", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "वैश्वीकरण का नुकसान क्या है?", 
    options: ["घरेलू उद्योगों को नुकसान", "रोजगार में कमी", "बढ़ती असमानता", "सभी"], 
    answer: "सभी" 
  },
];

// --- Helper: Get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...socialScienceQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10SocialScienceMockTest() {
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
        background: "linear-gradient(135deg, #e65100 0%, #f57c00 50%, #fb8c00 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>🌍</div>
          <h1 style={{ 
            color: "#e65100", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            सामाजिक विज्ञान मॉक टेस्ट
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            बिहार विद्यालय परीक्षा समिति - कक्षा 10
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #e65100, #fb8c00)",
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
              backgroundColor: "#fff3e0", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#e65100" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#fff3e0", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#e65100" }}>60 min</div>
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
              <li>प्रत्येक प्रश्न <strong>1 अंक</strong> का है</li>
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
              background: "linear-gradient(135deg, #e65100 0%, #fb8c00 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(251, 140, 0, 0.4)"
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
            <p style={{ color: "#888", fontSize: "12px" }}>सामाजिक विज्ञान मॉक टेस्ट - कक्षा १०</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#e65100" }}>
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
                background: "linear-gradient(135deg, #e65100 0%, #fb8c00 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(251, 140, 0, 0.4)"
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
            color: timer < 60 ? "#fc8181" : "#e65100",
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
            backgroundColor: "#fff3e0",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#e65100",
            marginBottom: "12px"
          }}>
            📌 प्रश्न {current + 1}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#e65100",
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
                  backgroundColor: answers[current] === op ? "#fff3e0" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #e65100" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#e65100",
                color: current === 0 ? "#a0aec0" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
            >
              ⬅ Privious
            </button>
            <button
              onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              disabled={current === questions.length - 1}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#e65100",
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
                                   current === idx ? "#e65100" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #e65100" : "none",
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