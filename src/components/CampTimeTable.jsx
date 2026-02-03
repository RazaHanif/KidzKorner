import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const CampTimeTable = () => {
    return (
        <Table className="text-center">
            <TableBody className="border">
                <TableRow className="border">
                    <TableCell>
                        Monday to Friday | 9:00 AM - 5:00 PM
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Winter Break, March Break, Pa Days, Summer Vacation
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CampTimeTable;