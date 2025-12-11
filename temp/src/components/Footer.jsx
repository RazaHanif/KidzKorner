const Footer = () => {
  return (
    <div className="bg-red-500">
      <div className="bg-blue-500">
        <div className="bg-green-500">
          <div className="bg-yellow-500">
            <div className="text-xl">
              Contact Us
            </div>
            <div>
              <a 
                href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18"
              >
                150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3
              </a>
            </div>
            <div>
              <a 
                href="tel:+19058784697"
              >
                (905) 878-4697
              </a>
            </div>
            <div>
              <a 
                href="mailto:info@kidzkornermilton.com"
              >
                info@kidzkornermilton.com
              </a>
            </div>
            <div>
              <a 
                href="https://www.instagram.com/kidz.kornermilton/"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>

          <div className="bg-purple-500">
            <div className="text-xl">
                Child Care Hours</div>
            <div>
              Monday to Friday - 9:00am to 3:00pm
            </div>
            <div>
              After School | 3:00pm to 6:00pm
            </div>
          </div>

          <div className="bg-pink-500">
            <div className="text-xl">
              Indoor Playground Hours
            </div>
            <div>
              Drop In Play | Monday to Friday - 3:00pm to 6:00pm
            </div>
            <div>
              Parties | Saturday to Sunday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;