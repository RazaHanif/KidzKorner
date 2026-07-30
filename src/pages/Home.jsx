import Image from "@/components/Image";
import { Button } from "@/components/ui/button"
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
                <h1 className="text-3xl font-bold font-serif text-center">
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
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            A Trusted Licensed Daycare in Milton
                        </h2>

                        <p className="w-full flex justify-center items-center m-4 flex-1">
                            Kidz Korner is a family-owned, licensed daycare in Milton, Ontario, dedicated to providing exceptional early learning and childcare for local families. 
                            We offer toddler daycare, preschool programs, before and after school care, and licensed camps during PA Days, March Break, Summer Break, and Winter Break. 
                            Our commitment to nurturing children in a safe, engaging environment has earned the trust of Milton families for generations.

                        </p>

                        <div className="w-full flex justify-around">
                            {/* 
                                Maybe a button to call? or jump to the injury form on the childcare/aboutus page 
                            */}
                            <Button>Schedule a Tour</Button>
                            {/* 
                                Jump to /daycare 
                            */}
                            <Button>Explore Programs</Button>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row lg:justify-between lg:items-stretch flex-col justify-center items-center w-full lg:text-justify text-center">
                    <div className="flex flex-col m-2 flex-1 lg:justify-between">
                        <div className="flex flex-col justify-center items-center w-full p-4">
                            <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                                Licensed Daycare Conveniently Located in Milton
                            </h2>
                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                Kidz Korner is proud to serve Milton families with high-quality licensed childcare in a convenient, accessible location. 
                                Situated near Highway 401 and just minutes from downtown Milton, our daycare makes daily drop-offs and pick-ups easy for busy parents commuting throughout the area.
                            </p>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
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

                        <div className="flex flex-col justify-center items-center w-full p-4">
                            <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                                Why Families Choose Kidz Korner
                            </h2>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                At Kidz Korner, we're committed to providing a safe, welcoming, and engaging environment where children feel supported every day. 
                                As a family-owned licensed daycare in Milton, we understand how important it is for parents to find childcare they can trust. 
                                Our caring team of licensed educators builds meaningful relationships with every child, encouraging confidence, curiosity, and independence through learning and play.
                            </p>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                Our play-based approach helps children develop social, emotional, physical, and cognitive skills while having fun in a nurturing classroom environment. 
                                With years of experience serving Milton families, we take pride in creating a community where children receive personalized attention and parents feel like part of the Kidz Korner family.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col m-2 flex-1 lg:justify-between">
                        <div className="flex flex-col justify-center items-center w-full p-4">
                            <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                                Programs for Every Stage of Early Learning
                            </h2>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                Kidz Korner offers licensed childcare programs designed to support children through every stage of their early learning journey. 
                                From curious toddlers taking their first steps toward independence to preschoolers preparing for kindergarten, our programs provide age-appropriate learning experiences that encourage growth, creativity, and confidence.
                            </p>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                We proudly offer Toddler Daycare, Preschool, Before & After School Care, Summer Camps, March Break Camps, and PA Day Programs for Milton families.
                                Every program combines structured learning, creative play, outdoor activities, and opportunities to build friendships in a safe and supportive environment.
                            </p>

                            <div className="flex flex-1 flex-col gap-4 w-full items-center">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>
                                                    Card Title
                                                </CardTitle>
                                                <CardDescription>
                                                    Card Description
                                                </CardDescription>
                                                <CardAction>
                                                    Card Action
                                                </CardAction>
                                            </CardHeader>
                                            <CardContent>
                                                <p>
                                                    Card Content
                                                </p>
                                            </CardContent>
                                            <CardFooter>
                                                <p>
                                                    Card Footer
                                                </p>
                                            </CardFooter>
                                        </Card>
                                <Button className="w-1/2">
                                    Preschool Program
                                </Button>
                                <Button className="w-1/2">
                                    Before/After School Care
                                </Button>
                                <Button className="w-1/2">
                                    Camps
                                </Button>

                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center w-full p-4">
                            <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                                The Benefits of Choosing a Licensed Daycare
                            </h2>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                Choosing a licensed daycare gives parents confidence that their child is learning and growing in a safe, regulated environment. 
                                Licensed childcare centres in Ontario must meet standards established by the Ministry of Education, including health and safety requirements, educator qualifications, staff-to-child ratios, and ongoing inspections to help ensure high-quality care.
                            </p>

                            <p className="w-full flex justify-center items-center m-4 flex-1">
                                At Kidz Korner, we follow Ontario's licensed childcare standards while delivering a play-based curriculum that supports every child's development.
                                Our focus is on creating a nurturing environment where children feel secure, develop important life skills, and build a strong foundation for future learning, while parents enjoy peace of mind knowing their child is in experienced and caring hands.
                            </p>
                        </div>
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
