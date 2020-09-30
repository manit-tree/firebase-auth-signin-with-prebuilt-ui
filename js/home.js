function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
  
        document.getElementById("email").innerText = email;
  
        console.log({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified,
          photoURL: photoURL,
          isAnonymous: isAnonymous,
          uid: uid,
          providerData: providerData,
        });
      } else {
      }
    });
}

window.onload = function () {
    initApp();
};