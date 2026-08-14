import {
  Table,
  TableBody,
  TableCell,
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
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-center lg:text-end lg:ml-2">
                Hours of Operation
            </h2>
            <Table className="text-start">
                <TableBody>
                    {timetable.map((item, idx) => (
                    <TableRow key={idx} className="flex">
                            <TableCell className='font-semibold whitespace-normal wrap-break-word flex-1'>
                                {item.session}
                            </TableCell>
                            <TableCell className="flex justify-center items-center flex-1 w-full wrap-break-word">
                                <p className="text-end w-full">
                                    {item.time}
                                </p>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default HoursTimeTable;