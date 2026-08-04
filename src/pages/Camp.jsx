import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom';
import CampForm from "@/components/CampForm";
import Image from "@/components/Image";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { ChefHat, Flower, Heart, Leaf, Palette, Shapes, Snowflake, Sun, TestTube2 } from "lucide-react";

const Camp = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Camp",
            url: "https://www.kidzkornermilton.com/camp"
        },
    ];
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    School Age Camp in Milton
                </h1>
                <p className="text-center w-3/4">
                    Keep your child active, creative, and engaged during school breaks with Kidz Korner's camp programs in Milton.
                    We offer Summer Camp, March Break Camp, Winter Break Camp, and PA Day Camp for children ages 4-13, featuring art, cooking, games, STEM activities, and themed weekly adventures.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Choose Your Camp
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col lg:flex-row flex-1 lg:w-3/4 w-full gap-4">
                        <NavLink 
                            to="/camp/summer-camp" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle className="flex flex-row items-center gap-2">
                                        <Sun className="text-primary" />
                                        Summer Camp
                                    </CardTitle>
                                    <CardDescription>
                                        8-10 weeks of themed adventures packed with art, cooking, science and special activities
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
                            to="/camp/pa-day-camp" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle className="flex flex-row items-center gap-2">
                                       <Leaf className="text-primary" />
                                       PA Day Camp
                                    </CardTitle>
                                    <CardDescription>
                                        A fun full-day program whenever schools are closed
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
                            to="/camp/winter-break-camp" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle className="flex flex-row items-center gap-2">
                                        <Snowflake className="text-primary" />
                                        Winter Break Camp
                                    </CardTitle>
                                    <CardDescription>
                                        Holiday fun filled with crafts, cooking, indoor games and winter themed activities
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
                            to="/camp/march-break-camp" 
                            end 
                            className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                        >
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle className="flex flex-row items-center gap-2">
                                        <Flower className="text-primary" />
                                        March Break Camp
                                    </CardTitle>
                                    <CardDescription>
                                        One exciting week of learning, creativity and active play
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
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Camp Information
                </h2>
                <div className="flex lg:flex-row flex-col justify-center lg:items-stretch items-center w-3/4 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="p-2 bg-primary text-primary-foreground flex flex-col justify-center items-center rounded-md text-lg">
                                <h2>
                                    $175/Week - Camps 
                                </h2>
                                <h2>
                                    $45/Day - PD Day
                                </h2>
                            </CardTitle>
                            <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                                <p className="text-xs text-center">
                                    To preserve the quality of our program, summer camp enrollment is limited to a maximum of 13 children.
                                </p>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col gap-4 text-sm">
                                <li>
                                    <span className="font-semibold">
                                        Full Time & Part Time Options
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            Camps run during PD Days, March Breaks, Summer Vacations, and Winter Breaks.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Program Hours
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            9:00AM - 5:00PM
                                        </li>
                                        <li>
                                            Monday - Friday
                                        </li>
                                        <li>
                                            Families can enroll for 2, 3, or 5 days a week.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Ages
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            4 Years Old to 13 Years Old
                                        </li>
                                        <li>
                                            Siblings Discount Available
                                        </li>
                                    </ul>
                                </li>
                                <li className="font-semibold">
                                    Children bring their own lunches and snacks
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/kidz.kornermilton/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline font-semibold"
                                    >
                                        Click Here to visit our Instagram to see our Activities / Weekly Camp Themes
                                    </a>
                                </li>
                                <li className="text-xs font-semibold">
                                    Center is closed on Civic Holiday, Christmas Eve, Christmas Day, New Years Eve, and New Years Day
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Image src='/20250711_111518.jpg' alt='Child Playing With Dinosaurs at Kidz Korner Milton, Ontario' w="w-sm"/>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8 border-y">
                <Card className="lg:w-2/3 w-full flex-1">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Camp Schedule
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            Camp Schedule
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col lg:flex-row justify-around">
                            <ul className="font-normal pl-6 list-disc">
                                <li>Arrival</li>
                                <li>Morning Snack</li>
                                <li>Programming</li>
                                <li>Circle Time</li>
                                <li>Cooking / Art Activity</li>
                            </ul>
                            <ul className="font-normal pl-6 list-disc">
                                <li>Lunch</li>
                                <li>Rest Time</li>
                                <li>Afternoon Snack</li>
                                <li>Programming</li>
                                <li>Dismissal</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <Image src='/IMG-20250722-WA0017.jpg' alt='Child Tye Dyeing Shirt at Kidz Korner Milton, Ontario' />
                <Image src='/20260108_111322(0).jpg' alt='Children Kneading Dough at Kidz Korner Milton, Ontario' />
                <Image src='/20250722_100154.jpg' alt='Child Painting at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y py-10 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Love Our Camp
                </h2>
                <div className="flex lg:flex-row flex-col p-2 gap-2">
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <Palette className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Creative Art Projects
                        </p>
                        <p className="flex items-start gap-3">
                            <ChefHat className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Hands-on Cooking Classes
                        </p>
                        <p className="flex items-start gap-3">
                            <TestTube2 className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Weekly STEM Activities
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <Shapes className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Active Indoor Play
                        </p>
                        <p className="flex items-start gap-3">
                            <Heart className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Small Group Environment
                        </p>
                        <p className="flex items-start gap-3">
                            <Heart className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Safe, clean, nut-free environment
                        </p>
                        <p className="flex items-start gap-3">
                            <Heart className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Convenient Milton location
                        </p>
                        <p className="flex items-start gap-3">
                            <Heart className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Setup/Take Down Time Included
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center w-3/4 gap-4 lg:py-16 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Art Class
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">
                                3 Days a week
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-semibold">
                                    Campers explore a wide range of mediums and techniques such as:
                                </span>
                                <ul className="font-normal pl-6 list-disc">
                                    <li>
                                        Printmaking
                                    </li>
                                    <li>
                                        Painting and Drawing
                                    </li>
                                    <li>
                                        Mixed Media and Collages
                                    </li>
                                    <li>
                                        End of term art gallery for parents to view
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Cooking Class
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">
                                2 Days a week
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-semibold">
                                    Campers will engage in a variety of cooking experiences such as:
                                </span>
                                <ul className="font-normal pl-6 list-disc">
                                    <li>
                                        Learning about kitchen safety and hygiene
                                    </li>
                                    <li>
                                        Measuring, cutting, and cleaning ingredients
                                    </li>
                                    <li>
                                        Recipes will be made using various cooking methods
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <Image src='/20251106_102726.jpg' alt='Child Cutting Tomatos at Kidz Korner Milton, Ontario' />
                <Image src='/20250710_144411.jpg' alt='Children Painting at Kidz Korner Milton, Ontario' />
                <Image src='/20250808_135154.jpg' alt='Child Playing With Sensory Toy at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4 lg:pt-16 pt-8">
                <p className="flex text-center">
                    Contact us today to lock in your spot! 
                </p> 
                <CampForm/>
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Kids Camp in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="keywords" content="kids camps Milton, summer camp Milton, seasonal camp Milton, childcare camp Milton, children's camp Milton" />
            <meta name="description" content="Join Kidz Korner's fun and educational kids' camps in Milton, Ontario. Summer and seasonal camps designed to spark curiosity and creativity." />
        </div>
    );
}
  
export default Camp;