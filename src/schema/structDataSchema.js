export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "name": "Kidz Korner",
    "url": "https://www.kidzkornermilton.com/",
    "description": "Kidz Korner Milton is a licensed daycare and childcare centre providing toddler daycare, preschool programs, before and after school care, and children's camps for families in Milton, Ontario.",
    "logo": "https://www.kidzkornermilton.com/logo.png",

    // Contact Information
    "telephone": "+19058784697",
    "email": "info@kidzkornermilton.com",

    // Physical Location
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "150 Nipissing Rd Units #10 & 11",
        "addressLocality": "Milton",
        "addressRegion": "ON",
        "postalCode": "L9T 5B3",
        "addressCountry": "CA"
    },

    // Geographic Coordinates
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.520355957183526",
        "longitude": "-79.87087932528735"
    },

    // Business Hours
    "openingHoursSpecification": [
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    }
],

    // Social / External Profiles
    "sameAs": [
        "https://www.instagram.com/kidz.kornermilton/"
    ],

    // Services Offered
    "makesOffer": [
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "",
                "description": ""
            }
        }
    ],

    // Area Served
    "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "43.526646",
            "longitude": "-79.891205°"
        },
        "geoRadius": 30000
    },
};