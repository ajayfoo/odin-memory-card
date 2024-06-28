import Score from "./Score";
import Help from "./Help";
import "./Header.css";
export default function Header({ score, bestScore }) {
  return (
    <header>
      <Score score={score} bestScore={bestScore} />
      <Help />
    </header>
  );
}
