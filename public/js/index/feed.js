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
            feedTitleDOMElement.innerText = "La Presse";
            
            var jsonItemIndex = 0;


            setInterval (function () {

                var listItemPosition = 0;

                feedListDOMElement.velocity('transition.fadeOut', {duration: 2000})

                feedListDOMElement.style.display = "block"

                setTimeout( function () {
                    feedListDOMElement.innerHTML = ''
                
                      for (let i = 0; i < 3; i++) {

                          let feedItem = document.createElement('div');
                          let feedItemImage = document.createElement('img');
                          let feedItemTitle = document.createElement('div');
                          let feedItemSource = document.createElement('div');
          
                          feedItem.style.top = listItemPosition + "px";
                          listItemPosition += 180
          
                          feedItem.classList.add("list-item", "w-clearfix");
                          feedItem.style.maxHeight = "150px"
                          feedItem.style.minHeight = "150px"
                          feedItemImage.classList.add("image-3", "newsfeed-image");
                          feedItemImage.style.width = "400px";
                          feedItemTitle.classList.add("text-block-4", "newsfeed-title");
                          feedItemSource.classList.add("text-block-5", "newfeed-source");
                          feedItemImage.src = feedList[jsonItemIndex].enclosure.url;
                          feedItemTitle.innerText = feedList[jsonItemIndex].title;
                          feedItemSource.innerText = feedList[jsonItemIndex].creator;
                          feedItem.appendChild(feedItemImage);
                          feedItem.appendChild(feedItemTitle);
                          feedItem.appendChild(feedItemSource);
                          feedListDOMElement.appendChild(feedItem);    
                          
                          jsonItemIndex++;
          
                          if (jsonItemIndex >= feedList.length){
                              jsonItemIndex = 0;
                          }
                      }

                      feedListDOMElement.velocity('transition.fadeIn', {duration: 2000})
                }, 2000)                
            }, 20000)
            feedContainerDOMElement.appendChild(feedListDOMElement);  
        })
    })
})();
