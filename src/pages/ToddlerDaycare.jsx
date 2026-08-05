import DaycareForm from "@/components/DaycareForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom';
import Image from "@/components/Image"
import FAQAccordion from "../components/FAQAccordion";
import StructData from "../components/StructData";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "../schema/structDataSchema";
import { CircleCheck } from "lucide-react";

const ToddlerDaycare = () => {
    const breadCrumb = [
        {
            name: "Home",
            url: "https://www.kidzkornermilton.com/"
        },
        {
            name: "Daycare",
            url: "https://www.kidzkornermilton.com/daycare"
        },
        {
            name: "Toddler Daycare",
            url: "https://www.kidzkornermilton.com/toddler-daycare"
        },
    ];

    const faq = [
        {
            q: "What age is the toddler program?",
            a: "Our toddler daycare program is designed for young children between the ages of [FILL THIS IN]."
        },
        {
            q: "What does a typical day look like?",
            a: "Each day includes a balanced routine of free play, group activities, arts and crafts, music, indoor play, meals, rest time, and hands-on learning experiences designed for toddlers."
        },
        {
            q: "How does your toddler program support early learning?",
            a: "Our educators use play based learning to encourage language development, creativity, social interaction, problem-solving, and independence while helping children reach important developmental milestones."
        },
        {
            q: "Will my toddler have opportunities to socialize?",
            a: "Absolutely. Our program encourages children to build friendships, practice sharing, improve communication skills, and develop confidence through group activities and cooperative play."
        },
        {
            q: "How do you communicate with parents?",
            a: "We believe parents are an important part of their child's learning journey. Our team keeps families informed about their child's day, progress, and any important updates."
        },
        {
            q: "Are meals and snack time included?",
            a: "Children enjoy scheduled meal and snack times as part of their daily routine."
        },
        {
            q: "Can I tour the toddler daycare before registering?",
            a: "Yes! We encourage families to schedule a tour to meet our educators, explore our classrooms, and learn more about our toddler daycare program in Milton."
        }
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Toddler Daycare in Milton
                </h1>
            </div>

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

                        <div className="w-full flex lg:flex-col gap-4 justify-center lg:items-end lg:pr-4 items-center">
                            <NavLink 
                                to="/about" 
                                end
                                className="hover:scale-105 ease-in-out duration-300 flex-1 lg:w-3/4 flex justify-center lg:justify-end"
                            >
                                <Button className="cursor-pointer min-w-1/2">
                                    Schedule Tour
                                </Button>
                            </NavLink>

                            <NavLink 
                                to="/daycare" 
                                end
                                className="hover:scale-105 ease-in-out duration-300 flex-1 lg:w-3/4 flex justify-center lg:justify-end"
                            >
                                <Button className="cursor-pointer min-w-1/2">
                                    Explore Programs
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>  

                <div>
                    <h2 className="text-center w-3/4">
                        A nurturing and engaging toddler daycare program in Milton designed to support your child's early development through play, exploration, and age-appropriate learning.
                    </h2>
                
                    <div>
                        <Button>
                            Schedule a Tour
                        </Button>
                        <Button>
                            Contact Us
                        </Button>
                    </div>
                    <Image src='/20251010_122316.jpg' alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' />
                </div>

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Safe & Supportive Environment for Growing Toddlers
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        At Kidz Korner, our toddler daycare program provides a caring environment where children can learn, explore, and build confidence at their own pace. Our educators encourage curiosity through hands-on activities, creative play, and social interaction while supporting each child's individual needs.
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    What Makes Our Toddler Program Special
                </h2>

                <div className="flex flex-1 flex-col gap-4 w-full">
                    <div className="flex md:flex-row flex-col gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Play Based Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Toddlers learn best through exploration. Our activities encourage creativity, problem solving, and early development skills.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Creative Activities
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Arts, crafts, music, and sensory activities help toddlers express themselves and develop new skills.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Social Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Children build friendships and learn important skills like sharing, communication, and cooperation.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Building Independence
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                We encourage toddlers to develop confidence through age appropriate routines and responsibilities.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Supporting Your Toddler's Development
                </h2>

                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        Our toddler program focuses on the important developmental milestones children experience during their early years. Through guided activities and everyday routines, children strengthen communication skills, coordination, confidence, and independence.
                    </p>
                    <Image
                        src="/K_K_39.jpg"
                        alt="Kidz Korner licensed daycare in  Milton"
                        w="w-md"
                    />
                </div>

            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    What You Can Expect
                </h2>
                <div className="flex lg:flex-row flex-col p-2 gap-2">
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Caring Educators
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Learning Teamwork & Sharing
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Building Friendships
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full flex-1">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Daily Parent Teacher Communication
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Monthly Progress Reports
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Freshly Cooked Meals & Snacks
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y py-10 my-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    FAQ
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <p className="flex text-center">
                    Ready to join us?
                </p>
                
                {/* TODO:MAKE THIS FORM TODDLER SPECIFIC  */}
                {/* [DaycareForm type="toddler"] */}
                <DaycareForm />
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                Toddler Daycare Milton | Caring Toddler Program | Kidz Korner
            </title>
            <meta name="description" content="Looking for toddler daycare in Milton? Kidz Korner provides a safe, nurturing toddler program focused on learning, play, and early childhood development." />
        </div>
    );
}
  
export default ToddlerDaycare;