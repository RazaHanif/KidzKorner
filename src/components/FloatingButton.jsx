import PropTypes from "prop-types"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const FloatingButton = ({ action = () => console.log('btn'), ...props }) => {
    return (
        <Button
            variant="btn"
            className="sticky bottom-4 h-10 w-10 rounded-lg shadow-lg bg-primary text-primary-foreground flex items-center justify-center self-end animate-bounce"
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