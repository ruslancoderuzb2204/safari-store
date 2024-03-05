"use client";
import React from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
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

const CreateAccountForm = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form className="w-1/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="firstName"
        label="First Name"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("firstName")}
        error={Boolean(errors?.firstName)}
        helperText={errors.firstName?.message}
      />
      <TextField
        id="lastName"
        label="Last Name"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("lastName")}
        error={Boolean(errors?.lastName)}
        helperText={errors.lastName?.message}
      />
      <TextField
        id="createEmail"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("createEmail")}
        error={Boolean(errors?.createEmail)}
        helperText={errors.createEmail?.message}
      />
      <TextField
        id="createPassword"
        label="Create Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("createPassword")}
        error={Boolean(errors?.createPassword)}
        helperText={errors.createPassword?.message}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("confirmPassword")}
        error={Boolean(errors?.confirmPassword)}
        helperText={errors.confirmPassword?.message}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
};

export default CreateAccountForm;
