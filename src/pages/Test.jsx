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

            {/* Toddler  */}
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 gap-6" id="toddler-form">
                <p className="flex text-center">
                    Ready to join us?
                </p>
                
                {/* TODO:MAKE THIS FORM TODDLER SPECIFIC  */}
                {/* [DaycareForm type="toddler"] */}
                <DaycareForm />
            </div>


        </>
    )

}
  
export default Test;