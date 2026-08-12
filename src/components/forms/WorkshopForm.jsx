import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import FormLayout from "../FormLayout"
import { workshops } from "../../../api/workshopData"

const WorkshopForm = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        workshop: '',
        type: 'workshop'
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const workshopData = workshops

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Failed to submit the form.");
            }
        } catch (e) {
            alert("Failed to submit the form.");
            console.log(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <FormLayout
            handleSubmit={handleSubmit}
            submitted={submitted}
            form={
                <>
                    <div className="grid items-center w-4/5 gap-2 p-2">
                        <label htmlFor="parentName">
                            Parent Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Eugene Harold Krabs"
                            id="parentName"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid items-center w-4/5 gap-2 p-2">
                        <label htmlFor="childName">
                            Child Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Pearl Krabs"
                            id="childName"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid items-center w-4/5 gap-2 p-2">
                        <label htmlFor="email">
                            Email
                        </label>
                        <Input
                            type="email"
                            placeholder="mrkrabs@krustykrab.com"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid items-center w-4/5 gap-2 p-2">
                        <label htmlFor="phone">
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

                    <div className="grid items-center w-4/5 gap-2 p-2">
                        <Label htmlFor="workshop">
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
                                <SelectValue placeholder="Choose a workshop"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>                                
                                    <SelectLabel>
                                        Workshops
                                    </SelectLabel>
                                    {workshopData.map((workshop, idx) => {
                                        return (
                                            <SelectItem 
                                                value={workshop.title}
                                                key={idx}    
                                            >
                                                {workshop.title}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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
    );
};

export default WorkshopForm;
