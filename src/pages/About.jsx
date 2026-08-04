import ContactForm from "@/components/ContactForm";
import ContactUsTable from "@/components/ContactUsTable";
import HoursTimeTable from "@/components/HoursTimeTable";
import Image from '@/components/Image'
import { breadcrumbSchema, organizationSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { BadgeCheck, HeartHandshake, MapPin, Palette, Shapes, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const About = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "About Us",
            url: "https://www.kidzkornermilton.com/about"
        },
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    About Kidz Korner Childcare & Indoor Playground
                </h1>
                <p className="flex lg:flex-row flex-col justify-center items-center lg:text-justify text-center">
                    Serving Milton families with licensed childcare, preschool programs, indoor playground fun, birthday parties, camp and workshops.
                </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-center w-3/4 m-4 gap-4">
                <div>
                    <ContactUsTable />
                </div>

                <div className="flex justify-center">
                    <Image 
                        src='IMG-20260208-WA0002.jpg'
                        alt='Child Posing at Kidz Korner Milton, Ontario'
                        w={'w-sm'}
                    />
                </div>

                <div>
                    <HoursTimeTable />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center">
                    Who We Are
                </h2>
                <p className="flex lg:flex-row flex-col justify-center items-center lg:text-justify text-center">

                </p>            
            </div>

            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div>
                    <h2 className="text-xl font-bold text-center">
                        Visit Our Childcare Centre
                    </h2>
                    <p>
                        Kidz Korner is conveniently located at 150 Nipissing Road in Milton, making it easy for families across Milton to access quality licensed childcare, preschool, camps, birthday parties and our indoor playground.
                    </p>

                </div>
                <div className="flex justify-center items-center w-3/4 rounded-lg border-2 shadow-lg overflow-hidden">
                    <iframe
                        title="Google Maps"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        alt="Kidz Korner Google Maps PlugIn"
                        className="w-full h-[75vw] lg:h-[75vh]"
                        src="https://www.google.com/maps?q=Kidz+Korner+Milton&output=embed" 
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
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
            
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <h2 className="w-full flex justify-center items-center font-bold text-xl flex-1">
                    Book a Tour or Ask a Question
                </h2>
                <p className="flex text-center w-3/4">
                    Whether your're looking for daycare, preschool, camps, or birthday parties, our team is happy to answer your questions.
                    Complete the form below and we'll get back to you as soon as possible.
                </p> 
                <ContactForm/>
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
        </div>
    );
}
  
export default About;