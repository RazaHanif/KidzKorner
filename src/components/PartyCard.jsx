import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PartyCard = ({ title, price, desc, time, bullet = [] }) => {
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
                    { desc }
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-6">
                    <li>Up to { time } hours of private access (addititonal cost for extra time)</li>
                    {bullet.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

            </CardContent>
        </Card>
    )
}

export default PartyCard