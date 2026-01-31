
// const element=React.createElement('h1',{id:'title'},"hello coder Army");
// const element2=React.createElement('div',null,React.createElement('h1',null,"hello"),React.createElement('h1',null,"hello"),React.createElement('h2',null,"hii"));



//JSX:javascript XML:look like hTML:
//JSX->React.createElement()->React Element(JS Object)->Real DOM(HTML ELEMENT)
//babel                   //React                   //ReactDDOM


//<h1 id="title">Hello coder Army</h1>;-->>React.createElement() -->React Element(JS Object)-->Real DOM(HTML ELEMENT)

// const element=<h1 id="title" className="first">Hello coder Army</h1>;


// close ()->rule in jsx:
// const element2=(<div>
//     <h1>herll</h1>
//     <h2>hii</h2>
// </div>);



//Below is the jsx execution:
// React.createElement('div',null,React.createElement("h1",null,"hello coder army"),React.createElement("h2",null,"kaise ho")); ->this indicated the how the element is create in backend
// const element3 = (
//     <div>
//         <h1>Hello coder army</h1>
//         <h2>kaise ho..</h2>
//     </div>
// )

//React component: nothing but function

// function App(name){
//     return(
//         <h1>Hello Coder Army {name}</h1>
//     );
// }

// // const a=<App/>
//text/element:javascript ka expression aap iske andar likh sakte hain!
//Number,string,true false,null,undefined,array,object->ko nahi dikhayega

//number ,string,array
//true,false,null,undefined(render honge lekin kutch dispaly nahi hoga)
//object:Error
// const a=App("Rohit");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello Coder Army</h1>);
// //  root.render(App());
//  root.render(<App/>);
//  root.render(a);



// const age=10;
// const isLoggedIn=true;
// const element=<h1>Hello world{isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

//React.createElement("ul",null,[React.createElement("ul",null,<li>HTML <li/>),React.createElement("ul",null,<li>CSS<li/>),])

// const courses=["HTML","CSS","Javascript","React"];
// const element=(
//     <ul>
//         {courses.map(course=><li>{course}</li>)}
//     </ul>
// )

// const element=<h1 id="title" className="first">Hello Coder Army</h1>


//  {
//     name:"Rohit",
//     age:30
//  }

// const ab={backgroundColor:"orange",color:"white"}
// const element=<App name="Rohit" age={30} style={{backgroundColor:"orange"}}></App>

// const element=<h1>Hello coder {age}</h1>

 
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// function Header({name}){
//     return(
//         <h1>{name} Welcome to indian election commision</h1>
//     )
// }
// const props={
//     name:"Rohit"
// }

// const {name}=props;


// function Main({user}){
//     return(
//         <>
//         <h2>Hi {user.name}</h2>
//         <h3>{user.age>18?"You are eligible for vote":"your are not eligible for vote"}</h3>
//         <p>Your city is {user.city}</p>
//         </>
//     )

// }

// function Footer(){
//     return(
//         <h3>Thanks for visting website</h3>
//     )
// }


// function App(){
//     return(
//         // <></>->this is the fragment
//         <>
//             <Header name={"rohit"}/>
//             <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}/>
//             <Footer/>
//         </>
//     )
// }


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);


//Revison Notes:

// 📝 React + JSX + Babel — Complete Notes (From Your Code)
// 1️⃣ React.createElement vs JSX
// Without JSX:
// React.createElement('h1', {id:'title'}, "hello coder Army");

// With JSX:
// <h1 id="title">Hello coder Army</h1>

// Flow (IMPORTANT):
// JSX 
//  ↓ (Babel)
// React.createElement() 
//  ↓
// React Element (JS Object)
//  ↓
// Real DOM (HTML Element)


// 👉 JSX directly browser nahi samajhta
// 👉 Babel JSX ko React.createElement mein convert karta hai

// 2️⃣ JSX Rules
// ✅ Must wrap in one parent (or Fragment)
// <>
//   <h1>Hello</h1>
//   <h2>Hi</h2>
// </>

// ❌ This is invalid:
// <h1>Hello</h1>
// <h2>Hi</h2>

// 3️⃣ React Fragment (<> </>)

// Fragment ka use extra div add kiye bina multiple elements return karne ke liye hota hai:

// <>
//   <Header />
//   <Main />
//   <Footer />
// </>

// 4️⃣ React Components = Functions
// Functional Component:
// function Header({ name }) {
//   return <h1>{name} Welcome to indian election commision</h1>;
// }


// 👉 React component = Normal JS function that returns JSX

// 5️⃣ Props in React

// Props ka use data pass karne ke liye hota hai.

// Passing props:
// <Header name={"rohit"} />

// Receiving props (Destructuring):
// function Header({ name }) {
//   return <h1>{name} Welcome...</h1>;
// }

// 6️⃣ Passing Objects as Props
// <Main user={{ name:"Rohit", age:30, city:"Kotdwar" }} />

// Accessing object props:
// function Main({ user }) {
//   return (
//     <>
//       <h2>Hi {user.name}</h2>
//       <p>Your city is {user.city}</p>
//     </>
//   );
// }

// 7️⃣ Conditional Rendering (VERY IMPORTANT 🔥)
// <h3>
//   {user.age > 18 
//     ? "You are eligible for vote" 
//     : "your are not eligible for vote"}
// </h3>


// 👉 React mein condition dikhane ke liye:

// Ternary operator ? :

// Logical AND &&

// 8️⃣ Rendering Lists using map()
// const courses = ["HTML","CSS","Javascript","React"];

// const element = (
//   <ul>
//     {courses.map(course => <li>{course}</li>)}
//   </ul>
// );


// 👉 React mein array ko render karne ke liye map() use hota hai

// (Interview Tip: har <li> mein key dena chahiye)

// 9️⃣ JSX Expressions { }

// JSX ke andar tum JS expressions likh sakte ho:

// Allowed:

// Number

// String

// Array

// Not directly shown:

// true, false, null, undefined (render honge but show nahi hoga)

// Object ❌ (Error)

// Example:

// <h1>Hello {age}</h1>

// 🔟 Styling in JSX

// Inline style object ke form mein hota hai:

// const ab = { backgroundColor:"orange", color:"white" };

// <App style={{ backgroundColor:"orange" }} />

// 1️⃣1️⃣ ReactDOM.createRoot & render()
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// 👉 React app ko real DOM mein mount karne ke liye

// 1️⃣2️⃣ Complete Component Structure (Your App)
// App
//  ├── Header
//  ├── Main
//  └── Footer

// App Component:
// function App(){
//   return (
//     <>
//       <Header name={"rohit"} />
//       <Main user={{name:"Rohit", age:30, city:"Kotdwar"}} />
//       <Footer />
//     </>
//   );
// }

// 1️⃣3️⃣ Role of Babel (From Your Code)

// Babel:

// JSX → React.createElement()

// Modern JS → Old JS

// Browser compatibility

// One-line Interview Summary 🔑

// JSX is converted by Babel into React.createElement which creates React Elements (JS Objects) that are finally rendered into the Real DOM.