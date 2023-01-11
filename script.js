const img=document.querySelectorAll(".panel1");

// img.forEach(i=>{
//     i.addEventListener("mouseover",()=>i.style.flex=5);
//     i.addEventListener("mouseout",()=>i.style.flex=0.5);
// });


img.forEach(i=>{
    i.addEventListener("mouseover",()=>i.classList.add("active"));
    i.addEventListener("mouseout",()=>i.classList.remove("active"));
});
