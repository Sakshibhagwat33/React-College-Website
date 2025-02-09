import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './AdmissionForm.css';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    course: '',
    lastYearMarksheet: null,
    tenthMarksheet: null,
    twelfthMarksheet: null,
  });

  const courses = [
    "Bachelor of Science (B.Sc.)",
    "Bachelor of Business Administration (BBA)",
    "Master of Business Administration (MBA)",
    "Computer Science & Engineering (B.Tech)",
    "Master of Computer Applications (MCA)"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Store the first uploaded file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Application Submitted!",
      text: `Thank you, ${formData.name}! Your application for ${formData.course} has been received.`,
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      dob: '',
      course: '',
      lastYearMarksheet: null,
      tenthMarksheet: null,
      twelfthMarksheet: null,
    });

    // Reset file inputs
    document.getElementById("lastYearMarksheet").value = "";
    document.getElementById("tenthMarksheet").value = "";
    document.getElementById("twelfthMarksheet").value = "";
  };

  return (
    <form className="admission-form" onSubmit={handleSubmit}>
      <h2>Apply for Admission</h2>
      
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
        <label>Select Course:</label>
        <select 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          required
        >
          <option value="">-- Select a Course --</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
      </div>

      <h3>Upload Required Documents</h3>

      <div className="form-group">
        <label>Last Year Marksheet:</label>
        <input 
          type="file" 
          id="lastYearMarksheet"
          name="lastYearMarksheet" 
          onChange={handleFileChange} 
          required
        />
      </div>

      <div className="form-group">
        <label>10th Marksheet:</label>
        <input 
          type="file" 
          id="tenthMarksheet"
          name="tenthMarksheet" 
          onChange={handleFileChange} 
          required
        />
      </div>

      <div className="form-group">
        <label>12th Marksheet:</label>
        <input 
          type="file" 
          id="twelfthMarksheet"
          name="twelfthMarksheet" 
          onChange={handleFileChange} 
          required
        />
      </div>

      <button className="submit-btn" type="submit">Submit Application</button>
    </form>
  );
}

export default AdmissionForm;
