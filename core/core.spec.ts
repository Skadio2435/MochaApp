import { expect } from 'chai';
import Customers from '../modules/customers/customers.model';

describe('Core test', () => {
    it('and first', async () => {
        // await db.setup()
        const customers = await Customers.find({});
        console.log('A test');

        expect(1).to.be.equal(1);
    });
});
