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
        <Card className="bg-blue-500 w-3/4">
            <CardHeader className="bg-purple-500">
                <CardTitle className="bg-red-500">
                    { title }
                </CardTitle>
                <CardDescription className="bg-yellow-500">
                    { price }
                </CardDescription>
            </CardHeader>
            <CardContent className="bg-green-500">
                { desc }
            </CardContent>
        </Card>
    )
}

export default PartyCard