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
