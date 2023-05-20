# Tic-Tac-Toe Game

This is a simple implementation of the Tic-Tac-Toe game using React. The game allows two players to take turns marking spaces on a 3x3 grid until one player wins or the game ends in a draw.

## Features

- Player vs Player: Two players can take turns playing the game.
- Real-Time Updates: The game board is updated in real-time to reflect the moves of the players.
- Win Condition Detection: The program checks for a win condition after each move.
- Draw Detection: The program detects a draw when all spaces on the board are filled without a winner.
- After every move, a list of moves is displayed on the right side of the game board.
- Players can click on any move in the list to jump back to that specific point in the game.
- The game board will be updated to reflect the selected move, and players can continue playing from that point.


## Getting Started

To get started with this Tic-Tac-Toe game, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/zahrabayatt/tic-tac-toe-game.git
   ```

2. Navigate to the project directory:

   ```
   cd tic-tac-toe-game
   ```

3. Install the required dependencies. You can use a package manager like npm or yarn:

   ```bash
   npm install
   ```

4. Start the web app:

   ```bash
   npm run dev
   ```

   This will start the web app locally, and you can access it in your web browser at `http://localhost:3000`.

## How to Play

1. The game is played on a 3x3 grid. Each cell on the grid represents a space where players can make their moves.

2. Two players take turns marking spaces on the grid. The first player uses "X" as their marker, and the second player uses "O" as their marker.

3. The players can click on an empty space on the grid to make their move. Once a move is made, the grid is updated in real-time to reflect the move.

4. The first player to get three of their marks in a horizontal, vertical, or diagonal row wins the game. If all spaces on the board are filled without a winner, the game ends in a draw.

5. At the end of the game, the web app will display a message indicating the winner or a draw. You can reset the game and play again by clicking the "Reset" button.

## Contributions

Contributions to this repository are welcome. If you find any issues or want to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgements

- The project is developed by [Zahra Bayat](https://github.com/zahrabayatt).
- Inspired by the classic game of Tic-Tac-Toe.