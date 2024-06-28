import "./Card.css";

export default function Card({ gifUrl, title }) {
  return (
    <div className="card">
      <img width={"250px"} height={"250px"} src={gifUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}
