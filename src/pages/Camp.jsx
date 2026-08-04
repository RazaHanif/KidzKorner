import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CampForm from "@/components/CampForm";
import Image from "@/components/Image";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

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

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Choose Your Camp
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col lg:flex-row flex-1 lg:w-3/4 w-full gap-4">
                        <NavLink 
                            to="/daycare/toddler-daycare" 
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
                                    <Button className="cursor-pointer">
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
                                    <Button className="cursor-pointer">
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
                                    <Button className="cursor-pointer">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>

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

            <div className="flex flex-col justify-center w-3/4 lg:w-1/3 gap-4 lg:py-16 py-8">
                <Card>
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