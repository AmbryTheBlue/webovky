var a = 0; //globalni proměnná
var globalni_text = "Poslední akce byla: "

var x = 4;
var y = 9;
function hovno(x1,y1) {
var k= x1*y1;
return k;
console.log("něco");
}

function diskriminant(q1,w1,e1){
  var l= w1**2 -4*q1*e1;
  if (l>=0) {
    return true;
  }
  else {
    return false;
  }
}

function koreny(q2,w2,e2){
var i = diskriminant(q2,w2,e2);
var d= w2**2 -4*q2*e2;
var x_1 = (-w2 + Math.sqrt(Math.abs(d)))/(2*q2);
var x_2 = (-w2 - Math.sqrt(Math.abs(d)))/(2*q2);
var text;
if (i==true) {  
    text = "Kořen 1 je x_1= " + x_1 + "\n Kořen 2 je x_2= " + x_2;
  }
else {
    text = "nemá řešení";
  }
  return text;
}

function zobraz(zprava){
  document.getElementById("a_span").innerHTML = a;
  document.getElementById("message").innerHTML = globalni_text + zprava;
}

function pricti1(){
  a = a + 1;
  zobraz("přičtení jedničky");
  //existuje
}
//neexistuje
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
  return lokalni_text;
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
function druha_mocnina(){
  a=a**2;
  var aa="umocnilo se";
  zobraz(aa);
}
function ukol2a(krat){
  a= a*krat;
  zobraz("vynásobilo se "+krat);
}
function ukol2b(deleni){
a=a/deleni;
zobraz("vydělilo se "+deleni) ;
}
function ukol3Old(krat, cislo){
  if (krat=="nasobeni") {
    a=a*cislo;
    zobraz("vynasobilo se");
  }
  else {
    a=a/cislo;
    zobraz("vydělilo se")
  }
}
function ukol3Old(krat, cislo){
  if (krat=="nasobeni") {
    ukol2a(cislo);
  }
  else if('deleni') {
    ukol2b(cislo);
  }
}


//priklad vraceni hodnoty
var x1 = 152;
var y1;
y1 = druhaMocnina(x1);
function druhaMocnina(asdsad){
  var t = asdsad**2;
  return t;
}
