import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [Categories] = useState(["men's clothing", "jewelery", "electronics", "women's clothing"]);
  const [product, setproduct] = useState([]);
  const [selectCategory, SetSelectCategory] = useState("");
  const [filterItems, SetfilterItems] = useState([]);

  useEffect(() => { FetchProduct(); }, []);

  const FetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((product) => setproduct(product));
  };

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    SetSelectCategory(selected);

    if (selected) {
      const filtered = product.filter((items) => items.category === selected);
      SetfilterItems(filtered);
    } else {
      SetfilterItems([]);
    }
  };

  return (
    <>
      <div className='container mx-auto p-4'>
        <select
          value={selectCategory}
          onChange={handleCategoryChange}
          className="mb-4 p-2 border rounded"
        >
          <option value="">Select a Category</option>
          {Categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterItems.length > 0 ? (
            filterItems.map((item) => (
              <Link to={`/Dashboard/${item.title.split(" ").join("-")}/id/${item.id}`}>
              <div key={item.id} className="border rounded-lg shadow-lg p-4 bg-white flex flex-col">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded" />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-2 text-sm truncate">{item.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-xl font-bold text-green-600">${item.price}</p>
                </div>
              </div>
              </Link>
              
            ))
          ) : (
            <p className="text-center col-span-full">No items available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
