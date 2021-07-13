# project-0

GA SEI Project 0 Tamagotchi



*** GOAL ***
An interactive game where you need to take care of a pig to fill its life cycle from newborn, piglet, pig, to bacon.


*** WIREFRAME ***
https://app.moqups.com/F5C4yNrilp/view/page/a9de4d023 


*** USER STORIES *** 

1. when you open the link, the first screen has an welcome message and then an input box to enter text. The text will be for the name of your pig. A submit button will be below it which will save the name and officially start the game in the next screen.

2. You will raise a pig from birth to bacon. There are 3 buttons in the bottom that user can click to give the pig cleanliness, love, and health. Each one corresponds to a meter of Cleanliness, Love, and Health at the top of the screen. Each meter will start at a specific amount, depending on what life stage the pig is on. 10 will always be the max, and if any of the meters hit 0 then the pig will die. The meters will drop at X amount of seconds, depending on the life stage that she is on. Each stage of life will last 2 minutes.

3. When the user clicks on any of the 3 buttons at the bottom, the meter at the top will increase by 1. There is also a light switch that you can use which will turn on/off the lights like a light/dark mode. When a button is clicked, the pig will be surrounded with icons that match the care you gave her. bath -> bubbles. heart -> heart. apple -> apple core.

4. At the end of each 2 minutes, as long as the health is between 1 and 10, you can move on to the next life stage. There will be a new sreen that congradulates the user and has a Next Chapter button which will take the user to the next life stage. You cannot move on to the next stage until you click the button.

5. The last stage is the adult stage. When you meet the timer for that with meters 1-10 value, then you will be sent to another "Next Chapter" screen. When you click that, the screen will change to a plate of bacon, eggs, and toast and this will be the end game. There will be a Restart button for you to start the game all over again.

6. There will be a light switch at the bottom right corner where you can turn on/off a light/night mode. it will just make the background dark and the top meters white. opposite for light mode.

ICEBOX:

1. Header box of the game name
2. every time you level up, confetti will show around the pig to show that you have leveled up

CONSTANT ANIMATION: tilt the head 15% left and right every second.

*** MILESTONES ***

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
- DISCLAIMER: Flaticons in future iterations will be customized