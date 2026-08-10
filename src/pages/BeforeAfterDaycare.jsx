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
            url: "https://www.kidzkornermilton.com/daycare/before-after-school-care"
        },
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Before & After School Care
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                Stuff
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Before & After School Care in Milton, Ontario | School-Age Child Care | Kidz Korner
            </title>
            <meta 
                name="description" 
                content="" 
            />
            
        </div>
    );
}
  
export default BeforeAfterDaycare;