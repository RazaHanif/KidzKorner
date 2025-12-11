import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full bg-primary border-t border-chart-4">
      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="text-xl flex justify-center items-center w-full">
          Contact Us
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div>
            <a 
              href="tel:+19058784697"
              className="hover:underline flex flex-row gap-2"
            >
              <Phone />
              <div>
                (905) 878-4697
              </div>
            </a>
          </div>
          <div>
            <a 
              href="mailto:info@kidzkornermilton.com"
              className="hover:underline flex flex-row gap-2"
            >
              <Mail />
              <div>
                info@kidzkornermilton.com
              </div>
            </a>
          </div>
          <div>
            <a 
              href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18"
              className="hover:underline flex flex-row gap-2"
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
              className="hover:underline flex flex-row gap-2"
            >
              <Instagram />
              <div>
                Follow us on Instagram
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="border-r border-chart-4 md:flex hidden"></div>
      <div className="border-t border-chart-4 md:hidden flex"></div>


      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="text-xl flex justify-center items-center w-full">
          Child Care Hours
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div>
              Monday to Friday
            </div>
            <div className="hidden lg:flex">
              -
            </div>
            <div>
              9:00am to 3:00pm
            </div>
          </div>
        </div>
      </div>

      <div className="border-r border-chart-4 md:flex hidden"></div>
      <div className="border-t border-chart-4 md:hidden flex"></div>      

      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="text-xl flex justify-center items-center w-full">
          After School Hours
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div>
              Monday to Friday
            </div>
            <div className="hidden lg:flex">
              -
            </div>
            <div>
              3:00pm to 6:00pm
            </div>
          </div>
        </div>
      </div>

      <div className="border-r border-chart-4 md:flex hidden"></div>
      <div className="border-t border-chart-4 md:hidden flex"></div>

      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="text-xl flex justify-center items-center w-full">
          Indoor Playground Hours
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div>
              Monday to Friday
            </div>
            <div className="hidden lg:flex">
              -
            </div>
            <div>
              3:00pm to 6:00pm
            </div>
          </div>
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