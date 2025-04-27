function hider() {
    const API_KEY = 'AIzaSyDPny6dN9B3rJv93XQIYh3lY4DDlGC7boU'
    const address = "Kidz Korner Milton"
    const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(address)}`

    console.log(url)
}

hider()