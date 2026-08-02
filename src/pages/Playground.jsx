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
                <h2 className="text-xl font-bold text-center w-3/4">
                    Drop-in fun for toddlers, young children, and families!
                </h2>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y p-4">
                <p className="flex lg:flex-row flex-col justify-center items-center lg:text-justify text-center">
                    Looking for an indoor playground in Milton where your child can play, explore, and build new skills? 
                    Kidz Korner offers a safe and engaging indoor play space designed for toddlers and young children. 
                    Come on in to escape from the heat, cold, rain or snow.
                </p>
            </div>

            <div 
                className="flex flex-col justify-center items-center w-3/4 mt-4"
            >
                <PlaygroundAccordion />
            </div>

{/* Make this better */}
            <div className="border-y py-8">
    <h2>
        Drop-In Playground Pricing
    </h2>

    <p>
        Family Admission
    </p>

    <p>
        $15 per family
    </p>
</div>


<h2>
Explore Our Indoor Playground
</h2>
<p>

✓ Climbing structures
✓ Active play areas
✓ Toddler-friendly spaces
✓ Imaginative play opportunities
✓ Safe indoor fun year-round
</p>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-4 w-3/4">
                <Image src='/20250930_142748.jpg' alt="Children playing on the indoor playground at Kidz Korner in Milton Ontario" w="w-md"/>
                <Image src='/20250930_142442.jpg' alt="Indoor climbing structure at Kidz Korner playground in Milton Ontario" />
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