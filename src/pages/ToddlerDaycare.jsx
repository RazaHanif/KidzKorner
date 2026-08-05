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
            q: "What age is the toddler daycare program?",
            a: "Our toddler daycare program is designed for young children between the ages of [FILL THIS IN]."
        },
        {
            q: "What does a typical day look like?",
            a: "Each day includes a balanced routine of free play, group activities, arts and crafts, music, outdoor play, meals, rest time, and hands-on learning experiences designed for toddlers."
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
            q: "Is meals and snack time included?",
            a: "Children enjoy scheduled meal and snack times as part of their daily routine. Please contact us for information regarding meals, dietary accommodations, and our nut-free policy."
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
                        <div className="flex flex-col justify-center items-center">
                            <p className="">
                                Caring Educators
                            </p>
                            <p className="">
                                Learning Teamwork & Sharing
                            </p>
                            <p className="">
                                Building Friendships
                            </p>
                            <p className="">
                                Daily Parent Teacher Communication
                            </p>
                            <p className="">
                                Monthly Progress Reports
                            </p>
                            <p className="">
                                Freshly cooked Nutritious Meals & Snacks
                            </p>
                        </div>
                    </CardContent>
                </Card>
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
                [MAKE THIS FORM TODDLER SPECIFIC DaycareForm type="toddler"]
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