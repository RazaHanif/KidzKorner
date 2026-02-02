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
        <Card className="w-3/4">
            <CardHeader className="bg-purple-500">
                <CardTitle className="p-2 bg-accent flex justify-center items-center rounded-md">
                    { title }
                </CardTitle>
                <CardDescription className="p-2">
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