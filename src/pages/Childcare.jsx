import ChildcareForm from "@/components/ChildcareForm";
import ChildcareTimeTable from "@/components/ChildcareTimeTable";
import TimeTable from "@/components/TimeTable";

const Childcare = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <div className="text-3xl font-bold">
                    Child Care 
                </div>
                <div className="text-xl font-bold text-center">
                    Toddler, Preschool, and Before/After School Programs
                </div>    
            </div>
            
            <div className="flex md:flex-row flex-col justify-evenly items-center w-3/4">
                <img 
                    src='/K_K_38.jpg'
                    alt='Kids doing an activity'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                />
                <div className="flex flex-col justify-center md:w-1/2 w-full m-4 text-justify">
                    Kidz Korner is a licensed child care centre dedicated to providing high quality early learning and care. We offer toddler, preschool, & before/after school programs. Our curriculum is guided by the Ministry of Education's "How Does Learning Happen?" (HDLH) framework, focusing on the well-being, engagment expression and belonging of each individual child. Our experienced early childhood educators strive to build strong relationships with children and families, ensuring individualized attention and consistent communication. With high quality programs, qualified educators and a vibrant learning space, including our most unique feature, the indoor playground. Kidz Korner provides a balanced approach to learning, play, and care. We are commited to supporting families and helping every child thrive.
                </div>
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
                    className="w-3xs rounded-lg border-2 shadow-lg"
                    />
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-start w-3/4">
                <div className="text-xl font-bold self-center">
                    What We Offer
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col justify-center items-start md:w-3/4 gap-1">
                        <div className="text-lg">
                            Engaging Learning Experiences
                        </div>
                        <div>
                            Our programs are designed to foster curiosity, exploration, and imagination. Educators create meaningful invitations based on children's interests, promoting problem-solving, self-regulation, and social-emotional development.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start md:w-3/4 gap-1">
                        <div className="text-lg">
                            Interactive & Play-Based Learning
                        </div>
                        <div>
                            Children engage in group time, open play, indoor playground exploration, and hands-on activities that support learning through play.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start md:w-3/4 gap-1">
                        <div className="text-lg">
                            Parent Communication & Learning Documentation
                        </div>
                        <div>
                            We believe in strong parent-educator partnerships. Children's learning is documented and shared within the center and through a secure mobile app. Parents will receive daily updates about their child's day. 
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start md:w-3/4 gap-1">
                        <div className="text-lg">
                            Nutritious Meals & Snacks
                        </div>
                        <div>
                            Delicious and balanced hot lunches and snacks are prepared on-site using a family-style dining approach. We accommodate dietary restrictions and maintain a peanut/nut-free environment. 

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start md:w-3/4 gap-1">
                        <div className="text-lg">
                            Mixed-Age Classrooms
                        </div>
                        <div>
                            Our mixed-age groupings create a family-like environment, allowing older children to develop leadership skills while younger children benefit from peer mentorship.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start md:w-3/4 gap-1">
                        <div className="text-lg">
                            Our Educators
                        </div>
                        <div>
                            Our team of qualified Early Childhood Educators (ECEs) provides a safe, engaging, and responsive learning environment. They encourage choice, independence, and active play, fostering a love for learning from an early age.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-1 m-4 overflow-x-auto">
               <div className="text-xl font-bold self-center">
                    Kidz Korner Daily Routine
                </div>
                <div className="text-sm">
                    Here's what our day looks like!
                </div>
                <ChildcareTimeTable />
            </div>

            <div className="flex flex-col justify-center items-center md:w-3/4 gap-1">
                <div className="flex w-2/3 text-justify">
                    Ready to join us? Contact us today to learn more about our preschool programs or schedule a visit! 
                </div>

            </div>

            <div className="relative w-full">
                <ChildcareForm/>
            </div>

        </div>
    );
}
  
export default Childcare;