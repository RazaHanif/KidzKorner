import WorkshopForm from "@/components/WorkshopFrom"
import WorkshopCarousel from "@/components/WorkshopCarousel";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

/* 
LocalBusiness
Service
BreadcrumbList
*/

const Workshops = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Workshops",
            url: "https://www.kidzkornermilton.com/workshop"
        }
    ];
    
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-evenly items-center w-3/4">
                <h1 className="text-3xl font-bold mb-4">
                    Workshops
                </h1>

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
{/* 
            <div className="flex justify-center items-center w-full mb-4">
                <WorkshopCarousel />
            </div>
 */}

{/* 
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <WorkshopForm/>
            </div>
 */}

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Kids Workshops & Programs in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="keywords" content="kids workshops Milton, children programs Milton, early learning Milton, educational activities Milton, childcare programs Milton" />
            <meta name="description" content="Kidz Korner offers engaging workshops and programs in Milton, Ontario. Early learning, arts, and skill-building activities for children." />
        </div>
    );
}
  
export default Workshops;