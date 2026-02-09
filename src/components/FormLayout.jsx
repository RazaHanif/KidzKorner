/* 
    TODO: TEST
*/


const FormLayout = ({ title, form, handleSubmit, submitted }) => {
    return (
        <div className="w-full">
            { submitted ? (
                // TEST THIS
                <div 
                    className="flex flex-col justify-center items-center w-lg text-black bg-card border-2 rounded-lg"
                >
                    Form submitted, thank you!
                </div>
            ) : (
                <div 
                    className='border'
                >
                    <div 
                        className='flex flex-col justify-center items-center w-full text-2xl font-bold text-black'
                    >
                        {title}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col justify-center items-center gap-2 border-2 bg-card rounded-lg pt-4'
                    >
                        { form }
                    </form>
                </div>
            )}
        </div>
    );
};

export default FormLayout;