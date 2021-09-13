// Navigation Bar

var navFlag = false;

$('#btnMenu').click(function(){
    $('nav').animate({
        width: 'toggle',
    });
    navFlagControl();
})

$("#events").hover(function(){
    if($(document).width() > 800)
        $('.sub-events').css("display", "block");
}, function(){
    $('.sub-events').css("display", "none"); 
})

$('.sub-events').hover(function(){
    if($(document).width() > 800)
        $('.sub-events').css("display", "block");
}, function(){
    $('.sub-events').css("display", "none"); 
})

$(window).click(function(e){
    let nav = $('nav')[0];
    let btnMenu = $('#btnMenu')[0];
    if (navFlag && e.target != nav && e.target != btnMenu) {
        $('nav').animate({
            width: 'toggle'
        });
        navFlagControl();
    }
})

function navFlagControl(){
    if(navFlag == false)
        navFlag = true
    else navFlag = false
}

// Scroll Up

window.onscroll = function(){
    scrollUp();
}

function scrollUp(){
    if ($(window).width() >= 800 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('.scrollUp').css("display", "block");
    } 
    else {
        $('.scrollUp').css("display", "none");
    }
}

$('#btnScrollUp').click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})