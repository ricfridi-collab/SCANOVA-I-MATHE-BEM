/**
 * HUNTER MATH - DATABASE (200 Questions)
 * المحاور: الأعداد والحساب، الحساب الحرفي، الهندسة، الدوال
 */

const questionsDB = [
    // --- الوحدة 1: الأعداد الطبيعية والناطقة والجذور (50 سؤال) ---
    { id: "unit_01", q: "PGCD(120, 48)", a: "24" },
    { id: "unit_01", q: "هل العددان 15 و 28 أوليان فيما بينهما؟ (نعم/لا)", a: "نعم" },
    { id: "unit_01", q: "PGCD(150, 30)", a: "30" },
    { id: "unit_01", q: "بسط الجذر √18", a: "3√2" },
    { id: "unit_01", q: "بسط الجذر √75", a: "5√3" },
    { id: "unit_01", q: "احسب √144", a: "12" },
    { id: "unit_01", q: "احسب √0.25", a: "0.5" },
    { id: "unit_01", q: "ما هو مقلوب العدد √2؟", a: "√2/2" },
    { id: "unit_01", q: "حل المعادلة x² = 25 (الحل الموجب)", a: "5" },
    { id: "unit_01", q: "بسط العبارة: √2 × √8", a: "4" },
    { id: "unit_01", q: "العدد المربع الكامل بين 10 و 20 هو؟", a: "16" },
    { id: "unit_01", q: "PGCD(13, 17)", a: "1" },
    { id: "unit_01", q: "بسط √20 + √45", a: "5√5" },
    { id: "unit_01", q: "كتابة 7/√2 بمقام ناطق؟", a: "7√2/2" },
    { id: "unit_01", q: "ما هو ربع العدد √16؟", a: "1" },
    { id: "unit_01", q: "قيمة x إذا كان x² = 0", a: "0" },
    { id: "unit_01", q: "PGCD(81, 27)", a: "27" },
    { id: "unit_01", q: "بسط √8", a: "2√2" },
    { id: "unit_01", q: "احسب (√5)²", a: "5" },
    { id: "unit_01", q: "هل √2 + √3 = √5؟ (نعم/لا)", a: "لا" },
    { id: "unit_01", q: "بسط √98", a: "7√2" },
    { id: "unit_01", q: "احسب √121", a: "11" },
    { id: "unit_01", q: "PGCD(100, 25)", a: "25" },
    { id: "unit_01", q: "بسط √300", a: "10√3" },
    { id: "unit_01", q: "هل √16 - √9 = √7؟ (نعم/لا)", a: "لا" },
    { id: "unit_01", q: "ما هو العدد الذي جذره 13؟", a: "169" },
    { id: "unit_01", q: "احسب √1 + √0", a: "1" },
    { id: "unit_01", q: "بسط √28", a: "2√7" },
    { id: "unit_01", q: "نطق مقام الكسر 1/√5", a: "√5/5" },
    { id: "unit_01", q: "احسب (2√3)²", a: "12" },
    { id: "unit_01", q: "PGCD(14, 15)", a: "1" },
    { id: "unit_01", q: "بسط √54", a: "3√6" },
    { id: "unit_01", q: "هل 0 عدد ناطق؟ (نعم/لا)", a: "نعم" },
    { id: "unit_01", q: "جذر العدد 625 هو؟", a: "25" },
    { id: "unit_01", q: "بسط √108", a: "6√3" },
    { id: "unit_01", q: "احسب √64 / √4", a: "4" },
    { id: "unit_01", q: "ما هو نصف √4؟", a: "1" },
    { id: "unit_01", q: "PGCD(21, 14)", a: "7" },
    { id: "unit_01", q: "بسط √40", a: "2√10" },
    { id: "unit_01", q: "هل π عدد ناطق؟ (نعم/لا)", a: "لا" },
    { id: "unit_01", q: "احسب √225", a: "15" },
    { id: "unit_01", q: "بسط √160", a: "4√10" },
    { id: "unit_01", q: "قيمة x² إذا كان x=√7", a: "7" },
    { id: "unit_01", q: "PGCD(45, 60)", a: "15" },
    { id: "unit_01", q: "بسط √24", a: "2√6" },
    { id: "unit_01", q: "احسب √16 × √9", a: "12" },
    { id: "unit_01", q: "جذر 1.44 هو؟", a: "1.2" },
    { id: "unit_01", q: "بسط √200", a: "10√2" },
    { id: "unit_01", q: "العدد x حيث x² = -4 (اكتب: لا يوجد)", a: "لا يوجد" },
    { id: "unit_01", q: "احسب √10000", a: "100" },

    // --- الوحدة 3: الحساب الحرفي والمعادلات (50 سؤال) ---
    { id: "unit_03", q: "انشر: (x+3)²", a: "x²+6x+9" },
    { id: "unit_03", q: "انشر: (x-5)²", a: "x²-10x+25" },
    { id: "unit_03", q: "حل المعادلة 3x = 12", a: "4" },
    { id: "unit_03", q: "بسط: 5x + 2x - x", a: "6x" },
    { id: "unit_03", q: "انشر: (x-2)(x+2)", a: "x²-4" },
    { id: "unit_03", q: "حل المعادلة x + 9 = 4", a: "-5" },
    { id: "unit_03", q: "حل: 2x - 1 = 7", a: "4" },
    { id: "unit_03", q: "تحليل: x² + 2x", a: "x(x+2)" },
    { id: "unit_03", q: "انشر: 3(2x - 4)", a: "6x-12" },
    { id: "unit_03", q: "حل: (x-1)(x+5) = 0 (الحل الموجب)", a: "1" },
    { id: "unit_03", q: "بسط: x × x", a: "x²" },
    { id: "unit_03", q: "حل المعادلة: x/2 = 10", a: "20" },
    { id: "unit_03", q: "انشر: (2x+1)²", a: "4x²+4x+1" },
    { id: "unit_03", q: "حل: 5x + 5 = 0", a: "-1" },
    { id: "unit_03", q: "تحليل: 3x + 6", a: "3(x+2)" },
    { id: "unit_03", q: "حل المتراجحة 2x > 4 (اكتب: x>2)", a: "x>2" },
    { id: "unit_03", q: "بسط: -(x - 3)", a: "-x+3" },
    { id: "unit_03", q: "قيمة 2x² من أجل x=3", a: "18" },
    { id: "unit_03", q: "حل المعادلة: 4x = 2", a: "0.5" },
    { id: "unit_03", q: "انشر: (3-x)(3+x)", a: "9-x²" },
    { id: "unit_03", q: "حل: 10 - x = 7", a: "3" },
    { id: "unit_03", q: "بسط: 2x + 3 + 4x - 1", a: "6x+2" },
    { id: "unit_03", q: "تحليل: x² - 16", a: "(x-4)(x+4)" },
    { id: "unit_03", q: "حل: (2x-4)=0", a: "2" },
    { id: "unit_03", q: "قيمة x+y إذا كان x=1 و y=-1", a: "0" },
    { id: "unit_03", q: "بسط: 3x - (2x + 1)", a: "x-1" },
    { id: "unit_03", q: "حل: 7x = 0", a: "0" },
    { id: "unit_03", q: "انشر: (x+10)²", a: "x²+20x+100" },
    { id: "unit_03", q: "حل المعادلة: 2x + 2 = x + 5", a: "3" },
    { id: "unit_03", q: "بسط: x² + x²", a: "2x²" },
    { id: "unit_03", q: "حل: x/3 = 1", a: "3" },
    { id: "unit_03", q: "انشر: (x-1)(x+1)", a: "x²-1" },
    { id: "unit_03", q: "قيمة 5x من أجل x=0.2", a: "1" },
    { id: "unit_03", q: "حل: -2x = 10", a: "-5" },
    { id: "unit_03", q: "تحليل: 5x² - 5x", a: "5x(x-1)" },
    { id: "unit_03", q: "بسط: 10x - 12x", a: "-2x" },
    { id: "unit_03", q: "حل: x + x = 10", a: "5" },
    { id: "unit_03", q: "انشر: 4x(x + 2)", a: "4x²+8x" },
    { id: "unit_03", q: "حل المعادلة: 1/x = 1", a: "1" },
    { id: "unit_03", q: "بسط: (x+1) + (x-1)", a: "2x" },
    { id: "unit_03", q: "حل: 3x = 1", a: "1/3" },
    { id: "unit_03", q: "انشر: (x-4)²", a: "x²-8x+16" },
    { id: "unit_03", q: "تحليل: x² - 1", a: "(x-1)(x+1)" },
    { id: "unit_03", q: "حل: 2(x+1) = 6", a: "2" },
    { id: "unit_03", q: "بسط: 0x + 5", a: "5" },
    { id: "unit_03", q: "حل المعادلة: x² = 0", a: "0" },
    { id: "unit_03", q: "انشر: (x+2)(x-3)", a: "x²-x-6" },
    { id: "unit_03", q: "قيمة x²-1 من أجل x=1", a: "0" },
    { id: "unit_03", q: "حل: x - 5 = -5", a: "0" },
    { id: "unit_03", q: "بسط: 4x² / 2x", a: "2x" },

    // --- الوحدة 5: الهندسة (50 سؤال) ---
    { id: "unit_05", q: "في فيثاغورس: AB=6, AC=8 الوتر BC=؟", a: "10" },
    { id: "unit_05", q: "Cos(0°)", a: "1" },
    { id: "unit_05", q: "Sin(30°)", a: "0.5" },
    { id: "unit_05", q: "تانجانت الزاوية = المقابل / ...؟", a: "المجاور" },
    { id: "unit_05", q: "مجموع زوايا المربع؟", a: "360" },
    { id: "unit_05", q: "الوتر هو أطول ضلع في المثلث ال...؟", a: "القائم" },
    { id: "unit_05", q: "مساحة الدائرة: π × ... مربع؟", a: "نصف القطر" },
    { id: "unit_05", q: "في طالس: يجب توفر شرط ال...؟", a: "توازي" },
    { id: "unit_05", q: "Cos²x + Sin²x =", a: "1" },
    { id: "unit_05", q: "زاوية المثلث المتساوي الأضلاع؟", a: "60" },
    { id: "unit_05", q: "قطرا المستطيل متساويا و...؟", a: "متناصفان" },
    { id: "unit_05", q: "الزاوية المستقيمة قيسها؟", a: "180" },
    { id: "unit_05", q: "محيط المربع: الضلع × ...؟", a: "4" },
    { id: "unit_05", q: "مثلث قائم فيه زاوية 45، الزاوية الثالثة؟", a: "45" },
    { id: "unit_05", q: "المجاور / الوتر هو قانون ال...؟", a: "cos" },
    { id: "unit_05", q: "الزاوية المنفرجة أكبر من؟", a: "90" },
    { id: "unit_05", q: "مركز الدائرة المحيطة بمثلث قائم هو منتصف ال...؟", a: "الوتر" },
    { id: "unit_05", q: "الضلع المقابل لـ 30° في مثلث قائم يساوي نصف ال...؟", a: "الوتر" },
    { id: "unit_05", q: "مساحة المستطيل: الطول × ...؟", a: "العرض" },
    { id: "unit_05", q: "متوازي الأضلاع فيه كل ضلعين متقابلين...؟", a: "متوازيان" },
    { id: "unit_05", q: "Tan(45°)", a: "1" },
    { id: "unit_05", q: "محيط الدائرة: 2 × π × ...؟", a: "نصف القطر" },
    { id: "unit_05", q: "قيس زاوية المربع؟", a: "90" },
    { id: "unit_05", q: "إذا كان tan x = 1 فإن x = ؟", a: "45" },
    { id: "unit_05", q: "عدد أقطار المثلث؟", a: "0" },
    { id: "unit_05", q: "المتوسط المتعلق بالوتر يساوي ... الوتر؟", a: "نصف" },
    { id: "unit_05", q: "صورة نقطة بالانسحاب هي نقطة...؟", a: "واحدة" },
    { id: "unit_05", q: "شعاعان متساويان لهما نفس المنحى والاتجاه و...؟", a: "الطول" },
    { id: "unit_05", q: "علاقة شال: AB + BC = ؟", a: "AC" },
    { id: "unit_05", q: "مجموع زوايا خماسي منتظم؟", a: "540" },
    { id: "unit_05", q: "في الدوران نحافظ على الأطوال و...؟", a: "الزوايا" },
    { id: "unit_05", q: "منصف الزاوية يقسمها إلى زاويتين...؟", a: "متساويتين" },
    { id: "unit_05", q: "المسافة بين نقطتين دائما عدد...؟", a: "موجب" },
    { id: "unit_05", q: "الإحداثيات (0,0) هي إحداثيات ال...؟", a: "المبدأ" },
    { id: "unit_05", q: "الانسحاب يحافظ على ال...؟", a: "المساحات" },
    { id: "unit_05", q: "مساحة شبه المنحرف: (ق1+ق2)× الارتفاع / ...؟", a: "2" },
    { id: "unit_05", q: "في المثلث القائم: مربع الوتر = مجموع مربعي ال...؟", a: "الضلعين" },
    { id: "unit_05", q: "Sin(90°)", a: "1" },
    { id: "unit_05", q: "المثلث الذي فيه ضلعان متساويان هو مثلث...؟", a: "متساوي الساقين" },
    { id: "unit_05", q: "النسبة بين المقابل والمجاور؟", a: "tan" },
    { id: "unit_05", q: "محور قطعة مستقيم يكون ... عليها في منتصفها؟", a: "عمودي" },
    { id: "unit_05", q: "الزاوية المحيطية تساوي ... الزاوية المركزية؟", a: "نصف" },
    { id: "unit_05", q: "قطرا المعين متناصفان و...؟", a: "متعامدان" },
    { id: "unit_05", q: "قيمة Sin(0°)", a: "0" },
    { id: "unit_05", q: "المثلث القائم يحقق نظرية ال...؟", a: "فيثاغورس" },
    { id: "unit_05", q: "إذا تساوى شعاعان فإن الشكل متوازي...؟", a: "أضلاع" },
    { id: "unit_05", q: "عدد أضلاع السداسي؟", a: "6" },
    { id: "unit_05", q: "قيس الزاوية الحادة أصغر من؟", a: "90" },
    { id: "unit_05", q: "نقطة تلاقي المتوسطات تسمى مركز ... المثلث؟", a: "ثقل" },
    { id: "unit_05", q: "محيط المثلث: مجموع أطوال...؟", a: "أضلاعه" },

    // --- الوحدة 8: الدوال والمعالم (50 سؤال) ---
    { id: "unit_08", q: "f(x)=3x هي دالة...؟", a: "خطية" },
    { id: "unit_08", q: "f(x)=2x+5 هي دالة...؟", a: "تآلفية" },
    { id: "unit_08", q: "صورة 2 بالدالة f(x)=4x هي؟", a: "8" },
    { id: "unit_08", q: "العدد الذي صورته 10 بالدالة f(x)=5x؟", a: "2" },
    { id: "unit_08", q: "معامل الدالة f(x)=-x هو؟", a: "-1" },
    { id: "unit_08", q: "f(0) في أي دالة خطية تساوي؟", a: "0" },
    { id: "unit_08", q: "صورة 1 بالدالة f(x)=x+3؟", a: "4" },
    { id: "unit_08", q: "f(x)=7 هي دالة...؟", a: "ثابتة" },
    { id: "unit_08", q: "ميل الدالة f(x)=2x-1 هو؟", a: "2" },
    { id: "unit_08", q: "التمثيل البياني للدالة الخطية يمر بـ...؟", a: "المبدأ" },
    { id: "unit_08", q: "صورة -3 بالدالة f(x)=2x؟", a: "-6" },
    { id: "unit_08", q: "f(x)=ax، يسمى a ال...؟", a: "معامل" },
    { id: "unit_08", q: "إذا كان f(2)=6 في دالة خطية فإن f(x)=...؟", a: "3x" },
    { id: "unit_08", q: "f(x)=x دالة تسمى الدالة ال...؟", a: "محايدة" },
    { id: "unit_08", q: "نقطة تقاطع f(x)=2x+3 مع محور التراتيب هي (0,...)؟", a: "3" },
    { id: "unit_08", q: "صورة 5 بالدالة f(x)=0.2x؟", a: "1" },
    { id: "unit_08", q: "f(x)=ax+b، يسمى b ال...؟", a: "ثابت" },
    { id: "unit_08", q: "الدالة التي تمثيلها مستقيم لا يمر بالمبدأ هي؟", a: "تآلفية" },
    { id: "unit_08", q: "إذا كان f(x)=4x فإن f(0.5)=؟", a: "2" },
    { id: "unit_08", q: "العدد الذي صورته 0 بالدالة f(x)=x-4؟", a: "4" },
    { id: "unit_08", q: "f(x)=-3x+1، احسب f(1)", a: "-2" },
    { id: "unit_08", q: "معامل الدالة f(x)=x/2 هو؟", a: "0.5" },
    { id: "unit_08", q: "f(x)=10x، احسب f(-2)", a: "-20" },
    { id: "unit_08", q: "هل f(x)=x² دالة خطية؟ (نعم/لا)", a: "لا" },
    { id: "unit_08", q: "صورة 100 بالدالة f(x)=0.01x؟", a: "1" },
    { id: "unit_08", q: "f(x)=5x-5، ما هي f(1)؟", a: "0" },
    { id: "unit_08", q: "العدد الذي صورته 6 بالدالة f(x)=2x؟", a: "3" },
    { id: "unit_08", q: "f(x)=ax+b تكون خطية إذا كان b=...؟", a: "0" },
    { id: "unit_08", q: "ميل الدالة f(x)=-4x+7 هو؟", a: "-4" },
    { id: "unit_08", q: "f(x)=3x+3، احسب f(-1)", a: "0" },
    { id: "unit_08", q: "صورة 0 بالدالة التآلفية f(x)=ax+b هي؟", a: "b" },
    { id: "unit_08", q: "إذا كان f(1)=5 و f(0)=0 فإن الدالة هي f(x)=...؟", a: "5x" },
    { id: "unit_08", q: "f(x)=1/x هل هي دالة تآلفية؟ (نعم/لا)", a: "لا" },
    { id: "unit_08", q: "صورة 4 بالدالة f(x)=√x هي؟", a: "2" },
    { id: "unit_08", q: "f(x)=-2x، ما هو العدد الذي صورته 4؟", a: "-2" },
    { id: "unit_08", q: "المستقيم y=3x+2 يمر بالنقطة (1,...)؟", a: "5" },
    { id: "unit_08", q: "f(x)=0.5x+1، احسب f(4)", a: "3" },
    { id: "unit_08", q: "الدالة الخطية تعبر عن وضعية...؟", a: "تناسبية" },
    { id: "unit_08", q: "معامل توجيه المستقيم y=x هو؟", a: "1" },
    { id: "unit_08", q: "f(x)=-x-1، احسب f(-1)", a: "0" },
    { id: "unit_08", q: "العدد الذي صورته 10 بالدالة f(x)=x+10؟", a: "0" },
    { id: "unit_08", q: "صورة 6 بالدالة f(x)=x/3 هي؟", a: "2" },
    { id: "unit_08", q: "f(x)=2x، احسب f(f(1))", a: "4" },
    { id: "unit_08", q: "هل f(x)=2x+x دالة خطية؟ (نعم/لا)", a: "نعم" },
    { id: "unit_08", q: "f(x)=4، احسب f(100)", a: "4" },
    { id: "unit_08", q: "ميل المستقيم y=5 هو؟", a: "0" },
    { id: "unit_08", q: "f(x)=2x-2، احسب f(0)", a: "-2" },
    { id: "unit_08", q: "العدد الذي صورته -1 بالدالة f(x)=x؟", a: "-1" },
    { id: "unit_08", q: "f(x)=3x، احسب f(1/3)", a: "1" },
    { id: "unit_08", q: "صورة 9 بالدالة f(x)=x-9 هي؟", a: "0" }
];

