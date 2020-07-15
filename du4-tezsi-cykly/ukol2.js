function generator2_1(){
  var pole = [];
  for (var i = 0; i < Math.round(Math.random()*10 + 8); i  ++) {
    pole.push(Math.round(Math.random()*34+1));
  }
  return pole;
}

function kontrolator2_a1a(zadani, cas){
  console.log("způsob učení a), od nejtěžšího");
  var spravne = 0;
  var v = 1;
  while (zadani.lenght>0) {
    var nejvetsi = 0;
    var i_nejvetsi = 0;
    for (var i = 0; i < zadani.length; i++) {
      if (zadani[i]>nejvetsi) {
        nejvetsi = zadani[i];
        i_nejvetsi = i;
      }
    }
    spravne = spravne + nejvetsi/v;
    v = v + nejvetsi/200;
    zadani.splice(i_nejvetsi, 1);
  }
  console.log("Mnou vypočítaný čas:" + spravne);
  console.log("Tebou vypočítaný čas: " + cas);
}

function kontrolator2_a1b(zadani, cas){
  console.log("způsob učení a), od nejlehčího");
  var spravne = 0;
  var v = 1;
  while (zadani.lenght>0) {
    var nejmensi = 51;
    var i_nejmensi = 0;
    for (var i = 0; i < zadani.length; i++) {
      if (zadani[i]<nejmensi) {
        nejmensi = zadani[i];
        i_nejmensi = i;
      }
    }
    spravne = spravne + nejmensi/v;
    v = v + nejmensi/200;
    zadani.splice(i_nejmensi, 1);
  }
  console.log("Mnou vypočítaný čas:" + spravne);
  console.log("Tebou vypočítaný čas: " + cas);
}

function kontrolator2_b1a(zadani, cas){
  console.log("způsob učení b), od nejtěžšího");
  var spravne = 0;
  var v = 1;
  while (zadani.lenght>0) {
    var nejvetsi = 0;
    var i_nejvetsi = 0;
    for (var i = 0; i < zadani.length; i++) {
      if (zadani[i]>nejvetsi) {
        nejvetsi = zadani[i];
        i_nejvetsi = i;
      }
    }
    spravne = spravne + nejvetsi/v;
    v = v *(1+nejvetsi/200);
    zadani.splice(i_nejvetsi, 1);
  }
  console.log("Mnou vypočítaný čas:" + spravne);
  console.log("Tebou vypočítaný čas: " + cas);
}

function kontrolator2_b1b(zadani, cas){
  console.log("způsob učení b), od nejlehčího");
  var spravne = 0;
  var v = 1;
  while (zadani.lenght>0) {
    var nejmensi = 51;
    var i_nejmensi = 0;
    for (var i = 0; i < zadani.length; i++) {
      if (zadani[i]<nejmensi) {
        nejmensi = zadani[i];
        i_nejmensi = i;
      }
    }
    spravne = spravne + nejmensi/v;
    v = v * (1+nejmensi/200);
    zadani.splice(i_nejmensi, 1);
  }
  console.log("Mnou vypočítaný čas:" + spravne);
  console.log("Tebou vypočítaný čas: " + cas);
}

function bez2(){
  console.log("---------------- ukol 2----------------");
  //zde piš svůj kód
  var pole = generator2_1();
  var zadani = pole; //jen kopie pole, aby bylo možné upravovat pole

  var tvuj_cas = 25;
  kontrolator2_a1a(zadani, tvuj_cas); // způsob učení a), od nejtěžšího
  kontrolator2_a1b(zadani, tvuj_cas); // způsob učení a), od nejlehčího
  kontrolator2_b1a(zadani, tvuj_cas); // způsob učení b), od nejtěžšího
  kontrolator2_b1b(zadani, tvuj_cas); // způsob učení b), od nejlehčího
  // už mě to nebaví, optimální algoritmus se mi nechce vymýšlet a procházení
  // všech možností se mi nechce programovat... Jdu na kalkulačku
}
