const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="flex justify-center items-center">
                <img 
                src='/logo.png'
                alt='Home'
                className="w-md"
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-2xl">
                    Alittle about us.
                </div>
                <div className="">
                    Kidz Korner is a family-owned business located in the heart of Milton, Ontario. 
                    Our commitment to providing loving, nurturing care has earned us the trust of many families and community resources, creating a multi-generational legacy.
                </div>
                <div className="">
                    At Kidz Korner, we believe in child-led learning.
                    By observing, engaging with, and reflecting on each child's experiences, we create a learning environment that is both inclusive and adaptable to each child's needs.
                    Our dedicated educators work closely with families to foster a strong sense of connection and support.
                </div>
                <div className="">
                    With decades of experience in early childhood education, we are proud to help families navigate the important developmental milestones of the early years. We are here to support your child's growth, development, and well-being every step of the way.
                </div>
            </div>
        </div>
    );
}
  
export default Home;