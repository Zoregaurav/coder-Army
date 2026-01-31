//Prototype and classes in javascript:


// const obj={
//     name:"Rohit",
//     age:38,
//     greet:function(){
//         console.log("Hello Ji");
//     }
// };

// console.log(obj.name);
// console.log(obj.hasOwnProperty("names"));
//console.log(obj.toString());

// const arr=[10,20,30];

// console.log(arr);

// const obj2={
//     account:30
// }
// console.log(obj2.name);

// obj2.__proto__=obj;
// console.log(obj.hasOwnProperty("name"));




//classes:

// const obj = {
//     name: "Rohit",
//     age: 30,
//     greet: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }


// const obj2 = {
//     name: "Mohan",
//     age: 30,
//     greet: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }


// const obj3 = {
//     name: "Bob",
//     age: 30,
//     greet: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }



// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }

// const person1=new Person("Rohit",21);
// const person2=new Person("Gaurav",22);



//console.log(person1.name);
//console.log(person1.sayHi());
//console.log(person2.sayHi());
// console.log(person1);

// const obj={
//     name:"Mohan",
//     age:20,
//     greet:function(){

//     }
// };
// console.log(obj);


// class Customer extends Person{
//     constructor(name,age,account,balance){
//          super(name,age);
//          this.account=account;
//          this.balance=balance;
//     }
//     checkBalance(){
//         return this.balance;
//     }
   
// }
  
// const c1=new Customer("Mohan",22,12,500);
// console.log(c1.name);
// console.log(c1.sayHi());
// console.log(c1.checkBalance());


// const obj={
//     name:"Rohit",
//     age:20
// }

// const obj2=Object.create(obj);
// obj2.account=10;

// console.log(obj2.name);
// console.log(obj2.account);