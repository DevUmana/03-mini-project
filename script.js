// Global Data Collection
let dataCollectionArray = { win: [], lose: [], tie: [], firstGame: true };

// Start the game function
function startGame() {
  if (dataCollectionArray.firstGame) {
    let welcomeMessage = alert("Welcome to Rock, Paper, Scissors!");
  }

  userSelection();
}

// Ask user for selection with error handling
function userSelection() {
  let userSelected = prompt("Type R for Rock, P for Paper, or S for Scissors.");

  if (userSelected === null && dataCollectionArray.firstGame) {
    alert("You have cancelled the game. Have a nice day!");
  } else if (userSelected === null) {
    {
      reportData();
    }
  } else if (
    userSelected !== "R" &&
    userSelected !== "P" &&
    userSelected !== "S"
  ) {
    alert("Invalid selection. Please try again.");
    userSelection();
  } else {
    playGame(userSelected);
  }
}

// Get opponent random selection
function getOpponentSelection() {
  let opponentSelection = ["R", "P", "S"];
  return opponentSelection[Math.floor(Math.random() * 3)];
}

// Play the game
function playGame(x) {
  let opponentSelectionStored = getOpponentSelection();

  if (x == opponentSelectionStored) {
    alert("Opponent selected " + opponentSelectionStored + "\n\nIt's a tie!");
    dataCollectionArray.tie.push("T");
  } else if (
    (x == "R" && opponentSelectionStored == "S") ||
    (x == "P" && opponentSelectionStored == "R") ||
    (x == "S" && opponentSelectionStored == "P")
  ) {
    alert("Opponent selected " + opponentSelectionStored + "\n\nYou win!");
    dataCollectionArray.win.push("W");
  } else {
    alert("Opponent selected " + opponentSelectionStored + "\n\nYou lose!");
    dataCollectionArray.lose.push("L");
  }

  dataCollectionArray.firstGame = false;
  playAgain();
}

// Ask user to play again else report data
function playAgain() {
  let playAgain = confirm("Do you want to play again?");

  if (playAgain) {
    userSelection();
  } else {
    reportData();
  }
}

// Report the data
function reportData() {
  alert(
    "Total Wins: " +
      dataCollectionArray.win.length +
      "\nTotal Losses: " +
      dataCollectionArray.lose.length +
      "\nTotal Ties: " +
      dataCollectionArray.tie.length +
      "\n\nThank you for playing!"
  );
}

// Starts the game
startGame();
