//Object:
//key value:structure way main store karta hain info ko 

//create
// const user={
//      name:"Gaurav",
//      age:21,
//      marks:89,
//      emailId:"negi@gmail.com",
//      "home address":"dwarka"

// }
//read
// console.log( user.age);
// console.log(user);
//CRUD operaion:create read update delete:

//Update:
// user.aadhar=1234;
// user.amount=5000;
// console.log(user);

//delete:
// delete user.emailId;
// console.log(user);

// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);


// const user={
//      name:"Gaurav",
//      age:21,
//      marks:89,
//      emailId:"negi@gmail.com",
//      "home address":"dwarka"

// }

// const user2=user;
// user2.age=90;

// console.log(user);
// console.log(Object.keys(user));

//important:

//  console.log(Object.keys(user));
//  console.log(Object.values(user));
//  console.log(Object.entries(user));

// for(let keys in user){

//      console.log(keys,user[keys]);
// }

// const user={
//      name:"Gaurav",
//      age:21,
//      marks:89,
//      emailId:"negi@gmail.com",
//      "home address":"dwarka"

// }

// const name=user.name;
// const age =user.age;

//Object ko destructuring karna

// const {name:userName,age:userAge}=user;  
// console.log(name,age);
// console.log(userName,userAge);


//Array ki destructuring ki bhi kar sakte hain!
// const arr=[10,20,40,90,11];
// const [first,second]=arr;
// console.log(first,second);



// const user={
//      name:"Gaurav",
//      age:21,
//      marks:89,
//      emailId:"negi@gmail.com",
//      "home address":"dwarka"

// }


//for of loop array ke:

// const tempparr=Object.keys(user);
// console.log(tempparr);

// for(let keys of tempparr){
//      console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }


//  console.log(Object.entries(user));


//  //yaha pe destructring ki hain!
// for(let [keys,values] of Object.entries(user)){
//      console.log(keys,values);
// }


// const user = {
//      name: "Rohit",
//      age: 20,
//      emailId: "negi@gmail.com",
//      amount: 3400,
//      greeting: function () {
//           console.log(`strike is coming on 18th octomber ${this.name}`);  //->this->keyword 
//           return 20;
//      }
// }
// const va = user.greeting();
// console.log(va);

// const user2 = {
//      name: "Mohan",
//      account: 201,
//      greeting: function () {
//           console.log(`strike is coming on 18th octomber ${this.name}`);  //->this->keyword 
//           return 20;
//      }
// }
// user2.greeting();
// user2.greeting = user.greeting;

// console.log(user2);


// const user={
//      name:"Rohit",
//      age:20,
//      emailId:"negi@gmail.com",
//      amount:3400,
//      address:{
//           city:"Kotdwar",
//           state:"Uttarkhand"
//      }
// }
// console.log(user.address.city);

//shallow copy:->neasted object ko handle nahi kar sakta ye..

// const user2={...user};
// user2.address.city="Dwarka";
// console.log(user);

// user2.name="Mohan";
// console.log(user2);

//deep copy:->neasted ko bhi handle karta hain....
// const user2=structuredClone(user);
// user2.address.city="Dwarka";
// console.log(user);
// console.log(user2);




//  const user={
//    name:"Rohit",
//    age:20,
//    "0":100,
//    2:"Mohan"

//  }


//  const arr=[10,20,30,40];
//  {
//      0:10,
//      1:20,
//      2:30,
//      3:40,
//  }


//KEY:String || Symbol

const sym=Symbol("id");
const user={
     name:"Rohit",
     age:20,
     0:100,
     2:"Mohan",
     [sym]:"Hello Ji"
}

const arr=[10,20,30,40];
console.log(user[sym]);


   

