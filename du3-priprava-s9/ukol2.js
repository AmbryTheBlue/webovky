var k = Math.round(Math.random()*10000);

function kontrola(zadani, reseni) {
  while (zadani>12) {
    console.log(zadani);
    if (zadani%3==0) {
      zadani /= 3;
      zadani += 2;
    }
    else if (zadani%5==0) {
      zadani += 5;
      zadani /= 5;
    }
    else {
      zadani += 3;
    }
  }
  spravne = zadani;
  console.log("Správné řešení = " + spravne);
  console.log("Tvoje řešení = " + reseni);
}

var j = k;
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

kontrola(j,k);
