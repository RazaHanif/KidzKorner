import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const HoursTimeTable = () => {

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
        <Table>
            <TableHeader>
                <TableHead className='text-xl font-semibold'>
                    Contact Us
                </TableHead>
            </TableHeader>
            <TableBody>
                {timetable.map((item) => (
                    <TableRow key={item}>
                        <TableCell>
                            <a
                                target="_blank"
                                rel="noopener noreferrer" 
                                href={item.href}
                                className="hover:underline flex flex-row"
                            >
                                <div className="font-semibold">
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

export default HoursTimeTable;