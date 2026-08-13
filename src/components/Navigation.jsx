import { NavLink, useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate()

  return (
    <>
      <div
        className="hidden lg:flex flex-row w-4xl text-2xl justify-between items-center gap-4 text-nowrap"
      >
        {/* Testing */}
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-primary text-primary-foreground text-2xl' onClick={() => navigate('/daycare')}>
                        Day Care
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink onClick={() => navigate('/daycare/toddler')}>
                            Toddler
                        </NavigationMenuLink>
                        <NavigationMenuLink onClick={() => navigate('/daycare/preschool')}>
                            Preschool
                        </NavigationMenuLink>
                        <NavigationMenuLink onClick={() => navigate('/daycare/before-after-school-care')}>
                            Before & After School
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink onClick={() => navigate('/parties')} className='text-primary-foreground'>
                        Parties
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink onClick={() => navigate('/playground')} className='text-primary-foreground'>
                        Playground
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink onClick={() => navigate('/workshops')} className='text-primary-foreground'>
                        Workshops
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-primary text-primary-foreground text-2xl' onClick={() => navigate('/camp')}>
                        Camp
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink onClick={() => navigate('/camp/summer-camp')}>
                            Summer Camp
                        </NavigationMenuLink>
                        <NavigationMenuLink onClick={() => navigate('/camp/march-camp')}>
                            March Break Camp
                        </NavigationMenuLink>
                        <NavigationMenuLink onClick={() => navigate('/camp/winter-camp')}>
                            Winter Break Camp
                        </NavigationMenuLink>
                        <NavigationMenuLink onClick={() => navigate('/camp/summer')}>
                            PA Day Camp
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