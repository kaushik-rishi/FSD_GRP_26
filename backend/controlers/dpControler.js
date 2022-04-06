import asyncHandler from "express-async-handler";
import Donation from "../models/donationModel.js";

const addDProduct = asyncHandler(async (req, res) => {
	// const { name, email, password } = req.body;
    let name = req.body.name;
	let email = req.body.email;
	let cat = req.body.dcat;
	let title = req.body.dtitle;
	let desc = req.body.ddesc;

	const donateProd = await Donation.create({
		name,
		email,
		cat,
        title,
        desc
	});

    if (!name) {
		response.status(400)
        throw new Error("Empty name request");
		// stop further execution in this callback
		return;
	}
	if (!email) {
		response.status(400)
        throw new Error("Undefined email request");
		// stop further execution in this callback
		return;
	}
	if (!cat) {
		response.status(400)
        throw new Error("No category found");
		// stop further execution in this callback
		return;
	}
	if (!title) {
		response.status(400)
        throw new Error("Donation title missing");
		// stop further execution in this callback
		return;
	}
	if (!desc) {
		response.status(400)
        throw new Error("Description not found");
		// stop further execution in this callback
		return;
	}

	if (donateProd) {
		res.status(200).json({
			key: donateProd.key,
            date: donateProd.date,
			name: donateProd.name,
			email: donateProd.email,
			category: donateProd.cat,
			title: donateProd.title,
			desc: donateProd.desc,
			// token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

const getDProducts = asyncHandler(async (req, res) => {
	const donations = await Donation.find({});
    // console.log(donations)
	res.status(200).json(donations);
});

export {
    addDProduct,
    getDProducts
}