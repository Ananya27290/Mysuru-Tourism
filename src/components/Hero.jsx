function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#F4D03F",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#1B4F72",
          marginBottom: "20px",
        }}
      >
        Explore Mysore
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "20px",
        }}
      >
        Discover history, culture and beautiful attractions
      </p>

      <input
        type="text"
        placeholder="Search attractions..."
        style={{
          width: "350px",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
        }}
      />
    </section>
  );
}

export default Hero;