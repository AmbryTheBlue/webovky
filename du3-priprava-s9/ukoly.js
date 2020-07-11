var pole = [];
for (var i = 0; i < Math.round(Math.random()*40 + 10); i++) {
  pole.push(Math.round(Math.random()*100));
}
console.log(pole);


var nejvetsi = 0

for (var i = 0; i < pole.length; i++) {
  if (pole[i]>nejvetsi) {
    nejvetsi = pole[i]
}
};
console.log(nejvetsi);

 var nove_pole = [];
 for (var i = 0; i < nove_pole.length; i++) {
   if (novy_pole[i] > nejvetsi) {
nove_pole.push(nejvetsi)
   }
 }
console.log(nove_pole);

//úkol 2
