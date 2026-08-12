import ContactForm from "../components/ContactForm";
import WorkshopForm from "../components/WorkshopForm";
import CampForm from "../components/CampForm";
import DaycareForm from "../components/DaycareForm";
import PartyForm from "../components/PartyForm";

const Test = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            {/* Workshop Form */}
            <div className="flex flex-col justify-center items-center w-full border">
                <h2 className="text-xl font-bold">Work Shop Forms</h2>
                <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="toddler-form">
                    <WorkshopForm />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full border">

                <h2 className="text-xl font-bold">Camp Forms</h2>

                {/* Camp */}
                <div className="flex flex-col justify-center items-center w-9/10 lg:w-3/4 gap-6">
                    <p className="flex text-center">
                        Camp
                    </p> 
                    <CampForm/>
                </div>
                
                {/* WinterCamp */}
                <div 
                    className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:pt-12 pt-8 lg:mt-12 mt-8"
                    id="winter-camp-form"    
                >
                    <p className="flex text-center">
                        Winter Break Camp
                    </p>

                    {/* TODO:MAKE THIS FORM WINTER SPECIFIC  */}
                    {/* [CampForm type="winter"] */}
                    <CampForm/>
                </div>

                {/* SummerCamp */}
                <div 
                    className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:pt-12 pt-8 lg:mt-12 mt-8"
                    id="summer-camp-form"    
                >
                    <p className="flex text-center">
                        Summer Break Camp 
                    </p>

                    {/* TODO:MAKE THIS FORM SUMMER SPECIFIC  */}
                    {/* [CampForm type="summer"] */}
                    <CampForm/>
                </div>

                {/* PA Day Camp */}
                <div 
                    className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:pt-12 pt-8 lg:mt-12 mt-8"
                    id="pa-day-form"
                >
                    <p className="flex text-center">
                        PA Day Camp?
                    </p>

                    {/* TODO:MAKE THIS FORM PA DAY SPECIFIC  */}
                    {/* [CampForm type="pa"] */}
                    <CampForm/>
                </div>

                {/* March Break Camp */}
                <div
                    className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:pt-12 pt-8 lg:mt-12 mt-8"
                    id="march-camp-form"
                >
                    <p className="flex text-center">
                        March Break Camp
                    </p>

                    {/* TODO:MAKE THIS FORM MARCH SPECIFIC  */}
                    {/* [CampForm type="march"] */}
                    <CampForm/>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full border">


                <h2 className="text-xl font-bold">Daycare Forms</h2>

                {/* Daycare */}
                <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:py-12 py-8 lg:my-12 my-8">
                    <p className="flex text-center">
                        Regular Daycare
                    </p>
                    <DaycareForm/>
                </div>
                
                {/* Toddler Daycare */}
                <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="toddler-form">
                    <p className="flex text-center">
                        Toddler Daycare
                    </p>
                    
                    {/* TODO:MAKE THIS FORM TODDLER SPECIFIC  */}
                    {/* [DaycareForm type="toddler"] */}
                    <DaycareForm />
                </div>

                {/* Preschool Daycare */}
                <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="preschool-form">
                    <p className="flex text-center">
                        Preschool Daycare
                    </p>
                    
                    {/* TODO:MAKE THIS FORM PRESCHOOL SPECIFIC  */}
                    {/* [DaycareForm type="preschool"] */}
                    <DaycareForm />
                </div>

                {/* Before & After School Daycare */}
                <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="before-after-form">
                    <p className="flex text-center">
                        Before & After School Daycare
                    </p>
                    
                    {/* TODO:MAKE THIS FORM BEFORE&AFTER SPECIFIC  */}
                    {/* [DaycareForm type="before_after"] */}
                    <DaycareForm />
                </div>

            </div>


            <div className="flex flex-col justify-center items-center w-full border">


                <h2 className="text-xl font-bold">Party Forms</h2>

                {/* Parties */}
                <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 lg:pt-12 pt-8 lg:mt-12 mt-8">
                    <p className="flex text-center">
                        Ready to Party? Contact us today to secure your date! 
                    </p>
                    <PartyForm />
                </div>

            </div>

            




            {/* Contact Us */}
            <div className="flex flex-col justify-center items-center w-9/10 lg:w-3/4 gap-6 lg:pt-12 pt-8 lg:mt-12 mt-8" id="contact-form">
                <h2 className="w-full flex justify-center items-center font-bold text-xl flex-1">
                    Book a Tour or Ask a Question
                </h2>
                <p className="flex text-center lg:w-3/4">
                    Whether you're looking for daycare, preschool, camps, or birthday parties, our team is happy to answer your questions.
                    Complete the form below and we'll get back to you as soon as possible.
                </p> 
                <ContactForm/>
            </div>


        </div>
    )

}
  
export default Test;