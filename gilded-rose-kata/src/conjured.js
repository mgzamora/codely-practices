const { Item } = require('./item')

class Conjured extends Item {
  updateQuality () {
    this.decreaseSellIn()
    this.decreaseQuality()
    this.decreaseQuality()
  }
}

module.exports = { Conjured }
