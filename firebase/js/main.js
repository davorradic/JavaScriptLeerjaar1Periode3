// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpOeItpbA6csEcgkRSVQdXizuBog7hF8k",
  authDomain: "kruidenuitjeeigenkeuken.firebaseapp.com",
  databaseURL: "https://kruidenuitjeeigenkeuken.firebaseio.com",
  projectId: "kruidenuitjeeigenkeuken",
  storageBucket: "kruidenuitjeeigenkeuken.appspot.com",
  messagingSenderId: "607252341994"
};
firebase.initializeApp(config);
/* set variables */
var d = new Date();
var t = d.getTime();
var counter = t;

readCSV = readTextFile("database.csv");
//console.log(readCSV);
var excape_first_line = 0;
readCSV.forEach(function(entry) {
  if(excape_first_line !== 0){ /*remove the firstline, because we need only datas */
    e = entry.split(',');
    //prepare data for firebase database
    var dataForFB = {
      time: e[0],
      temperature: e[1],
      soilmoisture: e[2],
      light: e[3]
    }
    console.log(dataForFB);
    let db = firebase.database().ref("plantdata/")
    db.push().set(dataForFB);
  }
  excape_first_line++;
})

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var readCSV;
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                readCSV = rawFile.responseText.split("\r\n");
            }
        }
    }
    rawFile.send(null);
    return readCSV;
}
