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
        {
            q: "Is the playground private?",
            a: "Yes. During your booking, the indoor playground is reserved exclusively for your party and invited guests."
        },
        {
            q: "How many guests can attend?",
            a: "Our party packages accommodate up to 50 guests."
        },
        {
            q: "Can we decorate?",
            a: "Absolutely! Families are welcome to bring their own food at no additional cost. We also provide access to a private kitchen space. Please note that our facility follows a strict nut-free policy."
        },
        {
            q: "Can we bring our own Food?",
            a: "Yes. Families are welcome to bring their own food at no additional cost. We also provide access to a private kitchen space. Please note that our facility follows a strict nut-free policy."
        },
        {
            q: "Can we bring our own Food?",
            a: "Yes. Families are welcome to bring their own food at no additional cost. We also provide access to a private kitchen space. Please note that our facility follows a strict nut-free policy."
        },

    ]

    return (
        <Accordion 
            className="w-full"
        >

            {faq.map((item, index) => (
                <AccordionItem 
                    value={index + 1} 
                    key={index + 1}
                >
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