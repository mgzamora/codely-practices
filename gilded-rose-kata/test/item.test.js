const { Item } = require('../src/item')

describe('Item', function () {
  describe('Increase quality', function () {
    it('should increase by one', function () {
      const item = new Item('regular item', 1, 6)
      item.increaseQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(7)
      expect(item.sellIn).toBe(1)
    })

    it('should not increase because already have max value', function () {
      const item = new Item('regular item', 1, 50)
      item.increaseQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(50)
      expect(item.sellIn).toBe(1)
    })
  })

  describe('Decrease sell in', function () {
    it('should decrease by one', function () {
      const item = new Item('regular item', 1, 6)
      item.decreaseSellIn()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(6)
      expect(item.sellIn).toBe(0)
    })

    it('should decrease by one', function () {
      const item = new Item('regular item', 0, 50)
      item.decreaseSellIn()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(50)
      expect(item.sellIn).toBe(-1)
    })
  })

  describe('Decrease quality', function () {
    it('should decrease by one', function () {
      const item = new Item('regular item', 1, 6)
      item.decreaseQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(5)
      expect(item.sellIn).toBe(1)
    })

    it('should decrease by two', function () {
      const item = new Item('regular item', -1, 50)
      item.decreaseQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(48)
      expect(item.sellIn).toBe(-1)
    })

    it('should not decrease to -1 because value already is minimum', function () {
      const item = new Item('regular item', -1, 1)
      item.decreaseQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(0)
      expect(item.sellIn).toBe(-1)
    })
  })

  describe('Update quality', function () {
    it('should decrease of each', function () {
      const item = new Item('regular item', 1, 6)
      item.updateQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(5)
      expect(item.sellIn).toBe(0)
    })

    it('should decrease quality 2 times ', function () {
      const item = new Item('regular item', 0, 50)
      item.updateQuality()
      expect(item.name).toBe('regular item')
      expect(item.quality).toBe(48)
      expect(item.sellIn).toBe(-1)
    })
  })
})
