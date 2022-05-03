const jsonText = '{"firstName":"Sam", "lastName":"Li", "address":{"state":"VIC", "city":"Mel"}, "array":["1","2"]}';
console.log(JSON.parse(jsonText));
console.log(JSON.stringify({ a: 1, b: 2 }));
'{"a":1,"b":2}'