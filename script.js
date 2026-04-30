console.log("Hi");
let buttonstart = document.querySelector(".buttonstart");
console.log(buttonstart);
let ok1button = document.querySelector(".ok1button");
console.log(ok1button);
let talkAIbutton = document.querySelector(".talkAIbutton");
console.log(buttonstart);
let talkfriendbutton = document.querySelector(".talkfriendbutton");
console.log(buttonstart);
let waitbutton = document.querySelector(".waitbutton");
let useAIbutton = document.querySelector(".useAIbutton");
let ok2button= document.querySelector(".ok2button");
console.log(buttonstart);
let thinkbutton = document.querySelector(".thinkbutton");
console.log(buttonstart);
let dbuseAIbutton = document.querySelector(".dbuseAIbutton");
console.log(buttonstart);
let ok3button = document.querySelector(".ok3button");
console.log(buttonstart);
let playagainbutton = document.querySelector(".playagainbutton");
console.log(buttonstart);
let continuebutton= document.querySelector(".continuebutton");


let titleScreen = document.querySelector(".titleScreen");
console.log(titleScreen);
let characterintro = document.querySelector(".characterintro");
let choosepathscreen = document.querySelector(".choosepathscreen");
let confirmpathscreen = document.querySelector(".confirmpathscreen");
let askscreen = document.querySelector(".askscreen");
let askmomscreen = document.querySelector(".askmomscreen");
let thinkscreen = document.querySelector(".thinkscreen");
let madeupscreen = document.querySelector(".madeupscreen");
let playagainscreen = document.querySelector(".playagain");





buttonstart.addEventListener("click", function(buttonStartFunction) {
    buttonstart.style.display = "none";
  titleScreen.style.display = "none";
  characterintro.style.display = "block";
});



ok1button.addEventListener("click", function(ok1buttonFunction) {
    ok1button.style.display = "none";
  characterintro.style.display = "none";
  choosepathscreen.style.display = "block";

});

talkfriendbutton.addEventListener("click", function(talkfriendbuttonFunction) {
    talkfriendbutton.style.display = "none";
  choosepathscreen.style.display = "none";
  confirmpathscreen.style.display = "block";

});

waitbutton.addEventListener("click", function(waitbuttonFunction) {
    waitbutton.style.display = "none";
  confirmpathscreen.style.display = "none";
  askscreen.style.display = "block";
});

ok2button.addEventListener("click", function(ok2buttonFunction) {
    ok2button.style.display = "none";
  askscreen.style.display = "none";
  askmomscreen.style.display = "block";
});

thinkbutton.addEventListener("click", function(waitbuttonFunction) {
    thinkbutton.style.display = "none";
  askmomscreen.style.display = "none";
  thinkscreen.style.display = "block";
});

ok3button.addEventListener("click", function(waitbuttonFunction) {
    ok3button.style.display = "none";
  thinkscreen.style.display = "none";
  madeupscreen.style.display = "block";
});

continuebutton.addEventListener("click", function(waitbuttonFunction) {
    continuebutton.style.display = "none";
  madeupscreen.style.display = "none";
  playagainscreen.style.display = "block";
});