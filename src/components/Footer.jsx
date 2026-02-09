import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full bg-primary border-t border-chart-4 p-4 text-primary-foreground">
      <div className="flex-1 flex flex-col justify-start items-center gap-2 border-blue-500 border-2">
        <div className="text-xl flex justify-center items-center w-full border-2 border-red-500">
          Child Care Hours
        </div>
        <div className="w-3/4 md:w-full border-2 border-green-500 flex-1">
          <Table className="w-full border-none">
            <TableBody>
              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  Monday to Friday
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  9:00am to 3:00pm
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="border-r border-chart-4 md:flex hidden m-2"></div>
      <div className="border-t border-chart-4 md:hidden flex m-2"></div>      

      <div className="flex-1 flex flex-col justify-start items-center gap-2 border-blue-500 border-2">
        <div className="text-xl flex justify-center items-center w-full border-2 border-red-500">
          After School Hours
        </div>
        <div className="w-3/4 md:w-full border-2 border-green-500 flex-1">
          <Table className="w-full border-none">
            <TableBody>
              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  Monday to Friday
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  3:00pm to 6:00pm
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="border-r border-chart-4 md:flex hidden m-2"></div>
      <div className="border-t border-chart-4 md:hidden flex m-2"></div>

      <div className="flex-1 flex flex-col justify-start items-center gap-2 border-blue-500 border-2">
        <div className="text-xl flex justify-center items-center w-full border-2 border-red-500">
          Indoor Playground Hours
        </div>
        <div className="w-3/4 md:w-full border-2 border-green-500 flex-1">
          <Table className="w-full border-none">
            <TableBody>
              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  Monday to Friday
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  3:00pm to 6:00pm
                </TableCell>
              </TableRow>
              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  Saturday to Sunday
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  Parties Only
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="border-r border-chart-4 md:flex hidden m-2"></div>
      <div className="border-t border-chart-4 md:hidden flex m-2"></div>

      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="text-xl flex justify-center items-center w-full">
          Contact Us
        </div>
        <div className="w-3/4 md:w-full border-2 border-green-500 flex-1">
          <Table className="w-full border-none">
            <TableBody>
              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  <Phone />
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  <a 
                    href="tel:+19058784697"
                    className="hover:underline flex flex-row gap-2 text-end"
                  >
                    <div className="w-full">
                      (905) 878-4697
                    </div>
                  </a>
                </TableCell>
              </TableRow>

              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  <Mail />
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  <a 
                    href="mailto:info@kidzkornermilton.com"
                    className="hover:underline flex flex-row gap-2 text-end"
                  >
                    <div className="w-full">
                      info@kidzkornermilton.com
                    </div>
                  </a>
                </TableCell>
              </TableRow>

              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  <MapPin />
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                    <a 
                    href="https://maps.app.goo.gl/TcUQhJ58bgf6tME18"
                    className="hover:underline flex flex-row gap-2 text-end"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full">
                      150 Nipissing Rd. 10 & 11, Milton, On
                    </div>
                  </a>
                </TableCell>
              </TableRow>

              <TableRow className="whitespace-normal wrap-break-word border-none">
                <TableCell className="whitespace-normal wrap-break-word border-none">
                  <Instagram />
                </TableCell>
                <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                  <a 
                    href="https://www.instagram.com/kidz.kornermilton/"
                    className="hover:underline flex flex-row gap-2 text-end"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full">
                      Follow us on Instagram
                    </div>
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

    </div>
  );
};

export default Footer;