/* Your JS here. */
var section_dict = {
    0: 'home',
    1: 'academics',
    2: 'experiences',
    3: 'projects',
    4: 'interests',
    5: 'contacts'
};

current_section = 0;

// if (current_section === undefined) {
//     current_section = 0;
// };

window.onscroll = function() {
    stickyHeader()
    let current_section;
    var hom = document.getElementById('home').getBoundingClientRect().top;
    var aca = document.getElementById('academics').getBoundingClientRect().top;
    var exp = document.getElementById('experiences').getBoundingClientRect().top;
    var pro = document.getElementById('projects').getBoundingClientRect().top;
    var int = document.getElementById('interests').getBoundingClientRect().top;
    var con = document.getElementById('contacts').getBoundingClientRect().top;
    let arr = [hom, aca, exp, pro, int, con];
    var i = 0;
    console.log(arr);
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 3) {
            i -= 1;
            break;
        }
    }
    i = i == arr.length ? arr.length - 1 : i;

    document.getElementById("click-" + section_dict[i]).style.textDecoration = "underline";
    if (i > 0) {
        document.getElementById("click-" + section_dict[i - 1]).style.textDecoration = "none";
    }
    if (i < arr.length - 1) {
        document.getElementById("click-" + section_dict[i + 1]).style.textDecoration = "none";
    }

};

var navbar = document.getElementById("sticky-navbar");
var navbar_element = document.getElementsByClassName("navbar-element");
var sticky = window.innerHeight;
window.addEventListener('resize', function(event) {
    sticky = window.innerHeight;


}, true);

var home_button = document.getElementById("click-home");
var academics_button = document.getElementById('click-academics');
var experiences_button = document.getElementById('click-experiences');
var projects_button = document.getElementById('click-projects');
var interests_button = document.getElementById('click-interests');
var contacts_button = document.getElementById('click-contacts');

var prev_button = document.getElementById('prev');
var next_button = document.getElementById('next');

home_button.addEventListener('click', function() { document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); });
academics_button.addEventListener('click', function() { document.getElementById('academics').scrollIntoView({ behavior: 'smooth' }); });
experiences_button.addEventListener('click', function() { smoothScroll('experiences') });
projects_button.addEventListener('click', function() { smoothScroll('projects') });
interests_button.addEventListener('click', function() { smoothScroll('interests') });
contacts_button.addEventListener('click', function() { smoothScroll('contacts') });

prev_button.addEventListener('click', function() { plusSlides(-1) });
next_button.addEventListener('click', function() { plusSlides(1) });


function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        home_button.classList.add("sticky");
        academics_button.classList.add("sticky");
        experiences_button.classList.add("sticky");
        projects_button.classList.add("sticky");
        interests_button.classList.add("sticky");
        contacts_button.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");
        home_button.classList.remove("sticky");
        academics_button.classList.remove("sticky");
        experiences_button.classList.remove("sticky");
        projects_button.classList.remove("sticky");
        interests_button.classList.remove("sticky");
        contacts_button.classList.remove("sticky");
    }
}

function smoothScroll(element) {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    // console.log("slides length", slides.length);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var modal_button_one = document.getElementById("modalOne");
var modal_one = document.getElementById("modalContentOne");
modal_button_one.onclick = function() { modal_one.style.display = "block"; };

var modal_button_two = document.getElementById("modalTwo");
var modal_two = document.getElementById("modalContentTwo");
modal_button_two.onclick = function() { modal_two.style.display = "block"; };

var span_one = document.getElementsByClassName("close")[0];
span_one.onclick = function() {
    modal_one.style.display = "none";
}

var span_two = document.getElementsByClassName("close")[1];
span_two.onclick = function() {
    modal_two.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == modal_one) {
        modal_one.style.display = "none";
    }
    if (event.target == modal_two) {
        modal_two.style.display = "none";
    }
}