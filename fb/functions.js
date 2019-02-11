//Opdracht 0 en 1
firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();

        // Disable deprecated features
        db.settings({
            timestampsInSnapshots: true
        });

        var unique = 0;
        var data = db.collection("opdracht0");
        data.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if(user.email == doc.data().email){
                    unique = 1;
                }
            });
        });
        setTimeout(function(){
            console.log(unique);
            if(unique == 0){
                data.add({
                    username: user.displayName,
                    email: user.email,
                    userid: user.uid,
                    timestamp:  Date.now()
                });
            }
        }, 2000);
        
        
    }
});

//Opdracht 2

firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
  
        // Disable deprecated features
        db.settings({
            timestampsInSnapshots: true
        });
  
        var unique = 0;
        var data = db.collection("opdracht2");
        data.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if(user.email == doc.data().email){
                    unique = 1;
                }
            });
        });
        setTimeout(function(){
            console.log(unique);
            if(unique == 0){
              if(hoeveelverdienik == '3.9' || hoeveelverdienik == '3.90'){
                data.add({
                    username: user.displayName,
                    email: user.email,
                    userid: user.uid,
                    timestamp:  Date.now(),
                    hoeveelverdienik: hoeveelverdienik
                });
              }
            }
        }, 2000);
        
        
    }
  });