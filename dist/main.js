
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $fc80c9a5cd05ad7a$exports = {};
$fc80c9a5cd05ad7a$exports = JSON.parse('{"action":{"propertiesLight":["name","url","alternateName","actionStatus","startTime","endTime","object","result","error"],"headings":{"heading1":{"properties":["name"],"separator":", "},"heading2":{"properties":["url"],"separator":", "},"headingText":{"properties":["description"],"separator":", "}},"name":{"en-US":"action","fr-CA":"action"}},"actionStatus":{"name":{"en-US":"status","fr-CA":"Statut"}},"organization":{"propertiesLight":["name","address","telephone","email","url"],"headings":{"heading1":{"properties":["name"],"separator":", "},"heading2":{"properties":["url"],"separator":", "},"headingText":{"properties":["description"],"separator":", "}},"name":{"en-US":"organization","fr-CA":"entreprise"}},"person":{"propertiesLight":["givenName","familyName","jobTitle","worksFor","address","email","telephone"],"headings":{"heading1":{"properties":["givenName","familyName"],"separator":" "},"heading2":{"properties":["email"],"separator":", "},"headingText":{"properties":["description"],"separator":", "}},"name":{"en-US":"contact","fr-CA":"contact"}},"postaladdress":{"propertiesLight":["streetAddress","addressLocality","addressRegion","addressCountry","postalCode"],"headings":{"heading1":{"properties":["streetAddress","addressLocality","addressRegion"],"separator":", "},"heading2":{"properties":["addressCountry","postalCode"],"separator":", "},"headingText":{"properties":[],"separator":", "}},"name":{"en-US":"address","fr-CA":"adresse"}},"listitem":{"propertiesLight":["name","url","item","position"],"headings":{"heading1":{"properties":["item"],"separator":", "},"heading2":{"properties":["item"],"separator":", "},"headingText":{"properties":["item"],"separator":", "},"headingImage":{"properties":["item"],"separator":", "}},"name":{"en-US":"item","fr-CA":"item"}},"itemlist":{"propertiesLight":["name","url"],"headings":{"heading1":{"properties":["name"],"separator":", "},"heading2":{"properties":["url"],"separator":", "},"headingText":{"properties":["description"],"separator":", "},"headingImage":{"properties":["image"],"separator":", "}},"name":{"en-US":"list","fr-CA":"liste"}},"imageobject":{"propertiesLight":["name","contentUrl"],"headings":{"heading1":{"properties":["name"],"separator":", "},"heading2":{"properties":["contentUrl"],"separator":", "},"headingText":{"properties":["description"],"separator":", "},"headingImage":{"properties":["contentUrl"],"separator":", "},"headingThumbnail":{"properties":["thumbnail"],"separator":", "}},"name":{"en-US":"image","fr-CA":"image"}},"thing":{"propertiesLight":["name","url"],"headings":{"heading1":{"properties":["name"],"separator":", "},"heading2":{"properties":["url"],"separator":", "},"headingText":{"properties":["description"],"separator":", "},"headingImage":{"properties":["image"],"separator":", "},"headingThumbnail":{"properties":["image"],"separator":", "}},"name":{"en-US":"thing","fr-CA":"chose"}},"givenname":{"name":{"en-US":"first name","fr-CA":"pr\xe9nom"}},"familyname":{"name":{"en-US":"last name","fr-CA":"nom"}},"addresscountry":{"name":{"en-US":"country","fr-CA":"pays"}},"addresslocality":{"name":{"en-US":"city","fr-CA":"ville"}},"addressregion":{"name":{"en-US":"state","en-CA":"province","fr-CA":"province"}},"postalcode":{"name":{"en-US":"zipcode","fr-CA":"postalcode"}},"streetaddress":{"name":{"en-US":"street","fr-CA":"rue"}}}');



