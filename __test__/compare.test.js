const compare = require("../src/compare.js");

test("숫자 비교 테스트", () => {
  expect(compare(1, 999)).toBeTruthy();
});

test("숫자 비교 테스트", () => {
  expect(compare(999, 1)).toBeFalsy();
});

