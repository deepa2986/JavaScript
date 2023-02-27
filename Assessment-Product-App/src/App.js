
import './App.css';
import Products from './components/Products';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h3>Products-App</h3>
      <ProductList />
      <Products />
    </div>
  );
}

export default App;
