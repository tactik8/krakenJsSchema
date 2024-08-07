

import { KrakenSchemas } from './src/index.js'




let s = KrakenSchemas.get('Thing')

s.thing = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1",
        "description": "desc1",
    "image": {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            "name": "image_1",
            "contentUrl": "https://placehold.co/600x400"
        }
    
    }





console.log(JSON.stringify(s, null, 4))

