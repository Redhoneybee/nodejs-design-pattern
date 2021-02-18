function createPerson(name) {
    const privateProperties = {};

    const person = {
        setName: name => {
            if (!name) throw new Error('A person must have a name');
            privateProperties.name = name;
        },
        getName: () => {
            return privateProperties.name;
        }
    };

    person.setName(name);
    return person;
}

const p1 = createPerson('hello');

console.log(p1.getName());
p1.setName('good bye');
console.log(p1.getName());
console.log(p1.privateProperties); // undefined