import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map links to paths
  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Areas", path: "/areas" },
    { name: "Products", path: "/products" },
    { name: "Platform", path: "/platform" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhgr2N4_6WURi8D7ADHRe1V0ngGGnNLtErQ&s"
              className="h-10 cursor-pointer"
              alt="Logo"
            />
          </Link>

          {/* --- Desktop Menu (Using Link) --- */}
          <div className="hidden lg:flex gap-8 text-blue-900 font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-blue-600 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-blue-900 p-2 focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar Overlay --- */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "bg-black/50 opacity-100 visible" : "bg-black/0 opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        {/* --- Sidebar Content --- */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
               <span className="font-bold text-blue-900">MENU</span>
               <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-red-500 transition">
                 <X size={28} />
               </button>
            </div>

            {/* Mobile Navigation (Using Link) */}
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-semibold text-blue-900 border-b border-gray-50 pb-3 hover:pl-2 transition-all duration-200"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-6 text-center bg-blue-900 text-white py-3 rounded-xl font-bold active:scale-95 transition-transform"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
