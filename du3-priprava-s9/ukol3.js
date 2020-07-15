function generator() {
  var q = Math.random();
  var pole = []
  var a =0;
  var b =0;
  var c =0.0;
  if (q < 0.33) {
    //neni trojuhlenik
    pole[0] = false;
    pole[1] = "ne";
    a = Math.round(Math.random()*90) + 10;
    b = Math.round(Math.random()*90) + 10;
    c = a+b + Math.round(Math.random()*10+1);
  }
  else if (q < 0.66) {
    //nepravouhly trojuhlenik
    pole[0] = true;
    pole[1] = "ne";
    a = Math.round(Math.random()*90) + 10;
    b = Math.round(Math.random()*90) + 10;
    gama = 90;
    while (gama==90) {
      gama = (Math.round(Math.random()*178) +1);
    }
    c = Math.sqrt(a**2 + b**2 - a*b*Math.cos(gama/360*2*Math.PI));
  }
  else {
    //pravouhly trojuhelnik
    pole[0] = true;
    var x = Math.round(Math.random()*90) + 10;
    var y = Math.round(Math.random()*90) + 10;
    var z = Math.sqrt(x**2 + y**2);
    var p = Math.random();
    if (p<0.33) {
      a = z;
      b=x;
      c =y;
      pole[1] = "a";
    }
    else if (p<0.66) {
      b = z;
      c = x;
      a = y;
      pole[1] = "b";
    }
    else {
      c = z;
      a = x;
      b = y;
      pole[1] = "c";
    }
  }
  pole.push(a);
  pole.push(b);
  pole.push(c);
  return pole;
}
function kontrola(zadani, je_trojuhlenik, je_pravouhly) {
  //Trojuhelnik
  console.log("a="+zadani[2]+"\n b="+zadani[3] + "\n c="+zadani[4]);
  if (zadani[0]== je_trojuhlenik) {
    console.log("Rozpoznání trojúhelníkovosti úspěšné! Tvoje správné řešení: " + je_trojuhlenik);
  }
  else {
    console.log("Nesprávně určená trojúhelníkovost :(. Tvoje řešení: " + je_trojuhlenik + ". Správné řešení: " + zadani[0]);
  }
  //Pravouhlost
  if (zadani[1]==je_pravouhly) {
    console.log("Rozpoznání pravoúhlosti úspěšné! Tvoje správné řešení: " + je_pravouhly);
  }
  else {
    console.log("Nesprávně určená pravoúhlost :(. Tvoje řešení: " + je_pravouhly + ". Správné řešení: " + zadani[1]);
  }
console.log("Snad to funguje");
}
zadani = generator();
var a = zadani[2];
var b = zadani[3];
var c = zadani[4];

function trojuhelnik(a,b,c){
  var  vratit = 5;
  if (a+b>c && a+c>b && b+c>a) {
  console.log("Hodnoty tvoří trojúhelník");
    vratit = true;
  }
  else {
    console.log("Hodnoty netvoří trojúhelník");
  vratit = false;
  }
  return vratit;
}

function pravouhly(a,b,c){
  var vraceni = 0;
  var nejvetsi = 0;
  if (a**2 + b**2 == c**2|| a**2 + c**2 == b**2 || b**2 + c**2 == a**2) {
  if (a>b && a>c) {
    vraceni = "a";
  }
  else if (b>a && b>c) {
    vraceni = "b";
  }
  else if(c>a&&c>b){
    vraceni = "c";
  }
  console.log("trojúhelník je pravoúhlý");
  }
  else {
    console.log("trojúhelník není pravoúhlý");
  vraceni = "ne";}
  return vraceni;
  }
kontrola(zadani, trojuhelnik(a,b,c), pravouhly(a,b,c));
//ukazka vstupu funkce a vraceni hodnot
function testovaci(cislo){
  var vraceni = true;
  if(cislo>5){
    vraceni = true;
  }
  else {
    vraceni = false;
  }
  return vraceni;
}
if (testovaci(8)) {
  console.log("8 splňuje podmínky");
}
if (testovaci(3)) {
  console.log("Splňuje");
}
else {
  console.log("Nesplňuje!");
}
