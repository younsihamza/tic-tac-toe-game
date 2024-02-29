import { useState } from "react";
export default function PlayerBox({ name, symbol, isActive, player }) {
  const [isEditing, setIsEditing] = useState(false);
  const [names, setname] = useState(name);
  function handleClick() {
    setIsEditing((value) => !value);
    player.name = names;
  }
  function tackValue(value) {
    setname(value.target.value);
  }

  return (
    <ol id="Player-info" className={isActive ? "Active" : ""}>
      <li>{`${symbol} :`}</li>
      {isEditing ? (
        <input type="text" onChange={tackValue} value={names}></input>
      ) : (
        <li id="player-Name">{names}</li>
      )}
      <li>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </ol>
  );
}
