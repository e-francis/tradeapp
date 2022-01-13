import React, { useRef, useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="firstName"  placeholder="Frst Name" />
        <Input type="lastName" placeholder="Last Name" />
        <Input type="email"  placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="passwordConfirm" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
