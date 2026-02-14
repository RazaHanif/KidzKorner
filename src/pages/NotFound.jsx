import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 gap-8">
      <h1 className="w-full flex flex-col justify-end items-center text-6xl font-bold font-serif">
        404
      </h1>

      <div className="w-full flex flex-col justify-center items-center gap-4 text-muted-foreground">
        <p className="text-6xl">🎈</p>
        <p>Oops! This page ran off to play!</p>
      </div>

      <div className="w-full flex flex-col justify-start items-center">
        <Button variant="btn" className="bg-primary" size={"lg"} asChild>
          <Link to={"/"}>Go Home</Link>
        </Button>
      </div>

      <title>
          Page Not Found | Kidz Korner 
      </title>
      <meta name="description" content="Oops! The page you are looking for does not exist. Visit Kidz Korner, a licensed daycare and childcare centre in Milton, Ontario." />
      <meta name="robots" content="noindex, nofollow" />
    </div>
  );
};

export default NotFound;
