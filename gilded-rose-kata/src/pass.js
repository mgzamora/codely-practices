const { Item } = require('../src/item')

class Pass extends Item {
    updateQuality = () => {
        this.decreaseSellIn();
        this.updatePassQuality();
    }

    updatePassQuality = () => {
        if (this.sellIn < 0) {
            this.quality = 0;
        }else {
            this.increaseQuality();
            if (this.sellIn <= 10) {
                this.increaseQuality();
            }
            if (this.sellIn <= 5) {
                this.increaseQuality();
            }
        }
    }
}

module.exports = { Pass }
