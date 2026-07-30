import Image from "@/components/Image";
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import StructData from "../components/StructData";
import { localBusinessSchema, organizationSchema, websiteSchema } from "../schema/structDataSchema";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center lg:py-4">
                    Licensed Daycare & Childcare in Milton
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                    <Image
                        src="/K_K_39.jpg"
                        alt="Kidz Korner licensed daycare in  Milton"
                        w="w-md"
                    />
                    <div className="flex flex-col justify-center items-center w-full lg:p-4">
                        <h2 className="w-full flex justify-center items-center mt-4 lg:mt-0 font-bold text-xl flex-1">
                            A Trusted Licensed Daycare in Milton
                        </h2>

                        <p className="w-full flex justify-center items-center flex-1 p-4">
                            Kidz Korner is a family-owned, licensed daycare in Milton, Ontario, dedicated to providing exceptional early learning and childcare for local families. 
                            We offer toddler daycare, preschool programs, before and after school care, and licensed camps during PA Days, March Break, Summer Break, and Winter Break. 
                            Our commitment to nurturing children in a safe, engaging environment has earned the trust of Milton families for generations.

                        </p>

                        <div className="w-full flex lg:flex-col gap-4 justify-around lg:justify-center">
                            <NavLink 
                                to="/about" 
                                end
                                className="hover:scale-105 ease-in-out duration-300"
                            >
                                <Button className="cursor-pointer">
                                    Schedule Tour
                                </Button>
                            </NavLink>

                            <NavLink 
                                to="/childcare" 
                                end
                                className="hover:scale-105 ease-in-out duration-300"
                            >
                                <Button className="cursor-pointer">
                                    Explore Programs
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full lg:py-16">
                    <h2 className="w-full flex justify-center items-center m-4 font-bold text-xl flex-1">
                        Programs for Every Stage of Early Learning
                    </h2>

                    <div className="flex flex-1 flex-col gap-4 w-full">
                        {/* 
                            TODO: update NavLinks when those pages are created 
                        */}
                        <div className="flex md:flex-row flex-col gap-4">
                            <NavLink 
                                to="/childcare" 
                                end 
                                className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                            >
                                <Card className="flex-1 flex">
                                    <CardHeader className="text-start">
                                        <CardTitle>
                                            Toddler Daycare
                                        </CardTitle>
                                        <CardDescription>
                                            A safe, nurturing environment where toddlers learn through play while developing confidence, social skills, and independence.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex justify-end items-end">
                                        <Button className="cursor-pointer">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </NavLink>

                            <NavLink 
                                to="/childcare" 
                                end 
                                className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                            >
                                <Card className="flex-1 flex">
                                    <CardHeader className="text-start">
                                        <CardTitle>
                                            Preschool
                                        </CardTitle>
                                        <CardDescription>
                                            Preparing children for kindergarten through play-based learning, creativity, and structured early education.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex justify-end items-end">
                                        <Button className="cursor-pointer">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </NavLink>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4">
                            <NavLink 
                                to="/childcare" 
                                end 
                                className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                            >
                                <Card className="flex-1 flex">
                                    <CardHeader className="text-start">
                                        <CardTitle>
                                            Before & After School Care
                                        </CardTitle>
                                        <CardDescription>
                                            Reliable care before and after school with homework support, activities, and a fun supervised environment.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex justify-end items-end">
                                        <Button className="cursor-pointer">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </NavLink>

                            <NavLink 
                                to="/childcare" 
                                end 
                                className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                            >
                                <Card className="flex-1 flex">
                                    <CardHeader className="text-start">
                                        <CardTitle>
                                            Camp
                                        </CardTitle>
                                        <CardDescription>
                                            Fun, engaging camps during PA Days, March Break, Summer Break and Winter Break with games, learning, and new friendships.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex justify-end items-end">
                                        <Button className="cursor-pointer">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="w-full flex justify-center items-center m-4 font-bold text-xl flex-1">
                        Why Families Choose Kidz Korner
                    </h2>

                    <Card>
                        <CardContent className="flex md:flex-row flex-col gap-2">
                            <div className="flex flex-col flex-1 gap-2">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <h2 className="font-bold">
                                        ⭐ Licensed Ontario Childcare
                                    </h2>
                                    <p className="text-start pl-4">
                                        Meets Ontario Ministry of Education licensing standards.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                    <h2 className="font-bold">
                                        ❤️ Family-Owned
                                    </h2>
                                    <p className="text-start pl-4">
                                        Serving Milton families with a personal approach.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                    <h2 className="font-bold">
                                        👩‍🏫 Experienced Educators
                                    </h2>
                                    <p className="text-start pl-4">
                                        Caring professionals focused on every child's growth.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-2">

                                <div className="flex flex-col items-start justify-start w-full">
                                    <h2 className="font-bold">
                                        🎨 Play-Based Learning
                                    </h2>
                                    <p className="text-start pl-4">
                                        Learning through exploration, creativity, and fun.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                    <h2 className="font-bold">
                                        🛡️ Safe Environment
                                    </h2>
                                    <p className="text-start pl-4">
                                        A secure, welcoming space where children can thrive.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                    <h2 className="font-bold">
                                        🤝 Strong Parent Communication
                                    </h2>
                                    <p className="text-start pl-4">
                                        Working together with families every step of the way.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col justify-center items-center gap-4 p-4 lg:py-16">
                    <div className="flex flex-col justify-center items-center w-full lg:p-4">

                        <h2 className="w-full flex justify-center items-center m-4 font-bold text-xl flex-1">
                            Licensed Daycare Conveniently Located in Milton
                        </h2>

                        <div className="flex flex-col gap-4">
                            <p className="w-full flex justify-center items-center flex-1">
                                Kidz Korner is proud to serve Milton families with high-quality licensed childcare in a convenient, accessible location. 
                                Situated near Highway 401 and just minutes from downtown Milton, our daycare makes daily drop-offs and pick-ups easy for busy parents commuting throughout the area.
                            </p>

                            <p className="w-full flex justify-center items-center flex-1">
                                We welcome children from neighborhoods across
                                Milton, including Clarke, Scott, Willmott, Beaty,
                                Harrison, Dempsey, Timberlea, and surrounding
                                communities throughout the Halton Region. Whether
                                you're searching for a trusted daycare in Milton or
                                reliable childcare close to home, Kidz Korner
                                provides a safe, nurturing environment where
                                children can learn, grow, and thrive.
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/K_K_39.jpg"
                        alt="Kidz Korner licensed daycare in  Milton"
                        w="w-md"
                    />
                </div>

                <div className="flex flex-col justify-center items-center w-full p-4">
                    <h2 className="w-full flex justify-center items-center m-4 font-bold text-xl flex-1">
                        The Benefits of Choosing a Licensed Daycare
                    </h2>

                    <div className="flex flex-col gap-4">
                        <p className="w-full flex justify-center items-center flex-1">
                            Choosing a licensed daycare gives parents confidence that their child is learning and growing in a safe, regulated environment. 
                            Licensed childcare centres in Ontario must meet standards established by the Ministry of Education, including health and safety requirements, educator qualifications, staff-to-child ratios, and ongoing inspections to help ensure high-quality care.
                        </p>

                        <p className="w-full flex justify-center items-center flex-1">
                            At Kidz Korner, we follow Ontario's licensed childcare standards while delivering a play-based curriculum that supports every child's development.
                            Our focus is on creating a nurturing environment where children feel secure, develop important life skills, and build a strong foundation for future learning, while parents enjoy peace of mind knowing their child is in experienced and caring hands.
                        </p>
                    </div>
                </div>

            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={organizationSchema} />
            <StructData schema={websiteSchema} />

            <title>Licensed Daycare in Milton, Ontario | Kidz Korner</title>

            <meta
                name="keywords"
                content="licensed daycare Milton, childcare Milton, early learning Milton, kids programs Milton, preschool Milton"
            />
            <meta
                name="description"
                content="Looking for a licensed daycare in Milton? Kidz Korner provides trusted childcare, toddler daycare, preschool programs, before and after school care, and licensed camps for local families."
            />

            <meta property="og:title"content="Kidz Korner Milton"/>
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
                content="Kidz Korner licensed daycare in  Milton"
            />
        </div>
    );
};

export default Home;
