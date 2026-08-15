import ContactForm from "@/components/forms/ContactForm";
import ContactUsTable from "@/components/ContactUsTable";
import HoursTimeTable from "@/components/HoursTimeTable";
import Image from "@/components/Image";
import {
    breadcrumbSchema,
    organizationSchema,
} from "../schema/structDataSchema";
import StructData from "../components/StructData";
import {
    BadgeCheck,
    HeartHandshake,
    MapPin,
    Palette,
    Shapes,
    Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/",
        },
        {
            name: "About Us",
            url: "https://www.kidzkornermilton.com/about",
        },
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    About Kidz Korner Childcare & Indoor Playground
                </h1>
                <p className="flex lg:flex-row flex-col justify-center items-center text-center lg:w-3/4 w-full">
                    Serving Milton families with licensed childcare, preschool
                    programs, indoor playground experiences, birthday parties,
                    camps and workshops.
                </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center lg:w-3/4 w-9/10 gap-6 border-y lg:py-12 py-8 lg:my-12 my-8">
                <div>
                    <ContactUsTable />
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/media/Stock/25.jpg"
                        alt="Child painting at Kidz Korner childcare centre in Milton Ontario"
                        w="w-lg"
                    />
                </div>

                <div>
                    <HoursTimeTable />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 lg:w-3/4 w-9/10">
                <h2 className="text-xl font-bold text-center">Who We Are</h2>
                <p className="flex lg:flex-row flex-col justify-center items-center text-center lg:w-3/4 w-full">
                    Established in 1995, Kidz Korner has proudly served Milton
                    families for over 30 years. Our centre was built on creating
                    a safe, caring, and engaging environment where children can
                    learn, play, and grow.
                </p>
                <p className="flex lg:flex-row flex-col justify-center items-center text-center lg:w-3/4 w-full">
                    With decades of childcare experience, our dedicated team
                    provides licensed childcare, indoor playground experiences,
                    camps and workshops designed to support children's
                    development while giving families peace of mind.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <div className="flex flex-col justify-center items-center gap-6 w-full">
                    <h2 className="text-xl font-bold text-center">
                        Visit Our Childcare Centre
                    </h2>
                    <p className="flex lg:flex-row flex-col justify-center items-center text-center">
                        Kidz Korner is conveniently located at 150 Nipissing
                        Road in Milton, making it easy for families across
                        Milton to access quality licensed childcare, preschool,
                        camps, birthday parties and our indoor playground.
                    </p>
                </div>
                <div className="flex justify-center w-full items-center rounded-lg border-2 shadow-lg overflow-hidden">
                    <iframe
                        title="Kidz Korner Milton Location"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        className="w-full h-[75vw] lg:h-[75vh]"
                        src="https://www.google.com/maps?q=Kidz+Korner+Milton&output=embed"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 lg:w-3/4 w-9/10">
                <h2 className="w-full flex justify-center items-center font-bold text-xl flex-1">
                    Why Families Choose Kidz Korner
                </h2>

                <Card>
                    <CardContent className="flex md:flex-row flex-col gap-2">
                        <div className="flex flex-col flex-1 gap-2">
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <BadgeCheck />
                                    <h2 className="font-bold">
                                        Licensed Ontario Childcare
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <HeartHandshake />
                                    <h2 className="font-bold">
                                        Caring Educators
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <Shapes />
                                    <h2 className="font-bold">
                                        Indoor Playground
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 gap-2">
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <Users />
                                    <h2 className="font-bold">
                                        Small Class Sizes
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <Palette />
                                    <h2 className="font-bold">
                                        Flexible Programs
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <MapPin />
                                    <h2 className="font-bold">
                                        Convenient Milton Location
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div
                className="flex flex-col justify-center items-center w-9/10 lg:w-3/4 gap-2 border-t lg:pt-12 pt-8 lg:mt-12 mt-8"
                id="contact-form"
            >
                <h2 className="w-full flex justify-center items-center font-bold text-xl flex-1 mb-4">
                    Book a Tour or Ask a Question
                </h2>
                <p className="flex text-center lg:w-3/4">
                    Whether you're looking for daycare, preschool, camps, or birthday parties, our team is happy to answer your questions. 
                    Complete the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
            </div>

            <StructData schema={organizationSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                About Our Childcare Centre in Milton, Ontario | Kidz Korner
            </title>
            <meta
                name="description"
                content="Learn more about Kidz Korner, a licensed childcare and daycare in Milton, Ontario. Dedicated to providing safe, nurturing, and fun learning experiences."
            />
            <meta
                property="og:title"
                content="About Our Childcare Centre in Milton, Ontario | Kidz Korner "
            />
            <meta
                property="og:description"
                content="Learn more about Kidz Korner, a licensed childcare and daycare in Milton, Ontario. Dedicated to providing safe, nurturing, and fun learning experiences."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/about"
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

export default About;
