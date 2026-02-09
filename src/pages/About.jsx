import ContactForm from "@/components/ContactForm";
import ContactUsTable from "../components/ContactUsTable";
import HoursTimeTable from "../components/HoursTimeTable";

const About = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full text-justify">
            <div className="flex flex-col md:flex-row justify-center items-center w-3/4 m-4 gap-4">
                <div>
                    <ContactUsTable />
                </div>

                <div>
                    <img 
                        src='/K_K_2.jpg'
                        alt='Kid making silly face'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                </div>

                <div>
                    <HoursTimeTable />
                </div>

                <div className="flex-1 flex flex-col justify-center items-center w-3/4 gap-2">
                    <div 
                        className="text-xl font-bold md:self-end text-center"
                    >
                        Hours
                    </div>
                    <div className="flex flex-col justify-center items-end md:text-end w-full gap-2">
                        <div className="font-semibold">
                            Child Care: Monday to Friday - 9am to 3pm
                        </div>
                        <div className="font-semibold">
                            After Schhol: Monday to Friday - 3pm to 6pm
                        </div>
                        <div className="font-semibold">
                            Indoor Playground Drop In: Monday to Friday - 3pm to 6pm
                        </div>
                        <div className="font-semibold">
                            Playground Open For Parties - Saturday & Sunday
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center md:w-[600px] w-full rounded-lg border-2 shadow-lg overflow-hidden">
                <iframe
                    title="Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API}&q=Kidz+Korner+Milton+Ontario`}
                    className="border-4"
                />
            </div>
            
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <ContactForm/>
            </div>
        </div>
    );
}
  
export default About;