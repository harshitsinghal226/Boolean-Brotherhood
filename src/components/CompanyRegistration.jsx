import React from 'react';
import './CompanyRegistration.css';

const CompanyRegistration = () => (
  <div>
    {/* Header */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <span className="me-2" style={{ fontSize: '1.2rem' }}>🟩</span>
          AgriCarbon
        </a>
        <div className="navbar-center mx-auto">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right d-flex align-items-center">
          <a href="#" className="btn btn-success fw-bold px-4">Get Started</a>
        </div>
      </div>
    </nav>

    {/* Registration Form */}
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: 600 }}>
        <h2 className="text-center mb-4 mt-5 fw-bold">Register your company</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control bg-light" placeholder="Enter your company name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control bg-light" placeholder="Choose a username" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control bg-light" placeholder="Enter your email address" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control bg-light" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control bg-light" placeholder="Create a password" />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control bg-light" placeholder="Confirm your password" />
          </div>
          <div className="mb-4">
            <label className="form-label">Address</label>
            <input type="text" className="form-control bg-light" placeholder="Enter your company address" />
          </div>
          <button type="submit" className="btn btn-success w-100 fw-bold" style={{ fontSize: '1.1rem' }}>
            Register
          </button>
        </form>
        <div className="text-center mt-3 text-muted" style={{ fontSize: '0.95rem' }}>
          Already a customer? <a href="/sign-in">Sign In</a>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyRegistration;