const ZodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",

  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",

];


//based on Date,size 31
const compliments = [
  "You have a magnetic personality",
  "Your smile lights up the room",
  "You bring positive energy everywhere",
  "You are incredibly intelligent",
  "Your creativity knows no bounds",
  "You have a kind heart",
  "People feel safe around you",
  "You are destined for success",
  "Your confidence is inspiring",
  "You make difficult things look easy",
  "You have a beautiful soul",
  "Your presence brings peace",
  "You are stronger than you think",
  "You have great leadership skills",
  "You radiate positivity",
  "Your intuition is powerful",
  "You are naturally charming",
  "You uplift everyone around you",
  "You are one of a kind",
  "You have amazing potential"
];


//size 20
const victimCardCompliments = [
  "You give more than you receive",
  "People often misunderstand your intentions",
  "You care deeply but rarely get the same back",
  "You are too kind for this world",
  "You always put others first",
  "You feel emotions very deeply",
  "You sacrifice your happiness for others",
  "You are often taken for granted",
  "You love wholeheartedly",
  "You stay strong even when hurt",
  "You forgive easily",
  "You expect little yet give a lot",
  "You hide your pain well",
  "You deserve better treatment",
  "You keep going despite setbacks",
  "You rarely complain",
  "You stay loyal even when ignored",
  "You carry emotional weight silently",
  "You feel things others don't notice",
  "You remain humble in hardship",
  "You stay hopeful despite disappointment",
  "You overthink because you care",
  "You feel deeply connected to people",
  "You keep your promises",
  "You are emotionally strong",
  "You endure more than you show",
  "You love unconditionally",
  "You give chances easily",
  "You stay calm under pressure",
  "You deserve appreciation",
  "You love unconditionally",
];


//size of 30
const recommendations = [
  "Take time for self-care today",
  "Trust your instincts",
  "Avoid overthinking small things",
  "Focus on your goals",
  "Drink more water today",
  "Spend time with loved ones",
  "Avoid unnecessary arguments",
  "Practice gratitude",
  "Take a short walk outdoors",
  "Believe in yourself",
  "Let go of negativity",
  "Be patient with situations",
  "Prioritize your mental health",
  "Start something new",
  "Listen more than you speak",
  "Take deep breaths",
  "Avoid impulsive decisions",
  "Organize your tasks",
  "Get enough rest",
  "Stay consistent",
  "Express your feelings",
  "Focus on personal growth",
  "Avoid distractions",
  "Keep a positive mindset",
  "Accept change gracefully",
  "Stay disciplined",
  "Trust the process",
  "Be kind to yourself",
  "Maintain balance",
  "Follow your passion"
];


//size of 20
const predictions = [
  "Today brings positive energy and clarity in your thoughts.",
  "A small opportunity may lead to something big—stay alert.",
  "You may feel emotional today, but things will balance out.",
  "Financial matters show slow but steady improvement.",
  "Someone from your past may reconnect with you.",
  "Patience will be your biggest strength today.",
  "Avoid unnecessary arguments; peace is important now.",
  "Your hard work will soon be recognized.",
  "A good day to start something new.",
  "Trust your intuition—it will guide you well.",
  "You may receive unexpected good news.",
  "Focus on health and maintain discipline.",
  "Creative ideas will flow naturally today.",
  "A conversation can change your perspective.",
  "Your confidence will attract positive attention.",
  "Let go of stress and enjoy the present moment.",
  "Today favors learning and personal growth.",
  "Avoid impulsive decisions today.",
  "Someone close may need your support.",
  "You will feel more motivated than usual.",
  "An old problem may finally find a solution.",
  "Stay grounded and practical today.",
  "Your leadership skills will shine.",
  "Good time to plan your future steps.",
  "Emotional balance brings inner peace.",
  "Be mindful of your words today.",
  "Luck is subtly working in your favor.",
  "Take responsibility and stay focused.",
  "A calm approach will bring success.",
  "End the day with gratitude and reflection."
];


const form=document.getElementById("astroForm");

form.addEventListener("submit",(e)=>{  
    e.preventDefault();

    const name=document.getElementById("name").value;
    const surname=document.getElementById("surname").value;
    const day=document.getElementById("day").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;


    const text=`Hi,${name},Your Zodiac sign is ${ZodiacSigns[month-1]}
     .${compliments[day-1]}.${victimCardCompliments[year%20]}.${recommendations[()]}.
      ${predictions[(name.length*sumrname.length)%20]}`;

      document.getElementById('result').textContent=text;
    
    form.reset();
    
})











