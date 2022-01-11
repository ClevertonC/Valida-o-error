//function validaArray(arr, num) {// criar uma função que recebe um array e um número
  //if(!arr && !num) throw new ReferenceError("Envie os parâmetros"); //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError

 // if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object"); //Se o array não for do tipo 'object', lance um erro do tipo TypeError

  //if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number"); //Se o número não for do tipo 'number', lance um erro do tipo TypeError

 // if(arr.length !== num) throw new RangeError("Tamanhp inválido"); //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo
//}

function validaArray(arr, num) { //Utilize a declaração try...catch
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros"); 

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
      
        if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number"); 
      
        if(arr.length !== num) throw new RangeError("Tamanhp inválido")

        return arr;
    }

    catch(e) { //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        }
        else  if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }
        else  if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }
        else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}
console.log(validaArray([], "a"));