 


 //uppercase
//  let str='Hello Coder Army';
//  console.log(str.toUpperCase());
//  console.log(str.toLowerCase());


// console.log(str.indexOf('cod'));
// console.log(str.lastIndexOf('Cod'));

// console.log(str.includes('cod'));

 
//slice:
// console.log(str.slice(2,7));
//console.log(str.slice(3));
// console.log(str.slice(-5,-2));


//  const str='Hello Coder Army coder';

//  console.log(str.substring(2,5));  //->negative index ko mark dawn nahi kar sakte hain!

//  const a="Rohit";
//  const b="Negi";
//  const c=a+" "+b;
//  console.log(c);

// console.log(24+"Rohit"+10);

// console.log(str.replaceAll("ode","iam"));

// console.log(str);


// Trim
// const user=" Rohit Negi ";
// console.log(user.trim());


//split
// const names="Rohit mohit suraj Anjali";

// console.log(names.split(","));
// console.log(names.split(" "));


//Date

// const now=new Date();
// // console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// //local time chal raha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());    //0-based indexing
// console.log(now.getHours());

//year month date hour minute second millisecond

//days:Mon-tue(1 based)
//Month: 0 1


// const now =new Date(2025,12,30,16,30,25,125) ;
// const dates=new Date(now);
// console.log(dates.toString());


//Timestamp:
const now=Date.now(); //->UTC Time
// const dates=new Date(now); //->standard time 
const dates=new Date(-176709862);
// console.log(dates.toString());
// console.log(now);

console.log(dates);
// 1767098623740:TimeStamp




