/*
This file is responsible for signup page.
Here we are using redux to store data in user slice.
We are using react-form-hooks for handling forms.
 More information about how all the services of this page is working , can be found in README.md file
 */

import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  BUTTON_VALUES,
  FIELD_TYPE,
  REGISTER_FIELDS_FOR_REACT_FORM_HOOK,
  ROUTE_CONFIG_NAMES,
  SIGNUP_CONSTANTS,
  COMPONENT_TYPES,
  MATERIAL_STYLE_CONSTANTS,
} from "../services/utils/constantValues";
import { userActions } from "../redux/slices/users/userSlice";
import Joi from "joi";
import formValidations from "../services/validations/formValidations";

const SignUpFrom = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { name, password, phone, email } = formValidations;

  const signupSchema = Joi.object({
    name,
    password,
    phone,
    email,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: joiResolver(signupSchema),
  });

  const onSubmit = (data) => {
    // dispatching action to store user data in redux store
    dispatch(userActions.storeUser(data));
    navigate(`/${ROUTE_CONFIG_NAMES.signin}`);
  };

  return (
    <Box m={2}>
      <Typography m={2} variant="h5" align={MATERIAL_STYLE_CONSTANTS.center}>
        {t(SIGNUP_CONSTANTS.title)}
      </Typography>
      <Box component={COMPONENT_TYPES.form} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            error={errors.name ? true : false}
            label={t(SIGNUP_CONSTANTS.username)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.name)}
            helperText={errors.name && `${errors.name.message}`}
          />
          <TextField
            error={errors.phone ? true : false}
            label={t(SIGNUP_CONSTANTS.phone)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.phone)}
            helperText={errors.phone && `${errors.phone?.message}`}
          />
          <TextField
            error={errors.email ? true : false}
            label={t(SIGNUP_CONSTANTS.email)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.email)}
            helperText={errors.email && `${errors.email?.message}`}
          />
          <TextField
            type={FIELD_TYPE.password}
            error={errors.password ? true : false}
            label={t(SIGNUP_CONSTANTS.password)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.password)}
            helperText={errors.password && `${errors.password?.message}`}
          />
        </Stack>
        <Box
          mt={2}
          sx={{
            display: MATERIAL_STYLE_CONSTANTS.flex,
            alignItems: MATERIAL_STYLE_CONSTANTS.center,
            justifyContent: MATERIAL_STYLE_CONSTANTS.center,
          }}
        >
          <Button type={"submit"} variant={BUTTON_VALUES.buttonVariant}>
            {t(SIGNUP_CONSTANTS.signupBtn)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default SignUpFrom;
