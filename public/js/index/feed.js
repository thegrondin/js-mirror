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
            var listItemPosition = 0;

            for (let i = 0; i < feedList.length; i++) {

                let feedItem = document.createElement('div');
                let feedItemImage = document.createElement('img');
                let feedItemTitle = document.createElement('div');
                let feedItemSource = document.createElement('div');

                feedItem.style.top = listItemPosition + "px";
                listItemPosition += 115

                feedItem.classList.add("list-item", "w-clearfix");
                feedItem.style.maxHeight = "100px"
                feedItem.style.minHeight = "100px"
                feedItemImage.classList.add("image-3", "newsfeed-image");
                feedItemImage.style.width = "140px";
                feedItemTitle.classList.add("text-block-4", "newsfeed-title");
                feedItemSource.classList.add("text-block-5", "newfeed-source");
                // Images on feed desactivated because i'm in a bus and my pc is connected
                // to an access point from cellphone. I don't want to wasted data...
                //feedItemImage.src = feedList[i].enclosure.url;
                feedItemTitle.innerText = feedList[i].title;
                feedItemSource.innerText = feedList[i].creator;
                feedItem.appendChild(feedItemImage);
                feedItem.appendChild(feedItemTitle);
                feedItem.appendChild(feedItemSource);
                feedListDOMElement.appendChild(feedItem);      
            }

            feedContainerDOMElement.appendChild(feedListDOMElement);  
        })
        
        var ulList = document.getElementById('feed-list');
        
        setInterval(function () {

            var listItem = document.getElementsByClassName('list-item')

            for (var index = 0; index < listItem.length; index++){

                if (listItem[index].getBoundingClientRect().bottom < ulList.getBoundingClientRect().top){
                    var temp = listItem[index];
                    temp.style.top = ( listItem[listItem.length-1].offsetTop + listItem[listItem.length-1].clientHeight+7) + "px"
                    ulList.removeChild(temp);
                    ulList.appendChild(temp)  
                }
                else {
                    listItem[index].style.top = (listItem[index].offsetTop-(10 + 0.6)) + "px"
                }
            }
        }, 50);
    })
})();
