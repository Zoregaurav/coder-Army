// attributes={
//     className:"element",
//     id:"first",
// style:{fontSize:"20px",backgroundColor:"pink",color:"green"}
// }

// element={
//     tag:"h1",
//     textContent:"hello coder Army",
//     className:"element",
//     id:"first",
// style:{fontSize:"20px",backgroundColor:"pink",color:"green"}
// }


//create a h1 element using js:
//  function createElement(tag,attributes,childern){

//    const element= document.createElement(tag);
//    element.textContent=childern;

//    for(const key in attributes){
//     if(key=="style"){
//         Object.assign(element.style,attributes.style);
//     }
//     else{

//         element[key]=attributes[key];
//     }
//    }
     
//    return element;
//  } 

//   const element1=createElement("h1",{className:"element",id:"first",style:{fontSize:"40px",backgroundColor:"pink",color:"green"}},"hello coder army");
//   const element2=createElement("h1",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"strike is cominng");

// const element1=document.createElement("h1");
// element1.textContent="hello coder army";
// element1.className="element";
// element1.id="first";
// element1.style.fontSize="30px";
// element1.style.background="orange";
// element1.style.color="white";


// const element2=document.createElement("h2");
// element2.textContent="strike is coming";
// element2.className="element";
// element2.id="second";
// element2.style.fontSize="20px";
// element2.style.background="pink";
// element2.style.color="green";


//custom React:
// const React={

//    createElement:function(tag,attributes,childern){
//       const element= document.createElement(tag);
//       element.textContent=childern;
//       for(const key in attributes){
//        if(key=="style"){
//            Object.assign(element.style,attributes.style);
//        }
//        else{
//            element[key]=attributes[key];
//        }
//       }
//       return element;
//     } 
// }

// const ReactDOM={
//     render:function(child,parent){
//         parent.append(child);
//     }
// }

const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"40px",backgroundColor:"pink",color:"green"}},"hello coder army");
console.log(element1);
// const root=document.getElementById('root');
// root.append(element1);
//better version in react for append the child:

// ReactDOM.render(element1,root);

const div=React.createElement('div',null,element1,element2);
console.log(div);


// main container to render react element:
const root=ReactDOM.createElement(document.getElementById('root'));

root.render(div);


//original react:
const React={
    createElement:function(type,props,childern){
        return{
            type:type,
             props:{
                 ...props,
                 childern:childern  
            } 
        }
    }
}


 const reactElement={
    type:'h1',
    props:{
       className:"element",
       id:"first",
       style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
       childern:"hello coder army"
    }
}

const ReactDOM={
    render:function(reactElement,root){
        root.innerHTML="";
     const element=document.createElement(reactElement.type);
     const {props}=reactElement;

     for(const key in props){
        if(key==="style"){
            Object.assign(element.style.props.style);
        }
        else if(key==="childern"){
            element.textContent=props[key];
        }else{
            element[key]=props[key];
        }
     }
      root.apped(element); 
    }
}