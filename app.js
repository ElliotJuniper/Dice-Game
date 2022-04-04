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
		images.style.backgroundColor = "#FFFFFF";
		container.style.backgroundColor = "#0CD6B7";
		body.style.backgroundColor = "#0CD6B7";

		player1Total = 0;

		player1Roll.style.display = "none";
		playAgain.style.display = "block";
		playAgain.style.backgroundColor = "#00885f";
		
	} else {
		if (currentRoll == 1) {
			player1Score.textContent = `${total} - Better luck next time!`;
			images.style.backgroundColor = "#FFFFFF";
			container.style.backgroundColor = "#D80101";
			body.style.backgroundColor = "#D80101";

			player1Total = 0;
			
			player1Roll.style.display = "none";
			playAgain.style.display = "marker";
			playAgain.style.backgroundColor = "#770028";
		}
	}
});

playAgain.addEventListener("click", () => {
	window.location.reload();
});



