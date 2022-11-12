const getUser = require("../src/getUser.js");

test("User 반환 테스트", () => {
  const target = { name: "Jinu", email: "Jinu@email.com" };
  expect(getUser("Jinu")).toEqual(target);
});


