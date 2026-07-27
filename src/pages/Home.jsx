import Image from "@/components/Image";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className=" flex flex-col justify-center items-center w-full mb-4">
                <h1 className=" text-3xl font-bold font-serif text-center">
                    Licensed Daycare & Childcare in Milton
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                    <Image src='/K_K_39.jpg' alt='Kidz Korner Milton, Ontario Store Front' w="w-md"/>
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        {/* <h1 className="hidden lg:block text-3xl font-bold self-center font-serif">
                            Licensed Daycare & Childcare in Milton
                        </h1> */}
                        
                        {/* 
                            Licensed daycare in Milton
                            Childcare in Milton
                            Preschool in Milton
                            Toddler daycare
                            Before and after school care
                        */}
                        
                        {/* <p className="w-full flex justify-center items-center m-4 flex-1">
                                Kidz Korner is a family-owned business located in the heart of Milton, Ontario.
                                We offer licensed high quality child care for toddlers, preschoolers, before / after school programs, and licensed school age camps.
                                Camps are offered during PA / PD days, March breaks, Summer breaks, and Winter breaks.
                                Our commitment to providing loving, nurturing care has earned us the trust of many families and community members, creating a multi-generational legacy.
                        </p> */}

                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            Trusted Licensed Daycare
                        </h2>

                        <p className="w-full flex justify-center items-center m-4 flex-1"> 
                            Kidz Korner is a family-owned, licensed daycare in Milton, Ontario, providing high-quality childcare in Milton for local families.
                            We offer daycare for toddlers and preschoolers in Milton, before and after school care, and licensed school-age camps designed to support children at every stage of development. 
                            Our camps are available during PA/PD days, March Break, Summer Break, and Winter Break. 
                            Our commitment to providing loving, nurturing care has earned the trust of families throughout the community, creating a multi-generational legacy.

                        </p>

                        <h2 className="sr-only">Our Location</h2>
                        <p className="sr-only">
                            Kidz Korner proudly serves families across Milton, Ontario, including nearby neighborhoods such as Clarke, Willmott, Scott, and surrounding areas near Derry Road and Bronte Street. Our licensed childcare centre is conveniently located to support busy parents looking for trusted daycare close to home.
                        </p>
                    </div>
                </div>
            </div>
            <title>
              Licensed Childcare & Daycare in Milton, Ontario | Kidz Korner
            </title>
            <meta name="keywords" content="licensed daycare Milton, childcare Milton, early learning Milton, kids programs Milton, preschool Milton" />
            <meta name="description" content="Licensed childcare and daycare in Milton, Ontario. Kidz Korner provides a safe, nurturing environment for children to learn, grow, and thrive." />
            
            <meta 
                property="og:title" 
                content="Kidz Korner Milton" 
            />
            <meta 
                property="og:description" 
                content="Licensed childcare and daycare in Milton, Ontario. Kidz Korner provides a safe, nurturing environment for children to learn, grow, and thrive" 
            />
            <meta 
                property="og:type" 
                content="website" 
            />
            <meta 
                property="og:url" 
                content="https://www.kidzkornermilton.com/" 
            />
            
            <meta 
                property="og:image" 
                content="https://www.kidzkornermilton.com/og-image.jpg" 
            />
            <meta 
                property="og:image:alt" 
                content="Kidz Korner Milton, Ontario Store Front" 
            />
         </div>
    );
}
  
export default Home;