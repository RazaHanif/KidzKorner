const Image = ({src, alt}) => {
    return (
        <img 
            src={src}
            alt={alt}
            className="md:w-3xs w-full rounded-lg border-2 shadow-lg"
            loading="lazy"
        />
    )
}

export default Image