var $64d05a48ab9166aa$export$487749506ad39f76 = {
    get_heading1: $64d05a48ab9166aa$var$get_heading1,
    get_heading2: $64d05a48ab9166aa$var$get_heading2,
    get_headingText: $64d05a48ab9166aa$var$get_headingText,
    get_headingImage: $64d05a48ab9166aa$var$get_headingImage,
    get_headingThumbnail: $64d05a48ab9166aa$var$get_headingThumbnail
};
function $64d05a48ab9166aa$var$get_heading1(record) {
    return $64d05a48ab9166aa$var$getHeadings(record, "heading1");
}
function $64d05a48ab9166aa$var$get_heading2(record) {
    return $64d05a48ab9166aa$var$getHeadings(record, "heading2");
}
function $64d05a48ab9166aa$var$get_headingText(record) {
    return $64d05a48ab9166aa$var$getHeadings(record, "headingText");
}
function $64d05a48ab9166aa$var$get_headingImage(record) {
    return $64d05a48ab9166aa$var$getHeadings(record, "headingImage");
}
function $64d05a48ab9166aa$var$get_headingThumbnail(record) {
    return $64d05a48ab9166aa$var$getHeadings(record, "headingThumbnail");
}
function $64d05a48ab9166aa$var$getHeadings(record, headingName) {
    // Convert record_type to lowerCase
    var record_type = record["@type"].toLowerCase();
    // Retrive config parameters from config record
    var configRecordHeading = (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_type]?.["headings"]?.[headingName];
    var backupConfigRecordHeading = (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))["thing"]?.["headings"]?.[headingName];
    // Retrives properties and separator. Default to thing if missing
    if (configRecordHeading && configRecordHeading["properties"].length > 0) {
        var keys = configRecordHeading["properties"];
        var separator = configRecordHeading["separator"];
    } else {
        var keys = backupConfigRecordHeading["properties"];
        var separator = backupConfigRecordHeading["separator"];
    }
    // Builds the heading based on the properties
    let values = [];
    // Iterate through eack properties
    for(let i = 0; i < keys.length; i++){
        var value = $64d05a48ab9166aa$var$getPropertyValueFromDot(keys[i], record, headingName);
        values.push(value);
    }
    var newValue = values.filter(Boolean).join(separator);
    return newValue;
}
function $64d05a48ab9166aa$var$getPropertyValueFromDot(key, value, headingName) {
    // Retrieves value by following dot notation
    var items = key.split(".");
    for(let t = 0; t < items.length; t++)value = value[items[t]];
    // If last value element s object, retrives the equivalent heading for object
    if (value && value["@type"]) value = $64d05a48ab9166aa$var$getHeadings(value, headingName);
    return value;
}


function $243f921bb2d204c3$export$fcca1bd111898072(item, depth = 0) {
    return $243f921bb2d204c3$export$ac77e4a22fc845d5(item, true, depth);
}
function $243f921bb2d204c3$export$56902f8707bbdae8(item, depth = 0) {
    //console.log('b', item.record_id);
    return $243f921bb2d204c3$export$ac77e4a22fc845d5(item, false, depth);
}
function $243f921bb2d204c3$export$ac77e4a22fc845d5(item, isLight, depth = 0) {
    // 
    //console.log('it', item.record_type);
    if (item.enumerationItems && item.enumerationItems.length > 0) //console.log('aa');
    return $243f921bb2d204c3$var$getEnumeration(item, isLight, depth);
    else if (item.record_id == "URL") //console.log('bb');
    return $243f921bb2d204c3$var$getUrl(item, isLight, depth);
    else if (item.record_type == "rdfs:Class") {
        //console.log('cc');
        if (depth >= 2) return $243f921bb2d204c3$var$getId(item, isLight, depth);
        else return $243f921bb2d204c3$var$getClass(item, isLight, depth + 1);
    } else if (item.record_type == "rdf:Property") //console.log('dd');
    return $243f921bb2d204c3$var$getProperty(item, isLight, depth);
    else if (item.record_type == "schema:DataType") //console.log('ee');
    return $243f921bb2d204c3$var$getDatatype(item, isLight, depth);
    else console.log("None", item);
}
function $243f921bb2d204c3$var$getEnumeration(item, isLight, depth) {
    // Get enumeration
    var choices = [];
    for(let i = 0; i < item.enumerationItems.length; i++)choices.push(item.enumerationItems[i].record_id);
    var jsonRecord = {
        type: "string",
        choices: choices
    };
    return jsonRecord;
}
function $243f921bb2d204c3$var$getUrl(item, isLight, depth) {
    return {
        type: "string"
    };
}
function $243f921bb2d204c3$var$getId(item, isLight, depth) {
    return {
        title: item.record_id,
        type: "object",
        properties: {
            "@id": "string"
        }
    };
}
function $243f921bb2d204c3$var$getClass(item, isLight, depth) {
    console.log("isLight", isLight);
    if (isLight == true) var properties = item.propertiesLight;
    else var properties = item.properties;
    var jsonRecord = {
        title: item.record_id,
        type: "object",
        properties: {}
    };
    for(let i = 0; i < properties.length; i++){
        var p = properties[i];
        if (p) jsonRecord.properties[p.record_id] = p.get_jsonSchema_system(isLight, depth);
    }
    return jsonRecord;
}
function $243f921bb2d204c3$var$getProperty(item, isLight, depth) {
    var jsonRecord = {
        type: "array",
        items: item.expectedType.get_jsonSchema_system(isLight, depth)
    };
    return jsonRecord;
}
function $243f921bb2d204c3$var$getDatatype(item, isLight, depth) {
    var jsonRecord = {
        type: item.jsonSchemaType,
        tags: [
            item.htmlType
        ]
    };
    return jsonRecord;
}


