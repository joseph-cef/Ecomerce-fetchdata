import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="relative bg-gray-900 text-white shadow-md z-50">
       <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-50">
         <div className="text-2xl font-bold">
          <span className="text-blue-400">YOUCEF</span> Shop
        </div>

         <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

         <div className="flex items-center space-x-4">
           <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

           <div className="relative cursor-pointer">
            <ShoppingBasket
              size={24}
              className="text-amber-300 hover:scale-110 transition"
            />
             <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">3</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu   */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-gray-800 px-6 py-4 space-y-3 shadow-lg animate-slideDown z-40">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-sm hover:text-blue-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