// --- منطق اللعبة (Logic) ---

let currentQuestions = [];
let currentIdx = 0;
let sessionScore = 0;

function startQuiz(unitId) {
    // 1. تصفية الأسئلة حسب الوحدة
    const filtered = questionsDB.filter(q => q.id === unitId);
    
    // 2. خلط عشوائي واختيار 10 أسئلة فقط
    currentQuestions = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    // 3. تصغير الواجهة الرئيسية وإظهار واجهة التحدي
    currentIdx = 0;
    sessionScore = 0;
    document.getElementById('main-view').style.display = "none";
    document.getElementById('quiz-view').style.display = "block";
    
    renderQuestion();
}

function renderQuestion() {
    if (currentIdx >= 10) {
        showFinalResult();
        return;
    }

    const item = currentQuestions[currentIdx];
    document.getElementById('current-score').innerText = sessionScore;
    
    const container = document.getElementById('quiz-data-container');
    container.innerHTML = `
        <p style="text-align:center; opacity:0.5; margin-bottom:10px;">السؤال ${currentIdx + 1} من 10</p>
        <h2 style="text-align:center; margin-bottom:25px; min-height:60px; display:flex; align-items:center; justify-content:center;">
            ${item.q}
        </h2>
        <div class="quiz-input-group">
            <input type="text" id="userInput" placeholder="اكتب إجابتك هنا..." autocomplete="off" autofocus>
            <button class="action-btn" onclick="checkAnswer('${item.a}')">تأكيد الإجابة</button>
        </div>
        <div id="feedback" style="margin-top:20px; font-weight:bold; text-align:center; height:30px;"></div>
    `;

    // تفعيل الإدخال عبر زر Enter
    document.getElementById('userInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkAnswer(item.a);
        }
    });
}

