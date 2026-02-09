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
                                    <Card className="flex-1">
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            $175/Week
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">
                                To preserve the quality of our program, summer camp enrollment is limited to a maximum of 13 children.
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li>
                                <span className="font-semibold">
                                    Full Time & Part Time Options
                                </span>
                                <ul className="font-normal pl-6">
                                    <li>
                                        Camps run during PD Days, March Breaks, Summer Vacations, and Winter Breaks.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Program Hours
                                </span>
                                <ul className="font-normal pl-6">
                                    <li>
                                        9:00AM - 5:00PM
                                    </li>
                                    <li>
                                        Monday - Friday
                                    </li>
                                    <li>
                                        Families can enroll for 2, 3, or 5 days a week.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Ages
                                </span>
                                <ul className="font-normal pl-6">
                                    <li>
                                        4 Years Old to 13 Years Old
                                    </li>
                                    <li>
                                        Siblings Discount Available
                                    </li>
                                </ul>
                            </li>
                            <li className="font-semibold">
                                Children bring their own lunches and snacks
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/kidz.kornermilton/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline font-semibold"
                                >
                                    Click Here to visit our Instagram to see our Activities / Weekly Camp Themes
                                </a>
                            </li>
                            <li className="text-xs font-semibold">
                                Center is closed on Civic Holiday, Christmas Eve, Christmas Day, New Years Eve, and New Years Day
                            </li>
                        </ul>
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