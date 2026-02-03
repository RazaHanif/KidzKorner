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
            time: "9:00am",
            program: "Entry"
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
                {routine.map()}
            </TableBody>
        </Table>
    )
}

export default ChildcareTimeTable;