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
import {
    Palette,
    ChefHat,
    BookHeart,
    Heart,
} from "lucide-react"

const workshops = [
    {
        title: "Art & Creative Activities",
        icon: Palette,
        description:
            "Toddlers and preschoolers can explore their creativity through fun art projects, crafts, painting, and hands-on activities.",
    },
    {
        title: "Cooking & Baking",
        icon: ChefHat,
        description:
            "Fun, age-appropriate cooking and baking activities give children a chance to explore simple recipes while having fun together.",
    },
    {
        title: "Little Sahabas",
        icon: BookHeart,
        description:
            "Engaging activities inspired by Islamic learning help young children explore stories, values, and lessons in a fun and age-appropriate way.",
    },
    {
        title: "Mommy & Me",
        icon: Heart,
        description:
            "Parents and little ones can enjoy hands-on activities together while creating fun memories in a welcoming environment.",
    },
]


const WorkshopCarousel = () => {

    return (
        <Carousel
            className="w-full"
            opts={{
                align: "start",
                loop: true
            }}
        >
            <CarouselContent>
                { workshops.map((workshop) => {
                    const Icon = workshop.icon

                    return (
                        <CarouselItem
                            key={workshop.title}
                            className="basis-full md:basis-1/2 lg:basis-1/3"
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