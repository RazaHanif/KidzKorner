const Image = ({src, alt}) => {
    return (
        <img 
            src={src}
            alt={alt}
            className="w-3xs rounded-lg border-2 shadow-lg"
            loading="lazy"
        />
    )
}

export default Image