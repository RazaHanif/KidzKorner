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
                <TableRow>
                    <TableHead className='text-xl font-semibold'>
                        Hours of Operation
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {timetable.map((item, idx) => (
                   <TableRow key={idx} className="flex bg-red-500">
                        <TableCell className='font-semibold whitespace-normal wrap-break-word flex-1'>
                            {item.session}
                        </TableCell>
                        <TableCell  className="whitespace-normal wrap-break-word bg-blue-500 flex-2">
                            {item.time}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default HoursTimeTable;