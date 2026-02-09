import PlaygroundAccordion from "@/components/PlaygroundAccordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Playground = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4 text-justify">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-3xl font-bold">
                    Drop-In Fun!
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    Looking for a fun and safe indoor space for your child to play? Our indoor playground is open for drop-in play from Monday to Friday. It includes a variety of skill-building play areas for your child to explore and enjoy. The space is infant and toddler friendly. Come on in to escape from the heat, cold, rain or snow.
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-evenly items-center w-3/4">
                <Card className="w-1/2">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Drop In
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            $15 per Family
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="">
                            Open from 3-6 pm
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div>

                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                    <img 
                        src='/K_K_20.jpg'
                        alt='Play Structure'
                        className="w-xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <img 
                        src='/K_K_30.jpg'
                        alt='Kids on climbing structure'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <img 
                        src='/K_K_20.jpg'
                        alt='Play Structure'
                        className="w-xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                </div>

            </div>
            <div className="flex flex-col justify-center items-center w-3/4 mt-4">
                <PlaygroundAccordion />
            </div>
        </div>
    );
}
  
export default Playground;