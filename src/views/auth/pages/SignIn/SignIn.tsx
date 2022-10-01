/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "views/auth/components/AuthLayout";
import SignInForm from "views/auth/components/SignInForm/SignInForm";
import { LoginFieldTypes } from "views/auth/interface/authInterface";
import { loginResolver } from "views/auth/validators";

const SignIn = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { register, handleSubmit } = useForm<LoginFieldTypes>({ resolver: loginResolver });
  const onSubmit = (data: any) => {
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log({ data });
  };
  return (
    <AuthLayout
      title=" General Page"
      subtile="This is dummy text that will be replaced later by proper content. The replacement text
    shouldn’t be more than three lines"
      mainTitle=" Set your password to complete your account creation"
      btnText={loading ? "Signing...." : "Signin"}
      onAction={handleSubmit(onSubmit)}
      loading={loading}
    >
      <SignInForm register={register} />
    </AuthLayout>
  );
};

export default SignIn;
