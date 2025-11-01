# 🧠 Mi conocimientos de JavaScript
Este repositorio resume mis aprendizajes y fundamentos sólidos en **[JavaScript moderno ES6+](https://www.udemy.com/course/the-complete-javascript-course/)**, desde conceptos básicos hasta programación avanzada orientada a objetos, asincronía, manejo del DOM, módulos y buenas prácticas.

---

## ⚙️ Fundamentos del Lenguaje

- Declaración de variables con `let`, `const` y `var`.
- Tipos de datos primitivos y estructurados.
- Operadores lógicos, aritméticos y de comparación.
- Manejo de números y métodos nativos:
  - `Math.ceil()`, `Math.floor()`, `Math.max()`, `Math.min()`, `Math.trunc()`, `toFixed()`, etc.
- Uso de **BigInt** para manejar enteros grandes.
- Manipulación de **fechas** con `Date()`.
- Uso de **operador módulo (%)** (*remainder operator*).
- Diferencia entre `++i` (prefijo) y `i++` (sufijo).

---

## 🔁 Estructuras de Control y Bucles

- `for`, `while`, `do...while`.
- Condicionales `if`, `else if`, `else`, `switch`.
- Diferencia entre `while` y `do...while`.
- Uso del operador ternario `? :`.

---

## 📦 Arreglos (Arrays)

Manejo de métodos destructivos y no destructivos:
- **Búsqueda y filtrado:** `find()`, `findIndex()`, `findLast()`, `some()`, `every()`.
- **Transformaciones:** `map()`, `filter()`, `flat()`, `flatMap()`.
- **Ordenación:** `sort()`, `toSorted()` (no destructivo).
- **Reemplazo y copia:** `fill()`, `with()`.
- **Reducción:** `reduce()`, `reduceRight()`.
- **Creación:** `new Array()`, `Array.from()`, `Array.of()`.
- **Agrupación:** `Object.groupBy()`.

---

## 🧱 Programación Orientada a Objetos (POO)

- Creación de clases con `class` y `constructor()`.
- Métodos de instancia y métodos **estáticos** (`static`).
- **Setters** y **getters**.
- **Encadenamiento de métodos** (*method chaining*).
- **Data privacy**:
  - Campos públicos `public field`
  - Campos privados `#privateField`
  - Métodos públicos y privados.
- **Prototipos** y **herencia prototípica**:
  - Uso de `Object.create()`
  - Cadena de prototipos (`__proto__`)
  - Herencia con `call()` y `Object.create()`
- **Clases ES6**:
  - Herencia con `extends` y `super()`.
  - Conceptos: *no hoisted*, *first-class citizens*, *strict mode*.
- **Prototype vs Class syntax** equivalentes.

---

## ⚡ Asincronía y Promesas

- Ejecución asíncrona en JavaScript:
  - `Call Stack`, `Execution Context`, `Web APIs`, `Callback Queue`, `Microtask Queue`.
- **Callbacks**: funciones que se pasan como argumento.
- **Promesas (`Promise`)**:
  - Creación manual con `new Promise(resolve, reject)`.
  - Encadenamiento con `.then()`, `.catch()`, `.finally()`.
- **Async / Await**:
  - Azúcar sintáctica sobre Promesas.
  - Manejo de errores con `try/catch`.
- **Throw new Error** para lanzar errores personalizados.
- **Fetch API**:
  - Uso de `fetch()` para solicitudes HTTP.
  - Manejo de errores con `response.ok`, `response.status`, `response.json()`.
- **Top-level await** y cómo afecta a los módulos.

---

## 🧩 Módulos (Modules)

- Importación y exportación de variables, funciones y clases.
  - `export` / `export default`
  - `import` / `import * as alias`
- Alias de importación (`import { funcion as alias }`).
- Diferencia entre *named export* y *default export*.
- **Encadenamiento entre módulos** y cómo `await` puede afectar dependencias.
- **Dynamic import (`import()`)**.
- **Module Pattern**:
  - *Revealing Module Pattern*
  - *Singleton Module*
  - *CommonJS / AMD (histórico)*

---

## 🌐 DOM (Document Object Model)

- Qué es el DOM y cómo funciona.
- Manipulación de nodos y elementos HTML.
- Acceso mediante `getElementById`, `querySelector`, etc.
- Uso de eventos (`addEventListener`, `onclick`).
- Ejecución de código asíncrono con `setTimeout()` y `setInterval()`.

---

## 🧭 Otros conceptos clave

- **Data Privacy** y encapsulación.
- **Closures** (mantienen acceso al entorno léxico incluso después de que la función haya terminado).
- **JSDoc** para documentar código:
  - `@param`, `@returns`, `@type`, `@example`, `@throws`, etc.
- **Gargage Collection**: **JavaScript** gestiona la memoria automáticamente a través del **Garbage Collector**.
- **Call Stack y Event Loop** (cómo funciona JS detrás de escena).
- **Hoisting**, *Scope*, *Contexto de ejecución*.
- **Strict Mode** y buenas prácticas.

---
