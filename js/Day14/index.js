//Event:mouse move,click,double click
//Event Listner:Listening the event(click)
//Event Action:Strike is comming


// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="Strike is coming";
// }


// const element = document.getElementById("first");

//override concepts:
// ❌ Old style
// element.onclick=function handleClick(){
//     element.textContent="Strike is comming";
// }

// element.onclick=function handleClick(){
//     element.textContent="Strike is comming soon";
// }

//mouseEnter,mouseleave

// ✅ Best practice
// element.addEventListener('mouseleave', () => {

//     element.textContent = "Strike is comming soon";
//     // element.style.backgroundColor="brown";->yaha pe bhi likh sakata hain 
   
// });

//    element.addEventListener('mouseenter', () => {
//     element.style.backgroundColor="brown";
    
// }); 


//window->document->html->body->head->  grandParent->parent->child
                      //

// const parent=document.getElementById("parent");
// console.log(parent.children);




// for(let child of parent.children){
//     console.log(child);
//        child.addEventListener('click',()=>{
//          child.textContent="i am clicked";
//        })
// }
 //optimized way:
  
// function handleClick(e){
//     e.target.textContent="I am clicked"
//     parent.removeEventListener("click",handleClick)
// }

//  parent.addEventListener("click",handleClick);
 

//badiya optimized approach:
//capture phase:
//target phase
//bublling phase


// const grandParent=document.getElementById("grandparent");
// grandParent.addEventListener("click",(e)=>{
//     // console.log(e);
//    console.log(e.target);
//     // console.log("Grandparent is clicked");

// });

// const  parent=document.getElementById("parent");
// parent.addEventListener("click",()=>{
//     // console.log(e);
//     // console.log("parent is clicked");
// });


// const child=document.getElementById("child");
// child.addEventListener("click",()=>{
//     // console.log(e);
//     // e.stopPropagation();
//     // console.log("child is clicked");
// });


//capture phase on or off:

//capture pahse on hain->Top se down aaoge:Us time pe event ko trigger kar diya jaayega
//capture phase off hain :Event hain usko down to up(Bubbling phase bolte hain , tab event ko trigger kiya jaayega)



// 📌 JavaScript Events – Notes
// 1️⃣ What is an Event?

// Event = Browser me koi action hona
// Examples:

// click

// dblclick

// mousemove

// mouseenter

// mouseleave

// 👉 Jab user kuch karta hai → event fire hota hai

// 2️⃣ Event Listener kya hota hai?

// Event Listener = Event ko sunna

// Syntax:

// element.addEventListener("eventName", callbackFunction)


// Example:

// element.addEventListener("click", () => {
//   console.log("Clicked");
// });

// 3️⃣ Event Action

// Event ke baad jo kaam hota hai, wahi event action hota hai
// Example:

// element.textContent = "Strike is coming";

// 4️⃣ onclick vs addEventListener
// ❌ Old Style (onclick)
// element.onclick = function () {
//   element.textContent = "Strike is coming";
// };

// element.onclick = function () {
//   element.textContent = "Strike is coming soon";
// };


// ❗ Problem:

// Dusra function pehle wale ko override kar deta hai

// Sirf ek event handler allowed

// ✅ Best Practice (addEventListener)
// element.addEventListener("mouseleave", () => {
//   element.textContent = "Strike is coming soon";
// });

// element.addEventListener("mouseenter", () => {
//   element.style.backgroundColor = "brown";
// });


// ✔ Multiple listeners allowed
// ✔ Clean & scalable
// ✔ Industry standard

// 5️⃣ Mouse Events

// Common mouse events:

// click

// dblclick

// mouseenter

// mouseleave

// mousemove

// 6️⃣ DOM Tree Structure
// window
//  └── document
//      └── html
//          └── body
//              └── grandParent
//                  └── parent
//                      └── child

// 7️⃣ children Property
// const parent = document.getElementById("parent");
// console.log(parent.children);


// 👉 Sirf direct child elements milte hain

// 8️⃣ Looping Through Children (Unoptimized)
// for (let child of parent.children) {
//   child.addEventListener("click", () => {
//     child.textContent = "I am clicked";
//   });
// }


// ❌ Problem:

// Har child pe alag listener

// Performance issue (large DOM)

// 9️⃣ Event Delegation (Optimized Way) ⭐

// Parent pe listener lagao, child ko handle karo

// function handleClick(e) {
//   e.target.textContent = "I am clicked";
//   parent.removeEventListener("click", handleClick);
// }

// parent.addEventListener("click", handleClick);

// 🔑 Key Points:

// e.target → jis element pe click hua

// Kam memory use

// Dynamic elements ke liye best

// 🔟 Event Phases

// JavaScript event 3 phases me chalta hai:

// 1️⃣ Capture Phase (Top → Down)
// element.addEventListener("click", handler, true);

// 2️⃣ Target Phase

// 👉 Actual element jaha event hua

// 3️⃣ Bubbling Phase (Bottom → Up) ✅ Default
// element.addEventListener("click", handler);

// 1️⃣1️⃣ Bubbling Example
// grandParent.addEventListener("click", () => {
//   console.log("Grandparent clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", (e) => {
//   console.log("Child clicked");
//   // e.stopPropagation();
// });

// Output (without stopPropagation):
// Child → Parent → GrandParent

// 1️⃣2️⃣ stopPropagation()
// e.stopPropagation();


// 👉 Event upar jana rok deta hai

// ✅ Interview One-Liners

// addEventListener is better than onclick

// Event delegation improves performance

// e.target = actual clicked element

// Bubbling is default behavior

// Capture phase is optional







