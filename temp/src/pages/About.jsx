import ContactForm from "../components/ContactForm";

const About = () => {

    const url = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API}&q=Kidz+Korner+Milton+Ontario`

    return (
        <div className="flex flex-col justify-center w-full border-2 border-red-500">
            <div className="flex flex-col md:flex-row justify-center items-center w-full border-2 border-blue-500">
                <div className="flex-1 p-2 border-2 border-amber-500 w-full flex flex-col justify-center items-start">
                    <h4 className="self-center">
                        Contact Us
                    </h4>
                    <p>
                        <a 
                            href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18"
                        >
                            150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3
                        </a>
                    </p>
                    <p>
                        <a 
                            href="tel:+19058784697"
                        >
                            (905) 878-4697
                        </a>
                    </p>
                    <p>
                        <a 
                            href="mailto:info@kidzkornermilton.com"
                        >
                            info@kidzkornermilton.com
                        </a>
                    </p>
                </div>

                <div className="flex-1 p-2 border-2 border-amber-500 w-full flex flex-col justify-center items-start">
                    <h4 className="self-center">
                        Hours
                    </h4>
                    <p>
                        Child Care: Monday to Friday - 9am to 3pm
                    </p>
                    <p>
                        After Schhol: Monday to Friday - 3pm to 6pm
                    </p>
                    <p>
                        Indoor Playground Drop In: Monday to Friday - 3pm to 6pm
                    </p>
                    <p>
                        Playground Open For Parties - Saturday & Sunday
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center border-2 border-pink-600">
                <iframe
                    title="Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    src={url}
                />
            </div>
            
            <div className="flex justify-center items-center border-2 border-green-500">
                <ContactForm/>
            </div>
        </div>
    );
}
  
export default About;