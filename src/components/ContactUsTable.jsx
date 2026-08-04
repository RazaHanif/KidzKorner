import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
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
            <h1 className="text-xl font-semibold text-center lg:text-start lg:ml-2">
                Contact Us
            </h1>
            <Table className="border-t">
                <TableBody>
                    {timetable.map((item, idx) => (
                        <TableRow key={idx} className="flex bg-red-500">
                            <TableCell className='font-semibold flex-1'>
                                {item.title}
                            </TableCell>
                            <TableCell  className="whitespace-normal wrap-break-word bg-blue-500 flex-2">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    href={item.href}
                                    className="hover:underline flex flex-row"
                                >
                                    <div>
                                        {item.text}
                                    </div>
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