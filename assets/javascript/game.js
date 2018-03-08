$(document).ready(function(){

//variables

var targetSum = 0;
var playerSum = 0;

var valueAddToRuby = 0;
var valueAddToDiamond = 0;
var valueAddToTopaz = 0;
var valueAddToEmerald = 0;

var winsCounter = 0;
var lossesCounter = 0;

//functions/objects

function initGame(){
// reset variables

//obtain random values of targetSum and valueAdders

targetSum = Math.floor(Math.random() * 101); //offset needed

valueAddToRuby = Math.floor(Math.random() * 12); //offset needed
valueAddToDiamond = Math.floor(Math.random() * 12); //offset needed
valueAddToTopaz = Math.floor(Math.random() * 12); //offset needed
valueAddToEmerald = Math.floor(Math.random() * 12); //offset needed



}

function playGame(){

$("#rubyButton").click(function(){
	playerSum += valueAddToRuby;
});

$("#diamondButton").click(function(){
	playerSum += valueAddToDiamond;
});

$("#topazButton").click(function(){
	playerSum += valueAddToTopaz;
});

$("#emeraldButton").click(function(){
	playerSum += valueAddToEmerald;
});


if(playerSum === targetSum){
	alert("Winner");
	winsCounter++;
	wrapUpGame();
	} else if(playerSum > targetSum){
		alert("Loser");
		lossesCounter++;
		wrapUpGame();
	} else {
		[next increment cycle]
	}



}

function wrapUpGame(){

}


//processing/calls

initGame();











});