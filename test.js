const spotlight = document.querySelector('#spotlight');
const navbar = document.querySelector("#navbar-container");
const firstSection = document.querySelector("#first-section");
const td = document.querySelector("#td");
const uoft = document.querySelector("#uoft");
const math = document.querySelector("#mathnasium");
const background = document.querySelector("*");

const tl = new TimelineMax();

tl.fromTo(spotlight, 1, {}, {top: "300px", right:"60vw"}, "+= 1")
tl.fromTo(spotlight, 1, {}, {top: "130px", right: "10vw"}, "-= 0.2")
tl.fromTo(spotlight, 1, {}, {top:"140px", right:"13vw"}, "+= 0.4")
tl.fromTo(spotlight, 1, {}, {width:"100%", height: "800px", top: "0", left:"0"}, "+= 0.75")
updateRadius()
tl.fromTo(navbar, 1, {}, {opacity: "1"})
tl.fromTo(firstSection, 1, {}, {height: "330px"}, "-=1");

function updateRadius(){
	for (var i = 49; i > -1; i--) {
		tl.fromTo(spotlight, 0.01, {}, {borderRadius:i + "%"})
	}
}

function revealMessage(i){
	var box = document.getElementsByClassName("internships")[i];
	var hidden = document.getElementsByClassName("hidden-content")[i];
	
	//three things need to be changed (height, visibility and plus minus):
	if(hidden.style.display == "initial"){
		hidden.style.display = "none";
		box.style.height = "130px";
		document.getElementsByClassName("plus-minus")[i].innerHTML = "+";
	}

	else{
		hidden.style.display = "initial";
		box.style.height = "400px";
		document.getElementsByClassName("plus-minus")[i].innerHTML = "-";
	}
}