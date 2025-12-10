import ChildcareForm from "../components/ChildcareForm";

const Childcare = () => {
    return (
        <div className="flex flex-col justify-center gap-2 w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <h3>
                    Child Care 
                </h3>
                <h5>
                    Toddler, Preschool, & After School Programs
                </h5>    
            </div>
            
            <div className="flex flex-col justify-center items-start w-full">
                <p>
                    Kidz Korner is a licensed child care centre. Our toddler, preschool, & after school programs provides a nurturing, engaging, and stimulating enviroment designed to support your child's growth and development
                </p>
                <p>
                    Our curriculum is guided by the Ministry of Education's "How Does Learning Happen?" (HDLH) framework, focusing on the well-being, engagment expression and belonging of each individual child.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
                <h5>
                    Program Options - Full & Half Days
                </h5>
                <div className="flex flex-col justify-center items-start w-full">
                    <p>
                        Full Day 9:00 am - 3:00 pm
                    </p>
                    <p>
                        Half Day - Morning 9:00 am - 11:30 am
                    </p>
                    <p>
                        Half Day - Afternoon  12:30 pm - 3:00 pm
                    </p>
                    <p>
                        After School  3:00 pm - 6:00 pm
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <h5>
                    What We Offer
                </h5>
                <div className="flex flex-col justify-center items-start w-full">
                    <h6>
                        Engaging Learning Experiences
                    </h6>
                    <p>
                        Our programs are designed to foster curiosity, exploration, and imagination. Educators create meaningful invitations based on children's interests, promoting problem-solving, self-regulation, and social-emotional development.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <h6>
                        Interactive & Play-Based Learning
                    </h6>
                    <p>
                        Children engage in group time, open play, indoor playground exploration, and hands-on activities that support learning through play.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <h6>
                        Parent Communication & Learning Documentation
                    </h6>
                    <p>
                        We believe in strong parent-educator partnerships. Children's learning is documented and shared within the center and through a secure mobile app. Parents will receive daily updates about their child's day. 
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <h6>
                        Nutritious Meals & Snacks
                    </h6>
                    <p>
                        Delicious and balanced hot lunches and snacks are prepared on-site using a family-style dining approach. We accommodate dietary restrictions and maintain a peanut/nut-free environment. 

                    </p>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <h6>
                        Mixed-Age Classrooms
                    </h6>
                    <p>
                        Our mixed-age groupings create a family-like environment, allowing older children to develop leadership skills while younger children benefit from peer mentorship.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <h6>
                        Our Educators
                    </h6>
                    <p>
                        Our team of qualified Early Childhood Educators (ECEs) provides a safe, engaging, and responsive learning environment. They encourage choice, independence, and active play, fostering a love for learning from an early age.
                    </p>
                </div>
            </div>

            <div>
                <p>
                    Ready to join us? Contact us today to learn more about our preschool programs or schedule a visit! 
                </p>

                <ChildcareForm/>
            </div>

        </div>
    );
}
  
export default Childcare;