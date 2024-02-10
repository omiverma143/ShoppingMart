import { useEffect, useState } from "react";
import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from "./components/Index";

function initializer() {
  const products = [
    {
      id: 1001,
      title: "Sony-wh-ch510 Blutooth Wireless",
      price: "149",
      img_url: "http://localhost:3001/images/1001.png",
    },
    {
      id: 1002,
      title: "Samsung Galaxy Buds",
      price: "129",
      img_url: "http://localhost:3001/images/1002.png",
    },
    {
      id: 1003,
      title: "Apple AirPods Pro",
      price: "249",
      img_url: "http://localhost:3001/images/1003.png",
    },
    {
      id: 1004,
      title: "Bose QuietComfort 35 II",
      price: "299",
      img_url: "http://localhost:3001/images/1004.png",
    },
    {
      id: 1005,
      title: "Jabra Elite 75t",
      price: "179",
      img_url: "http://localhost:3001/images/1005.png",
    },
    {
      id: 1006,
      title: "Sony WH-1000XM4",
      price: "349",
      img_url: "http://localhost:3001/images/1006.png",
    },
    {
      id: 1007,
      title: "Beats Studio3 Wireless",
      price: "349",
      img_url: "http://localhost:3001/images/1001.png",
    },
    {
      id: 1008,
      title: "Sennheiser Momentum 3 Wireless",
      price: "399",
      img_url: "http://localhost:3001/images/1002.png",
    },
    {
      id: 1009,
      title: "Anker Soundcore Liberty Air 2 Pro",
      price: "129",
      img_url: "http://localhost:3001/images/1003.png",
    },
    {
      id: 1010,
      title: "JBL Tune 125TWS",
      price: "99",
      img_url: "http://localhost:3001/images/1005.png",
    },
  ];
  return products;
}

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("Products")) || initializer());
  
  useEffect(() => {
    localStorage.setItem("Products",JSON.stringify(products))
  }, [products])
  
  
  const updateProducts = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [cartitems, setCartitems] = useState(JSON.parse(localStorage.getItem("CartList")) || []);

  
  const handleAddToCart = (AddProduct) => {
    setCartitems([...cartitems, AddProduct]);
    console.log(cartitems);
    alert("Product Successfully Added to Cart");
  };

  const handleRemoveFromCart = (idToRemove) => {
    console.log(idToRemove);
    const updatedCartItem = cartitems.filter(() => cartitems.id !== idToRemove);
    console.log(updatedCartItem);
    // setCartitems([...cartitems, id]);
  };

  return (
    <div className="App">
      <Header />
      <AllRoutes
        products={products}
        updateProducts={updateProducts}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        cartitems={cartitems}
      />
      <Footer />
    </div>
  );
}

export default App;
