function avancarDias(dia, quantidade) {
  // Escreva aqui seu código
  let semana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
  let cont = 0;
  let indice;
  while (dia != semana[cont]) {
    cont++
  }
  indice = cont + quantidade;

  while (indice > 6) {
    indice = indice - 7;
  }
  return semana[indice];
}

function intervaloPares(inicio, fim, quantidade) {
  // Escreva aqui seu código
  let pares = [quantidade];
  let par = inicio + 1;
  let contador = 0;

  for (let i = 0; i < fim; i++) {
    if (par % 2 == 0) {
      pares[contador] = par;
      contador++;
      if (quantidade < contador + 1) {
        i = fim;
      }
    }
    par++;
  }
  return pares;
}

function contaLetras(string, letra) {
  // Escreva aqui seu código
  let ocorreLetra = 0;
  for (i = 0; i < string.length; i++) {
    if (letra == string[i]) {
      ocorreLetra++;
    }
  }
  return ocorreLetra;
}

//teste
function trocaVogais(string) {
  let novaString = "";
  let str1ng = string;
  for (let i = 0; i < string.length; i++) {

    if (str1ng[i] === "a" || str1ng[i] === "e" || str1ng[i] === "i" || str1ng[i] === "o" || str1ng[i] === "u") {
      novaString += "1";
    } else {
      novaString += str1ng[i];
    }
  }

  return novaString;
}

function tiraNumeros(string) {
  // Escreva aqui seu código
  let soLetra = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "0" && string[i] !== "1" && string[i] !== "2" && string[i] !== "3" && string[i] !== "4" && string[i] !== "5" && string[i] !== "6" && string[i] !== "7" && string[i] !== "8" && string[i] !== "9") {
      soLetra += string[i];
    }
  }
  return soLetra;
}

function somaAteMeta(inicio, meta) {
  // Escreva aqui seu código
  let listaSoma = [];
  let soma = inicio;
  for (let i = 0; soma < meta; i++) {
    listaSoma[i] = inicio + i + 1;
    soma += listaSoma[i];
  }
  return listaSoma;
}

function subArray(array, subarray) {
  // Escreva aqui seu código
  let indice = [];
  let aux;
  for (let i = 0; i < subarray.length; i++) {
    for (let d = 0; d < array.length; d++) {
      if (subarray[i] === array[d]) {
        indice += d;
      }
    }
  }
  if (indice.length === subarray.length) {
    aux = indice[0];
    for (let i = 1; i < indice.length; i++) {
      if (aux > indice[i]) {
        return false;
      }
      else {
        aux = indice[i];
      }
    }
    return true;
  }
}

function letrasRepetidas(string) {
  // Escreva aqui seu código
  const contaRep = [];
  let aux;
  for (let i = string.length - 1; i >= 0; i--) {
    for (let d = i - 1; d >= 0; d--) {
      if (string[i] === string[d]) {
        contaRep.push(string[i]);
      }
    }
  }
  aux = contaRep;
  for (let i = 0; i < contaRep; i++) {
    contaRep[i] = aux[contaRep.length - 1 - i];
  }
  return contaRep;
}

// copia string !== array
function ehPalindromo (string) {
  // escreva seu código aqui :)
  let palindromo = "";
  //const palindromo = [];
  for (let i = string.length - 1; i >= 0; i--){
    //palindromo.push(string[i]);
    palindromo += string[i];
  }
  if(palindromo == string){
    return "sim";
  }
  else{
    return "não";
  }
  //return palindromo;
 
}

function proximosMultiplosDe5 (valorInicial, quantidade) {
  // escreva seu código aqui :)
  const mult5 = [];
  for(let i = valorInicial; quantidade > 0; i ++){
    if(i % 5 == 0){
      mult5.push(i);
      quantidade--;
    }
  }
return mult5;
}

function yinYang (array) {
  // escreva seu código aqui :)
  let concat = "" ;
  for(let i = 0; i < array.length; i ++){
    if(array[i] % 2 == 0){
              concat += "Yin";
      }
    if(array[i] % 3 == 0) {
      concat += "Yang";
    }
    if(array[i] % 2 !== 0 && array[i] % 3 !== 0) {
      concat += array[i];
    }
    
  }
return concat;
}

function ehNumeroDriven (numero) {
  // escreva seu código aqui :)
  let driven = 0;
  for(let i = 1; driven < numero; i ++){
    let n = 0;
    for(let j = 0; j < i ; j ++ ){
        n += 5
    }
    driven = n -2;
    if(driven == numero){
      return "É desse tipo";
    }
  }
  return "Não é desse tipo";
}

function encriptarPalavra (palavra, chave) {
  // escreva seu código aqui :)
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let cripto = "";
  for(let i = 0; i < palavra.length; i++){
    for (let j = 0; j < alfabeto.length; j++) {
      if(palavra[i] == alfabeto[j]){
        cripto += alfabeto[chave+j];
      }
    }
  }
  return cripto;
}

function encriptarPalavra2 (palavra, chave) {
  // escreva seu código aqui :)
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let cripto = "";
  for(let i = 0; i < palavra.length; i++){
    for (let j = 0; j < alfabeto.length; j++) {
      if(palavra[i] == alfabeto[j]){
        if((chave + j) > 26){//se chave + letra > alfabeto
        cripto += alfabeto[((chave + j) - 26)];
        }
        else{
        cripto += alfabeto[chave+j];
        }
      }
    }
  }
  return cripto;
}