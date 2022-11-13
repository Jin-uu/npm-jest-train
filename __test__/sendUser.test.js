const sendUser = require("../src/sendUser.js");

test("User sending test.", (done) => {
	sendUser("Jinu", (User) => {
		expect(User).toEqual(
			{ name: "Jinu", email: "Jinu@email.com" }
		);
		done();
	});
});

