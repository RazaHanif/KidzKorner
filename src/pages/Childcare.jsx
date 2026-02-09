import ChildcareForm from "@/components/ChildcareForm";
import ChildcareTimeTable from "@/components/ChildcareTimeTable";
import TimeTable from "@/components/TimeTable";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Childcare = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full text-justify">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <div className="text-3xl font-bold">
                    Child Care 
                </div>
                <div className="text-xl font-bold text-center">
                    Toddler, Preschool, and Before/After School Programs
                </div>    
            </div>
            
            <div className="flex md:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <img 
                    src='/K_K_38.jpg'
                    alt='Kids doing an activity'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                />
                <img 
                    src='/K_K_38.jpg'
                    alt='Kids doing an activity'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                />
                <img 
                    src='/K_K_38.jpg'
                    alt='Kids doing an activity'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                />
            </div>

            <div className="flex md:flex-row flex-col justify-evenly items-center w-3/4">
                <Card>
                    <CardHeader className="hidden">
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Childcare
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            Childcare
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col justify-center items-center w-full text-center">
                            <span>
                                Kidz Korner is a licensed child care centre dedicated to providing high quality early learning and care. We offer toddler, preschool, & before/after school programs. Our curriculum is guided by the
                            </span>
                            <span className="italic self-center">
                                Ministry of Education's "How Does Learning Happen?" (HDLH) 
                            </span>
                            <span>
                                framework. Focusing on the well-being, engagement, expression and belonging of each individual child. 
                                Our educators provide a high quality programs and a vibrant learning space, including our most unique feature, the indoor playground.
                                We provide a variety of care options to meet each families unique needs.
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="text-xl font-bold text-center">
                    Program Options - Full Time & Part Time Care
                </div>
                <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center w-full">
                    <div className="flex flex-col justify-center">
                        <TimeTable />
                    </div>
                    <img 
                    src='/K_K_17.jpg'
                    alt='Kid playing with blocks'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center w-3/4">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            What We Offer!
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            What we offer
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex md:flex-row flex-col justify-evenly text-center">
                            <div className="md:border-r-2 md:border-b-0 border-b-2 p-4">
                                Interactive & Play Based Learning
                            </div>
                            <div className="md:border-r-2 md:border-b-0 border-b-2 p-4">
                                Weekly Art & Cooking Classes
                            </div>
                            <div className="md:border-r-2 md:border-b-0 border-b-2 p-4">
                                Strong Parent Teacher Communication
                            </div>
                            <div className="md:border-r-2 md:border-b-0 border-b-2 p-4">
                                Monthly Progress Reports
                            </div>
                            <div className="md:border-r-2 md:border-b-0 border-b-2 p-4">
                                Freshly cooked Nutritious Meals & Snacks
                            </div>
                            <div className="p-4">
                                Registered Early Childhood Educators (RECE)
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            
            <div className="flex md:flex-row flex-col justify-between items-center w-3/4 gap-4">
                    <img 
                    src='/K_K_17.jpg'
                    alt='Kid playing with blocks'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                    />
                    <img 
                    src='/K_K_17.jpg'
                    alt='Kid playing with blocks'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                    />
                    <img 
                    src='/K_K_17.jpg'
                    alt='Kid playing with blocks'
                    className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
                    />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-1 m-4 overflow-x-auto">
               <div className="text-xl font-bold self-center">
                    Kidz Korner Daily Routine
                </div>
                <div className="text-sm">
                    Here's what our day looks like!
                </div>
                <div className="md:w-3/4">
                    <ChildcareTimeTable />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:w-3/4 gap-1">
                <div className="flex w-2/3">
                    Ready to join us? Contact us today to learn more about our preschool programs and schedule a tour of our facility! 
                </div>

            </div>

            <div className="relative w-full border">
                <ChildcareForm/>
            </div>

        </div>
    );
}
  
export default Childcare;