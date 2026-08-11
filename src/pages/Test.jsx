import { Shapes } from "lucide-react";

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

            {Array.from({ length: 31 }, (_, index) => (
                <p key={index}>{index + 1}</p>
            ))}

            <title>
                Test | Kidz Korner 
            </title>
        </div>
    );
}
  
export default Test;