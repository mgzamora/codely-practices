class Shop {
  constructor (items = []) {
    this.items = items
  }

  refreshInventory () {
    return this.items.forEach(i => i.updateQuality())
  }
}

module.exports = {
  Shop
}
