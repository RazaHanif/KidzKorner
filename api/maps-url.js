export default function hider(req, res) {
    const API_KEY = process.env.GOOGLE_MAPS_API
    const address = "Kidz Korner Milton"
    const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(address)}`

    console.log(url)
}

hider()