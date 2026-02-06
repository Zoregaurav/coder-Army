import { useEffect, useState } from "react";
//[<img>]


function App(){
  const [users,setUsers]=useState([]);
  const [name,setName]=useState("");

  const [count,setCount]=useState(30);
  // async function GithubProfile() {
  //   const response=await fetch("https://api.github.com/users");
  //   const data=await response.json(); 
  //    console.log(data);
  //    setUsers(data);
  //    console.log("hello world");
  // }
  // GithubProfile();
   
  useEffect(()=>{
    async function GithubProfile() {
    const response=await fetch(`https://api.github.com/users?per_page=${count}`);
    const data=await response.json(); 
     console.log(data);
     setUsers(data);
     console.log("hello world");
  }
  GithubProfile();
  },[count])   //[]->dependency Array

 function handleChange(e){
    setName(e.target.value.toUpperCase());
 }

  return(
    <> 
    <h1>Github User</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <div style={{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",gap:"10px"}}>
      {
         users.map(user=>(
            <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}></img>
         ))
      }
      </div>
    </>
  )

}

export default App;