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
            q: "What ages does Kidz Korner summer camp serve?",
            a: "Kidz Korner summer camp is available for the same age range as our regular camp program. Families can contact us to confirm whether their child is eligible for the current summer program."
        },
        {
            q: "What are the hours for summer camp?",
            a: "Summer camp runs Monday to Friday from 9:00 a.m. to 3:00 p.m. Before- and after-camp care may also be available depending on space. Families interested in extended hours can contact us to ask about availability."
        },
        {
            q: "How much does summer camp cost?",
            a: "Summer camp is $175 per week per child. The weekly price includes all regular camp activities and programming, so there are no additional activity fees for the scheduled camp program."
        },
        {
            q: "What activities are offered at summer camp?",
            a: "Campers participate in a variety of activities throughout the summer, including arts and crafts, games, sports, creative activities, free play, indoor playground time, and themed events. Activities vary throughout the summer to keep the program fun and engaging."
        },
        {
            q: "Does Kidz Korner offer indoor summer camp activities?",
            a: "Yes. Campers have access to Kidz Korner's indoor playground as part of the summer camp program. Indoor activities give children plenty of opportunities for active play and entertainment throughout the day."
        },
        {
            q: "How many children are in summer camp?",
            a: "Campers participate in a variety of activities throughout the summer, including arts and crafts, games, sports, creative activities, free play, indoor playground time, and themed events. Activities vary throughout the summer to keep the program fun and engaging."
        },
        {
            q: "What activities are offered at summer camp?",
            a: "Campers participate in a variety of activities throughout the summer, including arts and crafts, games, sports, creative activities, free play, indoor playground time, and themed events. Activities vary throughout the summer to keep the program fun and engaging."
        },
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Summer Camp in Milton
                </h1>
                <div className="flex flex-col justify-center items-center text-center gap-4 pt-4">
                    <p className="w-3/4">
                        Keep your child active, engaged, and having fun throughout the summer at Kidz Korner. Our summer camp in Milton offers themed activities, arts and crafts, games, indoor playground time, and plenty of opportunities for creative and active play in a welcoming environment.
                    </p>
                    <a 
                        href="/about#contact-form" 
                        className="hover:scale-105 ease-in-out duration-300 flex-1 flex justify-center"
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
                <div className="flex flex-col justify-center items-center w-full gap-4">
                    <div className="flex flex-col lg:flex-row flex-1 w-full gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <Sun className="text-primary" />
                                    Themed Events & Experiences
                                </CardTitle>
                                <CardDescription>
                                    Our summer is filled with fun themes, special activities, and events that give children something new and exciting to look forward to each week.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <Sun className="text-primary" />
                                    Indoor Playground Fun
                                </CardTitle>
                                <CardDescription>
                                    Campers have access to our indoor playground, giving them plenty of opportunities to climb, play, explore, and stay active.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <Sun className="text-primary" />
                                    A Mix of Activities
                                </CardTitle>
                                <CardDescription>
                                    From arts and crafts to games, sports, creative activities, and free play, each day offers a variety of ways for children to stay engaged.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <div className="flex flex-col lg:flex-row flex-1 w-full gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <Sun className="text-primary" />
                                    Small Group Setting
                                </CardTitle>
                                <CardDescription>
                                    With a maximum of 13 campers, we keep our summer camp intentionally small so children can enjoy a more comfortable and engaging group experience.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <Sun className="text-primary" />
                                    Full Day of Fun
                                </CardTitle>
                                <CardDescription>
                                    Camp runs from 9:00 a.m. to 3:00 p.m., giving children a full day of activities, play, and social time during their summer break.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <Sun className="text-primary" />
                                    ??
                                </CardTitle>
                                <CardDescription>
                                    ??
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    What to Expect at Kidz Korner Summer Camp
                </h2>
                <div className="flex flex-col gap-2 w-full">
                    <p className="">
                       Summer break should give children the chance to step away from the classroom, try new things, and simply enjoy being kids. At Kidz Korner, our summer camp provides a balance of structured activities, active play, creativity, and time to socialize with friends.
                    </p>
                    <p className="">
                        Each day includes a variety of activities designed to keep campers engaged throughout the day. Children can take part in arts and crafts, games, sports, creative activities, and themed events, while also having opportunities for free play and exploration. Our indoor playground gives campers another way to stay active and have fun, especially when they need a change of pace.
                    </p>
                    <p className="">
                        We also put a lot of thought into our themed events throughout the summer. These activities give campers something different to look forward to and help make each week feel special rather than repetitive.
                    </p>
                    <p className="">
                        Summer camp runs from 9:00 a.m. to 3:00 p.m., from the end of the school year until the start of the next one, excluding the first and last week of summer. Our summer program is limited to 13 children, allowing us to maintain a smaller group environment while children participate in activities and spend time together.
                    </p>
                    <p className="">
                        The weekly cost is <b>$175 per child</b>, and all regular summer camp activities are included. Before- and after-camp care may also be available based on space, so families interested in extended hours can contact us to ask about availability.
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Summer Camp Highlights
                </h2>
                <Card>
                    <CardContent>
                        <div className="flex lg:flex-row flex-col justify-evenly text-center">
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Themed events and experience throughout the summer
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Arts and crafts, games, sports, and creative activities
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Indoor playground access for active play and exploration
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                A maximum of 13 campers for a smaller group setting
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                9:00 AM to 3:00 PM camp hours, Monday to Friday
                            </p>
                            <p className="p-4">
                                $175 per week
                            </p>
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