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
                    <div className="border-4 border-red-500 flex md:flex-row flex-col justify-around items-center">
                        { content }

                    </div>
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
                        (
                            <>
                                <img 
                                    src='/K_K_20.jpg'
                                    alt='Play Structure'
                                    className="w-xs rounded-lg border-2 shadow-lg"
                                    loading="lazy"
                                    />   
                                <img 
                                    src='/K_K_20.jpg'
                                    alt='Play Structure'
                                    className="w-xs rounded-lg border-2 shadow-lg"
                                    loading="lazy"
                                    />   
                                <img 
                                    src='/K_K_20.jpg'
                                    alt='Play Structure'
                                    className="w-xs rounded-lg border-2 shadow-lg"
                                    loading="lazy"
                                />   
                            </>
                        )
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