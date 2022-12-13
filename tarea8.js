
/*Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos*/

function miFuncion(){
    return true

}

console.log(miFuncion())



function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
  

  
function* generaId(){
    let id=0;
    while(true){
        id=id+2
        
        if (id===10){
            return id
        }
        yield id // el yield dejaría en stand by la función hasta que se vuelva a llamar
    }
}

console.log(generaId())

//guardamos la función generadora dentro de una constante

const llamado=generaId() //Guardamos el objeto generador en una constante

//Debemos hacer el llamado usando el generador y el método next
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
console.log(llamado.next());
