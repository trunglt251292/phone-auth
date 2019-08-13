import admin from "firebase-admin/lib/index";
import Config from '../config';

let serviceAccount = require("../api/kicy-vietnam.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: Config.databaseUrl
});

export async function verifyPhone(idToken) {
  try {
    return await admin.auth().verifyIdToken(idToken);
  }catch (err){
    console.log('error verifyPhone : ', err);
    return false;
  }
}
