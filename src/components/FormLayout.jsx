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
                <form
                    onSubmit={ handleSubmit }
                    className='w-full flex flex-col justify-center items-center gap-2 border-2 bg-card rounded-lg shadow-lg py-4'
                >
                    <div 
                        className='text-2xl font-semibold underline'
                    >
                        {title}
                    </div>
                    { form }
                </form>
            )}
        </div>
    );
};

export default FormLayout;