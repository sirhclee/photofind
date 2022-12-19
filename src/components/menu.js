//import wario from "./wario.jpg";


const menu = function(){
    const divContent = document.getElementById("content");
    divContent.style.backgroundColor = "gold";

    const header = document.createElement('div');
    header.textContent = "Here the prices:"; 


    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = '200px 150px'; // Repeat for col
    container.style.gridTemplateRows = "25px";
    container.style.border = '2px solid black';
    container.style.gap = '5px';
    container.style.alignItems='center';
    container.style.justifyContent="center";
    container.style.padding = '5px';

    let menuList = ['Garlic Chicken', 'Garlic Beef', 'Garlic Mushrooms', 'Garlic', 'Garlic Garlic']
    let prices = ['$59.99', '$69.99', '$29.99', '$19.99', '$29.99']
    for (let num=0; num<5; num++ ){ //Number buttons
        let cell = document.createElement("div"); //creates new div element for each cell (numbers)
        cell.textContent = menuList[num]; 
        cell.style.display='flex';
        cell.style.justifyContent='center';
        container.appendChild(cell).className = "div";

        let cost = document.createElement("div");
        cost.textContent = prices[num]; 
        cost.style.display='flex';
        cost.style.justifyContent='center';
        container.appendChild(cost).className = "div";
    }
    
    divContent.appendChild(container);
       
    // const warioImg = new Image();
    // warioImg.src = wario; 
    // warioImg.style.width ='300px';
    // warioImg.style.display = 'block';
    // warioImg.style.margin = 'auto';
    // divContent.appendChild(warioImg);



}

export default menu; 