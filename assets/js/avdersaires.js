$(document).ready(function() {
    $(".card").hover(function() {
        $(this).toggleClass("zomm")
        $(".card-name", this).toggleClass("add-bg").toggleClass("rm-bg")
        $(".card-name>h2", this).animate({ 'left': '10%' });
        $(".card-body", this).slideDown(1500);

    }, function() {
        $(this).toggleClass("zomm")
        $(".card-name", this).toggleClass("add-bg").toggleClass("rm-bg")
        $(".card-name>h2", this).animate({ 'left': '3%' });
        $(".card-body", this).slideUp(1500);
    });
});