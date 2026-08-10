import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-6xl font-bold font-serif text-center py-4">
                    404
                </h1>
            </div>

            <div className="w-full flex flex-col justify-center items-center p-4">
                <p className="text-6xl animate-bounce">🎈</p>
                <p className="text-lg">Oops! This page ran off to play!</p>
            </div>

            <div className="w-full flex justify-center items-center">
                <NavLink
                    to="/" 
                    end
                    className="hover:scale-105 ease-in-out duration-300 flex-1 flex justify-center"
                >
                    <Button className="cursor-pointer min-w-1/2 text-lg">
                        Go Home!
                    </Button>
                </NavLink>
            </div>

            <title>
                Page Not Found | Kidz Korner
            </title>
            <meta
                name="description"
                content="Oops! The page you are looking for does not exist. Visit Kidz Korner, a licensed daycare and childcare centre in Milton, Ontario."
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
            <meta name="robots" content="noindex, nofollow" />
        </div>
    );
};

export default NotFound;
