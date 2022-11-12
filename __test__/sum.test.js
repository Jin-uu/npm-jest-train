const sum = require('../sum');

test('1 더하기 2는 3을 반환해야 한다.', () => {
    expect(sum(1, 2)).toBe(3);
})

