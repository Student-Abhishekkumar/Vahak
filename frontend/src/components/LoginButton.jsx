import React from "react";
import { useClerk, useUser } from "@clerk/clerk-react"; // Import Clerk hooks
import ServicesButton from "./ServicesButton"; // Import the ServicesButton
import MeetVahakButton from "./MeetVahakButton"; // Import the MeetVahakButton

const LoginButton = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="flex gap-3 items-center">
      {/* Meet Vahak visible always */}
      <MeetVahakButton />

      {/* Services button visible after login */}
      {user && <ServicesButton />}

      {/* Clerk profile visible after login */}
      {user ? (
        <div className="scale-110">
          <userButton afterSignOutUrl="/" />
        </div>
      ) : (
        <button
          onClick={openSignIn}
          className="px-5 py-2 bg-primary hover:bg-primary_dull transition rounded-full font-medium text-white"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
