import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Navigation() {

  return (
    <>
      <div 
        className="hidden lg:flex flex-row w-3xl text-xl lg:text-2xl justify-between items-center gap-4 text-nowrap"
      >
        <NavLink 
          to="/childcare" 
          end
          className={({ isActive }) =>
            `duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Child Care
        </NavLink>

        <NavLink 
          to="/parties" 
          end
          className={({ isActive }) =>
            `duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Parties
        </NavLink>

        <NavLink 
          to="/playground" 
          end
          className={({ isActive }) =>
            `duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Playground
        </NavLink>

        <NavLink 
          to="/workshop" 
          end
          className={({ isActive }) =>
            `duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Workshops
        </NavLink>

        <NavLink 
          to="/camp" 
          end
          className={({ isActive }) =>
            `duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Camp
        </NavLink>

        <NavLink 
          to="/about" 
          end
          className={({ isActive }) =>
            `duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          About Us
        </NavLink>
      </div>
      <div className='lg:hidden flex flex-col justify-center items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary'>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=''>
            <DropdownMenuItem  asChild>
              <NavLink 
                to="/childcare" 
                end
                className
              >
                Child Care
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink 
                to="/parties" 
                end
                className
              >
                Parties
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink 
                to="/playground" 
                end
                className
              >
                Playground
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink 
                to="/workshop" 
                end
                className
              >
                Workshop
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink 
                to="/camp" 
                end
                className
              >
                Camp
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink 
                to="/about" 
                end
                className
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