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

function DesktopNavigation() {
    const navigate = useNavigate();

    return (
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
    )

}

function MobileNavigation() {
    return (
        <DropdownMenu className="lg:hidden flex">
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button variant="secondary">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="bottom"
                align="end"
                sideOffset={4}
                className="font-light"
            >
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger 
                            className="cursor-pointer p-2 text-xl"
                        >
                            Day Care
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent
                                className="font-light max-w-50"
                            >
                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/daycare" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        All Day Care
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/daycare/toddler" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        Toddler
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/daycare/preschool" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        Preschool
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/daycare/before-after-school"
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        Before & After School
                                    </NavLink>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <NavLink
                            to="/parties"
                            className="cursor-pointer p-2 text-xl"
                            end
                        >
                            Parties
                        </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <NavLink
                            to="/playground"
                            className="cursor-pointer p-2 text-xl"
                            end
                        >
                            Playground
                        </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem asChild>
                        <NavLink
                            to="/workshops"
                            className="cursor-pointer p-2 text-xl"
                            end
                        >
                            Workshop
                        </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger 
                            className="cursor-pointer p-2 text-xl"
                        >
                            Camp
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent
                                className="font-light max-w-50"
                            >
                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/camp" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        All Camps
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/camp/summer" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        Summer Camp
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/camp/march-break" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        March Break Camp
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/camp/winter-break" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        Winter Break Camp
                                    </NavLink>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <NavLink 
                                        to="/camp/pa-day" 
                                        className="cursor-pointer p-2 text-xl"
                                        end
                                    >
                                        PA Day
                                    </NavLink>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <NavLink to="/about" className="cursor-pointer p-2 text-xl" end>
                            About Us
                        </NavLink>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function Navigation() {
    return (
        <>
            {/* Desktop Navigation */}
            <DesktopNavigation />

            {/* Mobile Navigation */}
            <MobileNavigation />
        </>
    );
}

export default Navigation;
