const MAX_QUALITY = 50
const MIN_QUALITY = 0
const DOUBLE_QUALITY_SELL_IN_THRESHOLD = 0

class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality () {
    this.decreaseSellIn()
    this.decreaseQuality()
  }

  decreaseQuality () {
    if (this.quality > MIN_QUALITY) {
      this.quality--
    }
    if (this.quality > MIN_QUALITY && this.sellIn < DOUBLE_QUALITY_SELL_IN_THRESHOLD) {
      this.quality--
    }
  }

  increaseQuality () {
    if (this.quality < MAX_QUALITY) {
      this.quality++
    }
  }

  decreaseSellIn () {
    this.sellIn--
  }
}

module.exports = { Item }
