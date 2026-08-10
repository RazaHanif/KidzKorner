import WorkshopForm from "@/components/WorkshopFrom"
import WorkshopCarousel from "@/components/WorkshopCarousel";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

const Workshops = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Workshops",
            url: "https://www.kidzkornermilton.com/workshops"
        }
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Licensed Daycare & Childcare in Milton
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                <p className="mb-4 lg:text-justify text-center">
                    At Kidz Korner, we offer fun and educational workshops designed for children to learn, play, and grow. Our programs focus on early learning, arts, creativity, and skill-building in a safe and nurturing environment.
                </p>

                <p className="hover:underline">
                    <a
                        href="https://www.instagram.com/kidz.kornermilton/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        For the latest updates on upcoming workshops, follow us on Instagram!
                    </a>
                </p>                
            </div>

            {/* Move away from advertising specific workshops/prices as they change too often */}
            {/* Just link to insta */}
            <div className="flex justify-center items-center w-full mb-4">
                <WorkshopCarousel />
            </div>

            {/* Why is this form title in a different format than the others? */}
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <WorkshopForm/>
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Kids Workshops in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="keywords" content="kids workshops Milton, children programs Milton, early learning Milton, educational activities Milton, childcare programs Milton" />
            <meta name="description" content="Kidz Korner offers engaging workshops and programs in Milton, Ontario. Early learning, arts, and skill-building activities for children." />
            <meta 
                property="og:title"
                content="Licensed Daycare in Milton, Ontario | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Looking for a licensed daycare in Milton? Kidz Korner provides trusted childcare, toddler daycare, preschool programs, before and after school care, and licensed camps for local families."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/"
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
  
export default Workshops;