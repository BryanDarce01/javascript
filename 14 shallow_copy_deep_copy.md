# Copiando objetos

### Los valores primitivos solo almacenan en el CALL STACK y los no primitivos en el HEAP
No importa dentro de qué estructura se crean en el código. 

1. Creamos el objeto jessica que contiene su primer nombre, su apellido y su edad

```javascript

// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

```
2. Creamos una función que recibe un array viejo como primer parámetro y el nuevo valor como segundo parámetro

Lo que se hace aquí es que se toma el parámetro '.lastName' y se asigna un nuevo valor a este parámetro

```javascript
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// Aquí se crea un nuevo objeto 'marriedJessica' con los mismos métodos que tiene 'jessica1'
const marriedJessica = marryPerson(jessica1, 'Davis');

// ESTO HACE LO MISMO QUE LA FUNCIÓN
// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

```
En este código el resultado el nuevo valor 'Davis' es asignado a ambas referencias porque apuntan al mimmso objeto en la memoria HEAP
Así que si se modifica el '.lastName' de 'marriedJessica' también se cambia el valor en el objeto 'jessica1'

```javascript
console.log('Before:', jessica1);
console.log('After:', marriedJessica);

```

Aquí se agrega un array que se llama 'family'

```javascript
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};
```

Usando los '...' (3 puntos) se copian los valores primitivos del objeto 'jessica1' al nuevo objeto pero no se copian los objetos, ni arrays ni el resto de valores no primitivos
```javascript

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';
```

Aquí se intenta agregar nuevos elementos al objeto 'jessicaCopy' pero como los valores no primitivos se almacenan en la memoria HEAP, esto significa en la memoria CALL STACK solo se almacenan las referencias de estos valores.

Por eso al modificar los valores del array '.family' del 'jessicaCopy', también se modifican los valores del objeto original 'jessica'
// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

# Deep Copy

Aquí usamos la palabra 'structuredClone' para poder clonar todos los métodos del objeto, es decir, valores primitivos y objetos

```javascript
// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);

```