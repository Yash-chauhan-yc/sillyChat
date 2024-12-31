import { Metadata } from "next";

import signInImage from "../../../assets/login-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./SignInForm";

export const metaData: Metadata = {
  title: "Sign Up",
};

export default function page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to bugbook</h1>
            <p className="text-muted-foreground">
              A place where you <span className="italic">can</span> find a
              friend
            </p>
          </div>
          <div className="space-y-5">
            <SignInForm />
            <Link
              href={"/signup"}
              className="block text-center hover:underline"
            >
              Don&apos;t have an account? Sign In
            </Link>
          </div>
        </div>
        <Image
          src={signInImage}
          alt=""
          className="w-1/2 hidden md:block object-cover"
        />
      </div>
    </main>
  );
}
