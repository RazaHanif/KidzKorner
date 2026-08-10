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
            <meta 
                property="og:title"
                content="Before & After School Care in Milton, Ontario | School-Age Child Care | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Looking for a licensed daycare in Milton? Kidz Korner provides trusted childcare, toddler daycare, preschool programs, before and after school care, and licensed camps for local families."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/daycare/before-after-school-care"
            />
            <meta
                property="og:image"
                content="https://www.kidzkornermilton.com/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="Kidz Korner licensed daycare in Milton"
            />
        </div>
    );
}
  
export default BeforeAfterDaycare;