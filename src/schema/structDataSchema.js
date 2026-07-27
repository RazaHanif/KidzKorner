export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "name": "Kidz Korner",
    "url": "https://www.kidzkornermilton.com/",
    "description": "Kidz Korner Milton is a licensed daycare and childcare centre providing toddler daycare, preschool programs, before and after school care, and children's camps for families in Milton, Ontario.",
    "logo": "https://www.kidzkornermilton.com/logo.png",
    "telephone": "+19058784697",
    "email": "info@kidzkornermilton.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "150 Nipissing Rd Units #10 & 11",
        "addressLocality": "Milton",
        "addressRegion": "ON",
        "postalCode": "L9T 5B3",
        "addressCountry": "CA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.520355957183526",
        "longitude": "-79.87087932528735"
    },

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

    "sameAs": [
        "https://www.instagram.com/kidz.kornermilton/"
    ],

    "makesOffer": [
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Toddler Daycare",
                "description": "Licensed daycare program for toddlers in Milton, Ontario."
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Preschool Daycare",
                "description": "Licensed daycare program for preschoolers in Milton, Ontario."
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Preschool Program",
                "description": "Early learning preschool program focused on social, emotional, and developmental growth."
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Before and After School Care",
                "description": "Licensed before and after school care program for school-age children in Milton."
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "School Age Camps",
                "description": "Licensed camps offered during PA days, March Break, Summer Break, and Winter Break."
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Indoor Playground",
                "description": "Indoor playground activities and birthday party experiences for children."
            }
        }
    ],

    "areaServed": [
        {
            "@type": "City",
            "name": "Milton"
        },
        {
            "@type": "City",
            "name": "Oakville"
        },
        {
            "@type": "City",
            "name": "Burlington"
        },
        {
            "@type": "City",
            "name": "Mississauga"
        },
        {
            "@type": "City",
            "name": "Halton Hills"
        }
    ],
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "43.526646",
            "longitude": "-79.891205"
        },
        "geoRadius": 20000
    },
};

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "",

    // Organization Information
    "name": "",
    "url": "",
    "logo": "",
    "description": "",

    // Contact Information
    "email": "",
    "telephone": "",

    // Brand / Social Profiles
    "sameAs": [
        ""
    ],

    // Contact Point (optional)
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "",
        "email": ""
    },

    // Location Relationship (connects to LocalBusiness)
    "location": {
        "@id": ""
    }
};