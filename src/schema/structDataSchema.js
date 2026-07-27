export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "name": "Kidz Korner",
    "url": "https://www.kidzkornermilton.com/",
    "logo": "",
    "image": "",

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
        "addressCountry": "Canada"
    },

    // Geographic Coordinates
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.741895",
        "longitude": "-73.989308"
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