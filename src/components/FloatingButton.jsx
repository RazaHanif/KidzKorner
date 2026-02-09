import PropTypes from "prop-types"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const FloatingButton = ({ action = () => console.log('btn'), ...props }) => {
    return (
        <Button
            variant="btn"
            className="fixed bottom-22 right-5 h-10 w-10 rounded-lg shadow-lg bg-primary text-primary-foreground flex items-center justify-center"
            onClick={ action }
            {...props}
        >
            <Plus />
        </Button>
    )
}

FloatingButton.propTypes = {
    action: PropTypes.func,
}

export default FloatingButton