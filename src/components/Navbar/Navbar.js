import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={cart.length > 0 ? "#000000" : "rgba(0, 0, 0, 0.54)"}
        d="M19 7h-1.81l-1.39-1.39C15.53 5.16 14.88 5 14.19 5H9.82c-.69 0-1.34.16-1.92.44L6.81 7H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-8 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </svg>
  );
  return (
    <nav className="navbar">
      <h1>My Online Store</h1>
      <div
        className="cart-icon-container"
        onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
      >
        {cartIcon}
        <span className="cart-count">{cart.length}</span>

        <div className={`cart-dropdown ${cartDropdownOpen ? "open" : ""}`}>
          {cart.length > 0 ? (
            <div className="cart-items-container">
              {cart.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.product_image} alt={product.product_name} />
                  <h3>{product.product_name}</h3>
                  <p>{product.product_price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="cart-empty">Your cart is empty</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
