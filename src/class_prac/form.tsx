"use client"

import { createUser } from "@/utils/user";
import { useActionState } from "react";

const initialState = {
	success: false,
	message: "",
	errors: {} as Record<string, string[] | undefined>,
};

const StoreUserPage = () => {

  const [state, formAction, isPending] = useActionState(
		createUser,
		initialState,
  );

  return (
		<section>
			<form action={formAction}>
				<input type='email' name='email' placeholder='Email' required />

				{state.errors.email?.map((error) => (
					<p key={error}>{error}</p>
				))}

				<input
					type='password'
					name='password'
					placeholder='Password'
					required
				/>

				{state.errors.password?.map((error) => (
					<p key={error}>{error}</p>
				))}

				<button type='submit' disabled={isPending} className="border px-3 bg-cyan-600">
					{isPending ? "Creating..." : "Create Account"}
				</button>

				<p>{state.message}</p>
			</form>
		</section>
  );
}

export default StoreUserPage