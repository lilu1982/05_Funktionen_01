/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Kevin"; // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamen();
// console.log(firstName);  // Fehler --> lokal!!!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) 
{
    if (firstName == "" || firstName == undefined) 
    {
        firstName = "Nobody";
    }
    
    console.log("Hallo " + firstName + "!");    
}

// ausgabeNamenParam("Kevin"); // --> Argument(e) args
// ausgabeNamenParam("Maurice");
// ausgabeNamenParam("Karolina");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName,familyName) 
{
    console.log("Hallo " + firstName + " " + familyName + "!");    
}

// ausgabeNamenParams("Kevin", "Clegg");
// ausgabeNamenParams("Clegg","Kevin");
// ausgabeNamenParams(prompt("Vorname:?"),prompt("Nachname:?"));

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

function ausgabeNamenParams2(firstName,familyName) 
{
    // 1. Job: string composing
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";
    
    // 2. Job: string output
    console.log(outputStr);    
}

// ausgabeNamenParams2("Kevin", "Clegg");

/***** Funktionen 03b *****/

// 1. Job: string composing
output(getString("Kevin", "Clegg"));
// getString("Kevin", "Clegg")
function getString(firstName,familyName) {
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr; // ---> Daten  zum Call

    console.log("Hi"); // nach return keine ausgabe , return beendet die funktion
}


// 2. Job: string output
// output("hi"); // Test UNIT-Test TDD (test driven development)
function output(outputStr) {
    console.log(outputStr);
}

