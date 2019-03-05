// All code should be written in this file.
// Player One variables
let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;
// Player Two variables
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';

function validMoves(m1, m2, m3) {
  if(m1 === 'rock' || m1 === 'paper' || m1 === 'scissors') {
    if(m2 === 'rock' || m2 === 'paper' || m2 === 'scissors') {
      if(m3 === 'rock' || m3 === 'paper' || m3 === 'scissors') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function setPlayerMoves(player, move1, val1, move2, val2, move3, val3) {
  if(move1 === undefined || move2 === undefined || move3 === undefined) {
    //console.log('>>>>> User forgot to set a move.');
  } else if(val1 === undefined || val2 === undefined || val3 === undefined) {
    //console.log('>>>>> User forgot to set a value.');
  } else if(val1<1 || val2<1 || val3<1 || val1>99 || val2>99 || val3>99) {
    //console.log('>>>>> Wrong input value: It should be in the range 1-99.');
  } else if(!validMoves(move1, move2, move3)) {
    //console.log('>>>>> Wrong input move: It should be rock, paper or scissors.')
  } else if((val1 + val2 + val3) > 99){
    //console.log('>>>>> Wrong values: Input values sum up greater than 99.')
  } else {
    if(player === P1) {
      playerOneMoveOneType = move1;
      playerOneMoveOneValue = val1;
      playerOneMoveTwoType = move2;
      playerOneMoveTwoValue = val2;
      playerOneMoveThreeType = move3;
      playerOneMoveThreeValue = val3;
    } else if(player === P2) {
      playerTwoMoveOneType = move1;
      playerTwoMoveOneValue = val1;
      playerTwoMoveTwoType = move2;
      playerTwoMoveTwoValue = val2;
      playerTwoMoveThreeType = move3;
      playerTwoMoveThreeValue = val3;
    } else {
      console.log('>>>>> User input is a non valid player.')
    }
  }

}

function getRoundWinner(round) {
  let p1move = undefined;
  let p1val = undefined;
  let p2move = undefined;
  let p2val = undefined;

  // Object in order to compare moves numerically
  let rps2int = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
  };

  switch (round) {
    case 1:
      p1move = playerOneMoveOneType;
      p1val = playerOneMoveOneValue;
      p2move = playerTwoMoveOneType;
      p2val = playerTwoMoveOneValue;
      break;
    case 2:
      p1move = playerOneMoveTwoType;
      p1val = playerOneMoveTwoValue;
      p2move = playerTwoMoveTwoType;
      p2val = playerTwoMoveTwoValue;
      break;
    case 3:
      p1move = playerOneMoveThreeType;
      p1val = playerOneMoveThreeValue;
      p2move = playerTwoMoveThreeType;
      p2val = playerTwoMoveThreeValue;
        break;
    default:
      return null;
  }

  if(p1move === undefined || p1val === undefined || p2move === undefined || p2val === undefined ) {
    return null;
  }

  if(rps2int[p1move] === rps2int[p2move]) {
    if(p1val > p2val) {
      return P1;
    } else if(p1val < p2val) {
      return P2;
    } else {
      return TIE;
    }
  } else if( (rps2int[p1move]-rps2int[p2move]) === 1 || (rps2int[p1move]-rps2int[p2move]) === -2 ) {
    return P1;
  } else {
    return P2;
  }
}

function getGameWinner() {
  let p1wins = 0;
  let p2wins = 0;

  for(let i=1; i<4; i++) {
    if(getRoundWinner(i) === P1) {
      p1wins++;
    } else if(getRoundWinner(i) === P2) {
      p2wins++;
    } else if(getRoundWinner(i) === null) {
      return null;
    }
  }

  if(p1wins > p2wins) {
    p1wins = 0;
    p2wins = 0;
    return P1;
  } else if(p1wins < p2wins) {
    p1wins = 0;
    p2wins = 0;
    return P2;
  } else {
    p1wins = 0;
    p2wins = 0;
    return TIE;
  }
}

function randomMove() {
  let moveVal = 3 * Math.random();
  if(moveVal < 1) {
    return 'rock';
  } else if (moveVal < 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function setComputerMoves() {
  playerTwoMoveOneType = randomMove();
  playerTwoMoveTwoType = randomMove();
  playerTwoMoveThreeType = randomMove();

  playerTwoMoveOneValue = 1 + Math.floor(97 * Math.random());
  //console.log(playerTwoMoveOneValue);
  playerTwoMoveTwoValue = 1 + Math.floor( (98-playerTwoMoveOneValue) * Math.random() );
  //console.log(playerTwoMoveTwoValue);
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
  //console.log(playerTwoMoveThreeValue);
}
