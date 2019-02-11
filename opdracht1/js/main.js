/*
Activiteiten week 1
1.	Bestudeer uit boek (Basis Javascript & Jquery ISBN: 9789059409156):
    - hoofdstuk 2 "Statements, gegevenstypen, variabelen";
    - hoofdstuk 7 "Werken met DOM";
2.	Open index.html in de map opdracht1 in browser, haal alle bugs eruit en maak alle aangegeven opdrachten in main.js

*/
console.log("test");
var Pa%%word = 'plantenzaad'

console.log(Pa%%word);
var nummer = 2;
var string = "1";
console.log(nummer + string); //string plus string. Mogelijk?

console.log(Pa$$word);

partnersProgramma = 'www.zadenonline.nl
console.log(partnersPr%%ogramma);
//er zijn meerdere webshops online met partners programma.
partnersProgramma = "www.zadenonline.nl";

partners_programma = 'www.zadenonline.nl';

console.log(partnersProgramma + + partners_programma);
console.log(partners_programma + "  : " + partners_programma);

tracking_code = 11233;
tracking_code = 11234;
tracking_code = false;
tracking_code = '';

console.log("tracking_code is: '" + tracking_code + "' of 11233 of 11234 of iets anders?");


//Opdracht1: zoek online minstes 5 affiliate programmas voor verkoop van plantenzaden!
//zet elk webshop in een variabele
//print elk variabele uit onder h3 kopje "Project Details" in een li
document.getElementById("zadenonline-nl").innerHTML = "zadenonline.nl"

/* Opdracht2: meld je aan voor elk gevonden affliate programma en zoek je affiliate link,
als je hebt gevonden, plaats het op het zelfde manier naast shop je affliate link in.
*/

/* Opdracht3: Plaats logo affliate link - zie plaatje /image/links_examples.png */







addlogoTosite();

length_in]

/** Niet aankomen!  */
var _0xba30=["\x66\x69\x72\x65\x73\x74\x6F\x72\x65","\x73\x65\x74\x74\x69\x6E\x67\x73","\x6F\x70\x64\x72\x61\x63\x68\x74\x31","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x65\x6D\x61\x69\x6C","\x64\x61\x74\x61","\x66\x6F\x72\x45\x61\x63\x68","\x74\x68\x65\x6E","\x67\x65\x74","\x6C\x6F\x67","\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65","\x75\x69\x64","\x6E\x6F\x77","\x61\x64\x64","\x6F\x6E\x41\x75\x74\x68\x53\x74\x61\x74\x65\x43\x68\x61\x6E\x67\x65\x64","\x61\x75\x74\x68"];firebase[_0xba30[15]]()[_0xba30[14]](function(_0x55fax1){if(_0x55fax1){var _0x55fax2=firebase[_0xba30[0]]();_0x55fax2[_0xba30[1]]({timestampsInSnapshots:true});var _0x55fax3=0;var _0x55fax4=_0x55fax2[_0xba30[3]](_0xba30[2]);_0x55fax4[_0xba30[8]]()[_0xba30[7]](function(_0x55fax5){_0x55fax5[_0xba30[6]](function(_0x55fax6){if(_0x55fax1[_0xba30[4]]== _0x55fax6[_0xba30[5]]()[_0xba30[4]]){_0x55fax3= 1}})});setTimeout(function(){console[_0xba30[9]](_0x55fax3);if(_0x55fax3== 0){_0x55fax4[_0xba30[13]]({username:_0x55fax1[_0xba30[10]],email:_0x55fax1[_0xba30[4]],userid:_0x55fax1[_0xba30[11]],timestamp:Date[_0xba30[12]]()})}},2000)}})
/** Niet aankomen! 
 * 
 * Hoe voelt dat?
 * Durf je het nog?
 * Hacken?
 * Als je gepakt wordt?
 * boobytraps?
 */
db.collection("opdracht1").limit(10).get().then(function(querySnapshot) {
    var stars = '';
    var count = 0;
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        if(typeof doc.data().username !== 'undefined'){
            count++;
            stars += '<span>'+ count +'. ' + doc.data().username + '</span>';
        }
        console.log(doc.id, " => ", doc.data());

    });
    document.getElementById("opdracht1").innerHTML = stars;
});