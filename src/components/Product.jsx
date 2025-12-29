import React from 'react';
import Card from './Card';

const Product = ({ title, price }) => {
  return (
    <Card>
      <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
      <p style={{ fontWeight: 'bold', color: '#0057adff' }}>Price: ${price}</p>
    </Card>
  );
};

export default Product;