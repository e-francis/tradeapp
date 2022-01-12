import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { useAuth } from "./authContext";
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
  const { SignupForm } = useAuth()

  function handleSubmitButton(e) {
    e.preventDefault()

    Signup(FullName.current.value, Email.current.value, Password22G.current.value, "Confirm Password".current.value)

    
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="firstName" placeholder="Frst Name" />
        <Input type="lastName" placeholder="Last Name" />
        <Input type="email"  placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
