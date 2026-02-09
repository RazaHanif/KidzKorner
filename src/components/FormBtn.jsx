import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import FloatingButton from "@/components/FloatingButton";
import { useState } from "react";

// Should take in a list of people to message and display, clicking on them takes you to that chat or creates a new chat
const FormBtn = ({title, form}) => {

    const [ open, setOpen ] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen} className='overflow-x-auto'>
            <DialogTrigger asChild>
                <FloatingButton />
            </DialogTrigger>
            <DialogContent>
                <DialogDescription className='hidden'>{title}</DialogDescription>
                {form}
            </DialogContent>
        </Dialog> 
        
    )
}

export default FormBtn 