# project-0

GA SEI Project 0 Tamagotchi

**_ GOAL _**
An interactive game where you need to take care of a pig to fill its life cycle from newborn, piglet, pig, to bacon.

**_ WIREFRAME _**
https://app.moqups.com/F5C4yNrilp/view/page/a9de4d023

**_ USER STORIES _**

1. when you open the link, the first screen has a welcome message and then an input box to enter text. The text will be for the name of your pig. A submit button will be next to it, the name will be stored, and the game will officially start.

2. You will raise a pig from birth to bacon. There are 3 buttons on the bottom that user can click to give the pig cleanliness, love, and health. Each one corresponds to meters at the top of the screen for Cleanliness, Love, and Health at the top of the screen. When the user clicks on one of the 3 buttons at the bottom, the corresponding meter at the top will increase by 1. The max number is 10 and the minimum is 1. You want to keep the meter at 1 or up.

3. Each meter will start at a specific amount, depending on what life stage the pig is on. The meters will drop at X amount of seconds, depending on the life stage that she is on. Each stage of life will last 2 minutes. If any of the meters hit 0 then the pig will die.

4. If your pig dies, the game will be over. You will see a message that tells you the game is over, the meters stop counting and the 3 buttons bar will not show anymore. You will have the option to restart.

5. At the end of each stage (2 minutes), as long as the health is between 1 and 10, you can move on to the next life stage. You will see the pig icon upgrade to a different version, indicating the pig has entered the next life stage. The meters will reset to 3 and will start decrementing again.

6. The last stage is the adult stage, and if you complete the 2 minutes for this successfully then the game ends. The meter numbers and the bottom buttons will disappear, and it will show you a "Next" button. When you click that, the screen will change to a breakfast dish and this will be the end game. There will be a Restart button for you to start the game all over again.

ICEBOX:

1. Header box of the game name
2. every time you level up, confetti will show around the pig to show that you have leveled up
3. add effect when you click on the bottom buttons
4. There will be a light switch at the bottom right corner where you can turn on/off a light/night mode. it will just make the background dark and the top meters white. opposite for light mode.
5. when the meter is 2 and 1, the text color will turn red, or the background of it will turn red
6. When a button is clicked, the pig will be surrounded with icons that match the care you gave her. bath -> bubbles. heart -> heart. apple -> apple core.

CONSTANT ANIMATION: tilt the head 15% left and right every second.

**_ MILESTONES _**

1. Create HTML layout
   - container for whole box since the game screen will not take up full screen size.
   - top container for meters
   - middle container for the pig icon and the animations
   - bottom container for 4 buttons.
2. create pig object -> name, stage num, cleanScore, loveScore, healthScore, age num 1-3
3. create the input box and attach the value to the pig.name.
4. when you hit submit, start the game and set this as a event listener
5. create the meters at the top that will correspond with buttons at the bottom

6. timers for the stage and meters

=== NEED TO DO ===

- There is a progress bar tag on HTML. can give a value, and if using jquery, ise .val and attach it to a click event listener to affect the meter.
- Credit the image artists. (Flaticons in future iterations will be customized)
