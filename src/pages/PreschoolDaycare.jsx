import StructData from "../components/StructData";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";

const PreschoolDaycare = () => {
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
            name: "Preschool Daycare",
            url: "https://www.kidzkornermilton.com/Preschool-daycare"
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full text-justify">


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Preschool Daycare | Preschool | Kidz Korner
            </title>
            <meta name="description" content="" />
        </div>
    );
}
  
export default PreschoolDaycare;