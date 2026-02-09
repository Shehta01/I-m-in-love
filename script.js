const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const quizSection = document.getElementById('quiz-section');
const message = document.getElementById('message');

let yesScale = 1; // مقياس حجم زر Yes
let paddingValue = 15; // قيمة الحشو الداخلي

// 1. منطق زر "No" (الهروب وتكبير زر Yes)
noBtn.addEventListener('mouseover', () => {
    // تحريك الزر لمكان عشوائي
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // تكبير زر "Yes"
    yesScale += 0.5;
    paddingValue += 10;
    yesBtn.style.transform = `scale(${yesScale})`;
    // نزيد الـ padding أيضاً لزيادة المساحة القابلة للضغط
    yesBtn.style.padding = `${paddingValue}px ${paddingValue * 2}px`;
});

// 2. منطق زر "Yes" (الاحتفال)
function celebrate() {
    // إخفاء سؤال الأزرار
    quizSection.classList.add('hidden');
    
    // إظهار جملة "I knew it!"
    message.classList.remove('hidden');
    
    // تغيير لون الخلفية
    document.body.style.backgroundColor = "#ffc2d1";

    // إطلاق مطر القلوب بكثافة
    setInterval(createHeart, 100);
}

// 3. وظيفة إنشاء قلب متساقط
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // اختيار شكل قلب عشوائي
    const heartTypes = ['❤️', '💖', '💕', '💗', '💓'];
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    // خصائص عشوائية (مكان، حجم، سرعة)
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    document.body.appendChild(heart);
    
    // حذف القلب بعد السقوط لتخفيف العبء عن المتصفح
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
