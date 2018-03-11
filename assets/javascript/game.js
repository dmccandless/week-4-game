$(document).ready(function(){

	$("#rubyButton").click(function(){
		crystalsGame.ruby();
	});
	

	$("#diamondButton").click(function(){
		crystalsGame.diamond();
	});
	

	$("#topazButton").click(function(){
		crystalsGame.topaz();
	});
	

	$("#emeraldButton").click(function(){
		crystalsGame.emerald();
	});

	crystalsGame.setInitValues();
	
});

//var gameRunning = false;


var crystalsGame = {

	targetSum: 0,
	playerSum: 0,

	winsCounter: 0,
	lossesCounter: 0,

	valueAddFromRuby: 0,
	valueAddFromDiamond: 0,
	valueAddFromTopaz: 0,
	valueAddFromEmerald: 0,

	resetInitValues: function(){
		crystalsGame.targetSum = 0;
		crystalsGame.playerSum = 0;

		crystalsGame.winsCounter = 0;
		crystalsGame.lossesCounter = 0;

		crystalsGame.valueAddFromRuby = 0;
		crystalsGame.valueAddFromDiamond = 0;
		crystalsGame.valueAddFromTopaz = 0;
		crystalsGame.valueAddFromEmerald = 0;

		$("#numGenerated").text("");
		$("#sumNumsEntered").text("");

	},

	setInitValues: function(){

		//gameRunning = true;

		crystalsGame.targetSum = Math.floor(Math.random() * 101) + 19;
		console.log(crystalsGame.targetSum);

		crystalsGame.valueAddFromRuby = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromRuby);
		crystalsGame.valueAddFromDiamond = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromDiamond);
		crystalsGame.valueAddFromTopaz = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromTopaz);
		crystalsGame.valueAddFromEmerald = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromEmerald);

		$("#numGenerated").text(crystalsGame.targetSum);


	},


	ruby: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromRuby;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
	},

	diamond: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromDiamond;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
	},

	topaz: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromTopaz;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
	},

	emerald: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromEmerald;
		$("#sumNumsEntered").text(crystalsGame.playerSum);
	},

	determineContest: function(tSum, pSum){
		if(pSum === tSum){
		alert("Player Wins");
		crystalsGame.winsCounter++;
		crystalsGame.wrapUpGame();
		} else if(pSum > tSum){
			alert("Player Loses");
			crystalsGame.lossesCounter++;
			crystalsGame.wrapUpGame();
		} else {
			continueGame();
		}
	//note: continueGame() is a placeholder function

	},

	wrapUpGame: function(){
		$("#winsCounted").text(crystalsGame.winsCounter);
		$("#lossesCounted").text(crystalsGame.lossesCounter);
		//gameRunning = false;
	}

}; //end of crystalsGame object



//$("#sumNumsEntered").text(crystalsGame.playerSum);

//Do we need to have crystal value displayed on each crystal when presssed?

