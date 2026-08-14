import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* 
This is how to do the underline on active

<NavLink
    to="/about"
    end
    className={({ isActive }) =>
        `text-primary-foreground duration-300 ease-in-out ${isActive ? "underline underline-offset-2" : "hover:scale-110"}`
    }
>
    About Us
</NavLink>
*/

function Navigation() {
    const navigate = useNavigate();

    return (
        <>
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex" viewport={false}>
                <NavigationMenuList className="gap-6">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className="bg-primary text-primary-foreground text-2xl cursor-pointer"
                            onClick={() => navigate("/daycare")}
                        >
                            Day Care
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink
                                onClick={() => navigate("/daycare/toddler")}
                            >
                                Toddler
                            </NavigationMenuLink>
                            <NavigationMenuLink
                                onClick={() =>
                                    navigate("/daycare/preschool")
                                }
                            >
                                Preschool
                            </NavigationMenuLink>
                            <NavigationMenuLink
                                onClick={() =>
                                    navigate("/daycare/before-after-school")
                                }
                            >
                                Before & After School
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            onClick={() => navigate("/parties")}
                            className="text-primary-foreground"
                        >
                            Parties
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            onClick={() => navigate("/playground")}
                            className="text-primary-foreground"
                        >
                            Playground
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            onClick={() => navigate("/workshops")}
                            className="text-primary-foreground"
                        >
                            Workshops
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className="bg-primary text-primary-foreground text-2xl cursor-pointer"
                            onClick={() => navigate("/camp")}
                        >
                            Camp
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink
                                onClick={() => navigate("/camp/summer")}
                            >
                                Summer Camp
                            </NavigationMenuLink>
                            <NavigationMenuLink
                                onClick={() =>
                                    navigate("/camp/march-break")
                                }
                            >
                                March Break Camp
                            </NavigationMenuLink>
                            <NavigationMenuLink
                                onClick={() =>
                                    navigate("/camp/winter-break")
                                }
                            >
                                Winter Break Camp
                            </NavigationMenuLink>
                            <NavigationMenuLink
                                onClick={() => navigate("/camp/pa-day")}
                            >
                                PA Day Camp
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            onClick={() => navigate("/about")}
                            className="text-primary-foreground"
                        >
                            About Us
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="lg:hidden flex flex-col justify-center items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <Button variant="secondary">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="bottom"
                        align="end"
                        sideOffset={4}
                        className=""
                    >
                        <DropdownMenuGroup>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger 
                                    className="cursor-pointer p-2 text-lg"
                                >
                                    Day Care
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/daycare" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                All Day Care
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/daycare/toddler" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                Toddler
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/daycare/preschool" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                Preschool
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/daycare/before-after-school"
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                Before & After School
                                            </NavLink>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuItem asChild>
                                <NavLink
                                    to="/parties"
                                    className="cursor-pointer p-2 text-lg"
                                    end
                                >
                                    Parties
                                </NavLink>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <NavLink
                                    to="/playground"
                                    className="cursor-pointer p-2 text-lg"
                                    end
                                >
                                    Playground
                                </NavLink>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <NavLink
                                    to="/workshops"
                                    className="cursor-pointer p-2 text-lg"
                                    end
                                >
                                    Workshop
                                </NavLink>
                            </DropdownMenuItem>

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger 
                                    className="cursor-pointer p-2 text-"
                                >
                                    Camp
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/camp" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                All Camps
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/camp/summer" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                Summer Camp
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/camp/march-break" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                March Break Camp
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/camp/winter-break" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                Winter Break Camp
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink 
                                                to="/camp/pa-day" 
                                                className="cursor-pointer p-2 text-lg"
                                                end
                                            >
                                                PA Day
                                            </NavLink>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuItem asChild>
                                <NavLink to="/about" className="cursor-pointer p-2 text-lg" end>
                                    About Us
                                </NavLink>
                            </DropdownMenuItem>

                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>


            {/* Mobile Navigation */}
            <div className="hidden lg:flex flex-col justify-center items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <Button variant="secondary">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="">
                        <DropdownMenuItem asChild>
                            <NavLink
                                to="/daycare"
                                className="cursor-pointer"
                                end
                            >
                                Day Care
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <NavLink
                                to="/parties"
                                className="cursor-pointer"
                                end
                            >
                                Parties
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <NavLink
                                to="/playground"
                                className="cursor-pointer"
                                end
                            >
                                Playground
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <NavLink
                                to="/workshops"
                                className="cursor-pointer"
                                end
                            >
                                Workshop
                            </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <NavLink to="/camp" className="cursor-pointer" end>
                                Camp
                            </NavLink>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem  asChild>
              <NavLink
                to="/blog" 
                className="cursor-pointer"
                end
              >
                Blog
              </NavLink>
            </DropdownMenuItem> */}
                        <DropdownMenuItem asChild>
                            <NavLink to="/about" className="cursor-pointer" end>
                                About Us
                            </NavLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
}

export default Navigation;
