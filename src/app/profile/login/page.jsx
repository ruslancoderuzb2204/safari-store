"use client";
import React from "react";
import { TextField, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email format").min(1),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const router = useRouter();

  const onSubmit = (data) => {
    localStorage.setItem("token", data.password);
    router.push("/", { scroll: false });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("email")}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("password")}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginPage;
