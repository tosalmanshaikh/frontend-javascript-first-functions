/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result1 = add(1, 4);
console.log(result1);

const reslut2 = add(2,5)
console.log(reslut2);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name){
  return "Hoi " + name
}

const personalGreet1 = greeter("Jan");
console.log(personalGreet1);

const personalGreet2 = greeter("Kees");
console.log(personalGreet2);



/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToseconds(minutes){
  return minutes * 60;
}

const actualTime1 = minutesToseconds(1);
console.log(actualTime1);

const actualTime2 = minutesToseconds(3);
console.log(actualTime2);

const actualTime3 = minutesToseconds(23);
console.log(actualTime3);


/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge(firstString, secondString){
  return firstString + secondString;
}

const mergeTogether = merge("abra","cadabra");
console.log(mergeTogether);


function merge1(firstString, secondString){
  return firstString + secondString;
}

const mergeWords = merge1("zoet","sappig");
console.log(mergeWords);

/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(dogAge){
  const humanAge = dogAge * 7;
  return "Jouw hond is " + humanAge + " jaar oud in mensenjaren."
}

const myDog = calculateDogYears(6);
console.log(myDog);

function calculateDogAge(dogAge){
  const humanAge = dogAge * 7;
  return "Jouw hond is " + humanAge + " jaar oud in mensenjaren."
}

const mineDog = calculateDogAge("2");
console.log(mineDog);

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper (word, character){
  return character + word + character;
}

const result = wrapper("bril","*");
console.log(result);


/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."



function createDetailString(details) {
  return "het beroep van " + details.firstName + " " + details.lastName + " is " + details.profession
}


const outcome = createDetailString({firstName: "kees", lastName: "klassen", profession: "brandweerman"});
    console.log(outcome);



