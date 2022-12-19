const headerDiv = function(){
    const header = document.createElement("div");
    header.style.display = 'flex'; 
    header.style.padding = '1em';
    header.style.flex = '0 0 auto';
    header.style.alignContent = 'center';
    header.style.justifyContent = 'center';

    const homeWeb = document.createElement('div');
    homeWeb.textContent ='Level 1';
    homeWeb.id ='home-web';
    homeWeb.style.width = '150px';
    homeWeb.style.alignContent = 'center';
    homeWeb.style.justifyContent = 'center';
    header.appendChild(homeWeb); 

    const menuWeb = document.createElement('div');
    menuWeb.textContent ='Level 2'; 
    menuWeb.id = 'menu-web';
    menuWeb.style.width = '150px';
    menuWeb.style.alignContent = 'center';
    menuWeb.style.justifyContent = 'center';
    header.appendChild(menuWeb);  
    
    const aboutWeb = document.createElement('div');
    aboutWeb.textContent ='Level 3'; 
    aboutWeb.id = 'about-web';
    aboutWeb.style.width = '150px';
    aboutWeb.style.alignContent = 'center';
    aboutWeb.style.justifyContent = 'center';
    header.appendChild(aboutWeb);  

    return header;

}


export default headerDiv ; 