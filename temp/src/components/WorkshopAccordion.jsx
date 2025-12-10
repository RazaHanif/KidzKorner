import KKAccordion from "./KKAccordion"
import KKAccordionItem from "./KKAccordionItem"

const WorkshopAccordion = () => {
    return (
        <KKAccordion 
            AccordionItems={
                <>
                    <KKAccordionItem
                        Trigger={"Paint Night"}
                        Content={
                            <a 
                            href="https://www.instagram.com/kidz.kornermilton/"
                            >
                                For more deails check our Instagram!
                            </a>
                        }
                        Num={"1"}
                    />
                    <KKAccordionItem
                        Trigger={"Cooking Class"}
                        Content={
                            <a 
                            href="https://www.instagram.com/kidz.kornermilton/"
                            >
                                For more deails check our Instagram!
                            </a>
                        }
                        Num={"2"}
                    />
                    <KKAccordionItem
                        Trigger={"Little Sahaba's"}
                        Content={
                            <a 
                            href="https://www.instagram.com/kidz.kornermilton/"
                            >
                                For more deails check our Instagram!
                            </a>
                        }
                        Num={"3"}
                    />
                    <KKAccordionItem
                        Trigger={"Mommy & Me"}
                        Content={
                            <a 
                            href="https://www.instagram.com/kidz.kornermilton/"
                            >
                                For more deails check our Instagram!
                            </a>
                        }
                        Num={"4"}
                    />
                </>
            }
        />
    )
}

export default WorkshopAccordion
 