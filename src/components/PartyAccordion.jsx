import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const PartyAccordion = () => {
    const faq = [
        {
            q: "Can we bring our own Food?",
            a: "Yes. Families are welcome to bring their own food at no additional cost. We also provide access to a private kitchen space. Please note that our facility follows a strict nut-free policy."
        },

    ]

    return (
        <Accordion defaultValue={[1]}>

            {faq.map((item, index) => (
                <AccordionItem value={index + 1} key>
                    <AccordionTrigger>
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

export default PartyAccordion;