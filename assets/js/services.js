$(".img-box img").click(function(){
    $(".lightbox").fadeIn(300);
    $('.middle').css("background-image", "url(" + $(this).attr("src") + ")");
    $("html").css("overflow","hidden");
  });
  
  $(".close").click(function(){
    $(".lightbox").fadeOut(300);
    setTimeout(function() {
      $("html").css("overflow","auto");
    }, 300);
  });
  
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