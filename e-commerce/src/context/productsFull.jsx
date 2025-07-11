import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const ProductsFull = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { dispatch } = useCart();

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setAllProducts(data);
      setDisplayedProducts(data);
    };

    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Handle filtering/search
  useEffect(() => {
    let filtered = allProducts;

    // فلترة حسب الكاتيغوري
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        product => product.category === selectedCategory
      );
    }

    // البحث بالعنوان
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedProducts(filtered);
  }, [searchTerm, selectedCategory, allProducts]);

  return (
    <div className="max-w-7xl mx-auto mt-28 px-4 mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded w-full sm:w-1/2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border px-4 py-2 rounded"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 object-contain mx-auto"
            />
            <h3 className="text-lg font-semibold mt-3 line-clamp-2">{product.title}</h3>
            <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch({ type: "ADD", payload: product })}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {displayedProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default ProductsFull;
