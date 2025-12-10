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
    type: 'workshop'
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
    console.log(formData)
    setSubmitted(true)

    // try {
    //   const response = await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setSubmitted(true)
    //   }
    //   else {
    //     alert('Failed to submit the form.')
    //   }

    // } catch (e) {
    //   alert('Failed to submit the form.')
    //   console.log(e);
    // } finally {
    //   setIsSubmitting(false)
    // }

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
              placeholder="Perry Platypus"
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
              placeholder="agentp@owca.com"
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
            >
                <option value="" selected disabled hidden>Choose a workshop</option>
                <option value="Paint Night">Paint Night</option>
                <option value="Cooking Class">Cooking Class</option>
                <option value="Little Sahaba's">Little Sahaba's</option>
                <option value="Mommy & Me">Mommy & Me</option>
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

export default WorkshopForm;
