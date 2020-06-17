//globální proměnné
var pole = [];
var posledni_znak = ""; //bude rovno n, když byl poslední znak číslo
var je_to_cislo = "n";
var je_to_tecka = ".";

//definice funkcí
function zobraz(){
  console.log("Zobrazeno aktuální pole:\n" + pole);
  //document.getElementById('Zapis').innerHTML = pole.join(" ");
}
function pridejCislo(cislo){
  //pokud je poslendi znak cislo nebo '.'
  if (posledni_znak==je_to_cislo|| posledni_znak==je_to_tecka) {
    //console.log("Tady jsem!" + pole[pole.length -1]);
    pole[pole.length-1] = pole[pole.length-1] + cislo.toString();
    posledni_znak = "n";
  }
  else {
    pole.push(cislo.toString());
    posledni_znak = "n";
  }
  zobraz();
}
function pridejZnak(znak){
  if (posledni_znak=="n") {
    pole[pole.length] = znak;
    posledni_znak = znak;
    console.log("Znak '" + znak + "' byl přidán");
  }
    else if (posledni_znak==")") {
      if(znak=="."){
      alert("Nelze použít desetinnou tečku za závorkou");
    }
    else{
      pole[pole.length] = znak;
      posledni_znak = znak;
      console.log("Znak '" + znak + "' byl přidán");
    }
  }
  else if (posledni_znak=="("||posledni_znak=="") {
    if (znak=="+"||znak=="-") {
      pole[pole.length] = znak;
      posledni_znak = znak;
      console.log("Znak '" + znak + "' byl přidán");
    }
    else {
      alert("Znak vyžaduje 'čísla' na obou stranách");
    }
  }
  else if (posledni_znak=="+"||posledni_znak=="-"||posledni_znak=="/"||posledni_znak=="*") {
    //pozor chybí tu znak umocnění a odmocnění
    if (znak == "(") {
      pole[pole.length] = znak;
      posledni_znak = znak;
      console.log("Znak '" + znak + "' byl přidán");
    }
    else {
            alert("Předchozí znak vyžaduje 'čísla' na obou stranách");
    }
  }
  else if (posledni_znak==".") {
      alert("Za desetinnou tečku musí přijít číslo!");
    }
  else {
    alert("Chybí mi nějaký znak jako možnost. Vnitřní chyba programu.");
  }
  zobraz();
}

function vymazPredchozi(){
  var smazano = "";
  if(posledni_znak==""){
    console.log("Pole je prázdné, nejde nic smazat");
  }
  else{
  if(posledni_znak==je_to_cislo){
    if(pole[pole.length-1].length == 1){
      smazano = pole.pop();
      console.log("Smazáno poslední číslo, protože má jen jednu číslici" + smazano);
      //co je prechozi znak
      if(typeof pole.length == "undefined"){
        //pole má delku 0
        posledni_znak = "";
      }
      else{
        //před číslem musí být vždy operátor
        posledni_znak = pole[pole.length-1];
      }
    }
    else {
      var pocet_cislic = pole[pole.length-1].length;
      var posledni_cislo = pole[pole.length-1];
      smazano = pole[pole.length-1].pop();
      console.log("Smazána poslední číslice: " + smazano + " z posledního čísla:" + posledni_cislo);
      //ověření, jeslti je poslední znak čísla nyní '.' nebo číslice nebo
      pocet_cislic = pole[pole.length-1].length;
      var posledni_cislice = pole[pole.length-1][pocet_cislic-1];
      if(posledni_cislice=="."){
        posledni_znak = ".";
        console.log("Poslední znak čísla je '.' ");
      }
      else {
        //posledím znakem je stále číslo
        posledni_znak = je_to_cislo;
      }
    }
  }
  else {
    smazano = pole.pop();
    console.log("Smazán poslední znak: " + smazano);
  }
}
  zobraz();
}

function vymazCele(){
  pole = [];
  posledni_znak = "";
  console.log("Celé pole bylo smazáno");
  zobraz();
}

function vypocitej(){
  alert("Zatím nefunguje!");
}
