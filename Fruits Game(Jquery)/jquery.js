
	
		
			
		
			
			
			//1. create a random fruit
			//define a random step
			//2. move fruit down one step every 30 sec
				//is fruit to low?
					//no -> repeat nb2
					//yes-> any trials left?
						//yes: remove one heart repeate nb1
						//no: show game over, button text: start game

//slice a fruit
	//play sound
	//explode fuit
	var playing = false;
	var score;
	var trialsLeft;
	var step;
	var action; //used for setInterval function
	var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'watermelon']
	$(document).ready(function() {
		//click on start reset button
		$("#startreset").click(function() {
			// are we playing?
			if(playing == true){//yes
				//reload page
				location.reload();
			} else{//no

				playing = true; //game initiated
				score = 0; //score set to 0
				$("#scorevalue").html(score);

				//show trials left
				$("#trialsLeft").show();
				trialsLeft = 3;
				addHearts();

				//hide game over box
				$("#gameOver").hide();
				
				//change button text to reset game
				$("#startreset").html("Reset Game");

				startAction();
			}

		});
	
	$("#fruit1").mouseover(function() {
		score++;
		$("#scorevalue").html(score);//update score

		$("#slicesound")[0].play();//play sound

		//stop fruit
		clearInterval(action);

		//hide fruit
		$("#fruit1").hide("explode", 500); //slice fruit

		//send new fruit
		setTimeout(startAction, 500);

	});
	/*

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
//    document.getElementById("slicesound").play();
    $("#slicesound")[0].play();//play sound
    
    //stop fruit
    clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //send new fruit
    setTimeout(startAction, 500);
});






	*/

	function addHearts() {
		//Empty trials left
		$("#trialsLeft").empty();

		//fill with hearts
		for(i =0; i< trialsLeft; i++) {
					$("#trialsLeft").append('<img src="images/heart.png" class = "life">');
				}
	}
	 function startAction(){
	 	//$("#fruitContainer").append('<img src="images/apple.png" class = "fruit">');
	 	$("#fruit1").show();
	 	chooseFruit(); //choose a random fruit

	 	//random position
	 	$("#fruit1").css({'left': Math.round(550*Math.random()),'top' : -10});

	 	//generate a random step
	 	step = 1+Math.round(5*Math.random());//change step

	 	//Move fruit down by one step every 10ms
	 	action = setInterval(function() {
	 		$("#fruit1").css('top', $("#fruit1").position().top + step);

	 		//check if the fruit is to low
	 		if($("#fruit1").position().top > $("#fruitContainer").height()){
	 			if(trialsLeft>1){
	 				$("#fruit1").show();
	 				chooseFruit(); //choose a random fruit

	 				//random position
	 				$("#fruit1").css({'left': Math.round(550*Math.random()),'top' : -10});

	 				//generate a random step
	 				step = 1+Math.round(5*Math.random());//change step

	 				//reduce trials by one
	 				trialsLeft --;

	 				//populate trialsLeft box
	 				addHearts();


	 			} else { //game
	 				playing = false; //game over
	 				//change button to start game
	 				$("#startreset").html("Start Game");
	 				$("#gameOver").show();
	 				$("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
	 				$("trialsLeft").hide();
	 				stopAction();
	 			}

	 		}
	 	}, 10);
	 }

	 //generate a random fruit
	 function chooseFruit() {
	 	$("#fruit1").attr('src', 'images/'+ fruits[Math.round(9*Math.random())]+ '.png');
	 }

	 //stop dropping fruits
	 function stopAction() {
	 	clearInterval(action);
	 	$("#fruit1").hide();
	 }
	 });

	



