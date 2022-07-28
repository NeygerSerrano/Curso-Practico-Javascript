## VARIABLES Y OPERACIONES

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- Que es una variable y para que sirve?

  > Son espacios en memoria donde podemos guardar informacion y pueden depender de su tipo de dato.

- Cual es la diferencia entre declarar e inicializar una variable?

  > Declarar es cuando le decimos a nuestro lenguaje que queremos una variable de nombre "nosexd". Inicializar esa variable es cuando le agregamos un valor a esa variable ya declarada.

- Cual es la diferencia entre sumar numeros y concatenar Strings?

  > Cuando sumamos numeros estamos haciendo una operacion matematica. En cambio, cuando estamos concatenando String, estamos conviertiendo dos cadenas de texto, en una sola.

-  Cual operador me permite sumar o concatenar?

   > El operador que nos permite realizar esta accion es el de suma = ' + '.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

-  Nombre:  String.

-  Apellido: String.

-  Nombre de Usuario en Platzi: String.

-  Edad: Number.

-  Correo Electronico: String.

-  Mayor de Edad: Boolean.

-  Dinero ahorrado: Number.

-  Deudas: Number.

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```

let nombre = 'Neyger David';

let apellido = 'Serrano Marquez';

let username = '@neyger2001';

let edad = 20;

let mail = 'neyger2001@gmail.com';

let esMayorDeEdad = true;

let dineroAhorrado = 1000;

let deudas = 900;

```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;

let dineroReal = dineroAhorrado - deudas;
```

## FUNCIONES

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- Que es una funcion?

  > Es un encapsulamiento de un bloque de codigo que podra ser reutilizado y ejecutado en un futuro cuantas veces deseemos.

-  Cuando me sirve una funcion en mi codigo?

   > Cuando tenemos bloques de codigo que son muy parecidos, y para evitar la repeticion de la repetidera, podemos usar esta ' funcion ' con cambios ya sea en parametros y/o argumentos.

   > También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- Cual es la diferencia entre parametros y argumentos de una funcion?

  > Las funciones reciben parámetros cuando las creamos y les enviamos argumentos cuando las ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```

const name = 'Neyger';
const lastname = 'Serrano';
const completeName = name + ' ' + lastname;
const nickname = 'Yeyersito';

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nombreCompleto(nombre, apellido)
{
    return nombre + ' ' + apellido;
}

function saludo(nombre, apellido, usuario)
{
    console.log("Mi nombre es " + nombreCompleto(nombre, apellido) + ", pero prefiero que me digas " + usuario + ".");
}

// nombreCompleto(name, lastname);
saludo(name, lastname, nickname);

```

## CONDICIONALES

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- Que es un condicional?

  > La ejecucion de validacion y/o condicion de un bloque de codigo.

- Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  > If (else y else if), Switch.

  > El condicional IF (con el else y else if) nos permite hacer validaciones completamente distintas(si asi queremos) en cada validación o condicional. En cambio, en el Switch todos los ' cases ' se comparan con la misma variable o condición que definimos en el switch.

- Puedo combinar funciones y condicionales?

  > Si. Las funciones puede encapsular cualquier bloque de codigo, incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

```

## SOLUCION: 

```

const tipoDeSuscripcion = "Expert";

if (tipoDeSuscripcion === "Free") {
	console.log('Tu tipo de suscripcion es... Free');
} else if (tipoDeSuscripcion === "Basic") {
	console.log('Tu tipo de suscripcion es... Basic');
} else if (tipoDeSuscripcion === "Expert") {
	console.log('Tu tipo de suscripcion es... Expert');
} else if (tipoDeSuscripcion === "Expert Duo") {
	console.log('Tu tipo de suscripcion es... Expert Duo');
} else {
	console.log("No estas suscrito al programa");
}

```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 *Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.* 😏

```
NEYGER

const suscripciones = ['Free','Basic','Expert','Expert Duo'];
const infoSup = ["solo puedes tomar los cursos gratis", 
"puedes tomar casi todos los cursos de Platzi durante un mes", 
"puedes tomar casi todos los cursos de Platzi durante un año", 
"tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

let i = 0;
let suscripcionUser = "Expert Duo";

while(i < suscripciones.length){
  if (suscripcionUser == suscripciones[i]) {
  	console.log(`Si estas suscrito al plan ${suscripciones[i]}, ${infoSup[i]}`);
  }
  i++;
}

-----------------------------------------------------------------------------------
ALGUN USUARIO PLATZI

let typeSuscripción = [
"Free",
"Basic", 
"Expert", 
"ExpertDuo"
];
let infoSuscripción = [
"solo puedes tomar los cursos gratis", 
"puedes tomar casi todos los cursos de Platzi durante un mes", 
"puedes tomar casi todos los cursos de Platzi durante un año", 
"tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSuscription = "ExpertDuo";
for (let i=0; i < typeSuscripción.length; i++) {
  if (userSuscription == typeSuscripción[i]) {
  	console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
  }
}

```

## CICLOS

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- Que es un ciclo?

  > “La forma de ejecutar un bloque de código mientras una condición sea verdadera o se cumpla”.

- Que tipos de ciclo existen en JavaScript?

  > While, Do while y For.

- Que es un ciclo infinito y por que es un problema?

  > Es cuando la validación de nuestros condicionales nunca se cumple y termina dañando la aplicación

- Podemos mezclar ciclos y condicionales?

  > Sí, aunque los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```

for (let i = 0; i < 5; i++) {

    console.log("El valor de i es: " + i);

}

------------------------------------------------

let i = 0;

while(i < 5){
  
  console.log("El valor de i es: " + i);
  
  i++;

}

```
```

for (let i = 10; i >= 2; i--) {

    console.log("El valor de i es: " + i);

}

-------------------------------------------------

let i = 10;

while(i >= 2){

  console.log("El valor de i es: " + i);

  i--;

}

```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 *Pista: puedes usar la función prompt de JavaScript.*

```

let respuestaUser = parseInt(prompt("Cuanto es 2 + 2?: "));

while(respuestaUser != 4){

  respuestaUser = parseInt(prompt("Cuanto es 2 + 2?:"));

}

if(respuestaUser == 4){
  alert("Felicidades, eres un genio!");
}

```

## LISTAS

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- Que es un array?

  > Es una lista de elementos.

  ```
  const array = [1, 'jaja', true, false];
  ```

- Que es un objeto?

  > Es una lista de elementos, *PERO* cada elemento tiene un nombre clave.

  ```
  const obj = {
    nombre: 'Fulanito',
    edad: 3
  };
  ```

- Cual es mejor usar? Objetos o arrays?

  > Arrays, cuando lo que haremos en un elemento es lo mismo que en todos los demas (La regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- Puedo mezclar arrays con objetos o incluso objetos con arrays?

  > Si, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
const arrayPrueba = ['uno','dos','tres'];

function impPrimerIndex(array){
  console.log("El primer numero del array es el: " + array[0]);
}

impPrimerIndex(arrayPrueba);
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
const arrayPrueba = [1,2,3,4,5];

function imprimirArray(array){
  for(let i = 0; i < array.length; i++){
    console.log("index " + i + ": " + array[i]);
  }
}

imprimirArray(arrayPrueba);
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
const objeto = {
  Nombre: 'Neyger',
  Apellido: 'Serrano',
  Edad: 20,
};

function imprimirObjeto(obj){
  for(key in obj){
    console.log(key + ": " + obj[key]);
  }
}

imprimirObjeto(objeto);