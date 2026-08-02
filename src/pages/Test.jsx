import { Shapes, ToyBrick } from "lucide-react";

const Test = () => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-2 w-full text-center border-2">
            <div className="flex lg:flex-row flex-col justify-center items-center w-3/4 gap-4">
                <h1 className="text-3xl font-bold">
                    The Sandbox
                </h1>
                <Shapes className="h-10 w-10 text-primary"/>
            </div>
        </div>
    );
}
  
export default Test;