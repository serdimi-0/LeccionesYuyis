// Esto es un comentario, una sola línea

/* Esto es
un comentario
de varias líneas
el código aquí no se ejecuta
console.log('Hola')
*/

// 0 - Declaración y Asignación

let numero = 1;
let variable;
console.log('La variable numero es: ' + numero);
console.log('La variable variable es: ' + variable);

// let variable = 2; NO PUEDO DECLARAR ALGO YA DECLARADO
variable = 2;
console.log('La variable variable es: ' + variable);

// 1- Variables número

let a = 1;
let b = 2;

let c = a + b; // Aqui la suma suma
console.log('La variable c es: ' + c);

// 2- Variables booleanas
let elYuyisEsGuapo = true;
let elSergioEsFeo = false;

// 3 - Carácteres
let caracter = 'a';
let caracter2 = "a";
let caracter3 = `a`;

// Concatenar carácteres
let cadena = caracter + caracter2 + caracter3; // Aqui la suma concatena
console.log('La variable cadena es: ' + cadena);

// 4 - Strings o Cadenas: muchos caracteres, se declaran igual que los caracteres
let string = 'hola.';
let stringReshulona = 'Incluso con emojis!! 😲';

// IMPORTANTE: Javascript convierte las variables de un tipo a otro según le convenga
// recordemos que a y b son números enteros.
// Los paréntesis tienen prioridad, se calculan primero
console.log('a + b = ' + (a + b)); // esto es una suma de numeros
console.log('string + b = ' + (string + b)); // Javascript ve que string es una cadena, y entonces convierte b en string para concatenar
// temporalmente, para hacer el console.log, b ha pasado de ser 2 a ser '2'

// Entonces tenemos cosas raras como:
console.log('a=' + a + ' y b=' + b + '. Voy a calcular a + b:');
console.log('a + b = ' + a + b);
// Aqui hay un comportamiento raro 🤑
// 'a + b = ' es un string (un literal string)
// Y como JS ha visto que querias "sumar" un string con un numero
// Ha deducido que sería oportuno coger la a y pasarla a string
// y coger la b y pasarla a string para concatenar

// POR ESO ES IMPORTANTE SABER CON QUÉ TIPO DE VARIABLES ESTÁS OPERANDO
// SUGERENCIA: cuando sumes un numero y un string, asegurate de castearlo

// Castear= pasar de un tipo de variable a otro. JS lo hace solo, no deberias preocuparte
// Pero para tenerlo claro es buena idea castear:

let decimal = 1.78;
console.log(decimal + 1);
decimal = String(decimal); // He casteado decimal, ya no es un decimal literal, es un string
console.log(decimal + 1);