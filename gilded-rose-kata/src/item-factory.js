const { Item } = require('../src/item')
const { Conjured } = require('../src/conjured')
const { Sulfuras } = require('../src/sulfuras')
const { Pass } = require('../src/pass')
const { AgedBrie } = require('../src/aged-brie')

const AGED_BRIE = 'Aged Brie'
const CONJURED = 'Conjured Mana Cake'
const SULFURAS = 'Sulfuras, Hand of Ragnaros'
const PASS = 'Backstage passes to a TAFKAL80ETC concert'

const createItem = (name, sellIn, quality) => {
  switch (name) {
    case AGED_BRIE:
      return new AgedBrie(name, sellIn, quality)
    case SULFURAS:
      return new Sulfuras(name, sellIn, quality)
    case CONJURED:
      return new Conjured(name, sellIn, quality)
    case PASS:
      return new Pass(name, sellIn, quality)
    default:
      return new Item(name, sellIn, quality)
  }
}

module.exports = { createItem }
