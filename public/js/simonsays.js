$(document).ready(function(){
	var playerTurn=false;
var playerArray=[];
var correctArray=[];
var correctNote;
var gameOver=false;
var turns=0;
if(turns==0){
	computerTurn();
}
//Allows the player to use the keyboard only during their turn;
if(playerTurn==true && turns!=0){
		$('.keywhite').css('background-color','#ffffd')
		$('.keybalck').css('background-color','black');
		$('.key').mousedown(function(event){
			var buttonLetter = this.className;
			buttonLetter = buttonLetter.charAt(buttonLetter.length-1);
			changeColor(this,buttonLetter)
			playSound(this);
		$('.keywhite').mouseup(function(event){
			$('.keywhite').css('backgroundColor','white');
		});
		$('.keyblack').mouseup(function(event){
			$('.keyblack').css('backgroundColor','black');
		});	
		playerArray.push(this.accessKey);
		if(playerArray.length==correctArray.length){
			checkArray();
			computerTurn();
		}
		});
}
function computerTurn(){
	playerTurn=false;
	addNote();
	for(var j=0;j<correctArray.length;j++){
		$('.key').eq(j).animate(
		{
			backgroundColor:"green",
		},(1000*j),function(){
				var key = document.getElementsByClassName("key")[j].id;
				var keySound = document.getElementById(key + 'sound');
				keySound.play();
		});
		$('.keyblack').animate({
			'backgroundColor':'black',
		},(1000*j));
		$('.keywhite').animate({
			'backgroundColor':'white',
		},(1000*j));
		$('.keywhite').animate({
			backgroundColor:'white',
		},1);
		$('.keyblack').animate({
			backgroundColor:'black',
		},1000);
	}
	playerArray=[];
	turns++;
	playerTurn=true;
}
//Double checks keys player pressed against the correct keys
function checkArray (){
	for(var j=0;j<playerArray.length;j++){
			if(playerArray[j]!=correctArray[j]){
				playerArray=[];
				correctArray=[];
				gameOver=true;
				alert('GAME OVER');
			}
		}
};
//Reverts keys back to their original color
function returnOrigialColor(){
	$('.keywhite').css('background-color','white');
	$('.black').css('background-color','black');
}
//Loads the audio file for the proper key
function playSound(key){
	var test = document.getElementById(key.id + 'sound');
	test.play();
}
//Used to change key color when the key is pressed
function changeColor(key){
	switch(key.className.charAt(key.className.length-1)){
	case 'C':
		key.style.backgroundColor='#c6acc9';
		break;
	case 'D':
		key.style.backgroundColor='#47d1d5';
		break;
	case 'E':
		key.style.backgroundColor='#fdd6b5';
		break;
	case 'F':
		key.style.backgroundColor='#a7e4ae';
		break;
	case 'G':
		key.style.backgroundColor='#bfffe6';
		break;
	case 'A':
		key.style.backgroundColor='#8699d1';
		break;
	case 'B':
		key.style.backgroundColor='#dba9ce';
		break;
	case 'H':
		key.style.backgroundColor='red';
		break;
	}
}
function addNote(){
	var randomNote = Math.floor(Math.random()*35);
	correctArray.push(randomNote);
}})