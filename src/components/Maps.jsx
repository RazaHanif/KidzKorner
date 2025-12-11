function Maps() {
    if (!import.meta.env.GOOGLE_MAPS_KEY) {
        throw new Error("Google Maps API Key is missing!")
    }
    
    const url = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.GOOGLE_MAPS_KEY}&q=${encodeURIComponent('Kidz Korner Milton')}`

    return (
        <div className='map-container'>
            <iframe
                title='Kidz Korner Milton'
                className='map'
                src={url}
                allowFullScreen
                loading='lazy'
            />
        </div>
    )
}

export default Maps