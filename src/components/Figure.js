import React from "react";

const Figure = ({ mistakes }) => {
  return (
    // prettier ignore
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      <circle
        cx="140"
        cy="70"
        r="20"
        className={mistakes > 0 ? "" : "figure-part"}
      />
      {/* <!-- Body --> */}
      <line
        x1="140"
        y1="90"
        x2="140"
        y2="150"
        className={mistakes > 1 ? "" : "figure-part"}
      />
      {/* <!-- Arms --> */}
      <line
        x1="140"
        y1="120"
        x2="120"
        y2="100"
        className={mistakes > 2 ? "" : "figure-part"}
      />
      <line
        x1="140"
        y1="120"
        x2="160"
        y2="100"
        className={mistakes > 3 ? "" : "figure-part"}
      />
      {/* <!-- Legs --> */}
      <line
        x1="140"
        y1="150"
        x2="120"
        y2="180"
        className={mistakes > 4 ? "" : "figure-part"}
      />
      <line
        x1="140"
        y1="150"
        x2="160"
        y2="180"
        className={mistakes > 5 ? "" : "figure-part"}
      />
    </svg>
  );
};

export default Figure;
