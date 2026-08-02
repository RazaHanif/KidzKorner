import PlaygroundAccordion from "@/components/PlaygroundAccordion";
import Image from "@/components/Image";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

const Playground = () => {
        const breadCrumb = [
            {
                name: "Home",
                url: "https://www.kidzkornermilton.com/"
            },
            {
                name: "Playground",
                url: "https://www.kidzkornermilton.com/playground"
            },
        ]; 


    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Indoor Playground in Milton, Ontario
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <p className="flex lg:flex-row flex-col justify-center items-center lg:text-justify text-center">
                    Looking for a fun and safe indoor space for your child to play? Our indoor playground is open for drop-in play from Monday to Friday. It includes a variety of skill-building play areas for your child to explore and enjoy. The space is infant and toddler friendly. Come on in to escape from the heat, cold, rain or snow.
                </p>
            </div>

            <div 
                className="flex flex-col justify-center items-center w-3/4 mt-4"
            >
                <PlaygroundAccordion />
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center gap-4 w-3/4">
                <Image src='/20250930_142748.jpg' alt='Kidz Korner Milton, Ontario Indoor Playground ' w="w-md"/>
                <Image src='/20250930_142442.jpg' alt='Kidz Korner Milton, Ontario Climbing Structure ' />
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Indoor Playground in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="keywords" content="indoor playground Milton, kids play area Milton, children's indoor play Milton, daycare playground Milton" />
            <meta name="description" content="Discover Kidz Korner's indoor playground in Milton, Ontario. Safe, engaging, and fun space for children to play and socialize." />
        </div>
    );
}
  
export default Playground;