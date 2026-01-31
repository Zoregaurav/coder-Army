//Events in JS:
//why JS is single threaded:

//->js is a single threaded synchronous language:

//API->fuction call ->simple term:kam asan

// console.log("Gaurav")  ->is also function
// Array.sort->api call->sort  ye ek api hi hain jo kidhar aur likha gaya function hain!


// window object hi web api ka access deta hain
//and window object Browser create karta hain and code ke andar rakhata hain

//web api:setTimeout/setInterval,dom api,fetch,local storage,console.log,location


//Event Loop:  basically callback queue se instruction ko callback function mein dalana kab ->jab calla stack khali ho->then js execute  the instruction



//Example:
console.log("Hi ji");

const button1=document.getElementById("button");
button1.addEventListener("click",()=>{
    console.log("Button 1 is clicked");
});

const button2=document.getElementById("button2");
button2.addEventListener("click",()=>{
    console.log("button 2 is clicked");
})

const button3=document.getElementById("button3");
button3.addEventListener("click",()=>{
    console.log("button 3 is clicked");
})

console.log("I am the end");




//fetch:

console.log("start the operation");

fetch("https://api.github.com/users").then(()=>{
    console.log("Git Hub user info");
})
console.log("end of operation");
