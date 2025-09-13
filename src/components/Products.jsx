import PerfumeCard from "./PerfumeCard";

const perfumes = [
  {
    image: "https://via.placeholder.com/300",
    title: "Luxury Perfume",
    desc: "Elegant fragrance with floral notes.",
    price: "$120"
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Classic Perfume",
    desc: "Timeless and sophisticated aroma.",
    price: "$95"
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Modern Perfume",
    desc: "Fresh and bold fragrance for today.",
    price: "$110"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Our Products</h2>
        <div className="row">
          {perfumes.map((p, idx) => (
            <PerfumeCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
