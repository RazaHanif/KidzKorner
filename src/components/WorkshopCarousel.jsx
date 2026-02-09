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

    const workshopCard = (title, price, description, content=[] ) => {
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
                    <div className="flex md:flex-row flex-col justify-around items-center gap-4">
                        { content.map((image) => (
                            <img
                                key={image.alt}
                                src={image.imageLink}
                                alt={image.alt}
                                className="md:w-1/4 w-sm rounded-lg border-2 shadow-lg"
                                loading="lazy"
                            />   
                        ))}
                    </div>
                    <div className="flex w-full justify-center m-4">
                        { description }
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.instagram.com/kidz.kornermilton/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            For more information please visit our instagram
                        </a>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Carousel className='w-3/4'>
            <CarouselContent>
                <CarouselItem>
                    { workshopCard(
                        "Paint Night",
                        "$250",
                        "Information about this Workshop",
                        [
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                        ],
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Cooking Class",
                        "$250",
                        "Information about this Workshop",
                        [
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                        ],
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Little Sahaba's",
                        "$250",
                        "Information about this Workshop",
                        [
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                        ],
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Mommy & Me",
                        "$250",
                        "Information about this Workshop",
                        [
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                            {
                                imageLink: '/K_K_20.jpg',
                                alt: 'Play Structure'
                            },
                        ],
                    )}
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default WorkshopCarousel