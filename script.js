

import { KrakenSchemas } from './src/index.js'




let k = KrakenSchemas.get('Action')

let properties = k.propertiesLight

let c = k.get_jsonSchemaLight('en-CA')
console.log(JSON.stringify(c, null, 4))
