$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
  $("#homeIcon").click(function(){
    $('.menu-toggler').toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  })
  $("#aboutIcon").click(function(){
    $('.menu-toggler').toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  })
  $("#projectIcon").click(function(){
    $('.menu-toggler').toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  })
  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});
