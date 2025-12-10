import PropTypes from "prop-types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
} from "@/components/ui/accordion"

const KKAccordion = ({ AccordionItems }) => {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full bg-card"
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