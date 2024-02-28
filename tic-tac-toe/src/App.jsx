import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PlayerBox from "./components/PlayerBox";
import GameBorder from "./components/GameBoard";
import "./App.css";
const initTable = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [tableOne, setTibleOne] = useState([]);
  const boardTable = [...initTable];
  let ActiveUser = "X";
  if (tableOne.length)
        tableOne[0].symbol === "X" ? (ActiveUser = "O") : (ActiveUser = "X");
  function hadleClickBox(indexrow, indexCol) {
    setTibleOne((item) => {
      if (tableOne.length)
        tableOne[0].symbol === "X" ? (ActiveUser = "O") : (ActiveUser = "X");
      return [{ symbol: ActiveUser, position: { row: indexrow, col: indexCol } },...item];
    });
  }
  for (const tubs of tableOne) {
    boardTable[tubs.position.row][tubs.position.col] = tubs.symbol;
  }
  return (
    <>
      <div id="player-filed">
        <PlayerBox name="hamzay" symbol="X" isActive={ActiveUser == "X"}/>
        <PlayerBox name="hamzaydddd" symbol="O" isActive={ActiveUser == "O"}/>
      </div>
      <GameBorder board={boardTable} handleClickBox={hadleClickBox} />
    </>
  );
}

export default App;
