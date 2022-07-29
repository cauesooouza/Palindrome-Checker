"use strict";

function palindrome(str) {
  // Instanciando as variaveis
  str = document.getElementById("check").value;
  var rev = document.querySelector(".reverse");
  var result = document.querySelector(".result");

  // RegEx = função regular para eliminar tudo que não for alfanumerico
  var reg = /[\W_]/g;

  // pegamos a palavra que usuario passar e colocamos em minusculo em seguida usamos
  // a RegEx para retirar tudo que não for alfanumerico
  var lowStr = str.toLowerCase().replace(reg, "");

  // pegamos a palavra, dividimos ela, para então reverter, e então junta-la novamente
  var revStr = lowStr.split("").reverse().join("");

  // verificamos se o tamanho da palavra é maior que 3, se true, escrevemos ela
  // e passamos o resultado da verificação
  if (str.length >= 3) {
    rev.innerHTML = `${revStr}`;
    result.innerHTML = `${lowStr === revStr}`;
  } else {
    result.innerHTML = "";
    rev.innerHTML = "";
  }
}
