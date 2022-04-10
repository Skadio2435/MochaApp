import { expect } from 'chai';
import App from '../../core/app';
import db from '../../core/database';

describe('Test BDD', () => {
    // before(async () => {
    //     // await App
    //     // await db.setup();
    // });
    it('SHould do ', () => {
        expect(1).equal(1);
    });

    it('second', () => {
        expect(1).equal(1);
    });
});

// describe('testSuite', () => {
//     it('first test', () => {
//         expect(2).to.be.equal(2);
//     });

//     it('second test', () => {
//         // todo disable ts for optimization
//         expect(2).to.be.equal(2);
//     });
// });
