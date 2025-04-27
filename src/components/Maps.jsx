import { useState, useEffect } from 'react'

function Map() {
    const [mapUrl, setMapUrl] = useState("")

    useEffect( () => {
        fetch('api/maps-url')
    })
}

export default Map