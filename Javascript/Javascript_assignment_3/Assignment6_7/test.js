const json = '{"first":"Hritik", "last": "Ray"}';
const name = JSON.parse(json);

document.write(name.first);
document.write(name.last)