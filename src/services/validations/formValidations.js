// All fields for form validations are defined here. Can be destructured as required. Signin / signup page has similar example
import Joi from "joi";
import { PASSWORD_VALIDATION } from "../utils/constantValues";

const formValidations = {
  password: Joi.string()
    .pattern(new RegExp(PASSWORD_VALIDATION))
    .min(4)
    .required(),
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .required(),
};
export default formValidations;
