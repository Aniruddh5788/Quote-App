const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
const button=document.querySelector("button");

const getQuote= async()=>{
   const response= await fetch("https://quotable.io/random")
   const data= await (response.json());
   h1.innerText=data.content;
   h2.innerText=data.author;
};
button.addEventListener("click",getQuote);


setInterval(() => {
    getQuote();
}, 2000);