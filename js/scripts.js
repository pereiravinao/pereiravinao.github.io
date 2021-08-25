$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
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

  $(".goTop").click(function(){scroll(0,0)});

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});
