import { useState, useEffect } from 'react'

function Map() {
    const [mapUrl, setMapUrl] = useState("")

    useEffect( () => {
        fetch('api/maps-url')
        .then(res => res.json())
        .then(data => setMapUrl(data.url)) 
    }, [])

    if (!mapUrl) return <div>Loading map...</div>

    return (
        <iframe
        src={mapUrl}
        allowFullScreen
        loading="lazy"
        style={{ width: "100%", height: "400px", border: 0 }}
      />
    )
}

export default Map