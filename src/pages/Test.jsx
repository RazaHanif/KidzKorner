import CampForm from "../components/forms/CampForm";
import ContactForm from "../components/forms/ContactForm";
import DaycareForm from "../components/forms/DaycareForm";
import PartyForm from "../components/forms/PartyForm";
import WorkshopForm from "../components/forms/WorkshopForm";

const Test = () => {
    return (
        <div className="flex flex-col gap-16 justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border py-16">
                <h2 className="text-xl font-bold">Work Shop Forms</h2>

                {/* Workshop Form */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Workshop Form
                    </p>
                    <WorkshopForm />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border py-16">
                <h2 className="text-xl font-bold">Camp Forms</h2>

                {/* Camp */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Camp
                    </p>
                    <CampForm />
                </div>

                {/* WinterCamp */}
                {/* TODO:MAKE THIS FORM WINTER SPECIFIC  */}
                {/* [CampForm type="winter"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Winter Break Camp
                    </p>
                    <CampForm campType={"winter"}/>
                </div>

                {/* SummerCamp */}
                {/* TODO:MAKE THIS FORM SUMMER SPECIFIC  */}
                {/* [CampForm type="summer"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Summer Break Camp
                    </p>
                    <CampForm campType={"summer"}/>
                </div>

                {/* PA Day Camp */}
                {/* TODO:MAKE THIS FORM PA DAY SPECIFIC  */}
                {/* [CampForm type="pa"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        PA Day Camp?
                    </p>
                    <CampForm campType={"pa"}/>
                </div>

                {/* March Break Camp */}
                {/* TODO:MAKE THIS FORM MARCH SPECIFIC  */}
                {/* [CampForm type="march"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        March Break Camp
                    </p>
                    <CampForm campType={"march"}/>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border py-16">
                <h2 className="text-xl font-bold">Daycare Forms</h2>

                {/* Daycare */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Regular Daycare
                    </p>
                    <DaycareForm />
                </div>

                {/* Toddler Daycare */}
                {/* TODO:MAKE THIS FORM TODDLER SPECIFIC  */}
                {/* [DaycareForm type="toddler"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Toddler Daycare
                    </p>
                    <DaycareForm />
                </div>

                {/* Preschool Daycare */}
                {/* TODO:MAKE THIS FORM PRESCHOOL SPECIFIC  */}
                {/* [DaycareForm type="preschool"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Preschool Daycare
                    </p>
                    <DaycareForm />
                </div>

                {/* Before & After School Daycare */}
                {/* TODO:MAKE THIS FORM BEFORE&AFTER SPECIFIC  */}
                {/* [DaycareForm type="before_after"] */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Before & After School Daycare
                    </p>
                    <DaycareForm />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border py-16">
                <h2 className="text-xl font-bold">Party Form</h2>

                {/* Parties */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Party Form
                    </p>
                    <PartyForm />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-3/4 w-9/10 border py-16">
                <h2 className="text-xl font-bold">Contact Form</h2>

                {/* Contact Us */}
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="flex justify-center items-center w-full">
                        Contact Form
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Test;
