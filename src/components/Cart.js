import React from 'react';

const Cart = () => {
  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    console.log('Item added to cart');
    // You can add the logic to add the item to the cart here
  };

  return (
    <div 
      style={{
        width: '100%',
        height: '480px',
        backgroundImage: 'url("https://www.shutterstock.com/shutterstock/photos/1816260440/display_1500/stock-photo-autumn-forest-background-vibrant-color-tree-red-orange-foliage-in-fall-park-nature-change-yellow-1816260440.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
          }}
    >
      {/* <button 
        onClick={handleAddToCart}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button> */}
    </div>
  );
};

export default Cart;
