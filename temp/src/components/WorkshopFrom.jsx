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
<div className="flex flex-col justify-center items-center w-full p-2">

      {/* Show thank you message when form is submitted */}
      { submitted ? (
        <div className="flex flex-col justify-center items-center w-1/2 text-black bg-card border-2 border-gray-200 rounded-lg">
          Form submitted, thank you!
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-1/2'>
          <div className='flex flex-col justify-center items-center w-full text-2xl font-bold text-black'>
              Childcare Enrollment Form
          </div>
          <form 
            onSubmit={handleSubmit}
            className='w-3/4 flex flex-col justify-center items-center gap-2 border-2 border-gray-200 bg-card rounded-lg pt-4'
          >
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
              <Label 
                htmlFor="message" 
              >
                Allergies
              </Label>
              <Input
                type="text"
                className="form-control"
                placeholder="List all allergies, n/a if none."
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button
              type='submit'
              disabled={isSubmitting}
              className="mb-4"
            >
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkshopForm;
