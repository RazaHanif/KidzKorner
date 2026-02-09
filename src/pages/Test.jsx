import WorkshopFormBtn from "../components/FormBtn";
import WorkshopForm from "../components/WorkshopFrom";


const Test = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <WorkshopFormBtn 
                title={"Workshop Form"}
                form={<WorkshopForm />}
            />
        </div>
    );
}
  
export default Test;