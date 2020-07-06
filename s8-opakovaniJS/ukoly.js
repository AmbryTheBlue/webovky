//Tak jedem na opakování
//prvně můj osobní generátor polí:
var delka_pole1 = Math.round(Math.random()*20 + 20); //cca od 20 do 40
var delka_pole2 = Math.round(Math.random()*40 + 10); // cca od 10 do 50
var pole1 = [];
for (var i = 0; i < delka_pole1; i++) {
  pole1.push(Math.round(Math.random()*100));
}
var pole2 = [];
for (var i = 0; i < delka_pole2; i++) {
  pole2.push(Math.round(Math.random()*100));
}
var x =  Math.round(Math.random()*10+1);
//console.log(pole1);
//console.log(pole2);

//Prostor pro splnění úkolů
