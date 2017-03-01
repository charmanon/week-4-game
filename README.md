# HW - Metal Slug Fighting Game

##Live Link 

https://sharloteean.github.io/week-4-game

##Description on how to use the app

Choose a soldier from the selection menu. Then choose an enemy to fight. Keep fighting until the enemy dies. Once all the soldiers are defeated, you win. If your hitpoints reach zero before you defeat all the enemies, you lose.

##Requirements

 * When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.


* The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

* The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.

##Technologies Used
* CSS 
* Javascript
* Jquery for Dom Manipulation

This homework involved manipulating many divs and objects and presented numerous challenges for me. One of my biggest challenges was making the code less redundant when choosing soldiers to attack. Another was making the responsive divs stay within the boundaries that I set them in. I didn't fully succeed in what I set out to do, but I will go back and change the code once I learn how to implement the changes I want. 