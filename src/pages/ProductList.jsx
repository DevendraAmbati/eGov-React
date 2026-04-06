import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';


const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(MOCK_PRODUCTS.map(p => p.category))];


  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-20 bg-gray-50 font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
 
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h1 className="text-3xl font-light text-slate-700">
            Latest <span className="font-bold text-blue-900">Products</span>
          </h1>


          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by product name..."
              className="w-full px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                selectedCategory === cat 
                ? "bg-blue-600 border-blue-600 text-white shadow-lg" 
                : "bg-white border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>


        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >

                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold text-blue-900 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

  
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-light text-slate-600">
                      {product.price === 0 ? "Free" : `$${product.price.toFixed(2)}`}
                    </span>
                    <Link to={`/product/${product.id}/${product.slug}`} className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
