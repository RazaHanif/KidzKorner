import PlaygroundAccordion from "@/components/PlaygroundAccordion";
import Image from "@/components/Image";

const Playground = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4 text-justify">
            <div className="flex flex-col justify-center items-center w-full font-serif">
                <h1 className="text-3xl font-bold">
                    Drop-In Fun!
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

            <title>
                Indoor Playground in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="keywords" content="indoor playground Milton, kids play area Milton, children's indoor play Milton, daycare playground Milton" />
            <meta name="description" content="Discover Kidz Korner's indoor playground in Milton, Ontario. Safe, engaging, and fun space for children to play and socialize." />
        </div>
    );
}
  
export default Playground;