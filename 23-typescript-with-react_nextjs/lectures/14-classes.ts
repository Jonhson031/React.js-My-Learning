// * Clasess in TS
class Hero {
  // We need to define the properties of the class, and their types
  name: string;
  health: number;
  #coins: number; // * Private property, can only be accessed within the class

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.#coins = 0;
  }

  // We can also define methods for the class
  attack(damage: number): void {
    console.log(`${this.name} attacks with ${damage} damage!`);
  }

  getHealth() {
    return this.health;
  }
}

// Create an instance of the Hero class
const geralt = new Hero("Geralt", 100);
geralt.attack(20);
// Geralt attacks with 20 damage!
console.log(geralt.getHealth());
