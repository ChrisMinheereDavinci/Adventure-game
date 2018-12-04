var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

document.write('<h1>' + 'Array operatoren' + '</h1>')

document.write('<h2>' + 'Optellen van de twee arrays zijn:' + '</h2>')

function optelen(){
  for (var i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] + arrayTwee[i];
    document.write(arrayEen[i] + ' + ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');

  }
}

optelen();

document.write('<br>')
document.write('<h2>' + 'Aftrekken van de twee arrays zijn:' + '</h2>')

function aftrekken(){
  for (var i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] - arrayTwee[i];
    document.write(arrayEen[i] + ' - ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');

  }
}

aftrekken();

document.write('<br>')
document.write('<h2>' + 'Delen van de twee arrays zijn:' + '</h2>')

function delen(){
  for (var i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] / arrayTwee[i];
    document.write(arrayEen[i] + ' / ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');

  }
}

delen();

document.write('<br>')
document.write('<h2>' + 'Vermenigvuldigen van de twee arrays zijn:' + '</h2>')

function vermenigvuldigen(){
  for (var i = 0; i < 10; i++) {
    var uitkomst = arrayEen[i] * arrayTwee[i];
    document.write(arrayEen[i] + ' x ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');

  }
}

vermenigvuldigen();
