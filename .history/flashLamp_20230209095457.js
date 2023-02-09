class Battery {
  constrcutor() {
    this.energy = 0;
  }
  setEnergy(energy) {
    this.energy = energy;
  }
  getEnergy() {
    return this.energy;
  }
  decreaseEnergy() {
    if (this.energy > 0) {
      this.energy--;
    }
  }
}

class FlashLamp {
  constructor() {
    this.status = 0;
  }
  setBattery(batery) {
    this.batery = batery;
  }
}
