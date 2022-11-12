const User = require("../src/User.js");

test("User 생성 테스트", () => {
  expect(() => new User("Sun", 19)).toThrow("[ERROR]");
});

describe("test Group 1", () => {
	test("test 1-1", () => {
		// ... 
	})

	test("test 1-2", () => {
		// ... 
	})
})

describe("test Group 2", () => {
	test("test 2-1", () => {
		// ... 
	})

	test("test 2-2", () => {
		// ... 
	})
})
