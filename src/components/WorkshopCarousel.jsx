import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const WorkshopCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    ...
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