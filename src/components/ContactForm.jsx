import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import FormLayout from "./FormLayout"

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
    <FormLayout 
      title={"Enrollment Form"}
      handleSubmit={handleSubmit}
      submitted={submitted}
      form={
        <>
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
            variant='outline'
            disabled={isSubmitting}
            className="mb-4"
          >
            Submit
          </Button>
        </>
      }
    />
  )
};

export default ContactForm;
