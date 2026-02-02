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
                <CardTitle className="p-2 bg-accent flex justify-center items-center rounded-md">
                    { title }
                </CardTitle>
                <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md">
                    ${ price }<span className="text-xs">+tax</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border p-2">
                    Enoy <span className="font-bold">{ desc }</span> hours of private venue access and full use of our indoor playspace for your guests!
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-6">
                    {bullet.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

            </CardContent>
        </Card>
    )
}

export default PartyCard