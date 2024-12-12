console.log("ITS WORKING!");

function resetContent() {
    const content = document.getElementById('content')
    content.innerHTML = '';
}

import "./styles.css";
import { homeButton, menuButton, contactButton } from "./tablogic.js";
import { loadHomepage, loadMenuPage, loadContactPage } from "./homepage.js";
//default
loadHomepage();
homeButton.addEventListener('click', () => {
    resetContent();
    loadHomepage();
})

menuButton.addEventListener('click', () => {
    resetContent();
    loadMenuPage();
})

contactButton.addEventListener('click', () => {
    resetContent();
   loadContactPage();
})