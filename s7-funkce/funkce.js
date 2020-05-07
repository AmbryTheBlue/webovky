var a = 0; //globalni proměnná
var globalni_text = "Poslední akce byla: "

function zobraz(zprava){
  document.getElementById("a_span").innerHTML = a;
  document.getElementById("message").innerHTML = globalni_text + zprava;
}

function pricti1(){
  a = a + 1;
  var lokalni_text = "přičtení jedničky"; //lokální proměnná
  zobraz(lokalni_text);
}
function pricti2(){
  a = a + 2;
  var lokalni_text = "přičtení dvojky"; //lokální proměnná
  zobraz(lokalni_text);
}
function prictix(vstup){
  a = a + vstup;
  var lokalni_text = "přičtení x"; //lokální proměnná
  zobraz(lokalni_text);
}
function odecti(){
  a = a - 1;
  var lokalni_text = "odečtení jedničky"; //lokální proměnná
  zobraz(lokalni_text);
}



//part 2
function delitelnost(cislo){
  var informace = deli(cislo);
  zobraz(informace);
}
function pozorZavorky(cislo){
  var informace = deli;
  zobraz(informace);
}
function pozorZavorky2() {
  var lokalni_text = odecti;
  zobraz(lokalni_text);
}

function deli(cislo){
  var lokalni_text = "Vyzkoušení dělitelnosti číslem " + cislo;
  if (a%cislo==0) {
    lokalni_text += "<br> !!!!!!!!! ČÍSLO JE DĚLITELNÉ " + cislo + " !!!!!!!!!!!";
  }
  else {
    lokalni_text += "<br> Číslo není dělitlené " + cislo + " :(";
  }
  return  lokalni_text;
}
function umocni(exponent){
    var zaklad = a;
    var reseni = rekurze(zaklad, exponent);
    var lokalni_text = "Umocnění na " + exponent + "<br> Je rovno: " + reseni;
    zobraz(lokalni_text);
}

function rekurze(z, e){
  console.log("e = " + e + "; z = " + z);
  if(e==1){
    return z;
  }
  else {
    z = z * a;
    e = e - 1;
    return rekurze(z, e);
  }
}
