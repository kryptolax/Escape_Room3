// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE


function nextImageOne(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

function blinkOne(){
	document.getElementById("one").classList.toggle('highlighted');
}

function flashOne(){
	document.getElementById("one").classList.toggle('highlighted');
	setTimeout(blinkOne, 1000);
}





function blinkTwo(){
	document.getElementById("two").classList.toggle('highlighted');
}

function flashTwo(){
	document.getElementById("two").classList.toggle('highlighted');
	setTimeout(blinkTwo, 1000);
}





function blinkFour(){
	document.getElementById("four").classList.toggle('highlighted');
}

function flashFour(){
	document.getElementById("four").classList.toggle('highlighted');
	setTimeout(blinkFour, 1000);
}





function blinkFive(){
	document.getElementById("five").classList.toggle('highlighted');
}

function flashFive(){
	document.getElementById("five").classList.toggle('highlighted');
	setTimeout(blinkFive, 1000);
}





function blinkSix(){
	document.getElementById("six").classList.toggle('highlighted');
}

function flashSix(){
	document.getElementById("six").classList.toggle('highlighted');
	setTimeout(blinkSix, 1000);
}





function blinkSeven(){
	document.getElementById("seven").classList.toggle('highlighted');
}

function flashSeven(){
	document.getElementById("seven").classList.toggle('highlighted');
	setTimeout(blinkSeven, 1000);
}





function blinkEight(){
	document.getElementById("eight").classList.toggle('highlighted');
}

function flashEight(){
	document.getElementById("eight").classList.toggle('highlighted');
	setTimeout(blinkEight, 1000);
}





function blinkNine(){
	document.getElementById("nine").classList.toggle('highlighted');
}

function flashNine(){
	document.getElementById("nine").classList.toggle('highlighted');
	setTimeout(blinkNine, 1000);
}





function blinkTen(){
	document.getElementById("ten").classList.toggle('highlighted');
}

function flashTen(){
	document.getElementById("ten").classList.toggle('highlighted');
	setTimeout(blinkTen, 1000);
}





function showSequenceOne(){
	flashOne();
	setTimeout(flashSix, 1000);
	setTimeout(flashFour, 2000);
	setTimeout(flashSeven, 3000);
	setTimeout(flashSix, 4000);
	setTimeout(flashNine, 5000);
}

function showSequenceTwo(){
	
}

function showSequenceThree(){
	
}





function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}

