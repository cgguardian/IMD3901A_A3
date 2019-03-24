Overview
Chrissy Merpaw

Originally I had wanted to make a simple game of pong, but it didn't work out. 
The controls are simple; just move the mouse over shapes/click to make things happen.
I have a penchant for simplistic, geometric designs, so cubes were the obvious choice for the selectors. 

The scoring system is still glitchy (if you hover over cubes, you'll notice the score doesn't increase incrementally; it jumps on occasion).
For some reason, the "visible" attribute isn't changing, despite js files calling to change it's values.
I couldn't get socket.io to emit a) the player name, b) the player score, and c) anything I tested with it. 
There is also a (really messy) function to check if all cubes are the same colour, and if so, halt the score counter and present + emit a "YOU WIN!" message. 
This function doesn't work, I'm unsure as to why. 

I did get the puzzle patterns to work for all colours; all combinations are doable in four turns or less: 
Pink: 2-1, 3-3, 3-2
Teal: 3-1, 1-3, 3-2, 1-1
Blue: 2-3, 3-2, 1-2, 1-1
Red: 1-1, 1-3, 3-2, 2-3 
I ended up sticking to the same colours from the Cow Painter because they just worked well together. 

...there's no video, as I ran out of time, the same reason as to why the previously mentioned problems weren't worked on further. 

GitHub Repo: https://github.com/cgguardian/IMD3901A_A3