// ============================================
// Portfolio Script
// Apple + Vercel Inspired
// ============================================


// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

    }

});


// ===========================
// CUSTOM CURSOR
// ===========================

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    if(cursorDot){
        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";
    }

    if(cursorOutline){

        cursorOutline.animate({

            left:e.clientX+"px",
            top:e.clientY+"px"

        },{

            duration:250,
            fill:"forwards"

        });

    }

});


// Grow cursor on hover

document.querySelectorAll("a, button").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(cursorOutline){

            cursorOutline.style.transform="translate(-50%,-50%) scale(1.8)";

        }

    });

    item.addEventListener("mouseleave",()=>{

        if(cursorOutline){

            cursorOutline.style.transform="translate(-50%,-50%) scale(1)";

        }

    });

});




// ===========================
// NAVBAR SCROLL
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});




// ===========================
// SCROLL REVEAL
// ===========================

const revealElements=document.querySelectorAll(

".hero,.tech,.about,.projects,.contact,.footer,.project,.about-box"

);

const reveal=()=>{

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        const visible=window.innerHeight-100;

        if(top<visible){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();




// ===========================
// BACK TO TOP
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>450){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}




// ===========================
// ACTIVE NAV LINK
// ===========================

const navLinks=document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});




// ===========================
// MOBILE MENU
// ===========================

const menu=document.querySelector(".menu");

const nav=document.querySelector(".navbar ul");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("open");

});

}




// ===========================
// PAGE TRANSITION
// ===========================

const transition=document.querySelector(".page-transition");

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(

href &&

!href.startsWith("#") &&

!href.startsWith("mailto")

){

link.addEventListener("click",(e)=>{

e.preventDefault();

transition.classList.add("active");

setTimeout(()=>{

window.location=href;

},400);

});

}

});




// ===========================
// RIPPLE BUTTON EFFECT
// ===========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.classList.add("ripple");

button.appendChild(ripple);

const x=e.clientX-button.offsetLeft;

const y=e.clientY-button.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});




// ===========================
// HERO PARALLAX
// ===========================

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

});




// ===========================
// FLOATING CARDS
// ===========================

const cards=document.querySelectorAll(".floating-card");

cards.forEach((card,index)=>{

setInterval(()=>{

card.style.transform=

`translateY(${Math.sin(Date.now()/700+index)*12}px)`;

},20);

});




// ===========================
// TYPING EFFECT
// ===========================

const heading=document.querySelector(".hero h1 span");

if(heading){

const text=heading.innerText;

heading.innerText="";

let i=0;

function typing(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,120);

}

}

typing();

}




// ===========================
// PROJECT HOVER
// ===========================

document.querySelectorAll(".project").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(99,102,241,.25),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.06)";

});

});




// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(

"%cWelcome to Ankita Portfolio 🚀",

"color:#06B6D4;font-size:20px;font-weight:bold;"

);

console.log(

"%cDesigned using HTML CSS JS + Spring Boot",

"color:#8B5CF6;font-size:14px;"

);