function $4a59c56fa4789c0f$export$7bfb6d78f4abfcd6(item) {
    // Returns the corresponding html type for forms
    // if
    if (item.parentClasses.includes("Enumeration")) return "select";
    switch(item.record_id){
        case "Boolean":
            return "checkbox";
        case "Date":
            return "date";
        case "DateTime":
            return "datetime-local";
        case "Number":
            return "number";
        case "Float":
            return "number";
        case "Integer":
            return "number";
        case "Text":
            return "text";
        case "CssSelectorType":
            return "text";
        case "PronounceableText":
            return "text";
        case "URL":
            return "url";
        case "url":
            return "url";
        case "XPathType":
            return "text";
        case "Time":
            return "time";
        default:
            return "object";
    }
}


function $51fb36f1b1645e0b$export$9dfd7dd0322cc232(item) {
    if (item.parentClasses.includes("Enumeration")) return "string";
    switch(item.record_id){
        case "Boolean":
            return "boolean";
        case "Date":
            return "string";
        case "DateTime":
            return "string";
        case "Number":
            return "number";
        case "Float":
            return "number";
        case "Integer":
            return "integer";
        case "Text":
            return "string";
        case "CssSelectorType":
            return "string";
        case "PronounceableText":
            return "string";
        case "URL":
            return "string";
        case "url":
            return "string";
        case "XPathType":
            return "string";
        case "Time":
            return "string";
        default:
            return "object";
    }
}



