import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const ContactUsTable = () => {

    const timetable = [
        {
            title: "Phone",
            href: "tel:+19058784697",
            text: "(905) 878-4697"
        },
        {
            title: "Email",
            href: "mailto:info@kidzkornermilton.com",
            text: "info@kidzkornermilton.com"
        },
        {
            title: "Address",
            href: "https://maps.app.goo.gl/TcUQhJ58bgf6tME18",
            text: "150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3"
        },
    ]

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-center lg:text-start lg:ml-2">
                Contact Us
            </h2>
            <Table className="border-t lg:border-b">
                <TableBody>
                    {timetable.map((item, idx) => (
                       <TableRow key={idx} className="flex ">
                            <TableCell className='font-semibold flex justify-start items-center whitespace-normal wrap-break-word flex-1 border'>
                                {item.title}
                            </TableCell>
                            <TableCell className="flex justify-center items-center whitespace-normal wrap-break-word flex-1 w-full border">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    href={item.href}
                                    className="hover:underline flex flex-row w-full flex-1"
                                >
                                    {item.text}        
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ContactUsTable;