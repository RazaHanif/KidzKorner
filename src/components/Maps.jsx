import { useState, useEffect } from 'react'

function Maps() {
    const [mapUrl, setMapUrl] = useState("")

    useEffect( () => {
        fetch('api/maps-url')
        .then(res => res.json())
        .then(data => setMapUrl(data.url)) 
    }, [])

    if (!mapUrl) return <div>Loading map...</div>

    return (
        <div className='map-container'>
            <iframe
                title='Kidz Korner Milton'
                className='map'
                src={mapUrl}
                allowFullScreen
                loading='lazy'
            />
        </div>
    )
}

export default Maps