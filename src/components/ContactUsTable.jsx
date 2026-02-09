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
    /* 
                                <a
                                href="tel:+19058784697"
                                className="hover:underline flex flex-row"
                            >
                                <div className="font-semibold">
                                    (905) 878-4697
                                </div>
                            </a>
    */
    const timetable = [
        {
            href: "tel:+19058784697"
            
        },
        {

        },
        {

        },
        {

        },
        {

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
                            {item}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ContactUsTable;