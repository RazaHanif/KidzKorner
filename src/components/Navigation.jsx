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
        className="hidden lg:flex flex-row lg:w-3xl w-full text-xl lg:text-2xl justify-between items-center gap-4 text-nowrap"
      >
        <NavLink 
          to="/childcare" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Child Care
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
{/* 
        <NavLink 
          to="/workshop" 
          end
          className={({ isActive }) =>
            `text-primary-foreground duration-300 ease-in-out ${ isActive ? "underline underline-offset-2" : "hover:scale-110" }`
          }
        >
          Workshops
        </NavLink>
 */}
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
              >
                Child Care
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/parties" 
                end
              >
                Parties
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/playground" 
                end
              >
                Playground
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/workshop" 
                end
              >
                Workshop
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/camp" 
                end
              >
                Camp
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <NavLink
                to="/about" 
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