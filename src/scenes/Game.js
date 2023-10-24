import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    this.add.image(400, 300, "sky");

    const emitter = this.add.particles(0, 0, "match3", {
      frame: ["Match3_Icon_30", "Match3_Icon_29"],
      lifespan: 4000,
      speed: { min: 200, max: 350 },
      scale: { start: 0.4, end: 0 },
      rotate: { start: 0, end: 360 },
      gravityY: 200,
      emitting: false,
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.emitParticleAt(logo.x, logo.y, 4);

    // add green rectangle for collider and asign physics
    const floor = this.add.rectangle(400, 600, 800, 20, 0x00ff00);
    this.physics.add.existing(floor, true);
    console.log(
      "🚀 ~ file: Game.js:32 ~ Game ~ create ~ this.firebase:",
      this.firebase
    );
  }
}
