//globální proměnné
var cele = "";
var plz = 0; //počet levých závorek
var vsechny_znaky= "()*+-/.";
var zakladni_znaky="+-*/";
var vsechny_cislice = "0123456789";

// TODO: kontrola existence desetinné tečky už jednou v tom čísle

//definice funkcí
function zobraz(){
  console.log("Zobrazeno aktuální:\n" + cele);
  console.log("Poslední znak: " + cele.charAt(cele.length-1));
  //document.getElementById('Zapis').innerHTML = pole.join(" ");
}

function pridejCislo(cislo){
  //pokud je poslendi znak cislo nebo '.'
  if (cele.charAt(cele.length-1)==")") {
    alert("Není možné napsat číslo přímo za závorku, napište prvně nějaký operátor!")
  }
  else {
    cele += cislo.toString();
  }
  zobraz();
}

function pridejZnak(znak){
 if (cele.charAt(cele.length-1)==".") {
   alert("Za desetinnou tečku nelze přidat žádný znak. Pouze číslice!")
 }
 else if (znak==".") {
   if (vsechny_znaky.includes(cele.charAt(cele.length-1))) {
     alert("Za žádný znak není možné dát desetinnou tečku. Všechna desetinná čísla musí mít i číslici před desetinnou tečkou.")
   }
   else if(vsechny_cislice.includes(cele.charAt(cele.length-1))){
     //předchozí znak je číslice
     cele += ".";
   }
   else {
     console.log("Chyba v určování předchozího znaku při přidávání desetinné tečky");
   }
 }
 else if (znak=="(") {
   if (zakladni_znaky.includes(cele.charAt(cele.length-1)) || cele.charAt(cele.length-1)=="(") {
     cele += "(";
     plz++;
   }
   else {
     alert("Před levou závorkou musí být nějaký z operátorů: '" + zakladni_znaky + "'\n nebo také levá závorka '(' '");
   }
 }
 else if (zakladni_znaky.includes(znak)) {
   //pridavama nejaky operator
   if (vsechny_cislice.includes(cele.charAt(cele.length-1)) || cele.charAt(cele.length-1)==")") {
     cele += znak;
   }
   else {
     if ((znak=="-"||znak=="+")&& cele.charAt(cele.length-1)=="(") {
       cele += znak;
     }
     else {
        alert("Operátory můžeš přidat pouze za číslici nebo za pravou závorku");
     }
   }
 }
 else if (znak==")") {
   if (plz>0) {
     if (vsechny_cislice.includes(cele.charAt(cele.length-1))||cele.charAt(cele.length-1)==")") {
       cele += ")";
       plz--;
     }
     else {
       alert("Nelze přidat pravou závorku za něco jiného než číslici nebo pravou závorku")
     }
   }
   else {
     alert("Počet neuzavřených levých závorek je roven nule. (nebo je menší, ale to se snad neposralo). Nemůžete přidat pravou závroku!")
   }
 }
 zobraz();
}
function vymazPredchozi(){
  var vymazano = cele.charAt(cele.length-1);
  cele = cele.slice(0, cele.length-1);
  console.log("Byl vymazán znak: " + vymazano);
  zobraz();
}
function vymazCele(){
  cele = "";
  console.log("Celé pole bylo smazáno!");
  zobraz();
}

function vypocitej(){
  alert("Zatím nefunguje!");
}
