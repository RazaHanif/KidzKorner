import React, { useState } from 'react';
import './form.css'

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    socialMedia: '',
    contactAgain: '',
    allergies: '',
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

        <fieldset className="mb-3">
            <legend>Persmission to post on social media</legend>
            <div className="form-check">
                <input
                    type="radio"
                    className="form-check-input"
                    id="option1"
                    name="socialMedia"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.socialMedia === 'Yes'}
                    disabled
                />
              <label className="form-check-label" htmlFor="option1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="option2"
                name="socialMedia"
                value="No"
                onChange={handleChange}
                checked={formData.socialMedia === 'No'}
                disabled
              />
              <label className="form-check-label" htmlFor="option2">
                No
              </label>
            </div>
          </fieldset>

        <fieldset className="mb-3">
            <legend>Persmission to contact again</legend>
            <div className="form-check">
                <input
                    type="radio"
                    className="form-check-input"
                    id="option1"
                    name="contactAgain"
                    value="Yes"
                    onChange={handleChange}
                    checked={formData.contactAgain === 'Yes'}
                    disabled
                />
              <label className="form-check-label" htmlFor="option1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="option2"
                name="contactAgain"
                value="No"
                onChange={handleChange}
                checked={formData.contactAgain === 'No'}
                disabled
              />
              <label className="form-check-label" htmlFor="option2">
                No
              </label>
            </div>
          </fieldset>

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
            <label htmlFor="message" className="form-label">Allergies</label>
            <textarea
              className="form-control"
              placeholder="List all allergies, n/a if none."
              id="allergies"
              name="allergies"
              value={formData.allergies}
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
