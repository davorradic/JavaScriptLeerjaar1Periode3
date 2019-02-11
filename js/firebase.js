// Initialize Firebase
var config = {
  apiKey: "AIzaSyD5vwdP6XVZfkzj3RhuRuij1H-PwNsxC0E",
  authDomain: "javascriptleerjaar1periode3.firebaseapp.com",
  databaseURL: "https://javascriptleerjaar1periode3.firebaseio.com",
  projectId: "javascriptleerjaar1periode3",
  storageBucket: "",
  messagingSenderId: "650470621680"
};
firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      console.log(user.displayName);
      var displayName = user.displayName;
      console.log(displayName);
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      $("#user_name").html(displayName);
      $("#user_email").html(email);
      $("#user_id").html('id: ' + uid);
      $('#user_email_verified').html("verified: " + emailVerified);
      // ...
      $('#loginModalCenter').modal('hide');
      $('#nav_login').hide();
      $('#nav_loginout').show();
      $('#signupEmailHelp').removeClass('alert alert-danger');
      $('#signupEmailHelp').html('');
      $('#signupPasswordHelp').removeClass('alert alert-danger');
      $('#signupPasswordHelp').html('');
      $('#loginEmailHelp').removeClass('alert alert-danger');
      $('#loginEmailHelp').html('');
      $('#loginPasswordHelp').removeClass('alert alert-danger');
      $('#loginPasswordHelp').html('');

      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
      
    } else {
      // User is signed out.
      // ...
    }
  });

$(function() {
    $("#login_form").submit(function( event ) {
      event.preventDefault();
      var email     = $('#login_email').val();
      var password  = $('#login_password').val();
     /* if(email == ""){
        $('#loginEmailHelp').addClass('alert alert-danger');
        $('#loginEmailHelp').html('Your email can not be empty');
      } else {
        $('#loginEmailHelp').removeClass('alert alert-danger');
        $('#loginEmailHelp').html('');
      }
      if(password == ""){
        $('#loginPasswordHelp').addClass('alert alert-danger');
        $('#loginPasswordHelp').html('Your pasword can not be empty');
      } else {
        $('#loginPasswordHelp').removeClass('alert alert-danger');
        $('#loginPasswordHelp').html('');
      }*/

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if(errorCode !== ""){
          if(errorCode == "auth/invalid-email" || errorCode == "auth/user-not-found"){
            $('#loginEmailHelp').addClass('alert alert-danger');
            $('#loginEmailHelp').html(errorMessage);
          } else {
            $('#loginEmailHelp').removeClass('alert alert-danger');
            $('#loginEmailHelp').html('');
          }
          if(errorCode == "auth/wrong-password"){
            $('#loginPasswordHelp').addClass('alert alert-danger');
            $('#loginPasswordHelp').html(errorMessage);
          } else {
            $('#loginPasswordHelp').removeClass('alert alert-danger');
            $('#loginPasswordHelp').html('');
          }
        }
      });
    });

    $("#signup_form").submit(function( event ) {
      event.preventDefault();
      var signup_displayname  = $('#signup_displayname').val();
      var signup_email        = $('#signup_email').val();
      var signup_password     = $('#signup_password').val();

      firebase.auth().createUserWithEmailAndPassword(signup_email, signup_password)
      .then(function() {
        console.log('user added, now update display name');
        updateDisplayName(signup_displayname);
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if(errorCode !== ""){
          if(errorCode == "auth/invalid-email" || errorCode == "auth/user-not-found" || errorCode == "auth/email-already-in-use"){
            $('#signupEmailHelp').addClass('alert alert-danger');
            $('#signupEmailHelp').html(errorMessage);
          } else {
            $('#signupEmailHelp').removeClass('alert alert-danger');
            $('#signupEmailHelp').html('');
          }
          if(errorCode == "auth/wrong-password" || errorCode == "auth/weak-password"){
            $('#signupPasswordHelp').addClass('alert alert-danger');
            $('#signupPasswordHelp').html(errorMessage);
          } else {
            $('#signupPasswordHelp').removeClass('alert alert-danger');
            $('#signupPasswordHelp').html('');
          }
        }
      });
    });

    $("#logout").click(function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $('#nav_login').show();
        $('#nav_loginout').hide();
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
    });
});

function updateDisplayName(displayname){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Updates the user attribute
      user.updateProfile({
        displayName: displayname,
      });
    } else {
      
    }
  });
}