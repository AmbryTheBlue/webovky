//globální proměnné
var cele = "";
var plz = 0; //počet levých závorek
var vsechny_znaky= "()*+-/.";
var operatory="+-*/";
var vsechny_cislice = "0123456789";

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
   if (vsechny_znaky.includes(cele.charAt(cele.length-1))||cele.length==0) {
     alert("Za žádný znak (nebo prázdný text) není možné dát desetinnou tečku. Všechna desetinná čísla musí mít i číslici před desetinnou tečkou.")
   }
   else if(vsechny_cislice.includes(cele.charAt(cele.length-1))){
     //předchozí znak je číslice
     if (cele.lastIndexOf(".")>cele.lastIndexOf("+")&&cele.lastIndexOf(".")>cele.lastIndexOf("-")&&cele.lastIndexOf(".")>cele.lastIndexOf("/")&&cele.lastIndexOf(".")>cele.lastIndexOf("*")) {
       //ověření jestli tohle číslo už nemá desetinnou tečku
       alert("Mezi nějakým operátorem a touto desetinnou tečkou je jiná desetinná tečka -> Chyba: číslo nemůže mít 2 desetinné tečky");
     }
     else {
       cele += ".";
     }

   }
   else {
     console.log("Chyba v určování předchozího znaku při přidávání desetinné tečky");
   }
 }
 else if (znak=="(") {
   if (operatory.includes(cele.charAt(cele.length-1)) || cele.charAt(cele.length-1)=="(") {
     cele += "(";
     plz++;
   }
   else {
     alert("Před levou závorkou musí být nějaký z operátorů: '" + operatory + "'\n nebo také levá závorka '(' '");
   }
 }
 else if (operatory.includes(znak)) {
   //pridavama nejaky operator
   if (vsechny_cislice.includes(cele.charAt(cele.length-1)) || cele.charAt(cele.length-1)==")") {
     cele += znak;
   }
   else {
     if (((znak=="-"||znak=="+")&&cele.charAt(cele.length-1)=="(")||((znak=="-"||znak=="+")&&cele.length==0)) {
       // znaky + a - je možné dát i na začátek textu, nebo za levou závorku
       cele += znak;
     }
     else {
        alert("Operátory můžeš přidat pouze za číslici nebo za pravou závorku");
     }
   }
 }
 else if (znak==")") {
   if (plz>0&&cele.length>0) {
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

function vyres(text){
  //vyresi text, který je předložen. Předpokládá neexistenci závorek.
  var oper = "";
  console.log("Co bylo zadano fci vyres() " + text);
  while (true) {
    if (text.includes("*")) {
      oper = "*";
    }
    else if (text.includes("/")) {
      oper = "/";
    }
    else if (text.includes("+")) {
      oper = "+";
    }
    else if (text.includes("-")) {
      oper = "-";
    }
    else {
      console.log("Retezec uz neobsahuje žádné operátory. Výpočet ukončen!");
      break;
    }
    var c = text.indexOf(oper);
    if(c==0){
      //operátor je na začátku řetězce
      if (oper=="+"||oper=="-") {
        console.log("Řetězec (snad) úspěšně vypočítán!");
        break;
      }
      else {
        console.log("Nějakám způsobem se dostalo '*' nebo '/' na začátek řetězce :( Nelze vypočítat");
      }
    }
    //systém pro nalezení pozice předchozího operátoru
    var a = 0;
    for (var i = 0; i < operatory.length; i++) {
      var pozice = text.substring(0,c).lastIndexOf(operatory.charAt(i));
      pozice = pozice+1;
      if (pozice>a) {
        a = pozice;
      }
    }
    //systém pro nalezení následujícího operátoru
    var b = text.length;
    for (var i = 0; i < operatory.length; i++) {
      var pozice = text.substring(c+1).indexOf(operatory.charAt(i));
      //console.log(operatory.charAt(i));
      //console.log("Pozice: " + pozice);
      if(pozice>0){
      pozice = pozice + c+1;
      //console.log("upravena Pozice: " + pozice);
      //console.log("b: " + b);
        if (pozice<b) {
          b = pozice;
        }
      }
    }
    //cas na vypocet!
    var x = text.substring(a,c);
    console.log("x: " + x);
    x = Number(x)
    var y = text.substring(c+1,b);
    console.log("y: " + y);
    y = Number(y);

    var z = 0;
    switch (oper) {
      case "*":
        z = x * y;
        break;
      case "/":
        z = x / y;
        break;
      case "+":
        z = x + y;
        break;
      case "-":
        z = x - y;
        break;
      default:
        console.log("WTF chyba!");
        z = 1;
    }
    //Prepsání počítaného vypočítaným
    text = text.replace(text.substring(a,b), z.toString());
    console.log("Využit operátor: '" + oper + "'");
    console.log("Jak to vyres() upravil: " + text);
  }
  console.log("Část (asi v závorkách) úspěšně vypočítána!");
  return text;
}

function vypocitej(){
  console.log("Výpočet zatím moc nefunguje!");
  if (plz!=0) {
    console.log("Počet závorek asi nesedí, a tak to nebude možné vypočítat. Uvidíme xD");
  }
  var chyba = 0;
  var bez = 1;
  console.log("Aktuální text: " + cele);
  while (cele.includes("(")) {
    if (cele.includes(")")) {
      var b = cele.indexOf(")");
      var a = cele.substring(0,b).lastIndexOf("(");
      var spocitano = vyres(cele.substring(a+1,b));
      cele = cele.replace(cele.substring(a,b+1), spocitano);
      console.log("Aktuální text: " + cele);
    }
    else {
      alert("Nesprávný počet závorek. Výpočet zrušen!");
      chyba = 1;
      bez = 0;
      break;
    }
  }
  if (chyba>0) {
    console.log("Vyskytla se chyba: " + chyba);
  }
  else {
    cele = vyres(cele);
    console.log("Výpočet dokončen! Výsledek je: " + cele);
    zobraz();
  }

}



console.log("Vítejte v javascriptu této Kalkulačky!");
