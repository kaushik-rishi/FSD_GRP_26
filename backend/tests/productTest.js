import request from "supertest";
import app from "../server.js";

describe("Product tests", function () {
	it("Should fetch products's desccription based on id", function (done) {
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
					.get("/api/products/61daf2d447c2df5bd6df986b")
					.set("Authorization", "Bearer " + token)
					.expect("content-type", /json/)
					.expect(200, done);
			})
			.catch(function (err) {
				done(err);
			});
	});
});
