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
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Kidz Korner Milton Blog
                </h1>
                <p className="text-xl font-bold text-center w-3/4">
                    Drop-in fun for toddlers, young children, and families!
                </p>
            </div>

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
                content=""
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/blog"
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