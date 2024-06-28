import Card from "./Card";
import "./Grid.css";

export default function Grid({ infos, onCellClick }) {
  return (
    <div className="card-grid">
      {infos.map((i) => (
        <Card
          onClick={() => onCellClick(i.id)}
          key={i.id}
          gifUrl={i.gifUrl}
          title={i.title}
        />
      ))}
    </div>
  );
}
