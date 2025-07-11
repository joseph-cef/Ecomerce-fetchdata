import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
         <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-blue-400">YOUCEF</span> Shop
          </h2>
          <p className="text-gray-400">
            Discover quality products at unbeatable prices. Your satisfaction is our priority.
          </p>
        </div>

         <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

         <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <Facebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram />
            </a>
            <a href="#" className="hover:text-sky-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Mail />
            </a>
          </div>
        </div>
      </div>

       <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} YOUCEF Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
