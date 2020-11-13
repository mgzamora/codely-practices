const { Shop } = require('../src/shop')
const ItemFactory = require('../src/item-factory')

describe('Gilded Rose', function () {
  it('should decrease the regular item', function () {
    let items = [ItemFactory.createItem('regular item', 1, 6)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('regular item')
    expect(itemUpdated.quality).toBe(5)
    expect(itemUpdated.sellIn).toBe(0)
  })

  it('should decrease the regular item two times because sell in date is passed', function () {
    let items = [ItemFactory.createItem('regular item', 0, 6)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('regular item')
    expect(itemUpdated.quality).toBe(4)
    expect(itemUpdated.sellIn).toBe(-1)
  })

  it('should remains quality as Zero', function () {
    let items = [ItemFactory.createItem('regular item', 0, 1)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('regular item')
    expect(itemUpdated.quality).toBe(0)
    expect(itemUpdated.sellIn).toBe(-1)
  })

  it('should increase its quality', function () {
    let items = [ItemFactory.createItem('Aged Brie', 5, 4)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Aged Brie')
    expect(itemUpdated.quality).toBe(5)
    expect(itemUpdated.sellIn).toBe(4)
  })

  it('should increase not increase the quality over 50', function () {
    let items = [ItemFactory.createItem('Aged Brie', 5, 50)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Aged Brie')
    expect(itemUpdated.quality).toBe(50)
    expect(itemUpdated.sellIn).toBe(4)
  })

  it('should has sell in as undefined and quality never decrease', function () {
    let items = [ItemFactory.createItem('Sulfuras, Hand of Ragnaros', undefined, 80)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Sulfuras, Hand of Ragnaros')
    expect(itemUpdated.quality).toBe(80)
    expect(itemUpdated.sellIn).toBe(undefined)
  })

  it('should increase its quality', function () {
    let items = [ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 12, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(11)
    expect(itemUpdated.sellIn).toBe(11)
  })

  it('should increase its quality twice', function () {
    let items = [ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 11, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(12)
    expect(itemUpdated.sellIn).toBe(10)
  })

  it('should increase its quality three times', function () {
    let items = [ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 5, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(13)
    expect(itemUpdated.sellIn).toBe(4)
  })

  it('should decrease its quality to zero', function () {
    let items = [ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 0, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(0)
    expect(itemUpdated.sellIn).toBe(-1)
  })

  it('should decrease its quality twice', function () {
    let items = [ItemFactory.createItem('Conjured Mana Cake', 1, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Conjured Mana Cake')
    expect(itemUpdated.quality).toBe(8)
    expect(itemUpdated.sellIn).toBe(0)
  })

  it('should decrease its quality four times', function () {
    let items = [ItemFactory.createItem('Conjured Mana Cake', 0, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.refreshInventory()
    const itemUpdated = items[0]
    expect(itemUpdated.name).toBe('Conjured Mana Cake')
    expect(itemUpdated.quality).toBe(6)
    expect(itemUpdated.sellIn).toBe(-1)
  })
})
