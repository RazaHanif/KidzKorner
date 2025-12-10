export default function handler(req, res) {
    const API_KEY = process.env.GOOGLE_MAPS_KEY
    const address = "Kidz Korner Milton"
    const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(address)}`


    res.status(200).sjon({ url })
}

