import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full bg-primary">
      <div className="flex-1 flex flex-col justify-center p-2 gap-2">
        <div className="text-xl flex justify-start items-start">
          Contact Us
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div>
            <a 
              href="tel:+19058784697"
              className="hover:underline"
            >
              (905) 878-4697
            </a>
          </div>
          <div>
            <a 
              href="mailto:info@kidzkornermilton.com"
              className="hover:underline"
            >
              info@kidzkornermilton.com
            </a>
          </div>
          <div>
            <a 
              href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18"
              className="hover:underline flex flex-row"
            >
              <MapPin />
              <div>
                150 Nipissing Rd. 10 & 11, Milton, ON
              </div>
            </a>
          </div>
          <div>
            <a 
              href="https://www.instagram.com/kidz.kornermilton/"
              className="hover:underline"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-2 gap-2">
        <div className="text-xl flex justify-start items-start">
          Child Care Hours
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div>
            Monday to Friday - 9:00am to 3:00pm
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-2 gap-2">
        <div className="text-xl flex justify-start items-start">
          After School Hours
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div>
            Monday to Friday - 3:00pm to 6:00pm
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col justify-center p-2 gap-2">
        <div className="text-xl flex justify-start items-start">
          Indoor Playground Hours
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div>
            Monday to Friday - 3:00pm to 6:00pm
          </div>
          <div>
            Saturday to Sunday - Parties Only
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;