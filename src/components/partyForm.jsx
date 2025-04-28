import React, { useState } from 'react';
import './form.css'

const PartyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partyDate: '',
    numOfGuests: '',
    message: '',
    type: 'parties'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true)
      }
      else {
        alert('Failed to submit the form.')
      }

    } catch (e) {
      alert('Failed to submit the form.')
      console.log(e);
    } finally {
      setIsSubmitting(false)
    }

  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Party Inquiry Form</h2>

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
              placeholder="Spongebob Squarepants"
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
              placeholder="squarepants@krustykrab.com"
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
            <label htmlFor="partyDate" className="form-label">Party Date</label>
            <input
              type="date"
              className="form-control"
              id="partyDate"
              name="partyDate"
              value={formData.partyDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="numOfGuests" className="form-label">Availability for Tour</label>
            <input
              type="number"
              className="form-control"
              placeholder="25"
              id="numOfGuests"
              name="numOfGuests"
              value={formData.numOfGuests}
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

          <button type="submit" className="btn" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default PartyForm;
