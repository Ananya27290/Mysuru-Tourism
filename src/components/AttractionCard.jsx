function AttractionCard({ attraction }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "white",
        width: "250px",
      }}
    >
      <h3>{attraction.name}</h3>

      <p>Category: {attraction.category}</p>

      <p>
        Ticket Price: ₹{attraction.ticketPrice}
      </p>
    </div>
  );
}

export default AttractionCard;