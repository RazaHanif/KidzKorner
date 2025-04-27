function Maps() {
    if (!process.env.GOOGLE_MAPS_KEY) {
        throw new Error("Google Maps API Key is missing!")
    }
    
    const API_KEY = process.env.GOOGLE_MAPS_KEY

    const address = "Kidz Korner Milton"
    const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(address)}`

    if (!url) return <div>Loading map...</div>

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