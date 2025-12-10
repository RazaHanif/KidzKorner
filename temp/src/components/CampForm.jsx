import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';

const CampForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    startDate: '',
    message: '',
    type: 'summercamp'
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
      <h2 className="mb-4">Camp Enrollment Form</h2>

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
              placeholder="Lightning McQueen"
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
              placeholder="mcqueen@kachow.com"
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

          <fieldset className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Session
            </label>
            <div className='form-check'>
              <input
                type="radio"
                className="form-check-input"
                id="option1"
                name="startDate"
                value='Winter Break'
                onChange={handleChange}
                checked={formData.startDate === 'WinterBreak'}
                required
              />
              <label 
                className='form-check-label'
                htmlFor='option1'>
                  Winter Break
              </label>
            </div>
            <div className='form-check'>
              <input
                type="radio"
                className="form-check-input"
                id="option1"
                name="startDate"
                value='March Break'
                onChange={handleChange}
                checked={formData.startDate === 'March Break'}
                required
              />
              <label 
                className='form-check-label'
                htmlFor='option1'>
                  March Break
              </label>
            </div>
            <div className='form-check'>
              <input
                type="radio"
                className="form-check-input"
                id="option1"
                name="startDate"
                value='Summer Break'
                onChange={handleChange}
                checked={formData.startDate === 'Summer Break'}
                required
              />
              <label 
                className='form-check-label'
                htmlFor='option1'>
                  Summer Break
              </label>
            </div>
            <div className='form-check'>
              <input
                type="radio"
                className="form-check-input"
                id="option1"
                name="startDate"
                value='PA Day'
                onChange={handleChange}
                checked={formData.startDate === 'PA Day'}
                required
              />
              <label 
                className='form-check-label'
                htmlFor='option1'>
                  PA Day
              </label>
            </div>
          </fieldset>
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

export default CampForm;

