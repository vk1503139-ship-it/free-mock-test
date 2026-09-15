// Physics12thQuiz.jsx
import React, { useState, useEffect, useRef } from "react";

// --- 12th Physics Question Bank (100 questions) - Hindi & English ---

// Hindi Questions
const physicsHindi = [
  // Electrostatics
  { question: "दो बिंदु आवेशों के बीच बल किस नियम द्वारा दिया जाता है?", options: ["न्यूटन का नियम", "कूलॉम का नियम", "गॉस का नियम", "एम्पीयर का नियम"], answer: "कूलॉम का नियम" },
  { question: "विद्युत क्षेत्र की तीव्रता का SI मात्रक क्या है?", options: ["N/C", "C/N", "N·C", "C·N"], answer: "N/C" },
  { question: "विद्युत फ्लक्स का SI मात्रक क्या है?", options: ["N·m²/C", "N/C", "C/m²", "N·m/C"], answer: "N·m²/C" },
  { question: "गॉस के नियम के अनुसार, बंद सतह से गुजरने वाला विद्युत फ्लक्स किसके समानुपाती होता है?", options: ["पृष्ठीय क्षेत्रफल", "आवेश", "दूरी", "विद्युत क्षेत्र"], answer: "आवेश" },
  { question: "एक समान विद्युत क्षेत्र में विद्युत द्विध्रुव पर कुल बल कितना होता है?", options: ["शून्य", "qE", "2qE", "qE/2"], answer: "शून्य" },
  { question: "संधारित्र की धारिता का SI मात्रक क्या है?", options: ["वोल्ट", "फैराड", "कूलॉम", "ओम"], answer: "फैराड" },
  { question: "समांतर प्लेट संधारित्र की धारिता किसके व्युत्क्रमानुपाती होती है?", options: ["प्लेट क्षेत्रफल", "प्लेटों के बीच दूरी", "परावैद्युतांक", "आवेश"], answer: "प्लेटों के बीच दूरी" },
  { question: "दो संधारित्रों को श्रेणी में जोड़ने पर समतुल्य धारिता कैसे बदलती है?", options: ["बढ़ती है", "घटती है", "समान रहती है", "शून्य हो जाती है"], answer: "घटती है" },
  { question: "विद्युत द्विध्रुव आघूर्ण का SI मात्रक क्या है?", options: ["C·m", "C/m", "N·m", "C·m²"], answer: "C·m" },
  { question: "किसी चालक के अंदर विद्युत क्षेत्र कितना होता है?", options: ["अधिकतम", "शून्य", "अनंत", "निरंतर"], answer: "शून्य" },

  // Current Electricity
  { question: "ओम के नियम के अनुसार, V = ?", options: ["IR", "I/R", "R/I", "I²R"], answer: "IR" },
  { question: "प्रतिरोध का SI मात्रक क्या है?", options: ["वोल्ट", "एम्पीयर", "ओम", "वाट"], answer: "ओम" },
  { question: "प्रतिरोधकता का SI मात्रक क्या है?", options: ["ओम", "ओम-मीटर", "ओम/मीटर", "ओम-मीटर²"], answer: "ओम-मीटर" },
  { question: "तापमान बढ़ने पर चालक का प्रतिरोध कैसे बदलता है?", options: ["घटता है", "बढ़ता है", "समान रहता है", "शून्य हो जाता है"], answer: "बढ़ता है" },
  { question: "किरचॉफ का प्रथम नियम किसके संरक्षण पर आधारित है?", options: ["ऊर्जा", "आवेश", "संवेग", "द्रव्यमान"], answer: "आवेश" },
  { question: "किरचॉफ का द्वितीय नियम किसके संरक्षण पर आधारित है?", options: ["आवेश", "ऊर्जा", "संवेग", "द्रव्यमान"], answer: "ऊर्जा" },
  { question: "व्हीटस्टोन सेतु का उपयोग किसके मापन के लिए किया जाता है?", options: ["धारा", "वोल्टता", "प्रतिरोध", "शक्ति"], answer: "प्रतिरोध" },
  { question: "विभवमापी का उपयोग किसके मापन के लिए किया जाता है?", options: ["प्रतिरोध", "विद्युत वाहक बल", "धारा", "शक्ति"], answer: "विद्युत वाहक बल" },
  { question: "सेल का आंतरिक प्रतिरोध किस पर निर्भर करता है?", options: ["विद्युत वाहक बल", "इलेक्ट्रोड का आकार", "बाह्य प्रतिरोध", "धारा"], answer: "इलेक्ट्रोड का आकार" },
  { question: "धारा का SI मात्रक क्या है?", options: ["वोल्ट", "एम्पीयर", "ओम", "वाट"], answer: "एम्पीयर" },

  // Magnetic Effects of Current
  { question: "चुंबकीय क्षेत्र का SI मात्रक क्या है?", options: ["टेस्ला", "वेबर", "हेनरी", "ओम"], answer: "टेस्ला" },
  { question: "बायो-सेवर्ट नियम किससे संबंधित है?", options: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "गुरुत्वाकर्षण", "प्रकाश"], answer: "चुंबकीय क्षेत्र" },
  { question: "एम्पीयर का परिपथीय नियम किससे संबंधित है?", options: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "धारा", "वोल्टता"], answer: "चुंबकीय क्षेत्र" },
  { question: "धारा ले जाने वाले चालक पर चुंबकीय क्षेत्र में लगने वाला बल किस नियम से दिया जाता है?", options: ["कूलॉम का नियम", "लॉरेंज बल", "गॉस का नियम", "ओम का नियम"], answer: "लॉरेंज बल" },
  { question: "फ्लेमिंग के बाएं हाथ का नियम किसके लिए प्रयोग किया जाता है?", options: ["प्रेरित धारा", "बल", "चुंबकीय क्षेत्र", "विद्युत क्षेत्र"], answer: "बल" },
  { question: "फ्लेमिंग के दाएं हाथ का नियम किसके लिए प्रयोग किया जाता है?", options: ["बल", "प्रेरित धारा", "चुंबकीय क्षेत्र", "विद्युत क्षेत्र"], answer: "प्रेरित धारा" },
  { question: "चुंबकीय द्विध्रुव आघूर्ण का SI मात्रक क्या है?", options: ["A·m²", "A/m", "T·m", "Wb"], answer: "A·m²" },
  { question: "लंबे सीधे चालक के कारण चुंबकीय क्षेत्र किसके व्युत्क्रमानुपाती होता है?", options: ["धारा", "दूरी", "दूरी²", "धारा²"], answer: "दूरी" },
  { question: "वृत्ताकार लूप के केंद्र पर चुंबकीय क्षेत्र किसके समानुपाती होता है?", options: ["त्रिज्या", "धारा", "1/त्रिज्या", "1/धारा"], answer: "धारा" },
  { question: "साइक्लोट्रॉन का उपयोग किसके त्वरण के लिए किया जाता है?", options: ["इलेक्ट्रॉन", "आवेशित कण", "न्यूट्रॉन", "फोटॉन"], answer: "आवेशित कण" },

  // Electromagnetic Induction
  { question: "विद्युत चुम्बकीय प्रेरण की खोज किसने की?", options: ["फैराडे", "ओम", "एम्पीयर", "वोल्टा"], answer: "फैराडे" },
  { question: "लेंज का नियम किसके संरक्षण पर आधारित है?", options: ["आवेश", "ऊर्जा", "संवेग", "द्रव्यमान"], answer: "ऊर्जा" },
  { question: "प्रेरित विद्युत वाहक बल किसके समानुपाती होता है?", options: ["फ्लक्स", "फ्लक्स में परिवर्तन की दर", "समय", "क्षेत्रफल"], answer: "फ्लक्स में परिवर्तन की दर" },
  { question: "स्व-प्रेरण का SI मात्रक क्या है?", options: ["टेस्ला", "वेबर", "हेनरी", "फैराड"], answer: "हेनरी" },
  { question: "अन्योन्य प्रेरण का उदाहरण क्या है?", options: ["ट्रांसफार्मर", "जनरेटर", "मोटर", "बैटरी"], answer: "ट्रांसफार्मर" },
  { question: "एडी धाराओं का उपयोग किसमें किया जाता है?", options: ["इंडक्शन फर्नेस", "जनरेटर", "मोटर", "ट्रांसफार्मर"], answer: "इंडक्शन फर्नेस" },
  { question: "AC जनरेटर किस सिद्धांत पर कार्य करता है?", options: ["विद्युत चुम्बकीय प्रेरण", "स्थिर विद्युत", "ऊष्मा", "प्रकाश"], answer: "विद्युत चुम्बकीय प्रेरण" },
  { question: "DC मोटर किस सिद्धांत पर कार्य करता है?", options: ["विद्युत चुम्बकीय प्रेरण", "चुंबकीय बल", "स्थिर विद्युत", "ऊष्मा"], answer: "चुंबकीय बल" },
  { question: "भंवर धाराओं को कम करने के लिए क्या किया जाता है?", options: ["लेमिनेशन", "तापन", "ठंडा करना", "दबाव"], answer: "लेमिनेशन" },
  { question: "ट्रांसफार्मर किस पर कार्य करता है?", options: ["AC", "DC", "दोनों", "कोई नहीं"], answer: "AC" },

  // Alternating Current
  { question: "AC का RMS मान और शिखर मान का संबंध क्या है?", options: ["Irms = I0/√2", "Irms = I0√2", "Irms = I0", "Irms = 2I0"], answer: "Irms = I0/√2" },
  { question: "प्रतिघात का SI मात्रक क्या है?", options: ["ओम", "हेनरी", "फैराड", "वोल्ट"], answer: "ओम" },
  { question: "प्रेरकत्व प्रतिघात किसके समानुपाती होता है?", options: ["आवृत्ति", "1/आवृत्ति", "आवृत्ति²", "1/आवृत्ति²"], answer: "आवृत्ति" },
  { question: "धारिता प्रतिघात किसके व्युत्क्रमानुपाती होता है?", options: ["आवृत्ति", "1/आवृत्ति", "आवृत्ति²", "1/आवृत्ति²"], answer: "आवृत्ति" },
  { question: "अनुनाद की स्थिति में प्रतिबाधा कितनी होती है?", options: ["अधिकतम", "न्यूनतम", "शून्य", "अनंत"], answer: "न्यूनतम" },
  { question: "शक्ति गुणांक का मान किसके बीच होता है?", options: ["0 और 1", "-1 और 0", "1 और 2", "0 और -1"], answer: "0 और 1" },
  { question: "LCR परिपथ में अनुनाद आवृत्ति किस पर निर्भर करती है?", options: ["R", "L और C", "केवल L", "केवल C"], answer: "L और C" },
  { question: "ट्रांसफार्मर की दक्षता कितनी होती है?", options: ["50%", "70%", "90% से अधिक", "100%"], answer: "90% से अधिक" },
  { question: "वाटहीन धारा का मान कितना होता है?", options: ["शून्य", "अधिकतम", "औसत", "अनंत"], answer: "शून्य" },
  { question: "AC परिपथ में औसत शक्ति किसके समानुपाती होती है?", options: ["cosφ", "sinφ", "tanφ", "cotφ"], answer: "cosφ" },

  // Electromagnetic Waves
  { question: "विद्युत चुम्बकीय तरंगों की खोज किसने की?", options: ["मैक्सवेल", "हर्ट्ज", "फैराडे", "न्यूटन"], answer: "मैक्सवेल" },
  { question: "निर्वात में विद्युत चुम्बकीय तरंगों की चाल कितनी होती है?", options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁷ m/s"], answer: "3×10⁸ m/s" },
  { question: "विद्युत चुम्बकीय तरंगें किस प्रकार की तरंगें हैं?", options: ["अनुदैर्ध्य", "अनुप्रस्थ", "दोनों", "कोई नहीं"], answer: "अनुप्रस्थ" },
  { question: "दृश्य प्रकाश की तरंगदैर्ध्य कितनी होती है?", options: ["400-700 nm", "100-400 nm", "700-1000 nm", "1000-1500 nm"], answer: "400-700 nm" },
  { question: "X-किरणों की खोज किसने की?", options: ["रोएंटजन", "मैक्सवेल", "हर्ट्ज", "मैरी क्यूरी"], answer: "रोएंटजन" },
  { question: "अवरक्त तरंगों का उपयोग किसमें किया जाता है?", options: ["रिमोट कंट्रोल", "रेडियो", "TV", "मोबाइल"], answer: "रिमोट कंट्रोल" },
  { question: "गामा किरणों की आवृत्ति कैसी होती है?", options: ["न्यूनतम", "अधिकतम", "मध्यम", "शून्य"], answer: "अधिकतम" },
  { question: "रेडियो तरंगों की तरंगदैर्ध्य कैसी होती है?", options: ["बहुत कम", "बहुत अधिक", "मध्यम", "शून्य"], answer: "बहुत अधिक" },
  { question: "विद्युत चुम्बकीय तरंगों में E और B के बीच कितना कोण होता है?", options: ["0°", "45°", "90°", "180°"], answer: "90°" },
  { question: "माइक्रोवेव ओवन में किस तरंग का उपयोग होता है?", options: ["माइक्रोवेव", "रेडियो", "X-किरण", "गामा"], answer: "माइक्रोवेव" },

  // Optics - Reflection & Refraction
  { question: "प्रकाश के परावर्तन के नियम कितने हैं?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "दर्पण सूत्र क्या है?", options: ["1/v + 1/u = 1/f", "1/v - 1/u = 1/f", "v + u = f", "v - u = f"], answer: "1/v + 1/u = 1/f" },
  { question: "अवतल दर्पण की फोकस दूरी कैसी होती है?", options: ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"], answer: "ऋणात्मक" },
  { question: "उत्तल दर्पण का उपयोग किसमें किया जाता है?", options: ["वाहन दर्पण", "दाढ़ी दर्पण", "सूक्ष्मदर्शी", "दूरबीन"], answer: "वाहन दर्पण" },
  { question: "प्रकाश के अपवर्तन का कारण क्या है?", options: ["चाल में परिवर्तन", "आवृत्ति में परिवर्तन", "तरंगदैर्ध्य में परिवर्तन", "आयाम में परिवर्तन"], answer: "चाल में परिवर्तन" },
  { question: "स्नेल का नियम क्या है?", options: ["sin i / sin r = μ", "sin r / sin i = μ", "cos i / cos r = μ", "tan i / tan r = μ"], answer: "sin i / sin r = μ" },
  { question: "कुल आंतरिक परावर्तन की शर्त क्या है?", options: ["सघन से विरल माध्यम", "विरल से सघन माध्यम", "समान माध्यम", "कोई नहीं"], answer: "सघन से विरल माध्यम" },
  { question: "क्रांतिक कोण का सूत्र क्या है?", options: ["sin C = 1/μ", "sin C = μ", "cos C = 1/μ", "tan C = μ"], answer: "sin C = 1/μ" },
  { question: "ऑप्टिकल फाइबर किस सिद्धांत पर कार्य करता है?", options: ["कुल आंतरिक परावर्तन", "अपवर्तन", "विवर्तन", "ध्रुवण"], answer: "कुल आंतरिक परावर्तन" },
  { question: "लेंस सूत्र क्या है?", options: ["1/v - 1/u = 1/f", "1/v + 1/u = 1/f", "v - u = f", "v + u = f"], answer: "1/v - 1/u = 1/f" },

  // Wave Optics
  { question: "प्रकाश के व्यतिकरण की खोज किसने की?", options: ["यंग", "न्यूटन", "हाइगेंस", "फ्रेनल"], answer: "यंग" },
  { question: "यंग के द्वि-स्लिट प्रयोग में फ्रिंज चौड़ाई का सूत्र क्या है?", options: ["β = λD/d", "β = λd/D", "β = dD/λ", "β = λ/Dd"], answer: "β = λD/d" },
  { question: "विवर्तन किसके कारण होता है?", options: ["तरंग का मुड़ना", "परावर्तन", "अपवर्तन", "ध्रुवण"], answer: "तरंग का मुड़ना" },
  { question: "ध्रुवण किस तरंग में होता है?", options: ["अनुदैर्ध्य", "अनुप्रस्थ", "दोनों", "कोई नहीं"], answer: "अनुप्रस्थ" },
  { question: "ब्रूस्टर का नियम क्या है?", options: ["tan θp = μ", "sin θp = μ", "cos θp = μ", "cot θp = μ"], answer: "tan θp = μ" },
  { question: "हाइगेंस का सिद्धांत किसके लिए प्रयोग किया जाता है?", options: ["तरंग प्रकृति", "कण प्रकृति", "दोनों", "कोई नहीं"], answer: "तरंग प्रकृति" },
  { question: "व्यतिकरण में तीव्रता किसके समानुपाती होती है?", options: ["आयाम", "आयाम²", "आवृत्ति", "तरंगदैर्ध्य"], answer: "आयाम²" },
  { question: "विवर्तन ग्रैटिंग में मुख्य उच्चिष्ठ की शर्त क्या है?", options: ["d sin θ = nλ", "d cos θ = nλ", "d tan θ = nλ", "d sin θ = λ/n"], answer: "d sin θ = nλ" },
  { question: "प्रकाश की तरंगदैर्ध्य जल में कैसी होती है?", options: ["बढ़ती है", "घटती है", "समान रहती है", "शून्य हो जाती है"], answer: "घटती है" },
  { question: "मैक्सवेल के अनुसार प्रकाश क्या है?", options: ["कण", "विद्युत चुम्बकीय तरंग", "तरंग", "कोई नहीं"], answer: "विद्युत चुम्बकीय तरंग" },

  // Dual Nature of Radiation
  { question: "प्रकाश विद्युत प्रभाव की खोज किसने की?", options: ["हर्ट्ज", "आइंस्टीन", "प्लांक", "बोहर"], answer: "हर्ट्ज" },
  { question: "प्रकाश विद्युत प्रभाव की व्याख्या किसने की?", options: ["आइंस्टीन", "न्यूटन", "हाइगेंस", "मैक्सवेल"], answer: "आइंस्टीन" },
  { question: "फोटॉन की ऊर्जा का सूत्र क्या है?", options: ["E = hν", "E = h/ν", "E = ν/h", "E = hν²"], answer: "E = hν" },
  { question: "प्लांक स्थिरांक का मान क्या है?", options: ["6.626×10⁻³⁴ J·s", "6.626×10⁻³⁰ J·s", "6.626×10⁻²⁸ J·s", "6.626×10⁻²⁰ J·s"], answer: "6.626×10⁻³⁴ J·s" },
  { question: "द्रव्य तरंगों की परिकल्पना किसने दी?", options: ["डी ब्रोगली", "आइंस्टीन", "बोहर", "प्लांक"], answer: "डी ब्रोगली" },
  { question: "डी ब्रोगली तरंगदैर्ध्य का सूत्र क्या है?", options: ["λ = h/p", "λ = p/h", "λ = hp", "λ = h/p²"], answer: "λ = h/p" },
  { question: "प्रकाश विद्युत प्रभाव में धारा किस पर निर्भर करती है?", options: ["आवृत्ति", "तीव्रता", "तरंगदैर्ध्य", "चाल"], answer: "तीव्रता" },
  { question: "कार्य फलन का SI मात्रक क्या है?", options: ["जूल", "वाट", "न्यूटन", "एम्पीयर"], answer: "जूल" },
  { question: "निरोधी विभव किसके समानुपाती होता है?", options: ["आवृत्ति", "तीव्रता", "तरंगदैर्ध्य", "चाल"], answer: "आवृत्ति" },
  { question: "इलेक्ट्रॉन की खोज किसने की?", options: ["थॉमसन", "चैडविक", "रदरफोर्ड", "बोहर"], answer: "थॉमसन" },

  // Atoms & Nuclei
  { question: "परमाणु के नाभिक की खोज किसने की?", options: ["रदरफोर्ड", "थॉमसन", "बोहर", "चैडविक"], answer: "रदरफोर्ड" },
  { question: "बोहर का परमाणु मॉडल किसके लिए सफल है?", options: ["हाइड्रोजन", "हीलियम", "लिथियम", "सभी"], answer: "हाइड्रोजन" },
  { question: "न्यूट्रॉन की खोज किसने की?", options: ["चैडविक", "रदरफोर्ड", "थॉमसन", "बोहर"], answer: "चैडविक" },
  { question: "नाभिकीय बल किस प्रकार का बल है?", options: ["दीर्घ परासी", "अल्प परासी", "विद्युत", "गुरुत्वाकर्षण"], answer: "अल्प परासी" },
  { question: "द्रव्यमान क्षति का सूत्र क्या है?", options: ["E = Δmc²", "E = mc²", "E = Δm/c²", "E = Δm²c"], answer: "E = Δmc²" },
  { question: "रेडियोएक्टिवता की खोज किसने की?", options: ["बेकरल", "क्यूरी", "रदरफोर्ड", "आइंस्टीन"], answer: "बेकरल" },
  { question: "अल्फा कण क्या है?", options: ["हीलियम नाभिक", "इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन"], answer: "हीलियम नाभिक" },
  { question: "बीटा कण क्या है?", options: ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "हीलियम नाभिक"], answer: "इलेक्ट्रॉन" },
  { question: "गामा किरणें क्या हैं?", options: ["विद्युत चुम्बकीय तरंगें", "कण", "इलेक्ट्रॉन", "प्रोटॉन"], answer: "विद्युत चुम्बकीय तरंगें" },
  { question: "नाभिकीय विखंडन में क्या निकलता है?", options: ["ऊर्जा", "द्रव्यमान", "आवेश", "कोई नहीं"], answer: "ऊर्जा" },

  // Semiconductors
  { question: "नैज अर्धचालक में मुक्त इलेक्ट्रॉन और होल की संख्या कैसी होती है?", options: ["समान", "असमान", "इलेक्ट्रॉन अधिक", "होल अधिक"], answer: "समान" },
  { question: "n-प्रकार अर्धचालक में बहुसंख्यक वाहक कौन हैं?", options: ["इलेक्ट्रॉन", "होल", "प्रोटॉन", "न्यूट्रॉन"], answer: "इलेक्ट्रॉन" },
  { question: "p-प्रकार अर्धचालक में बहुसंख्यक वाहक कौन हैं?", options: ["होल", "इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन"], answer: "होल" },
  { question: "p-n जंक्शन डायोड में अवक्षय परत किससे बनी होती है?", options: ["आयन", "इलेक्ट्रॉन", "होल", "प्रोटॉन"], answer: "आयन" },
  { question: "डायोड का उपयोग किसमें किया जाता है?", options: ["दिष्टकारी", "प्रवर्धक", "दोलित्र", "मॉडुलक"], answer: "दिष्टकारी" },
  { question: "जेनर डायोड का उपयोग किसमें किया जाता है?", options: ["वोल्टता नियामक", "दिष्टकारी", "प्रवर्धक", "दोलित्र"], answer: "वोल्टता नियामक" },
  { question: "ट्रांजिस्टर में कितने टर्मिनल होते हैं?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "NPN ट्रांजिस्टर में आधार किस प्रकार का होता है?", options: ["p-प्रकार", "n-प्रकार", "नैज", "कोई नहीं"], answer: "p-प्रकार" },
  { question: "प्रवर्धक में ट्रांजिस्टर का उपयोग किसमें किया जाता है?", options: ["सिग्नल बढ़ाने", "सिग्नल घटाने", "दिष्टकरण", "मॉडुलन"], answer: "सिग्नल बढ़ाने" },
  { question: "लॉजिक गेट AND का आउटपुट कब 1 होता है?", options: ["दोनों इनपुट 1", "कोई भी 1", "दोनों 0", "कोई भी 0"], answer: "दोनों इनपुट 1" },

  // Communication Systems
  { question: "मॉडुलन क्यों किया जाता है?", options: ["संचरण दूरी बढ़ाने", "सिग्नल घटाने", "आवृत्ति बढ़ाने", "कोई नहीं"], answer: "संचरण दूरी बढ़ाने" },
  { question: "AM में मॉडुलन किसमें किया जाता है?", options: ["आयाम", "आवृत्ति", "कला", "तरंगदैर्ध्य"], answer: "आयाम" },
  { question: "FM में मॉडुलन किसमें किया जाता है?", options: ["आवृत्ति", "आयाम", "कला", "तरंगदैर्ध्य"], answer: "आवृत्ति" },
  { question: "संचार प्रणाली के कितने भाग होते हैं?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "एंटीना की ऊंचाई किसके समानुपाती होती है?", options: ["तरंगदैर्ध्य", "आवृत्ति", "आयाम", "कला"], answer: "तरंगदैर्ध्य" },
];

// English Questions
const physicsEnglish = [
  // Electrostatics
  { question: "Force between two point charges is given by which law?", options: ["Newton's law", "Coulomb's law", "Gauss's law", "Ampere's law"], answer: "Coulomb's law" },
  { question: "What is the SI unit of electric field intensity?", options: ["N/C", "C/N", "N·C", "C·N"], answer: "N/C" },
  { question: "What is the SI unit of electric flux?", options: ["N·m²/C", "N/C", "C/m²", "N·m/C"], answer: "N·m²/C" },
  { question: "According to Gauss's law, electric flux through a closed surface is proportional to?", options: ["Surface area", "Charge", "Distance", "Electric field"], answer: "Charge" },
  { question: "What is the net force on an electric dipole in a uniform electric field?", options: ["Zero", "qE", "2qE", "qE/2"], answer: "Zero" },
  { question: "What is the SI unit of capacitance?", options: ["Volt", "Farad", "Coulomb", "Ohm"], answer: "Farad" },
  { question: "Capacitance of parallel plate capacitor is inversely proportional to?", options: ["Plate area", "Distance between plates", "Dielectric constant", "Charge"], answer: "Distance between plates" },
  { question: "When two capacitors are connected in series, the equivalent capacitance?", options: ["Increases", "Decreases", "Remains same", "Becomes zero"], answer: "Decreases" },
  { question: "What is the SI unit of electric dipole moment?", options: ["C·m", "C/m", "N·m", "C·m²"], answer: "C·m" },
  { question: "What is the electric field inside a conductor?", options: ["Maximum", "Zero", "Infinite", "Constant"], answer: "Zero" },

  // Current Electricity
  { question: "According to Ohm's law, V = ?", options: ["IR", "I/R", "R/I", "I²R"], answer: "IR" },
  { question: "What is the SI unit of resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ohm" },
  { question: "What is the SI unit of resistivity?", options: ["Ohm", "Ohm-meter", "Ohm/meter", "Ohm-meter²"], answer: "Ohm-meter" },
  { question: "How does resistance of a conductor change with increase in temperature?", options: ["Decreases", "Increases", "Remains same", "Becomes zero"], answer: "Increases" },
  { question: "Kirchhoff's first law is based on conservation of?", options: ["Energy", "Charge", "Momentum", "Mass"], answer: "Charge" },
  { question: "Kirchhoff's second law is based on conservation of?", options: ["Charge", "Energy", "Momentum", "Mass"], answer: "Energy" },
  { question: "Wheatstone bridge is used to measure?", options: ["Current", "Voltage", "Resistance", "Power"], answer: "Resistance" },
  { question: "Potentiometer is used to measure?", options: ["Resistance", "EMF", "Current", "Power"], answer: "EMF" },
  { question: "Internal resistance of a cell depends on?", options: ["EMF", "Size of electrodes", "External resistance", "Current"], answer: "Size of electrodes" },
  { question: "What is the SI unit of current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere" },

  // Magnetic Effects of Current
  { question: "What is the SI unit of magnetic field?", options: ["Tesla", "Weber", "Henry", "Ohm"], answer: "Tesla" },
  { question: "Biot-Savart law is related to?", options: ["Electric field", "Magnetic field", "Gravitation", "Light"], answer: "Magnetic field" },
  { question: "Ampere's circuital law is related to?", options: ["Electric field", "Magnetic field", "Current", "Voltage"], answer: "Magnetic field" },
  { question: "Force on a current-carrying conductor in magnetic field is given by?", options: ["Coulomb's law", "Lorentz force", "Gauss's law", "Ohm's law"], answer: "Lorentz force" },
  { question: "Fleming's left-hand rule is used for?", options: ["Induced current", "Force", "Magnetic field", "Electric field"], answer: "Force" },
  { question: "Fleming's right-hand rule is used for?", options: ["Force", "Induced current", "Magnetic field", "Electric field"], answer: "Induced current" },
  { question: "What is the SI unit of magnetic dipole moment?", options: ["A·m²", "A/m", "T·m", "Wb"], answer: "A·m²" },
  { question: "Magnetic field due to long straight conductor is inversely proportional to?", options: ["Current", "Distance", "Distance²", "Current²"], answer: "Distance" },
  { question: "Magnetic field at the center of circular loop is proportional to?", options: ["Radius", "Current", "1/Radius", "1/Current"], answer: "Current" },
  { question: "Cyclotron is used to accelerate?", options: ["Electron", "Charged particles", "Neutron", "Photon"], answer: "Charged particles" },

  // Electromagnetic Induction
  { question: "Who discovered electromagnetic induction?", options: ["Faraday", "Ohm", "Ampere", "Volta"], answer: "Faraday" },
  { question: "Lenz's law is based on conservation of?", options: ["Charge", "Energy", "Momentum", "Mass"], answer: "Energy" },
  { question: "Induced EMF is proportional to?", options: ["Flux", "Rate of change of flux", "Time", "Area"], answer: "Rate of change of flux" },
  { question: "What is the SI unit of self-inductance?", options: ["Tesla", "Weber", "Henry", "Farad"], answer: "Henry" },
  { question: "Example of mutual induction is?", options: ["Transformer", "Generator", "Motor", "Battery"], answer: "Transformer" },
  { question: "Eddy currents are used in?", options: ["Induction furnace", "Generator", "Motor", "Transformer"], answer: "Induction furnace" },
  { question: "AC generator works on the principle of?", options: ["Electromagnetic induction", "Static electricity", "Heat", "Light"], answer: "Electromagnetic induction" },
  { question: "DC motor works on the principle of?", options: ["Electromagnetic induction", "Magnetic force", "Static electricity", "Heat"], answer: "Magnetic force" },
  { question: "To reduce eddy currents, what is used?", options: ["Lamination", "Heating", "Cooling", "Pressure"], answer: "Lamination" },
  { question: "Transformer works on?", options: ["AC", "DC", "Both", "None"], answer: "AC" },

  // Alternating Current
  { question: "Relation between RMS and peak value of AC is?", options: ["Irms = I0/√2", "Irms = I0√2", "Irms = I0", "Irms = 2I0"], answer: "Irms = I0/√2" },
  { question: "What is the SI unit of reactance?", options: ["Ohm", "Henry", "Farad", "Volt"], answer: "Ohm" },
  { question: "Inductive reactance is proportional to?", options: ["Frequency", "1/Frequency", "Frequency²", "1/Frequency²"], answer: "Frequency" },
  { question: "Capacitive reactance is inversely proportional to?", options: ["Frequency", "1/Frequency", "Frequency²", "1/Frequency²"], answer: "Frequency" },
  { question: "At resonance, impedance is?", options: ["Maximum", "Minimum", "Zero", "Infinite"], answer: "Minimum" },
  { question: "Power factor lies between?", options: ["0 and 1", "-1 and 0", "1 and 2", "0 and -1"], answer: "0 and 1" },
  { question: "Resonant frequency in LCR circuit depends on?", options: ["R", "L and C", "Only L", "Only C"], answer: "L and C" },
  { question: "Efficiency of transformer is?", options: ["50%", "70%", "More than 90%", "100%"], answer: "More than 90%" },
  { question: "Wattless current is?", options: ["Zero", "Maximum", "Average", "Infinite"], answer: "Zero" },
  { question: "Average power in AC circuit is proportional to?", options: ["cosφ", "sinφ", "tanφ", "cotφ"], answer: "cosφ" },

  // Electromagnetic Waves
  { question: "Who discovered electromagnetic waves?", options: ["Maxwell", "Hertz", "Faraday", "Newton"], answer: "Maxwell" },
  { question: "Speed of electromagnetic waves in vacuum is?", options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁷ m/s"], answer: "3×10⁸ m/s" },
  { question: "Electromagnetic waves are?", options: ["Longitudinal", "Transverse", "Both", "None"], answer: "Transverse" },
  { question: "Wavelength of visible light is?", options: ["400-700 nm", "100-400 nm", "700-1000 nm", "1000-1500 nm"], answer: "400-700 nm" },
  { question: "Who discovered X-rays?", options: ["Roentgen", "Maxwell", "Hertz", "Marie Curie"], answer: "Roentgen" },
  { question: "Infrared waves are used in?", options: ["Remote control", "Radio", "TV", "Mobile"], answer: "Remote control" },
  { question: "Frequency of gamma rays is?", options: ["Minimum", "Maximum", "Medium", "Zero"], answer: "Maximum" },
  { question: "Wavelength of radio waves is?", options: ["Very small", "Very large", "Medium", "Zero"], answer: "Very large" },
  { question: "Angle between E and B in electromagnetic waves is?", options: ["0°", "45°", "90°", "180°"], answer: "90°" },
  { question: "Microwave oven uses?", options: ["Microwaves", "Radio waves", "X-rays", "Gamma rays"], answer: "Microwaves" },

  // Optics - Reflection & Refraction
  { question: "How many laws of reflection are there?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "Mirror formula is?", options: ["1/v + 1/u = 1/f", "1/v - 1/u = 1/f", "v + u = f", "v - u = f"], answer: "1/v + 1/u = 1/f" },
  { question: "Focal length of concave mirror is?", options: ["Positive", "Negative", "Zero", "Infinite"], answer: "Negative" },
  { question: "Convex mirror is used in?", options: ["Vehicle mirror", "Shaving mirror", "Microscope", "Telescope"], answer: "Vehicle mirror" },
  { question: "Refraction of light is due to?", options: ["Change in speed", "Change in frequency", "Change in wavelength", "Change in amplitude"], answer: "Change in speed" },
  { question: "Snell's law is?", options: ["sin i / sin r = μ", "sin r / sin i = μ", "cos i / cos r = μ", "tan i / tan r = μ"], answer: "sin i / sin r = μ" },
  { question: "Condition for total internal reflection is?", options: ["Denser to rarer medium", "Rarer to denser medium", "Same medium", "None"], answer: "Denser to rarer medium" },
  { question: "Formula for critical angle is?", options: ["sin C = 1/μ", "sin C = μ", "cos C = 1/μ", "tan C = μ"], answer: "sin C = 1/μ" },
  { question: "Optical fiber works on the principle of?", options: ["Total internal reflection", "Refraction", "Diffraction", "Polarization"], answer: "Total internal reflection" },
  { question: "Lens formula is?", options: ["1/v - 1/u = 1/f", "1/v + 1/u = 1/f", "v - u = f", "v + u = f"], answer: "1/v - 1/u = 1/f" },

  // Wave Optics
  { question: "Who discovered interference of light?", options: ["Young", "Newton", "Huygens", "Fresnel"], answer: "Young" },
  { question: "Fringe width in Young's double slit experiment is?", options: ["β = λD/d", "β = λd/D", "β = dD/λ", "β = λ/Dd"], answer: "β = λD/d" },
  { question: "Diffraction occurs due to?", options: ["Bending of waves", "Reflection", "Refraction", "Polarization"], answer: "Bending of waves" },
  { question: "Polarization occurs in?", options: ["Longitudinal waves", "Transverse waves", "Both", "None"], answer: "Transverse waves" },
  { question: "Brewster's law is?", options: ["tan θp = μ", "sin θp = μ", "cos θp = μ", "cot θp = μ"], answer: "tan θp = μ" },
  { question: "Huygens principle is used for?", options: ["Wave nature", "Particle nature", "Both", "None"], answer: "Wave nature" },
  { question: "In interference, intensity is proportional to?", options: ["Amplitude", "Amplitude²", "Frequency", "Wavelength"], answer: "Amplitude²" },
  { question: "Condition for principal maxima in diffraction grating is?", options: ["d sin θ = nλ", "d cos θ = nλ", "d tan θ = nλ", "d sin θ = λ/n"], answer: "d sin θ = nλ" },
  { question: "Wavelength of light in water?", options: ["Increases", "Decreases", "Remains same", "Becomes zero"], answer: "Decreases" },
  { question: "According to Maxwell, light is?", options: ["Particle", "Electromagnetic wave", "Wave", "None"], answer: "Electromagnetic wave" },

  // Dual Nature of Radiation
  { question: "Who discovered photoelectric effect?", options: ["Hertz", "Einstein", "Planck", "Bohr"], answer: "Hertz" },
  { question: "Who explained photoelectric effect?", options: ["Einstein", "Newton", "Huygens", "Maxwell"], answer: "Einstein" },
  { question: "Formula for energy of photon is?", options: ["E = hν", "E = h/ν", "E = ν/h", "E = hν²"], answer: "E = hν" },
  { question: "Value of Planck's constant is?", options: ["6.626×10⁻³⁴ J·s", "6.626×10⁻³⁰ J·s", "6.626×10⁻²⁸ J·s", "6.626×10⁻²⁰ J·s"], answer: "6.626×10⁻³⁴ J·s" },
  { question: "Who proposed matter waves?", options: ["de Broglie", "Einstein", "Bohr", "Planck"], answer: "de Broglie" },
  { question: "Formula for de Broglie wavelength is?", options: ["λ = h/p", "λ = p/h", "λ = hp", "λ = h/p²"], answer: "λ = h/p" },
  { question: "Photoelectric current depends on?", options: ["Frequency", "Intensity", "Wavelength", "Speed"], answer: "Intensity" },
  { question: "What is the SI unit of work function?", options: ["Joule", "Watt", "Newton", "Ampere"], answer: "Joule" },
  { question: "Stopping potential is proportional to?", options: ["Frequency", "Intensity", "Wavelength", "Speed"], answer: "Frequency" },
  { question: "Who discovered electron?", options: ["Thomson", "Chadwick", "Rutherford", "Bohr"], answer: "Thomson" },

  // Atoms & Nuclei
  { question: "Who discovered atomic nucleus?", options: ["Rutherford", "Thomson", "Bohr", "Chadwick"], answer: "Rutherford" },
  { question: "Bohr's atomic model is successful for?", options: ["Hydrogen", "Helium", "Lithium", "All"], answer: "Hydrogen" },
  { question: "Who discovered neutron?", options: ["Chadwick", "Rutherford", "Thomson", "Bohr"], answer: "Chadwick" },
  { question: "Nuclear force is?", options: ["Long range", "Short range", "Electric", "Gravitational"], answer: "Short range" },
  { question: "Formula for mass defect is?", options: ["E = Δmc²", "E = mc²", "E = Δm/c²", "E = Δm²c"], answer: "E = Δmc²" },
  { question: "Who discovered radioactivity?", options: ["Becquerel", "Curie", "Rutherford", "Einstein"], answer: "Becquerel" },
  { question: "Alpha particle is?", options: ["Helium nucleus", "Electron", "Proton", "Neutron"], answer: "Helium nucleus" },
  { question: "Beta particle is?", options: ["Electron", "Proton", "Neutron", "Helium nucleus"], answer: "Electron" },
  { question: "Gamma rays are?", options: ["Electromagnetic waves", "Particles", "Electrons", "Protons"], answer: "Electromagnetic waves" },
  { question: "Nuclear fission releases?", options: ["Energy", "Mass", "Charge", "None"], answer: "Energy" },

  // Semiconductors
  { question: "In intrinsic semiconductor, number of free electrons and holes are?", options: ["Equal", "Unequal", "More electrons", "More holes"], answer: "Equal" },
  { question: "Majority carriers in n-type semiconductor are?", options: ["Electrons", "Holes", "Protons", "Neutrons"], answer: "Electrons" },
  { question: "Majority carriers in p-type semiconductor are?", options: ["Holes", "Electrons", "Protons", "Neutrons"], answer: "Holes" },
  { question: "Depletion layer in p-n junction diode is made of?", options: ["Ions", "Electrons", "Holes", "Protons"], answer: "Ions" },
  { question: "Diode is used in?", options: ["Rectifier", "Amplifier", "Oscillator", "Modulator"], answer: "Rectifier" },
  { question: "Zener diode is used in?", options: ["Voltage regulator", "Rectifier", "Amplifier", "Oscillator"], answer: "Voltage regulator" },
  { question: "How many terminals does a transistor have?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "Base in NPN transistor is?", options: ["p-type", "n-type", "Intrinsic", "None"], answer: "p-type" },
  { question: "Transistor is used in amplifier to?", options: ["Increase signal", "Decrease signal", "Rectify", "Modulate"], answer: "Increase signal" },
  { question: "AND gate output is 1 when?", options: ["Both inputs 1", "Any input 1", "Both inputs 0", "Any input 0"], answer: "Both inputs 1" },

  // Communication Systems
  { question: "Why is modulation done?", options: ["To increase transmission distance", "To decrease signal", "To increase frequency", "None"], answer: "To increase transmission distance" },
  { question: "In AM, modulation is done in?", options: ["Amplitude", "Frequency", "Phase", "Wavelength"], answer: "Amplitude" },
  { question: "In FM, modulation is done in?", options: ["Frequency", "Amplitude", "Phase", "Wavelength"], answer: "Frequency" },
  { question: "How many parts does a communication system have?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "Height of antenna is proportional to?", options: ["Wavelength", "Frequency", "Amplitude", "Phase"], answer: "Wavelength" },
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
export default function Physics12thQuiz() {
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
    const questionBank = language === 'hi' ? physicsHindi : physicsEnglish;
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
              <title>${language === 'hi' ? 'भौतिकी 12वीं परिणाम' : 'Physics 12th Result'}</title>
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
      'title': { hi: '⚛️ भौतिकी 12वीं', en: '⚛️ Physics 12th' },
      'subtitle': { hi: 'कक्षा 12 भौतिकी विज्ञान प्रश्नोत्तरी', en: 'Class 12 Physics Science Quiz' },
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
          <div style={{ fontSize: "48px", marginBottom: "5px" }}>⚛️</div>
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
            💡 {language === 'hi' ? 'कक्षा 12 भौतिकी के सभी अध्यायों की व्यापक कवरेज' : 'Comprehensive coverage of all Class 12 Physics chapters'}
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
                {language === 'hi' ? 'कक्षा 12 भौतिकी क्विज़' : 'Class 12 Physics Quiz'}
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
            📌 {language === 'hi' ? 'भौतिकी 12वीं' : 'Physics 12th'}
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