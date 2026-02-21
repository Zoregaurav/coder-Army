import React from "react"

const Post=React.memo(({value})=>{
    console.log("Post render");
    return (
        <>
         <h1>Your name is {value.name}Rohit and age is {value.age} </h1>

        </>
    )
})


export default Post;
