import React, { useState } from 'react';
import './form.css'

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    numOfGuests: '',
    message: '',
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
    

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
    } else {
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Workshop Form</h2>

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
              disabled
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
              disabled
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
              disabled
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
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="partyDate" className="form-label">Workshop</label>
            <select 
                className="form-select" 
                aria-label="Class Selection"
                id="workshop"
                name="workshop"
                value={formData.workshop}
                onChange={handleChange}
                required
                disabled
            >
                <option value="potteryMothersDay">Pottery - Mothers Day Session</option>
                <option value="potteryFathersDay">Pottery - Fathers Day Session</option>
                <option value="potteryFiveSession">Pottery  - 5 Sessions</option>
                <option value="CookingClassSingle">Cooking Class - 1 Session</option>
                <option value="CookingClassFour">Cooking Class - 4 Sessions</option>
            </select>
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
              disabled
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

export default WorkshopForm;
