import {
  Table,
  TableBody,
  TableCaption,
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
            program: "Cirlce Time"
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
            time: "9:00am - 9:30am",
            program: "Arrival & Calm Starts"
        },
        {
            time: "9:00am - 9:30am",
            program: "Arrival & Calm Starts"
        },
        {
            time: "9:00am - 9:30am",
            program: "Arrival & Calm Starts"
        },
        {
            time: "9:00am - 9:30am",
            program: "Arrival & Calm Starts"
        },
    ]

    return (
        <Table>
            <TableCaption>
                Kidz Korner Daily Routine
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Program</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {routine.map((item) => (
                    <TableRow key={item}>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.program}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ChildcareTimeTable;