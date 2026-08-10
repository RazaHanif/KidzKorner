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

const PreschoolDaycare = () => {
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
            name: "Preschool Daycare",
            url: "https://www.kidzkornermilton.com/daycare/preschool"
        },
    ];

    const faq = [
        {
            q: "What age is the preschool program? [CHECK IF THIS IS RIGHT!!!!!]",
            a: "Our toddler daycare program is designed for young children between the 18 months and 2.5 years."
        },
        {
            q: "What does a typical day look like?",
            a: "Each day includes a balanced routine of free play, group activities, arts and crafts, music, indoor play, meals, rest time, and hands-on learning experiences designed for toddlers."
        },
        {
            q: "How does your toddler program support early learning?",
            a: "Our educators use play-based learning to encourage language development, creativity, social interaction, problem-solving, and independence while helping children reach important developmental milestones."
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
            <div className="flex flex-col justify-center items-center w-full lg:pb-16 py-8">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center">
                    Preschool Daycare in Milton
                </h1>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 lg:w-3/4">
                <div className="flex flex-col flex-1 justify-center items-center w-full py-4 lg:gap-8 gap-4">
                    <p className="w-3/4 flex justify-center items-center lg:text-center">
                        Our toddler daycare program provides a nurturing and engaging environment where young children can explore, learn, and grow with confidence. 
                        Through a combination of guided activities, hands-on experiences, and a consistent daily routine, we create a welcoming space where toddlers can feel comfortable while discovering the world around them.
                    </p>

                    <div className="w-3/4 flex flex-row lg:flex-col gap-4 justify-center items-center">
                        <a 
                            href="#toddler-form" 
                            className="hover:scale-105 ease-in-out duration-300 flex-1 lg:w-3/4 flex justify-center"
                        >
                            <Button className="cursor-pointer min-w-1/2">
                                Schedule A Tour
                            </Button>
                        </a>

                        <a 
                            href="/about#contact-form" 
                            className="hover:scale-105 ease-in-out duration-300 flex-1 lg:w-3/4 flex justify-center"
                        >
                            <Button className="cursor-pointer min-w-1/2">
                                Contact Us
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image 
                        src='/20251010_122316.jpg' 
                        alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' 
                        w="w-sm"    
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Preschool Program Built For Growing Minds
                </h2>

                <div className="flex flex-1 flex-col gap-4 w-full">
                    <div className="flex md:flex-row flex-col gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Growing Independence
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Learning Through Play
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">

                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Building Social Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">

                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Developing Confidence
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>  

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-16 py-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    Supporting Your Preschooler's Development
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Safe, Supportive Environment to Learn and Grow
                </h2>

                <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-4">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        
                    </p>
                    <Image
                        src="/K_K_39.jpg"
                        alt="Kidz Korner licensed daycare in  Milton"
                        w="w-sm"
                    />
                </div>

            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    What Preschool Parents Can Expect
                </h2>
                <div className="flex lg:flex-row flex-col p-2 lg:gap-4 gap-2">
                    <div className="flex flex-col gap-2 w-full text-nowrap">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Experienced Childcare Educators
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Play-based Learning Environment
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Indoor Playground
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full text-nowrap">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Small-group Activities
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Focus on Independence & Confidence
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Freshly Cooked Meals & Snacks
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-16 py-8 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Frequently Asked Questions About Toddler Daycare
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4" id="toddler-form">
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
                Preschool Daycare | Preschool | Kidz Korner
            </title>
            <meta name="description" content="" />
        </div>
    );
}
  
export default PreschoolDaycare;