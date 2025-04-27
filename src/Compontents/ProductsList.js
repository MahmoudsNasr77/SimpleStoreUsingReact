import Products from './Proudcts.js'; // Correct the import typo
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';

function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState(''); // Manage selected category state

  // Get unique categories
  const uniqueCategories = [...new Set(Products.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory? Products.filter((product) => product.category === selectedCategory): Products; // Show all products if no category is selected

  // Map filtered products to display as cards
  const productCards = filteredProducts.map((product) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
        <div className="card h-100 shadow-sm border-0 hover-shadow">
          <img
            src={product.image}
            className="card-img-top img-fluid"
            alt={product.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>
            <h5 className="card-text text-muted">{product.category}</h5>
            <p className="card-text text-primary h5 mb-2">${product.price}</p>
            <p className="card-text flex-grow-1">
              {product.description.length > 100
                ? product.description.substring(0, 60) + '...'
                : product.description}
            </p>
            <a href="#" className="btn btn-outline-primary mt-auto">
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container my-5">
      <h2>Categories</h2>
      <select
        className="form-select mb-4"
        aria-label="Default select example"
        onChange={(e) => setSelectedCategory(e.target.value)} // Set selected category on change
      >
        <option value="">Select a category</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <h1 className="text-center mb-5">Our Products</h1>
      <div className="row">
        {productCards}
      </div>
    </div>
  );
}

export default ProductsList;
