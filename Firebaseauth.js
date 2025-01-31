<!DOCTYPE html>
<html>
<head>
  <title>Firebase Authentication Example</title>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
  <script>
    // Replace with your actual configuration values
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the auth service
    const auth = firebase.auth();

    // Sign in with email and password
    function signInWithEmailAndPassword() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("Signed in as:", user.email);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
        });
    }
  </script>
</head>
<body>
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <button onclick="signInWithEmailAndPassword()">Sign In</button>
</body>
</html>
