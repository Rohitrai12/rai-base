import { RegisterForm } from "@/features/auth/components/resigter-form";
import { requireNoAuth } from "@/lib/auth-utils";
import React from "react";

const SignUpPage = async () => {
  await requireNoAuth();

  return <RegisterForm />;
};

export default SignUpPage;
