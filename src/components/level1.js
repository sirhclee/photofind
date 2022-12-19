import level1 from "./level1.jpg"; 
import witch from "./bathory.png"; 
import kobold from "./kobold.png"; 
import choco from "./choco.png"; 


export default class level1Image{
    constructor(){
        this.characters = ['Kobold', 'Bathory', 'Choco'] 
        this.icons = [kobold, witch, choco];      
        this.points = 3;//this.characters.length; 
        this.positions = [ [600, 405, 50, 50], [142, 457, 16, 16], [460, 298, 25, 25] ]
        this.count = 0;
    }
    timer(count=this.count, timerOn = this.timerOn, characters=this.characters){
        const divContent = document.getElementById("content");   
        const countDisplay = document.createElement("counter"); 
        countDisplay.id = 'counter'; 
        countDisplay.textContent = 'Timer: ' + 0; 
        countDisplay.style.position = 'absolute';
        countDisplay.style.padding = '10px';
        countDisplay.style.top = "100px"; 
        countDisplay.style.left = "10px"; 
        countDisplay.style.backgroundColor = 'white';
        countDisplay.style.fontSize = '20px';
        divContent.appendChild(countDisplay); 
        timerOn = setInterval(function() { 
            count+=0.1; 
            document.getElementById('counter').textContent = 'Timer: ' + count.toFixed(1);
            if (characters.every( v => v ==='')
            ){clearInterval(timerOn)
                const winDisplay = document.createElement("winwin"); 
                winDisplay.textContent = 'Your Time is: ' +count.toFixed(1) +'s'; 
                winDisplay.style.position = 'absolute';
                winDisplay.style.top = '200px';
                winDisplay.style.left = '425px'; 
                winDisplay.style.transform = 'translateX(-50%)'; 
                winDisplay.style.fontSize = '26px';
                winDisplay.style.backgroundColor = 'lightgreen';
                divContent.appendChild(winDisplay);
                

                        
                ;}
        }, 100); 
    }

    loadSelection = (e, selection = "none", characters, icons)=>{    
        var select = document.createElement("div");
        select.name = "char"; 
        select.id = "char"; 
        
        for (let i=0;i<characters.length; i++){   // create options 
            var option = document.createElement("button");
            option.textContent= characters[i];
            option.text = characters[i];  
            option.style.width = '100px';
            option.style.display = 'block';

            const mobImg= new Image();
            mobImg.src = icons[i]; 
            mobImg.style.width ='40px';
            mobImg.style.display = 'block';
            mobImg.style.margin = 'auto';

            option.addEventListener('click', function(e){
                if (selection == characters[i]){
                    let updateImg = document.getElementById(characters[i]);
                    updateImg.style.backgroundColor = 'green';
                    characters[i]='';
                    icons[i]=''; 
                    
                }; 
                document.getElementById("selectBox").innerHTML="";
            });

            if (characters[i]!=''){
                option.appendChild(mobImg);
                select.appendChild(option); 
            }
        }
        document.getElementById("selectBox").innerHTML="";

        const divContent = document.getElementById("selectBox"); 
        divContent.appendChild(select); 
        divContent.style.left =  e.pageX + 'px';
        divContent.style.top = e.pageY + 'px';
    }

    loadHeader(characters = this.characters, icons = this.icons,  ){
        const header = document.createElement("div");
        header.style.display = 'flex'; 
        //header.style.padding = '1em';
        header.id = 'headerBar';
        header.style.width ='850px';
        header.style.textContent = 'center';
        header.style.justifyContent = 'center';
        header.style.textAlign = 'center';
        header.style.background = 'steelblue';
    
        for (let i=0;i<characters.length; i++){
            const mob1 = document.createElement('mob1');
            mob1.textContent = characters[i];
            mob1.id = characters[i]; 
            mob1.style.width = '100px';
            mob1.style.alignContent = 'center';
            mob1.style.justifyContent = 'center';
            //mob1.style.margin = 'auto';
            
            const mobImg= new Image();
            mobImg.src = icons[i]; 
            mobImg.style.width ='40px';
            mobImg.style.display = 'block'
            mobImg.style.alignContent = 'center';
            mobImg.style.margin = 'auto';
            mob1.appendChild(mobImg);    
            header.appendChild(mob1);    
        }

        document.getElementById("content").appendChild(header); 
     

    }
    loadBoxes(characters = this.characters, icons = this.icons, positions = this.positions, points =this.points){
        for (let i=0;i<characters.length; i++){
            var box1 = document.createElement("div");
            box1.style.border = 'green dashed 4px'; 
            box1.style.position = 'absolute';
            box1.style.top = positions[i][0]+"px"; 
            box1.style.left = positions[i][1]+"px"; 
            box1.style.width = positions[i][2]+"px"; 
            box1.style.height = positions[i][3]+"px"; 
            
            var elem = this;
            box1.addEventListener('click', function(e){
                elem.loadSelection(e, characters[i], characters, icons); 
            });
            
            document.getElementById("content").appendChild(box1); 
        }

    }
    loadImage(characters = this.characters, icons = this.icons){
        const divContent = document.getElementById("content");    
        const levelImg= new Image();
        levelImg.src = level1; 
        levelImg.style.width ='850px';
        levelImg.style.display = 'block';
        levelImg.style.position = 'relative';

        var elem = this; 
        levelImg.addEventListener('click', function(e){
            elem.loadSelection(e, '', characters, icons)
        })

        levelImg.addEventListener('contextmenu', function(ev){
            ev.preventDefault(); 
            document.getElementById("selectBox").innerHTML="";
        });

        divContent.appendChild(levelImg);
    }

    initialLoad(){
       // this.loadHeader();
        this.loadImage(); 
        this.loadBoxes(); 

    }

    //document.getElementById("content").addEventListener('click', console.log('asd')); 


}

