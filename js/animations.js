

     //  preloader

let preloader=document.querySelector(".preloader");

window.addEventListener('load', (event)=>{
    console.log("all loaded")
    preloader.classList.add("loaded")})
    
    
    // debounce 

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

let bikeFace=document.querySelector(".bikeFront")
let faceContainer=document.getElementById("face-container")
let narrowText=document.getElementById("narrow")
let grandParent=document.getElementById("description")


function check(e){
    let triggerPoint = window.scrollY + window.innerHeight - bikeFace.height/2
    let imageMiddle =  grandParent.offsetTop + faceContainer.offsetTop + narrowText.offsetTop + bikeFace.offsetTop - bikeFace.height/2
     
        console.log(triggerPoint)
        console.log(imageMiddle+"middle")
    
        if (triggerPoint > imageMiddle ){
            console.log("true")
            bikeFace.classList.add("shown")
    }
    }
document.addEventListener("scroll",debounce(check,30))


gsap.set(".motion-bike",{
    transformOrigin:"0% 0%",
    smoothOrigin:true,
})
gsap.to(".motion-bike",{
    ease:"none",
    duration:2.5,
    repeat:-1,
    motionPath:{
        offsetY:-100,
        path:"#path",
        align:"#path",
        autoRotate:true
    }
})
 gsap.to('.color-bikes img',{
     ease:"power2.in",
     scale:1,
     smoothOrigin:true,
     translateX:"random(0,10)",
     duration:0.6,
     yoyo:true,
     repeatRefresh:true,
     repeat:-1,
     stagger:{
         from:"random",
         each :0.25,
        


     }

 })

