import type { NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled"; 
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";

import { CenteredTile } from "../components/Tile";
import { Input } from "../components/Input/Input";

import { Button } from "../components/Button/Button";
import { StyledLink } from "../components/StyledLink";
import { ConditionalFeedback } from "../components/Input/Feedback";
import { login, selectUser } from "../services/userSlice";
import { AppDispatch, RootState } from "@/store";

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

export type LoginForm = {
  identifier: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const router = useRouter();

  const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  if (Boolean(jwt) && !error) {
    router.push("/user");
  }

  const onSubmit = (data: LoginForm) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredTile header="Login">
        <StyledInput
          label="Identifier"
          placeholder="username or email"
          feedback={
            <ConditionalFeedback>{errors.identifier?.message}</ConditionalFeedback>
          }
          height={8}
          {...register("identifier", {
            required: "Required field!",
            minLength: { value: 6, message: "Min length 6!" },
          })}
        />
        <StyledInput
          label="Password"
          type="password"
          placeholder="password"
          role="textbox"
          feedback={
           <ConditionalFeedback>{errors.password?.message}</ConditionalFeedback>
          }
          height={8}
          {...register("password", {
            required: "Required field!",
            minLength: { value: 8, message: "Min length 8!" },
          })}
        />
        <Button type="submit">Sign In</Button>
        <h3>
          <Link href="/registration" passHref>
            <StyledLink underline>Create account</StyledLink>
          </Link>
        </h3>
      </CenteredTile>
    </form>
  );
};

export default Login;