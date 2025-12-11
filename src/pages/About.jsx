import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

const About = () => {

    const url = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API}&q=Kidz+Korner+Milton+Ontario`

    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full">
            <div className="flex flex-col md:flex-row justify-center items-center w-3/4 m-4">
                <div className="flex-1 flex flex-col justify-center items-start w-3/4 gap-2">
                    <div 
                        className="text-xl font-bold"
                    >
                        Contact Us
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-2">
                        <div>
                            <a 
                                href="tel:+19058784697"
                                className="hover:underline flex flex-row"
                            >
                                <Phone className="w-8"/>
                                <div className="font-semibold">
                                    (905) 878-4697
                                </div>
                            </a>
                        </div>
                        <div>
                            <a 
                                href="mailto:info@kidzkornermilton.com"
                                className="hover:underline flex flex-row"
                            >   
                                <Mail className="w-8"/>
                                <div className="font-semibold">
                                    info@kidzkornermilton.com
                                </div>
                            </a>
                        </div>
                        <div>
                            <a 
                                href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18"
                                className="hover:underline flex flex-row"
                            >
                                <MapPin className="w-8"/>
                                <div className="font-semibold">
                                    150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-start w-3/4 gap-2">
                    <div 
                        className="text-xl font-bold"
                    >
                        Hours
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-2">
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

            <div className="flex justify-center items-center">
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
                    src={url}
                />
            </div>
            
            <div className="flex justify-center items-center w-full">
                <ContactForm/>
            </div>
        </div>
    );
}
  
export default About;