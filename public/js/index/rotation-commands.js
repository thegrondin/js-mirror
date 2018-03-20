(function rotationCommand() {
    
    var commandArray = [
        "Affiche le bulletin météo",
        "Affiche les nouvelles locales",
        "Affiche le compte rendu de ma nuit",
        "Affiche le compte rendu de ma journée"
    ];

    var rotationCommandDOMElement = document.getElementById("rotation-command");

    rotationCommandDOMElement.innerHTML = "Dites: " + commandArray[0];

    var rotationIndex = 1;

    setInterval(function () {

        if (rotationIndex >= commandArray.length){
            rotationIndex = 0;
        }

        rotationCommandDOMElement.innerHTML = "Dites: " + commandArray[rotationIndex];

        rotationIndex++;
        

    }, 6000) 
}())