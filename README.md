# project-0

GA SEI Project 0 Tamagotchi

**_ GOAL _**

An interactive game where you need to take care of a pig to fill its life cycle from newborn, piglet, pig, to bacon.

**_ WIREFRAME _**

https://app.moqups.com/F5C4yNrilp/view/page/a9de4d023

**_ USER STORIES _**

1. When you open the link, the user will see 3 small icons at the top with the number of 5 next to them. These are the metrics you start with. The number can go from 0 to 10 once the game starts. Every stage will reset at 5. These will decrement by 1 every 1.2 seconds. After the user hits START, the user will be able to click the bottom larger icons. They will increase the meter at the top by 1 when clicked. Each stage will last 10 seconds. As long as the user keeps the meters at the top above 0, they can advance to the next stage. There are 3 stages in total. 

2. There is a light switch at the bottom corner where you can turn on/off dark mode at any time. The game automatically starts in light mode. Dark mode means the background turns grey and the text turns white.

3. There is a barn icon, game instructions, an input bar for your pig's name, and a START button. Once you hit START, the instructions, input bar, and start button will disappear. The START button helps store the pig's name in memory so it will always display above the main image. The icon will change to a baby pig. The game will start counting down from 10 internally.

4. There are 3 icons (duck, heart, fruits) on the bottom that user can click to clean, love, or feed the pig. Each one icon corresponds to meters at the top of the screen. When the user clicks on one of these icons, the corresponding meter will increase by 1.

5. If all the meters stay above 0 before the timer runs out, you will advance to the next stage. This will be true from stage 1-3. The stage number will be updated on the bottom left. The pig icon will also update at each advancement as another indication that the user has moved on to the next life stage. If the user completes stage 3, the bottom updates to "You've won!", the meters at the top will no longer display scores, and the icons at the bottom will have no longer affect the game, however they will still be visible.

6. The objective is to raise the pig from birth to bacon. If the user completes stage 3, an image of a truck will be shown and this means the pig is ready for her next life chapter. There is a NEXT button to proceed to the next chapter. When the user clicks the NEXT button, the user will be in the pig's final chapter. The final chapter for the game is that the pig has become bacon for a delicious english muffin dish. This is the end of the entire game. The user will have the option to RESET game, which will refresh the page to start over.

7. If any of the meters reach 0, this means that the pig has died and the game is over. The rest of the numbers will turn to 0. The main image changes to a cemetary headstone icon. The bottom icons are clickable if you want to live in regret, however, they cannot revive the pig. All timers end. User will have the option to RESTART the game.

**_ MILESTONES _**

1. Create HTML layout
   - container for whole box since the game screen will not take up full screen size.
   - top container for meters
   - middle container for the pig icon and the animations
   - bottom container for 4 buttons
   - class to turn off/on the dark mode
   - add images
2. create pig object (name, stage num, cleanScore, loveScore, foodScore, time)
3. create on click function so game and its methods will run when user hits START button
4. make methods in the game object:
   - save the value of input textbox to the username 
   - display the input's value above the main image
   - change the main image whenever you enter new stage
   - when you click the bottom icons, the corresponding number at the top should increase by 1
   - hide the message and any buttons in the main game screen while the game is running (may be defined by timer since there are stages that are static)
   - timers
5. make a overall game timer 
   - count down from 10 seconds at each stage
   - conditional statement if the meters at the top reach 0 then this timer will stop
   - increase the game stage by 1 every time the timer hits 0 
6. when overall game timer hits 0
   - change the main image to the upgraded pig
   - reset timer
   - change stage text at bottom screen
7. when overall game timer hits 0 and the meters are all above 0, remove all the scores, stop timer, and enter new screen with just a new main image and button
8. make a timer that will decrement the meter at the top every ~1 second
   - if meter reaches 0, then make all the other meters 0 and stop all timers
   - make new page for RIP with updated image and option to RESTART game
9. after the transfer page, make new page for final chapter of pig. simple image, text, and button to restart game.
10. Add animation to the pig
Make dark/light mode with adding/removing a class with special css properties

**_ ICONS MADE BY _**

<ul>
<li>Squeaky duck: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Heart: <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Fruits: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Barn: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Baby pig: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Piglet: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Adult pig: <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>RIP headstone: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Pickup Truck: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
<li>Breakfast English muffin: <a href="https://www.pexels.com/@angele-j-35172?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Angele J</a> from <a hred="https://www.pexels.com/photo/bacon-sandwich-on-plate-139746/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Pexels</a></li>
</ul>
