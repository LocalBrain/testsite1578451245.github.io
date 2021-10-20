////////// Carousel 

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 5000,
        }
      });


//////////// Nav-Bar
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageTOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-80px";
  } else {
      navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
});

$(function(){
  // On recupere la position du bloc par rapport au haut du site
  var position_top_raccourci = $("#navigation").offset().top;
  
  //Au scroll dans la fenetre on déclenche la fonction
  $(window).scroll(function () {
  
  //si on a defile de plus de 150px du haut vers le bas
  if ($(this).scrollTop() > position_top_raccourci) {
  
  //on ajoute la classe "fixNavigation" a <div id="navigation">
  $('#navigation').addClass("fixNavigation"); 
  } else {
  
  //sinon on retire la classe "fixNavigation" a <div id="navigation">
  $('#navigation').removeClass("fixNavigation");
  }
  });
  });