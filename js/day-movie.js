var modBtnList=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var modImgList = ["images/mod1.jpg","images/mod2.jpg","images/mod3.jpg","images/mod4.jpg","images/mod5.jpg","images/mod6.jpg"
    ,"images/mod7.jpg","images/mod8.jpg","images/mod9.jpg","images/mod10.jpg","images/mod11.jpg"];
var modTextList = ["The Seven Samurai<br><br>imdb: 8.7/10<br><br>A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.",
    "Love Me If You Dare<br><br>imdb: 7.7/10<br><br>Julien Janvier lost his mother young, drifted apart from his working class father and ever closer to confident Sophie Kowalsky, the Polish class outsider. Their dares game, symbolized by an interchanged music-box, grows ever bolder, regardless of harm to others and each-other. In his college years, it even suspends their relationship and toys with their marriages, but they are drawn back to each-other irresistibly.",
    "The Intouchables<br><br>imdb: 8.6/10<br><br>A rich quadriplegic, living in a mansion in Paris, requires a live-in carer. A young offender turns up for an interview, but he is not really looking to get the job. However, to his surprise, he is hired. The two men then develop a close friendship.",
    "The Shinning<br><br>imdb: 8.4/10<br><br>Signing a contract, Jack Torrance, a normal writer and former teacher agrees to take care of a hotel which has a long, violent past that puts everyone in the hotel in a nervous situation. While Jack slowly gets more violent and angry of his life, his son, Danny, tries to use a special talent, the \"Shining\", to inform the people outside about whatever that is going on in the hotel.",
    "Summer Wars<br><br>imdb: 7.6/10<br><br>Kenji Koiso, an eleventh grade math genius, agrees to take a summer job at the Nagano hometown of his crush, Natuski. When he arrives, he finds that her family have reunited to celebrate the 90th birthday of the family matriarch. His job is to pretend to be Natsuki's fiancé. Meanwhile, his attempt to solve a mathematical equation causes a parallel world's collision with earth.",
    "Schindler's List<br><br>imdb: 8.9/10<br><br>Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    "Se7en<br><br>imdb: 8.6/10<br><br>Taking place in a nameless city, Se7en follows the story of two homicide detectives tracking down a sadistic serial killer (Kevin Spacey) who chooses his victims according to the seven deadly sins. Brad Pitt stars as Detective David Mills, a hopeful but naive rookie who finds himself partnered with veteran Detective William Somerset (Morgan Freeman). Together they trace the killer's every step, witnessing the aftermath of his horrific crimes one by one as the victims pile up in rapid succession, all the while moving closer to a gruesome fate neither of them could have predicted.",
    "Hachi: A Dog's Tale<br><br>imdb: 8.1/10<br><br>In Bedridge, Professor Parker Wilson finds an abandoned dog at the train station and takes it home with the intention of returning the animal to its owner. He finds that the dog is an Akita and names it Hachiko. However, nobody claims the dog so his family decides to keep Hachi.",
    "Castle in the Sky<br><br>imadb: 8.1/10<br><br>A young boy stumbles into a mysterious girl who floats down from the sky. The girl, Sheeta, was chased by pirates, army and government secret agents. In saving her life, they begin a high flying adventure that goes through all sorts of flying machines, eventually searching for Sheeta's identity in a floating castle of a lost civilization.",
    "Home<br><br>imdb: 8.6/10<br><br>With aerial footage from fifty-four countries, 'Home' is a depiction of how Earth's problems are all interlinked.",
    "Big Fish<br><br>imdb: 8.0/10<br><br>This film follows the incredible life of Edward Bloom, through a series of flashbacks that begin when his son Will visits him for the last time. Edward is dying of cancer, and Will hasn't spoken to him for years because he believes him to be a liar that never really cared for his family. As Edward's story unfolds once again, Will tries to finally understand the truth about who his father really was..."];
var modVideoList = ["https://www.youtube.com/embed/7mw6LyyoeGE","https://www.youtube.com/embed/CX23hgYDTwg",
"https://www.youtube.com/embed/34WIbmXkewU","https://www.youtube.com/embed/i-B_bbkEfS0",
"https://www.youtube.com/embed/UbmdYasVDDg","https://www.youtube.com/embed/JdRGC-w9syA",
"https://www.youtube.com/embed/4M7M-juFLTU","https://www.youtube.com/embed/Y6U7mAnPtw4",
"https://www.youtube.com/embed/McM0_YHDm5A","https://www.youtube.com/embed/92kt3JUwtgk",
"https://www.youtube.com/embed/M3YVTgTl-F0"];

var modLeftBtn = function(){
    for(var i = 0; i<modBtnList.length; i++){
        var type = document.getElementById(i);
        if(i%2==1){
            type.style.background = "#e70e0e";
            type.style.color = "white"
        }else{
            type.style.background = "white";
            type.style.color = "#e70e0e";
        }
    }
}

var getInfo = function(i){
    console.log(i);
    var rightImg = document.getElementById("mod-poster");
    var rightText = document.getElementById("description");
    var rightTrailer = document.getElementById("mod-trailer");
    rightImg.src = modImgList[i];
    rightText.innerHTML = modTextList[i];
    rightTrailer.src = modVideoList[i];
}

var init = function(){
    var searchBtn = document.getElementById("search-btn");
    var searchInput = document.getElementById("search-box");

    document.getElementById("btm-btn").addEventListener('click', function(e){
        document.getElementById("mod-right-bottom").style.display = "none";
        document.getElementById("mod-right-top").style.display = "block"
    });

    document.getElementById("top-btn").addEventListener('click', function(e){
        document.getElementById("mod-right-bottom").style.display = "block";
        document.getElementById("mod-right-top").style.display = "none"
    });

    modLeftBtn();
    getInfo(0);

    searchBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href="http://www.imdb.com/find?ref_=nv_sr_fn&q="+searchInput.value+"&s=all";
        searchInput.value="";
    });
    document.getElementById("the-mod-poster").src = "images/themod.jpg";
    document.getElementById("the-mod-title").innerHTML = "Castle in the Sky (1986)"
    document.getElementById("the-mod-description").innerHTML = "Animation"

};

window.onload = init();
/**
 * Created by Lucien on 8/15/2016.
 */
