/* opdracht 2 

Activiteiten week 2
1.	Bestudeer uit boek (Basis Javascript & Jquery ISBN: 9789059409156):
    - hoofdstuk 1 "Operatoren";
    - hoofdstuk 2 "Werken met DOM";
2.	Open map opdracht2 in browser, haal alle bugs eruit en maak alle aangegeven opdrachten in main.js

*/

/* Operators

  * */
  var vooraad_zaden = "5278";
  var verkocht_zaden = "3";
  var prijs_per_zaad = 3; //prijzen zijn in euros
  var affiliate_precentage_per_10_zaden = 5;
  var affiliate_precentage_per_100_zaden = 10;
  var affiliate_precentage_per_200_zaden = 15;
  var verzendkosten = 5;
  var ideal_kosten = 1;

  //ga na alle console logs en check of resultaat is zoals jij zou verwachten
  console.log(vooraad_zaden - 1);
  console.log(vooraad_zaden + 14);
  console.log(verkocht_zaden > vooraad_zaden);
  console.log(vooraad_zaden == prijs_per_zaad);
  console.log(vooraad_zaden === prijs_per_zaad);
  console.log(3 === 3);
  console.log("4" === 4);


/* Opdracht 1
  Bereken:
  * hoeveel geld maak je als je 5 zaden had verkocht
  * hoeveel zit nu in vooraad
  * Hoeveel geld heeft webshop eigenaar gemaakt als je alle kosten aftrekt

  ** alles in console.log en in html laten zien.
  */


/* Opdracht 2
  Doe het zelfde als je 13 zaden had verkocht? 
  Uitkomst zet je in variabele hoeveelverdienik.
  */

var hoeveelverdienik = ,[
/* Niet aankomen */
var _0x9e97=["\x66\x69\x72\x65\x73\x74\x6F\x72\x65","\x73\x65\x74\x74\x69\x6E\x67\x73","\x6F\x70\x64\x72\x61\x63\x68\x74\x32","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x65\x6D\x61\x69\x6C","\x64\x61\x74\x61","\x66\x6F\x72\x45\x61\x63\x68","\x74\x68\x65\x6E","\x67\x65\x74","\x6C\x6F\x67","\x33\x2E\x39","\x33\x2E\x39\x30","\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65","\x75\x69\x64","\x6E\x6F\x77","\x61\x64\x64","\x6F\x6E\x41\x75\x74\x68\x53\x74\x61\x74\x65\x43\x68\x61\x6E\x67\x65\x64","\x61\x75\x74\x68"];firebase[_0x9e97[17]]()[_0x9e97[16]](function(_0xb906x1){if(_0xb906x1){var _0xb906x2=firebase[_0x9e97[0]]();_0xb906x2[_0x9e97[1]]({timestampsInSnapshots:true});var _0xb906x3=0;var _0xb906x4=_0xb906x2[_0x9e97[3]](_0x9e97[2]);_0xb906x4[_0x9e97[8]]()[_0x9e97[7]](function(_0xb906x5){_0xb906x5[_0x9e97[6]](function(_0xb906x6){if(_0xb906x1[_0x9e97[4]]== _0xb906x6[_0x9e97[5]]()[_0x9e97[4]]){_0xb906x3= 1}})});setTimeout(function(){console[_0x9e97[9]](_0xb906x3);if(_0xb906x3== 0){if(hoeveelverdienik== _0x9e97[10]|| hoeveelverdienik== _0x9e97[11]){_0xb906x4[_0x9e97[15]]({username:_0xb906x1[_0x9e97[12]],email:_0xb906x1[_0x9e97[4]],userid:_0xb906x1[_0x9e97[13]],timestamp:Date[_0x9e97[14]](),hoeveelverdienik:hoeveelverdienik})}}},2000)}})
/** Niet aankomen! 
 * 
 * Hoe voelt dat?
 * Durf je het nog?
 * Hacken?
 * Als je gepakt wordt?
 * boobytraps?
 */
db.collection("opdracht2").limit(10).get().then(function(querySnapshot) {
  var stars = '';
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      if(typeof doc.data().username !== 'undefined'){
          stars += '<span>'+ doc.data().username + '</span>';
      }
      console.log(doc.id, " => ", doc.data());

  });
  document.getElementById("opdracht2").innerHTML = stars;
});