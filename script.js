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
let continuebutton1= document.querySelector(".continuebutton1");
let ok4button= document.querySelector(".ok4button");
let continuebutton2= document.querySelector(".continuebutton2");
let continuebutton3= document.querySelector(".continuebutton3");
let continuebutton4= document.querySelector(".continuebutton4");
let continuebutton5= document.querySelector(".continuebutton5");
let continuebutton6= document.querySelector(".continuebutton6");
let sourcesbutton= document.querySelector(".sourcesbutton")




let titleScreen = document.querySelector(".titleScreen");
console.log(titleScreen);
let characterintro = document.querySelector(".characterintro");
let choosepathscreen = document.querySelector(".choosepathscreen");
let confirmpathscreen = document.querySelector(".confirmpathscreen");
let askscreen = document.querySelector(".askscreen");
let askmomscreen = document.querySelector(".askmomscreen");
let thinkscreen = document.querySelector(".thinkscreen");
let madeupscreen = document.querySelector(".madeupscreen");
let playagainscreen = document.querySelector(".playagainscreen");
let chooseAIscreen = document.querySelector(".chooseAIscreen");
let talkingAIscreen = document.querySelector(".talkingAIscreen");
let confrontscreen = document.querySelector(".confrontscreen");
let warningscreen = document.querySelector(".warningscreen");
let futurescreen = document.querySelector(".futurescreen");
let checkscreen = document.querySelector(".checkscreen");
let sourcesscreen= document.querySelector(".sourcesscreen")








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


continuebutton1.addEventListener("click", function(waitbuttonFunction) {
    continuebutton1.style.display = "none";
  madeupscreen.style.display = "none";
  playagainscreen.style.display = "block";
});


talkAIbutton.addEventListener("click", function(waitbuttonFunction) {
    talkAIbutton.style.display = "none";
  choosepathscreen.style.display = "none";
  chooseAIscreen.style.display = "block";
});


ok4button.addEventListener("click", function(waitbuttonFunction) {
    ok4button.style.display = "none";
  chooseAIscreen.style.display = "none";
  talkingAIscreen.style.display = "block";
});


continuebutton2.addEventListener("click", function(waitbuttonFunction) {
    continuebutton2.style.display = "none";
  talkingAIscreen.style.display = "none";
  confrontscreen.style.display = "block";
});


continuebutton3.addEventListener("click", function(waitbuttonFunction) {
    continuebutton3.style.display = "none";
  confrontscreen.style.display = "none";
  warningscreen.style.display = "block";
});


continuebutton4.addEventListener("click", function(waitbuttonFunction) {
    continuebutton4.style.display = "none";
  warningscreen.style.display = "none";
  futurescreen.style.display = "block";
});


continuebutton5.addEventListener("click", function(waitbuttonFunction) {
    continuebutton5.style.display = "none";
  futurescreen.style.display = "none";
  playagainscreen.style.display = "block";
});


useAIbutton.addEventListener("click", function(waitbuttonFunction) {
    useAIbutton.style.display = "none";
  confirmpathscreen.style.display = "none";
  chooseAIscreen.style.display = "block";
});


dbuseAIbutton.addEventListener("click", function(waitbuttonFunction) {
    dbuseAIbutton.style.display = "none";
  askmomscreen.style.display = "none";
  checkscreen.style.display = "block";
});


continuebutton6.addEventListener("click", function(waitbuttonFunction) {
    continuebutton6.style.display = "none";
  checkscreen.style.display = "none";
  madeupscreen.style.display = "block";
});


sourcesbutton.addEventListener("click", function(waitbuttonFunction) {
    sourcesbutton.style.display = "none";
  playagainscreen.style.display = "none";
  sourcesscreen.style.display = "block";
});



















