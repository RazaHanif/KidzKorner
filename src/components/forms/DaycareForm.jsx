import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import FormLayout from "../FormLayout";

const DaycareForm = ({ daycareType }) => {
    const programTypes = {
        toddler: "Toddler",
        preschool: "Preschool",
        before_after: "Before or After School",
    };

    const sessionTypes = {
        toddler: [
            "Full Day - 9:00 AM to 3:00 PM",
            "Half Day - 9:00 AM to 11:30 AM",
            "Half Day - 12:30 PM to 3:00 PM",
        ],
        preschool: [
            "Full Day - 9:00 AM to 3:00 PM",
            "Half Day - 9:00 AM to 11:30 AM",
            "Half Day - 12:30 PM to 3:00 PM",
        ],
        before_after: [
            "Before School - 7:30 AM to 9:00 AM",
            "After School - 3:00 PM to 6:00 PM",
        ],
    };

    const today = new Date();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        programType: daycareType ? programTypes[daycareType] : "",
        session: daycareType ? sessionTypes[daycareType] : "",
        dob: today.toISOString().split("T")[0],
        startDate: "",
        interviewTiming: "",
        message: "",
        type: "daycare",
    });

    const minStartDate = new Date(formData.dob);
    minStartDate.setMonth(minStartDate.getMonth() + 18);

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openDOB, setOpenDOB] = useState(false);
    const [openStartDate, setOpenStartDate] = useState(false);
    const [errorDOB, setErrorDOB] = useState(false);
    const [errorStartDate, setErrorStartDate] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.dob) {
            setErrorDOB("Please select a date of birth.");
            return;
        }

        if (!formData.startDate) {
            setErrorStartDate("Please select a date of birth.");
            return;
        }

        setErrorDOB("");
        setErrorStartDate("");
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
                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="name">Name</Label>
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

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="email">Email</Label>
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
                        <Label htmlFor="dob">Date of birth</Label>
                        {errorDOB && (
                            <Alert variant="destructive" className="w-4/5">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Missing information</AlertTitle>
                                <AlertDescription>
                                    Please select a date of birth before
                                    submitting the form.
                                </AlertDescription>
                            </Alert>
                        )}
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
                                    {formData.dob
                                        ? formData.dob
                                        : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-full p-0"
                                side="bottom"
                                align="start"
                                avoidCollisions={false}
                                forceMount
                            >
                                <Calendar
                                    mode="single"
                                    name="dob"
                                    selected={
                                        formData.dob
                                            ? new Date(formData.dob)
                                            : undefined
                                    }
                                    disabled={{
                                        after: today,
                                    }}
                                    onSelect={(date) => {
                                        if (
                                            date instanceof Date &&
                                            !isNaN(date.getTime())
                                        ) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                dob: date
                                                    .toISOString()
                                                    .split("T")[0],
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
                        <Label htmlFor="startDate">Enrollment Date</Label>
                        {errorStartDate && (
                            <Alert variant="destructive" className="w-4/5">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Missing information</AlertTitle>
                                <AlertDescription>
                                    Please select a valid start date before
                                    submitting the form. Start date must be 18
                                    Months after Child's Date of Birth.
                                </AlertDescription>
                            </Alert>
                        )}
                        <Popover
                            open={openStartDate}
                            onOpenChange={setOpenStartDate}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="startDate"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full justify-between font-normal"
                                >
                                    {formData.startDate
                                        ? formData.startDate
                                        : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-full p-0"
                                side="bottom"
                                align="start"
                                avoidCollisions={false}
                                forceMount
                            >
                                <Calendar
                                    mode="single"
                                    name="startDate"
                                    selected={
                                        formData.startDate
                                            ? new Date(formData.startDate)
                                            : undefined
                                    }
                                    disabled={{
                                        before: minStartDate,
                                    }}
                                    onSelect={(date) => {
                                        if (
                                            date instanceof Date &&
                                            !isNaN(date.getTime())
                                        ) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                startDate: date
                                                    .toISOString()
                                                    .split("T")[0],
                                            }));
                                            setOpenStartDate(false);
                                        }
                                    }}
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {daycareType ? (
                        <div className="grid gap-2 w-4/5 p-2">
                            <Label>Program Type</Label>
                            <Input value={programTypes[daycareType]} disabled />
                        </div>
                    ) : (
                        <div className="grid gap-2 w-4/5 p-2">
                            <Label>Program Type</Label>

                            <RadioGroup
                                value={formData.programType}
                                onValueChange={(value) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        programType: value,
                                    }))
                                }
                            >
                                {Object.entries(programTypes).map(
                                    ([key, value]) => (
                                        <div
                                            className="flex items-center gap-3"
                                            key={key}
                                        >
                                            <RadioGroupItem
                                                value={value}
                                                id={`radio-${key}`}
                                            />
                                            <Label htmlFor={`radio-${key}`}>
                                                {value}
                                            </Label>
                                        </div>
                                    ),
                                )}
                            </RadioGroup>
                        </div>
                    )}


                    {daycareType ? (
                        <div className="grid gap-2 w-4/5 p-2">
                            <Label>Session</Label>
                            <Input value={sessionTypes[daycareType]} disabled />
                        </div>
                    ) : (
                        <div className="grid gap-2 w-4/5 p-2">
                            <Label>Session</Label>

                            <RadioGroup
                                value={formData.programType}
                                onValueChange={(value) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        programType: value,
                                    }))
                                }
                            >
                                {Object.entries(sessionTypes).map(
                                    ([key, value]) => (
                                        <div
                                            className="flex items-center gap-3"
                                            key={key}
                                        >
                                            <RadioGroupItem
                                                value={value}
                                                id={`radio-${key}`}
                                            />
                                            <Label htmlFor={`radio-${key}`}>
                                                {value}
                                            </Label>
                                        </div>
                                    ),
                                )}
                            </RadioGroup>
                        </div>
                    )}

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label>Program Type</Label>
                        <RadioGroup
                            value={formData.programType}
                            onValueChange={(value) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    programType: value,
                                }))
                            }
                        >
                            <div className="flex items-center gap-3">
                                <RadioGroupItem
                                    value="Preschool"
                                    id="radio-1"
                                />
                                <Label htmlFor="radio-1">Preschool</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="Toddler" id="radio-2" />
                                <Label htmlFor="radio-2">Toddler</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label>Program Type</Label>
                        <RadioGroup
                            value={formData.session}
                            onValueChange={(value) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    session: value,
                                }))
                            }
                        >
                            <div className="flex items-center gap-3">
                                <RadioGroupItem
                                    value="Full Day - 9am to 3pm"
                                    id="radio-1"
                                />
                                <Label htmlFor="radio-1">
                                    Full Day - 9am to 3pm
                                </Label>
                            </div>

                            <div className="flex items-center gap-3">
                                <RadioGroupItem
                                    value="Half Day - 9am to 11:30am"
                                    id="radio-2"
                                />
                                <Label htmlFor="radio-2">
                                    Half Day - 9am to 11:30am
                                </Label>
                            </div>

                            <div className="flex items-center gap-3">
                                <RadioGroupItem
                                    value="Half Day - 12:30pm to 3pm"
                                    id="radio-3"
                                />
                                <Label htmlFor="radio-3">
                                    Half Day - 12:30pm to 3pm
                                </Label>
                            </div>

                            <div className="flex items-center gap-3">
                                <RadioGroupItem
                                    value="After School - 3pm to 6pm"
                                    id="radio-4"
                                />
                                <Label htmlFor="radio-4">
                                    Before / After School Care
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="interviewTiming">
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

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="message">Tell us more...</Label>
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
                        type="submit"
                        variant="outline"
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

export default DaycareForm;
