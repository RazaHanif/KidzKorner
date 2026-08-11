import { Shapes } from "lucide-react";
import Image from "@/components/Image";

const Test = () => {
    const format = `
    "toddler-activities-in-milton" : {
        title: "Toddler Activities in Milton",
        slug: "toddler-activities-in-milton",
        description: "This will be a quick listcle",
        image: "/media/Stock/12.jpg",
        imageAlt: "Child playing with blocks at Kidz Korner Milton ",
        publishedAt: "2026-08-08",
        content: [
            "Choosing the right daycare...",
            "What should you look for in a daycare?",
            "A good childcare program...",
        ]
    },
    `

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            {/* <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-bold">
                    The Sandbox
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                <Shapes className="h-10 w-10 text-primary"/>
            </div> */}

            <div>
                <h2>Format</h2>
                <pre>
                    {format}
                </pre>
            </div>

            <div className="flex w-full flex-row ">
                {Array.from({ length: 31 }, (_, index) => (
                    <div key={index + 1} className="border">
                        <Image 
                            src={`/media/Stock/${index+1}.jpg`} 
                            alt='who cares' 
                        />
                        <p>{index+1}.jpg</p>
                    </div>
                ))}
            </div>

            <title>
                Test | Kidz Korner 
            </title>
        </div>
    );
}
  
export default Test;