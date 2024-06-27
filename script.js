

import { KrakenSchemas } from './src/index.js'




let s = KrakenSchemas.get('Thing')

s.thing = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1",
        "description": "desc1"
    }





console.log(s.headings)

