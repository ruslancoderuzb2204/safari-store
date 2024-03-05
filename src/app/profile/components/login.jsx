import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for form validation
const schema = z.object({
  email: z.string().email("Invalid email format").min(1),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  createEmail: z.string().email("Invalid email format").min(1),
  createPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .refine((val, ctx) => {
      if (val !== ctx?.formState.values.createPassword) {
        return "Passwords do not match";
      }
      return true;
    }),
});

const Login = ({ formType }) => {
  const {
    register,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
    reset: resetSignIn,
  } = useForm({ resolver: zodResolver(schema) });

  const {
    handleSubmit: handleSubmitCreateAccount,
    formState: { errors: errorsCreateAccount },
    reset: resetCreateAccount,
  } = useForm({ resolver: zodResolver(schema) });

  const [loadingSignIn, setLoadingSignIn] = React.useState(false);
  const [loadingCreateAccount, setLoadingCreateAccount] = React.useState(false);

  const submitFormSignIn = (data) => {
    setLoadingSignIn(true);
    // Simulating async request
    setTimeout(() => {
      console.log("Sign In data:", data);
      resetSignIn();
      setLoadingSignIn(false);
    }, 1000);
  };

  const submitFormCreateAccount = (data) => {
    setLoadingCreateAccount(true);
    // Simulating async request
    setTimeout(() => {
      console.log("Create Account data:", data);
      resetCreateAccount();
      setLoadingCreateAccount(false);
    }, 1000);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
              {formType === "signin" ? "Sign In" : "Create Account"}
            </Typography>
            <form
              onSubmit={
                formType === "signin"
                  ? handleSubmitSignIn(submitFormSignIn)
                  : handleSubmitCreateAccount(submitFormCreateAccount)
              }
            >
              {formType === "signin" ? (
                <>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("email")}
                    error={Boolean(errorsSignIn.email)}
                    helperText={errorsSignIn.email?.message}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("password")}
                    error={Boolean(errorsSignIn.password)}
                    helperText={errorsSignIn.password?.message}
                  />
                </>
              ) : (
                <>
                  <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("firstName")}
                    error={Boolean(errorsCreateAccount.firstName)}
                    helperText={errorsCreateAccount.firstName?.message}
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("lastName")}
                    error={Boolean(errorsCreateAccount.lastName)}
                    helperText={errorsCreateAccount.lastName?.message}
                  />
                  <TextField
                    id="createEmail"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("createEmail")}
                    error={Boolean(errorsCreateAccount.createEmail)}
                    helperText={errorsCreateAccount.createEmail?.message}
                  />
                  <TextField
                    id="createPassword"
                    label="Create Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("createPassword")}
                    error={Boolean(errorsCreateAccount.createPassword)}
                    helperText={errorsCreateAccount.createPassword?.message}
                  />
                  <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("confirmPassword")}
                    error={Boolean(errorsCreateAccount.confirmPassword)}
                    helperText={errorsCreateAccount.confirmPassword?.message}
                  />
                </>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={
                  formType === "signin" ? loadingSignIn : loadingCreateAccount
                }
                sx={{ mt: 2 }}
              >
                {formType === "signin" ? (
                  loadingSignIn ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Sign In"
                  )
                ) : loadingCreateAccount ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
