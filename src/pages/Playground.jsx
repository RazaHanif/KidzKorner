import PlaygroundAccordion from "../components/playgroundAccordion";

const Playground = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <div className="text-3xl font-bold mb-4">
                    Drop-In Fun!
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <img 
                        src='/K_K_20.jpg'
                        alt='Play Structure'
                        className="w-xs rounded-lg border-2 shadow-lg"
                    />
                    <div>
                        Looking for a fun and safe indoor space for your child to play?<br/>
                        Our indoor playground is open for drop-in play from 3 pm to 6 pm Monday to Friday
                    </div>
                </div>
                <div className="text-xl font-bold self-center">
                    What We Offer
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <div>
                        <div>
                            A varity of skill-building play areas for your child to explore and enjoy.
                        </div>
                        <div>
                            A perfect escape from the heat, cold, rain or snow.
                        </div>
                        <div>
                            Convenient facilities with two washrooms, diaper changing stations, and step stools.
                        </div>
                    </div>
                    <img 
                        src='/K_K_30.jpg'
                        alt='Kids on climbing structure'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                    />
                </div>

            </div>
            <div className="flex flex-col justify-center items-center w-3/4 mt-4">
                <PlaygroundAccordion />
            </div>
        </div>
    );
}
  
export default Playground;