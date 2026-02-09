import WorkshopAccordion from "@/components/WorkshopAccordion";
import WorkshopForm from "@/components/WorkshopFrom"
import WorkshopCarousel from "../components/WorkshopCarousel";
import FormBtn from "../components/FormBtn";

const Workshops = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-evenly items-center w-3/4">
                <div className="text-3xl font-bold mb-4">
                    Workshops
                </div>
            </div>

            <div className="flex justify-center items-center w-full mb-4">
                <WorkshopCarousel />
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
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <WorkshopForm/>
            </div>
            {/* <FormBtn 
                title={"Workshop Form"}
                form={<WorkshopForm />}
            /> */}
        </div>
    );
}
  
export default Workshops;