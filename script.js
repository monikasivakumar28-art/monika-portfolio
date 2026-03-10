/* Always open Home section */

window.onload = function () {
window.scrollTo(0,0)
}



/* Typing Animation */

const text = "HR Assistant | Python Developer | Web Enthusiast"

let index = 0

function typeEffect(){

const typing = document.querySelector(".typing")

if(index < text.length){

typing.textContent += text.charAt(index)

index++

setTimeout(typeEffect,70)

}

}

typeEffect()



/* Scroll Reveal Animation */

function reveal(){

let reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top
let visible = 120

if(elementTop < windowHeight - visible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll",reveal)



/* Navbar Active Highlight */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".navbar ul li a")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(section => {

const sectionTop = section.offsetTop

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id")

}

})

navLinks.forEach(link => {

link.classList.remove("active")

if(link.getAttribute("href") === "#" + current){

link.classList.add("active")

}

})

})



/* Resume Download Button Animation */

const resumeBtn = document.querySelector(".resume-btn")

if(resumeBtn){

resumeBtn.addEventListener("click",function(){

this.innerText="Downloading..."

setTimeout(()=>{
this.innerText="⬇ Download Resume"
},2000)

})

}



/* Particles Background */

particlesJS("particles-js",{

particles:{

number:{
value:60
},

size:{
value:3
},

move:{
speed:1.5
},

line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.4,
width:1
}

},

interactivity:{

events:{
onhover:{
enable:true,
mode:"repulse"
}
},

modes:{
repulse:{
distance:100
}
}

}

})
