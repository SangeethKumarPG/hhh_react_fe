export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Us</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="About PerfumeStore"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-7 text-center text-md-start">
            <p>
              At <strong>PerfumeStore</strong>, we believe fragrance is an
              expression of individuality. Our curated collection of luxury
              perfumes is designed to capture elegance, sophistication, and
              timeless beauty.
            </p>
            <p>
              Whether you are looking for a bold scent for special occasions or
              a fresh fragrance for everyday wear, our perfumes are crafted to
              leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
