# keepy_Uppy

This is a game of "keepy-uppy", the aim of which is to stop the ball from hitting the ground. If the ball does hit the ground then the game enters a "game over" state and play stops, whilst also telling the player that they have lost. The game is an adaptation of the code I have been working on for brick breaker, as is evidenced by the mechanics of the game. A ball bounces around a box, and a player moves a paddle to stop the ball from moving out of bounds (i.e. falling onto the ground). 

There are 4 main game files, 1 which is the central file, and 3 for some classes: score.js, ball.js and paddle.js. Each class contains the code for each part of the game, so the ball, paddle and score. It seemed easier for me to split the classes into seperate files, as it would be easier for me to understand the code, and any logical errors that would occur in the process of building the game (there were a few).

As the user plays, the speed of the ball increases, every 'frame' of the game that passes increases the ball's speed by 0.07%. I have the framerate set to 144 frames per second, for no other reason than it being my monitor's refresh rate. Due to this acceleration of the ball, the game gets slightly harder as time passes, until it would likely be impossible to not lose. 

As this is supposed to be a game, I have left it so that the user is the one controlling the paddle, however I would be interested in seeing how long a computer could keep up with the ball, and do have a way to code this action into the game. However doing so would remove the idea of this being a game, so I decided against that idea when I was still building the game.

The following is how each file works: 

### sketch.js

I start by initialising a few global variables: paddle, ball, score and gameState. Within my setup function I set the framrate to 144 and the canvas size to 400 pixels by 600 pixels. I then set gameState to 'play', the state that tells the program that a user is playing. paddle is set to a new Paddle, which is an instance of my paddle class and takes an argument for the height of the paddle, which I have set to "height - 48". ball is set to be a new Ball, an instance of my ball class. Finally, score is set to new Score, an instance of my score class, which takes an argument for the x axis location, which I have set to width/2, which is the midpoint of the canvas.

Next comes my draw function. Everything inside the draw function is within an if else statement, which checks whether gameState is still set to 'play'. If it isn't then the endscreen displays, which is shown inside the else portion of the if else statement. Within the first 'if' portion I set my background to black, before running through each of my classes with the display and update portions of each. I'll run through them in each of their own sections. There is also a nested if statement at the end that checks if the ball is below the bottom of the screen, which I believe is rather self explanatory.

Finally come my keyPressed and keyReleased functions, which check if the left or right arrow keys have been pressed down or released. These are important for the paddle class.

### score.js

My score class is rather simple. There is a constructor function to create the object, taking the x axis co-ordinate that was given to it from sketch.js and initialising the score to be 0.

Then comes the display function, which sets the text size, the alignment of the text and finally what the text will say. Finally, at the end of score.js comes the increment function, which quite literally increases the score by one when it is called.

### ball.js

The Ball object is initialised with a constructor, but it does not take any arguments. The constructor defines the balls radius, and also calls the reset function that is defined later in the class. The update function comes next, which has an if statement to check whether the ball is touching either of the sides of the canvas. If it is, then the x axis speed is inverted, so it appears that the ball is bouncing off of the walls. Next comes an if statement checking the top and bottom of the canvas, if the ball hits the bottom of the canvas then this.reset is called, however I've overwritten this in a new update so this section is technically redundant. However, I don't want to inadvertantly break anything, so I'm just leaving it as is at the moment. The else if statement just checks to see if the ball has touched the top of the canvas, and then inverts the y axis speed. There are then a few things, the x location gets the x axis speed added to it, the y location has the y axis speed added, and then the x axis speed and y axis speed are accelerated by 0.07%.

Next comes the reset function, which sets the location to be the very center of the canvas. Then a random speed in the x and y axes are defined, x axis speed is between 1 and 2, and y axis speed is anywhere between 1 and 5. The display function just calls the builtin circle function, with the x axis location, y axis location, and the radius multiplied by 2, to make the diameter. The function hasHitPlayer takes player as an argument, in this case it takes the paddle as an argument after it has been called from sketch.js. It then compares the locations of the ball and the player (in this case paddle) before calling another function if the first if statement returns true. The function calls "isSameHeight" which also takes the player paddle as an argument, and returns the boolean of whether the x axis of the ball is greater than or equal to the x axis of the player AND the x axis of the ball is less than or equal to the x axis of the player + the length of the player paddle. If both these statements are true, then the y axis speed is inverted, similart to if the ball bounces off of the top of the canvas, and then the ball object calls score.increment, so that the score goes up. 

Finally, the ball object has a function belowBottom, which checks to see whether the location of the ball is below the lowest point of the canvas. If this returns true then sketch.js changes gameState from 'play' to 'lose', which activates the lose condition of the if/else statement within the draw function of sketch.js.

### paddle.js

Like all other objects, paddle.js is activated by a constructor class, which takes the height of the paddle as an argument (y). After the constructor class comes the display function which sets the fill to 255 (white), as well as the size and location of the rectangle (the paddle is rectangular after all). Next come the classes called left and right, which are in place to move the paddle when certain conditions in update are met, and also prevent the paddle from moving off of either side of the screen. 

Finally comes the update function of the paddle, which checks if the isLeft and isRight variables are set to true. If neither is set to true, then the paddle doesn't move. If isLeft is true, then left is called and the paddle moves to the left. if isRight is true, then right is called and the paddle moves to the right. The way the paddle determines if a key is down is using the keyPressed function from sketch.js, which checks if a key is down and then sets the respective key to true within the paddle.js function.

There is no win condition for this game, as it could (in theory if one was fast enough) go on forever. The aim is to get as high a score as possible. It's essentially a digital version of a game I used to play in tennis where we were taught ball control. Unfortunately in this case the ball control system is very crude, however it works well enough for the time being.

I hope you enjoy playing!

- Kourosh

PS. A large amount of this code has been canibalised from my original brick breaker project idea, where I ran into a logic error that I didn't understand. However I would appreciate it if you could also look at that code (it is not nearly as polished and also does not have an in depth explanation like I have given here), as it was the code I wanted to use for my submission, but the logical error completely confused me so I reused a large portion of the code to make this, which is an actual working game. https://github.com/KouroshSimpkins/Brick-Breaker
