import PropTypes from "prop-types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const KKAccordionItem = ({ Trigger, Content, Num }) => {
    return (
        <AccordionItem 
            className="bg-card border-black w-full"
            value={`item-${Num}`}
        >
            <AccordionTrigger 
                className="bg-card!"
            >
                { Trigger }
            </AccordionTrigger>
            <AccordionContent 
                className="flex flex-col justify-center items-start pl-4"
            >
                { Content }
            </AccordionContent>
        </AccordionItem>
    )
}

KKAccordionItem.propTypes = {
    Trigger: PropTypes.string,
    Content: PropTypes.string,
    Num: PropTypes.string,
}

export default KKAccordionItem
 

