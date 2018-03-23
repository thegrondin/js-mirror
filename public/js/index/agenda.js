Array.prototype.groupByProperty = function(property) {

  var array = this;

  var regroupedArray = [];
  
  var inlineArray = [];

  var regroupedIndex = 0;

  for (var index = 0; index < array.length; index++) {
    const element = array[index];
    if (index > 0 && inlineArray != undefined){
      if ( new Date(inlineArray[inlineArray.length - 1].start.dateTime).getDate() == new Date(element.start.dateTime).getDate() ){
        inlineArray.push(element)
        regroupedArray[regroupedIndex] = inlineArray;
      }
      else {
        inlineArray = [];
        inlineArray.push(element)
        regroupedArray[regroupedIndex] = inlineArray;
        regroupedIndex++;
      }
    }
    else {   
      inlineArray.push(element)
      regroupedArray[regroupedIndex] = inlineArray;
      regroupedIndex++;
    }
  }

  return regroupedArray;

}    
    
    // Client ID and API key from the Developer Console
    var CLIENT_ID = '682362773015-m3js3bd1si8st16ut5i603v0geds9t8s.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyDlsaSjo6sgdDQsmUB4kt5guj-FQAdLw9o';


     // Array of API discovery doc URLs for APIs used by the quickstart
     var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

     // Authorization scopes required by the API; multiple scopes can be
     // included, separated by spaces.
     var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

     var authorizeButton = document.getElementById('authorize-button');
     var signoutButton = document.getElementById('signout-button');

     /**
      *  On load, called to load the auth2 library and API client library.
      */
     function handleClientLoad() {
       gapi.load('client:auth2', initClient);
     }

     /**
      *  Initializes the API client library and sets up sign-in state
      *  listeners.
      */
     function initClient() {
       gapi.client.init({
         apiKey: API_KEY,
         clientId: CLIENT_ID,
         discoveryDocs: DISCOVERY_DOCS,
         scope: SCOPES
       }).then(function () {
         // Listen for sign-in state changes.
         gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

         // Handle the initial sign-in state.
         updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
         authorizeButton.onclick = handleAuthClick;
         signoutButton.onclick = handleSignoutClick;
       });
     }

     /**
      *  Called when the signed in status changes, to update the UI
      *  appropriately. After a sign-in, the API is called.
      */
     function updateSigninStatus(isSignedIn) {
       if (isSignedIn) {
         authorizeButton.style.display = 'none';
         signoutButton.style.display = 'block';
         listUpcomingEvents();
       } else {
         authorizeButton.style.display = 'block';
         signoutButton.style.display = 'none';
       }
     }

     /**
      *  Sign in the user upon button click.
      */
     function handleAuthClick(event) {
       gapi.auth2.getAuthInstance().signIn();
     }

     /**
      *  Sign out the user upon button click.
      */
     function handleSignoutClick(event) {
       gapi.auth2.getAuthInstance().signOut();
     }

     /**
      * Append a pre element to the body containing the given message
      * as its text node. Used to display the results of the API call.
      *
      * @param {string} message Text to be placed in pre element.
      */
     /*function appendPre(message) {
       var pre = document.getElementById('agenda-container');
       var textContent = document.createTextNode(message + '\n');
       pre.appendChild(textContent);
     }*/

     /**
      * Print the summary and start datetime/date of the next ten events in
      * the authorized user's calendar. If no events are found an
      * appropriate message is printed.
      */
     function listUpcomingEvents() {
       gapi.client.calendar.events.list({
         'calendarId': 'primary',
         'timeMin': (new Date()).toISOString(),
         'showDeleted': false,
         'singleEvents': true,
         'maxResults': 10,
         'start': new Object(),
         'orderBy': 'startTime'
       }).then(function(response) {
         var events = response.result.items;

         //console.log(response.result.items)

        if (events.length > 0) {

            var agendaContainer = document.getElementById('agenda-container');

            var daysName = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']; 

            var groupedDates = events.groupByProperty()
            
            console.log(groupedDates)

            

            groupedDates.forEach( function (element, index ){

              var agendaMainElement = document.createElement('div');
              agendaMainElement.classList('agenda-element', 'w-clearfix');

              var agendaDateContainerElement = document.createElement('div');
              agendaDateContainerElement.className = 'agenda-date-container';

              var agendaDateTitleElement = document.createElement('h1');
              agendaDateTitleElement.className = 'agenda-date-number';
              agendaDateTitleElement.innerHTML = element[0].getDate();

              var agendaDateNameElement = document.createElement('h3');
              agendaDateNameElement.className = 'agenda-date-name';
              agendaDateNameElement.innerHTML = daysName[element[0].getDate()]

              var agendaInformationContainerElement = document.createElement('div');
              agendaInformationContainerElement.className = 'div-block-16';



            })

        }
      });

     /*
    <div class="agenda-element w-clearfix">
        <div class="agenda-date-container">
          <h1 class="agenda-date-number">16</h1>
          <h3 class="agenda-date-name">ven.</h3>
        </div>
        <div class="div-block-14">
          <div class="agenda-information-container">
            <h4 class="agenda-text-title">Programmation orienté objet</h4>
            <div class="agenda-element-information">14h30 - 15h20 au B1017</div>
          </div>
        </div>
      </div>
      <div class="agenda-element w-clearfix">
        <div class="agenda-date-container">
          <h1 class="agenda-date-number">17</h1>
          <h3 class="agenda-date-name">sam.</h3>
        </div>
        <div class="div-block-15">
          <div class="agenda-information-container agenda-information-container-special-event">
            <h4 class="agenda-text-title">Fête de la Sain-Patrick</h4>
          </div>
        </div>
      </div>
      <div class="agenda-element w-clearfix">
        <div class="agenda-date-container">
          <h1 class="agenda-date-number">19</h1>
          <h3 class="agenda-date-name">lun.</h3>
        </div>
        <div class="div-block-16">
          <div class="agenda-information-container agenda-information-container-special-event">
            <h4 class="agenda-text-title">Fête de la Sain-Patrick</h4>
          </div>
          <div class="agenda-information-container">
            <h4 class="agenda-text-title">Programmation orienté objet</h4>
            <div class="agenda-element-information">14h30 - 15h20 au B1017</div>
          </div>
          <div class="agenda-information-container">
            <h4 class="agenda-text-title">Programmation orienté objet</h4>
            <div class="agenda-element-information">14h30 - 15h20 au B1017</div>
          </div>
          <div class="agenda-information-container">
            <h4 class="agenda-text-title">Programmation orienté objet</h4>
            <div class="agenda-element-information">14h30 - 15h20 au B1017</div>
          </div>
        </div>
      </div>
     */

                 /*for (i = 0; i < groupedDates.length; i++) {
            
                var event = groupedDates[i][0];

                
                var eventDate = new Date(event.start.dateTime);

                //console.log(eventDate.getDate());

                var agendaElement = document.createElement('div');
                agendaElement.classList.add('agenda-element', 'w-clearfix');

                var agendaDateContainerElement = document.createElement('div');
                agendaDateContainerElement.className = 'agenda-date-container';

                var agendaDateTitleElement = document.createElement('h1');
                agendaDateTitleElement.className = 'agenda-date-number';
                agendaDateTitleElement.innerHTML = eventDate.getDate();

                var agendaDateNameElement = document.createElement('h3')
                agendaDateNameElement.className = 'agenda-date-name';
                agendaDateNameElement.innerHTML = daysName[eventDate.getDay()] + ".";

                


                groupedDates.forEach(function (elArray, index ){
                  elArray.forEach( function (element, index){

                    var eventName = element.summary;
                    
                    var agendaInformationWrapperElement = document.createElement('div');
                    agendaInformationWrapperElement.className = 'div-block-16'


                    var agendaInformationTextTitleElement = document.createElement('h4');
                    agendaInformationTextTitleElement.className = 'agenda-text-title';
                    agendaInformationTextTitleElement.innerHTML = eventName;

                    var agendaInformationTextInformationElement = document.createElement('div');
                    agendaInformationTextInformationElement.className = 'agenda-element-information';
                    agendaInformationTextInformationElement.innerHTML = new Date(element.start.dateTime).getHours() + ':' + new Date(element.start.dateTime).getMinutes() +  ' - ' + new Date(element.end.dateTime).getHours() + ':' + new Date(element.end.dateTime).getMinutes() + ', '+  element.location;

                    var agendaInformationContainerElement = document.createElement('div');
                    agendaInformationContainerElement.className = 'agenda-information-container';

                    agendaInformationContainerElement.appendChild(agendaInformationTextTitleElement);
                    agendaInformationContainerElement.appendChild(agendaInformationTextInformationElement);

                    agendaInformationWrapperElement.appendChild(agendaInformationContainerElement);

                    agendaElement.appendChild(agendaInformationWrapperElement);
                  })
                })

                agendaDateContainerElement.appendChild(agendaDateTitleElement);
                agendaDateContainerElement.appendChild(agendaDateNameElement);

                

                

                agendaElement.appendChild(agendaDateContainerElement);
                

                agendaContainer.appendChild(agendaElement);

               

            }
        } else {
           console.log("Aucun items trouvees")
         }
       });*/}