import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PartyCard = ({ title, price, desc, bullet = [] }) => {
    return (
        <Card className="w-3/4">
            <CardHeader>
                <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                    { title }
                </CardTitle>
                <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                    ${ price }<span className="text-xs">+tax</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="p-2">
                    { desc }
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-6">
                    {bullet.map(item => (
                        item
                    ))}
                </ul>

            </CardContent>
        </Card>
    )
}

export default PartyCard