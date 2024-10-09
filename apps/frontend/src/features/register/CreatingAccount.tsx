import React from "react";
import { RegisterHeader } from "./RegisterHeader";

const CreatingAccount: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <RegisterHeader
        title="Setting up your account..."
        subtitle="Share and connect effortlessly"
        description="We've securely encrypted your info. With a simple tap, you can share your details and make connections instantly—without compromising your privacy. You’re always in control and can update or remove your info whenever you like."
      />
      <div className="animate-spin rounded-full size-10 border-t-2 border-primary mt-10"></div>
    </div>
  );
};

export default CreatingAccount;