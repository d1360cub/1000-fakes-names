const fs = require('fs');
const faker = require('faker');


let firstName = `${faker.name.findName()} \n`;
fs.writeFile('names.txt',firstName, (err) => {
    if (err) throw err;
    console.log('Se ha generado el archivo con los 1000 nombres falsos!!!');
});

let index = 1;
while (index <= 1000) {
    let names = `${faker.name.findName()} \n`;
    fs.appendFileSync('names.txt', names); 
    index++;   
}







