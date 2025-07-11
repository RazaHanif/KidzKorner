import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 contact-us">
            <h5>Contact Us</h5>
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
            <p>
              <a href="https://www.instagram.com/kidz.kornermilton/">
                Follow us on Instagram
              </a>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Child Care Hours</h5>
            <p>Monday to Friday - 9:00am to 3:00pm</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Indoor Playground Hours</h5>
            <p>Monday to Friday - 9:00am to 3:00pm</p>
            <p>Saturday to Sunday - Parties Only</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;