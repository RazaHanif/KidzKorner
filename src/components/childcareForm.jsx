import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    enrollmentDate: '',
    programType: '',
    interviewTiming: '',
    generalMessage: '',
  });

  const [submitted, setSubmitted] = useState(false); // State for submission status

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
      setSubmitted(true); // Set submitted to true when form is successful
    } else {
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Enrollment Form</h2>

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
            <label htmlFor="email" className="form-label">
              Email
            </label>
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
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
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
            <label htmlFor="enrollmentDate" className="form-label">
              Enrollment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="enrollmentDate"
              name="enrollmentDate"
              value={formData.enrollmentDate}
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
                id="program1"
                name="programType"
                value="1"
                onChange={handleChange}
                checked={formData.programType === '1'}
                required
              />
              <label className="form-check-label" htmlFor="program1">
                Program 1
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="program2"
                name="programType"
                value="2"
                onChange={handleChange}
                checked={formData.programType === '2'}
              />
              <label className="form-check-label" htmlFor="program2">
                Program 2
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="program3"
                name="programType"
                value="3"
                onChange={handleChange}
                checked={formData.programType === '3'}
              />
              <label className="form-check-label" htmlFor="program3">
                Program 3
              </label>
            </div>
          </fieldset>

          <div className="mb-3">
            <label htmlFor="interviewTiming" className="form-label">
              Interview Timing
            </label>
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
            <label htmlFor="generalMessage" className="form-label">
              General Message
            </label>
            <textarea
              className="form-control"
              id="generalMessage"
              name="generalMessage"
              value={formData.generalMessage}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
