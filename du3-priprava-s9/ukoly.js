var pole = [];
for (var i = 0; i < Math.round(Math.random()*40 + 10); i++) {
  pole.push(Math.round(Math.random()*100));
}
console.log(pole);

//úkol 1

var novy_pole = [];
while (pole.length > 0) {
  var nejvetsi = 0;
  var poradi = 0;
  for (var i = 0; i < pole.length; i++) {
    if (pole[i]>nejvetsi) {
      nejvetsi = pole[i];
      poradi = i;
  }
  }
  novy_pole.push(nejvetsi);
  console.log(nejvetsi);
  pole.splice(poradi,1);
  console.log(pole);
  console.log(novy_pole);
}



//úkol 2
var k = Math.round(Math.random()*10000);

while (k>12) {
if ((k%3)==0) {
  k = k/3 + 2;
}
else if ((k%5)==0) {
  k = (k + 5)/5;
}
else {
  k = k + 3;
}
}


for (var k = Math.round(Math.random()*10000); k > 12; k=k) {
  if ((k%3)==0) {
    k = k/3 + 2;
  }
  else if ((k%5)==0) {
    k = (k + 5)/5;
  }
  else {
    k = k + 3;
  }
}

//úkol 3
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
  if (a**2 + b**2 == c^**2|| a**2 + c**2 == b**2 || b**2 + c**2 == a**2) {
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


//úkol 4
var x = 0;
var y = 0;
var z = 0;
