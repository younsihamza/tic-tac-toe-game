import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PlayerBox from "./components/PlayerBox";
import GameBorder from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./win";
import Log from "./components/Log";
const initTable = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const players = [
  { name: "player 1", Symbol: "X" },
  { name: "player 2", Symbol: "O" },
];
function App() {
  const [tableOne, setTibleOne] = useState([]);
  const boardTable = [...initTable.map((item) => [...item])];
  let isWin = false;
  let ActiveUser = "X";
  if (tableOne.length)
    tableOne[0].symbol === "X" ? (ActiveUser = "O") : (ActiveUser = "X");
  function hadleClickBox(indexrow, indexCol) {
    setTibleOne((item) => {
      if (tableOne.length)
        tableOne[0].symbol === "X" ? (ActiveUser = "O") : (ActiveUser = "X");
      return [
        {
          symbol: ActiveUser,
          position: { row: indexrow, col: indexCol },
          playerName: ActiveUser == "O" ? players[1].name : players[0].name,
        },
        ...item,
      ];
    });
  }
  for (const tubs of tableOne) {
    boardTable[tubs.position.row][tubs.position.col] = tubs.symbol;
  }
  function handleRestart() {
    setTibleOne([]);
  }
  isWin = false;
  for (const win of WINNING_COMBINATIONS) {
    let isWinTable = [
      boardTable[win[0].row][win[0].column],
      boardTable[win[1].row][win[1].column],
      boardTable[win[2].row][win[2].column],
    ];
    if (
      isWinTable[0] &&
      isWinTable.filter((item) => item === isWinTable[0]).length == 3
    ) {
      isWin = true;
      break;
    }
  }
  return (
    <>
      <div id="game">
        <div id="player-filed">
          <PlayerBox
            name={players[0].name}
            symbol="X"
            isActive={ActiveUser == "X"}
            player={players[0]}
          />
          <PlayerBox
            name={players[1].name}
            symbol="O"
            isActive={ActiveUser == "O"}
            player={players[1]}
          />
        </div>
        <GameBorder
          board={boardTable}
          handleClickBox={hadleClickBox}
          isWin={isWin}
          isDrow={tableOne.length}
          playerWin={ActiveUser != "O" ? players[1] : players[0]}
          handleRestart={handleRestart}
        />
        <Log logs={tableOne}></Log>
      </div>
    </>
  );
}

export default App;
