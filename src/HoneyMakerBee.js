import Bee from './Bee'

class HoneyMakerBee extends Bee {
  // TODO..
  constructor (job, color, food, eat) {
    super(job, color, food, eat)
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
  }

  makeHoney () {
    this.honeyPot++
  }

  giveHoney () {
    this.honeyPot--
  }
};

export default HoneyMakerBee;