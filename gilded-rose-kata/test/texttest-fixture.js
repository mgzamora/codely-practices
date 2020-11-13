
const { Shop } = require('../src/shop')
const ItemFactory = require('../src/item-factory')

const items = [
  ItemFactory.createItem('+5 Dexterity Vest', 10, 20),
  ItemFactory.createItem('Aged Brie', 10, 20),
  ItemFactory.createItem('Elixir of the Mongoose', 5, 7),
  ItemFactory.createItem('Sulfuras, Hand of Ragnaros', 0, 80),
  ItemFactory.createItem('Sulfuras, Hand of Ragnaros', -1, 80),
  ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  ItemFactory.createItem('Conjured Mana Cake', 3, 6)
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
