var pole = [];
for (var i = 0; i < Math.round(Math.random()*40 + 10); i++) {
  pole.push(Math.round(Math.random()*100));
}
//console.log(pole);
function kontrola (zadani, reseni){
  console.log("Zadání pole:");
  console.log(zadani);
  //Vypocet spravneho reseni
  spravne = []
while (zadani.length > 0) {
  nej = 0;
  aktualni_i= 0;
  for (var i = 0; i < zadani.length; i++) {
    if (zadani[i]>nej) {
      aktualni_i = i;
      nej = zadani[i];
    }
  }
  zadani.splice(aktualni_i,1);
  spravne.push(nej);
  }
  //Porovnani reseni
  console.log("Tvoje řešení");
  console.log(reseni);
  console.log("Správné řešení:");
  console.log(spravne);
  if (spravne.length == reseni.length) {
    console.log("Řešení má stejnou délku jako kontrolní řešení");
    x = true;
  for (var i = 0; i < spravne.length; i++) {
    //console.log(spravne[i] + " vs " + reseni[i]);
    if (spravne[i] != reseni[i]) {
      x = false;
      console.log("Nalezena neshoda na pozici: " + i);
      break;
    }
  }

  if (x) {
    console.log("Pole se shodují. Řešení je správné");
  }
}
else {
  console.log("Pole mají jinou délku..");
}
}
//Soukromý test funkčnosti
var pole2 = []
for (var i = 0; i < pole.length; i++) {
  pole2[i] = pole[i];
}
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
  //console.log(nejvetsi);
  pole.splice(poradi,1);
  //console.log(pole);
  //console.log(novy_pole);
}
kontrola(pole2, novy_pole);
