const fs = require('fs');
const faker = require('faker');

let index = 1;

while (index <= 1000) {
    let firstName = `${faker.name.findName()} \n`;
    fs.appendFileSync('names.txt', firstName);
    index++;
}

console.log('Se ha generado el archivo con los 1000 nombres falsos!!!');







