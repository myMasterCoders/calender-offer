
const btn=document.querySelector(".btn");
const day=document.querySelector("#day");
const hours=document.querySelector("#hours");
const minute=document.querySelector("#minute");
const second=document.querySelector("#seconds");

btn.addEventListener("click",(e)=>{

    setInterval(()=>{


    const history1=new Date("May 04 , 2022").getTime();
    const history2=new Date().getTime();
    const total=history1 - history2;

    const days=Math.floor(total/(1000*60*60*24));
    const hours1=Math.floor((total%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((total%(1000*60*60))/(1000*60));
    const seconds=Math.floor((total%(1000*60))/(1000));

    day.innerHTML=`${days} <br/>  روز`;
    hours.innerHTML=`${hours1} <br/> ساعت`;
    minute.innerHTML=`${minutes} <br/> دقیقه`;
    second.innerHTML=`${seconds} <br/> ثانیه`;
    },1000)
})