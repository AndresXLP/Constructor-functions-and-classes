// Agregar un método palindrome a los strings de JavaScript que retorne true
// si el string es un palíndrome, o false de lo contrario.

// El método se va a utilizar de la siguiente forma:

String.prototype.palindrome = function () {
  const normalized = this.toLowerCase().match(/[A-Z]/gi);
  return normalized.join("") === normalized.reverse().join("")
    ? "Si es un Palindromo"
    : "No es un Palindromo";
};

console.log("AnItA lAvA lA tInA".palindrome()); // true
