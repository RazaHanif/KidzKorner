import StructData from "../components/StructData";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";

const BeforeAfterDaycare = () => {
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
            name: "Before & After School Daycare",
            url: "https://www.kidzkornermilton.com/before-after-school-care"
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full text-justify">


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Before & After School Daycare | Before & After School | Kidz Korner
            </title>
            <meta name="description" content="" />
        </div>
    );
}
  
export default BeforeAfterDaycare;