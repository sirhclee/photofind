import level1 from "./level1.jpg"; 


const home = function(){
    //adds everything to "content" div
    const divContent = document.getElementById("content"); 
    // const header = document.createElement('div');
    // header.style.textAlign = 'center';
    // divContent.appendChild(header)

    
    const levelImg= new Image();
    levelImg.src = level1; 
    levelImg.style.width ='800px';
    levelImg.style.display = 'block';
    levelImg.style.margin = 'auto';
    levelImg.addEventListener('click', function(){
        console.log('asd');
    });

    divContent.appendChild(levelImg);



    //document.getElementById("content").addEventListener('click', console.log('asd')); 


}

export default home; 