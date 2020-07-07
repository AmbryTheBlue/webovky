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
console.log(pole1);
console.log(pole2);

//ukol 1
if (pole1.length < pole2.length) {
  console.log("pole 1 je menší");
}
else if (pole1.length>pole2.length) {
  console.log("pole 2 je menší");
}
else {
  console.log("pole jsou stejně dlouhé");
}

//ukol 2
var soucet1 = 0;
for (var i = 0; i < pole1.length; i++) {
 soucet1 = soucet1 + pole1[i];
}
var soucet2 = 0;
for (var i = 0; i < pole2.length; i++) {
 soucet2 = soucet2 + pole2[i];
}

if (soucet1<soucet2) {
  console.log("součet pole 1 je menší než součet pole 2");
}
else if (soucet1>soucet2) {
  console.log("součet pole 1 je větší než součet pole 2");
}
else {
  console.log("součty polí se rovnají");
}

//napoveda pro ukol2:
pole3 = [1,2,3,4,5];

var soucet3 = 0;
j = 0;

soucet3 = soucet3 + pole3[j];
j = j + 1;
soucet3 = soucet3 + pole3[j];
j++;
soucet3 = soucet3 + pole3[j];
j++;
soucet3 = soucet3 + pole3[j];
j++;
soucet3 = soucet3 + pole3[j];

soucet3 = 0;
soucet3 = soucet3 + pole3[0];
soucet3 = soucet3 + pole3[1];
soucet3 = soucet3 + pole3[2];
soucet3 = soucet3 + pole3[3];
soucet3 = soucet3 + pole3[4];

soucet3 = 0;
for (var i = 0; i < pole3.length; i++) {
  soucet3 = soucet3 + pole3[i]
}

for (var i = 0; i < 20; i = i + 2.5) {
  //console.log(i);
}

//ukol3:
//ukol3-a
var nwm = 0;
if ((pole1.length % 2)==0) {
for (var i = 0; i < pole1.length; i++) {
  if (pole1[i]>nwm ) {
    nwm = pole1[i];
    }
  }
  console.log("Největší hodnota:");
  console.log(nwm);
}
//ukol3-b
var nejmensi = 101;
if ((pole1.length % 3)==0) {
  for (var i = 0; i < pole1.length; i++) {
    if (nejmensi>pole1[i]) {
      nejmensi = pole1[i];
    }
  }
  console.log("Nejmenší hodntota:");
  console.log(nejmensi);
}
//ukol 3-c
if ((pole1.length % 2)!=0 && (pole1.length % 3)!=0) {
  var stredni_index = (pole1.length-1) /2;
  var stredni = pole1[stredni_index];
  console.log("Hodnota prostředního prvku:");console.log(stredni);}

//ukol 4:
//ukol 4-a:
var souc = 0
for (var i = 0; i < pole2.length; i++) {
  souc = souc + pole2[i];
}
var arit = souc/ pole2.length
console.log(arit);

//ukol 4-b:
  console.log("Pole 2 x " + pole2[x]);
  console.log("Pole 1 x " + pole1[x]);
if (pole2[x]>pole1[x]) {
  pole2.splice(x, 1);
  }
  else {
    pole2.splice(x, 0, 99);
  }
  console.log("Změněno Pole 2 x " + pole2[x]);

//ukol 4-c:
var hodnota=-1;
  for (var i = 0; i < pole2.length; i++) {
  if (pole2[i] == 42|| pole2[i]==34|| pole2[i]==69) {
  hodnota = pole2[i];
  break;
  }
}
console.log(hodnota);

//hardcore ukol
pole2 = [35,54,44];
var novy = 0
while (pole2.length > 1) {
  if (pole2[pole2.length-1] + pole2[pole2.length-2]>100) {
    novy = pole2[pole2.length-1] - pole2[pole2.length-2];
  }
  else {
    novy = pole2[pole2.length-1] + pole2[pole2.length-2];
  }
pole2.pop();
pole2.splice(pole2.length-1, 1, novy);
//pole2[pole2.length-1] = novy;
}
console.log("Operace na poli");
console.log(novy);
