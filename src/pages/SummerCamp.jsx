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
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { ChefHat, Flower, Heart, Leaf, Palette, Shapes, Snowflake, Sun, TestTube2, Users } from "lucide-react";
import FAQAccordion from "../components/FAQAccordion";


const SummerCamp = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Camp",
            url: "https://www.kidzkornermilton.com/camp"
        },
        {
            name: "Summer Break Camp",
            url: "https://www.kidzkornermilton.com/camp/summer-camp"
        },
    ];

    const faq = [
        {
            q: "What types of camps do you offer?",
            a: "We offer exciting camps throughout the year, including Summer Camp, March Break Camp, Winter Break Camp, and PA Day Camp. Each program features themed activities, games, crafts, and opportunities for children to learn while having fun."
        },
        {
            q: "What age groups can attend your camps?",
            a: "Our camp programs are designed for school-aged children. If you're unsure whether your child meets the age requirements, feel free to contact us and we'll be happy to help."
        },
        {
            q: "What should my child bring to camp?",
            a: "Children should bring a nut-free lunch, snacks, a reusable water bottle, comfortable clothing, indoor shoes, and any personal items they may need throughout the day."
        },
        {
            q: "How do I register for a camp?",
            a: "You can register by completing our online camp registration form. We recommend registering early, as spaces can fill quickly during popular camps such as Summer Camp and March Break Camp."
        },
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Summer Camp in Milton
                </h1>
                <p className="text-center w-3/4">
                    Keep your child active, engaged, and having fun throughout the summer at Kidz Korner. Our summer camp in Milton offers themed activities, arts and crafts, games, indoor playground time, and plenty of opportunities for creative and active play in a welcoming environment.
                </p>
                <div>
                    <a 
                        href="/about#contact-form" 
                        className="hover:scale-105 ease-in-out duration-300 flex-1 lg:w-3/4 flex justify-center"
                    >
                        <Button className="cursor-pointer min-w-1/2">
                            Enquire About Summer Camp
                        </Button>
                    </a>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Choose Kidz Korner Summer Camp
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col lg:flex-row flex-1 lg:w-3/4 w-full gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    Themed Events & Experiences
                                </CardTitle>
                                <CardDescription>
                                    Our summer is filled with fun themes, special activities, and events that give children something new and exciting to look forward to each week.
                                </CardDescription>
                            </CardHeader>
                        </Card>

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
                                    <Button className="pointer-events-none" variant="secondary">
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
                                    <Button className="pointer-events-none" variant="secondary">
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
                                    <Button className="pointer-events-none" variant="secondary">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Camp Information
                </h2>
                <div className="flex lg:flex-row flex-col justify-center lg:items-stretch items-center lg:w-full w-3/4 gap-4">
                    <Card className="flex-1">
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
                                        Enrollment Options
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            PA Day Camps
                                        </li>
                                        <li>
                                            March Break Camp
                                        </li>
                                        <li>
                                            Summer Camp
                                        </li>
                                        <li>
                                            Winter Break Camp
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Ages
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            4 - 13 Years old
                                        </li>
                                        <li>
                                            Siblings Discount Available
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Hours
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            Monday - Friday
                                        </li>
                                        <li>
                                            9:00AM - 5:00PM
                                        </li>
                                        <li>
                                            Flexible 2, 3 or 5 day enrollment
                                        </li>
                                    </ul>
                                </li>
                                <li className="font-semibold">
                                    <span className="font-semibold">
                                        Meals
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            Children bring nut-free lunch and snacks every day
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        See Our Camps
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            <a
                                                href="https://www.instagram.com/kidz.kornermilton/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                Follow us on Instagram to see weekly themes and activities
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-xs">
                                    Closed: Civic Holiday, Christmas Eve, Christmas Day, New Year's Eve, and New Year's Day
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Image src='/media/KK/20250711_111518.jpg' alt='Child Playing With Dinosaurs at Kidz Korner Milton, Ontario' w="w-md" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
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
                        <div className="flex flex-col justify-around items-center">
                            <ul className="font-normal pl-6 list-disc">
                                <li>Arrival</li>
                                <li>Morning Snack</li>
                                <li>Programming</li>
                                <li>Circle Time</li>
                                <li>Cooking / Art Activity</li>
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
                <Image src='/media/KK/IMG-20250722-WA0017.jpg' alt='Child Tye Dyeing Shirt at Kidz Korner Milton, Ontario' />
                <Image src='/media/KK/20260108_111322(0).jpg' alt='Children Kneading Dough at Kidz Korner Milton, Ontario' />
                <Image src='/media/KK/20250722_100154.jpg' alt='Child Painting at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Love Our Camps
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
                            <Users className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Small Group Environment
                        </p>
                        <p className="flex items-start gap-3">
                            <Heart className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Caring Registered Educators
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <Image src='/media/KK/20251106_102726.jpg' alt='Child Cutting Tomatos at Kidz Korner Milton, Ontario' />
                <Image src='/media/KK/20250710_144411.jpg' alt='Children Painting at Kidz Korner Milton, Ontario' />
                <Image src='/media/KK/20250808_135154.jpg' alt='Child Playing With Sensory Toy at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y py-10 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    FAQ
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <p className="flex text-center">
                    Contact us today to lock in your spot! 
                </p> 
                <CampForm/>
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                Kids Camps in Milton, Ontario | Kidz Korner
            </title>
            <meta 
                name="description" 
                content="Looking for kids camps in Milton? Kidz Korner offers Summer Camp, March Break Camp, Winter Break Camp and PA Day Camps for children ages 4-13 with art, cooking, STEM activities and active play." 
            />
            <meta 
                property="og:title"
                content="Kids Camps in Milton, Ontario | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Looking for kids camps in Milton? Kidz Korner offers Summer Camp, March Break Camp, Winter Break Camp and PA Day Camps for children ages 4-13 with art, cooking, STEM activities and active play."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/camp"
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

export default SummerCamp;