var currentPlayer = "X";
		var cells = document.querySelectorAll(".cell");
		for (var i = 0; i < cells.length; i++) {
			cells[i].addEventListener("click", function() {
				if (this.innerHTML === "") {
					this.innerHTML = currentPlayer;
					this.classList.add(currentPlayer);
					if (currentPlayer === "X") {
						currentPlayer = "O";
					} else {
						currentPlayer = "X";
					}
				}
			});
		}