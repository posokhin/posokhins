window.onload = function(){
    
    /* animate overlay card */
    let postItem = document.querySelectorAll('.posts__item');
    let postOverlay = document.querySelectorAll('.posts__item-overlay');

    for(let i = 0; i < postItem.length; i++){
        postItem[i].onmouseover = function(){
            postOverlay[i].style.opacity = '1';
        }
        postItem[i].onmouseout = function(){
            postOverlay[i].style.opacity = '0';
        }
    }


    /* wow init */
    new WOW().init();

    /* animate menu-btn */
    $('.header__menu-inner').on('click', function(){
        $('.header__menu-span1').toggleClass('span1Animate');
        $('.header__menu-span2').toggleClass('span2Animate');
        $('.header__menu-span3').toggleClass('span3Animate');
        $('.header__menu-span4').toggleClass('span4Animate');

        /* if($('.header__nav_mobile').hasClass('fadeInRight')){

            $('.header__nav_mobile').toggleClass('fadeOutRight')
        }
        
        $('.header__nav_mobile').show();

        $('.header__nav_mobile').addClass('fadeInRight animated');

        
        if ($('.header__nav_mobile').hasClass('fadeOutRight')) {
            
            $('.header__nav_mobile').hide(1000);

        } */

        if($('.header__nav_mobile').hasClass('fadeInRight')){
            $('.header__nav_mobile').toggleClass('fadeOutRight').hide(300);
        }
        $('.header__nav_mobile').show().addClass('fadeInRight');
    });
}
