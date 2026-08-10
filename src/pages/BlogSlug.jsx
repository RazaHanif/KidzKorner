import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";

const BlogSlug = () => {
    const slug = []

    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "blog",
            url: "https://www.kidzkornermilton.com/blog"
        },
        {
            name: `${slug.title}`,
            url: `https://www.kidzkornermilton.com/blog/${slug.urlSlug}`
        },
    ];
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                {slug.title} | Kidz Korner 
            </title>
            <meta 
                name="description" 
                content="Join Kidz Korner's fun and educational kids' camps in Milton, Ontario. Summer and seasonal camps designed to spark curiosity and creativity." 
            />
        </div>
    );
}
  
export default BlogSlug;