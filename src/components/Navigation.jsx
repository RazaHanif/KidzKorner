import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function Navigation() {

  return (
    <>
      <div
        className="hidden lg:flex flex-row lg:w-3xl w-full text-xl lg:text-2xl justify-between items-center gap-4 text-nowrap"
      >
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    <NavLink 
                        to="/daycare" 
                        end
                    >
                        Day Care
                    </NavLink>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>
                        <NavLink 
                            to="/daycare" 
                            end
                        >
                            Toddler
                        </NavLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        Preschool
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        Before & After School
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
        <NavLink 
          to="/daycare" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Day Care
        </NavLink>

        <NavLink 
          to="/parties" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Parties
        </NavLink>

        <NavLink 
          to="/playground" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Playground
        </NavLink>

        <NavLink 
          to="/workshops" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Workshops
        </NavLink>

        <NavLink 
          to="/camp" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Camp 
        </NavLink>

        <NavLink 
          to="/about" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          About Us
        </NavLink>
      </div>

      <div className='lg:hidden flex flex-col justify-center items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Button variant='secondary'>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=''>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/daycare" 
                className="cursor-pointer"
                end
              >
                Day Care
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/parties" 
                className="cursor-pointer"
                end
              >
                Parties
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/playground" 
                className="cursor-pointer"
                end
              >
                Playground
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/workshops" 
                className="cursor-pointer"
                end
              >
                Workshop
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/camp" 
                className="cursor-pointer"
                end
              >
                Camp
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/about" 
                className="cursor-pointer"
                end
              >
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