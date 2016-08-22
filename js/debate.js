var viewer = ["Chandler Bing",
"Monica Geller",
"Rachel Greene",
"Joey Tribbiani"];
var topicMovie = ["Suicide Squad",
"The Hunger Games: Mockingjay - Part 2",
"Minions",
"Inside Out"];
var content = ["Suicide Squad is one of the best DCEU movie. It contains a lot of humor that work well in this kinda universe. The characters have so much chemistry, especially between Harley Quinn and Joker although they didn't make much of interaction. Chemistry between Rick Flag and Deadshot is interesting too. But the Characters that surprised me the most is Captain Boomerang and El Diablo. Captain Boomerang character get the best joke in my opinion in this movie. El Diablo character has a back story again in opinion the best. This movie got a really good story, maybe at certain parts is kinda confusing but in the end it solved really well. The week part of this movie is Killer Croc character. He is underused in this movie. It's just like he is there but not very important. Overall this movie is really awesome not to mention the soundtracks it's just perfect.",
"The Hunger Games: Mockingjay - Part 2 is a film without any artistic integrity. It was purely made to grab as much cash from its audience as possible. You can sense this in the film which does not have much of a plot, scenes that are purely filler and the story just crawls because the book that it is based on has been split into two which means more padding than a model wearing a wonderbra.",
"I don't usually write reviews but this was such a disappointment that I felt I had to put something. Most of the good jokes were shown in the trailers, so if you've seen the trailer then it's probably not worth the money. There were 3 of us watched this and although we all loved the despicable movies none of us enjoyed this. My son (11) said it felt like it was 2 hours long it was so boring. I can't really explain why it came across as so poor - but it just seemed really lazy and without Gru to play against the Minnions were just to simple. It was slapstick with no soul. The music although quite good didn't really seem to fit the film - just seemed to be tacked on at bit were they felt they should have a soundtrack and a famous song. Buy yourself a copy of despicable me and watch it again and again. Much better value for money! This just felt rushed, with loads of stock jokes, maybe hoping enough of them would hit the mark - they didn't.",
"If you come to the cinema with your 6 year-old kid expecting something relaxing, then you'll be disappointed. This movie will not make you laugh, bu it'll make you cry and then it'll make you smile. Or at least that's what it has made me. I think the most important value of this movie is that it makes you feel connected. \"Inside out\" is not about extraordinary and unimaginable characters, it's just about a normal 11 year-old girl with her normal emotions. I can see myself in many ways watching this. And to me it's what makes this movie so great! Besides, the producer has made a very good job combining Riley's story with the emotions' one. The lessons are also cleverly hidden inside the movie. An extremely heart-moving and meaningful movie. I highly recommend it."]
var avatarList = ["url(images/avatars/1.jpg)","url(images/avatars/2.jpg)","url(images/avatars/3.jpg)","url(images/avatars/4.jpg)"]
var viewerRight = [["Ross Geller"],[],["Phoebe Buffey", "Lucien"],[]];
var contentRight = [["I can not disagree more!"],[],["So I have seen the movie Minions. The jokes are great. Even though I have seen the trailer, I still think they are great and made me laugh. And I don't think it was boring.","I don't really understand"],[]]

var addDebates = function(){
    var debateHolding = document.getElementById("debates-container");
    for(var i = 0; i < viewer.length; i++){
        var newDebate = document.createElement("div");
        newDebate.className = "one-debate";
        var divide = document.createElement("div");
        divide.className = "divide-line";
        var newLeft = document.createElement("div");
        newLeft.className = "left-all";
        var newAva = document.createElement("div");
        newAva.className = "avatar";
        newAva.style.background = avatarList[i];
        newAva.style.backgroundSize = "100%";
        var leftCon = document.createElement("div");
        leftCon.className = "left";
        var leftViewer = document.createElement("p");
        leftViewer.className = "username";
        leftViewer.innerHTML = viewer[i];
        var leftTopic = document.createElement("p");
        leftTopic.className = "movie-title";
        leftTopic.innerHTML = topicMovie[i];
        var leftContent = document.createElement("p");
        leftContent.className = "content";
        leftContent.innerHTML = content[i];


        leftCon.appendChild(leftViewer);
        leftCon.appendChild(leftTopic);
        leftCon.appendChild(leftContent);
        newLeft.appendChild(newAva);
        newLeft.appendChild(leftCon);
        newDebate.appendChild(divide);
        newDebate.appendChild(newLeft);

        for(var j = 0; j < viewerRight[i].length;j++){
            var newRight = document.createElement("div");
            newRight.className = "right-all";
            var rightCon = document.createElement("div");
            rightCon.className = "right";
            var rightViewer = document.createElement("p");
            rightViewer.className = "usernameRight";
            rightViewer.innerHTML = viewerRight[i][j];
            var rightContent = document.createElement("p");
            rightContent.className = "content";
            rightContent.innerHTML = contentRight[i][j];
            rightCon.appendChild(rightViewer);
            rightCon.appendChild(rightContent);
            newRight.appendChild(rightCon)
            newDebate.appendChild(newRight);
        }


        console.log(debateHolding);
        debateHolding.appendChild(newDebate);
    }
}

var init = function(){
    var searchBtn = document.getElementById("search-btn");
    var searchInput = document.getElementById("search-box");
    searchBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href="http://www.imdb.com/find?ref_=nv_sr_fn&q="+searchInput.value+"&s=all";
        searchInput.value="";
    });

    addDebates();
};

window.onload = init();
/**
 * Created by Lucien on 8/16/2016.
 */
