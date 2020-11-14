const { Conjured } = require('../src/conjured')

describe('Item', function () {
  describe('Update quality', function () {
    it('should decrease one sell in and quality twice', function () {
      const item = new Conjured('Conjured Mana Cake', 1, 6)
      item.updateQuality()
      expect(item.name).toBe('Conjured Mana Cake')
      expect(item.quality).toBe(4)
      expect(item.sellIn).toBe(0)
    })

    it('should decrease quality 3 times (should be 4 but 0 is minimum) and sell in 1', function () {
      const item = new Conjured('Conjured Mana Cake', 0, 3)
      item.updateQuality()
      expect(item.name).toBe('Conjured Mana Cake')
      expect(item.quality).toBe(0)
      expect(item.sellIn).toBe(-1)
    })
  })
})
