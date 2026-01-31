//async await:
//aync function always return a promise:


// async function greet(){
//     return "Rohit";
// }

// const response=greet();
// console.log(response);


// fetch ("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));


// const response=await fetch("https://api.github.com/users");
// const data=response.json();
// console.log(data);


// async function github() {

//    try{
//     console.log("Hello world")

//     const response = await fetch("https://api.github.com/users");

//     if(!response.ok){
//         throw new Error("Data is not present");
//     }
    
//     const data =await response.json();
//     console.log(data);

//     const parent=document.getElementById("first");

//     for(let  user of data){
//        const element= document.createElement("div");
//        element.classList.add("user");

//       const image=document.createElement('img');
//       image.src=user.avatar_url;

//       const userName=document.createElement("h2");
//       userName.textContent=user.login;


//      const anchor=document.createElement('a');
//      anchor.href=user.html_url;
//      anchor.textContent="Visit Profile";

//      element.append(image,userName,anchor);
//      parent.append(element);

//     }

//    }catch(error){
//         console.log("error");
//    }

  

// }

// github();


// const orderDetails = {
//     orderId: 1231123,
//     food: ["Pizza", "biryani", "coke"],
//     cost: 620,
//     customer_name: "Rohit",
//     customer_location: "Dwarka",
//     restaurant_location: "Delhi"
// }

// function placeOrder(orderDetails) {
//     console.log(`${orderDetails.cost} payment is in progress`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if(Math.random()>0.1){
//             console.log("payment is received and order get placed");
//             orderDetails.status = true;
//             resolve(orderDetails);
//          }else{
//               reject("Payment is failed");
//          }
        
//         }, 3000);

//     })

// }


// function preparingOrder(orderDetails) {
//     console.log(`Your food preparation started of ${orderDetails.food}`);
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if(Math.random()>0.05){
//                  console.log("Your order is now prepared");
//                    orderDetails.token = 123;
//                    resolve(orderDetails);
//             }else{
//                 reject("Food item is not present at restarant");
//             }
//         }, 3000);
//     })
// }


// function pickupOrder(orderDetails) {
//     console.log(`Delivery boy is on way to pickup order from ${orderDetails.restaurant_location}`);

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if(Math.random()>0.05){
//             console.log("I have  pickup the order");
//             orderDetails.received = true;
//             resolve(orderDetails);
//          }
//          else{
//             reject("Delivery boy Unable to reach restaurant");
//          }
//         }, 3000);
//     })

// }


// function deliverOrder(orderDetails) {
//     console.log(`I am on my way to deliver order ${orderDetails.customer_location}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("order delivered successfully");
//             orderDetails.delivery = true;
//             resolve(orderDetails);
//         }, 3000)
//     })

// }


// placeOrder(orderDetails)
//     .then((orderDetails) => preparingOrder(orderDetails))
//     .then((orderDetails) => pickupOrder(orderDetails))
//     .then((orderDetails) => deliverOrder(orderDetails))
//     .then((orderDetails)=>{
//         console.log(orderDetails);
//     })

//     .catch((error)=>{
//         console.log("Error: ",error);
//     })
//     .finally(()=>{
//         console.log("I am doing cleanup");
//     })



//Beeter Approach:


// async function ordering() {
//     try{

//         const response1=await placeOrder(orderDetails);
//         const response2=await preparingOrder(response1);
//         const response3=await pickupOrder(response2);
//         const response4=await deliverOrder(response3);
    
//          console.log(response4);
//     }catch(error){
//         console.log("Error: ",error);
//     }
   


// }

// ordering();


// async function userDetail(params) {
    // const comment=await fetch("userComment");
    // const photos=await fetch("userPhoto");
    // const chat=await fetch("chat");
    
    // const [comment,photos,chat]=await Promise.all([fetch("userComment"),fetch("photos").fetch("chat")]);

// }






