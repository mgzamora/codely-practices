
const { Shop } = require('../src/shop')
const { Item } = require('../src/item')
const { Conjured } = require('../src/conjured')
const { Sulfuras } = require('../src/sulfuras')
const { Pass } = require('../src/pass')
const { AgedBrie } = require('../src/aged-brie')

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new AgedBrie('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80),
  new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80),
  new Pass('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Pass('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new Pass('Backstage passes to a TAFKAL80ETC concert', 5, 49),

  // This Conjured item does not work properly yet
  new Conjured('Conjured Mana Cake', 3, 6)
]

const days = Number(process.argv[2]) || 2
const gildedRose = new Shop(items)

console.log('OMGHAI!')
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`)
  console.log('name, sellIn, quality')
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`))
  gildedRose.refreshInventory()
}
