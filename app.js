const body = document.getElementById("game");
const images = document.querySelector(".images");
const container = document.querySelector(".container");

const player1Image = document.getElementById("player1Image");
const player1Score = document.getElementById("player1Score");
const player1Roll = document.getElementById("player1Roll");
const playAgain = document.getElementById("playAgain");
const text1Roll = document.getElementById("text1Roll");

let total = 0;player1Roll.addEventListener("click", () => {
	
    let currentRoll = Math.ceil(Math.random() * 6);

	text1Roll.style.display = "none";
	images.style.display = "block";
	player1Image.src = `images/${currentRoll}.png`;

	total += currentRoll;
	player1Score.textContent = total;

	if (total >= 20) {
		player1Score.textContent = `${total} - Congratulations!`;
	
		body.style.background = "#0CD6B7";

		player1Total = 0;

		player1Roll.style.display = "none";
		playAgain.style.display = "block";
		playAgain.style.backgroundColor = "#00885f";
		
	} else {
		if (currentRoll == 1) {
			player1Score.textContent = `${total} - Better luck next time!`;
			body.style.background = "#D80101";
			// header.style.color = "#FFFFFF";

			player1Total = 0;
			
			player1Roll.style.display = "none";
			playAgain.style.display = "marker";
			playAgain.style.backgroundColor = "#000000";
		}
	}
});

// Look if yopu need to add this?
playAgain.addEventListener("click", () => {
	window.location.reload();
});



