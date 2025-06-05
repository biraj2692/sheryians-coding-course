import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$299",
      image: "🎧",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$399",
      image: "⌚",
      description: "Advanced fitness tracking and smart notifications"
    },
    {
      id: 3,
      name: "Laptop Pro",
      price: "$1299",
      image: "💻",
      description: "Powerful laptop for professionals and creators"
    },
    {
      id: 4,
      name: "Wireless Speaker",
      price: "$199",
      image: "🔊",
      description: "Portable speaker with amazing sound quality"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: "$79",
      image: "🖱️",
      description: "Precision gaming mouse with RGB lighting"
    },
    {
      id: 6,
      name: "Smartphone",
      price: "$899",
      image: "📱",
      description: "Latest smartphone with advanced camera system"
    }
  ];
  const naviagate = useNavigate();
  const navigateHandler = (id) => {
    naviagate(`/products/details/${id}`);
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover our amazing collection of premium products designed to enhance your lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 text-6xl text-center">{product.image}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button onClick={()=>navigateHandler(product.id)} className="px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="p-8 text-white bg-blue-600 rounded-xl">
            <h2 className="mb-4 text-3xl font-bold">Can't find what you're looking for?</h2>
            <p className="mb-6 text-xl">Contact us and we'll help you find the perfect product for your needs</p>
            <button  className="px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 bg-white rounded-lg hover:bg-gray-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products