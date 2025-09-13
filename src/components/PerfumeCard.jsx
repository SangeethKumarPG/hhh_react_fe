/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function PerfumeCard({ image, title, desc, price }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="fw-bold">{price}</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
