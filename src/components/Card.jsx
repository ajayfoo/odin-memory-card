export default function Card({ gifUrl, title }) {
  return (
    <div className="card">
      <img src={gifUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}
