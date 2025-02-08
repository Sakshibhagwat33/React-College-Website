import React, { useState } from 'react';
import './AdmissionForm.css';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form className="admission-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Date of Birth:</label>
        <input 
          type="date" 
          name="dob" 
          value={formData.dob} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Upload Documents:</label>
        <input 
          type="file" 
          name="file" 
          onChange={handleFileChange} 
        />
      </div>
      <button className="submit-btn" type="submit">Submit Application</button>
    </form>
  );
}

export default AdmissionForm;