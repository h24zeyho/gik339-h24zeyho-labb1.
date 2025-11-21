// Uppgift 2 

// console.log innan blocket
console.log ("före blocket");
{

// Inuti blocket
var bilMärke = "Volvo xc60";  // fungerar utanför blocket också
let milTal = 20;  // gäller bara inuti det block 
const land = "Sverige"; // gäller också bara i blocket, men värdet kan inte ändras

console.log ("inuti blocket");
console.log(bilMärke);
console.log(milTal);
console.log(land);

}

// console.log efter blocket
console.log ("efter blocket");  
console.log(bilMärke); // Var varibel fungera annorlunda så kan fungera även utanför när blocket tar slut.
//console.log(milTal); // Ger fel eftersom "miltal" är en blockscope.
//console.log(land); // Ger fel eftersom "land" är en blockscope.

/*
   - Före blocket: variablerna är inte skapade än ger fel.
   - Inuti blocket: alla tre variabler fungerar här.
   - Efter blocket: endast 'var' fungerar, 'let' och 'const' är utanför sitt scope och ger fel.

*/

/*
    Olika placering av console.log():
   - Före blocket: variablerna är inte skapade än → ger fel.
   - Inuti blocket: alla tre variabler fungerar här.
   - Efter blocket: endast 'var' fungerar, 'let' och 'const' är utanför sitt scope och ger fel.
*/


// Uppgift 3 

// 1. Testa == och === med olika värden
console.log("'3' == 3:", '3' == 3);       // true eftersom '3' (string) omvandlas till tal 3 innan jämförelse
console.log("'3' === 3:", '3' === 3);     // false eftersom olika typer string och number

console.log("NaN === NaN:", NaN === NaN); // false eftersom NaN är inte lika med något, inte ens sig själv
console.log("null == undefined:", null == undefined);   // true eftersom de anses lika vid lös jämförelse (==)
console.log("null === undefined:", null === undefined); // false eftersom olika typer

// 2. Ternary operator för att testa truthy/falsy
let testValue = undefined;
let result = testValue ? "truthy" : "falsy";
console.log(result); // resultat blir falsy

// 3. Kontroll
console.log("Koden kördes utan fel ");

/*
== jämför bara värden, så den kan ändra typen i bakgrunden.
Till exempel '3' == 3 blir true eftersom strängen '3' omvandlas till siffran 3.
Men === jämför både värde och typ, så '3' === 3 blir false eftersom en sträng inte är samma typ som ett tal.

NaN betyder ‘Not a Number’ och är ett ogiltigt tal.
undefined betyder att en variabel finns men inte har något värde.
null betyder att man medvetet har sagt att variabeln ska vara tom.

En ternary operator är som en kort version av if.
Den testar om ett värde är ‘truthy’ eller ‘falsy’.
Till exempel undefined är ‘falsy’, så uttrycket ger det falska resultatet.

*/

// Uppgift 4 - Funktioner

// 3. Variabel i roten (utanför funktionen)
let name = "Zeyed";

console.log("Utanför funktionen, före anrop:", name);

// 1. Skapa en funktion som tar en parameter (name)
// Jag använder en arrowfunktion här:
const greet = (name) => {
  return "Hej " + name;
};

// 2. Anropa funktionen
console.log(greet("Mikaela")); // Exempel på direkt utskrift
let hälsning = greet(name);    // Exempel med variabel
console.log(hälsning);

// 3. Testa att logga 'name' igen efter funktionen
console.log("Utanför funktionen, efter anrop:", name);

// Testa att ändra variabeln 'name' utanför funktionen
name = "Ali";
console.log("Efter att 'name' ändrats utanför funktionen:", name);
console.log(greet(name)); // Nu hälsar funktionen på "Ali"

/*
Reflektion uppgift 4:

1. Olika sätt att skapa funktioner:
   - Funktionsdeklaration:
       function greet(name) { ... }
     Den kan anropas både före och efter den definierats (hoisting).
   - Funktionsuttryck:
       const greet = function(name) { ... };
     Den måste definieras innan den kan anropas.
   - Arrowfunktion:
       const greet = (name) => { ... };
     Kortare syntax, behåller sitt "this"-värde från omgivningen.
     Jag valde arrowfunktion för att den är modern och enkel.

2. Anrop innan/efter funktion:
   - Endast funktionsdeklarationer kan anropas innan de står i koden.
   - Funktionsuttryck och arrowfunktioner fungerar bara efter att de skapats.

3. Variabeln/parametern 'name':
   - 'name' utanför funktionen är en global variabel.
   - 'name' i funktionen är en parameter och finns bara inuti funktionen.
   - Ändras värdet utanför funktionen påverkar det bara den globala variabeln,
     inte parametern inne i funktionen (om man skickar in ett nytt värde, används det).

4. Skillnad mellan parameter, variabel och argument:
   - parameter = namnet i funktionsdeklarationen (t.ex. name i greet(name)).
   - argument = värdet man skickar in när man anropar funktionen (t.ex. "Mikaela").
   - variabel = ett namn som lagrar data utanför (eller inuti) en funktion.
*/