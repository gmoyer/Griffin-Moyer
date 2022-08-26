


$(window).scroll(function (event) {
    // Change animation position based on scrolling
    var scroll = ($(window).scrollTop()/2)+1;
    var scrollstr = "";
    if (scroll < 1000)
        scrollstr += "0";
    if (scroll < 100)
        scrollstr += "0";
    if (scroll < 10)
        scrollstr += "0";
    if (scroll > 250)
        scroll = 250;
    scrollstr += parseInt(scroll);
    $("#logoImg").attr("src", "animation/" + scrollstr + ".jpg");


    //animate menu when reached last frame
    if (scroll == 250) {

    }

    //change background squares
    $(".background-square").each(function (index) {
        newTop = $(this).prop('inittop') - ($(this).prop('paralax') * $(window).scrollTop() * 0.15)
        while (newTop < -100)
            newTop += 200
        $(this).css('top', newTop + '%');
    });
});

//background squares
$(document).ready(function () {
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
});