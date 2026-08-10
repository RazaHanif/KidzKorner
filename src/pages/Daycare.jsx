import DaycareForm from "@/components/DaycareForm";
import DaycareTimeTable from "@/components/DaycareTimeTable";
import CareSchedule from "@/components/CareSchedule";
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
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Licensed Daycare in Milton, Ontario
                </h1>
                <h2 className="text-xl font-bold text-center w-3/4">
                    Toddler, Preschool, and Before & After School Programs
                </h2>    
            </div>
            
            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4 lg:py-16 py-8">
                <Image src='/media/KK/20251010_122316.jpg' alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' />
                <Image src='/media/KK/IMG-20260108-WA0007.jpg' alt='Child Tracing Alphabets at Kidz Korner Milton, Ontario' />
                <Image src='/media/KK/IMG-20260209-WA0006.jpg' alt='Child Playing With Play-Doh at Kidz Korner Milton, Ontario' />
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
                                Kidz Korner is a licensed child care centre dedicated to providing high quality early learning and care. Our curriculum is guided by the
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

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Program Options - Full Time & Part Time Care
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col lg:flex-row flex-1 lg:w-3/4 w-full gap-4">
                        <NavLink 
                            to="/daycare/toddler" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Toddler Program
                                    </CardTitle>
                                    <CardDescription>
                                       A nurturing environment where toddlers learn through play, exploration, and hands-on activities that support their early development and growing independence.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button className="pointer-events-none" variant="secondary">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>

                        <NavLink
                            to="/daycare/preschool" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Preschool Program
                                    </CardTitle>
                                    <CardDescription>
                                        A play-based learning program designed to help children build confidence, creativity, and essential skills while preparing them for their next stage of learning.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button className="pointer-events-none" variant="secondary">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>

                        <NavLink
                            to="/daycare/before-after-school-care" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Before & After School Program
                                    </CardTitle>
                                    <CardDescription>
                                        A safe and engaging program for school-age children offering before and after school care, with opportunities for learning, activities, and social connection.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button className="pointer-events-none" variant="secondary">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 m-4">
                <h2 className="text-xl font-bold text-center lg:">
                    Flexible Care Options for Milton Families
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col justify-center m-4 lg:m-0">
                        <CareSchedule />
                    </div>
                    <Image src='/media/KK/20250822_121126.jpg' alt='Child Playing With Blocks at Kidz Korner Milton, Ontario' w="w-sm"/>
                </div>
            </div>

            <div className="flex flex-col justify-center w-3/4 lg:py-16 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg mb-8">
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
                    <Image src='/media/KK/20251023_124356.jpg' alt='Child Carving Pumpkin at Kidz Korner Milton, Ontario' />
                    <Image src='/media/KK/Photo from Ansa.jpg' alt='Child Whisking Eggs at Kidz Korner Milton, Ontario' />
                    <Image src='/media/KK/20250811_104025.jpg' alt='Child Making Sea Shell at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-1 m-4 overflow-x-auto lg:py-16 py-8">
               <h2 className="text-xl font-bold self-center">
                    A Day at Kidz Korner
                </h2>
                <p className="text-sm">
                    Every day includes a balance of learning, creativity, play, and rest designed to support each child's development.
                </p>
                <div className="lg:w-3/4">
                    <DaycareTimeTable />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <p className="flex text-center">
                    Ready to join us? Contact us today to learn more about our preschool programs and schedule a tour of our facility! 
                </p>
                <DaycareForm/>
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Licensed Daycare in Milton, Ontario | Toddler & Preschool Care | Kidz Korner
            </title>
            <meta 
                name="description" 
                content="Kidz Korner is a licensed daycare in Milton, Ontario offering toddler, preschool, and before & after school programs with experienced RECE educators, play-based learning, and a safe indoor environment." 
            />

            <meta 
                property="og:title"
                content="Licensed Daycare in Milton, Ontario | Toddler & Preschool Care | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Kidz Korner is a licensed daycare in Milton, Ontario offering toddler, preschool, and before & after school programs with experienced RECE educators, play-based learning, and a safe indoor environment."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/daycare"
            />
            <meta
                property="og:image"
                content="https://www.kidzkornermilton.com/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="Kidz Korner licensed daycare in Milton"
            />


        </div>
    );
}
  
export default Daycare;