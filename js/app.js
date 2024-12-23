// $(document).ready(function(){
// })

$(function(){
    // Search sm
    $(".smSearchBtn").click(function(){
        $(".searchSm").addClass("active");
    });
    $(".searchSm .closeBtn").click(function(){
        $(".searchSm").removeClass("active");
    })
    // Banner starts 
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 200,
        prevArrow: "#bannerLeftArrow",
        nextArrow: "#bannerRightArrow",
        arrows: false,
        dots: true,
        dotsClass: 'banner-dots',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                
                dots: false,
              }
            }
        ]
    });
});
// Banner ends
// section 3 starts 
var mixer = mixitup('.mix_it');
// section 3 ends
// countdown
var countDownDate = new Date("Dec 9, 2024 18:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
}, 1000);
$('#video .vid').click(function(){
  console.log(1);
  
  $('#video-m').removeClass('d-none');
});
