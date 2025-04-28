import ContactForm from "../components/contactForm";

const About = () => {

    const url = `https://www.google.com/maps/embed/v1/place?key=$AIzaSyDPny6dN9B3rJv93XQIYh3lY4DDlGC7boU&q=${encodeURIComponent("Kidz Korner Milton")}`

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
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    src="https://www.google.com/maps/embed/v1/place?key=$AIzaSyDPny6dN9B3rJv93XQIYh3lY4DDlGC7boU&q=Kidz+Korner+Milton"
                />
            </div>
        </>
    );
}
  
export default About;