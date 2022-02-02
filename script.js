const deg = 6;
const sec =  document.querySelector(".seconds");
const min =  document.querySelector(".minutes");
const hrs =  document.querySelector(".hours");

setInterval(()=>{
    let d = new Date();
let hr = d.getHours()*30;
let mn = d.getMinutes()*deg;
let ss = d.getSeconds()*deg;

hrs.style.transform = `rotateZ(${(hr)+(mn/12)}deg)`;
min.style.transform = `rotateZ(${mn}deg)`;
console.log(mn);
sec.style.transform = `rotateZ(${ss}deg)`;


})
