import BoxTab from "./BoxTab";
export default function GameBorder({ board, handleClickBox }) {
  return (
    <ol id="GameBoard">
      {board.map((item, indexrow) =>
        item.map((box, indexcol) => (
          <BoxTab keys={indexcol + indexrow}
            indexRow={indexrow}
            indexCol={indexcol}
            handleClickBox={handleClickBox}
          >
            {box}
          </BoxTab>
        ))
      )}
    </ol>
  );
}
