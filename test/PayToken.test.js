const { assert } = require("chai");

const PayToken = artifacts.require('PayToken');

contract('PayToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.pay = await PayToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.pay.mint(alice, 1000, { from: minter });
        assert.equal((await this.pay.balanceOf(alice)).toString(), '1000');
    })
});
