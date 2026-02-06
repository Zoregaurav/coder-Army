
let count=0;

function render(){
    document.getElementById('root').innerHTML=`
    <p>This is the counter for react App</p>
    <h1>Counter:${count}</h1>
    <button onClick="increment()">increment</button>
    <button onClick="decrement()">decrement</button>
    `;
}


function increment(){
    count++;
    render();
}

function decrement(){
    count--;
    render();
}

render();