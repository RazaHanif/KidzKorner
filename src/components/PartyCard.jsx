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
            <CardTitle>
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