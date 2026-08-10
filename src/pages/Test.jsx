import { Shapes } from "lucide-react";

const Test = () => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-bold">
                    The Sandbox
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                <Shapes className="h-10 w-10 text-primary"/>
            </div>

            <title>
                Summer Camp in Milton, Ontario | Kidz Korner 
            </title>
            <meta 
                name="description" 
                content="Join Kidz Korner's fun and educational kids' camps in Milton, Ontario. Summer and seasonal camps designed to spark curiosity and creativity." 
            />
            <meta 
                property="og:title"
                content="Licensed Daycare in Milton, Ontario | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Looking for a licensed daycare in Milton? Kidz Korner provides trusted childcare, toddler daycare, preschool programs, before and after school care, and licensed camps for local families."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/"
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
  
export default Test;