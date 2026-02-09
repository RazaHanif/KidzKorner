import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FloatingButton from "@/components/FloatingButton";
import { useState } from "react";

// Should take in a list of people to message and display, clicking on them takes you to that chat or creates a new chat
const WorkshopFormBtn = () => {

    const [ open, setOpen ] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <FloatingButton />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new chat!
                    </DialogTitle>
                </DialogHeader>
                    <WorkshopForm />
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog> 
    )

}

export default WorkshopFormBtn 