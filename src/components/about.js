import garlic from "./garlic.jpg";


const about = function(){
    const divContent = document.getElementById("content");

    const header = document.createElement('div');
    header.textContent = "Waaat do you want??? It's garlic! Waaaaaa!";
    header.style.textAlign = 'center';
    divContent.appendChild(header)
       
    const garlicImg = new Image();
    garlicImg.src = garlic; 
    garlicImg.style.width ='300px';
    garlicImg.style.display = 'block';
    garlicImg.style.margin = 'auto';
    divContent.appendChild(garlicImg);



}

export default about; 