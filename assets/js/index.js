$(document).ready(function() {
    let $blueHeight = $("#spiderman").height();
    let $imgSpider = $(".imgSpider")
    $(function() {
        $("#hero").animate({ 'background-position-x': '98%' }, 1500);
        $imgSpider.css("height", `${Math.floor($blueHeight)}px`)
    })

    $(document).resize(function() {
        $imgSpider.css("height", `${Math.floor($blueHeight)}px`)

    });
    /*
    des erreur peuvent subvenir à code de l'annimation sur spiderman
     */
    $(document).scroll(function() {
        if ($(window).width() > 768) {
            let $tag1 = $("#spiderman").offset().top - 45;
            let $posY = $(document).scrollTop();
            if ($posY < $tag1) {
                $imgSpider.css({ "transform": `translateY(${$posY}px)`, "z-index": 0 })
            }
        }
    });
});