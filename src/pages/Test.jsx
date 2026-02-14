import FormBtn from "../components/FormBtn";
import WorkshopForm from "../components/WorkshopFrom";


const Test = () => {
    return (
        <>
            <FormBtn 
                title={"Workshop Form"}
                form={<WorkshopForm />}
                />
            <title>
                Test Page | Kidz Korner 
            </title>
        </>
    );
}
  
export default Test;