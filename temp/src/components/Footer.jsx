const Footer = () => {
  return (
    <div className="flex flex-row justify-center w-full border-2 border-red-500">
      <div className="flex-1 border-2 border-black flex flex-col justify-center gap-2">
        <div className="text-xl self-center">
          Contact Us
        </div>
        <div className="border-2 border-green-500 flex flex-col just-start items-center">
          <div>
            <a href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18">
              150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3
            </a>
          </div>
          <div>
            <a href="tel:+19058784697">
              (905) 878-4697
            </a>
          </div>
          <div>
            <a href="mailto:info@kidzkornermilton.com">
              info@kidzkornermilton.com
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/kidz.kornermilton/">
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 border-2 border-black flex flex-col justify-center gap-2">
        <div className="text-xl self-center">
          Child Care Hours
        </div>
        <div className="border-2 border-green-500 flex flex-col just-start items-center">
          <div>
            Monday to Friday - 9:00am to 3:00pm
          </div>
          <div>
            After School | 3:00pm to 6:00pm
          </div>
        </div>
      </div>

      <div className="flex-1 border-2 border-black flex flex-col justify-center gap-2">
        <div className="text-xl self-center">
          Indoor Playground Hours
        </div>
        <div className="border-2 border-green-500 flex flex-col just-start items-center">
          <div>
            Drop In Play | Monday to Friday - 3:00pm to 6:00pm
          </div>
          <div>
            Parties | Saturday to Sunday
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;