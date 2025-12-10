import PropTypes from "prop-types";
import {
  Accordion,
} from "@/components/ui/accordion"

const KKAccordion = ({ AccordionItems }) => {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full bg-secondary rounded-2xl"
            defaultValue="item-1"
        >
            { AccordionItems }
        </Accordion>
    )
}

export default KKAccordion


KKAccordion.propTypes = {
    AccordionItems: PropTypes.array,
}