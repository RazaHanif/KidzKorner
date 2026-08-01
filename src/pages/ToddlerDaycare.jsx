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
            <meta name="description" content="" />
        </div>
    );
}
  
export default ToddlerDaycare;