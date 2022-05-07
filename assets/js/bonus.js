$(function() {
    /* Compte a rebour */
    const finDecompte = new Date("May 5, 2022 08:00:00").getTime()
    let interval = setInterval(function() {
        let maintenant = new Date().getTime();
        let tempsRestant = finDecompte - maintenant;
        let $jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
        let $heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let $minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
        let $secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);
        if (tempsRestant < 0) {
            clearInterval(interval)
            $("#dd").text("00")
            $("#hh").text("00")
            $("#mm").text("00")
            $("#ss").text("00")
        } else {
            $("#dd").text($jours)
            $("#hh").text($heures)
            $("#mm").text($minutes)
            $("#ss").text($secondes)
        }
    }, 1000);

})