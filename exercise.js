let person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25
}

let keys = Object.keys(person)

for (let key of keys) {
    console.log(key + ": " + person[key]);
}
