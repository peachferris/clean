$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                  mobileFirst: true,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 1,
                  centerMode: true,
                  variableWidth: true,
                  focusOnSelect: true

              }
            }
          ]
    });
})
$(document).ready(function() {
    $('.slider-container__third').slick({
      speed: 150,
      arrows: false,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 9,
    });
});

$(document).ready(function(){
    $('.block__title').click(function(event) {
        if($('.block').hasClass('.one')) {
            $('.block__title').not($(this)).removeClass('.active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

