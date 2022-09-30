import TextField from "@mui/material/TextField";
import React from "react";
import AuthLayout from "views/auth/components/AuthLayout";

const SignIn = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const onSubmit = () => {
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log("fgdhd");
  };
  return (
    <AuthLayout
      title=" General Page"
      subtile="This is dummy text that will be replaced later by proper content. The replacement text
    shouldn’t be more than three lines"
      mainTitle=" Set your password to complete your account creation"
      btnText={loading ? "Signing...." : "Signin"}
      onAction={onSubmit}
      loading={loading}
    >
      <div>
        <TextField label="username" />
      </div>
    </AuthLayout>
  );
};

export default SignIn;
