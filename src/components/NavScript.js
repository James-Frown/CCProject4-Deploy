import '../App.css'
import NewNavigation from './NewNavigation.jsx';

/*

const Hamburger = document.querySelector(".Hamburger");
const NavMenu = document.querySelector(".Nav__Menu");

*/

const Hamburger = NewNavigation.querySelector(".Hamburger");
const NavMenu = NewNavigation.querySelector(".Nav__Menu");

Hamburger.addEventListener("click", () => {
    Hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");
})