$(document).ready(function(){

	$("#rubyButton").click(function(){
		crystalsGame.ruby;
	});
	

	$("#diamondButton").click(function(){
		crystalsGame.diamond;
	});
	

	$("#topazButton").click(function(){
		crystalsGame.topaz;
	});
	

	$("#emeraldButton").click(function(){
		crystalsGame.emerald;
	});
	
});


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
		crystalsGame.targetSum = Math.floor(Math.random() * 101) + 19;
		console.log(targetSum);

		crystalsGame.valueAddFromRuby = Math.floor(Math.random() * 12) + 1;
		console.log(valueAddToRuby);
		crystalsGame.valueAddFromDiamond = Math.floor(Math.random() * 12) + 1;
		console.log(valueAddToDiamond);
		crystalsGame.valueAddFromTopaz = Math.floor(Math.random() * 12) + 1;
		console.log(valueAddToTopaz);
		crystalsGame.valueAddFromEmerald = Math.floor(Math.random() * 12) + 1;
		console.log(valueAddToEmerald);

		$("#numGenerated").text(crystalsGame.targetSum);


	},


	ruby: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromRuby;
	},

	diamond: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromDiamond;
	},

	topaz: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromTopaz;
	},

	emerald: function(){
		crystalsGame.playerSum += crystalsGame.valueAddFromEmerald;
	},

}; //end of crystalsGame object



//$("#sumNumsEntered").text(crystalsGame.playerSum);




/*if(playerSum === targetSum){
	alert("Winner");
	winsCounter++;
	wrapUpGame();
	} else if(playerSum > targetSum){
		alert("Loser");
		lossesCounter++;
		wrapUpGame();
	} else {
		continueGame();
	}*/
//note: continueGame() is a placeholder function



