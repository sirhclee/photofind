import headerDiv from "./components/header.js"
import home from "./components/home.js";
import level1 from "./components/level1.js"

const firstLoad = function() {
    
    const divContent = document.getElementById("content");
    const header = headerDiv();
    header.style.background = 'green';

    divContent.appendChild(header); 
 
    level1.loadImage; 
    //home(); 

}

export default firstLoad;