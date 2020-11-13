class Shop {

  PASS = 'Backstage passes to a TAFKAL80ETC concert';
  AGED_BRIE = 'Aged Brie';
  SULFURAS = 'Sulfuras, Hand of Ragnaros';

  constructor(items=[]){
    this.items = items;
  }

  decreaseQuality = (item) => {
    if (item.quality > 0) {
      item.quality--;
      if (item.sellIn < 0) {
        item.quality--;
      }
    }
  }

  increaseQuality = (item) => {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  decreaseSellIn = (item) => {
    item.SellIn--;
  }

  updatePassQuality = (item) => {
    if (item.sellIn < 0) {
      item.quality = 0;
    }
    this.increaseQuality(item);
    if (item.sellIn <= 10) {
      this.increaseQuality(item);
    }
    if (item.sellIn <= 5) {
      this.increaseQuality(item);
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case this.AGED_BRIE:
          this.decreaseSellIn(this.items[i]);
          this.increaseQuality(this.items[i]);
          break;
        case this.PASS:
          this.decreaseSellIn(this.items[i]);
          this.updatePassQuality(this.items[i]);
          break;
        case this.SULFURAS:
          break;
        default:
          this.decreaseQuality(this.items[i]);
          this.decreaseSellIn(this.items[i]);
      }
    }

    return this.items;
  }
}
  
module.exports = {
  Shop
}