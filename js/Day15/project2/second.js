const parent=document.getElementById('parent');


parent.addEventListener('click',(e)=>{
     console.log(e.target);
     const Child=e.target;
    const body= document.querySelector('body');
    body.style.backgroundColor=Child.id;
})