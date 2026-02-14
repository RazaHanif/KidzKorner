const FormLayout = ({ title, form, handleSubmit, submitted }) => {
    return (
        <div className="w-full md:w-3/4">
            { submitted ? (
                // TEST THIS
                <div 
                    className='w-full flex flex-col justify-center items-center gap-2 border-2 bg-card rounded-lg shadow-lg py-4'
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