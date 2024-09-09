# kraken_js_schema

JS library for schema.org



## Test and publish

```
node --experimental-vm-modules node_modules/.bin/jest

npm adduser
npm publish

```


## How to use

```
import { KrakenSchemas } from 'https://tactik8.github.io/krakenJsSchema/kraken_schema/kraken_schema.js'

let k = KrakenSchemas.get(record_type)


```

## Running tests
node --experimental-vm-modules node_modules/.bin/jest

## Attributes

- k.properties: list of properties objects
- l.propertiesLight: mvp list of properties object


## Examples

```
let k = KrakenSchemas.get('Person')

let p = k.getProperty('givenName')

p.getLocalizedPropertyID('en-US')) --> 'first name'




```