import "./Card.css";

export default function Card({ imgUrl, onClick }) {
  return (
    <img
      className="card"
      onClick={onClick}
      width={"250px"}
      height={"250px"}
      src={imgUrl}
    />
  );
}
