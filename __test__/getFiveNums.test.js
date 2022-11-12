const getFiveNums = require("../src/getFiveNums.js");

test("숫자 반환 개수 테스트", () => {
  expect(getFiveNums()).toHaveLength(5);
});

test("숫자 3 포함 여부 테스트", () => {
  expect(getFiveNums()).toContain(3);
});

