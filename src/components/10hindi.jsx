// BSEBClass10HindiMockTest.jsx
import React, { useState, useEffect } from "react";

// --- BSEB Class 10 Hindi Question Bank (100 questions) ---
const hindiQuestions = [
  // ============ VYAKARAN - व्याकरण (30 Questions) ============
  
  // Sandhi (संधि) - 5
  { 
    question: "'विद्यालय' में कौन सी संधि है?", 
    options: ["दीर्घ संधि", "गुण संधि", "यण संधि", "वृद्धि संधि"], 
    answer: "दीर्घ संधि" 
  },
  { 
    question: "'नरेन्द्र' में कौन सी संधि है?", 
    options: ["गुण संधि", "दीर्घ संधि", "यण संधि", "वृद्धि संधि"], 
    answer: "गुण संधि" 
  },
  { 
    question: "'सदाचार' में कौन सी संधि है?", 
    options: ["विसर्ग संधि", "गुण संधि", "दीर्घ संधि", "यण संधि"], 
    answer: "विसर्ग संधि" 
  },
  { 
    question: "'गंगोदक' का संधि विच्छेद क्या है?", 
    options: ["गंगा + उदक", "गंग + उदक", "गंगो + दक", "गंग + ओदक"], 
    answer: "गंगा + उदक" 
  },
  { 
    question: "'पर्यावरण' का संधि विच्छेद क्या है?", 
    options: ["परि + आवरण", "पर + आवरण", "पर्या + वरण", "पर + यावरण"], 
    answer: "परि + आवरण" 
  },

  // Samas (समास) - 5
  { 
    question: "'राजपुत्र' में कौन सा समास है?", 
    options: ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"], 
    answer: "तत्पुरुष" 
  },
  { 
    question: "'चक्रपाणि' (विष्णु) में कौन सा समास है?", 
    options: ["बहुव्रीहि", "तत्पुरुष", "कर्मधारय", "द्वन्द्व"], 
    answer: "बहुव्रीहि" 
  },
  { 
    question: "'गुरुशिष्य' में कौन सा समास है?", 
    options: ["द्वन्द्व", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"], 
    answer: "द्वन्द्व" 
  },
  { 
    question: "'नीलकंठ' में कौन सा समास है?", 
    options: ["बहुव्रीहि", "तत्पुरुष", "कर्मधारय", "द्विगु"], 
    answer: "बहुव्रीहि" 
  },
  { 
    question: "'त्रिलोक' में कौन सा समास है?", 
    options: ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"], 
    answer: "द्विगु" 
  },

  // Karak (कारक) - 5
  { 
    question: "'राम ने फल खाया' में 'ने' किस कारक का चिह्न है?", 
    options: ["कर्ता", "कर्म", "करण", "सम्प्रदान"], 
    answer: "कर्ता" 
  },
  { 
    question: "'राम को फल दो' में 'को' किस कारक का चिह्न है?", 
    options: ["सम्प्रदान", "कर्ता", "कर्म", "अपादान"], 
    answer: "सम्प्रदान" 
  },
  { 
    question: "'राम से पूछो' में 'से' किस कारक का चिह्न है?", 
    options: ["अपादान", "करण", "सम्प्रदान", "अधिकरण"], 
    answer: "अपादान" 
  },
  { 
    question: "'राम का घर' में 'का' किस कारक का चिह्न है?", 
    options: ["सम्बन्ध", "अधिकरण", "करण", "अपादान"], 
    answer: "सम्बन्ध" 
  },
  { 
    question: "'मेज पर किताब है' में 'पर' किस कारक का चिह्न है?", 
    options: ["अधिकरण", "सम्बन्ध", "करण", "अपादान"], 
    answer: "अधिकरण" 
  },

  // Sangya (संज्ञा) - 3
  { 
    question: "'पुस्तक' किस प्रकार की संज्ञा है?", 
    options: ["जातिवाचक", "व्यक्तिवाचक", "भाववाचक", "समूहवाचक"], 
    answer: "जातिवाचक" 
  },
  { 
    question: "'बचपन' किस प्रकार की संज्ञा है?", 
    options: ["भाववाचक", "जातिवाचक", "व्यक्तिवाचक", "समूहवाचक"], 
    answer: "भाववाचक" 
  },
  { 
    question: "'राम' किस प्रकार की संज्ञा है?", 
    options: ["व्यक्तिवाचक", "जातिवाचक", "भाववाचक", "समूहवाचक"], 
    answer: "व्यक्तिवाचक" 
  },

  // Sarvanam (सर्वनाम) - 3
  { 
    question: "'मैं' किस प्रकार का सर्वनाम है?", 
    options: ["उत्तम पुरुष", "मध्यम पुरुष", "अन्य पुरुष", "निजवाचक"], 
    answer: "उत्तम पुरुष" 
  },
  { 
    question: "'तुम' किस प्रकार का सर्वनाम है?", 
    options: ["मध्यम पुरुष", "उत्तम पुरुष", "अन्य पुरुष", "निजवाचक"], 
    answer: "मध्यम पुरुष" 
  },
  { 
    question: "'वह' किस प्रकार का सर्वनाम है?", 
    options: ["अन्य पुरुष", "उत्तम पुरुष", "मध्यम पुरुष", "निजवाचक"], 
    answer: "अन्य पुरुष" 
  },

  // Visheshan (विशेषण) - 3
  { 
    question: "'सुंदर' किस प्रकार का विशेषण है?", 
    options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक", "सार्वनामिक"], 
    answer: "गुणवाचक" 
  },
  { 
    question: "'दस' किस प्रकार का विशेषण है?", 
    options: ["संख्यावाचक", "गुणवाचक", "परिमाणवाचक", "सार्वनामिक"], 
    answer: "संख्यावाचक" 
  },
  { 
    question: "'एक किलो' में 'एक' किस प्रकार का विशेषण है?", 
    options: ["परिमाणवाचक", "संख्यावाचक", "गुणवाचक", "सार्वनामिक"], 
    answer: "परिमाणवाचक" 
  },

  // Kriya (क्रिया) - 3
  { 
    question: "'पढ़ना' किस प्रकार की क्रिया है?", 
    options: ["सकर्मक", "अकर्मक", "द्विकर्मक", "प्रेरणार्थक"], 
    answer: "सकर्मक" 
  },
  { 
    question: "'सोना' किस प्रकार की क्रिया है?", 
    options: ["अकर्मक", "सकर्मक", "द्विकर्मक", "प्रेरणार्थक"], 
    answer: "अकर्मक" 
  },
  { 
    question: "'पढ़ाना' किस प्रकार की क्रिया है?", 
    options: ["प्रेरणार्थक", "सकर्मक", "अकर्मक", "द्विकर्मक"], 
    answer: "प्रेरणार्थक" 
  },

  // Kaal (काल) - 3
  { 
    question: "'राम पढ़ता है' में कौन सा काल है?", 
    options: ["वर्तमान", "भूत", "भविष्य", "अपूर्ण"], 
    answer: "वर्तमान" 
  },
  { 
    question: "'राम पढ़ेगा' में कौन सा काल है?", 
    options: ["भविष्य", "वर्तमान", "भूत", "अपूर्ण"], 
    answer: "भविष्य" 
  },
  { 
    question: "'राम ने पढ़ा' में कौन सा काल है?", 
    options: ["भूत", "वर्तमान", "भविष्य", "अपूर्ण"], 
    answer: "भूत" 
  },

  // ============ LITERATURE - साहित्य (30 Questions) ============
  
  // Ramdhari Singh Dinkar (6)
  { 
    question: "रामधारी सिंह दिनकर किस युग के कवि हैं?", 
    options: ["छायावाद", "प्रगतिवाद", "प्रयोगवाद", "नव्यवाद"], 
    answer: "प्रगतिवाद" 
  },
  { 
    question: "रामधारी सिंह दिनकर की प्रसिद्ध रचना क्या है?", 
    options: ["कुरुक्षेत्र", "कामायनी", "मधुशाला", "हिमकिरीट"], 
    answer: "कुरुक्षेत्र" 
  },
  { 
    question: "रामधारी सिंह दिनकर को किस उपाधि से सम्मानित किया गया?", 
    options: ["राष्ट्रकवि", "राष्ट्रकवि", "हिंदी केसरी", "कविरत्न"], 
    answer: "राष्ट्रकवि" 
  },
  { 
    question: "'रश्मिरथी' किसकी रचना है?", 
    options: ["रामधारी सिंह दिनकर", "जयशंकर प्रसाद", "हरिवंश राय बच्चन", "मैथिलीशरण गुप्त"], 
    answer: "रामधारी सिंह दिनकर" 
  },
  { 
    question: "रामधारी सिंह दिनकर किस राज्य से थे?", 
    options: ["बिहार", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"], 
    answer: "बिहार" 
  },
  { 
    question: "'हुंकार' किसकी रचना है?", 
    options: ["रामधारी सिंह दिनकर", "नागार्जुन", "मैथिलीशरण गुप्त", "सुमित्रानंदन पंत"], 
    answer: "रामधारी सिंह दिनकर" 
  },

  // Jaishankar Prasad (6)
  { 
    question: "जयशंकर प्रसाद किस युग के कवि हैं?", 
    options: ["छायावाद", "प्रगतिवाद", "भक्तिकाल", "रीतिकाल"], 
    answer: "छायावाद" 
  },
  { 
    question: "जयशंकर प्रसाद की प्रसिद्ध रचना क्या है?", 
    options: ["कामायनी", "कुरुक्षेत्र", "मधुशाला", "हिमकिरीट"], 
    answer: "कामायनी" 
  },
  { 
    question: "'आँसू' किसकी रचना है?", 
    options: ["जयशंकर प्रसाद", "मैथिलीशरण गुप्त", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन"], 
    answer: "जयशंकर प्रसाद" 
  },
  { 
    question: "जयशंकर प्रसाद कहाँ के निवासी थे?", 
    options: ["वाराणसी", "इलाहाबाद", "पटना", "दिल्ली"], 
    answer: "वाराणसी" 
  },
  { 
    question: "'लहर' किसकी रचना है?", 
    options: ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "निराला", "महादेवी वर्मा"], 
    answer: "जयशंकर प्रसाद" 
  },
  { 
    question: "जयशंकर प्रसाद की कौन सी कृति नाटक है?", 
    options: ["चन्द्रगुप्त", "कामायनी", "आँसू", "लहर"], 
    answer: "चन्द्रगुप्त" 
  },

  // Mahadevi Verma (6)
  { 
    question: "महादेवी वर्मा किस युग की कवयित्री हैं?", 
    options: ["छायावाद", "प्रगतिवाद", "प्रयोगवाद", "नव्यवाद"], 
    answer: "छायावाद" 
  },
  { 
    question: "महादेवी वर्मा की प्रसिद्ध रचना क्या है?", 
    options: ["नीहार", "कुरुक्षेत्र", "कामायनी", "रश्मिरथी"], 
    answer: "नीहार" 
  },
  { 
    question: "महादेवी वर्मा को किस उपाधि से सम्मानित किया गया?", 
    options: ["आधुनिक मीरा", "हिंदी की सरस्वती", "भारत कोकिला", "राष्ट्रकवि"], 
    answer: "आधुनिक मीरा" 
  },
  { 
    question: "'यामा' किसकी रचना है?", 
    options: ["महादेवी वर्मा", "सुमित्रानंदन पंत", "निराला", "जयशंकर प्रसाद"], 
    answer: "महादेवी वर्मा" 
  },
  { 
    question: "महादेवी वर्मा कहाँ की निवासी थीं?", 
    options: ["उत्तर प्रदेश", "बिहार", "राजस्थान", "मध्य प्रदेश"], 
    answer: "उत्तर प्रदेश" 
  },
  { 
    question: "'अतीत के चलचित्र' किसकी रचना है?", 
    options: ["महादेवी वर्मा", "जयशंकर प्रसाद", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन"], 
    answer: "महादेवी वर्मा" 
  },

  // Harivansh Rai Bachchan (6)
  { 
    question: "हरिवंश राय बच्चन किस युग के कवि हैं?", 
    options: ["प्रयोगवाद", "छायावाद", "प्रगतिवाद", "भक्तिकाल"], 
    answer: "प्रयोगवाद" 
  },
  { 
    question: "हरिवंश राय बच्चन की प्रसिद्ध रचना क्या है?", 
    options: ["मधुशाला", "कामायनी", "कुरुक्षेत्र", "नीहार"], 
    answer: "मधुशाला" 
  },
  { 
    question: "'नशा' किसकी रचना है?", 
    options: ["हरिवंश राय बच्चन", "जयशंकर प्रसाद", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत"], 
    answer: "हरिवंश राय बच्चन" 
  },
  { 
    question: "हरिवंश राय बच्चन कहाँ के निवासी थे?", 
    options: ["इलाहाबाद", "वाराणसी", "पटना", "दिल्ली"], 
    answer: "इलाहाबाद" 
  },
  { 
    question: "'जनम-जनम के साथी' किसकी रचना है?", 
    options: ["हरिवंश राय बच्चन", "महादेवी वर्मा", "निराला", "नागार्जुन"], 
    answer: "हरिवंश राय बच्चन" 
  },
  { 
    question: "हरिवंश राय बच्चन की कौन सी रचना आत्मकथा है?", 
    options: ["क्या भूलूँ क्या याद करूँ", "मधुशाला", "नशा", "सुर के सात सुर"], 
    answer: "क्या भूलूँ क्या याद करूँ" 
  },

  // Other Authors (6)
  { 
    question: "गोदान के रचयिता कौन हैं?", 
    options: ["प्रेमचंद", "मुंशी प्रेमचंद", "धर्मवीर भारती", "राहुल सांकृत्यायन"], 
    answer: "प्रेमचंद" 
  },
  { 
    question: "'चांदनी' किसकी रचना है?", 
    options: ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "रामधारी सिंह दिनकर"], 
    answer: "जयशंकर प्रसाद" 
  },
  { 
    question: "'रसवंती' किसकी रचना है?", 
    options: ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "रामधारी सिंह दिनकर"], 
    answer: "प्रेमचंद" 
  },
  { 
    question: "'कफन' किसकी कहानी है?", 
    options: ["प्रेमचंद", "जयशंकर प्रसाद", "रामधारी सिंह दिनकर", "निराला"], 
    answer: "प्रेमचंद" 
  },
  { 
    question: "'निराला' का पूरा नाम क्या है?", 
    options: ["सूर्यकांत त्रिपाठी", "सूर्यकांत शुक्ल", "सूर्यकांत मिश्र", "सूर्यकांत पांडे"], 
    answer: "सूर्यकांत त्रिपाठी" 
  },
  { 
    question: "'राम की शक्ति पूजा' किसकी रचना है?", 
    options: ["निराला", "जयशंकर प्रसाद", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत"], 
    answer: "निराला" 
  },

  // ============ COMPREHENSION - गद्यांश/पद्यांश (15 Questions) ============
  { 
    question: "'मनुष्यता' का अर्थ क्या है?", 
    options: ["मानवीय गुण", "मनुष्य होना", "मनुष्यता का दिखावा", "इनमें से कोई नहीं"], 
    answer: "मानवीय गुण" 
  },
  { 
    question: "'स्वच्छता' का अर्थ क्या है?", 
    options: ["सफाई", "स्वच्छ होना", "सुंदरता", "इनमें से कोई नहीं"], 
    answer: "सफाई" 
  },
  { 
    question: "'समाज' का अर्थ क्या है?", 
    options: ["लोगों का समूह", "गाँव", "शहर", "देश"], 
    answer: "लोगों का समूह" 
  },
  { 
    question: "'संस्कृति' किसे कहते हैं?", 
    options: ["जीवन जीने का तरीका", "नाच-गाना", "खान-पान", "पहनावा"], 
    answer: "जीवन जीने का तरीका" 
  },
  { 
    question: "'साहित्य' किसे कहते हैं?", 
    options: ["लिखित कृतियाँ", "कहानी", "कविता", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "'पर्यावरण' में 'परि' का अर्थ क्या है?", 
    options: ["चारों ओर", "अंदर", "बाहर", "ऊपर"], 
    answer: "चारों ओर" 
  },
  { 
    question: "'सभ्यता' का अर्थ क्या है?", 
    options: ["समाजिक विकास", "शिक्षा", "धन", "शक्ति"], 
    answer: "समाजिक विकास" 
  },
  { 
    question: "'विवेक' का अर्थ क्या है?", 
    options: ["विचार करने की शक्ति", "ज्ञान", "बुद्धि", "स्मृति"], 
    answer: "विचार करने की शक्ति" 
  },
  { 
    question: "'समय' का महत्व क्यों है?", 
    options: ["समय सबसे कीमती है", "समय बहुत है", "समय का कोई मूल्य नहीं", "इनमें से कोई नहीं"], 
    answer: "समय सबसे कीमती है" 
  },
  { 
    question: "'कर्म' किसे कहते हैं?", 
    options: ["कार्य", "विचार", "सपना", "इनमें से कोई नहीं"], 
    answer: "कार्य" 
  },
  { 
    question: "'सत्य' का विपरीत क्या है?", 
    options: ["असत्य", "झूठ", "दोनों", "इनमें से कोई नहीं"], 
    answer: "दोनों" 
  },
  { 
    question: "'अहिंसा' का अर्थ क्या है?", 
    options: ["हिंसा न करना", "शांति", "प्रेम", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "'जीवन' का अर्थ क्या है?", 
    options: ["जन्म से मृत्यु तक", "संघर्ष", "सुख-दुख", "सभी"], 
    answer: "सभी" 
  },
  { 
    question: "'स्वतंत्रता' का अर्थ क्या है?", 
    options: ["आज़ादी", "बंधन", "सीमा", "इनमें से कोई नहीं"], 
    answer: "आज़ादी" 
  },
  { 
    question: "'शिक्षा' क्या है?", 
    options: ["ज्ञान प्राप्ति", "स्कूल जाना", "पढ़ना-लिखना", "सभी"], 
    answer: "सभी" 
  },

  // ============ WRITING SKILLS - लेखन कौशल (10 Questions) ============
  { 
    question: "पत्र में 'प्रिय' शब्द किसके लिए प्रयोग किया जाता है?", 
    options: ["मित्र", "पिताजी", "गुरुजी", "प्रधानाचार्य"], 
    answer: "मित्र" 
  },
  { 
    question: "औपचारिक पत्र की शुरुआत किससे होती है?", 
    options: ["सेवा में", "प्रिय", "प्यारे", "मान्यवर"], 
    answer: "सेवा में" 
  },
  { 
    question: "अनौपचारिक पत्र की शुरुआत किससे होती है?", 
    options: ["प्रिय", "सेवा में", "मान्यवर", "आदरणीय"], 
    answer: "प्रिय" 
  },
  { 
    question: "निबंध के कितने भाग होते हैं?", 
    options: ["3", "2", "4", "5"], 
    answer: "3" 
  },
  { 
    question: "निबंध के पहले भाग को क्या कहते हैं?", 
    options: ["भूमिका", "विषय वस्तु", "निष्कर्ष", "अंत"], 
    answer: "भूमिका" 
  },
  { 
    question: "निबंध के अंतिम भाग को क्या कहते हैं?", 
    options: ["निष्कर्ष", "भूमिका", "विषय वस्तु", "मध्य"], 
    answer: "निष्कर्ष" 
  },
  { 
    question: "पत्र का अंत किस शब्द से किया जाता है?", 
    options: ["आपका", "तुम्हारा", "मेरा", "इनमें से कोई नहीं"], 
    answer: "आपका" 
  },
  { 
    question: "अनुच्छेद किसे कहते हैं?", 
    options: ["विचारों का समूह", "एक वाक्य", "कहानी", "कविता"], 
    answer: "विचारों का समूह" 
  },
  { 
    question: "शीर्षक क्यों महत्वपूर्ण है?", 
    options: ["लेख का सार बताने के लिए", "सजाने के लिए", "नाम रखने के लिए", "इनमें से कोई नहीं"], 
    answer: "लेख का सार बताने के लिए" 
  },
  { 
    question: "भाषण की शुरुआत किससे होती है?", 
    options: ["माननीय", "प्रिय", "से", "इनमें से कोई नहीं"], 
    answer: "माननीय" 
  },

  // ============ MUHAVARE & LOKOKTI - मुहावरे और लोकोक्ति (10 Questions) ============
  { 
    question: "'अंगूर खट्टे हैं' का अर्थ क्या है?", 
    options: ["अपनी कमी छुपाना", "अंगूर का खट्टा होना", "खाना न खाना", "इनमें से कोई नहीं"], 
    answer: "अपनी कमी छुपाना" 
  },
  { 
    question: "'आँखों का तारा' का अर्थ क्या है?", 
    options: ["बहुत प्यारा", "आँख का नक्षत्र", "प्रकाश", "इनमें से कोई नहीं"], 
    answer: "बहुत प्यारा" 
  },
  { 
    question: "'घर की मुर्गी दाल बराबर' का अर्थ क्या है?", 
    options: ["अपनों को महत्व न देना", "मुर्गी का दाल खाना", "खाना बनाना", "इनमें से कोई नहीं"], 
    answer: "अपनों को महत्व न देना" 
  },
  { 
    question: "'नाच न जाने आँगन टेढ़ा' का अर्थ क्या है?", 
    options: ["अपनी कमी दूसरों पर डालना", "नाच न आना", "आँगन टेढ़ा होना", "इनमें से कोई नहीं"], 
    answer: "अपनी कमी दूसरों पर डालना" 
  },
  { 
    question: "'मुँह में राम बगल में छुरी' का अर्थ क्या है?", 
    options: ["दिखावा", "ईमानदार", "सच्चा", "इनमें से कोई नहीं"], 
    answer: "दिखावा" 
  },
  { 
    question: "'सब्जबाग दिखाना' का अर्थ क्या है?", 
    options: ["झूठी आशा देना", "बाग दिखाना", "खूबसूरत दिखाना", "इनमें से कोई नहीं"], 
    answer: "झूठी आशा देना" 
  },
  { 
    question: "'काला अक्षर भैंस बराबर' का अर्थ क्या है?", 
    options: ["अनपढ़", "काला रंग", "भैंस", "इनमें से कोई नहीं"], 
    answer: "अनपढ़" 
  },
  { 
    question: "'कान में तेल डालना' का अर्थ क्या है?", 
    options: ["सलाह देना", "तेल डालना", "कान साफ करना", "इनमें से कोई नहीं"], 
    answer: "सलाह देना" 
  },
  { 
    question: "'पेट में चूहे दौड़ना' का अर्थ क्या है?", 
    options: ["बहुत भूख लगना", "पेट में दर्द", "भागना", "इनमें से कोई नहीं"], 
    answer: "बहुत भूख लगना" 
  },
  { 
    question: "'मक्खन लगाना' का अर्थ क्या है?", 
    options: ["चापलूसी करना", "मक्खन खाना", "चिकना करना", "इनमें से कोई नहीं"], 
    answer: "चापलूसी करना" 
  },

  // ============ SPELLING - वर्तनी (5 Questions) ============
  { 
    question: "इनमें से सही वर्तनी कौन सी है?", 
    options: ["विद्यालय", "विद्यालय", "विद्यालय", "विद्यालय"], 
    answer: "विद्यालय" 
  },
  { 
    question: "इनमें से सही वर्तनी कौन सी है?", 
    options: ["प्रसन्न", "प्रशन्न", "प्रसन", "प्रशन"], 
    answer: "प्रसन्न" 
  },
  { 
    question: "इनमें से सही वर्तनी कौन सी है?", 
    options: ["आशीर्वाद", "आशीर्वाद", "आशिर्वाद", "आशीर्वाद"], 
    answer: "आशीर्वाद" 
  },
  { 
    question: "इनमें से सही वर्तनी कौन सी है?", 
    options: ["स्वतंत्र", "स्वतन्त्र", "स्वतंत्र", "स्वतंत्र"], 
    answer: "स्वतंत्र" 
  },
  { 
    question: "इनमें से सही वर्तनी कौन सी है?", 
    options: ["उत्सव", "उत्सव", "उत्सव", "उत्सव"], 
    answer: "उत्सव" 
  },
];

// --- Helper: Shuffle and get random questions ---
const getRandomQuestions = (count) => {
  const shuffled = [...hindiQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// --- Build the complete question paper (100 questions) ---
const buildQuestionPaper = () => {
  return getRandomQuestions(100);
};

// --- Component ---
export default function BSEBClass10HindiMockTest() {
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
        background: "linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)",
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>📖</div>
          <h1 style={{ 
            color: "#4a148c", 
            marginBottom: "3px", 
            fontSize: "22px",
            fontWeight: "700"
          }}>
            हिंदी मॉक टेस्ट
          </h1>
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "15px" }}>
            बिहार विद्यालय परीक्षा समिति - कक्षा 10
          </p>
          <div style={{
            height: "3px",
            background: "linear-gradient(90deg, #4a148c, #8e24aa)",
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
              backgroundColor: "#f3e5f5", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>📝 Questions</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#4a148c" }}>100</div>
            </div>
            <div style={{ 
              backgroundColor: "#f3e5f5", 
              padding: "12px", 
              borderRadius: "10px"
            }}>
              <div style={{ fontSize: "11px", color: "#666" }}>⏱️Time</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#4a148c" }}>60 min</div>
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
              background: "linear-gradient(135deg, #4a148c 0%, #8e24aa 100%)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(142, 36, 170, 0.4)"
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
            <p style={{ color: "#888", fontSize: "12px" }}>हिंदी मॉक टेस्ट - कक्षा 10</p>
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
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#4a148c" }}>
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
                background: "linear-gradient(135deg, #4a148c 0%, #8e24aa 100%)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(142, 36, 170, 0.4)"
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
            color: timer < 60 ? "#fc8181" : "#4a148c",
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
            backgroundColor: "#f3e5f5",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            color: "#4a148c",
            marginBottom: "12px"
          }}>
            📌 प्रश्न {current + 1}
          </div>
          <h3 style={{
            fontSize: "16px",
            color: "#4a148c",
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
                  backgroundColor: answers[current] === op ? "#f3e5f5" : "#f7fafc",
                  border: answers[current] === op ? "2px solid #4a148c" : "2px solid transparent",
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
                backgroundColor: current === 0 ? "#e2e8f0" : "#4a148c",
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
                backgroundColor: current === questions.length - 1 ? "#e2e8f0" : "#4a148c",
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
                                   current === idx ? "#4a148c" : "#e2e8f0",
                  color: answers[idx] ? "white" :
                         current === idx ? "white" : "#4a5568",
                  border: current === idx ? "2px solid #4a148c" : "none",
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