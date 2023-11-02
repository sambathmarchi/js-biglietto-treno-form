let btn = document.getElementById("myBtn");
let user = document.getElementById("user");
let chilo =  document.getElementById("km");
let age =  document.getElementById("eta");
let costokm = 0.21
let prezzo;
let costofinale
let myName = document.getElementById("myName");
let costoBiglietto = document.getElementById("costoBiglietto");
let carrozza = document.getElementById("carrozzaRandom");
let codice = document.getElementById("codiceRandom");


btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + user.value)
    console.log("L'utente ha scritto: " + chilo.value)
    console.log("L'utente ha scritto: " + age.value);
    if (age.value=="minorenne") {
        prezzo = (parseInt(chilo.value) * costokm)
        costofinale = prezzo - (20/100 *prezzo);
        myName.innerHTML = user.value;
        carrozzaRandom.innerHTML = Math.floor(Math.random() * 9) +1;
        codiceRandom.innerHTML = Math.floor(Math.random() * 89999) + 10000;
        costoBiglietto.innerHTML = costofinale.toFixed(2) + "€";
    } else if (age.value=="over65") {
        prezzo = (parseInt(chilo.value) * costokm)
        costofinale = prezzo - (40/100 *prezzo);
        myName.innerHTML = user.value;
        carrozzaRandom.innerHTML = Math.floor(Math.random() * 9) +1;
        codiceRandom.innerHTML = Math.floor(Math.random() * 89999) + 10000;
        costoBiglietto.innerHTML = costofinale.toFixed(2) + "€";
    } else {
        costofinale = (parseInt(chilo.value) * costokm)
        myName.innerHTML = user.value;
        carrozzaRandom.innerHTML = Math.floor(Math.random() * 9) +1;
        codiceRandom.innerHTML = Math.floor(Math.random() * 89999) + 10000;
        costoBiglietto.innerHTML = costofinale.toFixed(2) + "€";
    }
    console.log("il prezzo è di: " + prezzo);
    console.log("il costofinale è di: " + costofinale);
    console.log("la carrozza è numero: " + carrozza.value);
    console.log("il codice è numero: " + codice.value);
});