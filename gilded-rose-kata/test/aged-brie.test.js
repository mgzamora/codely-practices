const { AgedBrie } = require('../src/aged-brie')

describe('Aged Brie', function () {
  describe('Update quality', function () {
    it('should decrease sell in and increase quality', function () {
      const item = new AgedBrie('Aged Brie', 1, 6)
      item.updateQuality()
      expect(item.name).toBe('Aged Brie')
      expect(item.quality).toBe(7)
      expect(item.sellIn).toBe(0)
    })

    it('should decrease sell in and quality will not change', function () {
      const item = new AgedBrie('Aged Brie', 0, 50)
      item.updateQuality()
      expect(item.name).toBe('Aged Brie')
      expect(item.quality).toBe(50)
      expect(item.sellIn).toBe(-1)
    })
  })
})
