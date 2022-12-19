import {initializeApp } from 'firebase/app'; 
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite'; 
import level1 from "./components/level1.js"


const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
//

var level1Obj = new level1(); 
document.addEventListener('DOMContentLoaded', level1Obj.loadHeader()); 

//Start Button// 
const divContent = document.getElementById("content");  
var startButton = document.createElement("button");
startButton.textContent = 'Start game!';
startButton.style.fontSize = '20px';
startButton.style.marginLeft = '370px';

startButton.addEventListener('click', function(e){
    level1Obj.initialLoad(); 
    level1Obj.timer();     
    startButton.remove();
});


divContent.appendChild(startButton); 


//var level1Obj = new level1(); 
//document.addEventListener('DOMContentLoaded', level1Obj.initialLoad())





