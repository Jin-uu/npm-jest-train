const sum = require('../src/sum');

test('1 더하기 2는 3을 반환해야 한다.', () => {
  expect(sum(1, 2)).toBe(3);
})

test('1 더하기 2는 3을 반환해야 한다.', () => {
    expect(1 + 2).toBe(3);
})

test('testing... string을 반환한다', () => {
    expect("testing...").toBe("testing...");
})
