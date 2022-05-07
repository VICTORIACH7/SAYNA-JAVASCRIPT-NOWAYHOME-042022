$(document).ready(function() {
    let $heroheight = $("#hero").height();
    let $imgSpider = $(".imgSpider")
    $imgSpider.css("height", `${Math.floor($heroheight)}px`)
    $(document).scroll(function() {
        let $tag1 = $("#saynaxmarvel").offset().top + ($("#saynaxmarvel").height() / 4);
        let $posY = $(document).scrollTop();
        if ($posY < $tag1) {
            $imgSpider.css({ "transform": `translateY(${$posY}px)`, "z-index": 0 })
        }
    });

    $("img:not(.ic-1,.navbar-brand img)").hover(function() {
        $(this).toggleClass("zoom")

    }, function() {
        $(this).toggleClass("zoom")
    });
});