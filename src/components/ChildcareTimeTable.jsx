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
    return (
        <Table>
            <TableCaption>
                Kidz Korner Daily Routine
            </TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Time</TableHead>
                <TableHead>Program</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default ChildcareTimeTable;