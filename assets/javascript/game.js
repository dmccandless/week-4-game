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

//var gameRunning = false;


var crystalsGame = {

	targetSum: 0,
	playerSum: 0,

	winsCounter: 0,
	lossesCounter: 0,

	valueAddFromRuby: 0,
	valueAddFromDiamond: 0,
	valueAddFromAmber: 0,
	valueAddFromEmerald: 0,

	resetInitValues: function(){
		crystalsGame.targetSum = 0;
		crystalsGame.playerSum = 0;

		//crystalsGame.winsCounter = 0;
		//crystalsGame.lossesCounter = 0;

		crystalsGame.valueAddFromRuby = 0;
		crystalsGame.valueAddFromDiamond = 0;
		crystalsGame.valueAddFromAmber = 0;
		crystalsGame.valueAddFromEmerald = 0;

		$("#numGenerated").text("0");
		$("#sumNumsEntered").text("0");

		setTimeout(crystalsGame.setInitValues, 2000);

	},

	setInitValues: function(){

		//gameRunning = true;

		crystalsGame.targetSum = Math.floor(Math.random() * 101) + 19;
		console.log(crystalsGame.targetSum);

		crystalsGame.valueAddFromRuby = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromRuby);
		crystalsGame.valueAddFromDiamond = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromDiamond);
		crystalsGame.valueAddFromAmber = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromAmber);
		crystalsGame.valueAddFromEmerald = Math.floor(Math.random() * 12) + 1;
		console.log(crystalsGame.valueAddFromEmerald);

		$("#numGenerated").text(crystalsGame.targetSum);


	},


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

	/*continueGame: function(){

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

	},*/

	determineContest: function(tSum, pSum){
		if(tSum === pSum){
		setTimeout(alert("Player Wins"), 2000);
		crystalsGame.winsCounter++;
		crystalsGame.wrapUpGame();
		} else if(tSum < pSum){
			setTimeout(alert("Player Loses"), 2000);
			crystalsGame.lossesCounter++;
			crystalsGame.wrapUpGame();
		} else {
			//crystalsGame.continueGame();
		}
	//note: continueGame() is a placeholder function

	},

	wrapUpGame: function(){
		$("#winsCounted").text(crystalsGame.winsCounter);
		$("#lossesCounted").text(crystalsGame.lossesCounter);
		setTimeout(crystalsGame.resetInitValues, 2000);
	}

}; //end of crystalsGame object



