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

// Fix this with new NaivigationMenu

function Navigation() {

  return (
    <>
      <div
        className="hidden lg:flex flex-row w-4xl text-2xl justify-between items-center gap-4 text-nowrap"
      >
        {/* Testing */}
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-primary text-primary-foreground'>
                        <NavigationMenuLink href="/daycare">
                            Day Care
                        </NavigationMenuLink>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href='/daycare/toddler'>
                            Toddler
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/daycare/preschool" >
                            Preschool
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/daycare/before-after-school-care">
                            Before & After School
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className='text-primary-foreground' href='/parties'>
                            Parties
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className='text-primary-foreground' href='/parties'>
                            Parties
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className='text-primary-foreground' href='/parties'>
                            Parties
                    </NavigationMenuLink>
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

        {/* <NavLink 
          to="/blog" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Blog 
        </NavLink> */}

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
            {/* <DropdownMenuItem  asChild>
              <NavLink
                to="/blog" 
                className="cursor-pointer"
                end
              >
                Blog
              </NavLink>
            </DropdownMenuItem> */}
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