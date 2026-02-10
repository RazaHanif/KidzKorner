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
        <Table className="text-start">
            <TableHeader>
                <TableRow>
                    <TableHead className='text-xl font-semibold'>
                        Contact Us
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {timetable.map((item, idx) => (
                    <TableRow key={idx}>
                        <TableCell className='font-semibold'>
                            {item.title}
                        </TableCell>
                        <TableCell  className="whitespace-normal wrap-break-word">
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
    )
}

export default ContactUsTable;