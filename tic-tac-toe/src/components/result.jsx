export default function Result({ children ,handleRestart}) {
  return (
    <div id="result">
      <h2>{children}</h2>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
