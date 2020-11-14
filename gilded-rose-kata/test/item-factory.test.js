const ItemFactory = require('../src/item-factory')
const { Item } = require('../src/item')
const { Conjured } = require('../src/conjured')
const { Sulfuras } = require('../src/sulfuras')
const { AgedBrie } = require('../src/aged-brie')
const { Pass } = require('../src/pass')

describe('Item factory', function () {
  describe('Create item', function () {
    it('should be a regular item', function () {
      const item = ItemFactory.createItem('regular item', 1, 6)
      expect(item instanceof Item).toBe(true)
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(6)
      expect(item.sellIn).toBe(1)
    })

    it('should be a pass item', function () {
      const item = ItemFactory.createItem('Backstage passes to a TAFKAL80ETC concert', 1, 6)
      expect(item instanceof Pass).toBe(true)
      expect(item instanceof Item).toBe(true)
      expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert')
      expect(item.quality).toBe(6)
      expect(item.sellIn).toBe(1)
    })

    it('should be a aged brie item', function () {
      const item = ItemFactory.createItem('Aged Brie', 1, 6)
      expect(item instanceof AgedBrie).toBe(true)
      expect(item instanceof Item).toBe(true)
      expect(item.name).toBe('Aged Brie')
      expect(item.quality).toBe(6)
      expect(item.sellIn).toBe(1)
    })

    it('should be a sulfuras item', function () {
      const item = ItemFactory.createItem('Sulfuras, Hand of Ragnaros', 1, 6)
      expect(item instanceof Sulfuras).toBe(true)
      expect(item instanceof Item).toBe(true)
      expect(item.name).toBe('Sulfuras, Hand of Ragnaros')
      expect(item.quality).toBe(6)
      expect(item.sellIn).toBe(1)
    })

    it('should be a conjured item', function () {
      const item = ItemFactory.createItem('Conjured Mana Cake', 1, 6)
      expect(item instanceof Conjured).toBe(true)
      expect(item instanceof Item).toBe(true)
      expect(item.name).toBe('Conjured Mana Cake')
      expect(item.quality).toBe(6)
      expect(item.sellIn).toBe(1)
    })
  })
})
