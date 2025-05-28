import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    name: 'Rice Husks',
    desc: 'High-quality rice husks, ideal for various applications including biofuel production and composting. Price: $50 per ton.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Corn Stover',
    desc: 'Dried corn stover, suitable for animal feed, bioenergy, and soil amendment. Price: $40 per ton.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Wheat Straw',
    desc: 'Clean wheat straw, perfect for mulching, animal bedding, and paper production. Price: $60 per ton.',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sugarcane Bagasse',
    desc: 'Processed sugarcane bagasse, excellent for biofuel, paper, and packaging materials. Price: $35 per ton.',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Coffee Grounds',
    desc: 'Recycled coffee grounds, rich in nutrients and ideal for composting and soil enrichment. Price: $75 per ton.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Fruit Peels',
    desc: 'Mixed fruit peels, suitable for biogas production and composting. Price: $25 per ton.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
];

const CompanyListing = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3 mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="../../src/assets/logo.jpg" alt="AgriLoop Logo" width="auto" height="100" className="ml-2 rounded" />
        </a>
        <button className="btn btn-outline-secondary rounded-pill px-4">Logout</button>
      </nav>

      <div className="container">
        <h2 className="fw-bold mt-4 mb-2" style={{fontSize: '2.2rem'}}>Agricultural Waste Products</h2>
        <p className="text-secondary mb-4" style={{maxWidth: 700}}>
          Explore our diverse range of agricultural waste products, each with detailed specifications and pricing to meet your specific needs. Our platform ensures transparency and quality, connecting you directly with sustainable solutions.
        </p>
        <h5 className="fw-semibold mb-4">Available Products</h5>

        <div className="row gy-4">
          {products.map((prod, idx) => (
            <div className="col-12" key={idx}>
              <div className="card flex-row align-items-center p-3 border-0 shadow-sm" style={{borderRadius: '16px'}}>
                <img src={prod.img} alt={prod.name} className="rounded" style={{width: 160, height: 120, objectFit: 'cover', marginRight: 24}} />
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1">{prod.name}</h6>
                  <p className="mb-0 text-secondary" style={{fontSize: '1rem'}}>{prod.desc}</p>
                </div>
                <div className="ms-3">
                  <button className="btn btn-success rounded-pill px-4">View &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyListing; 