import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const CampTimeTable = () => {
    const routine = [
        {
            time: "9:00am - 9:30am",
            program: "Arrival & Calm Starts"
        },
    ]

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Program</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Monday to Friday
                    </TableCell>
                    <TableCell>
                        9:00am - 5:00pm
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Winter Break, March Break, Pa Days, Summer Vacation
                    </TableCell>
                </TableRow>
                {routine.map((item) => (
                    <TableRow key={item}>
                        <TableCell>{item.time}</TableCell>
                        <TableCell  className="whitespace-normal wrap-break-word">{item.program}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CampTimeTable;