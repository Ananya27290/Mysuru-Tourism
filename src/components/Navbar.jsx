function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1B4F72",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Mysore Tourism</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <span>Home</span>
        <span>Attractions</span>
        <span>Trip Planner</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;