$(document).ready(function(){
  $('.carusel_inner').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icon/arow.left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icon/arow.right.png"></button>'
  });





  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation' ).fadeIn();




  });
  $('.modal_close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });


  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal_descr').text($('.price_delivery').eq(i).text());
      $('.overlay, #order' ).fadeIn();
    })
  });

  $('.massage-form').validate({
    
    messages: {
      name: "пожалуйста введите свое имя",
      phone: "ведите свой номер",
      email: {
        required: "введите свою почту",
        email: "не правельно введена почта"
      }
    }
  });
  $('#consultation form').validate({



    messages: {
      name: "пожалуйста введите свое имя",
      phone: "ведите свой номер",
      email: {
        required: "введите свою почту",
        email: "не правельно введена почта"
      }
    }
  

  });

  


  $('#order form').validate({
    
    messages: {
      name: "пожалуйста введите свое имя",
      phone: "ведите свой номер",
      email: {
        required: "введите свою почту",
        email: "не правельно введена почта"
      }
    }
  });

  $('#check ').validate({
    messages: {
      name: "пожалуйста введите  свое имя",
      phone: "ведите свой номер",
      email: {
        required: "введите свою почту",
        email: "не правельно введена почта"
      }
    }
  })
  
});


