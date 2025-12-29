import ProductList from './components/ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  const handleToggle = () => {
    setShowProducts(!showProducts);
  };

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    textAlign: 'center'
  };
return (
    <div style={containerStyle}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleToggle} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          {showProducts ? "Hide Products" : "Show Products"}
        </button>
      </div>

      <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>
        Hello, {name || "Guest"}
      </p>

      <hr style={{ margin: '20px 0' }} />

      { }
      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
