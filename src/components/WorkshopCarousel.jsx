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
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { workshops } from "../../api/workshopData"

const WorkshopCarousel = () => {
    const workshop = workshops

    return (
        <Carousel
            className="w-3/4"
            opts={{
                align: "start",
                loop: true
            }}
        >
            <CarouselContent>
                {workshop.map((workshop) => {
                    const Icon = workshop.icon

                    return (
                        <CarouselItem
                            key={workshop.title}
                            className="basis-full md:basis-1/2"
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="flex flex-col items-center gap-3 text-center">
                                        <div className="flex justify-center items-center p-3 rounded-full bg-primary text-primary-foreground">
                                            <Icon className="w-7 h-7" />
                                        </div>

                                        <CardTitle className="text-lg">
                                            {workshop.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-center text-sm leading-6">
                                        {workshop.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default WorkshopCarousel