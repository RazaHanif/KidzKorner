import ContactForm from "@/components/ContactForm";
import ContactUsTable from "@/components/ContactUsTable";
import HoursTimeTable from "@/components/HoursTimeTable";
import Image from '@/components/Image'
import { breadcrumbSchema, organizationSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

/* 
Organization
BreadcrumbList
*/

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

            <div className="flex justify-center items-center w-3/4 rounded-lg border-2 shadow-lg overflow-hidden mb-4 lg:py-16 py-8">
                <iframe
                    title="Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    alt="Kidz Korner Google Maps PlugIn"
                    tabIndex="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API}&q=Kidz+Korner+Milton+Ontario`}
                    className="border-4 w-full h-[75vw] lg:h-[75vh]"
                />
            </div>
            
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <ContactForm/>
            </div>

            <StructData schema={organizationSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                About Our Childcare Centre in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="keywords" content="about Kidz Korner, childcare Milton, licensed daycare Milton, daycare center Milton, early learning Milton" />
            <meta name="description" content="Learn more about Kidz Korner, a licensed childcare and daycare in Milton, Ontario. Dedicated to providing safe, nurturing, and fun learning experiences." />
        </div>
    );
}
  
export default About;