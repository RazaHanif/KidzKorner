import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ChildcareTimeTable = () => {
    const routine = [
        {
            time: "9:00am - 9:30am",
            program: "Arrival & Calm Starts"
        },
        {
            time: "9:30am - 10:00am",
            program: "Arts & Crafts / Sensory Play"
        },
        {
            time: "10:00am - 10:15am",
            program: "Morning Snack & Washroom Routine"
        },
        {
            time: "10:15am - 10:45am",
            program: "Programming"
        },
        {
            time: "10:45am - 11:00am",
            program: "Circle Time"
        },
        {
            time: "11:00am - 11:30am",
            program: "Indoor Playground & Gross Motor Development"
        },
        {
            time: "11:30am - 11:45am",
            program: "Washroom Routine"
        },
        {
            time: "11:45am - 12:15am",
            program: "Lunch"
        },
        {
            time: "12:15pm - 1:30pm",
            program: "Rest & Mindfulness for Full Day Children - Arts & Crafts / Sensory Play for Half Day Children"
        },
        {
            time: "1:30pm - 1:45pm",
            program: "Washroom Routine"
        },
        {
            time: "1:45pm - 2:00pm",
            program: "Afternoon Snack"
        },
        {
            time: "2:00pm - 2:30pm",
            program: "Programming"
        },
        {
            time: "2:30pm - 3:00pm",
            program: "Table Activity & Dismissal"
        },
    ]

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        Time
                    </TableHead>
                    <TableHead>
                        Program
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {routine.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className='font-semibold'>
                            {item.time}
                        </TableCell>
                        <TableCell  
                            className="whitespace-normal wrap-break-word"
                        >
                            {item.program}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ChildcareTimeTable;