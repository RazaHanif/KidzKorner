const FormLayout = ({ title, form, handleSubmit, submitted }) => {
    return (
        <div className="w-full lg:w-3/4">
            { submitted ? (
                <div 
                    className='w-full flex flex-col justify-center items-center shadow-lg bg-card gap-4 border-2 rounded-lg lg:py-16 py-8'
                >
                    Form submitted, thank you!
                </div>
            ) : (
                <form
                    onSubmit={ handleSubmit }
                    className='w-full flex flex-col justify-center items-center shadow-lg bg-card gap-4 border-2 rounded-lg lg:py-16 py-8'
                >
                    <h2 
                        className='lg:text-3xl text-2xl font-serif hidden'
                    >
                        {title}
                    </h2>
                    { form }
                </form>
            )}
        </div>
    );
};

export default FormLayout;