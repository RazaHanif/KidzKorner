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

    const BlogCard = () => {
        
    }
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Kidz Korner Milton Blog
                </h1>
                <p className="text-xl font-bold text-center w-3/4">
                    Helpful tips, ideas, and resources for Milton parents and families.
                    Explore our latest articles on childcare, preschool, parenting, kids activities, camps, and more!
                </p>
            </div>

            <div 
                className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8"
            >
                <PlaygroundCard
                    title={"Drop-In Playground Pricing"}
                    price={"15 per Family"}
                    tax={false}
                    desc={
                        "Bring the whole family for one low price"
                    }
                />
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