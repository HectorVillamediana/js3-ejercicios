// ### Ejercicios: Nivel 1

const date = new Date();
const year1 = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`${year1}/${month}/${day} time: ${hour}:${minutes}:${seconds}`);

// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

let firstName = "Hector";
let lastName = "Villamediana";
let country = "Spain";
let city = 'Madrid';
let age = 30;
let isMarried = false;
let year = 2023;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// 2. Verifique si typeof '10' es igual a 10

console.log(typeof "10" == 10);


// 3. Verifique si parseInt('9.8') es igual a 10

console.log(parseInt(9.8) == 10);

// 4. Verifique cualquier valor booleano true o false.

console.log(isMarried);

//    1. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.

console.log(1 + 1 == 2);
console.log(firstName == "Hector");
console.log(isMarried == false);


//    2. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.

console.log(1 + 1 == 5);
console.log(firstName == lastName);
console.log(isMarried == true);

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

//    1. 4 > 3 true

console.log(4 > 3);

//    2. 4 >= 3 true

console.log(4 >= 3);

//    3. 4 < 3 false

console.log(4 < 3);

//    4. 4 <= 3 false

console.log(4 <= 3);

//    5. 4 == 4 true

console.log(4 == 4);

//    6. 4 === 4 true

console.log(4 === 4);

//    7. 4 != 4 false

console.log(4 !=  4 );

//    8. 4 !== 4 false

console.log( 4 !== 4);

//    9. 4 != '4' true

console.log(4 != '4');

//    10. 4 == '4'   true

console.log(4 == '4');

//    11. 4 === '4' false

console.log( 4 === '4');

//    12. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.

console.log("Python".length != "Jargon".length);

// 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

//    1. 4 > 3 && 10 < 12 true

console.log( 4 > 3 && 10 < 12 );

//    2. 4 > 3 && 10 > 12 false 

console.log(4 > 3 && 10 > 12);

//    3. 4 > 3 || 10 < 12 true

console.log(4 > 3 || 10 < 12);

//    4. 4 > 3 || 10 > 12 true 

console.log(4 > 3 || 10 > 12);

//    5. !(4 > 3) false

console.log(!(4 > 3));

//    6. !(4 < 3) true

console.log(!(4 < 3));

//    7. !(false) true

console.log(!(false));

//    8. !(4 > 3 && 10 < 12) false 

console.log(!(4 > 3 && 10 < 12));
 
//    9. !(4 > 3 && 10 > 12) true

console.log(!(4 > 3 && 10 > 12));

//    10. !(4 === '4') true 

console.log(!(4 === '4') );

//    11. No hay 'on' tanto en dragon como en python // false

console.log(!("dragon".includes("on") && "python".includes("on")));


// 7. Utilice el objeto Date para realizar las siguientes actividades
//    1. ¿Qué año es hoy?
    console.log(year1);
//    2. ¿Qué mes es hoy con un número?
console.log(month);
//    3. ¿Qué fecha es hoy?
console.log(date);
//    4. ¿Qué día es hoy con un número?
console.log(day);
//    5. ¿Cuál es la hora actual?
console.log(hour);
//    6. ¿Cuántos minutos hay actualmente?
console.log(minutes);
//    7. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(date.getTime());

// ### Ejercicios: Nivel 2

// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

let base = parseInt(prompt("Introduzca la base del triangulo: "));
let altura = parseInt(prompt("Introduce la altura del triangulo: "));
area = 0.5 * base * altura; 20
console.log("El area del triangulo es: ", area);

//    ```sh
//    Ingrese base: 20
//    Ingrese altura: 10
//    El área del triángulo es: 100
//    ```

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

let ladoA =  parseInt(prompt("Introduzca valor lado A: "));
let ladoB =  parseInt(prompt("Introduzca valor lado A: "));
let ladoC =  parseInt(prompt("Introduzca valor lado A: "));
 
perimetro = ladoA + ladoB + ladoC; 

console.log("El perimetro del triangulo es: ", perimetro);
//    ```sh
//    Ingrese lado a: 5
//    Ingrese lado b: 4
//    Ingrese lado c: 3
//    El perimetro del triangulo es: 12
//    ```

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

