import * as Yup from "yup";

export const validtionForEmailPassword = () => {
  return Yup.object({
    email: Yup.string().email("Invalid email address").required("*required"),
    password: Yup.string()
      .required("*required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
};

export const validationForAppointment = () => {
  return Yup.object({
    firstName: Yup.string()
      .min(2, "minimum 2 characters required")
      .required("required"),
    lastName: Yup.string()
      .min(1, "minimum 2 characters required")
      .required(" required"),
    email: Yup.string().email("Invalid email address").required("required"),
    phone: Yup.string().required().min(9),
    date: Yup.date().min(new Date(), "Date already passed"),
    location: Yup.string().required("requied"),
  });
};

export const shippingFormValidation = () => {
  return [
    Yup.object({
      firstName: Yup.string().min(3).required("required"),
      lastName: Yup.string().required("required"),
      addressA: Yup.string().required("required").min(3),
      city: Yup.string().required("required"),
      state: Yup.string().required("required"),
      zipcode: Yup.string()
        .required("requied")
        .matches(/^[0-9]+$/, "Invalid zipcode"),
    }),
    Yup.object({
      cardName: Yup.string().min(3).required("required"),
      cardNo: Yup.string().required("required"),
      cvv: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .test("len", (value) => value && value.length === 3),
      expireDate: Yup.date().min(new Date(), "Date already passed"),
    }),
  ];
};
