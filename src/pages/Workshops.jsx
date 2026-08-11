import WorkshopForm from "@/components/WorkshopFrom"
import WorkshopCarousel from "@/components/WorkshopCarousel";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import {
    Palette,
    Users,
    Sparkles,
    Heart,
} from "lucide-react"

const Workshops = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Workshops",
            url: "https://www.kidzkornermilton.com/workshops"
        }
    ];

    const workshopHighlights = [
        {
            icon: Sparkles,
            title: "Fun & Engaging",
            description: "Hands-on activities designed to keep little ones engaged and having fun."
        },
        {
            icon: Palette,
            title: "Creative Activities",
            description: "Arts, crafts, cooking, and other activities that encourage creativity."
        },
        {
            icon: Users,
            title: "Made for Little Ones",
            description: "Workshops designed with toddlers and preschoolers in mind."
        },
        {
            icon: Heart,
            title: "Learn Through Play",
            description: "A welcoming environment where children can explore and enjoy new activities."
        },
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Kids Workshops in Milton, Ontario
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 lg:text-justify text-center">
                <p className="mb-4 lg:text-justify text-center">
                    At Kidz Korner, we offer fun and engaging workshops for
                        toddlers and preschoolers in Milton, Ontario. Our workshops give young children the opportunity to explore, create,play, and enjoy new activities in a welcoming environment.
                </p>

                <p className="hover:underline">
                    <a
                        href="https://www.instagram.com/kidz.kornermilton/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        For the latest updates on upcoming workshops, follow us on Instagram!
                    </a>
                </p>                
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-8 my-4">

                <h2 className="lg:text-3xl text-2xl font-bold font-serif text-center mb-4">
                    Fun Workshops for Toddlers & Preschoolers
                </h2>

                <p className="lg:w-4/5 text-center lg:text-justify leading-7">
                    Our children's workshops are designed to give young children a chance to try something new while having fun with friends and family. 
                    From creative art activities and cooking to Islamic learning and parent-and-child experiences, each workshop offers a simple and enjoyable way for little ones to participate, explore, and make memories.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">

                <h2 className="lg:text-3xl text-2xl font-bold font-serif text-center mb-8">
                    What to Expect at Our Workshops
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

                    {workshopHighlights.map((highlight) => {
                        const Icon = highlight.icon

                        return (
                            <div
                                key={highlight.title}
                                className="flex flex-col items-center text-center gap-3 p-5"
                            >
                                <div className="flex justify-center items-center p-3 rounded-full bg-primary text-primary-foreground">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="font-bold text-lg">
                                    {highlight.title}
                                </h3>

                                <p className="text-sm leading-6">
                                    {highlight.description}
                                </p>
                            </div>
                        )
                    })}

                </div>

            </div>

            {/* Move away from advertising specific workshops/prices as they change too often */}
            {/* Just link to insta */}
            <div className="flex justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-12 py-8 lg:my-12 my-8">
                <WorkshopCarousel />
            </div>

            {/* Why is this form title in a different format than the others? */}
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <WorkshopForm/>
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Kids Workshops in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="description" content="Kidz Korner offers engaging workshops and programs in Milton, Ontario. Early learning, arts, and skill-building activities for children." />
            <meta 
                property="og:title"
                content="Kids Workshops in Milton, Ontario | Kidz Korner "
            />
            <meta
                property="og:description"
                content="Kidz Korner offers engaging workshops and programs in Milton, Ontario. Early learning, arts, and skill-building activities for children."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/workshops"
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
  
export default Workshops;