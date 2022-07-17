import { Formik } from "formik";
import React from "react";
import { Input } from "../../components/Input";

const SignUpComp = () => {
  const onSubmit = (values) => {
    console.log("values are submitted on", values);
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {(props) => {
        <form>
          <Input name="email" type="text"></Input>
          <Input name="password" type="password"></Input>
          <button type="submit"></button>
        </form>;
      }}
    </Formik>
  );
};

export default SignUpComp;
