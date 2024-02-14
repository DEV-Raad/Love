const noBtn = document.querySelector(".noBtn");
noBtn.addEventListener("click",(e)=>{
    const body = document.querySelector(".love_continar")
    const X = Math.random()*(body.clientWidth /2);
    const Y = Math.random()*(body.clientWidth );
    noBtn.animate({
        left: `${X}px`,
        top: `${Y}px`
    },{duration:300 , fill:"forwards"})
    
});
noBtn.addEventListener("mouseenter",()=>{
    const body = document.querySelector(".love_continar")
    const X = Math.random()*(body.clientWidth /2);
    const Y = Math.random()*(body.clientWidth/1.5);
    noBtn.animate({
        left: `${X}px`,
        top: `${Y}px`
    },{duration:300 , fill:"forwards"})
});


const yesBtn = document.getElementById("heart");
yesBtn.addEventListener("click",()=>{
    const bgLove = document.querySelector(".love_continar");
    const loveContent = document.querySelector(".love_contnet");
    const qustion = document.querySelector(".qustion h1");
    qustion.innerText = "We will be together forever 😊"
    bgLove.style.background= "url(https://media1.tenor.com/m/WH5EiJnxFxQAAAAC/kiss.gif)";
    bgLove.style.backgroundSize = "150px";
    loveContent.classList.add("light")

})