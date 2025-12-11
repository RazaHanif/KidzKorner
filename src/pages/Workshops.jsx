import WorkshopAccordion from "../components/WorkshopAccordion";
import WorkshopForm from "../components/WorkshopFrom"

const Workshops = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-center items-center w-3/4">
                <WorkshopAccordion />
            </div>
            <div>
                <img 
                    src='/K_K_39.jpg'
                    alt='Kidz Korner Store Front'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                />
                <img 
                    src='/K_K_39.jpg'
                    alt='Kidz Korner Store Front'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                />
                <img 
                    src='/K_K_39.jpg'
                    alt='Kidz Korner Store Front'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                />
                <img 
                    src='/K_K_39.jpg'
                    alt='Kidz Korner Store Front'
                    className="w-3xs rounded-lg border-2 shadow-lg"
                />
            </div>
            <div className="flex justify-center items-center w-3/4">
                <WorkshopForm/>
            </div>
        </div>
    );
}
  
export default Workshops;