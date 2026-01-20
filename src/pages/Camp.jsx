import CampForm from "@/components/CampForm";

const Camp = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <div className="text-3xl font-bold mb-4">
                    School Age Camp!
                </div>
                <div>
                    Our Camp offers hands-on experiences in both the visual arts and culinary arts, perfect for young artists and aspiring chefs alike.
                </div>
                <div>
                    Open to children ages 4+, grouped by age for activities
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <div className="self-center text-xl font-bold">
                    Camp Dates
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <img 
                        src='/K_K_11.jpg'
                        alt='Kids Playing with Dinos'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <div className="flex flex-col justify-center items-start">
                        <div>
                            Monday to Friday | 9:00 AM - 5:00 PM
                        </div>
                        <div>
                            Winter Break, March Break, PA Days, Summer Vacation
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <div className="self-center text-xl font-bold">
                    Arts Classes
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <div className="flex flex-col justify-center items-start">
                        <div>
                            Campers explore a wide range of mediums and techniques
                        </div>
                        <div>
                            Painting & Drawing<br/>
                            Printmaking<br/>
                            Mixed Media & Collage<br/>
                            End of term art gallery
                        </div>
                    </div>
                    <img 
                        src='/K_K_23.jpg'
                        alt='Kids doing activity'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <div className="self-center text-xl font-bold">
                    Cooking Classes
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <img 
                        src='/K_K_32.jpg'
                        alt='Kids doing tyedye'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <div className="flex flex-col justify-center items-start">
                        <div>
                            <div>
                                Each week features fun, age-appropriate kitchen adventures
                            </div>
                            <div>
                                Hands-on cooking and baking<br/>
                                International cuisines<br/>
                                Kitchen safety & teamwork
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <div className="self-center text-xl font-bold">
                    Cost: $35/Day
                </div>
                <div>
                    Limited Spots Available<br/>
                    Small Class Size for more 1 on 1 support<br/>
                    Sibling discounts available<br/>
                    All materials included
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <CampForm/>
            </div>
        </div>
    );
}
  
export default Camp;