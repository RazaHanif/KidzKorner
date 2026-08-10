import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

const Blog = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Blog",
            url: "https://www.kidzkornermilton.com/blog"
        },
    ];
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Kidz Korner Blog | Childcare & Kids Activities in Milton, Ontario
            </title>
            <meta 
                name="description" 
                content="" 
            />
            <meta 
                property="og:title"
                content="Kidz Korner Blog | Childcare & Kids Activities in Milton, Ontario"
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
                content="https://www.kidzkornermilton.com/"
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
  
export default Blog;