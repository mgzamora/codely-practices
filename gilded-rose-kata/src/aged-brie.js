const { Item } = require('./item')

class AgedBrie extends Item {
  updateQuality () {
    this.decreaseSellIn()
    this.increaseQuality()
  }
}

module.exports = { AgedBrie }
