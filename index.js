var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var year = now.getFullYear()
var origin = 334;
var customers = 3000
var projects = 5000
var originYear = 2021;
var years = 0;
if (originYear < year){
    years = year - originYear;
}
if(day > origin){
    customers =Math.ceil(customers + (day - origin) + (years*365));
    projects = Math.ceil(projects + (day - origin) * 1.5 +(years*365) );

}
else{
    customers = customers +30+ day + (years*365);
    projects = projects + 45 + day * 1.5 + (years*365);
}
 var customer = document.querySelector(".customer");
 var project = document.querySelector(".proj")
 if (customer.innerHTML != null){
     console.log(customer.innerHTML)
    customer.innerHTML = customers;
    project.innerHTML = projects
 }

 function onload(){
     setTimeout(()=>{
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".index").style.display="block";
        
       
     },1000)
 }


 (document).ready(function(){
    ("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
