"use client";
import React from "react";

const Home = () => (
  <div
    style={{
      background: "#1C1C1C", // Soft black
      minHeight: "100vh",
      color: "#F5E8D8", // Warm beige
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <h1 style={{ color: "#FF6F61", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
      Welcome to Ruhunugroup
    </h1>
    <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
      This is the home page. Explore our hospitality services!
    </p>
    <a
      href="/hospitality"
      style={{
        background: "#DAA520", // Golden yellow
        color: "#1C1C1C", // Soft black
        padding: "0.75rem 2rem",
        borderRadius: "0.5rem",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "all 0.2s",
        fontSize: "1rem",
        border: "none",
        display: "inline-block",
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = "#FF4500"; // Burnt orange
        e.currentTarget.style.color = "#F5E8D8"; // Warm beige
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = "#DAA520";
        e.currentTarget.style.color = "#1C1C1C";
      }}
    >
      Go to Hospitality
    </a>
  </div>
);

export default Home;