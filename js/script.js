/* Il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali */

//? #1: Raccolgo i dati della sezione info-passeggero; 
//? #2: Creo un evento da collegare al button; 
//? #3: Raccolgo i dati della sezione ticket;
//? #4: Calcolo il prezzo del biglietto rispetto ai km inseriti; 
//? #5: Verifico l'età, applico se previsto lo sconto, calcolo il prezzo finale;
//? #6: Riduco a due decimali il prezzo del biglietto;
//? #7: Stampo tutto nella sezione ticket info.

// Passenger-info section 
var nameElement = document.getElementById("name");
var kmsElement = document.getElementById("kms");
var ageGroupElement = document.getElementById("age-group");
var buttonGenerateTicketElement = document.getElementById("button-generate-ticket");
var buttonResetElement = document.getElementById("button-reset");

// Ticket-info section 
var passengetNameElement = document.getElementById("passenger-name");
var discountAppliedElement = document.getElementById("discount-applied");
var trainCarElement = document.getElementById("train-car");
var trainCodeElement = document.getElementById("train-code");
var priceTicketElement = document.getElementById("price-ticket");

// Event listener
buttonGenerateTicketElement.addEventListener("click", function () {
    nameValue = nameElement.value;
    console.log("Nome passeggero: ", nameValue);
    kmsValue = kmsElement.value;
    console.log("Kms: ", kmsValue);
    ageGroupValue = ageGroupElement.value;
    console.log("Fascia d'età: ", ageGroupValue);

    var priceKm = 0.21 * kmsValue;
    console.log("Prezzo/km: ", priceKm);
    var messageDiscountApplied = "Tariffa ordinaria";
    console.log("Tipo di tariffa: ", messageDiscountApplied);

    if (ageGroupValue === "min-18") {
        priceKm *= 0.8;
        console.log("Prezzo scontato del 20%: ", priceKm);
        messageDiscountApplied = "Tariffa scontata: -20%";
        console.log("Tipo di tariffa: ", messageDiscountApplied);
    }

    if (ageGroupValue === "over-65") {
        priceKm *= 0.6;
        console.log("Prezzo scontato del 40%: ", priceKm);
        messageDiscountApplied = "Tariffa scontata: -40%";
        console.log("Tipo di tariffa: ", messageDiscountApplied);
    }

    priceKm = "€ " + priceKm.toFixed(2);
    console.log("Prezzo con due decimali: ", priceKm);
});















