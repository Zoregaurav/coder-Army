//Promises in js || JSON VS JS object:

// json->js object notation->universal all language samjati hain!
//js->h=javascript object



//pending,fullfilled,Reject:
//Promise->Object->pending,fullfilled,Reject

// console.log("Hello world start");

//code: -->

// const p1=fetch("https://api.github.com/users");
// console.log(p1);



//fullfilled,reject->

// const p2=p1.then((response)=>{
//     return response.json();
//     // console.log(response);
// })

// p2.then((data)=>{
//     console.log(data);
// })


//Better APProach:


// fetch("https://api.github.com/users").then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })


//Promise chaining:


// fetch("https://api.github.com/users").then((response)=>{
//     // return response.json();
//     console.log(response);

//     if(!response.ok){
//         throw new Error("Data is not present in server");
//     }
//     return response.json();

// }).then((data)=>{
//     // console.log(data);
//    const parent= document.getElementById("first");
//    for(let i=0;i<30;i++){
//    const image=document.createElement('img');
//    image.src= data[i].avatar_url;
//    image.style.height="90px";
//    image.style.width="90px";
//    parent.append(image);
// }
// })
// .catch((error)=>{
//     const parent=document.getElementById("first");
//     parent.textContent=error.message;
// })


// console.log(p2);
// console.log("Hello World End");

//Converion of javascript object to Json:

// const j1={

//     "name":"gaurav",
//      "age":23,
//      "address":"Dwarka",
//        C:undefined
// }

// const jsonFormat=JSON.stringify(j1);
// console.log(jsonFormat);


//ACTUAL JSON FORMAT:

// const jsonFormat=`{
//   "name":"Rohit",
//   "age":30,
//   "address":"dwarka"
// }`;


//java script object:

// const jsObject=JSON.parse(jsonFormat);
// console.log(jsObject);


//jab bhi server respond karega to usko fullfilled ki category main dalega!
//server dawn,internet slow,DNS down toh sidha reject state catch ko call karga and us error jko handle karega!


//Create the New Promise:

//   const p1=new promise((resolve,reject)=>{
//     resolve({
//         name:"Rohit",
//         age:30
//     });
//   })

//   p1.then((response)=>{
//     console.log(response)
//   }).catch((error)=>{
//     console.log(error);
//   })


//zomato application:

const orderDetails = {
    orderId: 1231123,
    food: ["Pizza", "biryani", "coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placeOrder(orderDetails) {
    console.log(`${orderDetails.cost} payment is in progress`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random()>0.1){
            console.log("payment is received and order get placed");
            orderDetails.status = true;
            resolve(orderDetails);
         }else{
              reject("Payment is failed");
         }
        
        }, 3000);

    })

}

function preparingOrder(orderDetails) {
    console.log(`Your food preparation started of ${orderDetails.food}`);
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(Math.random()>0.05){
                 console.log("Your order is now prepared");
                   orderDetails.token = 123;
                   resolve(orderDetails);
            }else{
                reject("Food item is not present at restarant");
            }
        }, 3000);
    })
}

function pickupOrder(orderDetails) {
    console.log(`Delivery boy is on way to pickup order from ${orderDetails.restaurant_location}`);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(Math.random()>0.05){
            console.log("I have  pickup the order");
            orderDetails.received = true;
            resolve(orderDetails);
         }
         else{
            reject("Delivery boy Unable to reach restaurant");
         }
        }, 3000);
    })

}

function deliverOrder(orderDetails) {
    console.log(`I am on my way to deliver order ${orderDetails.customer_location}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order delivered successfully");
            orderDetails.delivery = true;
            resolve(orderDetails);
        }, 3000)
    })

}

placeOrder(orderDetails)
    .then((orderDetails) => preparingOrder(orderDetails))
    .then((orderDetails) => pickupOrder(orderDetails))
    .then((orderDetails) => deliverOrder(orderDetails))
    .then((orderDetails)=>{
        console.log(orderDetails);
    })

    .catch((error)=>{
        console.log("Error: ",error);
    })
    .finally(()=>{
        console.log("I am doing cleanup");
    })

    //finally->real world use case loader ko hatana last mein!
