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
  getBatteyInfo() {
    return this.batery.getEnergy();
  }
  light() {
    if (this.status) {
      alert("Lighting");
    } else {
      alert("not lighting");
    }
  }
  turnOn() {
    this.status = true;
  }
  turnOff() {
    this.status = false;
  }
}

let batery = new Battery(200);

let flashLamp = new FlashLamp();
