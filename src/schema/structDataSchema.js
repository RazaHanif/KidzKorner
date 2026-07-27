export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "name": "Kidz Korner",
    "url": "www.https://www.kidzkornermilton.com/",
    "logo": "",
    "image": "",

    // Contact Information
    "telephone": "",
    "email": "",

    // Physical Location
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "",
        "addressRegion": "",
        "postalCode": "",
        "addressCountry": ""
    },

    // Geographic Coordinates
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "",
        "longitude": ""
    },

    // Business Hours
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                ""
            ],
            "opens": "",
            "closes": ""
        }
    ],

    // Price Information (optional)
    "priceRange": "",

    // Social / External Profiles
    "sameAs": [
        ""
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
        "@type": "City",
        "name": ""
    },

    // Parent Organization Reference (optional)
    "parentOrganization": {
        "@type": "Organization",
        "name": ""
    }
};