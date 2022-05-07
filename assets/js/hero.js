$(document).ready(function() {
    let $sliderItem = $(".slider-item");
    let $now = 1;

    $(function() {
        slide()

        function slide() {
            for (var i = 0; i < $sliderItem.length; i++) {
                $($sliderItem[i]).css('display', 'none')
            }
            $now++;
            ($now > $sliderItem.length) ? ($now = 1) : {};
            $($sliderItem[$now - 1]).css('display', 'block')
        }
        setInterval(slide, 3000)
    })


    $("img:not(.ic-1,.slider-item,.navbar-brand img)").hover(function() {

        $(this).hasClass("zoomOut") ? $(this).removeClass("zoomOut").addClass("zoomIn") : $(this).addClass("zoomIn")


    }, function() {
        $(this).hasClass("zoomIn") ? $(this).removeClass("zoomIn").addClass("zoomOut") : $(this).addClass("zoomOut")
    });

});