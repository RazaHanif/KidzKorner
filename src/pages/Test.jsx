import { Shapes } from "lucide-react";
import Image from "@/components/Image";

const Test = () => {
    return (
        <>
            {/* Workshop Form */}
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="toddler-form">
                <WorkshopForm/>
            </div>

            {/* Winter Camp */}
            <div 
                className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 border-t lg:pt-12 pt-8 lg:mt-12 mt-8"
                id="winter-camp-form"    
            >
                <p className="flex text-center">
                    Interested in Winter Break Camp?
                </p>

                {/* TODO:MAKE THIS FORM WINTER SPECIFIC  */}
                {/* [CampForm type="winter"] */}
                <CampForm/>
            </div>

            {/* Toddler Daycare */}
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="toddler-form">
                <p className="flex text-center">
                    Ready to join us?
                </p>
                
                {/* TODO:MAKE THIS FORM TODDLER SPECIFIC  */}
                {/* [DaycareForm type="toddler"] */}
                <DaycareForm />
            </div>

            {/* SummerCamp */}
            <div 
                className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 border-t lg:pt-12 pt-8 lg:mt-12 mt-8"
                id="summer-camp-form"    
            >
                <p className="flex text-center">
                    Interested in Summer Camp?
                </p>

                {/* TODO:MAKE THIS FORM SUMMER SPECIFIC  */}
                {/* [CampForm type="summer"] */}
                <CampForm/>
            </div>

            {/* Preschool Daycare */}
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="preschool-form">
                <p className="flex text-center">
                    Ready to join us?
                </p>
                
                {/* TODO:MAKE THIS FORM PRESCHOOL SPECIFIC  */}
                {/* [DaycareForm type="preschool"] */}
                <DaycareForm />
            </div>

            {/* Parties */}
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 border-t lg:pt-12 pt-8 lg:mt-12 mt-8">
                <p className="flex text-center">
                    Ready to Party? Contact us today to secure your date! 
                </p>
                <PartyForm />
            </div>

            {/* PA Day Camp */}
            <div 
                className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6 border-t lg:pt-12 pt-8 lg:mt-12 mt-8"
                id="pa-day-form"
            >
                <p className="flex text-center">
                    Interested in PA Day Camp?
                </p>

                {/* TODO:MAKE THIS FORM PA DAY SPECIFIC  */}
                {/* [CampForm type="pa"] */}
                <CampForm/>
            </div>


            
        </>
    )

}
  
export default Test;