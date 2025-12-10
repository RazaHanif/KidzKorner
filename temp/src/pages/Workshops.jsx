import WorkshopAccordion from "../components/WorkshopAccordion";
import WorkshopForm from "../components/WorkshopFrom"

const Workshops = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="flex justify-center items-center w-full">
                <WorkshopAccordion />
            </div>
            <div className="flex justify-center items-center w-full">
                <WorkshopForm/>
            </div>
        </div>
    );
}
  
export default Workshops;