const { Pass } = require('../src/pass')

describe('Pass', function () {
  describe('Update quality', function () {
    it('should decrease sell in and increase quality by 3', function () {
      const item = new Pass('Backstage passes to a TAFKAL80ETC concert', 1, 6)
      item.updateQuality()
      expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert')
      expect(item.quality).toBe(9)
      expect(item.sellIn).toBe(0)
    })

    it('should decrease sell in and increase quality 2 times ', function () {
      const item = new Pass('Backstage passes to a TAFKAL80ETC concert', 7, 20)
      item.updateQuality()
      expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert')
      expect(item.quality).toBe(22)
      expect(item.sellIn).toBe(6)
    })

    it('should decrease sell in and increase quality', function () {
      const item = new Pass('Backstage passes to a TAFKAL80ETC concert', 13, 22)
      item.updateQuality()
      expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert')
      expect(item.quality).toBe(23)
      expect(item.sellIn).toBe(12)
    })

    it('should decrease sell in and set quality to zero', function () {
      const item = new Pass('Backstage passes to a TAFKAL80ETC concert', 0, 50)
      item.updateQuality()
      expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert')
      expect(item.quality).toBe(0)
      expect(item.sellIn).toBe(-1)
    })
  })
})
