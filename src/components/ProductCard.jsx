/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const CardWrapper = styled.div`
  position: relative;
  width: 300px;
  text-align: center;
  cursor: pointer;
`;

const BottleShadow = styled.div`
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 20px;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  filter: blur(12px);
`;

export default function ProductCard({ name, image, price50, price100 }) {
  return (
    <CardWrapper>
      <img src={image} alt={name} width="220" />
      <BottleShadow />
      <div className="card-content p-4 bg-light rounded shadow">
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <select className="form-select w-auto">
            <option value="50">50 ml</option>
            <option value="100">100 ml</option>
          </select>
          <div className="fw-bold">₹ {price50}</div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary btn-sm">-</button>
            <span>1</span>
            <button className="btn btn-outline-secondary btn-sm">+</button>
          </div>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
    </CardWrapper>
  );
}
