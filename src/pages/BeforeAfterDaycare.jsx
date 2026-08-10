import StructData from "../components/StructData";
import { breadcrumbSchema, localBusinessSchema } from "../schema/structDataSchema";

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
                        Our preschool program in Milton gives children the space, support, and encouragement they need to become confident and independent learners. Through hands-on activities, creative play, social experiences, and daily routines, children are encouraged to explore their interests while developing important skills for their next stage of learning. Our caring educators create a welcoming environment where preschoolers can build friendships, express themselves, solve problems, and learn at their own pace. We believe preschool should be more than preparing children for what comes next—it should be a place where they feel comfortable trying new things, asking questions, and discovering what they can do. At Kidz Korner, we combine play, learning, and meaningful relationships to help your child grow in confidence and independence while enjoying their preschool years.

                    </p>

                    <div className="w-3/4 flex flex-row lg:flex-col gap-4 justify-center items-center">
                        <a 
                            href="#preschool-form" 
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

            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-xl font-bold text-center pb-4">
                    What Parents Can Expect From Our Preschool Program
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
                            Indoor Playground Access
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
                            Opportunities to Build Friendships
                        </p>
                    </div>
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
                                Preschoolers are encouraged to make choices, take on age-appropriate responsibilities, and become more confident in doing things for themselves.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Learning Through Play
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Children learn best when they're engaged and having fun. Play gives preschoolers opportunities to explore, experiment, create, and discover new ideas.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex md:flex-row flex-col gap-4">
                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Building Social Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                Through group activities and everyday interactions, children learn to communicate, cooperate, build friendships, and navigate new social experiences.
                            </CardContent>
                        </Card>

                        <Card className="flex-1 flex">
                            <CardHeader className="text-start">
                                <CardTitle>
                                    Developing Confidence
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex justify-end items-end lg:justify-center lg:items-start">
                                With encouragement from caring educators, children are supported in trying new things, expressing themselves, and taking pride in what they can accomplish.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>  

            <div className="flex flex-col justify-center items-center w-3/4 lg:py-4 py-4 lg:my-4 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Supporting Your Preschooler's Development
                </h2>
                <div className="flex flex-col gap-4 lg:justify-evenly justify-center items-center w-full">
                    <p className="flex flex-col justify-center items-center w-full text-center">
                        The preschool years are an exciting time of growing independence, curiosity, and self-discovery. Children are developing new ways to communicate, interact with others, solve problems, and understand the world around them. At Kidz Korner, we provide experiences that support these areas of development through play, hands-on activities, creative expression, and everyday interactions. Our educators encourage children to explore, ask questions, make choices, and take on new challenges while providing the guidance and reassurance they need along the way.
                    </p>
                    <div className="flex flex-1 flex-col gap-4 w-full">
                        <div className="flex md:flex-row flex-col gap-4">
                            <Card>
                                <CardContent className="flex md:flex-row flex-col gap-2">
                                    <div className="flex flex-col flex-1 gap-2">
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <BadgeCheck />
                                                <h2 className="font-bold">
                                                    Social & Emotional Development
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Children learn to recognize and express their feelings, build friendships, cooperate with others, and develop the confidence to participate in group experiences.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <HeartHandshake />
                                                <h2 className="font-bold">
                                                    Language & Communication
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Stories, conversations, songs, and everyday interactions help children expand their vocabulary, express their ideas, listen to others, and become confident communicators.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <GraduationCap />
                                                <h2 className="font-bold">
                                                    Cognitive Development
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Through puzzles, sorting, counting, patterns, problem-solving, and hands-on exploration, children develop early thinking and reasoning skills.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2">

                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <Palette />
                                                <h2 className="font-bold">
                                                    Physical Development
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Active play and hands-on activities help children build coordination, balance, fine-motor skills, and body awareness.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full">
                                            <div className="flex gap-2 text-primary">
                                                <ShieldCheck />
                                                <h2 className="font-bold">
                                                    Creativity & Self-Expression
                                                </h2>
                                            </div>
                                            <p className="text-start pl-8">
                                                Art, music, imaginative play, and creative activities give children opportunities to express themselves and explore their own ideas.
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

            <div className="flex flex-col justify-center items-center w-3/4 border-y lg:py-8 py-4 lg:my-8 my-4">
                <h2 className="text-xl font-bold text-center pb-4">
                    Frequently Asked Questions About Preschool Daycare
                </h2>
                <FAQAccordion faq={faq} />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4" id="preschool-form">
                <p className="flex text-center">
                    Ready to join us?
                </p>
                
                {/* TODO:MAKE THIS FORM PRESCHOOL SPECIFIC  */}
                {/* [DaycareForm type="preschool"] */}
                <DaycareForm />
            </div>

            <StructData schema={localBusinessSchema} />
            <StructData schema={breadcrumbSchema(breadCrumb)} />

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