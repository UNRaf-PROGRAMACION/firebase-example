import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.atlas(
      "match3",
      "assets/atlas/match3.png",
      "assets/atlas/match3.json"
    );
  }

  create() {
    this.scene.start("login");
  }
}
