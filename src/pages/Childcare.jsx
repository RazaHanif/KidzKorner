import ChildcareForm from "../components/ChildcareForm";

const Childcare = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <div className="text-3xl font-bold">
                    Child Care 
                </div>
                <div className="text-xl font-bold self-center">
                    Toddler, Preschool, & After School Programs
                </div>    
            </div>
            
            <div className="flex md:flex-row flex-col justify-evenly items-center w-3/4">
                <img 
                    src='/K_K_17.jpg'
                    alt='Kid making crafts'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                />
                <div className="flex flex-col justify-center items-center w-1/2">
                    Kidz Korner is a licensed child care centre. Our toddler, preschool, & after school programs provides a nurturing, engaging, and stimulating enviroment designed to support your child's growth and development
                    Our curriculum is guided by the Ministry of Education's "How Does Learning Happen?" (HDLH) framework, focusing on the well-being, engagment expression and belonging of each individual child.
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="text-xl font-bold self-center">
                    Program Options - Full & Half Days
                </div>
                <div className="flex md:flex-row flex-col justify-evenly items-center w-full">
                    <div className="flex flex-col justify-center">
                        <div className="text-lg">
                            Full Day 9:00 am - 3:00 pm
                        </div>
                        <div className="text-lg">
                            Half Day - Morning 9:00 am - 11:30 am
                        </div>
                        <div className="text-lg">
                            Half Day - Afternoon  12:30 pm - 3:00 pm
                        </div>
                        <div className="text-lg">
                            After School  3:00 pm - 6:00 pm
                        </div>
                    </div>
                    <img 
                        src='/K_K_38.jpg'
                        alt='Kids doing an activity'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                    />
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-start w-3/4">
                <div className="text-xl font-bold self-center">
                    What We Offer
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start w-3/4 gap-1">
                        <div className="text-lg">
                            Engaging Learning Experiences
                        </div>
                        <div>
                            Our programs are designed to foster curiosity, exploration, and imagination. Educators create meaningful invitations based on children's interests, promoting problem-solving, self-regulation, and social-emotional development.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-3/4 gap-1">
                        <div className="text-lg">
                            Interactive & Play-Based Learning
                        </div>
                        <div>
                            Children engage in group time, open play, indoor playground exploration, and hands-on activities that support learning through play.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-3/4 gap-1">
                        <div className="text-lg">
                            Parent Communication & Learning Documentation
                        </div>
                        <div>
                            We believe in strong parent-educator partnerships. Children's learning is documented and shared within the center and through a secure mobile app. Parents will receive daily updates about their child's day. 
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-3/4 gap-1">
                        <div className="text-lg">
                            Nutritious Meals & Snacks
                        </div>
                        <div>
                            Delicious and balanced hot lunches and snacks are prepared on-site using a family-style dining approach. We accommodate dietary restrictions and maintain a peanut/nut-free environment. 

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-3/4 gap-1">
                        <div className="text-lg">
                            Mixed-Age Classrooms
                        </div>
                        <div>
                            Our mixed-age groupings create a family-like environment, allowing older children to develop leadership skills while younger children benefit from peer mentorship.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-3/4 gap-1">
                        <div className="text-lg">
                            Our Educators
                        </div>
                        <div>
                            Our team of qualified Early Childhood Educators (ECEs) provides a safe, engaging, and responsive learning environment. They encourage choice, independence, and active play, fostering a love for learning from an early age.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-1">
                <div className="flex justify-center items-center">
                    Ready to join us? Contact us today to learn more about our preschool programs or schedule a visit! 
                </div>

                <ChildcareForm/>
            </div>

        </div>
    );
}
  
export default Childcare;