var namen = [];
var aantal = parseInt(prompt('hoeveel namen wilt uw ?'));

for (var i = 0; i < aantal; i++) {
  namen.push(prompt('Hoeveel namen wilt u in de array stoppen? (minimaal 3)'));
}

document.write(namen)
