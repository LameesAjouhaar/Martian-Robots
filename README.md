### Martian Robots

This project is my implementation of the Martian Robots challenge. The goal was to keep the solution simple, correct, and easy to understand, while focusing on the core problem rather than UI or extra features.

### Overview

The program simulates robots moving on a grid on Mars. Each robot:

Starts at a given coordinate and direction

Executes a list of instructions (L, R, F)

Can fall off the grid and become LOST

Leaves a “scent” if lost, preventing future robots from being lost in the same place

Robots run one at a time, and the final state of each is printed in sequence.

My focus was:

-Clean logic

-Small, modular functions

-Clear types

-Unit testing

-No unnecessary complexity

### How to Run

Install dependencies:

npm install

Start the app:

npm run dev

Then open:

http://localhost:5173

Run tests:

npm run test

Everything should run without any extra setup.

### Input Format via the UI :
<maxX> <maxY>
<x> <y> <direction>
<instructions>


Example:

5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL

### Tech Choices & Why

TypeScript
I chose TypeScript because it gives strong typing for the domain (Grid, Robot, Directions), reduces mistakes, and makes the logic easier to reason about.

Simple, Modular Logic
I split the logic into small services:

Turning left/right

Moving forward

Processing instructions

Tracking scents

This keeps functions focused and easy to test.

### Vitest for Testing
Lightweight, fast, and simple to set up with TypeScript. The problem is logic-heavy, so unit tests made sense.

### Minimal UI
The challenge doesn’t require a UI, so I only added the smallest possible form to input data and see results.

How I Approached the Problem

Read and clarified the rules

Identified core operations (turn, move, detect loss, track scent)

Created the types first

Built the logic in small steps

Added unit tests for core behavior

Only added UI once the logic was solid

I wanted the logic to work correctly before anything else.

### Unit Testing

I focused testing on the most important parts:

Turning left/right

Forward movement

Position updates

Keeping direction consistent

The idea was to validate the core rules without over engineering it.

### Sample Input Support

I added a “Load Sample Input” button just to quickly test the provided sample data. This helped sanity check the results without retyping anything.



### Future-Proof Command Handling

The robot command processor is designed to easily support new commands in the future.  

- Each command (`L`, `R`, `F`, etc.) is a separate handler function.  
- `processInstructions` loops through instructions and calls the appropriate handler.  
- New commands can be added by simply registering them in the command handler map, without modifying existing logic.  

This ensures the system is **maintainable**, **extensible**, and **unit-testable**, adhering to the Open/Closed principle.

###Next Steps / Future Improvements

If given more time, here’s how I would enhance the solution:

Extended Command Support

Add additional robot commands (e.g., backward, jump, scan).

Each new command can be registered in the commandHandlers registry without changing core logic.

Enhanced Unit Testing

Add comprehensive tests for LOST + scent edge cases.

Add tests for any newly introduced commands to ensure backward compatibility.

Improved Input Handling

Support batch file input for multiple robot scenarios.

Validate input format and provide user friendly error messages.

UI Enhancements (Optional)

Show grid visually with robots and LOST positions.

Highlight robots that are LOST with color coding.

Responsive design for mobile devices.

Performance / Scalability

Optimize for large grids or many robots (currently limited to 50x50).

Consider memoizing repeated scent checks if the grid grows.
