const { Item } = require('../src/item')

const DOUBLE_QUALITY_SELL_IN_THRESHOLD = 10
const TRIPLE_QUALITY_SELL_IN_THRESHOLD = 5
const NO_QUALITY_THRESHOLD = 0
const MIN_QUALITY = 0

class Pass extends Item {
  updateQuality () {
    this.decreaseSellIn()
    this.updatePassQuality()
  }

  updatePassQuality () {
    if (this.sellIn < NO_QUALITY_THRESHOLD) {
      this.quality = MIN_QUALITY
    } else {
      this.increaseQuality()
      if (this.sellIn <= DOUBLE_QUALITY_SELL_IN_THRESHOLD) {
        this.increaseQuality()
      }
      if (this.sellIn <= TRIPLE_QUALITY_SELL_IN_THRESHOLD) {
        this.increaseQuality()
      }
    }
  }
}

module.exports = { Pass }
