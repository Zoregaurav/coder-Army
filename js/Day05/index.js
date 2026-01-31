//Array:

// let marks1=100;
// let marks2=50;
// let marks3=30;
// let marks4=20;

// let marks=[100,50,30,20];

// console.log(marks);
// console.log(marks.length);

// let arr=[100,30,"Rohit",true];

// arr[1]=90;
// console.log(arr);

//push
// arr.push(90);
// arr.push("Strike");
// console.log(arr);

//pop operation:delete element from end

// arr.pop();
// console.log(arr);

//starting add kar sakta ju,delete the element at first place

// arr.unshift(10);
// console.log(arr);

//delete kar sakta hu

// arr.shift();
// console.log(arr); 


//non-primitive: copy reference hote hain
//primitive: data copy(copy by value)
// let arr=[10,30,50,90,11];
// let arr2=arr;

// arr.push(30);
// console.log(arr);

//  const  arr=[10,30,50,11,90];
//  arr=[80,90,100]
//  console.log(arr);


//  const  arr=[10,30,50,11,90];
//  arr[2]=30;
//  console.log(arr);

// const  arr=[10,30,50,11,90];
// const arr2=arr.slice(2,4);
// console.log(arr2);

// console.log(arr.splice(1,3));  //splice ->original array mein se trim kiya jata hain!
// const arr3=arr.splice(1,3,"Rohit",19);  //slice->original array same hi rehata hain but array ka tukda return hota hain!
// console.log(arr3);  
// console.log(arr);


// const arr=[10,30,50,90,11];
// const arr2=["Rohit",11,true];
// const arr4=[90,4,false];

// arr.push(arr2);
// const arr3=arr.concat(arr2,arr4);  //return new array
// console.log(arr3);


//spread operator:

// const arr3=[...arr,...arr2,...arr4];
// console.log(arr3);


// const names=["Alice","Bob","Charlie"];

// console.log(names);
// console.log(names.toString());
// const str=names.join("-");
// console.log(str);

// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Charlie"));
// console.log(names.includes("Bobs"));


// names.sort();
// console.log(names);

// names.sort();
// names.reverse();
// console.log(names);



// const a=["101","90","80","32","91"];
// const arr= [10,"Rohit","Mohan",true];

// arr.sort();
// console.log(arr);

// const arr=[10,40,31,71,5,11];

// arr.sort((a,b)=>a-b); //ascending order

// arr.sort((a,b)=>b-a) //decending order


//40,10
// a=10;
// b=40;

//10,31,40
//a=10;
//b=31;

//-ve:pehele a aayega fr b aayayega
//+ve:pehele b aayyega fr a aayega


// const arr=[10,30,50,[40,90,[60,19,99],11],80];
// console.log(arr[3][2][1]);



// const a=arr.flat(2);
// const a=arr.flat(Infinity);
// console.log(a);


// const arr=[10,309,"Rohit",true,9.3];
// arr.name="Mohan";
// console.log(a);






