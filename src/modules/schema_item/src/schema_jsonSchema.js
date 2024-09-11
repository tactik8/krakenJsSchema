
import {get_localizedName} from './schema_localization.js'




export function get_jsonSchemaLight(item, depth=0, locale=null) {
    return jsonSchemaBuilder(item, true, depth, locale);
}

export function get_jsonSchema(item, depth=0, locale=null) {
    return jsonSchemaBuilder(item, false, depth, locale);
}

    
export function jsonSchemaBuilder(item, isLight, depth=0, locale=null) {

    // 

       
    if (item.enumerationItems && item.enumerationItems.length > 0) {
        return getEnumeration(item, isLight, depth, locale);
    } else if (item.record_id == "URL") {
        return getUrl(item, isLight, depth, locale);
    } else if (item.record_type == "rdfs:Class") {
        if(depth >= 2) { return getId(item, isLight, depth, locale)} else {
        return getClass(item, isLight, depth +1, locale)};
    } else if (item.record_type == "rdf:Property") {
        return getProperty(item, isLight, depth, locale);
    } else if (item.record_type == "schema:DataType") {
        return getDatatype(item, isLight, depth, locale);
    } else{
    }
}





function getEnumeration(item, isLight, depth, locale) {
    console.log('l', locale)
    // Get enumeration
    var choices = [];
    var enumValue = []
    for (let i = 0; i < item.enumerationItems.length; i++) {
        let name = item.enumerationItems[i].record_id
        choices.push(item.enumerationItems[i].record_id);
            enumValue.push({'title': get_localizedName(name, locale, name), 'const': name})
    }

    var jsonRecord = {
        type: "string",
        choices: choices,
        enum: enumValue
        
    };
    return jsonRecord;
}

function getUrl(item, isLight, depth, locale) {
    return {
        title: get_localizedName(item.record_id, locale, item.record_id),
        type: 'string',
    };
}


function getId(item, isLight, depth, locale) {
    
    return {
        title: get_localizedName(item.record_id, locale, item.record_id),
        type: "object",
        properties: {
            "@id": "string"
        }
    };
}


function getClass(item, isLight, depth, locale) {

    
    if(isLight==true){
        var properties = item.propertiesLight;
    } else { 
        var properties = item.properties;
   };

    
    var jsonRecord = {
        title: get_localizedName(item.record_id, locale, item.record_id),
        type: "object",
        properties: {},
    };

    for (let i = 0; i < properties.length; i++) {
        var p = properties[i];
        if (p) {
            jsonRecord.properties[p.record_id] = p.get_jsonSchema_system(isLight, depth, locale);
        }
    }

    return jsonRecord;
}

function getProperty(item, isLight, depth, locale) {

        var jsonRecord = {
            title: get_localizedName(item.record_id, locale, item.record_id),
            type: "array",
            items: item.expectedType.get_jsonSchema_system(isLight, depth, locale),
        };
        return jsonRecord;
  
}

function getDatatype(item, isLight, depth, locale) {
    var jsonRecord = {
        title: get_localizedName(item.record_id, locale, item.record_id),
        type: item.jsonSchemaType,
        tags: [item.htmlType],
    };
    return jsonRecord;
}

