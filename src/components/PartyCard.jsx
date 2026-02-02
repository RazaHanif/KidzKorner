import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PartyCard = ({ title, price, desc }) => {
    return (
        <Card>
        <CardHeader>
            <CardTitle className="bg-red-500">
                { title }
            </CardTitle>
            <CardDescription>
                { price }
            </CardDescription>
        </CardHeader>
        <CardContent>
            { desc }
        </CardContent>
        </Card>
    )
}

export default PartyCard