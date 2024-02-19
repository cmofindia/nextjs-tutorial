import mongoose from "mongoose";

export const DBConnect = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/product");
		console.log("DB Connected Successfully!");
	} catch (error) {
		console.log(error);
	}
};
