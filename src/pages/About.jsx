import ContactForm from "../components/contactForm";

const About = () => {

    const API_KEY = process.env.GOOGLE_MAPS_KEY
    const address = "Kidz Korner Milton"
    const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(address)}`

    return (
        <>
            <div className="main">
                <div className="contact-left">
                    <h4>Contact Us</h4>
                    <p>
                    <a href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18">
                        150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3
                    </a>
                    </p>
                    <p>
                    <a href="tel:+19058784697">
                        (905) 878-4697
                    </a>
                    </p>
                    <p>
                    <a href="mailto:info@kidzkornermilton.com">
                        info@kidzkornermilton.com
                    </a>
                    </p>
                </div>
                <div className="contact-right">
                    <h4>Hours</h4>
                    <p>
                        Child Care: Monday to Friday - 9am to 3pm
                    </p>
                    <p>
                        Indoor Playground: Monday to Friday - 9am to 3pm
                    </p>
                    <p>
                        Playground open for parties - Saturday & Sunday
                    </p>
                </div>
            </div>
            <div className="contact-form">
                <ContactForm/>
            </div>
            <div className="gmaps">
                <iframe
                    title="Google Maps"
                    width="600"
                    height="450"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                    &q=Space+Needle,Seattle+WA"
                />
            </div>
        </>
    );
}
  
export default About;