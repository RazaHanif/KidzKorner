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
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <Card>
                        <CardHeader>
                            <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                                Title
                            </CardTitle>
                            <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                                <span className="text-xs text-center">
                                    $Price
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            Images Go Here
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    ...
                </CarouselItem>
                <CarouselItem>
                    ...
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default WorkshopCarousel