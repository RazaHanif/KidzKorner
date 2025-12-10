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
  const [openDOB, setOpenDOB] = useState(false)

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
                placeholder="Lightning McQueen"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="mcqueen@kachow.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label htmlFor="phone">Phone Number</Label>
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

                        <div className="grid items-center gap-2 w-4/5 p-2">
              <Label 
                htmlFor="dob" 
              >
                Date of birth
              </Label>
              <Popover open={openDOB} onOpenChange={setOpenDOB}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full justify-between font-normal"
                  >
                    {formData.dob ? formData.dob : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    name="dob"
                    selected={formData.dob ? new Date(formData.dob) : undefined}
                    onSelect={(date) => {
                      if (date instanceof Date && !isNaN(date.getTime())) {
                        setFormData((prev) => ({
                          ...prev,
                          dob: date.toISOString().split('T')[0],
                        }));
                        setOpenDOB(false);
                      }
                    }}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <fieldset className="grid items-center gap-2 w-4/5 p-2">
              <Label htmlFor="startDate">
                Session
              </Label>
              <div className='form-check'>
                <Input
                  type="radio"
                  className="form-check-input"
                  id="option1"
                  name="startDate"
                  value='Winter Break'
                  onChange={handleChange}
                  checked={formData.startDate === 'WinterBreak'}
                  required
                />
                <Label 
                  className='form-check-label'
                  htmlFor='option1'>
                    Winter Break
                </Label>
              </div>
              <div className='form-check'>
                <Input
                  type="radio"
                  className="form-check-input"
                  id="option1"
                  name="startDate"
                  value='March Break'
                  onChange={handleChange}
                  checked={formData.startDate === 'March Break'}
                  required
                />
                <Label 
                  className='form-check-label'
                  htmlFor='option1'>
                    March Break
                </Label>
              </div>
              <div className='form-check'>
                <Input
                  type="radio"
                  className="form-check-input"
                  id="option1"
                  name="startDate"
                  value='Summer Break'
                  onChange={handleChange}
                  checked={formData.startDate === 'Summer Break'}
                  required
                />
                <Label 
                  className='form-check-label'
                  htmlFor='option1'>
                    Summer Break
                </Label>
              </div>
              <div className='form-check'>
                <Input
                  type="radio"
                  className="form-check-input"
                  id="option1"
                  name="startDate"
                  value='PA Day'
                  onChange={handleChange}
                  checked={formData.startDate === 'PA Day'}
                  required
                />
                <Label 
                  className='form-check-label'
                  htmlFor='option1'>
                    PA Day
                </Label>
              </div>
            </fieldset>
            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label htmlFor="message">Tell us more...</Label>
              <textarea
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

export default CampForm;

