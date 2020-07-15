function generator3_1(){
  var pole = [];
  var soucet = 0;
  for (var i = 0; i < Math.round(Math.random()*100 + 1); i++) {
    var x = Math.floor(Math.random()*3);
    soucet += x;
    pole.push(x);
  }
  var rozlozenych = Math.round(Math.random()*8 + 1);
  return [pole,soucet+rozlozenych*3,rozlozenych];
}

function kontrolator3_1(zadani, reseni){
  console.log("___Kontrolator1____");
  console.log(zadani[0]);
  console.log("Počet vystřelených střel:" + zadani[1]);
  console.log("Správné řešení: " + zadani[2]);
  console.log("Tvoje řešení: " + reseni);
  if (zadani[2]==reseni) {
    console.log("Máš to správně! Výborně!");
  }
  else {
    console.log("Špatně :( Zkus to zkusit znovu.");
  }
}

function generator3_2(){
  var text = "";
  var soucet = 0;
  for (var i = 0; i < Math.round(Math.random()*100 + 1); i++) {
    var x = Math.floor(Math.random()*3);
    soucet += x;
    if (x==0) {
      text += "z";
    }
    else if (x==1) {
      text += "o";
    }
    else if (x==2) {
      text += "m";
    }
    else {
      console.log("A je to v prdeli!");
    }
  }
  var rozlozenych = Math.round(Math.random()*12 + 1);
  console.log(text);
  console.log(soucet+rozlozenych*3);
  return [text,soucet+rozlozenych*3,rozlozenych];
}

function kontrolator3_2(zadani, reseni){
  var text = zadani[0];
  var celkem_strel = zadani[1];
  var soucet_strel = 0;
  console.log("____Kontrolator2____");
  console.log("text: " + text);
  console.log("celkem strel: " + celkem_strel);
  while (text.length>0) {
    var prvni = text.charAt(0);
    if (prvni=="z") {
      soucet_strel +=0;
    }
    else if (prvni=="o") {
      soucet_strel += 1;
    }
    else if (prvni=="m") {
      soucet_strel += 2;
    }
    else {
      console.log("A sakra!");
    }
    text = text.slice(1,text.length);
  }
  var spravne = (celkem_strel-soucet_strel)/3;
  console.log("Počet rozložených: " + spravne);
  console.log("Tvoje řešení: " + reseni);
  if (spravne==reseni) {
    console.log("Máš to správně! Výborně!");
  }
  else {
    console.log("Špatně :( Zkus to zkusit znovu.");
  }
}



function bez3(){
  console.log("---------------- ukol 3 ----------------");
  var vstup = generator3_1();
  var bojiste = vstup[0];
  var strel = vstup[1];
  //zde piš svůj kód


  var vstup2 = generator3_2();
  var bojiste2 = vstup2[0];
  var strel2 = vstup2[1];


  var tvoje_reseni = 5;
  //Zde otestuj svoje řešení
  kontrolator3_1(vstup,tvoje_reseni);
  kontrolator3_2(vstup2,tvoje_reseni)
}
