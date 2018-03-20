
(function feed(){

    var feedList = [];

    var lapresseRssFeedTypeList = [
        {
            subject: "Manchettes",
            code: 225,
        },
        {
            subject: "Actualite",
            code: 178,
        },
        {
            subject: "international",
            code: 179,
        },
        {
            subject: "sports",
            code: 229,
        },
        {
            subject: "arts",
            code: 216,
        },
        {
            subject: "environnement",
            code: 241,
        },
        {
            subject: "vivre",
            code: 237,
        }
    ]

    YUI().use('yql', function(Y){
        var query = 'select * from rss where url = "http://www.lapresse.ca/rss/225.xml"'
        var q = Y.YQL(query, function(r){
            feedList = r.query.results.item;

            var feedContainerDOMElement = document.getElementById("feed-container");
            var feedTitleDOMElement = document.getElementById("feed-title");
            var feedListDOMElement = document.getElementById("feed-list");

            feedTitleDOMElement.innerText = "Feed: Google News";

            

            for (let i = 0; i < 1; i++) {

                let feedItem = document.createElement('div');
                let feedItemImage = document.createElement('img');
                let feedItemTitle = document.createElement('div');
                let feedItemSource = document.createElement('div');

                feedItem.classList.add("list-item", "w-clearfix");

                

                feedItemImage.classList.add("image-3", "newsfeed-image");
                feedItemImage.style.width = "108px";

                feedItemTitle.classList.add("text-block-4", "newsfeed-title");

                feedItemSource.classList.add("text-block-5", "newfeed-source");

                feedItemImage.src = feedList[i].enclosure.url;
                feedItemTitle.innerText = feedList[i].title;
                feedItemSource.innerText = feedList[i].creator;
 
                feedItem.appendChild(feedItemImage);
                feedItem.appendChild(feedItemTitle);
                feedItem.appendChild(feedItemSource);

                feedListDOMElement.appendChild(feedItem);      
                
                
            }

            feedContainerDOMElement.appendChild(feedListDOMElement);

            var movement = 0;

            var listItem = document.getElementsByClassName("list-item");

            var feedList = document.getElementById('feed-list');


            setInterval(function() {

                var triggered = false;
                
                var step = 0;

                for (let index = 0; index < listItem.length; index++) {
                    const element = listItem[index];

                    element.style.position = 'absolute';

                    element.style.top = movement + step + "px";

                    if (element.getBoundingClientRect().top < feedList.getBoundingClientRect().top){
                        element.style.top = (feedList.getBoundingClientRect.top + 200) + "px";
                        console.log(element)
                    }

                    /*if (listItem[0].getBoundingClientRect().top < feedList.getBoundingClientRect().top - 400){
                        console.log(listItem[0])
                        var temp = listItem[0];

                        temp.style.top =  (500 + movement) + "px";

                        

                    }*/
                    step += 115;


                }

                

                

                triggered = true ;


               

                movement -= 10;

            }, 100);

            
        })
    })


    
   
    

})();
