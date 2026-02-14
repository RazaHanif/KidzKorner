import PropTypes from "prop-types";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Accordion,
} from "@/components/ui/accordion"

const KKAccordion = ({ AccordionItems }) => {
    return (
        <Card 
            className='lg:w-3/4 w-full'
        >
            <CardContent>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full bg-card"
                    defaultValue="item-1"
                >
                    { AccordionItems }
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default KKAccordion


KKAccordion.propTypes = {
    AccordionItems: PropTypes.array,
}