function checkAnswer(correct) {
    const userVal = document.getElementById('userInput').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
    const inputField = document.getElementById('userInput');
    
    // منع الضغط المتكرر
    inputField.disabled = true;

    if (userVal == correct.toLowerCase()) {
        sessionScore++;
        feedback.innerHTML = "✅ أصبت! عمل رائع";
        feedback.style.color = "var(--success)";
    } else {
        feedback.innerHTML = `❌ خطأ! الإجابة الصحيحة هي: ${correct}`;
        feedback.style.color = "var(--danger)";
    }

    document.getElementById('current-score').innerText = sessionScore;
    currentIdx++;

    // الانتقال للسؤال التالي تلقائيا بعد ثانية ونصف
    setTimeout(renderQuestion, 1500);
}

function showFinalResult() {
    const container = document.getElementById('quiz-data-container');
    let message = sessionScore >= 5 ? "أنت قناص محترف! 🔥" : "استمر في المحاولة، النجاح قريب! 💪";
    
    container.innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <h2 style="color:var(--accent-color); margin-bottom:15px;">انتهى التحدي</h2>
            <div style="font-size: 4rem; font-weight:900; margin-bottom:10px;">${sessionScore}/10</div>
            <p style="font-size:1.2rem; margin-bottom:30px;">${message}</p>
            <button class="action-btn" onclick="showHome()">العودة للمجالات</button>
        </div>
    `;
}

function showHome() {
    document.getElementById('main-view').style.display = "block";
    document.getElementById('quiz-view').style.display = "none";
}
