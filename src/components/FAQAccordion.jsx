import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQAccordion = ({ faq }) => {

    return (
        <Accordion className="w-full">

            {faq.map((item, index) => (
                <AccordionItem 
                    value={index + 1} 
                    key={index + 1}
                >
                    <AccordionTrigger className="cursor-pointer">
                        {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.a}
                    </AccordionContent>
                </AccordionItem>
            ))}

        </Accordion>
    )


}

export default FAQAccordion;