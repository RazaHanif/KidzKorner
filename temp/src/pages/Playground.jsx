import PlaygroundAccordion from "../components/playgroundAccordion";

const Playground = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div>
                <h3>
                    Drop-In Fun!
                </h3>
                <p>
                    Looking for a fun and safe indoor space for your child to play?<br/>
                    Our indoor playground is open for drop-in play from 3 pm to 6 pm Monday to Friday
                </p>
            </div>

            <div>
                <h5>
                    What We Offer:<br/>
                </h5>
                <p>
                    A varity of skill-building play areas for your child to explore and enjoy.
                </p>
                <p>
                    A perfect escape from the heat, cold, rain or snow.
                </p>
                <p>
                    Convenient facilities with two washrooms, diaper changing stations, and step stools.
                </p>

            </div>

            <div className="flex flex-col w-full">
                <PlaygroundAccordion />
            </div>
        </div>
    );
}
  
export default Playground;