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
    if (this.quality > 0) {
      this.quality--
    }
    if (this.quality > 0 && this.sellIn < 0) {
      this.quality--
    }
  }

  increaseQuality () {
    if (this.quality < 50) {
      this.quality++
    }
  }

  decreaseSellIn () {
    this.sellIn--
  }
}

module.exports = { Item }
