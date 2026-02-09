import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const WorkshopCarousel = () => {

    const workshopCard = (title, price, content) => {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                        { title }
                    </CardTitle>
                    <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                    <span className="text-xs text-center">
                        {price}
                    </span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    { content }
                </CardContent>
            </Card>
        )
    }
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    { workshopCard(
                        "Paint Night",
                        "$250",
                        ""
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Cooking Class",
                        "$250",
                        ""
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Little Sahaba's",
                        "$250",
                        ""
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Mommy & Me",
                        "$250",
                        ""
                    )}
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default WorkshopCarousel