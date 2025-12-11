import WorkshopAccordion from "../components/WorkshopAccordion";
import WorkshopForm from "../components/WorkshopFrom"

const Workshops = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-center items-center w-3/4">
                <WorkshopAccordion />
            </div>
            <div className="flex justify-center items-center w-3/4">
                <WorkshopForm/>
            </div>
        </div>
    );
}
  
export default Workshops;