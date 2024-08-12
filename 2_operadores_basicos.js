// Ya hemos visto algunas operaciones como sumar y concatenar
// Ambas se hacen con el simbolo +

// Suma
console.log(1 + 1);

// Concatenación entre strings
console.log("hola" + " que tal");

// Concatenación de numero y string con casteo automatico
console.log('hola' + 1);

// 1 - OPERACIONES LÓGICAS (con boolenos)
let soyGuapo = true;
let soyRico = false;
let soyGordo = false;

// AND: con que una sea false, será false
console.log(soyGuapo && soyRico);
// OR:  con que haya una true, ya será true
console.log(soyGuapo || soyRico);

// Prioridad: se hacen primero los ands a no ser que pongamos paréntesis
console.log('soyGuapo || soyRico && soyGordo:');
console.log(soyGuapo || soyRico && soyGordo);
console.log('(soyGuapo || soyRico) && soyGordo:');
console.log((soyGuapo || soyRico) && soyGordo);


// No hace falta rallarse, pero tener en cuenta que JS también convierte
// otros tipos de variable a booleano si lo necesita de manera muy caótica
// Ejemplo: undefined lo trata como false, '0' lo trata como false, etc...

// Operadores matemáticos de toda la vida
console.log(2 + 1);
console.log(2 - 1);
console.log(2 * 1); // Multiplicar
console.log(2 / 1); // Dividir
console.log(Math.round(1.50)); // Redondear
console.log(Math.pow(2,3)); // Elevar a

// Operadores con strings
console.log('hola' + ' que tal'); //concatenar

let string = 'hola que tal, ¿cómo estás?';
console.log(string.replace('h', 'H'));
console.log(string.replaceAll('a', 'A'));
console.log(string.slice(3));
// etc.



