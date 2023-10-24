import Phaser from "phaser";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZp1txBZqFRMjzRe-RuVkyZum-Rx60_go",
  authDomain: "fir-example-2023.firebaseapp.com",
  projectId: "fir-example-2023",
  storageBucket: "fir-example-2023.appspot.com",
  messagingSenderId: "907760966393",
  appId: "1:907760966393:web:79964651ece7cbcb01a028",
};

export default class FirebasePlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);
    this.app = initializeApp(firebaseConfig);
  }
}
