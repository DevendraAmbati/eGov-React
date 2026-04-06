import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found!</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      
      <nav className="p-6 border-b">
        <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className={`${product.bgColor} rounded-[40px] p-8  top-10`}>
            <div className="aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-2xl font-bold text-blue-900 mt-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-slate-500 mt-4">
                By <span className="text-slate-800 font-semibold">{product.author}</span> • {product.date}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-light text-slate-900">
                {product.price === 0 ? "FREE" : `$${product.price}`}
              </span>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl hover:scale-105">
                Download Now
              </button>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">About this {product.category.toLowerCase()}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Key Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
