(function analogClock() {
    
    let daysName = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let monthsName = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

    function getDayFormatted(date, daysName, monthsName) {
        return daysName[date.getDay()] + ", " + date.getDate() + " " + monthsName[date.getMonth()] + " " + date.getFullYear();
    }

    var dateDOMElement = document.getElementById("date");
    var timeDOMElement = document.getElementById("time");

    dateDOMElement.innerHTML = getDayFormatted(new Date(), daysName, monthsName);    
                           
    setInterval(function() {
        
        var date = new Date();

        timeDOMElement.innerHTML = ('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getMinutes()).slice(-2);                        


        if (date.getHours() == 0 && date.getMinutes() == 0 && date.getSeconds() == 0){
            dateDOMElement.innerHTML = getDayFormatted(date, daysName, monthsName);
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    }, 1000)

}())