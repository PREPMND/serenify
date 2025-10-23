import React from "react";

export default function Results() {
    const images = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    ];

    return (
    <div style={{ textAlign: "center", background: "linear-gradient(180deg, #fff6fa, #f8f0ff)", padding: "20px" }}>
      <h2>Your Calming Visuals 🌸</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px"
      }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i+1}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          />
        ))}
      </div>
    </div>
  );
}
