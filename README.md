# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Final Product

![Starting multiplayer game](https://github.com/Hansstayhungry/snake-client/blob/master/Multiplayer%20start.png)
![PLay screen with canned messages](https://github.com/Hansstayhungry/snake-client/blob/master/play%20with%20canned%20messages.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
  - cd /vagrant
  - git clone https://github.com/lighthouse-labs/snek-multiplayer.git
  - cd snek-multiplayer
  - npm install
  - npm run play
- Run the development snake client using the `node play.js` command.
- Use "WSAD" to navigate the snake.
- There are 3 canned messages, trigerred by key 1, 2, 3
  1. BLACK MANBA
  2. GG 
  3. YUMMY