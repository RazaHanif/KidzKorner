import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CampForm from "@/components/CampForm";
import Image from "@/components/Image";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

const FAQ = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Camp",
            url: "https://www.kidzkornermilton.com/camp"
        },
        {
            name: "March Break Camp",
            url: "https://www.kidzkornermilton.com/camp/march-camp"
        },
    ];
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            
            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Frequently Asked Questions | Kidz Korner 
            </title>
            <meta 
                name="description" 
                content="Join Kidz Korner's fun and educational kids' camps in Milton, Ontario. Summer and seasonal camps designed to spark curiosity and creativity." 
            />
        </div>
    );
}
  
export default FAQ;