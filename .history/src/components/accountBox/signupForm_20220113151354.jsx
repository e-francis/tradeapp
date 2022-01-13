import React, { useContext } from "react";
import { useFormik } from "formik";
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

export function SignupForm(_props) {
  const { switchToSignin } = useContext(AccountContext);
  

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({initialValues: { 
  firstName: "", 
  lastName: "", 
  email: "", 
  password: "", 
  confirmPassword: "",
}, 
    validateOnBlur: true,
    onSubmit,
});
  


  return (
    <BoxContainer>
      <FormContainer onSubmit={formik.handleSubmit} >
        <Input name="firstName"  placeholder="Frst Name" value={formik.values.firstName} onChange={formik.handleChange}/>
        <Input name="lastName" placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange}/>
        <Input name="email"  placeholder="Email" value={formik.values.email} onChange={formik.handleChange}/>
        <Input name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange}/>
        <Input name="confirmPassword" placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={formik.handleChange}/>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit">SignUp</SubmitButton>
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
