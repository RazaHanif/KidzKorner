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