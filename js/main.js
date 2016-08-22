var slideshover;
var slideName = ["Nuovo cinema Paradiso", "Wall-E", "The Legend of 1900", "The Cove"];
var box = ["A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "A baby boy, discovered in 1900 on an ocean liner, grows into a musical prodigy, never setting foot on land.",
    "A   group of activists, led by renowned dolphin trainer Ric O'Barry, infiltrate a cove near Taijii, Japan to expose both a shocking instance of animal abuse and a serious threat to human health."];
slideshover = function (slidecount){
    var slideshow = document.getElementById("right-slides");
    var slideBtn = document.getElementsByClassName("slides-btn");
    var bgList = ["url(images/r1.jpg)", "url(images/r2.jpg)", "url(images/r3.jpg)", "url(images/r4.jpg)"];
    slideshow.style.background = bgList[slidecount];
    slideshow.style.backgroundSize = "100% auto";
    document.getElementById("slide-name").innerHTML = slideName[slidecount];
    document.getElementById("box").innerHTML = box[slidecount];
    for(var i = 0; i < 4; i++)
    {
        if(i==slidecount){
            slideBtn[i].style.height = "40%";
        }else{
            slideBtn[i].style.height = "20%";
        }
    }
};

var leftBg;
leftBg = function (slidecount) {
    var left = document.getElementsByClassName("slides-btn");
    var bgImages = ["images/l1.jpg", "images/l2.jpg", "images/l3.jpg", "images/l4.jpg"]
    left[slidecount].style.backgroundImage = "url(" + bgImages[slidecount] + ")";
};

var init = function(){
    var searchBtn = document.getElementById("search-btn");
    var searchInput = document.getElementById("search-box");

    for(var i = 0; i < 4; i++){
        leftBg(i);
    }

    addTrailers();
    addPosters();
    slideshover(0);

    searchBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href="http://www.imdb.com/find?ref_=nv_sr_fn&q="+searchInput.value+"&s=all";
        searchInput.value="";
    });

};

var trailerArray = ["Inception", "Inside Out", "Life of Pi", "The Danish Girl", "The Wind Rises"];
var thumbnailArray = ["url(images/t1.jpg)", "url(images/t2.jpg)", "url(images/t3.jpg)", "url(images/t5.jpg)", "url(images/t6.jpg)"];
var upperArray = ["Lucien", "Jacob", "Magnus", "Terrika", "Danli"]

var addTrailers = function(){
    var trailerHolding = document.getElementById("tra-container");
    for(var i = 0; i < trailerArray.length; i++){
        var newTrailer = document.createElement("div");
        newTrailer.id = i;
        newTrailer.className = "trailer";
        newTrailer.style.background = thumbnailArray[i];
        newTrailer.style.backgroundSize = '100%';

        var name = document.createElement('p');
        name.className = "trailerName";
        name.innerHTML = trailerArray[i];

        var upper = document.createElement('p');
        upper.className = "upper";
        upper.innerHTML = upperArray[i];

        newTrailer.addEventListener('click', function(e){
            play(e.target.id);
        });

        newTrailer.appendChild(name);
        newTrailer.appendChild(upper);
        trailerHolding.appendChild(newTrailer);
    }
}

var playTrailerList = ["https://www.youtube.com/embed/YoHD9XEInc0", "https://www.youtube.com/embed/seMwpP0yeu4",
        "https://www.youtube.com/embed/j9Hjrs6WQ8M", "https://www.youtube.com/embed/d88APYIGkjk",
        "https://www.youtube.com/embed/2QFBZgAZx7g"];
var play = function(trailerCount){
    var player = document.getElementById("player");
    var trailerPlayer = document.getElementById("trailer-player");
    console.log(trailerCount);
    trailerPlayer.src = playTrailerList[trailerCount];
    player.style.display = "block";
    document.getElementById("close-btn").addEventListener('click', function(e){
        player.style.display = "none";
        trailerPlayer.src = "";
    })
};

var posterList = ["images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg","images/p5.jpg","images/p6.jpg",
    "images/p7.jpg", "images/p8.jpg", "images/p9.jpg", "images/p10.jpg", "images/p11.jpg", "images/p12.jpg",
    "images/p13.jpg", "images/p14.jpg", "images/p15.jpg", "images/p16.jpg", "images/p17.jpg", "images/p18.jpg",
    "images/p19.jpg", "images/p20.jpg"];

var posterTitleList = ["The Hunger Game: Catching Fire (2013)", "Big Hero 6 (2014)", "The Silence of the Lambs (1991)",
"The Martian (2015)", "The Revenant (2015)", "Kill the Messenger (2014)", "The Lobster (2015)", "Enemy (2013)",
"Only God Forgives (2013)", "You're Next (2011)", "Brokeback Mountain (2005)", "As Above, So Below (2014)",
"Godzilla (2014)", "Birdman (2014)", "Mulholland Dr. (2001)", "Mad Max: Fury Road (2015)", "The Social Network (2010)",
"Immortals (2011)", "The Dark Knight Rises (2012)", "Nurse 3D (2013)"];

var addPosters = function(){
    var postHolding = document.getElementById("pos-container");
    var holderList = ["pos-col-1","pos-col-2","pos-col-3"];
    var counter = 0;
    for(var i = 0; i < posterList.length; i++){
        var newPoster = document.createElement('img');
        newPoster.id = 1000+i;
        newPoster.className = "poster";
        newPoster.src = posterList[i];
        if(counter>2) counter = 0;
        document.getElementById(holderList[counter]).appendChild(newPoster);
        counter++;
        newPoster.addEventListener('click', function(e){
            showPoster(e.target.id-1000);
        });
    }
};

var showPoster = function(posterCount){
    console.log(posterCount);
    var poster = document.getElementById("big-poster");
    var bigPoster = document.getElementById("large");
    poster.style.display = "block";
    bigPoster.src = posterList[posterCount];
    document.getElementById("image-title").innerHTML=posterTitleList[posterCount];
    document.getElementById("close-btn2").addEventListener('click', function(e){
        poster.style.display = "none";
    })
};

window.onload = init();

var count = 0;
window.setInterval(function(){
    slideshover(count);
    if(count<3) count++;
    else count = 0;
},10000);
/**
 * Created by Lucien on 8/14/2016.
 */
