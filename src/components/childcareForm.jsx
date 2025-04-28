import React, { useState } from 'react';
import './form.css'

const ChildcareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    startDate: '',
    programType: '',
    interviewTiming: '',
    message: '',
    type: 'childcare'
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('click')
    

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true); // Set submitted to true when form is successful
    } else {
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Enrollment Inquiry Form</h2>

      {/* Show thank you message when form is submitted */}
      {submitted ? (
        <div className="alert alert-success">
          Form submitted, thank you!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Bob Belcher"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="bob@bobsburgers.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="905-878-4697"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Child's Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Enrollment Date</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <fieldset className="mb-3">
            <legend>Program Type</legend>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="option1"
                name="programType"
                value="Full Day - 9am to 3pm"
                onChange={handleChange}
                checked={formData.programType === 'Full Day - 9am to 3pm'}

              />
              <label className="form-check-label" htmlFor="option1">
                Full Day - 9am to 3pm
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="option2"
                name="programType"
                value="Half Day - 9am to 11:30am"
                onChange={handleChange}
                checked={formData.programType === 'Half Day - 9am to 11:30am'}

              />
              <label className="form-check-label" htmlFor="option2">
                Half Day - 9am to 11:30am
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="option3"
                name="programType"
                value="Half Day - 12:30pm to 3pm"
                onChange={handleChange}
                checked={formData.programType === 'Half Day - 12:30pm to 3pm'}

              />
              <label className="form-check-label" htmlFor="option3">
                Half Day - 12:30pm to 3pm
              </label>
            </div>
          </fieldset>

          <div className="mb-3">
            <label htmlFor="interviewTiming" className="form-label">Availability for Tour</label>
            <input
              type="text"
              className="form-control"
              id="interviewTiming"
              name="interviewTiming"
              value={formData.interviewTiming}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Tell us more...</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ChildcareForm;
