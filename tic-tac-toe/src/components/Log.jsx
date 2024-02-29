export default function Log({ logs }) {
  return (
    <ol id="logs">
      {logs.map((item) => (
        <li>{`player name : "${item.playerName}" , symbol :"${item.symbol}"  position : {row : "${item.position.row}" column: "${item.position.col}"}`}</li>
      ))}
    </ol>
  );
}
