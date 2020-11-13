class Shop {
  constructor (items = []) {
    this.items = items
  }

  refreshInventory () {
    this.items.forEach(i => i.updateQuality())
    return this.items
  }
}

module.exports = {
  Shop
}
