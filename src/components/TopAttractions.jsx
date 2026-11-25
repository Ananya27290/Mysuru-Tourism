import AttractionCard from "./AttractionCard";
import { attractions } from "../data/attractions";

function TopAttractions() {
  return (
    <section
      style={{
        padding: "40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Top Attractions
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {attractions.map((place) => (
          <AttractionCard
            key={place.id}
            attraction={place}
          />
        ))}
      </div>
    </section>
  );
}

export default TopAttractions;