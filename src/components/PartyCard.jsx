import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PartyCard = ({ title, price, desc,  }) => {
    return (
        <Card className="w-3/4">
            <CardHeader>
                <CardTitle className="p-2 bg-accent flex justify-center items-center rounded-md">
                    { title }
                </CardTitle>
                <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md">
                    { price }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    Bullet Points
                </div>
                <div>
                    { desc }
                </div>
            </CardContent>
        </Card>
    )
}

export default PartyCard