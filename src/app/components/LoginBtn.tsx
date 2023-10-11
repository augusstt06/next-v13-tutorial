"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Log Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Log In
    </button>
  );
}
