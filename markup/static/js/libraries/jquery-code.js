$(function () {
  $('#mainNavButton').click(function () {
    $('#mainNav').toggleClass('main-nav--open');
  });
  
  $("#reviewsSlider").owlCarousel({
    loop:true,
    margin:0,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  
  $('#mainForm').validate({
    rules: {
      userName: {
        required: true
      },
      userSurname: {
        required: true
      },
      userTel: {
        required: true
      },
      userMail: {
        required: true
      }
    }
  });
  
 /* var name = $('#userName');
  var mainFormButton = $('#mainFormButton');
  var surName = $();
  
  name.blur(function () {
    if (name.val() != '') {
      if (name.hasClass('main-form__no-valid')) {
        name.removeClass('main-form__no-valid');
      }
      name.addClass('main-form__valid');
      $('.main-form__blockUser-name-items .main-form__no-valid-icon').remove();
    }else {
      name.addClass('main-form__no-valid').removeClass('main-form__valid');
      name.after('<span class="main-form__no-valid-icon"></span>');
    }
  });*/
  
  /*var validName = false;
  var validSurname = false;
  var validTel = false;
  var validEmail = false;
  $('form').submit(function (event) {
    event.preventDefault();
    
    var name = $('#userName').val();
    var surName = $('#userSurname').val();
    var tel = $('#userTel').val();
    var email = $('#userMail').val();
    
    if (name == '') {
      if ($('#userName').hasClass('main-form__valid')) {
        $('#userName').removeClass('main-form__valid');
      }
      $('#userName').addClass('main-form__no-valid')
    }else {
      validName = true;
      $('#userName').addClass('main-form__valid');
    }
    
    if (surName == '') {
      $('#userSurname').addClass('main-form__no-valid')
    }else {
      validSurname = true;
      if ($('#userSurname').hasClass('main-form__no-valid')) {
        $('#userSurname').removeClass('main-form__no-valid');
      }
    }
    
    if (tel == '') {
      $('#userTel').addClass('main-form__no-valid')
    }else {
      validTel = true;
      if ($('#userTel').hasClass('main-form__no-valid')) {
        $('#userTel').removeClass('main-form__no-valid');
      }
    }
    
    if (email == '') {
      $('#userMail').addClass('main-form__no-valid')
    }else {
      validEmail = true;
      if ($('#userMail').hasClass('main-form__no-valid')) {
        $('#userMail').removeClass('main-form__no-valid');
      }
    }
    
    if (validName == true && validSurname == true && validTel == true && validEmail == true) {
      $('form').unbind('submit').submit()
    }
  });*/
});