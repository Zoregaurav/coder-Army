//closure and scope,HOF


//Gloal ->Accessible to everyone
//functional ->Accessible only to that function
//Block Level scope->accessible only to that Block
//var->block scope ko respect nahi deta!

// let a=10;
// let b=12;

// if(true){
//     let c=23;
//     console.log(c);
//     console.log(a);
// }


// let global = 30;
// function greet() {
//     let global = 40;
//     // let c = 23;
//     console.log(global);

// }
//   greet();
// console.log(c);
// console.log(greet());



//closure: a function remembers variable from its outer scope even after the outer function has finished executing.

// EXAMPLE OF CLOSURE:
// function createCounter() {
//     let count = 0;
//     function increment() {
//         // console.log("I am increment function");
//         count++;
//         return count;
//     }
//     return increment;
// }

// // console.log(count);
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Jiske andar function ka reference hota hai, us variable ko () ke saath call kar sakte hain.
//count() kaam karta hai kyunki count variable me ek function ka reference stored hota hai.
// counter();


// let balance=500;


// balance-=500;
// balance+="Rohit";
// // console.log(balance);

// let balance = 500;
// //private

// let user = {
//     balance: 500,
//     deposit: function (amount) {
//         if (typeof amount == "number" && amount > 0) {
//             balance += amount;
//             return balance;
//         }
//     },
//     withdraw: function (amount) {
//         if (typeof amount == "number" && amount > 0 && balance >= amount) {
//            balance += amount;
//             return balance;
//         }
//     },
//     getBalance: function () {
//         return balance;
//     }
// }
// user.balance = "Rohit";
// console.log(user.getBalance());
// user.deposite(200);
// console.log(user.deposit(200));


// function createBankAccount() {
//     let balance = 500;
//     //private
//     const user = {
//         deposit: function (amount) {
//             if (typeof amount == "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount == "number" && amount > 0 && balance >= amount) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }
//     }
//   return user;  
// }



// const customer=createBankAccount();
// console.log(customer.balance);


//Higher order function: simillar to callback()


function double(value){
    return  function execute(num){
         return num*value;
      }
}

// const n=double(20)(5);
const n=x(5);
console.log(n);

