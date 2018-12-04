var a = prompt('hoe groot moet de piramide worden');

var piramide = [];


for(var i = 0;i<a;i++){
    piramide.push(i);
}
console.log(piramide);
document.write('array: ' + '<br>'+'<br>');

for(var k =0;k<a;k++){
    document.write(piramide+'<br>');
    piramide.pop();
}
