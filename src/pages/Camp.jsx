import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CampForm from "@/components/CampForm";
import Image from "../components/Image";

const Camp = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-8 text-justify">
            <div className="flex flex-col justify-evenly items-center w-3/4">
                <div className="text-3xl font-bold mb-4 font-serif">
                    School Age Camp!
                </div>
                <div className="text-center">
                    Our Camp offers hands-on experiences in both the visual arts and culinary arts, perfect for young artists and aspiring chefs alike.
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-center w-3/4 gap-4">
                <Card>
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
                <Image src='/20250711_111518.jpg' alt='0' w="w-sm"/>
            </div>

            <div className="flex flex-col justify-center w-3/4 md:w-1/3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Camp Schedule
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent hidden rounded-md text-bold text-lg">
                            Camp Schedule
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row justify-around">
                            <ul className="font-normal pl-6 list-disc">
                                <li>Arrival</li>
                                <li>Morning Snack</li>
                                <li>Programming</li>
                                <li>Circle Time</li>
                                <li>Cooking / Art Activity</li>
                            </ul>
                            <ul className="font-normal pl-6 list-disc">
                                <li>Lunch</li>
                                <li>Afternoon Rest</li>
                                <li>Snack</li>
                                <li>Programming</li>
                                <li>Dismissal</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <Image src='/IMG-20250722-WA0017.jpg' alt='1' />
                <Image src='/20260108_111322.jpg' alt='2' />
                <Image src='/20250722_100154.jpg' alt='3' />
            </div>

            <div className="flex md:flex-row flex-col justify-center w-3/4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Art Class
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">
                                3 Days a week
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-semibold">
                                    Campers explore a wide range of mediums and techniques such as:
                                </span>
                                <ul className="font-normal pl-6 list-disc">
                                    <li>
                                        Printmaking
                                    </li>
                                    <li>
                                        Painting and Drawing
                                    </li>
                                    <li>
                                        Mixed Media and Collages
                                    </li>
                                    <li>
                                        End of term art gallery for parents to view
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="p-2 bg-primary text-primary-foreground flex justify-center items-center rounded-md text-lg">
                            Cooking Class
                        </CardTitle>
                        <CardDescription className="p-2 bg-accent flex justify-center items-center rounded-md text-bold text-lg">
                            <span className="text-xs text-center">
                                2 Days a week
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <span className="font-semibold">
                                    Campers will engage in a variety of cooking experiences such as:
                                </span>
                                <ul className="font-normal pl-6 list-disc">
                                    <li>
                                        Learning about kitchen safety and hygiene
                                    </li>
                                    <li>
                                        Measuring, cutting, and cleaning ingredients
                                    </li>
                                    <li>
                                        Recipes will be made using various cooking methods
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center w-3/4 gap-4">
                <Image src='/' alt='4' />
                <Image src='/' alt='5' />
                <Image src='/' alt='6' />
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <CampForm/>
            </div>
        </div>
    );
}
  
export default Camp;