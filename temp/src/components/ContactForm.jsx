import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'about'
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
    <div className="flex flex-col justify-center items-center w-full p-2">

      {/* Show thank you message when form is submitted */}
      { submitted ? (
        <div className="flex flex-col justify-center items-center w-lg text-black bg-card border-2 border-gray-200 rounded-lg">
          Form submitted, thank you!
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-lg'>
          <div className='flex flex-col justify-center items-center w-full text-2xl font-bold text-black'>
              Childcare Enrollment Form
          </div>
          <form 
            onSubmit={handleSubmit}
            className='w-3/4 flex flex-col justify-center items-center gap-2 border-2 border-gray-200 bg-card rounded-lg pt-4'
          >
            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label 
                htmlFor="name"
              >
                Name
              </Label>
              <Input
                type="text"
                placeholder="Chilli Heeler"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label htmlFor="email" className="form-label">Email</Label>
              <Input
                type="email"
                placeholder="chilli@heelerfamily.au"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label htmlFor="phone" className="form-label">Phone Number</Label>
              <Input
                type="tel"
                placeholder="905-878-4697"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label htmlFor="message" className="form-label">Ask us something...</Label>
              <Input
                type="text"
                id="message"
                name="message"
                value={formData.message}
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

export default ContactForm;
