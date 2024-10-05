// PortfolioForm.jsx
import React, { useState } from 'react';

function PortfolioForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    skills: '',
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    // Reset the form or navigate to another page
  };

  return (
    <div className="portfolio-form">
      <h2>Fill Your Portfolio Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </div>
        {/* Add more fields as necessary */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PortfolioForm;
