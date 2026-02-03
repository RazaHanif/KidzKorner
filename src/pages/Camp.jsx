import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CampForm from "@/components/CampForm";

const Camp = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2 text-justify">
            <div className="flex md:flex-row flex-col justify-evenly items-center w-3/4">
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
                <Card className="">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            $35/Day
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">Limited Spots Available - only 13 children per group</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2 list-disc pl-6">
                            <li key={1}>
                                Full Time & Part Time Options
                            </li>
                            <li key={2}>
                                Small class sizes for more 1 on 1 support
                            </li>
                            <li key={3}>
                                Siblings discounts available
                            </li>
                            <li key={4}>
                                All materials included
                            </li>
                        </ul>
        
                    </CardContent>
                </Card>
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
                                <Card className="">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Art Class
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg hidden">
                            <span className="text-xs text-center">
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2 list-disc pl-6">
                            <li key={1}>
                                Campers explore a wide range of mediums and techniques
                            </li>
                            <li key={2}>
                                Painting and Drawing
                            </li>
                            <li key={3}>
                                Printmaking
                            </li>
                            <li key={4}>
                                Mixed Media and Collage
                            </li>
                            <li key={5}>
                                End of term art gallery
                            </li>
                        </ul>
        
                    </CardContent>
                </Card>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
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
                <CampForm/>
            </div>
        </div>
    );
}
  
export default Camp;