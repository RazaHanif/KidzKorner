import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CampForm from "@/components/CampForm";
import CampTimeTable from "@/components/CampTimeTable";

const Camp = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2 text-justify">
            <div className="flex flex-col justify-evenly items-center w-3/4 mb-4">
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

            <div className="flex md:flex-row flex-col justify-center w-3/4 gap-2">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            $175/Week
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">
                                Limited Spots Available - only 13 children per group
                            </span>
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
                <img 
                    src='/K_K_11.jpg'
                    alt='Kids Playing with Dinos'
                    className="w-sm rounded-lg border-2 shadow-lg"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <div className="flex flex-col justify-center items-start">
                        <CampTimeTable />
                    </div>

                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-center items-center w-3/4 gap-2">
                <Card className="flex-1">
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

                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Cooking Class
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg hidden">
                            <span className="text-xs text-center">
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2 list-disc pl-6">
                            <li key={1}>
                                Each week features fun, age-appropriate kitchen adventures
                            </li>
                            <li key={2}>
                                Hands-on cooking and baking
                            </li>
                            <li key={3}>
                                International cuisines
                            </li>
                            <li key={4}>
                                Kitchen safety & teamwork
                            </li>

                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <img 
                    src='/K_K_23.jpg'
                    alt='Kids doing activity'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                    loading="lazy"
                />
                <img 
                    src='/K_K_32.jpg'
                    alt='Kids doing tyedye'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-2">
                <CampForm/>
            </div>
        </div>
    );
}
  
export default Camp;