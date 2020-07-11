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
