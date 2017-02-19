//navigation
$(document).ready(function () {
$( ".cross" ).hide();
$( ".hamburger" ).show(); //to be safe that it will show
$( ".b-header__menuwrapper" ).hide();
$( ".b-header__socials" ).hide();


//on click open
$( ".hamburger" ).click(function() {
  $( ".b-header__menuwrapper" ).slideToggle( "slow", function() {
    $( ".b-header__socials" ).show();
$( ".b-header" ).addClass('open');
    $( ".hamburger" ).hide();
    $( ".cross" ).show();


  });
});

//on click close
$( ".cross" ).click(function() {
  $( ".b-header__menuwrapper" ).slideToggle( "slow", function() {
    $( ".b-header__socials" ).hide();
    $( ".b-header" ).removeClass('open');
    $( ".cross" ).hide();
    $( ".hamburger" ).show();

  });
});

//menu bp handler
var menuCalc = function() {
  var w = $(this).width();
  if(w > 1024) {
         $( ".b-header__socials" ).css({display:'inline-block'});
    $( ".b-header__menutriggers" ).hide();
    $( ".b-header__menuwrapper" ).css({display:'block', height:'auto', bottom:'auto', left:'auto', right:'auto', top:'1.1rem' });

  }
  else {
    $( ".b-header__menutriggers" ).show();

    // $( ".b-header__menu--list" ).css({display:'none'});
    $('.b-header__menu--list').height($(window).height());

  }
}

//call bp handler


$(window).resize(function(){
   location.reload();
  menuCalc();
});

menuCalc();
});

//end navigation

//load more
$(document).ready(function () {
  $( ".loadmoreDiv" ).addClass('hide');
    $( ".c-btn-loadmore" ).click(function() {
      $( ".loadmoreDiv" ).slideToggle( "slow", function() {
  $( ".loadmoreDiv" ).removeClass('hide');
      });
    });
    });
