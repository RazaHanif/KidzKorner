import DaycareForm from "@/components/DaycareForm";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
            url: "https://www.kidzkornermilton.com/daycare/toddler"
        },
    ];

    const faq = [
        {
            q: "What age is the toddler program? [CHECK IF THIS IS RIGHT!!!!!]",
            a: "Our toddler daycare program is designed for young children between 18 months and 2.5 years."
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
                    Toddler Daycare in Milton
                </h1>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 lg:w-3/4 w-9/10">
                <div className="flex flex-col flex-1 justify-center items-center w-full py-4 lg:gap-8 gap-4">
                    <p className="flex justify-center items-center lg:w-3/4 lg:text-center">
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
                        src='/media/KK/20251010_122316.jpg' 
                        alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' 
                        w="w-sm"    
                    />
                </div>
            </div>  

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 lg:pt-16 pt-8">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Safe & Supportive Environment for Growing Toddlers
                </h2>
                <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        Starting daycare is a big step for both toddlers and their parents. At Kidz Korner, we strive to create a warm and familiar environment where children can feel comfortable as they adjust to a new routine and spend time away from home. 
                        Our educators provide consistent guidance throughout the day while creating opportunities for children to explore their surroundings, make choices, and become comfortable with their daily routines. 
                        We understand that every child adjusts differently, which is why we take the time to get to know each toddler and provide the reassurance and support they need to feel secure.
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    What Makes Our Toddler Program Special
                </h2>

                <div className="flex flex-1 flex-col gap-4 w-full">
                    <div className="flex md:flex-row flex-col gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Play-Based Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Toddlers learn best through exploration. Our activities encourage creativity, problem-solving, and early development skills.
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
                                We encourage toddlers to develop confidence through age-appropriate routines and responsibilities.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

                        <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <h2 className="text-xl font-bold text-center pb-4">
                    What Parents Can Expect
                </h2>
                <div className="flex lg:flex-row flex-col p-2 lg:gap-4 gap-2">
                    <div className="flex flex-col gap-2 w-full text-nowrap">
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Caring & Experienced Educators
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Consistent Daily Routine
                        </p>
                        <p className="flex items-start gap-3">
                            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary"/>
                            Welcoming Environment for All
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full text-nowrap">
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

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10">
                <h2 className="text-xl font-bold text-center pb-4">
                    Supporting Your Toddler's Development
                </h2>

                <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-4">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        The toddler years are an important time for children to develop new skills and become more confident in their abilities. 
                        At Kidz Korner, development is supported throughout the entire day, from following familiar routines and making simple choices to exploring new experiences and participating in age-appropriate activities. 
                        Our educators pay attention to each child's interests, abilities, and individual pace, providing encouragement and support as they take on new challenges. 
                        This approach helps toddlers become comfortable in their environment while gradually developing the skills they need for their next stage of learning.
                    </p>
                    <Image
                        src="/media/KK/K_K_39.jpg"
                        alt="Kidz Korner licensed daycare in  Milton"
                        w="w-sm"
                    />
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
                Toddler Daycare in Milton, Ontario | Caring Toddler Program | Kidz Korner
            </title>
            <meta 
                name="description" 
                content="Looking for toddler daycare in Milton? Kidz Korner provides a safe, nurturing toddler program focused on learning, play, and early childhood development." 
            />
            <meta 
                property="og:title"
                content="Toddler Daycare in Milton, Ontario | Caring Toddler Program | Kidz Korner"
            />
            <meta
                property="og:description"
                content="Looking for toddler daycare in Milton? Kidz Korner provides a safe, nurturing toddler program focused on learning, play, and early childhood development."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/daycare/toddler"
            />
            <meta
                property="og:image"
                content="https://www.kidzkornermilton.com/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="Kidz Korner licensed daycare in Milton"
            />
        </div>
    );
}
  
export default ToddlerDaycare;