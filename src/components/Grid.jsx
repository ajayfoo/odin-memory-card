import Card from "./Card";
import "./Grid.css";

export default function Grid({ infos }) {
  return (
    <div className="card-grid">
      {infos.map((i) => (
        <Card key={i.id} gifUrl={i.gifUrl} title={i.title} />
      ))}
    </div>
  );
}
