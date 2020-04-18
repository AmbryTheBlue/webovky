
pozice = [0,0,0,0,0,0,0]

def posun(pole, h):
    pole[h] = pole[h] + 1
    for i in range(h+1, len(pole)):
        pole[i] = 0
    print(pole)
    return pole
def vypis(pole,h):
    text = ""
    for i in range(1,h+1):
        text = text + str(pole[i]) + "."
    return text
def vytvor_jmeno(pole,h):
    text = ""
    for i in range(1,h+1):
        text = text + str(pole[i]) + "-"
    return text
finalni = ""
bez=1
pp = 0 #a kolikátém jsme paragrafu
while(bez==1):
    cislo = False
    while(cislo==False and bez==1):
        vstup_paragrafu = input("Napiš požadovaný počet paragrafů (0 pokud žádný nechcete)")
        try:
            vstup_paragrafu = int(vstup_paragrafu)
            cislo = True
        except:
            if(vstup_paragrafu=="x"):
                print("Konec programu.")
                bez =0
            else:
                print("Chyba zadaná hodnota není číslo. Znovu!")
    if(cislo):
        for i in range(vstup_paragrafu):
            pp = pp + 1
            finalni = finalni + "<p>{}. paragraf, který je paragrafem</p>\n".format(pp)

    spravna_velikost= False
    while(spravna_velikost==False and bez ==1):
        velikost = input("Napiš požadovanou veliksot nadpisu (celé číslo opd 1 do 6):")
        try:
            velikost = int(velikost)
            if(velikost<7 and 0<velikost):
                spravna_velikost = True
            else:
                print("Chyba, nesprávná velikost nadpisu (má být od 1 do 6). Zkus znovu")
        except:
            if (velikost == "x"):
                print("Konec programu.")
                bez=0
            else:
                print("Chyba zadaná hodnota není číslo. Znovu!")
    if(spravna_velikost):
        posun(pozice, velikost)
        jmeno = '<a name="{}"></a>'.format(vytvor_jmeno(pozice, velikost))
        finalni = finalni + "<h{0}> {2} {1} Nějaký nadpis</h{0}>\n".format(velikost, vypis(pozice,velikost), jmeno)
print(finalni)
