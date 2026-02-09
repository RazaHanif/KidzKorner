import PlaygroundAccordion from "@/components/PlaygroundAccordion";

const Playground = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4 text-justify">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-3xl font-bold">
                    Drop-In Fun!
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    Looking for a fun and safe indoor space for your child to play? Our indoor playground is open for drop-in play from Monday to Friday. It includes a variety of skill-building play areas for your child to explore and enjoy. The space is infant and toddler friendly. Come on in to escape from the heat, cold, rain or snow.
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-evenly items-center w-3/4">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Title
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            title
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row justify-around">
                            Kidz Korner is a licensed child care centre dedicated to providing high quality early learning and care. We offer toddler, preschool, & before/after school programs. Our curriculum is guided by the Ministry of Education's "How Does Learning Happen?" (HDLH) framework, focusing on the well-being, engagement, expression and belonging of each individual child. 
                            Our educators provide a high quality programs and a vibrant learning space, including our most unique feature, the indoor playground.
                            We provide a variety of care options to meet each families unique needs.
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div>

                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                    <img 
                        src='/K_K_20.jpg'
                        alt='Play Structure'
                        className="w-xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <img 
                        src='/K_K_30.jpg'
                        alt='Kids on climbing structure'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <img 
                        src='/K_K_20.jpg'
                        alt='Play Structure'
                        className="w-xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                </div>

            </div>
            <div className="flex flex-col justify-center items-center w-3/4 mt-4">
                <PlaygroundAccordion />
            </div>
        </div>
    );
}
  
export default Playground;