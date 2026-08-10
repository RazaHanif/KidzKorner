import DaycareForm from "@/components/DaycareForm";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Image from "@/components/Image"
import FAQAccordion from "../components/FAQAccordion";
import StructData from "../components/StructData";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "../schema/structDataSchema";
import { BadgeCheck, CircleCheck, GraduationCap, HeartHandshake, Palette, ShieldCheck } from "lucide-react";

const BeforeAfterDaycare = () => {
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
            name: "Before & After School Daycare",
            url: "https://www.kidzkornermilton.com/daycare/before-after-school-care"
        },
    ];

        const faq = [
        {
            q: "What age is the preschool program? [CHECK IF THIS IS RIGHT!!!!!]",
            a: "Our toddler daycare program is designed for young children between 2-4 years."
        },
        {
            q: "What does a typical preschool day look like?",
            a: "Preschoolers enjoy a balance of guided activities, creative play, group experiences, active play, and opportunities for independent exploration. Daily routines may include arts and crafts, stories, music, learning activities, meals, and indoor play."
        },
        {
            q: "How does the preschool program prepare children for kindergarten?",
            a: "Children develop important skills through everyday activities, including following routines, communicating with others, cooperating in groups, solving problems, making choices, and becoming more independent."
        },
        {
            q: "Do preschool children have opportunities for free play?",
            a: "Yes. Free play is an important part of the preschool experience. Children have opportunities to choose activities, use their imagination, interact with friends, and explore their interests while being supported by our educators."
        },
        {
            q: "What are the preschool hours?",
            a: "Our regular preschool hours are 9:00 AM to 3:00 PM, Monday to Friday. Half-day options are also available from 9:00 AM to 11:30 AM or 12:30 PM to 3:00 PM."
        },
        {
            q: "How do I know if preschool is right for my child?",
            a: "Every child develops at their own pace. If your child is becoming more independent, enjoys interacting with others, and is ready to participate in group activities and routines, preschool may be a good fit. We encourage families to schedule a tour to learn more about the program."
        }
    ];

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 w-full lg:py-16 pb-8">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:text-5xl text-3xl font-bold font-serif text-center py-4">
                    Before & After School Care
                </h1>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 lg:w-3/4">
                <div className="flex flex-col flex-1 justify-center items-center w-full py-4 lg:gap-8 gap-4">
                    <p className="w-3/4 flex justify-center items-center lg:text-center">
                        A safe, welcoming place for school-age children before and after the school day. Our program gives families flexible care while giving children time to play, connect with friends, and enjoy a comfortable environment outside of school.
                    </p>

                    <div className="w-3/4 flex flex-row lg:flex-col gap-4 justify-center items-center">
                        <a 
                            href="#before-after-form" 
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


            <div className="flex flex-col justify-center items-center w-3/4 lg:py-4 py-4 lg:my-4 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Comfortable Start and End to Every School Day
                </h2>
                <div className="flex flex-col gap-4 lg:justify-evenly justify-center items-center w-full">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        School days can be busy for both children and parents. Our Before & After School Care program provides a welcoming place for children to spend time before school begins and after the school day ends.
                        Children have opportunities to play, participate in activities, socialize with friends, and relax in a supportive environment while families manage their daily schedules.
                    </p>
                    <div className="flex lg:flex-row flex-col p-2 lg:gap-4 gap-2 w-3/4">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <h2 className="font-bold">
                                        Before School Care
                                    </h2>
                                </div>
                                <p className="text-start pl-8">
                                    A calm and engaging start to the morning before children head off to school.
                                </p>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <h2 className="font-bold">
                                        After School Care
                                    </h2>
                                </div>
                                <p className="text-start pl-8">
                                    A welcoming place to unwind, play, and connect with friends after the school day.
                                </p>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-2 text-primary">
                                    <h2 className="font-bold">
                                        Flexible Scheduling
                                    </h2>
                                </div>
                                <p className="text-start pl-8">
                                    Care options designed to fit around your family's school and work schedule
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    More Than Just Before and After School Care
                </h2>

                <div className="flex flex-1 flex-col gap-4 w-full">
                    <div className="flex md:flex-row flex-col gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Creative Activities
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Time for arts, crafts, and hands-on activities that encourage creativity and self-expression.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Games & Play
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                A chance to enjoy games, toys, and activities with friends in a fun and relaxed setting.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex md:flex-row flex-col gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Social Connection
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Children can build friendships, practice cooperation, and enjoy spending time with their peers.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Quiet Time
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                A comfortable environment where children can read, work on activities, or simply take a break after a busy school day.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Positive Start Before School
                </h2>
                <div className="flex flex-col p-2 lg:gap-4 gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <p className="flex items-start gap-3">
                            Mornings don't always go according to plan. Our Before School Care provides children with a safe and welcoming place to begin their day before heading off to school.
                        </p>
                        <p className="flex items-start gap-3">
                            Children can ease into their morning with quiet activities, games, and time to socialize before it's time to leave for school.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center">
                        <Image 
                            src='/media/KK/20251010_122316.jpg' 
                            alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' 
                            w="w-sm"    
                        />
                        <Image 
                            src='/media/KK/20251010_122316.jpg' 
                            alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' 
                            w="w-sm"    
                        />
                        <Image 
                            src='/media/KK/20251010_122316.jpg' 
                            alt='Child Playing With Magnetic Toy at Kidz Korner Milton, Ontario' 
                            w="w-sm"    
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Place to Unwind After a Busy Day
                </h2>
                <div className="flex flex-col p-2 lg:gap-4 gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <p className="flex items-start gap-3">
                            After a full day at school, children need time to relax and be themselves. Our After School Care gives them an opportunity to transition out of the school day at their own pace.
                        </p>
                        <p className="flex items-start gap-3">

                            Whether they want to play with friends, participate in an activity, explore the indoor playground, or enjoy some quieter time, children can spend their afternoon in a comfortable and supportive environment.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 w-full">
                        <div className="flex md:flex-row flex-col gap-4">
                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Play & Explore
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                    Enjoy time in our indoor play spaces and participate in fun activities.
                                </CardContent>
                            </Card>

                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Connect With Friends
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                    Spend time socializing and playing with other school-age children.
                                </CardContent>
                            </Card>

                            <Card className="flex-1 flex">
                                <CardHeader className="text-start">
                                    <CardTitle>
                                        Relax & Recharge
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                    A less structured environment where children can decompress after school.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-4 py-4 lg:my-4 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Why Families Choose Kidz Korner for Before & After School Care
                </h2>
                <div className="flex flex-col gap-4 lg:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-1 flex-col gap-4 w-full">
                        <div className="flex md:flex-row flex-col gap-4">
                            <Card>
                                <CardContent className="flex md:flex-row flex-col gap-2">
                                    <div className="flex flex-col flex-1 gap-2">
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <BadgeCheck />
                                                <h2 className="font-bold">
                                                    A Familiar Environment
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Children spend their time in a welcoming childcare setting with caring educators.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <HeartHandshake />
                                                <h2 className="font-bold">
                                                    Convenient Hours
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Care is available before and after the regular school day to help support busy family schedules.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <GraduationCap />
                                                <h2 className="font-bold">
                                                    Active & Engaging
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Children have plenty of opportunities to play, create, socialize, and stay engaged.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2">

                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <Palette />
                                                <h2 className="font-bold">
                                                    A Place to Be Themselves
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                After school doesn't have to mean another structured classroom. Children have time to relax and enjoy themselves.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <ShieldCheck />
                                                <h2 className="font-bold">
                                                    Experienced Childcare Team
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Families can feel comfortable knowing their children are cared for by an experienced team.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <ShieldCheck />
                                                <h2 className="font-bold">
                                                    Self-Help Skills
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Children are encouraged to practice everyday tasks, make age-appropriate choices, and take greater responsibility for caring for themselves and their belongings.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 w-3/4 m-4">
                <h2 className="text-xl font-bold text-center lg:">
                    Before & After School Care Hours
                </h2>
                <div className="flex flex-col lg:justify-evenly justify-center items-center w-full gap-2">
                    <div className="flex flex-col justify-center">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className='font-semibold'>
                                        Before School Care
                                    </TableCell>
                                    <TableCell>
                                        7:30 AM - 9:00 AM
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className='font-semibold'>
                                        After School Care
                                    </TableCell>
                                    <TableCell>
                                        3:00 PM - 6:00 PM
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:w-3/4 w-full">
                        <p className="">
                            Our Before & After School Care program is designed to complement your child's regular school schedule, providing care during the hours families need it most
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    A Positive Start Before School
                </h2>
                <div className="flex flex-col p-2 lg:gap-4 gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <p className="flex items-start gap-3">
                            One of the things that makes Kidz Korner different is our indoor playground. After spending much of the day sitting and learning at school, children have the opportunity to get moving, play, and enjoy active time with their friends.

                        </p>
                        <p className="flex items-start gap-3">
                            Our indoor play space gives school-age children another way to stay active and engaged throughout their afternoon.
                            Children can ease into their morning with quiet activities, games, and time to socialize before it's time to leave for school.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center">
                        
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Frequently Asked Questions About Preschool Daycare
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4" id="before-after-form">
                <p className="flex text-center">
                    Ready to join us?
                </p>
                
                {/* TODO:MAKE THIS FORM PRESCHOOL SPECIFIC  */}
                {/* [DaycareForm type="preschool"] */}
                <DaycareForm />
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />
            <StructData schema={faqSchema(faq)} />

            <title>
                Before & After School Care in Milton, Ontario | School-Age Child Care | Kidz Korner
            </title>
            <meta 
                name="description" 
                content="" 
            />
            <meta 
                property="og:title"
                content="Before & After School Care in Milton, Ontario | School-Age Child Care | Kidz Korner"
            />
            <meta
                property="og:description"
                content=""
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.kidzkornermilton.com/daycare/before-after-school-care"
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
  
export default BeforeAfterDaycare;