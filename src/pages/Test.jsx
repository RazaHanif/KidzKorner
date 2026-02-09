import FormBtn from "../components/FormBtn";
import WorkshopForm from "../components/WorkshopFrom";


const Test = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <FormBtn 
                title={"Workshop Form"}
                form={<WorkshopForm />}
            />
        </div>
    );
}
  
export default Test;