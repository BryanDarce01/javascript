//Objeto Producto

const producto = {
    nombre: 'Tablet',
    precio: 50,
    disponible: false
    
}
// Este array se va a llenar con los tipos de datos de los valores del objeto producto
types = {}

// Forma de acceder a los valores de un objeto
for (let i = 0; i <producto.length; i++){
    console.log(producto[i]);


    // Forma de acceder a los tipos de datos de un objeto

    // También se puede llenar un array basado en otro array
    types[i] = typeof producto[i];

    //Esta forma es más limpia
    types.push(typeof producto[i]);
}


// Continue and Break

// 1. Continue

for (let i = 0; i <producto.length; i++){
    if (typeof producto[i] !== 'string') continue;
    console.log(producto[i], typeof producto[i]);

}

// 2. Break
for (let i = 0; i <producto.length; i++){
    if (typeof producto[i] === 'number') break;
    console.log(producto[i], typeof producto[i]);

}

// Loop de regreso

for (let i = producto.length - 1; i >= 0; i--){
    console.log(producto[i]);
}

// Loop dentro de otro loop

for (let i = 0; i < 10; i++){
    console.log(`Numero: ${i}`);

    for (let x = 0; x < 10; x++){
        console.log(`Esta es i ${i} Esta es x: ${x}`);
    }
}

// While loop

let i = 0; // Se neceista una variable de inicio que este fuera del loop
while(i < 10){
    console.log(`Numero: ${i}`);
    i++; // Se necesita un incremento dentro del loop
}

// Diferencia entre While y For

// For: Se usa cuando se sabe cuantas veces se va a repetir el loop y los parametros de inicio, final y el incremento se ponen en la primera linea
// While: Se usa cuando no se sabe cuantas veces se va a repetir el loop y el incremento se pone dentro del loop

// forEach loop
// Este iterador es más corto y limpio que un for loop porque no necesita declarar una variable de inicio, final e incremento
// Este iterador ejecuta una función para cada elemento del array
const nombres = [ 'pedro', 'juan', 'carlos']
nombres.forEach(function(nombre){
    console.log(nombre);
});

// Map
// Este iterador es igual que forEach pero se usa para crear un nuevo array
// A diferencia de forEach, map devuelve un nuevo array en base a la condición que se le pase
nombres.map(function(nombre){
    console.log(nombre);
});

// For of
// Este iterador es igual que forEach
for (nombre of nombres){
    console.log(nombre);
}
