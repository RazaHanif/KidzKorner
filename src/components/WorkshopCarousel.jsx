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

    // const workshopCard = (title, price, description, content=[] ) => {
    const workshopCard = (title, price, description ) => {
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
                    <div className="flex lg:flex-row flex-col justify-around items-center gap-4">
                        {/* { content.map((image) => (
                            <img
                                key={image.alt}
                                src={image.imageLink}
                                alt={image.alt}
                                className="lg:w-1/4 w-sm rounded-lg border-2 shadow-lg"
                                loading="lazy"
                            />   
                        ))} */}
                    </div>
                    <p className="flex w-full justify-center m-4">
                        { description }
                    </p>
                    <p className="text-center">
                        <a
                            href="https://www.instagram.com/kidz.kornermilton/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Click Here to Visit our Instagram!
                        </a>
                    </p>
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
                        "For up to date info and class timings please check out our Instagram page.",
                        [
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                        ],
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Cooking Class",
                        "$250",
                        "For up to date info and class timings please check out our Instagram page.",
                        [
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                        ],
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Little Sahaba's",
                        "$250",
                        "For up to date info and class timings please check out our Instagram page.",
                        [
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                        ],
                    )}
                </CarouselItem>
                <CarouselItem>
                    { workshopCard(
                        "Mommy & Me",
                        "$250",
                        "For up to date info and class timings please check out our Instagram page.",
                        [
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
                            },
                            {
                                imageLink: 'public/20260108_111322(0).jpg',
                                alt: 'Kids doing activity at Kidz Korner Milton'
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