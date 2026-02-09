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
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <FloatingButton />
            </SheetTrigger>
            <SheetContent showCloseButton={false} className="overflow-y-auto h-full" asChild>
                <SheetHeader>
                    <SheetTitle>
                        { title }
                    </SheetTitle>
                    <SheetDescription className='hidden'>
                        { title }
                    </SheetDescription>
                </SheetHeader>
                { form }
            </SheetContent>
        </Sheet>
    )
}

export default FormBtn 