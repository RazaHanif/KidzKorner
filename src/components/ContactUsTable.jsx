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
            time: "7:30am - 9:00am"
        },
        {
            time: "9:00am - 3:00pm"
        },
        {
            time: "9:00am - 11:30am"
        },
        {
            time: "12:30am - 3:00pm"
        },
        {
            time: "3:00pm - 6:00pm"
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