import React, { useRef, useContext, useState } from "react";
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

export default function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { SignupForm } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmitButton(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match')
    }

    try {
      setError('')
      setLoading(true)
     await SignupForm(firstNameRef.current.value, lastNameRef.current.value, emailRef.current.value, passwordRef.current.value, passwordConfirmRef.current.value)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmitButton}>
        <Input type="firstName" ref={firstNameRef} placeholder="Frst Name" />
        <Input type="lastName" ref={lastNameRef} placeholder="Last Name" />
        <Input type="email"  ref={emailRef} placeholder="Email" />
        <Input type="password" ref={passwordRef} placeholder="Password" />
        <Input type="passwordConfirm" ref={passwordConfirmRef} placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton disabled={loading}>Signup</SubmitButton>
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
