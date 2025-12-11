import { Link } from 'react-router-dom';
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
        className="hidden md:flex flex-row w-3/4 text-xl lg:text-2xl justify-between items-center gap-2"
      >
        <Link 
          to="/childcare" 
          end
        >
          Child Care
        </Link>

        <Link 
          to="/parties" 
          end
        >
          Parties
        </Link>

        <Link 
          to="/playground" 
          end
        >
          Playground
        </Link>

        <Link 
          to="/workshop" 
          end
        >
          Workshops
        </Link>

        <Link 
          to="/camp" 
          end
        >
          Camp
        </Link>

        <Link 
          to="/about" 
          end
        >
          About Us
        </Link>
      </div>
      <div className='md:hidden flex flex-col justify-center items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=''>
            <DropdownMenuItem  asChild>
              <Link 
                to="/childcare" 
                end
              >
                Child Care
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <Link 
                to="/parties" 
                end
              >
                Parties
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <Link 
                to="/playground" 
                end
              >
                Playground
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <Link 
                to="/workshop" 
                end
              >
                Workshop
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <Link 
                to="/camp" 
                end
              >
                Camp
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem  asChild>
              <Link 
                to="/about" 
                end
              >
                About Us
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default Navigation;