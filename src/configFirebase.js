
var admin = require("firebase-admin");

var serviceAccount = require("./pizzarela-florencia-firebase-adminsdk-y3d39-eca66970df.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial-d689b.firebaseio.com"
});


module.exports= admin;

