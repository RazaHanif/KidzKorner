import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const PartyAccordion = () => {
    return (
        <Accordion defaultValue={["item-1"]}>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    Can we bring our own Food?
                </AccordionTrigger>
                <AccordionContent>
                    Yes. Fami
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )


}

export default PartyAccordion;