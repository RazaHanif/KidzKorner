import StructData from "../components/StructData";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";

const ToddlerDaycare = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Daycare",
            url: "https://www.kidzkornermilton.com/daycare"
        },
        {
            name: "Toddler Daycare",
            url: "https://www.kidzkornermilton.com/toddler-daycare"
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full text-justify">


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Toddler Daycare | Toddler | Kidz Korner
            </title>
            <meta name="description" content="Kidz Korner is a licensed daycare in Milton, Ontario offering toddler, preschool, and before & after school programs with experienced RECE educators, play-based learning, and a safe indoor environment." />
        </div>
    );
}
  
export default ToddlerDaycare;