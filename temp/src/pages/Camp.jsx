import CampForm from "../components/CampForm";

const Camp = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-3xl font-bold mb-4">
                    School Age Camp!
                </div>
                <div>
                    Our Camp offers hands-on experiences in both the visual arts and culinary arts, perfect for young artists and aspiring chefs alike.
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">

                <h5 className="self-center">
                    Camp Dates
                </h5>
                <p>
                    Winter Break, March Break, PA Days, Summer Vacation
                </p>
                <p>
                    Monday to Friday | 9:00 AM - 5:00 PM
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h5 className="self-center">
                    Arts Classes
                </h5>
                <p>
                    Campers explore a wide range of mediums and techniques
                </p>
                <p>
                    Painting & Drawing<br/>
                    Printmaking<br/>
                    Mixed Media & Collage<br/>
                    End of term art gallery
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h5 className="self-center">
                    Cooking Classes
                </h5>
                <p>
                    Each week features fun, age-appropriate kitchen adventures
                </p>
                <p>
                    Hands-on cooking and baking<br/>
                    International cuisines<br/>
                    Kitchen safety & teamwork
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h5 className="self-center">
                    Ages
                </h5>
                <p>
                    Open to children ages 4+, grouped by age for activities
                </p>

            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h5 className="self-center">
                    Cost: $35/Day
                </h5>
                <p>
                    Limited Spots Available<br/>
                    Small Class Size for more 1 on 1 support<br/>
                    Sibling discounts available<br/>
                    All materials included
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <CampForm/>
            </div>
        </div>
    );
}
  
export default Camp;