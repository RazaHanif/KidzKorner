import KKAccordion from "./KKAccordion"
import KKAccordionItem from "./KKAccordionItem"

const PlaygroundAccordion = () => {
    return (
        <KKAccordion 
            AccordionItems={
                <KKAccordionItem
                    Trigger={"Drop In"}
                    Content={"$15 per Family"}
                    Num="1"
                />
            }
        />
    )
}

export default PlaygroundAccordion
 