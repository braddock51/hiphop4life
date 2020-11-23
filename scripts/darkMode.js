const body = document.getElementById('body');
const darkMode = document.getElementById('darkmode');
const faBars = document.querySelector('.fa-bars');


darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
    counter++;
    

    if (faBars.style.color === 'white'){
        
        faBars.style.color = 'black';
        
    } else {
        faBars.style.color = 'white';
        
    }

    

});





