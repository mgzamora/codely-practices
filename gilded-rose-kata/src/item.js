class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality = () => {
    switch (this.name) {
        case this.AGED_BRIE:
          this.decreaseSellIn();
          this.increaseQuality();
          break;
        case this.PASS:
          this.decreaseSellIn();
          this.updatePassQuality();
          break;
        case this.SULFURAS:
          break;
        default:
          this.decreaseQuality();
          this.decreaseSellIn();
      }
  }

  decreaseQuality = () => {
    if (this.quality > 0) {
        this.quality--;
      if (this.sellIn < 0) {
        this.quality--;
      }
    }
  }

  increaseQuality = () => {
    if (this.quality < 50) {
      this.quality++;
    }
  }

  decreaseSellIn = () => {
    this.sellIn--;
  }

  updatePassQuality = () => {
    if (this.sellIn < 0) {
        this.quality = 0;
    }
    this.increaseQuality();
    if (this.sellIn <= 10) {
        this.increaseQuality();
    }
    if (this.sellIn <= 5) {
        this.increaseQuality();
    }
  }
}

module.exports = { Item }
