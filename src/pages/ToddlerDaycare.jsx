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
            q: "What types of camps do you offer?",
            a: "We offer exciting camps throughout the year, including Summer Camp, March Break Camp, Winter Break Camp, and PA Day Camp. Each program features themed activities, games, crafts, and opportunities for children to learn while having fun."
        },
        {
            q: "What age groups can attend your camps?",
            a: "Our camp programs are designed for school-aged children. If you're unsure whether your child meets the age requirements, feel free to contact us and we'll be happy to help."
        },
        {
            q: "What should my child bring to camp?",
            a: "Children should bring a nut-free lunch, snacks, a reusable water bottle, comfortable clothing, indoor shoes, and any personal items they may need throughout the day."
        },
        {
            q: "How do I register for a camp?",
            a: "You can register by completing our online camp registration form. We recommend registering early, as spaces can fill quickly during popular camps such as Summer Camp and March Break Camp."
        },
    ]

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Toddler Daycare in Milton
                </h1>
                <h2 className="font-bold text-center w-3/4">
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
                    Why Families Love Our Camps
                </h2>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Play Based Learning
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Toddlers learn best through exploration. Our activities encourage creativity, problem solving, and early development skills.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Creative Activities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Arts, crafts, music, and sensory activities help toddlers express themselves and develop new skills.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Social Development
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Children build friendships and learn important skills like sharing, communication, and cooperation.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Building Independence
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            We encourage toddlers to develop confidence through age appropriate routines and responsibilities.
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center gap-4 py-16">
                <div className="flex flex-col justify-center items-center w-full lg:p-4">

                    <h2 className="w-full flex justify-center items-center m-4 font-bold text-xl flex-1">
                        Supporting Your Toddler's Development
                    </h2>

                    <div className="flex flex-col gap-4">
                        <p className="w-full flex justify-center items-center flex-1">
                            Our toddler program focuses on the important developmental milestones children experience during their early years. Through guided activities and everyday routines, children strengthen communication skills, coordination, confidence, and independence.
                        </p>
                    </div>
                </div>
                <Image
                    src="/K_K_39.jpg"
                    alt="Kidz Korner licensed daycare in  Milton"
                    w="w-md"
                />
            </div>

            <div className="flex flex-col justify-center w-3/4 lg:py-16 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            What You Can Expect
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col justify-evenly text-center">
                            <p className="">
                                Interactive & Play Based Learning
                            </p>
                            <p className="">
                                Weekly Art & Cooking Classes
                            </p>
                            <p className="">
                                Strong Parent Teacher Communication
                            </p>
                            <p className="">
                                Monthly Progress Reports
                            </p>
                            <p className="">
                                Freshly cooked Nutritious Meals & Snacks
                            </p>
                            <p className="p-4">
                                Registered Early Childhood Educators (RECE)
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="flex lg:flex-row flex-col justify-between items-center w-3/4 gap-4">
                    <Image src='/20251023_124356.jpg' alt='Child Carving Pumpkin at Kidz Korner Milton, Ontario' />
                    <Image src='/Photo from Ansa.jpg' alt='Child Whisking Eggs at Kidz Korner Milton, Ontario' />
                    <Image src='/20250811_104025.jpg' alt='Child Making Sea Shell at Kidz Korner Milton, Ontario' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-1 m-4 overflow-x-auto lg:py-16 py-8">
               <h2 className="text-xl font-bold self-center">
                    A Day at Kidz Korner
                </h2>
                <p className="text-sm">
                    Every day includes a balance of learning, creativity, play, and rest designed to support each child's development.
                </p>
                <div className="lg:w-3/4">
                    
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
                    Ready to join us? Contact us today to learn more about our preschool programs and schedule a tour of our facility! 
                </p>
                <DaycareForm />
            </div>


            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                Licensed Daycare in Milton, Ontario | Toddler & Preschool Programs | Kidz Korner
            </title>
            <meta name="keywords" content="childcare Milton, daycare programs Milton, preschool programs Milton, infant care Milton, toddler care Milton" />
            <meta name="description" content="Kidz Korner is a licensed daycare in Milton, Ontario offering toddler, preschool, and before & after school programs with experienced RECE educators, play-based learning, and a safe indoor environment." />
        </div>
    );
}
  
export default ToddlerDaycare;