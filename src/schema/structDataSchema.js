const URL = "https://www.kidzkornermilton.com/"
const SAME_AS = [ "https://www.instagram.com/kidz.kornermilton/" ]
const EMAIL = "info@kidzkornermilton.com"
const PHONE = "+19058784697"
const BUSINESS_ID = "https://www.kidzkornermilton.com/#business"
const ORGANIZATION_ID = "https://www.kidzkornermilton.com/#organization"
const WEBSITE_ID = "https://www.kidzkornermilton.com/#website"


export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "name": "Kidz Korner",
    "id": BUSINESS_ID,
    "parentOrganization": {
        "id": ORGANIZATION_ID
    },
    "url": URL,
    "description": "Kidz Korner Milton is a licensed daycare and childcare centre providing toddler daycare, preschool programs, before and after school care, and children's camps for families in Milton, Ontario.",
    "logo": "https://www.kidzkornermilton.com/logo.png",
    "telephone": PHONE,
    "email": EMAIL,
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

    "sameAs": SAME_AS,

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

    "@id": ORGANIZATION_ID,
    "name": "Kidz Korner",
    "url": URL,
    "logo": "https://www.kidzkornermilton.com/logo.png",
    "description": "Kidz Korner is a family-owned childcare organization providing licensed daycare, preschool programs, camps, and children's activities in Milton, Ontario.",
    "email": EMAIL,
    "telephone": PHONE,
    "sameAs": SAME_AS,

    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": PHONE,
        "contactType": "Customer Service",
        "email": EMAIL
    },

    "location": {
        "@id": BUSINESS_ID
    }
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": WEBSITE_ID,

    "url": URL,
    "name": "Kidz Korner",
    "description": "",

    // Website Owner
    "publisher": {
        "@id": ""
    },

    // Search Functionality (optional)
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": ""
        },
        "query-input": "required name=search_term_string"
    }
};