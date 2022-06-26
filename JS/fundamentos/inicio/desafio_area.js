/*  Área = PI * raio * raio;
 *  raio = 10 m;  
 *  Calcule a area da circunferência;
 *  Crie variáveis para : PI, área
 *  Resultado: "A área da circunferência é " + area; 
 * 
 */

let raio = 10;
const PI = 3.1416;

let areaCirc = PI * (raio * raio);

console.log("O valor da área da circunferência de raio = " + raio + " é " + areaCirc +"m²");

// A constante PI já existe:
console.log("A constante Pi grego é = " + Math.PI);

areaCirc = Math.PI *(raio * raio);
console.log("O valor da área da circunferência de raio = " + raio + " é " + areaCirc +"m²");

