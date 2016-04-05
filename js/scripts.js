$(document).ready(function() {

    if ($('#pop-add').length) {

        setTimeout(function(){
            $.magnificPopup.open({
                items: {
                    src: '#pop-add'
                },
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        },500);
    }

    if ($('#pop-money').length) {

        setTimeout(function(){
            $.magnificPopup.open({
                items: {
                    src: '#pop-money'
                },
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        },500);
    }

    if ($('#pop-del').length) {

        setTimeout(function(){
            $.magnificPopup.open({
                items: {
                    src: '#pop-del'
                },
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        },500);
    }

    if ($('#pop-response').length) {

        setTimeout(function(){
            $.magnificPopup.open({
                items: {
                    src: '#pop-response'
                },
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        },500);
    }

    $('.n-section3__btn').click(function(e){
        e.preventDefault();
        var $body = $('html, body');
        $body.animate({scrollTop:$('.n-section4').offset().top - 90},'slow');
    })

    $('.n-section__user__btn').click(function(){
        $(this).prev().slideToggle('slow');
        $(this).toggleClass('active');
        $(this).find('span').text() == "Скрыть" ?
            $(this).find('span').text('Показать') :
            $(this).find('span').text("Скрыть");
    });

    $('.n-section5__show').click(function(){
        $(this).toggleClass('show-active');
        $('.n-section5__items').toggleClass('active');
        $(this).find('span').text() == "Развернуть " ?
            $(this).find('span').text('Свернуть') :
            $(this).find('span').text("Развернуть ");
    });


    function placeholder() {

      $('input[type="text"],input[type="search"], textarea').focus(function(){
        if ($(this).prop('readonly')==false) {
           var plac = $(this).prop('placeholder');
           $(this).prop('placeholder',' ');

           $('input[type="text"],input[type="search"], textarea').blur(function(){
               $(this).prop('placeholder',plac);
           });
        }
      });
    }

    $('#n-phone').mask("+7 (999) 999-9999");
    placeholder();
});