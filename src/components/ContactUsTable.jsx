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
                                href={item.href}
                                className="hover:underline flex flex-row"
                            >
                                <div className="font-semibold">
                                    (905) 878-4697
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