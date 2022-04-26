import request from "supertest";
import app from "../server.js";

describe("User tests", function () {
    it("Should fetch user's profile", function (done) {
			request(app)
				.post("/api/users/login")
				.send({
					email: "abc@gmail.com",
					password: "abc@gmail.com",
				})
				.expect("content-type", /json/)
				.expect(200)
				.then(function (res) {
					const token = res.body.token;
					request(app)
						.get("/api/users/profile/")
						.set("Authorization", "Bearer " + token)
						.expect("content-type", /json/)
						.expect(200, done);
				})
				.catch(function (err) {
					done(err);
	});
    });
    it("Should fetch user's profile based on id", function (done) {
			request(app)
				.post("/api/users/login")
				.send({
					email: "abc@gmail.com",
					password: "abc@gmail.com",
				})
				.expect("content-type", /json/)
				.expect(200)
				.then(function (res) {
                    const token = res.body.token;
					request(app)
						.get("/api/users/61db26c6467edf9eb4bb73b8")
						.set("Authorization", "Bearer " + token)
						.expect("content-type", /json/)
						.expect(200, done);
				})
				.catch(function (err) {
					done(err);
				});
		});
})