$(document).ready(function() {

    /* animation au chargement */
    $(function() {
        $(".titre,h2.font-spider").animate({ left: '0%' }, 1500);
        $(".description").animate({ "opacity": "1" }, 2000);

    })
    $(".description").click(function() { $(this).fadeIn(); });

    /* Hover */
    $(".button1").hover(function() {
        $(this).css({
            'background-color': 'rgba(0,0,0,0)',
            'color': 'var(--white-ad-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': '2 px solid var(--white-ad-color)',
            'font-weight': 'bold'
        })

    }, function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': 'none',
            'border': 'none',
            'font-weight': 'initial'
        })
    });

    $(".button2").hover(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': 'none',
            'font-weight': 'bold'
        })
    }, function() {
        $(this).css({
            'background-color': 'initial',
            'color': 'var(--white-ad-color)',
            'box-shadow': 'none',
            'border': 'var(--white-ad-color) 2px solid',
            'font-weight': 'initial'
        })
    });


    $(".button3").hover(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--blue-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': 'none',
            'font-weight': 'bold'
        })
    }, function() {
        $(this).css({
            'background-color': 'transparent',
            'color': 'var(--white-ad-color)',
            'box-shadow': 'initial',
            'border': 'var(--white-ad-color) 2px solid',
            'font-weight': 'initial'
        })
    });

    $(".nav-link").hover(function() {
        $(this).css({ 'text-decoration': 'line-through 2px', 'color': 'var(--white-ad-color)' });

    }, function() {
        $(this).css('text-decoration', 'none');
    });


    /* SpiderMan Cimena */

    $(".card").hover(function() {
        $("img", this).css({ "transform": "scale(1.05)" });
        $(".card-body", this).slideDown(1500)

    }, function() {
        $("img", this).css({ "transform": "scale(1)" });
        $(".card-body", this).slideUp(1500)
    });


    /* gestion de la valeur du checkbox */
    $("input[type='checkbox']").click(function() {

        if ($(this).val() === "") {
            $(this).attr("value", "checked");
        } else {
            $(this).attr("value", "");
        }
    });

    /* POP-UP formulaire */
    $('form').submit(function(e) {
        e.preventDefault();
        /* HOME-DEVENIR SPIDERMAN*/
        if ($(this).hasClass("become-spider")) {
            let $toCheck = $(this).find("input:not([type='submit'])");
            let $isValid = true;
            for (let i = 0; i < $toCheck.length; i++) {
                if ($($toCheck[i]).val().length == 0) {
                    $isValid = false
                };
            }
            if ($isValid) {
                $(this)[0].reset();
                $(".pop-title").text("Votre demmande à été pris en compte");
            } else {
                $(".pop-title").text("Ouuups...!! Il y a une erreur ")
            }
        };

        /* HOME-NEWSLETTER*/
        if ($(this).hasClass("newsletter")) {
            let $toCheck = $(this).find("input:not([type='submit'])");
            let $isValid = true;
            for (let i = 0; i < $toCheck.length; i++) {
                if ($($toCheck[i]).val().length == 0) {
                    $isValid = false
                };
            }
            if ($isValid) {
                $(this)[0].reset();
                $(".pop-title").text("Vous ête bien inscrit à la newsletter");
            } else {
                $(".pop-title").text("Ouuups...!! Il y a une erreur ")
            }
        };


        /* A PROPOS MESSAGE */
        if ($(this).hasClass("message")) {
            let $toCheck = $(this).find("input:not([type='submit']),textarea");
            let $isValid = true;
            for (let i = 0; i < $toCheck.length; i++) {
                if ($($toCheck[i]).val().length == 0) {
                    $isValid = false
                };
            }
            if ($isValid) {
                $(this)[0].reset();
                $(".pop-title").text("Message envoyer !");
            } else {
                $(".pop-title").text("Ouuups...!! Il y a une erreur ")
            }
        };
        $(".pop-up-bg").fadeIn(1500)

    });
    $(".fermer").click(function() {
        $(".pop-up-bg").fadeOut(1500);
    });



    /* HOVER sur les icone du footer */
    $(".ic-1").hover(function() {
        $(this).css({ 'filter': 'invert(1)' });
    }, function() {
        $(this).css({ 'filter': 'invert(0)' })
    });
});