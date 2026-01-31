//CRUD operation in dom:

// console.log("hello js");

// const newElement=document.createElement('h2');
// console.log(newElement);


// newElement.textContent="Strike is coming";
// newElement.id="second";
// console.log(newElement);

//select element:

// const element=document.getElementById("first");
// // element.after(newElement);
// // element.before(newElement);


//  const newElement2=document.createElement("h3");
//  newElement2.textContent="Hello world";
//  newElement2.id="third";

// //  console.log(newElement2);

//  newElement2.className="diwali";
// //  newElement2.className="holi";
// //  newElement2.className+=" holi";

// newElement2.classList.add("diwali");
// newElement2.classList.add("Holi");
// newElement2.classList.remove("diwali");

// newElement2.style.background="pink";
// newElement2.style.fontSize="20px";
// newElement2.setAttribute("hello","ji");

// element.before(newElement2);

// console.log(newElement2);


//  const list=document.createElement("li");
//  list.textContent="Milk";

//  const list2=document.createElement("li");
//  list2.textContent="Cake";

 
//  const list3=document.createElement("li");
//  list3.textContent="Halwa";

//   const list4=document.createElement("li");
//  list4.textContent="Panner";


// const unorderElement=document.getElementById("listing");

// unorderElement.append(list);
// unorderElement.append(list2);    //ending main jayega..
// unorderElement.prepend(list3);    //starting main jayega...


// // list.after(list4)

// unorderElement.children[1].after(list4);


const arr=["milk","halwa","cake"];

const unorderElement=document.getElementById("listing");
const fragment=document.createDocumentFragment();

//array:

// for(let food of arr){
//     // console.log(food);
//     const list=document.createElement("li");
//     list.textContent=food;
//     // unorderElement.append(list);
//     fragment.append(list);
// }

// unorderElement.append(fragment);


// const s1=document.getElementById("first");
// s1.remove();

//  const unorderElement=document.getElementById("listing");

// console.log(month.children); ->ye ek better practices hain
//  console.log(month.childNodes)->nodelist reaturn karta hain


//old method:

const month=document.getElementById("ten");


const lister=document.createElement("li");
// lister.textContent="help";
lister.textContent="<h2>Help</h2>";

// month.insertAdjacentElement("beforebegin",lister);
month.prepend(lister);

// lister.innerHTML="Help";
// lister.innerHTML="<h2>Help</h2>";


//diff between innerHTML and innerContent:                                                                                                                                                                                                                                                             
//lister.innerHTML="IMg"; ->ye image leke ayega server se
//lister.innerContent="img link" ->ye link ko dikhayega 






