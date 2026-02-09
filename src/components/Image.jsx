const Image = ({src, alt, w='md:w-3xs w-full'}) => {
    const style = `${w} rounded-lg border-2 shadow-lg`
    return (
        <img 
            src={src}
            alt={alt}
            className={style}
            loading="lazy"
        />
    )
}

export default Image