let largoRec = parseInt(prompt("Ingrese el largo del rectangulo: "));
let altoRec = parseInt(prompt("Ingrese el largo del rectangulo: "));
areaRec = altoRec + largoRec;
perimetroRec = 2 * areaRec;

console.log("El area del rectangulo es: ", areaRec, "Y el perimetro: ", perimetroRec );

// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

let radio = parseInt(prompt("Inserte radio de la circunferencia: "));
let areaCir = 3.14 * radio**2;
let circunferencia = 2 * 3.14 * radio; 
console.log("El area de la circunferencia es: ", areaCir, "Y la circunferencia es: ", circunferencia);

// 5. Calcule la pendiente, la cinterseción X y la intersección Y de y = 2x -2

let y2 = 10;
let y1 = 6;
let x1 = 2;
let x2 = 2;

let m = (y2 - y1) / (x2 - x1);

// 6. La pendiente es m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

intersecY = (2*0) -2

console.log("La pendiente de la recta es: ", m, "Y la interseccion en Y es: ", intersecY);

// 7. Compare la pendiente de las dos preguntas anteriores.

console.log(m == intersecY);

// 8. Calcula el valor de y (y = x<sup>2</sup> + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

x = -3;
y = x**2 +6(x) + 9;

// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

let horas = parseInt(prompt("Ingrese sus horas de trabajo: "));
let tarifaHora = parseInt(prompt("Ingrese su ganancia por hora: "));

salario = horas * tarifaHora;

//    ```sh
//    Ingrese horas: 40
//    Introduce la tarifa por hora: 28
//    Su ganancia semanal es 1120
//    ```

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

    let myName = prompt("Ingrese su nombre"); 
    
    myName.length > 7 ? 
        console.log("Su nombre es largo") : 
        console.log("Su nombre no es largo");

// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

    let myLastName = prompt("Ingrese su nombre"); 
    myLastName.length > myName.length ? 
        console.log("Su nombre es mas corto que su apellido"):
        console.log("Su nombre es mas largo que su apellido");

//    ```js
//    let firstName = "Asabeneh";
//    let lastName = "Yetayeh";
//    ```

//    ```sh
//    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
//    ```

// 12. Declare dos variables _myAge_ y _yourAge_ y asignarles los valores iniciales y myAge y yourAge.

    let _myAge_ = 250;
    let _yourAge_ = 25;

    console.log("Soy ", _myAge_ - _yourAge_, "mayor que tú.");
    

//    ```js
//    let myAge = 250;
//    let yourAge = 25;
//    ```

//    ```sh
//    Soy 225 años mayor que tú.
//    ```

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

    ageOfBorn = prompt("Ingrese su año de nacimiento: "); 
    let myAge_  = year1 - ageOfBorn;
    let shortAge = 25 - myAge_;
    myAge_ >= 25 ? 
    
    console.log("Tienes", myAge_, "Tienes edad para conducir"): 
    console.log("Tienes", myAge_, "Podras conducir en: ", shortAge)

//    ```sh

//    Introduzca el año de nacimiento: 1995
//    Tienes 25 años. Tienes la edad suficiente para conducir.

//    Introduzca el año de nacimiento: 2005
//    Tienes 15 años. Podrás conducir después de 3 años.
//    ```

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

let ages = parseInt(prompt("Introduzca numero de años"));
let totalLife = ages*365*24*60*60;
console.log("Has vivido: ", totalLife, " seconds");

//    ```sh
//    Ingrese el número de años de vida: 100
//     Viviste 3153600000 segundos.
//    ```

// 15. Cree un formato de hora legible por humanos usando el objeto Date.
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

console.log(`${year1}-${month}-${day} time: ${hour}:${minutes}`);
console.log(`${day}-${month}-${year1} time: ${hour}:${minutes}`);
console.log(`${day}-${month}-${year1} time: ${hour}:${minutes}`);

// ### Ejercicios: Nivel 3

// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

console.log(`${year1}-${month}-${day} time: ${hour}:${minutes}`);