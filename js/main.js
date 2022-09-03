

var navbar = document.querySelector('.navbar');
var menu = document.querySelector('.fa-bars')
var closebtn = document.querySelector('.fa-xmark')
var click = document.querySelectorAll('.navbar a')



click.forEach(element => {
    element.onclick = function () {
        navbar.style.transform = 'translateY(-260%)';
    }
});

menu.onclick = function () {
    navbar.style.transform = 'translateX(0%)';
}



closebtn.onclick = function () {
    navbar.style.transform = 'translateY(-260%)';
}

//Calling the element.
var $slogan = document.getElementById("slogan");

// Setting an array with several strings.
var sloganArray = [ "Software Engineer", "Web Developer."];

//Setting variable to control the index.
var sloganIndex = 0;

/* This function (only when called) replaces the text of the element called before with text contained on the strings of the array, each time incrementing one and going through every array position. */
function changeSlogan() {
    $slogan.innerHTML = sloganArray[sloganIndex];
    ++sloganIndex;
    if (sloganIndex >= sloganArray.length) {
        sloganIndex = 0;
    }
  }

//Calling the function created before every five seconds.
setInterval(changeSlogan, 3430); 

var skills = document.querySelector('#skills');
var inside = document.querySelectorAll('.inside');
 function effects () {
    if (window.scrollY >= skills.offsetTop - 200) {
        inside.forEach(span => {
            span.style.width = span.dataset.width;
            span.textContent = span.dataset.width;
            
            
        });
        
    }
    
}



var upbtn = document.querySelector('.fa-angles-up');
var header = document.querySelector('header');

  function sc () {

    if (window.scrollY >=600) {
        upbtn.style.display = 'block';
    } else if (window.scrollY == 0) {
        upbtn.style.display = 'none';
        header.style.boxShadow = null;


    } else if (window.scrollY >= 200) {
        header.style.backgroundColor = "rgba(250, 250, 250, 0.15)";
        header.style.borderBottom="none";
    } else if (window.scrollY <= 200) {
        header.style.backgroundColor = null;
        header.style.borderBottom = null;

    }
}
upbtn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
}
window.onscroll = function() {
  effects();
  sc();
}
