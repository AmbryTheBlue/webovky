function generator(){
  var red = [];
  for (var i = 0; i < Math.round(Math.random()*10 + 3); i++) {
    red.push(Math.round(Math.random()*100));
  }
  var green = [];
  for (var i = 0; i < Math.round(Math.random()*5 + 5); i++) {
    green.push(Math.round(Math.random()*200));
  }
  var blue = [];
  for (var i = 0; i < Math.round(Math.random()*5 + 5); i++) {
    blue.push(Math.round(Math.random()*200));
  }
  return [red, green, blue]
}

function kontrolator1(zadani, reseni){
  var spravne = 0;
  for (var i = 0; i < zadani[0].length; i++) {
    for (var j = 0; j < zadani[1].length; j++) {
      for (var k = 0; k < zadani[2].length; k++) {
        if (zadani[0][i] + zadani[1][j] > zadani[2][k] && zadani[0][i] + zadani[2][k] > zadani[1][j] && zadani[2][k] + zadani[1][j] > zadani[0][i] ) {
          spravne++;
        }
      }
    }
  }
  console.log("Správné řešení:" + spravne);
  console.log("Tvoje řešení: " + reseni);
  if (spravne==reseni) {
    console.log("Máš to dobře! Výborně");
  }
  else {
    console.log("Máš to špatně :(");
  }
}

function kontrolator2(zadani, reseni){
  var spravne = 0;
  for (var i = 0; i < zadani[0].length; i++) {
    for (var j = i; j < zadani[0].length; j++) {
      for (var k = j; k < zadani[0].length; k++) {
        if (zadani[0][i] + zadani[0][j] > zadani[0][k] && zadani[0][i] + zadani[0][k] > zadani[0][j] && zadani[0][k] + zadani[0][j] > zadani[0][i]) {
          //console.log("Trojuhelnik:" + zadani[0][i] + "--" +zadani[0][j] + "--"+ zadani[0][k]);
          spravne++;
        }
      }
    }
  }
  console.log("Správné řešení:" + spravne);
  console.log("Tvoje řešení: " + reseni);
  if (spravne==reseni) {
    console.log("Máš to dobře! Výborně");
  }
  else {
    console.log("Máš to špatně :(");
  }
}

function kontrolator3(zadani, reseni){
  var spravne = 0;
  for (var i = 0; i < zadani[0].length; i++) {
    for (var j = i+1; j < zadani[0].length; j++) {
      for (var k = j+1; k < zadani[0].length; k++) {
        if (zadani[0][i] + zadani[0][j] > zadani[0][k] && zadani[0][i] + zadani[0][k] > zadani[0][j] && zadani[0][k] + zadani[0][j] > zadani[0][i]) {
          //console.log("Trojuhelnik:" + zadani[0][i] + "--" +zadani[0][j] + "--"+ zadani[0][k]);
          spravne++;
        }
      }
    }
  }
  console.log("Správné řešení:" + spravne);
  console.log("Tvoje řešení: " + reseni);
  if (spravne==reseni) {
    console.log("Máš to dobře! Výborně");
  }
  else {
    console.log("Máš to špatně :(");
  }
}

function bez1(){
  console.log("Ahoj tu ukol 1");

  var vstup = generator();
  var cervena = vstup[0];
  var zelena = vstup[1];
  var modra = vstup[2];
  //zde piš svůj kód
  kontrolator1(vstup,0);
  kontrolator2(vstup,2);
  kontrolator3(vstup,0);
}
