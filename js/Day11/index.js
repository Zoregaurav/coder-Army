//forEach,filter,reducer,map,set

// const arr=[10,20,30,80,90];
// let sum=0;

// arr.forEach((number,index,arr)=>{
//     //  console.log(number,index,arr);
//     sum+=number;
// })
// console.log(sum);



//filter:

// const arr=[10,20,30,80,90];
// //true:select,false:not selected

// const newArr=arr.filter((number)=>number>25);
// console.log(newArr);


//this=[10,20,30,80,90];

// const compare = (number) => number > 25;
// compare(20)

// const arr = [10, 20, 30, 80, 90];
// Array.prototype.filtering = function (compare) {
//     const ans = [];
//     for (let num of this) {
//         if (compare(num)) {
//             ans.push(num);
//         }
//     }
//     return ans;
// }


// const newArr = arr.filtering((num) => num > 25);
// console.log(newArr);

// const a=[80,30,15,31,42,70]
// const answer=a.filtering((num)=>num>25);
// console.log(answer);


//map:

// const arr = [10, 20, 30, 5, 90, 87];

// const newArr = arr.map((num) => num * 2)
// console.log(newArr);

// export const products = [
//   {
//     id: "p1",
//     name: "Fresh Tomatoes",
//     category: "Vegetables",
//     price: 40,
//     unit: "kg",
//     image: "/images/tomato.jpg",
//     stock: 120,
//     rating: 4.5,
//     farmer: "Ramesh Patil",
//     location: "Nashik, Maharashtra",
//     description: "Farm-fresh tomatoes directly sourced from local farmers."
//   },
//   {
//     id: "p2",
//     name: "Organic Potatoes",
//     category: "Vegetables",
//     price: 30,
//     unit: "kg",
//     image: "/images/potato.jpg",
//     stock: 200,
//     rating: 4.3,
//     farmer: "Suresh Jadhav",
//     location: "Pune, Maharashtra",
//     description: "Naturally grown potatoes without harmful chemicals."
//   },
//   {
//     id: "p3",
//     name: "Fresh Onions",
//     category: "Vegetables",
//     price: 35,
//     unit: "kg",
//     image: "/images/onion.jpg",
//     stock: 180,
//     rating: 4.4,
//     farmer: "Mahesh Chavan",
//     location: "Ahmednagar, Maharashtra",
//     description: "High-quality onions with long shelf life."
//   },
//   {
//     id: "p4",
//     name: "Sweet Apples",
//     category: "Fruits",
//     price: 120,
//     unit: "kg",
//     image: "/images/apple.jpg",
//     stock: 90,
//     rating: 4.7,
//     farmer: "Anil Sharma",
//     location: "Shimla, Himachal Pradesh",
//     description: "Juicy and sweet apples freshly harvested from hills."
//   },
//   {
//     id: "p5",
//     name: "Fresh Bananas",
//     category: "Fruits",
//     price: 50,
//     unit: "dozen",
//     image: "/images/banana.jpg",
//     stock: 150,
//     rating: 4.6,
//     farmer: "Kishore Naik",
//     location: "Ratnagiri, Maharashtra",
//     description: "Naturally ripened bananas with rich taste."
//   },
//   {
//     id: "p6",
//     name: "Green Spinach",
//     category: "Leafy Vegetables",
//     price: 20,
//     unit: "bunch",
//     image: "/images/spinach.jpg",
//     stock: 100,
//     rating: 4.2,
//     farmer: "Vijay Pawar",
//     location: "Satara, Maharashtra",
//     description: "Fresh and nutritious spinach harvested daily."
//   },
//   {
//     id: "p7",
//     name: "Alphonso Mango",
//     category: "Fruits",
//     price: 600,
//     unit: "dozen",
//     image: "/images/mango.jpg",
//     stock: 40,
//     rating: 4.9,
//     farmer: "Narayan Kulkarni",
//     location: "Devgad, Maharashtra",
//     description: "Premium Alphonso mangoes known for rich flavor."
//   },
//   {
//     id: "p8",
//     name: "Carrots",
//     category: "Vegetables",
//     price: 45,
//     unit: "kg",
//     image: "/images/carrot.jpg",
//     stock: 130,
//     rating: 4.4,
//     farmer: "Rajesh More",
//     location: "Kolhapur, Maharashtra",
//     description: "Crunchy carrots full of natural sweetness."
//   }
// ];

// const newProduct=products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price ).map((product)=>({name:product.name,price:product.price}));
// console.log(newProduct);


// const ans=products.map((product,index,arr)=>({name:product.name,price:product.price}));
// console.log(ans);

//reduce:

//accumalator=sum->initial zero hota hain...
//[{item:"Bhindi",price:200},{item:"sonpapdi",price:40},{}]

// const totoalPrice=products.reduce((accumulator,currentValue)=>{
//     if(currentValue.stock){

//         return accumulator+currentValue.price;
//     }else{
//         return accumulator;
//     }
// })
// console.log(totoalPrice);


//Data strcuture set->unique value ko stored karna!

// const arr=[10,20,30,40,50,12,10,20,30];

// const s1=new Set(arr);
// console.log(s1);
// s1.add(11);
// console.log(s1);
// console.log(s1.size)


//real-world usec case:
// const email=["ro@gm","ra@gm","mo@gm","ro@gm"];

// const s1=new Set(email);
// console.log(s1);

//comback again in array:


// const uniqueEmail=[...new Set(email)];
// console.log(uniqueEmail);

// const s1=new Set(email);

// for(let num of s1){
//     console.log(num);
// }


//map:->key can be object,array,kuch bhi ho sakti hain....


// const m1=new Map([
//     ["Rohit",40],
//     [2,"Rohit"],
//     [true,11],
//     [[10,30,11],"Mohit"]
// ]);

// // console.log(m1);

// m1.set({name:"Manish",age:20},false);

// // console.log(m1.has("Rohit"));
// // console.log(m1.get("Rohit"));


// for(let [key,value] of m1){
//    console.log(key,value);
// }





