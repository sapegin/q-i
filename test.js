'use strict';
/* eslint-disable id-blacklist, no-console */

const qi = require('./index');

describe('stringify()', () => {
	it('should color highlight basic types', () => {
		const result = qi.stringify({
			a: undefined,
			b: null,
			c: 0,
			d: 42,
			e: '42',
			f: false,
			g: true,
			h: /pizza/,
			i: [1, 2],
			j: { x: 1, y: 2 },
		});
		expect(result).toMatchSnapshot();
	});

	it('should print contructor names for classes', () => {
		class Pizza {
			constructor({ name }) {
				this.name = name;
			}
		}
		const result = qi.stringify({
			x: new Pizza({ name: 'Quattro Formaggi' }),
		});
		expect(result).toMatchSnapshot();
	});

	it('should collapse functions longer than one line', () => {
		function fn(x) {
			return x * 2;
		}
		const result = qi.stringify({
			a: fn,
			b: x => {
				return x * 2;
			},
			c: x => x * 2,
		});
		expect(result).toMatchSnapshot();
	});

	it('should collapse arrays with more than 30 items', () => {
		const result = qi.stringify({
			a: [1, 2],
			b: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19,
				20,
				21,
				22,
				23,
				24,
				25,
				26,
				27,
				28,
				29,
				30,
				31,
			],
		});
		expect(result).toMatchSnapshot();
	});

	it('should collapse objects with more than 30 keys', () => {
		const result = qi.stringify({
			a: { k1: 0, k2: 0 },
			b: {
				k1: 0,
				k2: 0,
				k3: 0,
				k4: 0,
				k5: 0,
				k6: 0,
				k7: 0,
				k8: 0,
				k9: 0,
				k10: 0,
				k11: 0,
				k12: 0,
				k13: 0,
				k14: 0,
				k15: 0,
				k16: 0,
				k17: 0,
				k18: 0,
				k19: 0,
				k20: 0,
				k21: 0,
				k22: 0,
				k23: 0,
				k24: 0,
				k25: 0,
				k26: 0,
				k27: 0,
				k28: 0,
				k29: 0,
				k30: 0,
				k31: 0,
			},
		});
		expect(result).toMatchSnapshot();
	});

	it('should stringify part of the object if an address is specified', () => {
		const result = qi.stringify(
			{
				a: { x: 1, y: { z: 2 } },
			},
			'a.y'
		);
		expect(result).toMatchSnapshot();
	});

	it('should accept custom max items', () => {
		const result = qi.stringify(
			{
				a: { k1: 0, k2: 0 },
				b: {
					k1: 0,
					k2: 0,
					k3: 0,
					k4: 0,
				},
			},
			{ maxItems: 3 }
		);
		expect(result).toMatchSnapshot();
	});

	it('should accept address and custom max items', () => {
		const result = qi.stringify(
			{
				a: { k1: 0, k2: 0 },
				b: {
					c: {
						k1: 0,
						k2: 0,
						k3: 0,
						k4: 0,
					},
				},
			},
			'b',
			{ maxItems: 3 }
		);
		expect(result).toMatchSnapshot();
	});
});

describe('print()', () => {
	const console$log = console.log;
	beforeEach(() => {
		console.log = jest.fn();
	});
	afterEach(() => {
		console.log = console$log;
	});

	it('should print an object', () => {
		qi.print({
			a: 42,
		});
		expect(console.log).toBeCalledWith(expect.stringMatching('42'));
	});

	it('should print part of the object if an address is specified', () => {
		qi.print(
			{
				a: { x: 41, y: { z: 42 } },
			},
			'a.y'
		);
		expect(console.log).toBeCalledWith(expect.stringMatching('42'));
	});

	it('should accept custom max items', () => {
		qi.print(
			{
				a: { k1: 0, k2: 0 },
				b: {
					k1: 0,
					k2: 0,
					k3: 0,
					k4: 0,
				},
			},
			{ maxItems: 3 }
		);
		expect(console.log).toBeCalledWith(expect.stringMatching('Object \\{4\\}'));
	});

	it('should accept address and custom max items', () => {
		qi.print(
			{
				a: { k1: 0, k2: 0 },
				b: {
					c: {
						k1: 0,
						k2: 0,
						k3: 0,
						k4: 0,
					},
				},
			},
			'b',
			{ maxItems: 3 }
		);
		expect(console.log).toBeCalledWith(expect.stringMatching('Object \\{4\\}'));
	});
});
