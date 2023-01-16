Section 1
Space Battle OOP Lab



Complete all work in your forked CodeSandbox
Then Submit The Link To Your CodeSandbox in Canvas

star wars

Today, you will be using your knowledge of OOP, loops, and functions to build a rudimentary space battle game.
The game will be programmed for, and played using window.prompt to get input from the user and buttons in the browser, you can also use console.log and window.alert. This is your first mini-project. You should not style the page until you first get all the functionality down.

REMEMBER BIND YOUR METHODS IF YOU PLAN TO USE THEM AS EVENT Listeners !!!!!!!
class Example {
	constructor(name){
		this.name = name
		this.method = this.method.bind(this)
	}

	methodFromExample(){
	 return this.name
	}
}

const btnEl = document.querySelector('button')

btnEl.addEventListener('click', methodFromExample)
Today's task is to build something according to specification.
Pretend you have received the specification below for a class project.
Planning your program is a challenge unto itself. START SIMPLE. Break the problem down as far as you can and don't move on until the smallest piece works.

Once you've figured out the basics, it's up to you to make the game you want, but remember, your game does not have to be elegant. The only thing that matters is that it works.

This assignment will not be graded but must be turned in on time but will be used to assess how well you do a few things.

Put together what you have previously learned
Use available resources to solve problems
Take requirements and expand upon them as needed
Use class time appropriately
Learn new skills through experimentation



🚀 SPECIFICATIONS
Build a game of battling alien spaceships using Javascript.
Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers.

There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.




A game round would look like this:
You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again ... etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
You lose the game if you are destroyed



Ship Properties
hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
firepower is the amount of damage done to the hull of the target with a successful hit
accuracy is the chance between 0 and 1 that the ship will hit its target
Your spaceship, the USS Assembly should have the following properties:

hull - 20
firepower - 5
accuracy - .7
The alien ships should each have the following ranged properties determined randomly:

hull - between 3and 6
firepower - between 2and 4
accuracy - between .6and .8
You could be battling six alien ships each with unique values.

Example use of accuracy to determine a hit:

if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}






































