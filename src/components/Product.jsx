import Card from './Card';

const Product = ({ title, price }) => {
  return (
    <Card>
      <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
      <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>Price: ${price}</p>
    </Card>
  );
};

export default Product;