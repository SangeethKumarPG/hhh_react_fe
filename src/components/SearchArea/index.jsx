import { useEffect, useState } from "react";
import "./style.css";

const SearchArea = () => {
  const [data, setData] = useState(null);

  useEffect(() => {}, [data]);

  return (
    <div className="search-area-10">
      <div className="search-area-11">
        <input
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          type="text"
          placeholder="Search here"
        />
        <i
          style={{
            backgroundColor: "rgba(204, 204, 204, 1)",
            padding: "19px 35px 19px 20px",
            borderRadius: "15%",
          }}
          class="fa-solid fa-magnifying-glass"
        ></i>
      </div>
      {data && (
        <div className="search-down">
          <ul>
            <li onClick={() => setData("hhh car perfume")}>dhdfhrfdhrh</li>
            <li>dhdfhrfdhrh</li>
            <li>dhdfhrfdhrh</li>
            <li>dhdfhrfdhrh</li>
            <li>dhdfhrfdhrh</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchArea;
