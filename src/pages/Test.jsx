import { ToyBrick } from "lucide-react";

const Test = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full text-center">
            <div className="flex lg:flex-row flex-col justify-center items-center w-3/4 m-4 gap-4">
                <h1 className="text-3xl font-bold">
                    The Sandbox
                </h1>
                <Toy className="h-10 w-10"/>
            </div>
        </div>
    );
}
  
export default Test;