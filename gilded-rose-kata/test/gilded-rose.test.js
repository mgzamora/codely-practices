const { Shop } = require('../src/shop')
const { Item } = require('../src/item')

describe('Gilded Rose', function () {
  it('should decrease the regular item', function () {
    let items = [new Item('regular item', 1, 6)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('regular item', 0, 5)
    expect(itemUpdated.name).toBe('regular item')
    expect(itemUpdated.quality).toBe(5)
    expect(itemUpdated.sellIn).toBe(0)
  })

  it('should decrease the regular item two times because sell in date is passed', function () {
    let items = [new Item('regular item', 0, 6)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('regular item', -1, 4)
    expect(itemUpdated.name).toBe('regular item')
    expect(itemUpdated.quality).toBe(4)
    expect(itemUpdated.sellIn).toBe(-1)
  })

  it('should remains quality as Zero', function () {
    let items = [new Item('regular item', 0, 1)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('regular item', -1, 0)
    expect(itemUpdated.name).toBe('regular item')
    expect(itemUpdated.quality).toBe(0)
    expect(itemUpdated.sellIn).toBe(-1)
  })

  it('should increase its quality', function () {
    let items = [new Item('Aged Brie', 5, 4)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Aged Brie', 4, 5)
    expect(itemUpdated.name).toBe('Aged Brie')
    expect(itemUpdated.quality).toBe(5)
    expect(itemUpdated.sellIn).toBe(4)
  })

  it('should increase not increase the quality over 50', function () {
    let items = [new Item('Aged Brie', 5, 50)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Aged Brie', 4, 50)
    expect(itemUpdated.name).toBe('Aged Brie')
    expect(itemUpdated.quality).toBe(50)
    expect(itemUpdated.sellIn).toBe(4)
  })

  it('should has sellin as undefined and quality never decrease', function () {
    let items = [new Item('Sulfuras, Hand of Ragnaros', undefined, 80)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Sulfuras, Hand of Ragnaros', undefined, 80)
    expect(itemUpdated.name).toBe('Sulfuras, Hand of Ragnaros')
    expect(itemUpdated.quality).toBe(80)
    expect(itemUpdated.sellIn).toBe(undefined)
  })

  it('should increase its quality', function () {
    let items = [new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 11)
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(11)
    expect(itemUpdated.sellIn).toBe(10)
  })

  it('should increase its quality twice', function () {
    let items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 12)
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(12)
    expect(itemUpdated.sellIn).toBe(9)
  })

  it('should increase its quality three times', function () {
    let items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 13)
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(13)
    expect(itemUpdated.sellIn).toBe(4)
  })

  it('should decrease its quality to zero', function () {
    let items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]
    const gildedRose = new Shop(items)
    items = gildedRose.updateQuality()
    const itemUpdated = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
    expect(itemUpdated.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(itemUpdated.quality).toBe(0)
    expect(itemUpdated.sellIn).toBe(-1)
  })
})
