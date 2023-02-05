var randomnumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;



if(randomnumber === 1){
    var button = document.getElementById("btn2");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://www.google.com/doodles/halloween-2020"});
});
}

else if(randomnumber === 2){
    var button = document.getElementById("btn2");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://www.google.com/doodles/celebrating-bubble-tea"});
});
}

else if(randomnumber === 3){
    var button = document.getElementById("btn2");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://www.bubbleshooter.net/"});
});
}

else if(randomnumber === 4){
    var button = document.getElementById("btn2");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://trex-runner.com/a"});
});
}

