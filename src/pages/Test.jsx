import { Shapes, ToyBrick } from "lucide-react";

const Test = () => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-bold">
                    The Sandbox
                </h1>
            </div>
                <Shapes className="h-10 w-10 text-primary"/>
        </div>
    );
}
  
export default Test;