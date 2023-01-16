let message = ""
let messageEl = document.getElementById('message-el')
let retreatEl = document.getElementById('retreat-el')
let btnEl = document.getElementById('attack-el')

// Created a class for the player(Good Guys) with hull, firepower and accuracy properties
class USSAssembly {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }

  attack(enemy) {
    if (Math.random().toFixed(1) < this.accuracy) {
      enemy.hull -= this.firepower;
      message = "Attack Succesful";
      console.log("%c Attack Successful", "background:cyan; font-weight:bold; font-size:25px; color:black;")
    } else {
      message = "Attack failed"
      console.log("%c Attack failed", "background:cyan; font-weight:bold; font-size:25px; color:black;")
    }
    messageEl.textContent = message;
  }
}

let player = new USSAssembly();

// Created a class for the alien spaceship with hull, firepower and accuracy properties
class AlienSpaceship {
  constructor() {
    this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    this.accuracy = Math.random().toFixed(0) * (0.8 - 0.6) + 0.6;
  }
  attack(player) {
    if (Math.random().toFixed(1) < this.accuracy) {
      player.hull -= this.firepower;
      message = "YOU GOT HIT! Alien: Ha! Better Luck Next Time";

      console.log("%c YOU GOT HIT! Alien: Ha! Better Luck Next Time", "background:red; color:white; font-weight:bold; font-size:25px; color:black;")

    } else {
      message = "ALIEN MISSED! Alien: Narrow escape";

      console.log("%c ALIEN MISSED! Alien: Narrow Escape", "background:red; color:white; font-weight:bold; font-size:25px; color:black;")
    }
    messageEl.textContent = message;
  }
}

// Created an array with 6 instances of AlienSpaceship
let numEnemy = [];
for (let i = 0; i < 6; i++) {
  numEnemy[i] = new AlienSpaceship();
}

// Run the function within when the attack button is clicked
btnEl.addEventListener('click', function () {

  // Player attacks current ship if current ship's hull is above 0
  if (player.hull > 0 && numEnemy.length > 0) {
    player.attack(numEnemy[0]);

    // Current ship attacks player if it's hull is above 0
    if (numEnemy[0].hull > 0) {
      numEnemy[0].attack(player);

      // Remove buttons if player's hull is below 0
      if (player.hull < 1) {
        btnEl.remove();
        retreatEl.remove();
        message = "Aliens Win! Reset To Play Again";
        console.log("%c Aliens Win! Reset To Play Again", "background:goldenrod; border: 2px solid green; font-weight:bold; font-size:35px; color:black;")
      }
      // Remove one ship from the array when one ship hull is below 0
    } else {
      numEnemy.shift();
      message = "Alienship Down"
      console.log("%c Alienship Down", "background:green; color:white; font-weight:bold; font-size:25px; color:black;");

      // Remove buttons if player wins
      if (player.hull > 0 && numEnemy.length == 0) {
        btnEl.remove();
        retreatEl.remove();
        message = "Player Wins! Reset To Play Again";
        console.log("%c Player Wins! Reset To Play Again", "background:goldenrod; border: 2px solid green; font-weight:bold; font-size:35px; color:black;")
      }
      messageEl.textContent = message;
    }
  }
});

// Function to remove buttons if player retreats
function gameOver() {
  message = "GAME OVER! Reset To Play Again";
  console.log("%c GAME OVER! Reset To Play Again", "background:grey; font-weight:bold; font-size:25px; color:black;")
  messageEl.textContent = message;
  btnEl.remove();
  retreatEl.remove();
}

// Function to reset game if player chooses to
function reset() {
  window.location.reload()
}



