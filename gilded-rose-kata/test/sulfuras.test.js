const { Sulfuras } = require('../src/sulfuras')

describe('Sulfuras', function () {
  describe('Update quality', function () {
    it('should not change', function () {
      const item = new Sulfuras('Sulfuras, Hand of Ragnaros', 1, 80)
      item.updateQuality()
      expect(item.name).toBe('Sulfuras, Hand of Ragnaros')
      expect(item.quality).toBe(80)
      expect(item.sellIn).toBe(1)
    })
  })
})
