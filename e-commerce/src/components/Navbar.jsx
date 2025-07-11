import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";  
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white p-4">
       <div className="flex justify-between items-center">
         <div className="text-3xl  "> <span className="text-blue-400 font-bold">YOUCEF</span> Shop</div>

         <ul className="hidden md:flex space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

         <div className="flex items-center space-x-4">
           <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

           <div className="cursor-pointer text-amber-300"><ShoppingBasket/></div>
        </div>
      </div>

       {isOpen && (
        <ul className="flex flex-col space-y-2 mt-4 md:hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
