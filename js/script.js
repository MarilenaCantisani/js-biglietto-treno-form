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
var ticketInfoElement = document.getElementById("ticket-info");


// Ticket-info section 
var passengetNameElement = document.getElementById("passenger-name");
var discountAppliedElement = document.getElementById("discount-applied");
var trainCarElement = document.getElementById("train-car");
var trainCodeElement = document.getElementById("train-code");
var priceTicketElement = document.getElementById("price-ticket");

// Event listener
buttonGenerateTicketElement.addEventListener("click", function () {
    //* Values entered
    nameValue = nameElement.value;
    console.log("Nome passeggero: ", nameValue);
    kmsValue = kmsElement.value;
    console.log("Kms: ", kmsValue);
    ageGroupValue = ageGroupElement.value;
    console.log("Fascia d'età: ", ageGroupValue);

    //* Price calculation 
    var priceKm = 0.21 * kmsValue;
    console.log("Prezzo/km: ", priceKm);
    var messageDiscountApplied = "Tariffa ordinaria";
    console.log("Tipo di tariffa: ", messageDiscountApplied);

    //* Age and discount check
    if (ageGroupValue === "min-18") {
        priceKm *= 0.8;
        console.log("Prezzo scontato del 20%: ", priceKm);
        messageDiscountApplied = "Tariffa scontata (- 20%)";
        console.log("Tipo di tariffa: ", messageDiscountApplied);
    }

    if (ageGroupValue === "over-65") {
        priceKm *= 0.6;
        console.log("Prezzo scontato del 40%: ", priceKm);
        messageDiscountApplied = "Tariffa scontata (- 40%)";
        console.log("Tipo di tariffa: ", messageDiscountApplied);
    }

    //* Final price calculation
    priceKm = "€ " + priceKm.toFixed(2);
    console.log("Prezzo con due decimali: ", priceKm);

    //* Random train car number
    var trainCarNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Numero cabina ", trainCarNumber);

    //* Random train code number
    var trainCodeNumber = Math.floor(Math.random() * (4999 - 4001)) + 4001;
    console.log("Numero treno: ", trainCodeNumber);

    //* Print in the ticket-info section
    passengetNameElement.innerHTML = nameValue;
    discountAppliedElement.innerHTML = " " + messageDiscountApplied;
    trainCarElement.innerHTML = " " + trainCarNumber;
    trainCodeElement.innerHTML = " " + trainCodeNumber;
    priceTicketElement.innerHTML = " " + priceKm;

    //* Add Visibility Hidden to ticket info section
    ticketInfoElement.classList.remove("hidden");
});

buttonResetElement.addEventListener("click", function () {
    //* Reset value element
    console.log("reset premuto")
    nameElement.value = "";
    kmsElement.value = "15";
    ageGroupElement.value = "maj-18";

    //* Add Visibility Hidden to ticket info section
    ticketInfoElement.classList.add("hidden");

});













