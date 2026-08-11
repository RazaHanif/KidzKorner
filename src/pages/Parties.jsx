import PartyForm from "@/components/PartyForm";
import PartyCard from "@/components/PartyCard";
import Image from "@/components/Image";
import {
    breadcrumbSchema,
    faqSchema,
    localBusinessSchema,
} from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { CircleCheck, PartyPopper } from "lucide-react";
import PartyAccordion from "../components/FAQAccordion";
import FAQAccordion from "../components/FAQAccordion";

const Parties = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/",
        },
        {
            name: "Parties",
            url: "https://www.kidzkornermilton.com/birthday-parties",
        },
    ];

    const faq = [
        {
            q: "Can we bring our own food?",
            a: "Yes. Families are welcome to bring their own food at no additional cost. We also provide access to a private kitchen space. Please note that our facility follows a strict nut-free policy."
        },
        {
            q: "Is the playground private?",
            a: "Yes. During your booking, the indoor playground is reserved exclusively for your party and invited guests."
        },
        {
            q: "How many guests can attend?",
            a: "Our party packages accommodate up to 50 guests."
        },
        {
            q: "Can we decorate?",
            a: "Absolutely! Your're welcome to bring your own decorations to personalize the space."
        },
        {
            q: "Do you provide food?",
            a: "Our Platinum and VIP packages include pizza, while all packages allow you to bring your own food."
        },
        {
            q: "Can we stay longer?",
            a: "Additional party time may be available for $50 per hour, subject to availability."
        },
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Kids Birthday Parties in Milton
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <p className="flex flex-col justify-center items-center lg:w-3/4 text-center">
                    Celebrate your child's birthday with a private indoor party
                    at Kidz Korner in Milton, Ontario. Our birthday party
                    packages include exclusive access to our indoor playground,
                    giving children plenty of room to climb, explore, and play
                    while parents relax. Whether you're planning a small family
                    gathering or a larger celebration, our flexible packages
                    make it easy to host a stress-free and memorable birthday
                    party.
                </p>
            </div>

            <div className="flex flex-1 flex-col lg:flex-row justify-center gap-6 lg:w-3/4 w-9/10 border-t lg:pt-12 pt-8 lg:mt-12 mt-8">
                <PartyCard
                    title={"Tiny Tornado Package"}
                    price={"395"}
                    desc={
                        "Enjoy exclusive venue access and full use of our indoor play space for your guests!"
                    }
                    bullet={[
                        <li key={1}>
                            <span className="font-semibold">3.5</span> Hours of
                            Private Access
                        </li>,
                        <li key={2}>
                            Complimentary Tea & Coffee Station for Adults
                        </li>,
                        <li key={3}>
                            Bring your own food at no additional cost and use
                            the private kitchen space
                            <div className="font-semibold text-xs">
                                Strict Nut-Free Policy for children's safety
                            </div>
                        </li>,
                        <li key={4}>
                            Bring your own decorations to transform the space
                        </li>,
                        <li key={5}>Bring up to 50 guests</li>,
                    ]}
                />

                <PartyCard
                    title={"Platinum Play Package"}
                    price={"550"}
                    desc={
                        "Elevate your experience with extended time and food inclusions!"
                    }
                    bullet={[
                        <div key={1} className="font-semibold text-xs">
                            Includes everything in the Tiny Tornado Package plus
                        </div>,
                        <li key={2}>
                            <span className="font-semibold">4.5</span> Hours of
                            Private Access
                        </li>,
                        <li key={3}>2 X-Large Cheese Pizzas</li>,
                    ]}
                />

                <PartyCard
                    title={"VIP Package"}
                    price={"750"}
                    desc={
                        "The ultimate private party package with extended time, decor upgrades and interactive party features!"
                    }
                    bullet={[
                        <div key={1} className="font-semibold text-xs">
                            Includes everything in the Tiny Tornado Package &
                            the Platinum Play Package plus
                        </div>,
                        <li key={2}>
                            <span className="font-semibold">5.5</span> Hours of
                            Private Access
                        </li>,
                        <li key={3}>
                            Exclusive Digital Photobooth Experience
                        </li>,
                        <li key={4}>Kidz Activity Table</li>,
                    ]}
                />
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 m-0 text-center">
                <div>
                    <p>Full payment required at time of booking.</p>
                    <p>
                        Additional Time: Extra party time available at $50 per
                        hour.
                    </p>
                    <p>Prior approval of all 3rd party vendors is required.</p>
                    <p className="text-sm font-semibold">
                        Prices are subject to change without notice
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Love Our Birthday Parties
                </h2>
                <div className="flex lg:flex-row flex-col p-2 gap-2">
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Private Venue Rental
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Indoor Playground exclusive to your guests
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Bring your own food
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Private Kitchen Available
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Decorations Welcome
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Up to 50 guests
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Tea & Coffee Station
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Safe, clean, nut-free environment
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Convenient Milton location
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>Setup/Take Down Time Included
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-8 w-full mb-8">
                    <Image
                        src="/media/KK/IMG-20250302-WA0001.jpg"
                        alt="Girls Birthday Setup at Kidz Korner Milton, Ontario"
                    />
                    <Image
                        src="/media/KK/IMG-20250714-WA0026.jpg"
                        alt="Children enjoying a private birthday party at Kidz Korner indoor playground in Milton"
                    />
                    <Image
                        src="/media/KK/IMG-20250519-WA0002.jpg"
                        alt="Birthday cake celebration at Kidz Korner birthday party in Milton"
                    />
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold text-center">
                        Our birthday parties are perfect for:
                    </h2>
                    <div className="flex lg:flex-row flex-col p-2 gap-2">
                        <div className="flex flex-col gap-2 w-full flex-1">
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> 1st Birthdays
                            </p>
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> 2nd Birthdays
                            </p>
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> Preschool Birthdays
                            </p>
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> Kindergarten Birthdays
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-full flex-1">
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> School-aged Children
                            </p>
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> Family Celebrations
                            </p>
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> Winter Birthday Parties
                            </p>
                            <p className="flex items-start gap-3">
                                <PartyPopper className="h-6 w-6 shrink-0 text-primary"/> Rainy Day Birthday Parties
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <h2 className="text-xl font-bold text-center pb-4">
                    FAQ
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 border-t lg:pt-12 pt-8 lg:mt-12 mt-8">
                <p className="flex text-center">
                    Ready to Party? Contact us today to secure your date! 
                </p>
                <PartyForm />
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                Kids Birthday Parties in Milton, Ontario | Kidz Korner
            </title>
            <meta
                name="description"
                content="Host an unforgettable kids birthday party at Kidz Korner in Milton, Ontario. Enjoy private access to our indoor playground, flexible party packages, and a fun, stress-free celebration for up to 50 guests."
            />
            <meta 
                property="og:title"
                content="Kids Birthday Parties in Milton, Ontario | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Host an unforgettable kids birthday party at Kidz Korner in Milton, Ontario. Enjoy private access to our indoor playground, flexible party packages, and a fun, stress-free celebration for up to 50 guests."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/birthday-parties"
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

export default Parties;
