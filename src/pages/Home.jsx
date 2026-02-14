import Image from "@/components/Image";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className="lg:hidden flex flex-col justify-center items-center w-full mb-4">
                <h1 className="lg:hidden text-3xl font-bold font-serif text-center">
                    Welcome to Kidz Korner
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                    <Image src='/K_K_39.jpg' alt='Kidz Korner Milton, Ontario Store Front' w="w-md"/>
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h1 className="hidden lg:block text-3xl font-bold self-center font-serif">
                            Welcome to Kidz Korner
                        </h1>
                        
                        <p className="w-full flex justify-center items-center m-4 flex-1">
                                Kidz Korner is a family-owned business located in the heart of Milton, Ontario.
                                We offer licensed high quality child care for toddlers, preschoolers, before / after school programs, and licensed school age camps.
                                Camps are offered during PA / PD days, March breaks, Summer breaks, and Winter breaks.
                                Our commitment to providing loving, nurturing care has earned us the trust of many families and community members, creating a multi-generational legacy.
                        </p>

                        <h2 className="sr-only">Our Location</h2>
                        <p className="sr-only">
                            Kidz Korner proudly serves families across Milton, Ontario, including nearby neighborhoods such as Clarke, Willmott, Scott, and surrounding areas near Derry Road and Bronte Street. Our licensed childcare centre is conveniently located to support busy parents looking for trusted daycare close to home.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Home;