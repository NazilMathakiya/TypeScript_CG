import { ProductType } from "../src/types/products";
import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getProductsFronJson():ProductType[]{
    const filePath = path.join(__dirname, "../backend/products.json");
	const products = JSON.parse(
		fs.readFileSync(filePath, "utf-8"),
	) as ProductType[];

    return products;
}

app.get("/product/:id", (req: Request, res: Response): void => {
	const products = getProductsFronJson()

	const id = Number(req.params.id);

	const product = products.find((product) => product.id === id);

	if (!product) {
		res.status(404).json({
			success: false,
			message: "Product not found",
		});
		return;
	}

	res.json({
		success: true,
		data: product,
	});
});

app.get("/products", (req: Request, res: Response): void => {
	
	const { isActive, isFeatured, category, subcategory } = req.query;

	const limit = Math.max(1, Number(req.query.limit) || 10);
	const skip = Math.max(0, Number(req.query.skip) || 0);

	let data = getProductsFronJson();

	if (isActive !== undefined) {
		data = data.filter(
			(product) => product.isActive === (isActive === "true"),
		);
	}

	if (isFeatured !== undefined) {
		data = data.filter(
			(product) => product.isFeatured === (isFeatured === "true"),
		);
	}

	if (typeof category === "string") {
		data = data.filter(
			(product) =>
				product.category.toLowerCase() === category.toLowerCase(),
		);
	}

	if (typeof subcategory === "string") {
		data = data.filter(
			(product) =>
				product.subcategory.toLowerCase() === subcategory.toLowerCase(),
		);
	}

	const total = data.length;
	const paginatedData = data.slice(skip, skip + limit);

	res.json({
		success: true,
		total,
		limit,
		skip,
		data: paginatedData,
	});
});

app.listen(3006, () => {
	console.log("Server running on http://localhost:3000");
});