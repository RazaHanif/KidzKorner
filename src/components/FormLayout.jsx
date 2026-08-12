const FormLayout = ({ title, form, handleSubmit, submitted }) => {
    return (
        <div className="w-full lg:w-3/4">
            { submitted ? (
                <div 
                    className='w-full flex flex-col justify-center items-center gap-2 border-2 bg-card rounded-lg shadow-lg py-4'
                >
                    Form submitted, thank you!
                </div>
            ) : (
                <form
                    onSubmit={ handleSubmit }
                    className='w-full flex flex-col justify-center items-center shadow-lg bg-card gap-4 border-2 rounded-lg py-12'
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