var week = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

document.write('<h2>' + week + '</h2>');

document.write('<br>');
document.write('<br>');

for (var i = 0; i < 5; i++) {
  document.write('<h2>' + week[i] +  '</h2>');
}

document.write('<br>');
document.write('<br>');

for (var i = 5; i < 7; i++) {
  document.write('<h2>' + week[i] + '</h2>');
}

document.write('<br>');
document.write('<br>');

for (var i = 6; i > -1; i--) {
  document.write('<h2>' + week[i]  + '</h2>');
}

document.write('<br>');
document.write('<br>');

for (var i = 4; i > -1; i--) {
  document.write('<h2>' + week[i]  + '</h2>');
}

document.write('<br>');
document.write('<br>');

for (var i = 6; i > 4; i--) {
  document.write('<h2>' + week[i]  + '</h2>');
}
