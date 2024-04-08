import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

describe('Test Case Suite1', function () {
	it('Test Case1', function () {
		setTimeout(function () {
			assert(true, 'test case1 failed!!!');
		}, 500);
	}).timeout(1000);

	it('Test Case2', async function () {
		this.timeout(1000);

		const ret = await new Promise(function (resolve, _reject) {
			setTimeout(function () {
				// expect(true).to.equal(false);
				expect(true).to.eql(false, 'test case2 failed!!!');
				resolve(void 0);
			}, 500);
		});

		return ret;
	});
});
