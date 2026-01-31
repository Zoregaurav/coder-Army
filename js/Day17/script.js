//Callback Hell:

const orderDetails={
    orderId:1231123,
    food:["Pizza","biryani","coke"],
    cost:620,
    customer_name:"Rohit",
    customer_location:"Dwarka",
    restaurant_location:"Delhi"
}

//zomato application:
function placeOrder(orderDetails,Callback){
    console.log(`${orderDetails.cost} payment is in progress`);
    setTimeout(()=>{
        console.log("payment is received and order get placed");
        orderDetails.status=true;
        Callback(orderDetails);
    },3000);
}

function preparingOrder(orderDetails,Callback){
     console.log(`Your food preparation started of ${orderDetails.food}`);

     setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetails.token=123;
        Callback(orderDetails);
     },3000);
}

function pickupOrder(orderDetails,Callback){
      console.log(`Delivery boy is on way to pickup order from ${orderDetails.restaurant_location}`);
      setTimeout(()=>{
        console.log("I have the pickup the order");
        orderDetails.received=true;
        Callback(orderDetails);
      },3000);
}

function deliverOrder(orderDetails){
    console.log(`I am on my way to deliver order ${orderDetails.customer_location}`);
    setTimeout(()=>{
        console.log("order delivered successfully");
        orderDetails.delivery=true;
    },3000)
}



// const Callback=()=>{
//     preparingOrder();

// }
// placeOrder(orderDetails,()=>{
//     preparingOrder();
// })




// placeOrder(preparingOrder(pickupOrder));->wrong


placeOrder(orderDetails,(orderDetails)=>{
    preparingOrder(orderDetails,(orderDetails)=>{
        pickupOrder(orderDetails,(orderDetails)=>{
            deliverOrder(orderDetails)
        });
    });
});


// const Callback=()=>{
//     preparingOrder(()=>{
//         pickupOrder();
//     });
// }





