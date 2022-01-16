/* ===== Spinner ===== */

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};



(function () {

    /*=====================================
    Sticky
    ======================================= */
window.onscroll = function () {
    let header_navbar = document.querySelector(".navbar-area");
    let sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    let backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "flex";
    } else {
        backToTo.style.display = "none";
    }
};



    // section menu active
	function onScroll(event) {
		let sections = document.querySelectorAll('.page-scroll');
		let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (let i = 0; i < sections.length; i++) {
			let currLink = sections[i];
			let val = currLink.getAttribute('href');
			let refElement = document.querySelector(val);
			let scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	}

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    let pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

}) ();

//Pop up displaying 

document.querySelector(".suscribe").addEventListener("click" , suscribe);
document.querySelector(".newsletter-form").addEventListener("submit" , suscribe);
document.querySelector(".contact-form").addEventListener("submit" , contact);

function suscribe(e){
    console.log("Okay");
    e.preventDefault();
    let list = document.getElementById("toast");
    list.classList.add("show");
    list.innerHTML = '<i class="lni lni-checkmark design-pop-up"></i>Souscription réussie';
    setTimeout(function(){
        list.classList.remove("show");
        console.log("Terminated");
    },3000);
}

function contact(e){
    console.log("Okay");
    e.preventDefault();
    let  mail = document.getElementById("toast-contact");
    mail.classList.add("show");
    mail.innerHTML = '<i class="lni lni-telegram-original design-pop-up"></i> Votre mail a été envoyé';
    setTimeout(function(){
        mail.classList.remove("show");
    }, 3000);
}