function $44182d1d65121e92$export$6d1a4004247079c5(record_id, locale, defaultValue = null) {
    record_id = record_id.replace("schema:", "");
    record_id = record_id.toLowerCase();
    if ((0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]) {
        // Find exact match
        if ((0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["name"][locale]) return (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["name"][locale];
        // Find closest match
        var keys = Object.keys((0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["name"]);
        var localeLang = locale.slice(0, 2).toLowerCase();
        for(let i = 0; i < keys.length; i++){
            var lang = keys[i].slice(0, 2).toLowerCase();
            var localName = (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["name"][keys[i]];
            if (lang == localeLang && localName) return localName;
        }
    }
    if (defaultValue) return defaultValue;
    return null;
}


0, $243f921bb2d204c3$export$ac77e4a22fc845d5;
class $a7aabfd39e443ba4$export$ef9ff330cb2da1bb {
    /* Contains metadata to qualify a value

    Attributes:
    - classes:
        - parentClasses: the classes (things) that are parent to the schema (thing -> person)
        - properties: the properties items that are part of the class
        - propertiesLight: minimum set of properties
        - jsonSchema: returns jsonSchema for given class
        - jsonSchemaLight: returns jsonSchema with only light properties
    - properties:
        - expectedTypes: list of all types expected for the value of the property
        - expectedType: most frequent type for the property
    - types:    
        - htmlType: returns the html type (text, url, email, etc) for forms
        - enumerationItems: returns expected items for value (dropdown list)
   

    Methods:
    - getProperty(propertyID):   returns a specific property
    - getLocalizedID:            returns localized version of id/propertyID
    - getLocalizedPropertyID:    duplicate
    - get_heading1(record):      given a record, returns heading1 value
    - get_heading2(record):      given a record, returns heading2 value
    - get_headingText(record):   given a record, returns headingText value
    - get_heading_image(record): returns url for the image 
  
    */ constructor(thing = null){
        this._record = {};
        this._thing = thing // Thing to get info from
        ;
        this._properties = []; //inverse of domains includes
        this._subClassOf = []; // Parent classes inheriting from
        this._subClasses = []; // Child classes inheriting from this
        this._expectedTypes = []; // The types that this property can take
        this._enumerationItems = []; // Enumeration items that can be used for this
    }
    toString() {
        this.expectedType;
        let content = `${this.name} -  expected types: ${this.expectedTypes || "na"}  html type: ${this.htmlType || "na"}`;
        return content;
    }
    toJSON() {
        let record = {
            "@type": this.record_type,
            "@id": this.record_id,
            name: this.name,
            properties: this.properties.map((x)=>x.name),
            propertiesLight: this.propertiesLight.map((x)=>x.name),
            expectedTypes: this.expectedTypes.map((x)=>x.name),
            expectedType: this.expectedType?.name || null,
            enumerationItems: this.enumerationItems.map((x)=>x.name)
        };
        return record;
    }
    init() {
        return this.getFromSchemaOrg();
    }
    get record_id() {
        let id = this.record["@id"] || null;
        if (id == null) return null;
        id = id.replace("schema:", "");
        return id;
    }
    get record_type() {
        var record_types = $a7aabfd39e443ba4$var$ensureArray(this.record["@type"]);
        if (record_types.length > 1) {
            for(let i = 0; i < record_types.length; i++){
                if (record_types[i] != "rdfs:Class") return record_types[i];
            }
            return record_types[0];
        }
        return this.record["@type"] || null;
    }
    get thing() {
        return this._thing;
    }
    set thing(value) {
        this._thing = value;
    }
    get name() {
        return this.record_id;
    }
    get record() {
        return this._record;
    }
    set record(value) {
        this._record = value;
    }
    get parentClasses() {
        // Returns array with the parent schema classes in the hierarchy
        let results = [];
        for(let i = 0; i < this._subClassOf.length; i++){
            results.push(this._subClassOf[i].record_id);
            results = results.concat(this._subClassOf[i].parentClasses);
        }
        return results;
    }
    get childClasses() {
        // Returns array with all the childs schema classes in the hierarchy
        let results = [];
        for(let i = 0; i < this._subClasses.length; i++){
            results.push(this._subClasses[i].record_id);
            results = results.concat(this._subClasses[i].childClasses);
        }
        return [
            ...new Set(results)
        ];
    }
    get record_types() {
        // returns childClasses and itself
        let results = [
            this.record_id
        ].concat(this.childClasses).concat(this.parentClasses);
        return [
            ...new Set(results)
        ];
    }
    get properties() {
        // returns own properties and all properties of elements that are parent to it.
        let properties = this._properties;
        for(let i = 0; i < this._subClassOf.length; i++)properties = properties.concat(this._subClassOf[i].properties);
        // Dedupe
        let dedupedProperties = [];
        let recordIds = [];
        for(let i = 0; i < properties.length; i++)if (!recordIds.includes(properties[i].record_id)) {
            dedupedProperties.push(properties[i]);
            recordIds.push(properties[i].record_id);
        }
        // Sort
        function compare(a, b) {
            if (a.record_id < b.record_id) return -1;
            if (a.record_id > b.record_id) return 1;
            return 0;
        }
        dedupedProperties.sort(compare);
        return dedupedProperties;
    }
    get propertiesName() {
        // returns own properties and all properties of elements that are parent to it.
        let properties = this.properties;
        let names = [];
        for(let i = 0; i < properties.length; i++)names.push(properties[i].record_id);
        return names;
    }
    get propertiesLight() {
        // returns own properties and all properties of elements that are parent to it.
        let properties = [];
        let minProp = this.minimumViableProperties;
        for (let m of minProp){
            for(let i = 0; i < this.properties.length; i++)if (m == this.properties[i].record_id) properties.push(this.properties[i]);
        }
        return properties;
    }
    // methods
    getProperty(propertyID) {
        let properties = [
            ...this.properties
        ];
        for(let i = 0; i < properties.length; i++){
            if (properties[i].record_id == propertyID) return properties[i];
        }
        return null;
    }
    get expectedType() {
        if (this._expectedTypes.length == 0) return null;
        if (this._expectedTypes.length == 1) return this._expectedTypes[0];
        for(let i = 0; i < this._expectedTypes.length; i++){
            if (this._expectedTypes[i].htmlType == "object") return this._expectedTypes[i];
        }
        return this._expectedTypes[0];
    }
    get expectedTypes() {
        if (this._expectedTypes) return this._expectedTypes;
        return null;
    }
    get enumerationItems() {
        if (this._enumerationItems) return this._enumerationItems;
        return null;
    }
    get minimumViableProperties() {
        /**
         * Returns most common properties.
         */ //let properties =  this.record[record_id]['minimumKeys'];
        let record_id = this.record_id.toLowerCase();
        let properties;
        if ((0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id] && (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["propertiesLight"] && (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["propertiesLight"].length > 0) properties = (0, (/*@__PURE__*/$parcel$interopDefault($fc80c9a5cd05ad7a$exports)))[record_id]["propertiesLight"];
        else properties = [
            "name",
            "url"
        ];
        console.log("properties", properties);
        return properties;
    }
    // localization
    getLocalizedPropertyID(locale, defaultValue) {
        return (0, $44182d1d65121e92$export$6d1a4004247079c5)(this.record_id, locale, defaultValue);
    }
    // Headings
    _getThingRecord(record) {
        if (record && record != null) return record;
        if (!this._thing || this._thing == null) return null;
        if (this._thing.bestRecord) return this._thing.bestRecord;
        else return this._thing;
    }
    get headings() {
        return this.get_headings();
    }
    get_headings(inputRecord) {
        let thingRecord = this._getThingRecord(inputRecord);
        let record = {
            "@type": thingRecord?.["@type"],
            "@id": thingRecord?.["@id"],
            "heading1": this.get_heading1(thingRecord),
            "heading2": this.get_heading2(thingRecord),
            "headingText": this.get_headingText(thingRecord),
            "headingImage": this.get_headingImage(thingRecord),
            "headingThumbnail": this.get_headingThumbnail(thingRecord)
        };
        return record;
    }
    get_heading1(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_heading1(this._getThingRecord(record));
    }
    get_heading2(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_heading2(this._getThingRecord(record));
    }
    get_headingText(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_headingText(this._getThingRecord(record));
    }
    get_heading_text(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_headingText(this._getThingRecord(record));
    }
    get_headingImage(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_headingImage(this._getThingRecord(record));
    }
    get_heading_image(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_headingImage(this._getThingRecord(record));
    }
    get_headingThumbnail(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_headingThumbnail(this._getThingRecord(record));
    }
    get_heading_thumbnail(record) {
        return (0, $64d05a48ab9166aa$export$487749506ad39f76).get_headingThumbnail(this._getThingRecord(record));
    }
    // types
    get jsonSchemaType() {
        return (0, $51fb36f1b1645e0b$export$9dfd7dd0322cc232)(this);
    }
    get htmlType() {
        // Returns the corresponding html type for forms
        return (0, $4a59c56fa4789c0f$export$7bfb6d78f4abfcd6)(this);
    }
    // Json schemas
    get jsonSchema() {
        return (0, $243f921bb2d204c3$export$56902f8707bbdae8)(this, 0);
    }
    get jsonSchemaLight() {
        return (0, $243f921bb2d204c3$export$fcca1bd111898072)(this, 0);
    }
    // Json schemas
    get_jsonSchema(depth = 0) {
        return (0, $243f921bb2d204c3$export$56902f8707bbdae8)(this, depth);
    }
    get_jsonSchemaLight(depth = 0) {
        return (0, $243f921bb2d204c3$export$fcca1bd111898072)(this, depth);
    }
    // Json schemas
    get_jsonSchema_system(isLight, depth = 0) {
        return (0, $243f921bb2d204c3$export$ac77e4a22fc845d5)(this, isLight, depth);
    }
}
function $a7aabfd39e443ba4$var$ensureNotArray(value) {
    let new_value = $a7aabfd39e443ba4$var$ensureArray(value);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function $a7aabfd39e443ba4$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


var $e166244658e67b32$exports = {};



let $f7b499771431e12f$var$classesDB = [];
let $f7b499771431e12f$var$propertiesDV = [];
let $f7b499771431e12f$var$DB = {};
let $f7b499771431e12f$var$configDB = {};
class $f7b499771431e12f$export$4aa5365f5e56a598 {
    /* Contains metadata to qualify a value

    attributes:
   \


    Methods

    */ constructor(name){
        this._db = $f7b499771431e12f$var$DB;
        this._classes = $f7b499771431e12f$var$classesDB;
        this._properties = $f7b499771431e12f$var$propertiesDV;
        this._config = $f7b499771431e12f$var$configDB;
        this._config.ready = false;
        this._config.inProgress = false;
        this.init();
    }
    _start_init() {
        if (this._config.ready == true) return;
        if (this._config.inProgress == true) return;
        this._config.inProgress = true;
        //console.log('Init Start');
        //await this.getAllSchemas();
        this.getAllSchemas();
        this.classifyItems();
        this.assignPropertiesToClassItems();
        this.assignExpectedTypesToProperties();
        this.assignSubclassOf();
        this.assignEnumerationItems();
        this._config.ready = true;
        this._config.inProgress = false;
        //console.log('Init End');
        return;
    }
    init() {
        this._start_init();
        if (this._config.ready != true) //console.log('wait complete', this._config.ready);
        return;
    }
    get length() {
        return Object.keys(this._db).length;
    }
    get(record_id) {
        return this.getItem(record_id);
    }
    getItem(record_id) {
        if (!record_id) return null;
        record_id = record_id.replace("schema:", "");
        return this._db[record_id];
    }
    get items() {
        return this.getItems();
    }
    getItems() {
        //await this.init();
        let keys = Object.keys(this._db);
        let results = [];
        for(let i = 0; i < keys.length; i++)results.push(this.get(keys[i]));
        return results;
    }
    getAllSchemas() {
        // get the schema.org data from json file (imported in header)
        let item;
        for(let i = 0; i < (0, (/*@__PURE__*/$parcel$interopDefault($e166244658e67b32$exports)))["@graph"].length; i++){
            item = new (0, $a7aabfd39e443ba4$export$ef9ff330cb2da1bb)();
            item.record = (0, (/*@__PURE__*/$parcel$interopDefault($e166244658e67b32$exports)))["@graph"][i];
            this._db[item.record_id] = item;
        }
    }
    classifyItems() {
        //console.log('ClassifyItems Start');
        let items = this.items;
        for(let i = 0; i < items.length; i++){
            let item = items[i];
            if (item.record_type == "rdf:Property") this._properties.push(item);
            if (item.record_type == "rdfs:Class") this._classes.push(item);
        }
        //console.log('ClassifyItems End');
        return;
    }
    assignPropertiesToClassItems() {
        //console.log('assignPropertiesToClassItems Start');
        let items = this.items;
        for(let i = 0; i < items.length; i++){
            let item = items[i];
            if (item._record["schema:domainIncludes"]) {
                var classes = item._record["schema:domainIncludes"];
                classes = $f7b499771431e12f$var$ensureArray(classes);
                for(let ii = 0; ii < classes.length; ii++){
                    //console.log(properties[i], classes);
                    var class_record_id = classes[ii]["@id"];
                    var classObject = this.get(class_record_id);
                    if (classObject && classObject._properties) classObject._properties.push(item);
                }
            }
        }
        //console.log('assignPropertiesToClassItems End');
        return;
    }
    assignExpectedTypesToProperties() {
        //console.log('assignTypesToProperties Start');
        let items = this._properties;
        for(let i = 0; i < items.length; i++)if (items[i]._record["schema:rangeIncludes"]) {
            var domains = items[i]._record["schema:rangeIncludes"];
            domains = $f7b499771431e12f$var$ensureArray(domains);
            if (domains && domains.length > 0) for(let ii = 0; ii < domains.length; ii++){
                var record_id = domains[ii]["@id"];
                record_id = record_id.replace("schema:", "");
                var classObject = this.get(record_id);
                if (classObject) items[i]._expectedTypes.push(classObject);
            }
        }
        //console.log('assignTypesToProperties End');
        return;
    }
    assignSubclassOf() {
        //console.log('assignSubclassOf Start');
        let items = this.items;
        for(let i = 0; i < items.length; i++)if (items[i]._record["rdfs:subClassOf"]) {
            var domains = items[i]._record["rdfs:subClassOf"];
            domains = $f7b499771431e12f$var$ensureArray(domains);
            if (domains && domains.length > 0) for(let ii = 0; ii < domains.length; ii++){
                var record_id = domains[ii]["@id"];
                record_id = record_id.replace("schema:", "");
                var classObject = this.get(record_id);
                if (classObject && classObject.record_id) {
                    items[i]._subClassOf.push(classObject);
                    classObject._subClasses.push(items[i]);
                }
            //classObject._properties.push(items[i]);
            }
        }
        //console.log('assignSubclassOf End');
        return;
    }
    assignEnumerationItems() {
        let items = this.items;
        for(let i = 0; i < items.length; i++){
            let item = items[i];
            let parentClasses = item.record_type;
            parentClasses = $f7b499771431e12f$var$ensureArray(parentClasses);
            for(let t = 0; t < parentClasses.length; t++){
                var parentClass = this.get(parentClasses[t]);
                if (parentClass) parentClass._enumerationItems.push(item);
            }
        }
        //console.log('assignSubTypes End');
        return;
    }
}
function $f7b499771431e12f$var$ensureNotArray(value) {
    let new_value = $f7b499771431e12f$var$ensureArray(value);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function $f7b499771431e12f$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


function $37e17214032cdb08$export$8206feaf78dac055(record_type, record_id = 1) {
    switch(record_type){
        case "Person":
            return $37e17214032cdb08$var$person(record_id);
        case "Organization":
            return $37e17214032cdb08$var$organization(record_id);
        case "Product":
            return $37e17214032cdb08$var$product(record_id);
        case "ItemList":
            return $37e17214032cdb08$var$itemlist(record_id);
        case "ListItem":
            return $37e17214032cdb08$var$listitem(record_id);
        default:
            return $37e17214032cdb08$var$thing(record_id);
    }
}
function $37e17214032cdb08$var$thing(record_id) {
    let record = {
        "@type": "Thing",
        "@id": "thing_" + String(record_id),
        "name": "Test thing_" + String(record_id),
        "url": "https://www.test.com/"
    };
    return record;
}
function $37e17214032cdb08$var$itemlist(record_id) {
    let record = {
        "@type": "ItemList",
        "@id": "ItemList_" + String(record_id),
        "name": "Test ItemList " + String(record_id),
        "url": "https://www.test.com/",
        "itemListElement": [
            $37e17214032cdb08$var$listitem(0),
            $37e17214032cdb08$var$listitem(1),
            $37e17214032cdb08$var$listitem(2),
            $37e17214032cdb08$var$listitem(3),
            $37e17214032cdb08$var$listitem(4),
            $37e17214032cdb08$var$listitem(5),
            $37e17214032cdb08$var$listitem(6),
            $37e17214032cdb08$var$listitem(7),
            $37e17214032cdb08$var$listitem(8),
            $37e17214032cdb08$var$listitem(9)
        ]
    };
    return record;
}
function $37e17214032cdb08$var$listitem(record_id) {
    let record = {
        "@type": "ListItem",
        "@id": "ListItem_" + String(record_id),
        "name": "Test ListItem " + String(record_id),
        "position": record_id,
        "item": $37e17214032cdb08$var$thing(record_id),
        "previousItem": null,
        "nextItem": null
    };
    return record;
}
function $37e17214032cdb08$var$person(record_id) {
    let record = {
        "@type": "Person",
        "@id": "person_" + String(record_id),
        "givenName": "givenName_" + String(record_id),
        "familyName": "familyName_" + String(record_id),
        "email": "test@test.com",
        "telephone": "1-514-111-2222",
        "hasOccupation": {
            "@type": "Occupation",
            "name": "occupation_" + String(record_id)
        },
        "worksfor": {
            "@type": "organization",
            "name": "test_org_" + String(record_id),
            "url": "https://www.test.com"
        }
    };
    return record;
}
function $37e17214032cdb08$var$organization(record_id) {
    let record = {
        "@context": "https://schema.org/",
        "@type": "organization",
        "@id": "abc123",
        "name": "Test org 1",
        "url": "https://www.test.com/"
    };
    return record;
}
function $37e17214032cdb08$var$postalAddress(record_id) {
    let record = {
        "@type": "PostalAddress",
        "streetAddress": "7 S. Broadway",
        "addressLocality": "Denver",
        "addressRegion": "CO",
        "postalCode": "80209",
        "addressCountry": "US"
    };
    return record;
}
function $37e17214032cdb08$var$product(record_id) {
    let record = {
        "@context": "https://schema.org",
        "@type": "Product",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "3.5",
            "reviewCount": "11"
        },
        "description": "0.7 cubic feet countertop microwave. Has six preset cooking categories and convenience features like Add-A-Minute and Child Lock.",
        "name": 'Kenmore White 17" Microwave',
        "image": "kenmore-microwave-17in.jpg",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "55.00",
            "priceCurrency": "USD"
        },
        "review": [
            {
                "@type": "Review",
                "author": "Ellie",
                "datePublished": "2011-04-01",
                "reviewBody": "The lamp burned out and now I have to replace it.",
                "name": "Not a happy camper",
                "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "1",
                    "worstRating": "1"
                }
            },
            {
                "@type": "Review",
                "author": "Lucas",
                "datePublished": "2011-03-25",
                "reviewBody": "Great microwave for the price. It is small and fits in my apartment.",
                "name": "Value purchase",
                "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "4",
                    "worstRating": "1"
                }
            }
        ]
    };
    return record;
}
function $37e17214032cdb08$var$invoice(record_id) {
    let record = {
        "@context": "https://schema.org/",
        "@type": "Invoice",
        "broker": {
            "@type": "LocalBusiness",
            "name": "ACME Home Heating"
        },
        "accountId": "xxxx-xxxx-xxxx-1234",
        "customer": {
            "@type": "Person",
            "name": "Jane Doe"
        },
        "paymentDueDate": "2015-01-30",
        "minimumPaymentDue": {
            "@type": "PriceSpecification",
            "price": 0.00,
            "priceCurrency": "USD"
        },
        "totalPaymentDue": {
            "@type": "PriceSpecification",
            "price": 0.00,
            "priceCurrency": "USD"
        },
        "paymentStatus": "https://schema.org/PaymentComplete",
        "referencesOrder": [
            {
                "@type": "Order",
                "description": "furnace",
                "orderDate": "2014-12-01",
                "orderNumber": "123ABC",
                "paymentMethod": "http://purl.org/goodrelations/v1#ByInvoice",
                "orderedItem": {
                    "@type": "Product",
                    "name": "ACME Furnace 3000",
                    "productID": "ABC123"
                }
            },
            {
                "@type": "Order",
                "description": "furnace installation",
                "orderDate": "2014-12-02",
                "paymentMethod": "http://purl.org/goodrelations/v1#ByInvoice",
                "orderedItem": {
                    "@type": "Service",
                    "description": "furnace installation"
                }
            }
        ]
    };
    return record;
}
function $37e17214032cdb08$var$action(record_id) {
    let record = {
        "@context": "https://schema.org",
        "@type": "Action",
        "agent": {
            "@type": "Person",
            "name": "John"
        },
        "object": {
            "@type": "MusicGroup",
            "name": "Pink!"
        },
        "participant": {
            "@type": "Person",
            "name": "Steve"
        },
        "location": {
            "@type": "Residence",
            "name": "Ann's apartment"
        },
        "instrument": {
            "@type": "Product",
            "name": "iPod"
        },
        "actionStatus": "completedActionStatus"
    };
    return $37e17214032cdb08$var$action;
}


var $cf838c15c8b009ba$export$fd8394fce9fb2453 = new (0, $f7b499771431e12f$export$4aa5365f5e56a598)();
var $cf838c15c8b009ba$export$ef9ff330cb2da1bb = (0, $a7aabfd39e443ba4$export$ef9ff330cb2da1bb);
var $cf838c15c8b009ba$export$8206feaf78dac055 = (0, $37e17214032cdb08$export$8206feaf78dac055);


export {$cf838c15c8b009ba$export$fd8394fce9fb2453 as KrakenSchemas, $cf838c15c8b009ba$export$ef9ff330cb2da1bb as KrSchemaItem, $cf838c15c8b009ba$export$8206feaf78dac055 as KrSamples};
//# sourceMappingURL=main.js.map