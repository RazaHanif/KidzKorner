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
            session: "Child Care",
            time: "Monday to Friday - 9:00am - 3:00pm"
        },
        {
            session: "After School",
            time: "Monday to Friday - 3:00pm - 6:00pm"
        },
        {
            session: "Indoor Playground Drop In",
            time: "Monday to Friday - 3:00pm - 6:00pm"
        },
        {
            session: "Playground Open For Parties",
            time: "Saturday to Sunday"
        },
    ]

    return (
        <Table className="text-start">
            <TableHeader>
                <TableHead className='text-xl font-semibold'>
                    Hours
                </TableHead>
            </TableHeader>
            <TableBody>
                {timetable.map((item) => (
                    <TableRow key={item}>
                        <TableCell className='font-semibold whitespace-normal wrap-break-word'>
                            {item.session}
                        </TableCell>
                        <TableCell className='text-end whitespace-normal wrap-break-word'>
                            {item.time}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default HoursTimeTable;