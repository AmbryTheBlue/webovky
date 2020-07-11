function generator() {
  var q = Math.random();
  var pole = []
  var a =0;
  var b =0;
  var c =0;
  if (q < 0.33) {
    //neni trojuhlenik
    pole[0] = false;
    pole[1] = "ne";
    a = Math.round(Math.random()*90) + 10;
    b = Math.round(Math.random()*90) + 10;
    c = a+b + Math.round(Math.random()*10);
  }
  else if (q < 0.66) {
    //nepravouhly trojuhlenik
    pole[0] = true;
    pole[1] = "ne";
    a = Math.round(Math.random()*90) + 10;
    b = Math.round(Math.random()*90) + 10;
    gama = 90;
    while (gama==90) {
      gama = Math.round(Math.random()*178) +1;
    }
    c = Math.sqrt(a**2 + b**2 - a*b*Math.cos(gama));
  }
  else {
    //pravouhly trojuhelnik
    pole[0] = true;
    var x = Math.round(Math.random()*90) + 10;
    var y = Math.round(Math.random()*90) + 10;
    var z = x**2 + y**2;
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
a = zadani[2];
b = zadani[3];
c = zadani[4];

kontrola(zadani, true, "a")
