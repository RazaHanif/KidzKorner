import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const BlogCard = ({title, price, desc}) => {
    return (
        


        <Card className="w-full">
            <CardHeader>
                <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                    { title }
                </CardTitle>
                <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                    ${price}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="p-2 text-center">
                    { desc }
                </p>
            </CardContent>
        </Card>
    )
}

export default BlogCard