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
}
