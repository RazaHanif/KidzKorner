import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <label 
                htmlFor="name" 
              >
                Name
              </label>
              <Input
                type="text"
                placeholder="Perry Platypus"
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
              <label 
                htmlFor="email"
              >
                Email
              </label>
              <Input
                type="email"
                placeholder="agentp@owca.com"
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
              <label 
                htmlFor="phone"
              >
                Phone Number
              </label>
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
              <Label>
                Permission to post on social media?
              </Label>
              <RadioGroup 
                value={formData.socialMedia}
                onValueChange={(value) => setFormData(prev => ({...prev, socialMedia: value}))}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Yes" 
                    id="radio-1" 
                  />
                  <Label 
                    htmlFor="radio-1"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="No" 
                    id="radio-2" 
                  />
                  <Label 
                    htmlFor="radio-2"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label>
                Permission to contact again?
              </Label>
              <RadioGroup 
                value={formData.contactAgain}
                onValueChange={(value) => setFormData(prev => ({...prev, contactAgain: value}))}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Yes" 
                    id="radio-1" 
                  />
                  <Label 
                    htmlFor="radio-1"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="No" 
                    id="radio-2" 
                  />
                  <Label 
                    htmlFor="radio-2"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label 
                htmlFor="workshop"
              >
                Workshop
              </Label>
              <Select
                id="workshop"
                name="workshop"
                value={formData.workshop}
                onValueChange={(value) => {
                  setFormData(prev => ({ ...prev, workshop: value}))
                }}
                required  
              >
                <SelectTrigger className="w-full">
                  <SelectValue 
                    placeholder="Choose a workshop" 
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Workshops
                    </SelectLabel>
                    <SelectItem 
                      value="Paint Night"
                      >
                      Paint Night
                    </SelectItem>
                    <SelectItem 
                      value="Cooking Class"
                      >
                      Cooking Class
                    </SelectItem>
                    <SelectItem 
                      value="Little Sahaba's"
                      >
                      Little Sahaba's
                    </SelectItem>
                    <SelectItem 
                      value="Mommy & Me"
                      >
                      Mommy & Me
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
{/* 
            <div className="grid items-center gap-2 w-4/5 p-2">
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
*/}

            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label 
                htmlFor="message" 
              >
                Allergies
              </Label>
              <Input
                type="text"
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
