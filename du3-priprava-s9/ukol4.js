function generator(){
  var p = Math.random();
  var pole =[];
  if (p<0.33) {
    pole[0] = "n";
    pole[1] = Math.round(Math.random()*90) + 10;
    pole[2] = pole[1];
    while (pole[2] == pole[1];) {
    pole[2] = Math.round(Math.random()*90) + 10;
    }
    pole[3] = pole[1];
    pole[4] = 0;
  }
  else if (p<0.66) {
    pole[0] = "a";
    var d = Math.round(Math.random()*90) + 10;
    pole[1] = Math.round(Math.random()*90) + 10;
    pole[2] = pole[1] + d;
    pole[3] = pole[2] + d;
    pole[4] = d;
  }
  else {
    pole[0] = "g";
    var q = (Math.round(Math.random()*90) + 10) / (Math.round(Math.random()*90) + 10);
    pole[1] = Math.round(Math.random()*90) + 10;
    pole[2] = pole[1] * q;
    pole[3] = pole[2] * q;
    pole[4] = q;
  }
  return pole;
}
function kontrola(zadani, jaka_rada, kvocient_diference){
  if(jaka_rada==zadani[0]){
    console.log("Správně určená řada jako: " + jaka_rada);
  }
  else {
    console.log("Nesprávně určená řada jako: " + jaka_rada +". Ve skutečnosti je to: " + zadani[0]);
  }
}

zadani = generator();
x = pole[1];
y = pole[2];
z = pole[3];
