var rekenTabel = [2, 4, 6, 8]
var rekenen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

document.write('<h2>'+'tafel van 2:' + '</h2>' + '<br>')
for (var i = 0; i < rekenen.length; i++) {
  var tabel = rekenTabel[0] * rekenen[i];
  document.write(rekenTabel[0] + ' x ' + rekenen[i] + ' = ' + tabel + '<br>');

}

document.write('<h2>'+ 'tafel van 4:' + '</h2>' +'<br>')
for (var i = 0; i < rekenen.length; i++) {
  var tabel = rekenTabel[1] * rekenen[i];
  document.write(rekenTabel[1] + ' x ' + rekenen[i] + ' = ' + tabel + '<br>');

}

document.write('<h2>'+ 'tafel van 6:' + '</h2>' + '<br>');
for (var i = 0; i < rekenen.length; i++) {
  var tabel = rekenTabel[2] * rekenen[i];
  document.write(rekenTabel[2] + ' x ' + rekenen[i] + ' = ' + tabel + '<br>');

}

document.write('<h2>'+ 'tafel van 8:' + '</h2>' + '<br>')
for (var i = 0; i < rekenen.length; i++) {
  var tabel = rekenTabel[3] * rekenen[i];
  document.write(rekenTabel[3] + ' x ' + rekenen[i] + ' = ' + tabel + '<br>');

}
