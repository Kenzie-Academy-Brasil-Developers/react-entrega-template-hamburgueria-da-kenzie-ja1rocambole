import { useEffect } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { api } from "./services/api";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const request = await api.get("products");
        setProducts(request.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <Main products={products} />
    </div>
  );
}

export default App;
