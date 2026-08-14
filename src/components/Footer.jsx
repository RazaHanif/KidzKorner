import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { NavLink } from "react-router";

// Add Blog & FAQ links

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center w-full bg-primary text-primary-foreground">
            <div className="flex flex-col lg:flex-row justify-center w-full border-t border-chart-4 p-2">
                <div className="flex-1 flex flex-col justify-start items-center">
                    <h3 className="text-xl flex justify-center items-center w-full text-center">
                        Child Care Hours
                    </h3>
                    <div className="w-3/4 lg:w-5/6 flex-1">
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

                <div className="border-r border-chart-4 lg:flex hidden" />
                <div className="border-t border-chart-4 lg:hidden flex m-2" />

                <div className="flex-1 flex flex-col justify-start items-center">
                    <h3 className="text-xl flex justify-center items-center w-full text-center">
                        After School Hours
                    </h3>
                    <div className="w-3/4 lg:w-5/6 flex-1">
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

                <div className="border-r border-chart-4 lg:flex hidden" />
                <div className="border-t border-chart-4 lg:hidden flex m-2" />

                <div className="flex-1 flex flex-col justify-start items-center">
                    <h3 className="text-xl flex justify-center items-center w-full text-center">
                        Indoor Playground Hours
                    </h3>
                    <div className="w-3/4 lg:w-5/6 flex-1">
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

                <div className="border-r border-chart-4 lg:flex hidden" />
                <div className="border-t border-chart-4 lg:hidden flex m-2" />

                <div className="flex-1 flex flex-col justify-start items-center">
                    <h3 className="text-xl flex justify-center items-center w-full text-center">
                        Contact Us
                    </h3>
                    <div className="w-3/4 lg:w-5/6 flex-1">
                        <Table className="w-full border-none">
                            <TableBody>
                                <TableRow className="whitespace-normal wrap-break-word border-none">
                                    <TableCell className="whitespace-normal wrap-break-word border-none">
                                        <Phone />
                                    </TableCell>
                                    <TableCell className="whitespace-normal wrap-break-word border-none text-end">
                                        <a
                                            href="tel:+19058784697"
                                            className="hover:underline flex flex-row  text-end"
                                        >
                                            <p className="w-full">(905) 878-4697</p>
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
                                            className="hover:underline flex flex-row  text-end"
                                        >
                                            <p className="w-full">
                                                info@kidzkornermilton.com
                                            </p>
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
                                            className="hover:underline flex flex-row  text-end"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <address className="w-full">
                                                150 Nipissing Rd. Units 10 & 11,
                                                Milton, On
                                            </address>
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
                                            className="hover:underline flex flex-row  text-end"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="w-full">
                                                Follow us on Instagram
                                            </p>
                                        </a>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
                 
<div className="flex flex-col w-full justify-center items-center gap-2 bg-secondary py-3 px-4 text-sm">
    <div className="flex flex-row gap-6">
        <NavLink
            className="font-light hover:underline"
            to="/blog"
            end
        >
            Blog
        </NavLink>

        <NavLink
            className="font-light hover:underline"
            to="/faq"
            end
        >
            FAQ
        </NavLink>
    </div>

    <div className="flex justify-center items-center font-light">
        &copy; {new Date().getFullYear()} Kidz Korner Milton. All rights reserved.
    </div>
</div>
        </footer>
    );
};

export default Footer;
