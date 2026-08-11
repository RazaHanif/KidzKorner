import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CampForm from "@/components/CampForm";
import Image from "@/components/Image";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { BadgeDollarSign, Blocks, PartyPopper, Sparkles, Sun, UsersRound } from "lucide-react";
import FAQAccordion from "../components/FAQAccordion";

const PADayCamp = () => {
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
            name: "PA Day Camp",
            url: "https://www.kidzkornermilton.com/camp/pa-day-camp"
        },
    ];

    
    const faq = [ 
        { 
            q: "What ages does Kidz Korner PA Day Camp serve?", 
            a: "Kidz Korner PA Day Camp is available for the same age range as our regular camp program. Families can contact us to confirm whether their child is eligible for the current PA Day program." 
        }, 
        { 
            q: "What are the hours for PA Day Camp?", 
            a: "PA Day Camp runs from 9:00 a.m. to 3:00 p.m. Before- and after-camp care may also be available depending on space. Families interested in extended hours can contact us to ask about availability." 
        }, 
        { 
            q: "How much does PA Day Camp cost?", 
            a: "PA Day Camp is $45 per child per day. The daily price includes the regular camp activities and programming offered throughout the day." 
        }, 
        { 
            q: "What activities are offered at PA Day Camp?", 
            a: "Children participate in a variety of activities throughout the day, including arts and crafts, games, sports, creative activities, free play, indoor playground time, and other fun camp activities." 
        }, 
        { 
            q: "Does PA Day Camp include indoor playground time?", 
            a: "Yes. Children have access to Kidz Korner's indoor playground as part of the PA Day Camp program. Indoor play gives children plenty of opportunities to stay active and have fun throughout the day." 
        }, 
        { 
            q: "How many children are in PA Day Camp?", 
            a: "PA Day Camp is currently limited to a maximum of 13 children. Keeping the program small allows children to participate comfortably in activities and enjoy a more manageable group environment." 
        }, 
        { 
            q: "What should my child bring to PA Day Camp?", 
            a: "Children should bring a nut-free packed lunch, snacks, a reusable water bottle, comfortable clothing, indoor shoes, and any personal items they may need throughout the day. We recommend labeling personal belongings with your child's name." 
        }, 
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    PA Day Camp in Milton
                </h1>
                <div className="flex flex-col justify-center items-center text-center gap-6 pt-4">
                    <p className="lg:w-3/4 w-9/10">
                        School may be closed, but your child's day can still be full of fun at Kidz Korner. Our PA Day Camp in Milton gives children a fun and active day filled with games, arts and crafts, indoor playground time, creative activities, and plenty of opportunities to play and socialize.
                    </p>
                    <a 
                        href="#pa-day-form" 
                        className="hover:scale-105 ease-in-out duration-300 flex-1 flex justify-center"
                    >
                        <Button className="cursor-pointer min-w-1/2">
                            Enquire About PA Day Camp
                        </Button>
                    </a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Choose Kidz Korner Summer Camp
                </h2>
                <div className="flex flex-col justify-center items-center w-full gap-6">
                    <div className="flex flex-col lg:flex-row flex-1 w-full gap-6">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <PartyPopper className="text-primary" />
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
                                    <Blocks className="text-primary" />
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
                                    <Sparkles className="text-primary" />
                                    A Mix of Activities
                                </CardTitle>
                                <CardDescription>
                                    From arts and crafts to games, sports, creative activities, and free play, each day offers a variety of ways for children to stay engaged.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <div className="flex flex-col lg:flex-row flex-1 w-full gap-6">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle className="flex flex-row items-center gap-2">
                                    <UsersRound className="text-primary" />
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
                                    <BadgeDollarSign className="text-primary" />
                                    Weekly Camp Pricing
                                </CardTitle>
                                <CardDescription>
                                    Summer camp is $175 per week, with all regular camp activities and programming included in the weekly price.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 lg:w-3/4 w-9/10">
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

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Summer Camp Highlights
                </h2>
                <Card>
                    <CardContent>
                        <div className="flex lg:flex-row flex-col justify-evenly text-center">
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Fun themed events all summer
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Arts and crafts, games, and sports
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Indoor playground access for active play
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Small groups of up to 13
                            </p>
                            <p className="lg:border-r-2 lg:border-b-0 border-b-2 p-4">
                                Monday to Friday, 9AM to 3PM
                            </p>
                            <p className="p-4">
                                $175 per week
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <h2 className="text-xl font-bold text-center pb-4">
                    FAQ
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div 
                className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 border-t lg:pt-12 pt-8 lg:mt-12 mt-8"
                id="pa-day-form"
            >
                <p className="flex text-center">
                    Interested in PA Day Camp?
                </p>

                {/* TODO:MAKE THIS FORM PA DAY SPECIFIC  */}
                {/* [CampForm type="pa"] */}
                <CampForm/>
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                PA Day Camp in Milton, Ontario | Kidz Korner 
            </title>
            <meta 
                name="description" 
                content="Join Kidz Korner's fun and educational kids' camps in Milton, Ontario. Summer and seasonal camps designed to spark curiosity and creativity." 
            />
            <meta 
                property="og:title"
                content="PA Day Camp in Milton, Ontario | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Join Kidz Korner's fun and educational kids' camps in Milton, Ontario. Summer and seasonal camps designed to spark curiosity and creativity." 
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/camp/pa-day-camp"
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
  
export default PADayCamp;