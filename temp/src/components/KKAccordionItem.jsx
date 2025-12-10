import PropTypes from "prop-types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const KKAccordionItem = ({ Trigger, Content, Num }) => {
    return (
        <AccordionItem 
            className="border-black bg-secondary rounded-2xl w-full"
            value={`item-${Num}`}
        >
            <AccordionTrigger 
                className="bg-secondary! rounded-2xl!"
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
 

