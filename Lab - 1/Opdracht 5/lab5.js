var randomGetal = prompt('Voer een getal in:');
var getallen = [];

document.write('<h2>' + 'Piramide oplopend ' + '</h2>')
document.write('<h2>' + 'Array: ' + getallen + '</h2>')

for (var i = 0; i <= randomGetal; i--) {
  getallen.push(i);
  document.write(getallen.join('')+ '<br>');

}
