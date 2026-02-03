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

const ChildcareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    startDate: '',
    ageGroup: '',
    programType: '',
    interviewTiming: '',
    message: '',
    type: 'childcare'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openDOB, setOpenDOB] = useState(false)
  const [openStartDate, setOpenStartDate] = useState(false)

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
        <div className="flex flex-col justify-center items-center w-lg text-black bg-card border-2 rounded-lg">
          Form submitted, thank you!
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-lg'>
          <div className='flex flex-col justify-center items-center w-full text-2xl font-bold text-black'>
              Child Care Enrollment Form
          </div>
          <form 
            onSubmit={handleSubmit}
            className='w-3/4 flex flex-col justify-center items-center gap-2 border-2 bg-card rounded-lg pt-4'
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
                placeholder="Bob Belcher"
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
              <Label 
                htmlFor="email" 
              >
                Email
              </Label>
              <Input
                type="email"
                placeholder="bob@bobsburgers.com"
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
              <Label 
                htmlFor="phone" 
              >
                Phone Number
              </Label>
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
                <PopoverContent className="w-full p-0" side="bottom" align="start" avoidCollisions={false} forceMount>
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

            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label 
                htmlFor="startDate"
              >
                Enrollment Date
              </Label>
              <Popover open={openStartDate} onOpenChange={setOpenStartDate}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full justify-between font-normal"
                  >
                    {formData.startDate ? formData.startDate : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" side="bottom" align="start" avoidCollisions={false} forceMount>
                  <Calendar
                    mode="single"
                    name="startDate"
                    selected={formData.startDate ? new Date(formData.startDate) : undefined}
                    onSelect={(date) => {
                      if (date instanceof Date && !isNaN(date.getTime())) {
                        setFormData((prev) => ({
                          ...prev,
                          startDate: date.toISOString().split('T')[0],
                        }));
                        setOpenStartDate(false);
                      }
                    }}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label>
                Age Group
              </Label>
              <RadioGroup 
                value={formData.ageGroup}
                onValueChange={(value) => setFormData(prev => ({...prev, ageGroup: value}))}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Preschool" 
                    id="radio-1" 
                  />
                  <Label 
                    htmlFor="radio-1"
                  >
                    Preschool
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Toddler" 
                    id="radio-2" 
                  />
                  <Label 
                    htmlFor="radio-2"
                  >
                    Toddler
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label>
                Program Type
              </Label>
              <RadioGroup 
                value={formData.programType}
                onValueChange={(value) => setFormData(prev => ({...prev, programType: value}))}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Full Day - 9am to 3pm" 
                    id="radio-1" 
                  />
                  <Label 
                    htmlFor="radio-1"
                  >
                    Full Day - 9am to 3pm
                  </Label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Half Day - 9am to 11:30am" 
                    id="radio-2" 
                  />
                  <Label 
                    htmlFor="radio-2"
                  >
                    Half Day - 9am to 11:30am
                  </Label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="Half Day - 12:30pm to 3pm" 
                    id="radio-3" 
                  />
                  <Label 
                    htmlFor="radio-3"
                  >
                    Half Day - 12:30pm to 3pm
                  </Label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem 
                    value="After School - 3pm to 6pm" 
                    id="radio-4" 
                  />
                  <Label 
                    htmlFor="radio-4"
                  >
                    After School - 3pm to 6pm
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label 
                htmlFor="interviewTiming" 
              >
                Availability for Tour
              </Label>
              <Input
                type="text"
                placeholder="Friday afternoon"
                id="interviewTiming"
                name="interviewTiming"
                value={formData.interviewTiming}
                onChange={handleChange}
                required
              />
            </div>

            <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label 
                htmlFor="message" 
              >
                Tell us more...
              </Label>
              <Input
                type="text"
                placeholder=""
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
          </form>
        </div>
      )}
    </div>
  );
};

export default ChildcareForm;
