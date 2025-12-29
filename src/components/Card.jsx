import React from "react";
const Card = ({ children }) => {
  const cardStyle = {
    border: '1px solid #ff0000ff',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#ff0000ff'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;