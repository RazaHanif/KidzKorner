import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import { Navigate, useParams } from "react-router-dom";
import blogs from "../../api/blogSlugs";

const BlogSlug = () => {
    const { slug } = useParams()
    
    const blog = blogs[slug]
    
    if (!blog) {
        return <Navigate to='/404' replace />
    }

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

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.description,
        image: [
            `https://www.kidzkornermilton.com${blog.img}`
        ],
        datePublished: blog.publishedAt,
        dateModified: blog.updatedAt ?? blog.publishedAt,
        author: {
            "@type": "Organization",
            name: "Kidz Korner",
            url: "https://www.kidzkornermilton.com/"
        },
        publisher: {
            "@type": "Organization",
            name: "Kidz Korner",
            logo: {
                "@type": "ImageObject",
                url: "https://www.kidzkornermilton.com/logo.png"
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.kidzkornermilton.com/blog/${blog.slug}`
        }
    };

    const metaTitle = `${blog.title} | Kidz Korner`

    return (
        <div className="flex flex-col flex-1 justify-center items-center w-full lg:py-16 pb-8">
            <div className="flex flex-col flex-1 justify-center items-center lg:w-3/4 w-9/10">
                <div className="flex flex-col items-center justify-center w-full h-[75vh] lg:h-[70vh] max-h-[750px] overflow-hidden">
                    <img
                        src={blog.image}
                        alt={blog.imageAlt}
                        className="w-full h-full object-cover border-2 rounded-xl"
                    />
                </div>
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-start lg:py-4 py-2 w-full">
                    {blog.title}
                </h1>
            </div>
            <article className="flex flex-2 flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:py-12 py-8 lg:my-12 my-8 text-start border">
                {blog.content.map((section, idx) => {
                    return (
                        <p 
                            key={idx}
                            className="w-full flex justify-start items-center" 
                        >
                            {section}
                        </p>
                    )
                })}
            </article>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={articleSchema} />

            <title>
                {metaTitle}
            </title>
            <meta 
                name="description" 
                content={blog.description} 
            />
            <meta 
                property="og:title"
                content={metaTitle}
            />
            <meta
                property="og:description"
                content={blog.description}
            />
            <meta 
                property="og:type"
                content="article"
            />
            <meta
                property="og:url"
                content={`https://www.kidzkornermilton.com/blog/${blog.slug}`}
                />
            <link
                rel="canonical"
                href={`https://www.kidzkornermilton.com/blog/${blog.slug}`}
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