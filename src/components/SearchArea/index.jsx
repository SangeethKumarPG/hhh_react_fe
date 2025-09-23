import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SearchArea = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const { items: products } = useSelector((state) => state.products);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
    } else {
      const results = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
    }
  }, [query, products]);

  const handleSelect = (product) => {
    setQuery("");
    setFiltered([]);
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {}, [filtered]);

  return (
    <div className="search-area-10">
      <div className="search-area-11">
        <i
          style={{
            backgroundColor: "white",
            padding: "18px 35px 17px 20px",
            borderRadius: "10px 0px 0px 10px",
            color: "grey",
            border: "1px solid rgb(194, 194, 194)",
            borderRight: "1px solid white",
          }}
          className="fa-solid fa-magnifying-glass"
        ></i>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search here 'hhh car perfume'"
        />
        {/* <i
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            padding: "19px 35px 19px 20px",
            borderRadius: "15%",
            color: "white",
          }}
          className="fa-solid fa-magnifying-glass"
        ></i> */}
      </div>

      {filtered.length > 0 && (
        <div className="search-down">
          <ul>
            {filtered.map((product) => (
              <li
                key={product.id}
                onClick={() => handleSelect(product)}
                className="search-item"
              >
                <img
                  src={
                    product.image?.startsWith("http")
                      ? product.image
                      : "http://127.0.0.1:8000/" + product.image
                  }
                  alt={product.name}
                  className="search-thumb"
                />
                <span>{product.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchArea;
