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
            a: "Summer camp is currently limited to a maximum of 13 children. Keeping the program small allows campers to participate comfortably in activities and enjoy a more manageable group environment."
        },
        {
            q: "What should my child bring to summer camp?",
            a: "Families should send their child with the items they normally need for a full day at camp, including a packed lunch, snacks, a refillable water bottle, sunscreen, and a change of clothes when appropriate. We recommend labeling personal belongings with your child's name."
        },
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6 w-full lg:py-16 pb-8">


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                Summer Camp in Milton | Kidz Korner
            </title>
            <meta 
                name="description" 
                content="Fun-filled summer camp in Milton with themed activities, arts and crafts, games, indoor playground time, and more. $175/week. Learn more today." 
            />
            <meta 
                property="og:title"
                content="Kids Camps in Milton, Ontario | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Fun-filled summer camp in Milton with themed activities, arts and crafts, games, indoor playground time, and more. $175/week. Learn more today."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/camp/summer-camp"
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