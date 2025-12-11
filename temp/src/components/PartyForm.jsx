import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';

const PartyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partyDate: '',
    numOfGuests: '',
    message: '',
    type: 'parties'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openPartyDate, setOpenPartyDate] = useState(false)

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
              Party Inquiry Form
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
                placeholder="Spongebob Squarepants"
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
                placeholder="squarepants@krustykrab.com"
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

            {/* <div 
              className="grid items-center gap-2 w-4/5 p-2"
            >
              <Label 
                htmlFor="partyDate"
              >
                Party Date
              </Label>
              <Input
                type="date"
                id="partyDate"
                name="partyDate"
                value={formData.partyDate}
                onChange={handleChange}
                required
              />
            </div>
            */}
            <div className="grid items-center gap-2 w-4/5 p-2">
              <Label 
                htmlFor="partyDate" 
              >
                Party Date
              </Label>
              <Popover open={openPartyDate} onOpenChange={setOpenPartyDate}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="partyDate"
                    name="partyDate"
                    value={formData.partyDate}
                    onChange={handleChange}
                    className="w-full justify-between font-normal"
                  >
                    {formData.partyDate ? formData.partyDate : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    name="partyDate"
                    selected={formData.partyDate ? new Date(formData.partyDate) : undefined}
                    onSelect={(date) => {
                      if (date instanceof Date && !isNaN(date.getTime())) {
                        setFormData((prev) => ({
                          ...prev,
                          partyDate: date.toISOString().split('T')[0],
                        }));
                        setOpenPartyDate(false);
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
              <Label 
                htmlFor="numOfGuests"
              >
                Number of Guests
              </Label>
              <Input
                type="number"
                placeholder="25"
                id="numOfGuests"
                name="numOfGuests"
                value={formData.numOfGuests}
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
                Tell us more
              ...</Label>
              <Input
                type='text'
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
          </form>
        </div>
      )}
    </div>
  );
};

export default PartyForm;
