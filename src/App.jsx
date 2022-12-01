import { useEffect } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { api } from "./services/api";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  console.log(filteredProducts.length);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const request = await api.get("products");
        setProducts(
          request.data.filter((product) => product.name !== undefined)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <Header
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Main
        products={filteredProducts.length > 0 ? filteredProducts : products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
    </div>
  );
}

export default App;
