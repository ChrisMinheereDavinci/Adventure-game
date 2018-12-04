const prijs =  {fris:2.00, bier:2.50, wijn:4.50, Snacks8:4.50, Snacks16:8.50};
var totaalLijst = {totaalFris:0, totaalBier:0, totaalWijn:0, aantalSnack8:0, aantalSnack16:0, aantal:0};
var keuze;



function addToOrder(){

  while (keuze != 'stop'){
        keuze = prompt("Wat wilt u bestellen?").toLowerCase();
        if (keuze == 'fris') {
            aantal = parseInt(prompt('Hoeveel fris wilt u bestellen?'));
            totaalLijst['totaalFris'] += aantal;
            console.log(totaalLijst);
            //addToOrder();
        }
        else if (keuze == 'bier') {
            aantal = parseInt(prompt('Hoeveel bier wilt u bestellen?'));
            totaalLijst['totaalBier'] += aantal;
            console.log(totaalLijst);
            //addToOrder();
        }
        else if (keuze == 'wijn') {
            aantal = parseInt(prompt('Hoeveel wijn wilt u bestellen?'));
            totaalLijst['totaalWijn'] += aantal;
            console.log(totaalLijst);
            //addToOrder();
        }
        else if (keuze == 'stop'){
            console.log('if check stop');
            rekening();

        }else if (keuze == 'snack'){
            snack();
        }
        else {
        alert('U kunt dit hier niet bestellen.');
        //addToOrder();
        }
    }
}

function snack(){
  aantalSnack = parseInt(prompt('wilt u 8 of 16 biteerballen bestellen?'));
    if (aantalSnack == 8) {
      aantalSchalen = parseInt(prompt('hoeveel schalen van 8 snacks wilt u ?'))
      totaalLijst['aantalSnack8'] += aantalSchalen;
      console.log(totaalLijst);

      //addToOrder();
    }
    else if (aantalSnack == 16) {
      aantalSchalen = parseInt(prompt('hoeveel schalen van 16 snacks wilt u ?'))
      totaalLijst['aantalSnack16'] += aantalSchalen;
      console.log(totaalLijst);
      //addToOrder();
    }
}

function rekening(){
 var Prijzen = [ totaalLijst['totaalFris'] * prijs["fris"], totaalLijst['totaalBier'] * prijs["bier"], totaalLijst['totaalWijn'] * prijs["wijn"],
                 totaalLijst['aantalSnack8'] * prijs["Snacks8"], totaalLijst['aantalSnack16'] * prijs["Snacks16"]]

var Totaalprijs = Prijzen[0] + Prijzen[1] + Prijzen[2] + Prijzen[3] + Prijzen[4];

if (totaalLijst['totaalFris'] >= 1) {
  document.write('Aantal Fris:' + totaalLijst['totaalFris'] +'<br>');
  document.write('Prijs Fris:€' + Prijzen[0] + '<br>' + '<br>' );
  console.log(Prijzen[0]);
}

if (totaalLijst['totaalBier'] >= 1) {
  document.write('Aantal Bier:' + totaalLijst['totaalBier'] + '<br>');
  document.write('Prijs Bier:€' + Prijzen[1] + '<br>' + '<br>');
  console.log(Prijzen[1]);
}

if (totaalLijst['totaalWijn']  >= 1) {
  document.write('Aantal Wijn:' + totaalLijst['totaalWijn'] + '<br>');
  document.write('Prijs wijn:€' + Prijzen[2] + '<br>' + '<br>' );
  console.log(Prijzen[2]);
}

if (totaalLijst['aantalSnack8'] >= 1) {
  document.write('Aantal Snacks8:' + totaalLijst['aantalSnack8'] + '<br>');
  document.write('Prijs Snacks8:€' + Prijzen[3] + '<br>' + '<br>' );
  console.log(Prijzen[3]);
}

if (totaalLijst['aantalSnack16'] >= 1) {
  document.write('Aantal Snacks16:' + totaalLijst['aantalSnack16'] + '<br>');
  document.write('Prijs Snacks16:€' + Prijzen[4] + '<br>' + '<br>' );
  console.log(Prijzen[4]);
}

document.write("<br>Totaal prijs: €" + Totaalprijs);

}



  addToOrder();
