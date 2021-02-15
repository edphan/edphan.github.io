let switchDarkMode = document.querySelector('.form-switch');
let header = document.querySelector('header');
let h2 = document.getElementsByTagName('h2');
let p = document.getElementsByTagName('p');
let nav = document.getElementsByTagName('li');
let darkModeLabel = document.querySelector('label');

const darkMode = () => {
    if (document.getElementById('form-switch').checked === true) {  //this if statement changes page to darkmode
    document.body.style.backgroundColor = '#1f1f1f';
    header.style.backgroundColor = 'black';
    darkModeLabel.style.color = '#FFF';
    
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = '#FFF';
        h2[i].style.opacity = '0.87';
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = '#FFF';
        p[i].style.opacity = '0.87';
    }

    for (let i = 0; i < nav.length; i++) {
        nav[i].style.color = '#FFF';
        nav[i].style.opacity = '0.87';
    }
    return;
} else {                                                            //this else statement changes page to lightmode
    document.body.style.backgroundColor = '#f0f2f5';
    header.style.backgroundColor = 'white';
    darkModeLabel.style.color = '#222';
    
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = '#222';
    }
    
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = '#222';
    }
    
    for (let i = 0; i < nav.length; i++) {
        nav[i].style.color = '#222';
    }
    return;
    }
};

switchDarkMode.onclick = darkMode;
