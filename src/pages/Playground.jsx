import Image from "@/components/Image";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";
import StructData from "../components/StructData";
import PartyCard from "@/components/PartyCard";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PlaygroundCard = (title, price, desc) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                    { title }
                </CardTitle>
                <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                    ${price}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="p-2 text-center">
                    { desc }
                </p>
            </CardContent>
        </Card>
    )
}

const Playground = () => {
        const breadCrumb = [
            {
                name: "Home",
                url: "https://www.kidzkornermilton.com/"
            },
            {
                name: "Playground",
                url: "https://www.kidzkornermilton.com/playground"
            },
        ]; 


    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Indoor Playground in Milton, Ontario
                </h1>
                <h2 className="text-xl font-bold text-center w-3/4">
                    Drop-in fun for toddlers, young children, and families!
                </h2>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-16 py-8">
                <p className="flex lg:flex-row flex-col justify-center items-center lg:text-justify text-center">
                    Looking for an indoor playground in Milton where your child can play, explore, and build new skills? 
                    Kidz Korner offers a safe and engaging indoor play space designed for toddlers and young children. 
                    Our play areas encourage climbing, imaginative play, and active exploration in a clean, welcoming environment. 
                    Whether you're escaping the summer heat, rainy afternoons, or snowy winter days, our indoor playground gives families a fun place to spend quality time together year-round.
                </p>
            </div>

            <div 
                className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8"
            >
                <PartyCard
                    title={"Drop-In Playground Pricing"}
                    price={"15 per Family"}
                    tax={false}
                    desc={
                        "Bring the whole family for one low price"
                    }
                />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-16 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold text-center">
                        Explore Our Indoor Playground
                    </h2>
                    <div className="flex lg:flex-row flex-col p-2 gap-2">
                        <div className="flex flex-col gap-2 w-full flex-1">
                            <p className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 shrink-0 text-primary"/>
                                Climbing Structure
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 shrink-0 text-primary"/> 
                                Active Play Areas
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 shrink-0 text-primary"/>
                                Toddler Friendly Spaces
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-full flex-1">
                            <p className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 shrink-0 text-primary"/> 
                                Imaginative Play Opportunities
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 shrink-0 text-primary"/> 
                                Year-Round Indoor Fun
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex lg:flex-row flex-col gap-8 lg:justify-around justify-center items-center w-3/4 lg:pt-16 pt-8">
                <Image src='/20250930_142748.jpg' alt="Children playing on the indoor playground at Kidz Korner in Milton Ontario" w="w-md"/>
                <Image src='/20250930_142442.jpg' alt="Indoor climbing structure at Kidz Korner playground in Milton Ontario" />
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

            <title>
                Indoor Playground in Milton, Ontario | Kidz Korner 
            </title>
            <meta name="description" content="Visit Kidz Korner's indoor playground in Milton, Ontario. Enjoy safe drop-in play, toddler-friendly play areas, climbing structures, and year-round indoor fun for the whole family." />
        </div>
    );
}
  
export default Playground;