import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { useParams } from "react-router-dom";
import blogs from "../../api/blogSlugs";


const BlogSlug = () => {
    const { slug } = useParams()
    
    const blog = blogs[slug]

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
            name: `${blog.title}`,
            url: `https://www.kidzkornermilton.com/blog/${blog.slug}`
        },
    ];

    const metaTitle = `${blog.title} | Kidz Korner`

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <h1>
                {blog.title}
            </h1>
            <div>
                {blog.description}
            </div>
            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                {metaTitle}
            </title>
            <meta 
                name="description" 
                content={slug.de} 
            />
            <meta 
                property="og:title"
                content={metaTitle}
            />
            <meta
                property="og:description"
                content={slug.desc}
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content={`https://www.kidzkornermilton.com/blog/${slug.urlSlug}`}
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
  
export default BlogSlug;