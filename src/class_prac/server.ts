"use server";

import { z } from "zod";

const schema = z.object({
	email: z.email("Enter a valid email"),
	password: z.string().min(8, "Minimum 8 characters"),
});
const productData=[]
export async function createUser(
	_prevState: {
		success: boolean;
		message: string;
		errors: Record<string, string[] | undefined>;
	},
	formData: FormData,
) {
	const result = schema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!result.success) {
		return {
			success: false,
			message: "Validation failed",
			errors: result.error.flatten().fieldErrors,
		};
	}

	return {
		success: true,
		message: "Account created successfully",
		errors: {},
	};
}