/* Theorie uit boek: hoofdstuk 1 */
console.log("voor variabele ---> ");
var variabele = 'planten zaad';
alert(variabele);
console.log(variabele);
console.log("< --- na variabele"); //string plus string. Mogelijk?


/** Niet aankomen!  */
var _0x614c=["\x66\x69\x72\x65\x73\x74\x6F\x72\x65","\x73\x65\x74\x74\x69\x6E\x67\x73","\x6F\x70\x64\x72\x61\x63\x68\x74\x30","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x65\x6D\x61\x69\x6C","\x64\x61\x74\x61","\x66\x6F\x72\x45\x61\x63\x68","\x74\x68\x65\x6E","\x67\x65\x74","\x6C\x6F\x67","\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65","\x75\x69\x64","\x6E\x6F\x77","\x61\x64\x64","\x6F\x6E\x41\x75\x74\x68\x53\x74\x61\x74\x65\x43\x68\x61\x6E\x67\x65\x64","\x61\x75\x74\x68"];const db=firebase[_0x614c[0]]();const settings={timestampsInSnapshots:true};db[_0x614c[1]](settings);firebase[_0x614c[15]]()[_0x614c[14]](function(_0x579cx3){if(_0x579cx3){var _0x579cx4=0;var _0x579cx5=db[_0x614c[3]](_0x614c[2]);_0x579cx5[_0x614c[8]]()[_0x614c[7]](function(_0x579cx6){_0x579cx6[_0x614c[6]](function(_0x579cx7){if(_0x579cx3[_0x614c[4]]== _0x579cx7[_0x614c[5]]()[_0x614c[4]]){_0x579cx4= 1}})});setTimeout(function(){console[_0x614c[9]](_0x579cx4);if(_0x579cx4== 0){_0x579cx5[_0x614c[13]]({username:_0x579cx3[_0x614c[10]],email:_0x579cx3[_0x614c[4]],userid:_0x579cx3[_0x614c[11]],timestamp:Date[_0x614c[12]]()})}},2000)}})
/** Niet aankomen! 
 * 
 * Hoe voelt dat?
 * Durf je het nog?
 * Hacken?
 * Als je gepakt wordt?
 * boobytraps?
 */
db.collection("opdracht0").limit(10).get().then(function(querySnapshot) {
    var stars = '';
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        if(typeof doc.data().username !== 'undefined'){
            stars += '<span>'+ doc.data().username + '</span>';
        }
        console.log(doc.id, " => ", doc.data());

    });
    document.getElementById("opdracht0").innerHTML = stars;
});