import Link from "next/link";
import { z } from "zod";

const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(0),
});

function createUser(data:FormData){
  const result =signupSchema
}

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        My First Next.js Website
      </h1>
      <p
        style={{
          textAlign: "center",
        }}
      >
        I am learning Next.js from scratch.
      </p>
      <Link
        href="/about"
        style={{
          backgroundColor: "green",
          color: "black",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Go To About Page
      </Link>
    </main>
  );
}
