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
            session: "Full Day",
            time: "9:00am - 3:00pm"
        },
        {
            session: "Half Day - Morning",
            time: "9:00am - 11:30am"
        },
        {
            session: "Half Day - Afternoon",
            time: "12:30am - 3:00pm"
        },
    ]

    return (
        <Table>
            <TableHeader>
                <TableHead className='text-xl font-semibold'>
                    Hours
                </TableHead>
            </TableHeader>
            <TableBody>
                {timetable.map((item) => (
                    <TableRow key={item}>
                        <TableCell className='font-semibold'>
                            {item.session}
                        </TableCell>
                        <TableCell>
                            {item.time}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default HoursTimeTable;