let month =parseInt(prompt("Bir AY giriniz (1-12)"))
let day =parseInt(prompt("Bir GÜN giriniz (1-31)"))


if (month<1 || month>12 || day<1 || day >31) {
    console.log("Geçersiz sayı girdin KARDEŞŞ.İnsan gibi bir sayı gir.");
    
    
} else if ((month ==2 && day >=21 ) ||  (month >=2 && month<6)){
    console.log("İlkbaharı seviyosun.");
}
    
else if ((month>=6 && month <9  )  ||(month ==9 && day <=21)){
 console.log("Yazı seviyorsun.");
}
else if (
    (month==9 && day >=22) || (month >9 && month <12) || (month == 12 && day <=20)
){console.log("Sonbahar seviyorsun.");}
else {
    console.log("Kışı seviyorsun");
}