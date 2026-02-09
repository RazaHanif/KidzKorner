import Image from "../components/Image";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className="font-bold text-6xl font-serif text- animate-bounce absolute bg-primary p-8">
                TEST THE FORMS
            </div>
            <div className="md:hidden flex flex-col justify-center items-center w-full mb-4">
                <div className="md:hidden text-3xl font-bold font-serif">
                    Welcome to Kidz Korner
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:w-3/4 w-full text-justify">
                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                    <Image src='/K_K_39.jpg' alt='Kidz Korner Store Front' />
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <div className="hidden md:block text-3xl font-bold self-center font-serif">
                            Welcome to Kidz Korner
                        </div>
                        
                        <div className="w-full flex justify-center items-center m-4 flex-1">
                                Kidz Korner is a family-owned business located in the heart of Milton, Ontario.
                                We offer licensed high quality child care for toddlers, preschoolers, before / after school programs, and licensed school age camps.
                                Camps are offered during PA / PD days, March breaks, Summer breaks, and Winter breaks.
                                Our commitment to providing loving, nurturing care has earned us the trust of many families and community members, creating a multi-generational legacy.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Home;