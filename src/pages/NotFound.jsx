import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Image from "../components/Image";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 gap-8">
      <div className="w-full flex flex-col justify-end items-center text-6xl font-bold font-mono">
        404
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 text-muted-foreground">
        <div className="text-6xl font-[ui]">🛝</div>
        <div>
            <img src='/slide.svg' alt='slide' className="w-20"/>
        </div>
        <div>Oops! This page ran off to play!</div>
      </div>

      <div className="w-full flex flex-col justify-start items-center">
        <Button variant="btn" className="bg-primary" size={"lg"} asChild>
          <Link to={"/"}>Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
