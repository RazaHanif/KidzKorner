import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import './navigation.css';

function Navigation() {

  return (
    <>
      <div 
        className="hidden md:flex flex-row w-full lg:w-3/4 justify-between gap-2 border-2 border-red-500 text-2xl"
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
      <div className='flex-1 flex justify-center items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              Pages
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link 
                to="/camp" 
                end
              >
                Camp
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default Navigation;