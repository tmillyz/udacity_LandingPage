/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');
let positions = [];

for (let i = 0; i < sections.length; i++) {
    let pos = sections[i].getBoundingClientRect().top + window.scrollY;
    //console.log("Postion:" + pos);
    positions[i] = pos;
    if (i + 1 == sections.length) {
        let body = document.body;
        let html = document.documentElement;
        
        let totalPageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        positions[i + 1] = totalPageHeight;
    }
}
console.log(positions);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNav() {
    let navUl = document.getElementById('navbar__list');
    for (let i = 0; i < sections.length; i++) {
        let currentSectionId = sections[i].id;
        let currentSectionName = sections[i].getAttribute('data-nav');
        let eachLi = document.createElement("li");
        eachLi.innerHTML = currentSectionName;
        eachLi.setAttribute("data-id", currentSectionId);
        eachLi.classList.add("nav-item");
        navUl.appendChild(eachLi);
        //add an event listener to listen for a click of the li elements
        eachLi.addEventListener("click", function (event) {
            event.preventDefault();
            event.target.classList.add('active');
            let sectId = event.target.getAttribute("data-id");
            //console.log(sectId); 
            let scrollTarget = document.getElementById(sectId);

            window.scroll ({
                top: scrollTarget.offsetTop,
                behavior: 'smooth'
            })

          })
        eachLi.style.color='black';
        eachLi.style.paddingRight='10px';
    }
}
//Scroll to anchor ID using the scrollTo event
function handleScroll() {
    let eachLis = document.querySelectorAll('.nav-item');
    
    for(let p = 0; p < positions.length; p++) {
        let firstSection = positions[p];
        let secondSection = positions[p + 1];
        let position = window.pageYOffset; //get the current position
        if (firstSection <= postion && secondSection >= positions) {
            eachLis[p].classList.add('active'); //add to the current element
            sections[p].classList.add('active-section'); //add active to the current section
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport





/**
 * End Main Functions
 * Begin Events
 * 
*/




