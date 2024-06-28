import "./Score.css";

export default function Score({ score, bestScore }) {
  return (
    <div className="score">
      <span>Score: {score}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  );
}
