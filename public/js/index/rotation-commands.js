(function rotationCommand() {
    
    var commandArray = [
        "Affiche le bulletin météo",
        "Affiche les nouvelles locales",
        "Affiche le compte rendu de ma nuit",
        "Affiche le compte rendu de ma journée"
    ];

    var rotationTextContainerElement = document.getElementById('command-names-example');

    var rotationTextDivElement = document.createElement("h1");
    rotationTextDivElement.className = "voice-command-ex"
    rotationTextDivElement.innerHTML =  "Dites: " + commandArray[-1];
    

    rotationTextContainerElement.appendChild(rotationTextDivElement);
    

    var rotationIndex = 0;

    setInterval(function() {

        setTimeout(function(){ 
            
            rotationTextDivElement.parentElement.removeChild(rotationTextDivElement);

            if (rotationIndex >= commandArray.length){
                rotationIndex = 0;
            }

            rotationTextDivElement = document.createElement("h1");
            rotationTextDivElement.className = "voice-command-ex"
            rotationTextDivElement.innerHTML =  "Dites: " + commandArray[rotationIndex];
            rotationTextDivElement.velocity('transition.fadeIn', {duration: 2000})
            

            rotationTextContainerElement.appendChild(rotationTextDivElement);

            rotationIndex++;

         }, 2000);

        rotationTextDivElement.velocity('transition.fadeOut',  {duration: 2000})
        
    }, 10000)

    /*var rotationCommandDOMElement = document.getElementById("rotation-command")

    rotationCommandDOMElement.innerHTML = "Dites: " + commandArray[0];

    var rotationIndex = 1;

    setInterval(function () {

        if (rotationIndex >= commandArray.length){
            rotationIndex = 0;
        }

        rotationCommandDOMElement.innerHTML = "Dites: " + commandArray[rotationIndex];

        rotationIndex++;
        

    }, 3000) */
}())