import React, { useState, useEffect } from "react";
import goldImage from "../../assets/products_images/gold-coin.png";
import diamondRing from "../../assets/products_images/diamond-ring.jpg";
import silverNecklace from "../../assets/products_images/silver-necklace.jpg";
import seapphireEarrings from "../../assets/products_images/seapphire-earrings.jpg";
import emeraldPendant from "../../assets/products_images/emerald-pendant.jpg";
import rubyBracelet from "../../assets/products_images/ruby-bracelet.jpg";

import Navbar from "../Navbar/Navbar";
import "./ProductCards.css";

const ProductCards = () => {
  const [productList, setProductList] = useState([]);
  const [quickViewProductIndex, setQuickViewProductIndex] = useState(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProductList(JSON.parse(storedProducts));
      localStorage.clear();
    } else {
      const defaultProducts = [
        {
          product_name: "Gold Coin",
          product_price: "112.55",
          product_image: goldImage,
          added_to_cart: false,
        },
        {
          product_name: "Diamond Ring",
          product_price: "1000.00",
          product_image: diamondRing,
          added_to_cart: false,
        },
        {
          product_name: "Silver Necklace",
          product_price: "200.00",
          product_image: silverNecklace,
          added_to_cart: false,
        },
        {
          product_name: "Sapphire Earrings",
          product_price: "500.00",
          product_image: seapphireEarrings,
          added_to_cart: false,
        },
        {
          product_name: "Emerald Pendant",
          product_price: "350.00",
          product_image: emeraldPendant,
          added_to_cart: false,
        },
        {
          product_name: "Ruby Bracelet",
          product_price: "400.00",
          product_image: rubyBracelet,
          added_to_cart: false,
        },
      ];
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProductList(defaultProducts);
    }
  }, []);

  const addToCart = (index) => {
    const updatedProducts = [...productList];
    updatedProducts[index].added_to_cart = true;
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProductList(updatedProducts);
  };

  const removeFromCart = (index) => {
    const updatedProducts = [...productList];
    updatedProducts[index].added_to_cart = false;
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProductList(updatedProducts);
  };

  const cartItems = productList.filter((product) => product.added_to_cart);

  return (
    <>
      <nav>
        <Navbar cart={cartItems} />{" "}
      </nav>
      <div className="product-cards-container">
        <div className="product-cards">
          {productList.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.product_image} alt={product.product_name} />
              <h3>{product.product_name}</h3>
              <p>{product.product_price}</p>
              {product.added_to_cart ? (
                <button onClick={() => removeFromCart(index)}>
                  Remove from cart
                </button>
              ) : (
                <button onClick={() => addToCart(index)}>Add to cart</button>
              )}
              <button onClick={() => setQuickViewProductIndex(index)}>
                Quick view
              </button>
            </div>
          ))}
        </div>
      </div>
      {quickViewProductIndex !== null && (
        <div className="quick-view-modal">
          <div className="modal-content">
            <img
              src={productList[quickViewProductIndex].product_image}
              alt={productList[quickViewProductIndex].product_name}
            />
            <h3>{productList[quickViewProductIndex].product_name}</h3>
            <p>{productList[quickViewProductIndex].product_price}</p>
            {productList[quickViewProductIndex].added_to_cart ? (
              <button onClick={() => removeFromCart(quickViewProductIndex)}>
                Remove from cart
              </button>
            ) : (
              <button onClick={() => addToCart(quickViewProductIndex)}>
                Add to cart
              </button>
            )}
            <button onClick={() => setQuickViewProductIndex(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCards;
