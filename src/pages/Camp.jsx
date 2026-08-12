import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import CampForm from "@/components/forms/CampForm";
import Image from "@/components/Image";
import {
    breadcrumbSchema,
    faqSchema,
    localBusinessSchema,
} from "../schema/structDataSchema";
import StructData from "../components/StructData";
import {
    ChefHat,
    Flower,
    Heart,
    Leaf,
    Palette,
    Shapes,
    Snowflake,
    Sun,
    TestTube2,
    Users,
} from "lucide-react";
import FAQAccordion from "../components/FAQAccordion";

const Camp = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/",
        },
        {
            name: "Camp",
            url: "https://www.kidzkornermilton.com/camp",
        },
    ];

    const faq = [
        {
            q: "What types of camps do you offer?",
            a: "We offer exciting camps throughout the year, including Summer Camp, March Break Camp, Winter Break Camp, and PA Day Camp. Each program features themed activities, games, crafts, and opportunities for children to learn while having fun.",
        },
        {
            q: "What age groups can attend your camps?",
            a: "Our camp programs are designed for school-aged children. If you're unsure whether your child meets the age requirements, feel free to contact us and we'll be happy to help.",
        },
        {
            q: "What should my child bring to camp?",
            a: "Children should bring a nut-free lunch, snacks, a reusable water bottle, comfortable clothing, indoor shoes, and any personal items they may need throughout the day.",
        },
        {
            q: "How do I register for a camp?",
            a: "You can register by completing our online camp registration form. We recommend registering early, as spaces can fill quickly during popular camps such as Summer Camp and March Break Camp.",
        },
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    School Age Camp in Milton
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-9/10 lg:w-3/4">
                <p className="text-center w-3/4">
                    Keep your child active, creative, and engaged during school
                    breaks with Kidz Korner's camp programs in Milton. We offer
                    Summer Camp, March Break Camp, Winter Break Camp, and PA Day
                    Camp for children ages 4-13, featuring art, cooking, games,
                    STEM activities, and weekly themed adventures.
                </p>
                <Image
                    src="/media/Stock/18.jpg"
                    alt="Toys lined up in a row at Kidz Korner Milton, Ontario"
                    w="w-sm"
                />
            </div>

            <div className="flex flex-col justify-center items-center w-9/10 lg:w-3/4 border-y lg:py-12 py-8 lg:my-12 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Choose Your Camp
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col lg:flex-row flex-1 lg:w-3/4 w-full gap-6">
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
                                        8-10 weeks of themed adventures packed
                                        with art, cooking, science and special
                                        activities
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button
                                        className="pointer-events-none"
                                        variant="secondary"
                                    >
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
                                        A fun full-day program whenever schools
                                        are closed
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button
                                        className="pointer-events-none"
                                        variant="secondary"
                                    >
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
                                        Holiday fun filled with crafts, cooking,
                                        indoor games and winter themed
                                        activities
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button
                                        className="pointer-events-none"
                                        variant="secondary"
                                    >
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
                                        One exciting week of learning,
                                        creativity and active play
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end">
                                    <Button
                                        className="pointer-events-none"
                                        variant="secondary"
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 w-9/10 lg:w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Camp Information
                </h2>
                <div className="flex lg:flex-row flex-col justify-center lg:items-stretch items-center lg:w-full gap-6">
                    <Card className="flex-1">
                        <CardHeader>
                            <CardTitle className="p-2 bg-primary text-primary-foreground flex flex-col justify-center items-center rounded-md text-lg">
                                <h2>$175/Week - Camps</h2>
                                <h2>$45/Day - PD Day</h2>
                            </CardTitle>
                            <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                                <p className="text-xs text-center">
                                    To preserve the quality of our program,
                                    summer camp enrollment is limited to a
                                    maximum of 13 children.
                                </p>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col gap-6 text-sm">
                                <li>
                                    <span className="font-semibold">
                                        Enrollment Options
                                    </span>
                                    <ul className="font-normal pl-6">
                                        <li>PA Day Camps</li>
                                        <li>March Break Camp</li>
                                        <li>Summer Camp</li>
                                        <li>Winter Break Camp</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Ages</span>
                                    <ul className="font-normal pl-6">
                                        <li>4 - 13 Years old</li>
                                        <li>Siblings Discount Available</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Hours</span>
                                    <ul className="font-normal pl-6">
                                        <li>Monday - Friday</li>
                                        <li>9:00AM - 5:00PM</li>
                                        <li>
                                            Flexible 2, 3 or 5 day enrollment
                                        </li>
                                    </ul>
                                </li>
                                <li className="font-semibold">
                                    <span className="font-semibold">Meals</span>
                                    <ul className="font-normal pl-6">
                                        <li>
                                            Children bring nut-free lunch and
                                            snacks every day
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
                                                Follow us on Instagram to see
                                                weekly activities
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-xs">
                                    Closed: Civic Holiday, Christmas Eve,
                                    Christmas Day, New Year's Eve, and New
                                    Year's Day
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Image
                        src="/media/KK/20250711_111518.jpg"
                        alt="Child Playing With Dinosaurs at Kidz Korner Milton, Ontario"
                        w="w-md"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-9/10 lg:w-3/4 border-y lg:py-12 py-8 lg:my-12 my-8">
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

            <div className="flex lg:flex-row flex-col justify-between items-center w-9/10 lg:w-3/4 gap-6">
                <Image
                    src="/media/KK/IMG-20250722-WA0017.jpg"
                    alt="Child Tye Dyeing Shirt at Kidz Korner Milton, Ontario"
                />
                <Image
                    src="/media/KK/20260108_111322(0).jpg"
                    alt="Children Kneading Dough at Kidz Korner Milton, Ontario"
                />
                <Image
                    src="/media/KK/20250722_100154.jpg"
                    alt="Child Painting at Kidz Korner Milton, Ontario"
                />
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Love Our Camps
                </h2>
                <div className="flex lg:flex-row flex-col p-2 gap-2">
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <Palette className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            Creative Art Projects
                        </p>
                        <p className="flex items-start gap-3">
                            <ChefHat className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            Hands-on Cooking Classes
                        </p>
                        <p className="flex items-start gap-3">
                            <TestTube2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            Weekly STEM Activities
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <Shapes className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            Active Indoor Play
                        </p>
                        <p className="flex items-start gap-3">
                            <Users className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            Small Group Environment
                        </p>
                        <p className="flex items-start gap-3">
                            <Heart className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            Caring Registered Educators
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between items-center w-9/10 lg:w-3/4 gap-6">
                <Image
                    src="/media/KK/20251106_102726.jpg"
                    alt="Child Cutting Tomatos at Kidz Korner Milton, Ontario"
                />
                <Image
                    src="/media/KK/20250710_144411.jpg"
                    alt="Children Painting at Kidz Korner Milton, Ontario"
                />
                <Image
                    src="/media/KK/20250808_135154.jpg"
                    alt="Child Playing With Sensory Toy at Kidz Korner Milton, Ontario"
                />
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <h2 className="text-xl font-bold text-center pb-4">FAQ</h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center w-9/10 lg:w-3/4 gap-6">
                <p className="flex text-center">
                    Contact us today to lock in your spot!
                </p>
                <CampForm />
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>Kids Camps in Milton, Ontario | Kidz Korner</title>
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
            <meta property="og:type" content="website" />
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
};

export default Camp;
