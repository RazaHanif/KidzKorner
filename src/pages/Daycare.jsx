import ChildcareForm from "@/components/ChildcareForm";
import ChildcareTimeTable from "@/components/ChildcareTimeTable";
import TimeTable from "@/components/TimeTable";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom';
import Image from "@/components/Image"
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

const Daycare = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Daycare",
            url: "https://www.kidzkornermilton.com/daycare"
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full text-justify">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="text-3xl font-bold font-serif">
                    Licensed Daycare in Milton, Ontario
                </h1>
                <h2 className="text-xl font-bold text-center">
                    Toddler, Preschool, and Before/After School Programs
                </h2>    
            </div>
            
            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <Image src='/20251010_122316.jpg' alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' />
                <Image src='/IMG-20260108-WA0007.jpg' alt='Child Tracing Alphabets at Kidz Korner Milton, Ontario' />
                <Image src='/IMG-20260209-WA0006.jpg' alt='Child Playing With Play-Doh at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex lg:flex-row flex-col justify-evenly items-center w-3/4">
                <Card>
                    <CardHeader className="hidden">
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Childcare
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            Childcare
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="flex flex-col justify-center items-center w-full text-center">
                            <span>
                                Kidz Korner is a licensed child care centre dedicated to providing high quality early learning and care. We offer toddler, preschool, and before/after school programs. Our curriculum is guided by the
                            </span>
                            <span className="italic self-center">
                                Ministry of Education's "How Does Learning Happen?" (HDLH) 
                            </span>
                            <span>
                                framework. Focusing on the well-being, engagement, expression, and belonging of each individual child. 
                                Our educators provide a high quality programs and a vibrant learning environment, including our most unique feature, the indoor playground.
                                We provide a variety of care options to meet each families unique needs.
                            </span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* 
                TODO: Turn this section into 3 btns to link to each page, no time table
            */}
            <div className="flex flex-col justify-center items-center w-3/4 m-4">
                <h2 className="text-xl font-bold text-center lg:mb-4">
                    Program Options - Full Time & Part Time Care
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col flex-1 w-3/4 gap-4">
                        <NavLink 
                            to="/daycare" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Toddler Daycare
                                    </CardTitle>
                                    <CardDescription>
                                        A safe, nurturing environment where toddlers learn through play while developing confidence, social skills, and independence.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button className="cursor-pointer">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>

                        <NavLink 
                            to="/daycare" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Toddler Daycare
                                    </CardTitle>
                                    <CardDescription>
                                        A safe, nurturing environment where toddlers learn through play while developing confidence, social skills, and independence.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button className="cursor-pointer">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>

                        <NavLink 
                            to="/daycare" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Toddler Daycare
                                    </CardTitle>
                                    <CardDescription>
                                        A safe, nurturing environment where toddlers learn through play while developing confidence, social skills, and independence.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button className="cursor-pointer">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="flex flex-col justify-center m-4 lg:m-0">
                        <TimeTable />
                    </div>
                    <Image src='/20250822_121126.jpg' alt='Child Playing With Blocks at Kidz Korner Milton, Ontario' w="w-sm"/>
                </div>
            </div>

            <div className="flex flex-col justify-center w-3/4">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            What We Offer!
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            What we offer
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex lg:flex-row flex-col justify-evenly text-center">
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Interactive & Play Based Learning
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Weekly Art & Cooking Classes
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Strong Parent Teacher Communication
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Monthly Progress Reports
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Freshly cooked Nutritious Meals & Snacks
                            </p>
                            <p className="p-4">
                                Registered Early Childhood Educators (RECE)
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4">
                    <Image src='/20251023_124356.jpg' alt='Child Carving Pumpkin at Kidz Korner Milton, Ontario' />
                    <Image src='/Photo from Ansa.jpg' alt='Child Whisking Eggs at Kidz Korner Milton, Ontario' />
                    <Image src='/20250811_104025.jpg' alt='Child Making Sea Shell at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-1 m-4 overflow-x-auto">
               <h2 className="text-xl font-bold self-center">
                    Kidz Korner Daily Routine
                </h2>
                <p className="text-sm">
                    Here's what our day looks like!
                </p>
                <div className="lg:w-3/4">
                    <ChildcareTimeTable />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 gap-1">
                <p className="flex w-2/3 text-center">
                    Ready to join us? Contact us today to learn more about our preschool programs and schedule a tour of our facility! 
                </p>

            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <ChildcareForm/>
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Licensed Daycare in Milton, Ontario | Toddler & Preschool Program | Kidz Korner
            </title>
            <meta name="keywords" content="childcare Milton, daycare programs Milton, preschool programs Milton, infant care Milton, toddler care Milton" />
            <meta name="description" content="Kidz Korner is a licensed daycare in Milton, Ontario offering toddler, preschool, and before & after school programs with experienced RECE educators, play-based learning, and a safe indoor environment." />
        </div>
    );
}
  
export default Daycare;