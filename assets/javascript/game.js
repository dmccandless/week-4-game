//set up the crystals buttons and set the initial value variables of the game

$(document).ready(function(){

	$("#rubyButton").click(function(){
		crystalsGame.ruby();
	});
	

	$("#diamondButton").click(function(){
		crystalsGame.diamond();
	});
	

	$("#amberButton").click(function(){
		crystalsGame.amber();
	});
	

	$("#emeraldButton").click(function(){
		crystalsGame.emerald();
	});

	crystalsGame.setInitValues();
	
});

//here's the game object

var crystalsGame = {

//initial variables
	targetSum: 0,
	playerSum: 0,

	winsCounter: 0,
	lossesCounter: 0,

	valueAddFromRuby: 0,
	valueAddFromDiamond: 0,
	valueAddFromAmber: 0,
	valueAddFromEmerald: 0,

//after a game has been played
//reset of variables and displays of target number and 
//total number entered by player

	resetInitValues: function(){
		crystalsGame.targetSum = 0;
		crystalsGame.playerSum = 0;

		crystalsGame.valueAddFromRuby = 0;
		crystalsGame.valueAddFromDiamond = 0;
		crystalsGame.valueAddFromAmber = 0;
		crystalsGame.valueAddFromEmerald = 0;

		$("#numGenerated").text("0");
		$("#sumNumsEntered").text("0");

		setTimeout(crystalsGame.setInitValues, 2000);

	},

//set the random values of target number and values of crystals

	setInitValues: function(){

//the target number which the player tries to match
//is set for this game with a random number from 19 to 120

		crystalsGame.targetSum = Math.floor(Math.random() * 102) + 19;
		console.log(crystalsGame.targetSum);

//each crystal is set for this game with random value from 1 to 12

		crystalsGame.valueAddFromRuby = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromRuby);
		crystalsGame.valueAddFromDiamond = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromDiamond);
		crystalsGame.valueAddFromAmber = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromAmber);
		crystalsGame.valueAddFromEmerald = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromEmerald);

//display the target number for player to play against

		$("#numGenerated").text(crystalsGame.targetSum);


	},

//event listeners for crystals: they increment player's sum,
//display the increment in player's sum, and call 
//determine contest function to see if game is won or lost

	ruby: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromRuby;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
		crystalsGame.determineContest(crystalsGame.targetSum, crystalsGame.playerSum);
	},

	diamond: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromDiamond;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
		crystalsGame.determineContest(crystalsGame.targetSum, crystalsGame.playerSum);
	},

	amber: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromAmber;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
		crystalsGame.determineContest(crystalsGame.targetSum, crystalsGame.playerSum);
	},

	emerald: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromEmerald;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
		crystalsGame.determineContest(crystalsGame.targetSum, crystalsGame.playerSum);
	},

//tests if game is won or lost:
//in both win or lose case, final player's sum is displayed again
//as part of tactic to make certain alert does not conflict with such display;
//alert is given of win or loss,
//and alert is delayed by 2 seconds as other part of tactic
//to make certain alert does not conflict with final display of player's sum;
//win or loss counter is incremented,
//and wrap up game function is called;
//if no decision yet in game, nothing is done by this function
//and crystal buttons continue to assert control when
//they are pressed and generate events

	determineContest: function(tSum, pSum){
		if(tSum === pSum){
		$("#sumNumsEntered").text(crystalsGame.playerSum);
		setTimeout(function(){alert ("Player Wins");}, 2000);
		crystalsGame.winsCounter++;
		crystalsGame.wrapUpGame();
		} else if(tSum < pSum){
			$("#sumNumsEntered").text(crystalsGame.playerSum);
			setTimeout(function(){alert ("Player Loses");}, 2000);
			crystalsGame.lossesCounter++;
			crystalsGame.wrapUpGame();
		}

	},

//displays cumulative wins and losses for player as of this end of game
//after 2 second delay, starts a new game

	wrapUpGame: function(){
		$("#winsCounted").text("Wins: " + crystalsGame.winsCounter);
		$("#lossesCounted").text("Losses: " + crystalsGame.lossesCounter);
		setTimeout(crystalsGame.resetInitValues, 2000);
	}

}; 
//end of crystalsGame object



