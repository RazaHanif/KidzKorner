import WorkshopAccordion from "../components/WorkshopAccordion";
import WorkshopForm from "../components/WorkshopFrom"

const Workshops = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex justify-center items-center w-3/4 mb-4">
                <WorkshopAccordion />
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center w-3/4 gap-2">
                <img 
                    src='/K_K_11.jpg'
                    alt='Kid playing with dinos'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                />
                <img 
                    src='/K_K_23.jpg'
                    alt='Kid doing activity'
                        className="w-xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                />
                <img 
                    src='/K_K_32.jpg'
                    alt='Kid tie dyeing shirt'
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                />
            </div>
            <div className="flex justify-center items-center w-3/4">
                <WorkshopForm/>
            </div>
        </div>
    );
}
  
export default Workshops;