
var scrollDiv = 8; //how fast the scroll
var scrollMul = 2; //how many frames to skip
var scrollRatio = scrollMul/scrollDiv;

$(window).scroll(function (event) {
    // Change animation position based on scrolling
    var scroll = parseInt($(window).scrollTop()/scrollDiv)*scrollMul;
    scroll++; //because the first value is 1
    var scrollstr = "0";
    if (scroll < 100)
        scrollstr += "0";
    if (scroll < 10)
        scrollstr += "0";
    if (scroll > 250)
        scroll = 250;
    scrollstr += scroll;
    $("#logoImg").attr("src", "animation/" + scrollstr + ".png");


    //animate menu when reached last frame
    if (scroll == 250) {
        $("#logoImg").animate({left: "37%"}, 500);
        $( ".menu-item" ).each(function( index ) {
            $(this).css("animation", "slideOut 1s forwards " + index*0.2 + "s");
          });
    }

    //change background squares
    $(".background-square").each(function (index) {
        newTop = $(this).prop('inittop') - ($(this).prop('paralax') * $(window).scrollTop() * 0.15)
        while (newTop < -100)
            newTop += 200
        $(this).css('top', newTop + '%');
    });


    //shift up menu if reached bottom
    var excess = $(window).scrollTop() - (1/scrollRatio*250);
    if (excess > 0) {
        $('#menu').css('top', 'calc(50% - ' + excess + 'px)');
        $('#logoImg').css('top', 'calc(50% - ' + excess + 'px)');
    }
});

//background squares
$(document).ready(function () {
    //set up the document height
    var docHeight = window.innerHeight + (1/scrollRatio*250);
    $('body').css("height", docHeight + "px");
    $('#menu-box').css("top", docHeight + "px");
    for (let i = 0; i < 30; i++)
        $('#background').append('<div class="background-square" style="z-index: ' + (-i) + '"></div>');

    $(".background-square").each(function (index) {
        $(this).prop('inittop', Math.floor(Math.random() * 150)-50);
        $(this).prop('paralax', Math.random() * 1.5 + 0.5);


        $(this).css('top', $(this).prop('inittop')+'%');
        $(this).css('left', Math.floor(Math.random() * 200) - 50 + '%');


        $(this).css('transform', 'rotate(' + Math.floor(Math.random() * 90) + 'deg)');

        $(this).css('width', Math.floor(Math.random() * 700) + 300 + 'px');
        $(this).css('height', Math.floor(Math.random() * 700) + 300 + 'px');

        color = 255-Math.floor(Math.random() * 45);
        $(this).css('background-color', 'rgb(' + color + ',' + color + ',' + color + ')');
    });

    $( ".menu-item" ).hover(
        function() {
          $( this ).animate({"font-size": "2.7em"}, 200);
        }, function() {
          $( this ).animate({"font-size": "2.2em"}, 200);
        }
      );
});

//readjust the doc height when the window is resized
$( window ).resize(function() {
    var docHeight = window.innerHeight + (1/scrollRatio*250);
    $('body').css("height", docHeight + "px");
    $('#menu-box').css("top", docHeight + "px");
  });



//handle menu clicking
function onSelect(option) {
    $('#background2').css('z-index', 100);
    $('.background-square').each(function (index) {
        setTimeout(() => {
            $('#background2').append($(this));
            color = 255-Math.floor(Math.random() * 45);
            $(this).css('background-color', 'rgb(' + 0 + ',' + color + ',' + color + ')');
        }, 100*index)
    });
}