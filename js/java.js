/*global $, alert, console*/

$(document).ready(function() {
  $(".navbar-fixed-top").css("background-color", "none");
  $(".navbar-fixed-top").css("top", "20px");
  $(".effect").on({
    mouseenter: function() {
      $(this).css("color", "#b2986b");
    },
    mouseleave: function() {
      $(this).css("color", "#777");
    },
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $(".navbar-fixed-top").css({
        "background-color": "rgba(0, 0, 0, 0.75)",
        "top": "0",
        "padding": "4px",
      });
      $(".navbar-default").css("background-color", "none");
      $(".navbar-collapse").css("background-color", "rgba(0, 0, 0, 0.75)");
      $(".effect").css("color", "#fff");
      $(".effect").on({
        mouseenter: function() {
          $(this).css("color", "#b2986b");
        },
        mouseleave: function() {
          $(this).css("color", "#fff");
        },
      });

    } else {
      $(".navbar-default").css("background-color", "none");
      $(".navbar-fixed-top").css({
        "background-color": "transparent",
        "top": "20px"
      });
      $(".effect").css({
        "color": "#777"
      });
      $(".effect").on({
        mouseenter: function() {
          $(this).css("color", "#b2986b");
        },
        mouseleave: function() {
          $(this).css("color", "#777");
        },
      });
    }
  });

});

$(window).load(function(){
    $("body").css("overflow", "auto");
        $(".loading").fadeOut(1000);
    });