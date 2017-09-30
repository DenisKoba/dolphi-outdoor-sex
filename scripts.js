/*$(window).ready(function () {
    var windowHeight = $(window).height();
    $(".out-header__wrapper_first-scroll").height(windowHeight);
})*/

$(document).ready(function () {
    $(".ukr-version").hide();

    $(".js-rus-switcher").each(function () {
    $(this).click(function () {
        $(".rus-version").show();
        $(".ukr-version").hide();
    })
 })
    $(".js-ukr-switcher").each(function () {
        $(this).click(function () {
            $(".rus-version").hide();
            $(".ukr-version").show();
        })
    })

    $(window).scroll( function(){
        $('.js-out-animate-circle, .js-out-animate-img').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).children().css('animation','load-circle 3s');
            }
        });
    });

    $(window).scroll( function(){

        $('.js-animate-img').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).css('animation','turnOnImg 3s');
                $(this).css('opacity','1');
            }
        });
    });

    $(".js-expand-lifehack").each(function () {
        $(".js-expand-lifehack").click(function (e) {
            e.preventDefault();
            $(this).next().slideDown();

        })
    })

    $("#out-slider-start").click(function () {
        $(".out-header").hide();
        $(".out-slider-container").show();
    })



    if (window.innerWidth < 1000) {
        /* the viewport is at least 400 pixels wide */
        var slideIndex = 1;
        var contaner = document.querySelector("#out-slides");
        var arrowRight = document.querySelector("#arrow-right");
        var arrowLeft = document.querySelector("#arrow-left");
        var x = contaner.children; //все добавленные слайды
        showSlides(slideIndex);


        arrowLeft.addEventListener("click", left);
        arrowRight.addEventListener("click", right);

//прописываем какой слайд показывать при загрузке
        function showSlides(n) {
            if (n < 1) {
                slideIndex = x.length
            }  // если slideIndex меньше 1, то slideIndex = кол-ву слайдов (3). То есть, если отображается слайд с индексом 1 (первй слайд), ты кликаешь влево (-1) и значение становится меньше 1, то тебя отправляет на 3 слайд.

            if (slideIndex > x.length) {
                slideIndex = 1
            }
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";// прячем все слайды
            }
            x[slideIndex - 1].style.display = "block"; // показываем слайд с индексом 1

        }

        function left() {
            showSlides(slideIndex += -1);
        }

        function right() {
            showSlides(slideIndex += 1);
        }
    }

})

