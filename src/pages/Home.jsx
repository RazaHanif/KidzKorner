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
                    <Image src='/K_K_39.jpg' alt='Kidz Korner licensed daycare in  Milton' w="w-md"/>
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            Why Families Choose Kidz Korner
                        </h2>

                        <p className="w-full flex justify-center items-center m-4 flex-1"> 
                            Kidz Korner is a family-owned, licensed daycare in Milton, Ontario, providing high-quality childcare in Milton for local families.
                            We offer daycare for toddlers and preschoolers in Milton, before and after school care, and licensed school-age camps designed to support children at every stage of development. 
                            Our camps are available during PA/PD days, March Break, Summer Break, and Winter Break. 
                            Our commitment to providing loving, nurturing care has earned the trust of families throughout the community, creating a multi-generational legacy.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:w-3/4 w-full lg:text-justify text-center">
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            Licensed Daycare Conveniently Located in Milton
                        </h2>
                        <p className="w-full flex justify-center items-center m-4 flex-1">
                            Kidz Korner welcomes families from across Milton, including Clarke, Scott, Willmott, Beaty, Harrison, Dempsey, Timberlea, and nearby communities.
                            Our licensed childcare centre is conveniently located to support busy parents looking for trusted daycare close to home.

                            serving Milton families
                            located near Highway 401
                            close to downtown Milton
                            serving families throughout Halton Region
                        </p>

                        <p>
                            Kidz Korner is proud to serve Milton families with high-quality licensed childcare in a convenient, accessible location. Situated near Highway 401 and just minutes from downtown Milton, our daycare makes daily drop-offs and pick-ups easy for busy parents commuting throughout the area.
                        </p>

                        <p>

                        </p>

                    </div>

                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            Why Families Choose Kidz Korner
                        </h2>
                        <p className="w-full flex justify-center items-center m-4 flex-1">
                            licensed educators
                            safe environment
                            family owned
                            nurturing staff
                            learning through play
                            small class sizes (if applicable)
                            years serving Milton
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            Our Programs
                        </h2>
                        <p className="w-full flex justify-center items-center m-4 flex-1">
                            Briefly introduce
                            Toddler Daycare
                            Preschool
                            Before & After School Care
                            Summer Camps
                            March Break Camps
                            PA Day Programs

                            Each with a "Learn More" link.

                            This creates stronger internal linking.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <h2 className="w-full flex justify-center items-center m-4 font-bold flex-1">
                            Why Choose a Licensed Daycare?
                        </h2>
                        <p className="w-full flex justify-center items-center m-4 flex-1">
                            Parents search this constantly.
                            Explain:

                            Ministry regulations
                            safety
                            inspections
                            educator qualifications
                            curriculum

                            Google loves educational content.
                        </p>
                    </div>


                </div>
            </div>

            <title>
              Licensed Daycare in Milton, Ontario | Kidz Korner
            </title>

            <meta 
                name="keywords" 
                content="licensed daycare Milton, childcare Milton, early learning Milton, kids programs Milton, preschool Milton" 
            />
            <meta 
                name="description"
                content="Looking for a licensed daycare in Milton? Kidz Korner provides trusted childcare, toddler daycare, preschool programs, before and after school care, and licensed camps for local families."
                />
            
            <meta 
                property="og:title" 
                content="Kidz Korner Milton" 
                />
            <meta 
                property="og:description" 
                content="Looking for a licensed daycare in Milton? Kidz Korner provides trusted childcare, toddler daycare, preschool programs, before and after school care, and licensed camps for local families."
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
                content="Kidz Korner licensed daycare in  Milton" 
            />
         </div>
    );
}
  
export default Home;