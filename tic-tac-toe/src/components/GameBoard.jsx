import BoxTab from "./BoxTab";
import Result from "./result";
export default function GameBorder({ board, handleClickBox, isWin ,playerWin ,handleRestart,isDrow}) {
  return (
    <ol id="GameBoard">
      {board.map((item, indexrow) =>
        item.map((box, indexcol) => (
          <BoxTab
            keys={indexcol + indexrow}
            indexRow={indexrow}
            indexCol={indexcol}
            handleClickBox={handleClickBox}
          >
            {box}
          </BoxTab>
        ))
      )}
      {!isWin && isDrow == 9 && <Result handleRestart={handleRestart}>{`you are Draw `}</Result>}
      {isWin && <Result handleRestart={handleRestart}>{`Winner is ${playerWin.name}`}</Result>}
    </ol>
  );
}
