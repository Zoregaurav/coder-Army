//Projects:
//Random Qoute generator
//Love calculator
//income tax calculator
//Digital clock
//count down timer
//Astrology
//Clicker
//To do list
//Quiz

const quotes = [
  "Discipline is choosing between what you want now and what you want most.",
  "Dream big. Start small. Act now.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Your future is created by what you do today, not tomorrow.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn’t work hard.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Small progress is still progress.",
  "Stay focused and never settle for less.",
  "Believe in yourself even when no one else does.",
  "Failure is not the opposite of success; it’s part of success.",
  "Push yourself, because no one else is going to do it for you.",
  "Consistency turns average into excellence.",
  "Great things never come from comfort zones.",
  "You don’t have to be perfect, just be better than yesterday.",
  "Success starts with self-discipline.",
  "Work hard in silence, let success make the noise.",
  "Every expert was once a beginner.",
  "Your mindset determines your future.",
  "Make today count."
];

const button=document.querySelector('button');
const quote=document.querySelector("h1")


button.addEventListener('click',()=>{
    console.log("button is clicked");
    const index=Math.floor(Math.random()*20);
     quote.textContent=quotes[index];

})