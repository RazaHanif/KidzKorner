import PlaygroundAccordion from "@/components/PlaygroundAccordion";
import Image from "../components/Image";

const Playground = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4 text-justify">
            <div className="flex flex-col justify-center items-center w-full font-serif">
                <div className="text-3xl font-bold">
                    Drop-In Fun!
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    Looking for a fun and safe indoor space for your child to play? Our indoor playground is open for drop-in play from Monday to Friday. It includes a variety of skill-building play areas for your child to explore and enjoy. The space is infant and toddler friendly. Come on in to escape from the heat, cold, rain or snow.
                </div>
            </div>

            <div 
                className="flex flex-col justify-center items-center w-3/4 mt-4"
            >
                <PlaygroundAccordion />
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center gap-4 w-3/4">
                <Image src='/' alt='1' />
                <Image src='/' alt='2' />
                <Image src='/' alt='3' />
            </div>
        </div>
    );
}
  
export default Playground;